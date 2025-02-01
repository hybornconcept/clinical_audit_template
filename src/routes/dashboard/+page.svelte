<script lang="ts">
    import {Library, ChevronDown, Baby, Ambulance, PersonStanding} from "lucide-svelte";
    import { exportToCSV } from "$lib";
    import { MediaQuery } from "svelte/reactivity";
    import * as Pagination from "$lib/components/ui/pagination/index.js";
    import type { PageData } from './$types';
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    
  
    type StatsCardProps = {
      title: string;
      value: number | string;
      description: string;
      icon: any; // Using any for Lucide icon components
    };
  
    let { data } = $props<{ data: PageData }>();
  
    let searchQuery = $state('');
    let selectedStatus = $state('');
    let selectedFacility = $state('');
    let currentPage = $state(1);

    const mediaQuery = new MediaQuery("(min-width: 768px)");
    let isDesktop = $state(mediaQuery.current);
    $effect(() => {
      isDesktop = mediaQuery.current;
    });
    
    const perPage = $derived(isDesktop ? 10 : 5);
    const siblingCount = $derived(isDesktop ? 1 : 0);
  
    // Format currency helper
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };
  
    // Format date helper
    const formatDate = (date: string) => {
        return new Date(date).toISOString().split('T')[0];
    };

    // Text slicer helper
    const slicer = (text: string | null | undefined, maxLength: number = 15): string => {
        if (!text) return '';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const filteredSubmissions = $derived(
      data.recentSubmissions.filter((submission: ClinicalAuditRecord) => {
        const matchesSearch = searchQuery === '' || 
          Object.values(submission).some(value => 
            value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
          );
        
        const matchesStatus = selectedStatus === '' || selectedStatus === 'All' || 
          submission.sex === selectedStatus;

        const matchesFacility = selectedFacility === '' || selectedFacility === 'All' ||
          submission.facility === selectedFacility;

        return matchesSearch && matchesStatus && matchesFacility;
      })
    );

    const paginatedSubmissions = $derived(
      filteredSubmissions.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
      )
    );

    const totalPages = $derived(Math.ceil(filteredSubmissions.length / perPage));

    function handleExport() {
      if (data.recentSubmissions.length > 0) {
        exportToCSV(data.recentSubmissions, 'clinical-audit-records.csv');
      }
    }

    function onPageChange(page: number) {
      currentPage = page;
    }

    function calculateAge(birthDate: string, deathDate: string): number {
      const birth = new Date(birthDate);
      const death = new Date(deathDate);
      const ageInMilliseconds = death.getTime() - birth.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      return Math.floor(ageInYears);
    }

    const pediatricDeaths = $derived(data.recentSubmissions.filter(
      (s: ClinicalAuditRecord) => calculateAge(s.dateOfBirth, s.dateOfDeath) < 15
    ).length);

    const adultDeaths = $derived(data.recentSubmissions.filter(
      (s: ClinicalAuditRecord) => calculateAge(s.dateOfBirth, s.dateOfDeath) >= 15
    ).length);

    const statsCards = [
      {
        title: "Total Records",
        value: data.totalRecords,
        description: "Total clinical audit records",
        icon: Library
      },
      {
        title: "No. of Pediatric Death",
        value: pediatricDeaths,
        description: "Deaths under 15 years",
        icon: Baby
      },
      {
        title: "No. of Adult Death",
        value: adultDeaths,
        description: "Deaths 15 years and above",
        icon: PersonStanding
      },
      {
        title: "No. of HIV Related death",
        value: data.recentSubmissions.filter((s: ClinicalAuditRecord) => 
          s.hIVRelatedDeath?.toLowerCase().includes('Yes')
        ).length,
        description: "HIV/AIDS related deaths",
        icon: Ambulance
      }
    ];
</script>
  
