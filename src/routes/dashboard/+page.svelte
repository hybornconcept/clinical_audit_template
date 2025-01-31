<script lang="ts">
    import {Activity, ChevronDown, CircleUser, MoreHorizontal} from "lucide-svelte";
    import { exportToCSV } from "$lib";


    import Menu from "lucide-svelte/icons/menu";
    import Package2 from "lucide-svelte/icons/package-2";
    import Search from "lucide-svelte/icons/search";
    import Users from "lucide-svelte/icons/users";
    import FileText from "lucide-svelte/icons/file-text";
    import Calendar from "lucide-svelte/icons/calendar";
    import CheckCircle from "lucide-svelte/icons/check-circle";
    import Clock from "lucide-svelte/icons/clock";
    import Download from "lucide-svelte/icons/download";
    import type { PageData } from './$types';
  
    // import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
  
    let { data } = $props<{ data: PageData }>();
  
    let searchQuery = $state('');
    let selectedStatus = $state('');
  
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

    function handleExport() {
      exportToCSV(data.recentSubmissions, 'clinical-audit-records.csv');
    }
</script>
  
<div class="flex min-h-screen w-full flex-col">

    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="mx-auto w-full max-w-7xl">
        <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card.Root>
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-sm font-medium">Total Records</Card.Title>
              <FileText class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
              <div class="text-2xl font-bold">{data.totalRecords}</div>
              <p class="text-muted-foreground text-xs">Total clinical audit records</p>
            </Card.Content>
          </Card.Root>
          <Card.Root>
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-sm font-medium">Recent Submissions</Card.Title>
              <Activity class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
              <div class="text-2xl font-bold">{data.recentSubmissions.length}</div>
              <p class="text-muted-foreground text-xs">New records this month</p>
            </Card.Content>
          </Card.Root>
          <Card.Root>
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-sm font-medium">Completed Reviews</Card.Title>
              <CheckCircle class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
              <div class="text-2xl font-bold">{data.recentSubmissions.filter(s => s.dateOfReview).length}</div>
              <p class="text-muted-foreground text-xs">Reviews completed</p>
            </Card.Content>
          </Card.Root>
          <Card.Root>
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-sm font-medium">Pending Reviews</Card.Title>
              <Clock class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
              <div class="text-2xl font-bold">{data.recentSubmissions.filter(s => !s.dateOfReview).length}</div>
              <p class="text-muted-foreground text-xs">Awaiting review</p>
            </Card.Content>
          </Card.Root>
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
                      {selectedStatus || "Select Status"} <ChevronDown class="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item onSelect={() => selectedStatus = "All"}>All</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => selectedStatus = "Completed"}>Completed</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => selectedStatus = "Pending"}>Pending</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                
                <Button 
                  variant="outline"
                  onClick={handleExport}
                >
                  Export to CSV
                </Button>
              </div>
            </div>
          <Card.Root>
            <Card.Header class="flex flex-row items-center">
              <div class="grid gap-2">
                <Card.Title>Template Submissions</Card.Title>
                <Card.Description>clinical audit records.</Card.Description>
              </div>
            </Card.Header>
         
            <Card.Content class="overflow-x-auto">
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.Head class="font-bold">Patient ID</Table.Head>
                    <Table.Head class="font-bold">Sex</Table.Head>
                    <Table.Head class="font-bold">Date of Birth</Table.Head>
                    <Table.Head>ART Start Date</Table.Head>
                    <Table.Head>Date of Death</Table.Head>
                    <Table.Head>Cause of Death</Table.Head>
                    <Table.Head>Location of Death</Table.Head>
                    <Table.Head>Reviewer</Table.Head>
                    <Table.Head>Review Date</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {#if !data.success}
                    <Table.Row>
                      <Table.Cell colspan="8" class="text-center text-destructive">
                        Error loading data. Please try again.
                      </Table.Cell>
                    </Table.Row>
                  {:else if data.recentSubmissions.length === 0}
                    <Table.Row>
                      <Table.Cell colspan="8" class="text-center">
                        No records found.
                      </Table.Cell>
                    </Table.Row>
                  {:else}
                  {#each data.recentSubmissions as submission}
                    <Table.Row>
                      <Table.Cell>
                        <div class="font-medium truncate max-w-[150px]" title={submission.uniquePatientId}>
                          {submission.uniquePatientId}
                        </div>
                      </Table.Cell>
                      <Table.Cell class="truncate max-w-[150px]" title={submission.sex}>{submission.sex}</Table.Cell>
                      <Table.Cell>{submission.dateOfBirth}</Table.Cell>
                      <Table.Cell>{submission.artStartDate}</Table.Cell>
                      <Table.Cell>{formatDate(submission.dateOfDeath)}</Table.Cell>
                      <Table.Cell>{submission.causeOfDeath}</Table.Cell>
                      <Table.Cell>{submission.locationOfDeath}</Table.Cell>
                      <Table.Cell>
                        <div class="text-muted-foreground text-sm">
                          {submission.reviewerName}
                        </div>
                      </Table.Cell>
                      <Table.Cell>{formatDate(submission.dateOfReview)}</Table.Cell>
                    </Table.Row>
                  {/each}
                  {/if}
                </Table.Body>
              </Table.Root>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </main>
  </div>
  