{#snippet statsCard(props: StatsCardProps)}
  <Card.Root class="bg-transparent">
    <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
      <Card.Title class="text-sm font-medium">{props.title}</Card.Title>
      <props.icon class="text-muted-foreground h-4 w-4" />
    </Card.Header>
    <Card.Content>
      <div class="text-2xl font-bold">{props.value}</div>
      <p class="text-muted-foreground text-xs">{props.description}</p>
    </Card.Content>
  </Card.Root>
{/snippet}

<div class="flex min-h-screen w-full flex-col">

    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="mx-auto w-full max-w-7xl">
        <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mb-10">
          {#each statsCards as card}
            {@render statsCard(card)}
          {/each}
        </div>
        <div class="w-full">
          <div class=" flex items-center justify-between py-4 border-b">
              <div class="flex items-center gap-2">
                <Input
                  placeholder="Search records..."
                  value={searchQuery}
                  oninput={(e) => searchQuery = e.currentTarget.value}
                  class="w-[400px]"
                />
              </div>
              <div class="flex items-center gap-2">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="outline">
                      {selectedStatus || "Filter by Sex"} <ChevronDown class="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item onSelect={() => selectedStatus = "All"}>All</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => selectedStatus = "Male"}>Male</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => selectedStatus = "Female"}>Female</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>

               
                
                <Button 
                  variant="outline"
                  onclick={handleExport}
                >
                  Export to CSV
                </Button>
              </div>
            </div>
          <Card.Root class="bg-transparent">
            <Card.Header class="flex flex-row items-center">
              <div class="grid gap-2">
                <Card.Title>Template Submissions</Card.Title>
                <Card.Description>clinical audit records.</Card.Description>
              </div>
            </Card.Header>
         
            <Card.Content class="overflow-x-auto">
              <Table.Root class="w-full">
                <Table.Header>
                  <Table.Row>
                    <Table.Head class="font-bold text-white whitespace-nowrap">Patient ID</Table.Head>
                    <Table.Head class="font-bold text-white whitespace-nowrap">Facility</Table.Head>
                    <Table.Head class="font-bold text-white whitespace-nowrap">Sex</Table.Head>
                    <Table.Head class="font-bold text-white whitespace-nowrap">Age at Death</Table.Head>
                    <Table.Head class="font-bold text-white whitespace-nowrap">ART Start Date</Table.Head>
                    <Table.Head class="font-bold text-white whitespace-nowrap">HIV Related Death</Table.Head>
                    <Table.Head class="font-bold text-white whitespace-nowrap">Cause of Death</Table.Head>
               
                    <Table.Head class="font-bold text-white whitespace-nowrap">Reviewer</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {#if !data.success}
                    <Table.Row>
                      <Table.Cell colspan={9} class="text-center text-destructive">
                        Error loading data. Please try again.
                      </Table.Cell>
                    </Table.Row>
                  {:else if paginatedSubmissions.length === 0}
                    <Table.Row>
                      <Table.Cell colspan={9} class="text-center">
                        No records found.
                      </Table.Cell>
                    </Table.Row>
                  {:else}
                    {#each paginatedSubmissions as submission: ClinicalAuditRecord (submission.uniquePatientId)}
                      <Table.Row>
                        <Table.Cell class="whitespace-nowrap" title={submission.uniquePatientId}>
                          {slicer(submission.uniquePatientId)}
                        </Table.Cell>
                        <Table.Cell class="whitespace-nowrap" title={submission.facility}>
                          {slicer(submission.facility)}
                        </Table.Cell>
                        <Table.Cell class="whitespace-nowrap">{submission.sex}</Table.Cell>
                        <Table.Cell class="whitespace-nowrap">{calculateAge(submission.dateOfBirth, submission.dateOfDeath)} years</Table.Cell>
                        <Table.Cell class="whitespace-nowrap">{submission.artStartDate}</Table.Cell>
                        <Table.Cell class="whitespace-nowrap">{submission.hIVRelatedDeath}</Table.Cell>
                        <Table.Cell class="whitespace-nowrap" title={submission.causeOfDeath}>
                          {slicer(submission.causeOfDeath)}
                        </Table.Cell>
               
                        <Table.Cell class="whitespace-nowrap" title={submission.reviewerName}>
                          {slicer(submission.reviewerName)}
                        </Table.Cell>
                      </Table.Row>
                    {/each}
                  {/if}
                </Table.Body>
              </Table.Root>

              <!-- Pagination -->
              <div class="mt-4">
                <Pagination.Root 
                  count={filteredSubmissions.length} 
                  {perPage} 
                  {siblingCount}
                  page={currentPage}
                  onPageChange={onPageChange}
                >
                  {#snippet children({ pages, currentPage: activePage })}
                    <Pagination.Content>
                      <Pagination.Item>
                        <Pagination.PrevButton />
                      </Pagination.Item>
                      {#each pages as page (page.key)}
                        {#if page.type === "ellipsis"}
                          <Pagination.Item>
                            <Pagination.Ellipsis />
                          </Pagination.Item>
                        {:else}
                          <Pagination.Item>
                            <Pagination.Link {page} isActive={activePage === page.value}>
                              {page.value}
                            </Pagination.Link>
                          </Pagination.Item>
                        {/if}
                      {/each}
                      <Pagination.Item>
                        <Pagination.NextButton />
                      </Pagination.Item>
                    </Pagination.Content>
                  {/snippet}
                </Pagination.Root>
              </div>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </main>
  </div>
  