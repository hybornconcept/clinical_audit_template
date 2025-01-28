<script lang="ts">
  import CircleUser from "lucide-svelte/icons/circle-user";

  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { zod } from 'sveltekit-superforms/adapters';
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label"
  import {
    superForm,
  } from "sveltekit-superforms";
  import {   step1Schema, step2Schema, step3Schema, step4Schema,personalInfoSchema  } from '$lib/schemas';
  import { Check } from 'lucide-svelte';
	import type { PageData } from './$types.ts';
  import { page } from '$app/stores';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const steps = [
		'Patient Information',
		'Medical History',
		'Clinical Information',
		'Social and Environmental Factors',
		'Reviewer Information'
	];
	
	let currentStep = $state(1);
	const totalSteps = 5;
	let isSubmitted = $state(false);
	let isConfirmed = $state(false);
	let validSteps: number[] = $state([]);

	const { form, errors, allErrors, constraints, enhance, delayed, validateForm, options, message, submitting } =
		superForm(data.form, {
			dataType: 'json',
			taintedMessage: 'The data you have entered will be lost. Are you sure you want to leave?',
			async onSubmit({ cancel }) {
				options.validators = [zod(step1Schema), zod(step2Schema), zod(step3Schema), zod(step4Schema), zod(personalInfoSchema)][currentStep - 1];

				const result = await validateForm({ update: true });

				if (!result.valid) {
					cancel();
					return;
				}

				// If it's valid, go to next step
				validSteps = [...validSteps, currentStep];
				if (currentStep < steps.length) {
					cancel();
					currentStep = currentStep + 1;
				}

				// If it's the last step, submit the form
				return;
			},
			async onUpdate({ result }) {
				if (result.type === 'success') {
					validSteps = [];
					currentStep = 1;
				}
			},
			async onResult({ result }) {
				if (result.type === 'success') {
					isSubmitted = true;
					document.scrollingElement?.scrollTo({
						top: 0,
						behavior: 'smooth'
					});
				}
			}
		});
  
  async function handleNext() {
    const currentStepFields = getCurrentStepFields(currentStep);
    
    // Validate current step
    options.validators = [
      zod(step1Schema), 
      zod(step2Schema), 
      zod(step3Schema), 
      zod(step4Schema), 
      zod(personalInfoSchema)
    ][currentStep - 1];

    const result = await validateForm({ update: true });

    if (!result.valid) {
      // Show errors and don't proceed
      return;
    }

    // If valid, proceed to next step
    validSteps = [...validSteps, currentStep];
    currentStep++;
  }
  
  function handlePrev() {
    if (currentStep > 1) {
      currentStep--;
    }
  }
  
  const progress = $derived((currentStep / totalSteps) * 100);

  const buttonText = $derived(
    $delayed ? 'Submitting...' : (currentStep === totalSteps ? 'Submit' : 'Next')
  );

  function getCurrentStepFields(step: number) {
    switch (step) {
      case 1:
        return ['uniquePatientId', 'sex', 'dateOfBirth', 'artStartDate', 
                'lastPickupDate', 'dateOfDeath', 'dateOfDeathConfirmed', 
                'deathInfoProvider', 'deathInfoValidator', 'causeOfDeath'];
      case 2:
        return ['comorbidConditions', 'medicationsAndTreatments', 
                'primaryDiagnosis', 'secondaryDiagnosis'];
      case 3:
        return ['symptomsPriorToDeath', 'symptomsDurationMonths', 
                'diagnosticTestsAndResults', 'treatmentPriorToDeath',
                'treatmentLocations', 'treatmentResponse', 'locationOfDeath'];
      case 4:
        return ['supportSystem', 'socioeconomicStatus', 'livingConditions'];
      case 5:
        return ['reviewerName', 'confirmReview'];
      default:
        return [];
    }
  }
</script>
{#if isSubmitted}
  <!-- Success View -->
  <div class="fixed inset-0 flex items-center justify-center bg-background">
    <div class="w-full max-w-md p-6 text-center space-y-6">
      <!-- Progress Steps -->
      <div class="flex justify-between mb-8">
        {#each Array(5) as _, i}
          <div class="flex items-center">
            <div class={`rounded-full w-8 h-8 flex items-center justify-center
              ${i < 5 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
              {i + 1}
            </div>
            {#if i < 4}
              <div class="h-[2px] w-12 bg-primary"></div>
            {/if}
          </div>
        {/each}
      </div>

      <div class="space-y-4">
        <h1 class="text-3xl font-semibold tracking-tight">Submission was Successful</h1>
        <p class="text-muted-foreground">
          Your response has been recorded. Feel free to close this window or register a new response by clicking the button below.
        </p>
      </div>

      <div class="mx-auto rounded-full bg-primary/10 p-6 text-primary w-fit">
        <Check class="h-16 w-16" />
      </div>

      <Button 
        class="w-full mt-8"
        size="lg"
        onclick={() => window.location.reload()}>
        Submit Another Response
      </Button>
    </div>
  </div>
{/if}
  <div class="flex min-h-screen w-full flex-col overflow-hidden">
    <header class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
   
    
    </header>
    <main
      class="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"
    >
      <div class="mx-auto grid w-full max-w-6xl gap-2">
        <h1 class="text-4xl font-bold text-center md:text-left mb-4"> Clinical Audit Template</h1>
      </div>
      <div
        class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
      >
        <!-- Vertical Progress Bar (replacing the nav) -->
        <div class="hidden md:flex flex-col items-start w-full">
          <div class="flex flex-col space-y-6 w-full">
            {#each [
              'Patient Information', 
              'Medical History', 
              'Clinical Information', 
              'Social and Environmental Factors',
              'Reviewer Information'
            ] as step, i}
              <div class="flex items-center gap-4 w-full">
                <div class={`rounded-full w-10 h-10 flex items-center justify-center shrink-0
                  ${currentStep > i ? 'bg-primary text-white' : 
                    currentStep === i ? 'border-2 border-primary text-primary' : 
                    'bg-muted text-muted-foreground'}`}>
                  {i + 1}
                </div>
                <span class={`text-sm font-medium whitespace-normal
                  ${currentStep >= i ? 'text-primary' : 'text-muted-foreground'}`}>
                  {step}
                </span>
              </div>
              {#if i < 4}
                <div class="ml-5 w-0.5 h-6 bg-border"></div>
              {/if}
            {/each}
          </div>
        </div>

        <!-- Form Content -->
        <div class="grid gap-6">
          <Card.Root>
            <Card.Header>
              <Card.Title>
                {#if currentStep === 1}
                  Patient Information
                {:else if currentStep === 2}
                  Medical History
                {:else if currentStep === 3}
                  Clinical Information
                {:else if currentStep === 4}
                  Social and Environmental Factors
                {:else}
                  Reviewer Information
                {/if}
              </Card.Title>
              <Card.Description>
                Please fill the form with detailed information.
              </Card.Description>
            </Card.Header>
            <Card.Content>
              {#if $allErrors.length > 0}
                <div class="bg-destructive/15 text-destructive p-4 rounded-md mb-4">
                  <p class="font-medium">Please fix the following errors:</p>
                  <ul class="list-disc pl-4 mt-2">
                    {#each $allErrors.filter(error => getCurrentStepFields(currentStep).includes(error.path[0])) as error}
                      <li>{error.messages.join('. ')}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
              <form 
                method="POST" 
                use:enhance
                class="space-y-6" 
                action="?/create"
                id="clinical-audit-form"
                on:submit|preventDefault={(e) => {
                  if (currentStep !== totalSteps) {
                    e.preventDefault();
                  }
                }}
              >
                {#if currentStep === 1}
                  <!-- PATIENT INFORMATION -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <Label for="uniquePatientId">Unique Patient ID</Label>
                      <Input 
                        id="uniquePatientId"
                        name="uniquePatientId"
                        bind:value={$form.uniquePatientId}
                        placeholder="Enter patient ID"
                        aria-invalid={$errors.uniquePatientId ? 'true' : undefined}
                        class={$errors.uniquePatientId ? 'border-destructive' : ''}
                      />
                      {#if $errors.uniquePatientId}
                        <span class="text-destructive text-sm">{$errors.uniquePatientId}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="sex">Sex</Label>
                      <select 
                        id="sex"
                        name="sex"
                        bind:value={$form.sex}
                        class={`w-full rounded-md border border-input bg-background px-3 py-2 ${
                          $errors.sex ? 'border-destructive' : ''
                        }`}
                        aria-invalid={$errors.sex ? 'true' : undefined}
                      >
                        <option value="">Select sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {#if $errors.sex}
                        <span class="text-destructive text-sm">{$errors.sex}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="dateOfBirth">Date of Birth</Label>
                      <Input 
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        bind:value={$form.dateOfBirth}
                        aria-invalid={$errors.dateOfBirth ? 'true' : undefined}
                        class={$errors.dateOfBirth ? 'border-destructive' : ''}
                      />
                      {#if $errors.dateOfBirth}
                        <span class="text-destructive text-sm">{$errors.dateOfBirth}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="artStartDate">ART Start Date</Label>
                      <Input 
                        id="artStartDate"
                        name="artStartDate"
                        type="date"
                        bind:value={$form.artStartDate}
                        aria-invalid={$errors.artStartDate ? 'true' : undefined}
                        class={$errors.artStartDate ? 'border-destructive' : ''}
                      />
                      {#if $errors.artStartDate}
                        <span class="text-destructive text-sm">{$errors.artStartDate}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="lastPickupDate">Last Pickup Date</Label>
                      <Input 
                        id="lastPickupDate"
                        name="lastPickupDate"
                        type="date"
                        bind:value={$form.lastPickupDate}
                        aria-invalid={$errors.lastPickupDate ? 'true' : undefined}
                        class={$errors.lastPickupDate ? 'border-destructive' : ''}
                      />
                      {#if $errors.lastPickupDate}
                        <span class="text-destructive text-sm">{$errors.lastPickupDate}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="dateOfDeath">Date of Death</Label>
                      <Input 
                        id="dateOfDeath"
                        name="dateOfDeath"
                        type="date"
                        bind:value={$form.dateOfDeath}
                        aria-invalid={$errors.dateOfDeath ? 'true' : undefined}
                        class={$errors.dateOfDeath ? 'border-destructive' : ''}
                      />
                      {#if $errors.dateOfDeath}
                        <span class="text-destructive text-sm">{$errors.dateOfDeath}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="dateOfDeathConfirmed">Date of Death Was Confirmed</Label>
                      <Input 
                        id="dateOfDeathConfirmed"
                        name="dateOfDeathConfirmed"
                        bind:value={$form.dateOfDeathConfirmed}
                        aria-invalid={$errors.dateOfDeathConfirmed ? 'true' : undefined}
                        class={$errors.dateOfDeathConfirmed ? 'border-destructive' : ''}
                      />
                      {#if $errors.dateOfDeathConfirmed}
                        <span class="text-destructive text-sm">{$errors.dateOfDeathConfirmed}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="deathInfoProvider">Death Information Provided By</Label>
                      <Input 
                        id="deathInfoProvider"
                        name="deathInfoProvider"
                        bind:value={$form.deathInfoProvider}
                        aria-invalid={$errors.deathInfoProvider ? 'true' : undefined}
                        class={$errors.deathInfoProvider ? 'border-destructive' : ''}
                      />
                      {#if $errors.deathInfoProvider}
                        <span class="text-destructive text-sm">{$errors.deathInfoProvider}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="deathInfoValidator">Death Information Validated By</Label>
                      <Input 
                        id="deathInfoValidator"
                        name="deathInfoValidator"
                        bind:value={$form.deathInfoValidator}
                        aria-invalid={$errors.deathInfoValidator ? 'true' : undefined}
                        class={$errors.deathInfoValidator ? 'border-destructive' : ''}
                      />
                      {#if $errors.deathInfoValidator}
                        <span class="text-destructive text-sm">{$errors.deathInfoValidator}</span>
                      {/if}
                    </div>

                    <!-- Textarea should span full width -->
                    <div class="space-y-2 md:col-span-2">
                      <Label for="causeOfDeath">Cause of Death (be very detailed)</Label>
                      <textarea 
                        id="causeOfDeath"
                        name="causeOfDeath"
                        bind:value={$form.causeOfDeath}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.causeOfDeath ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.causeOfDeath ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.causeOfDeath}
                        <span class="text-destructive text-sm">{$errors.causeOfDeath}</span>
                      {/if}
                    </div>
                  </div>
                {:else if currentStep === 2}
                  <!-- MEDICAL HISTORY -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <Label for="comorbidConditions">Comorbid Conditions (if any)</Label>
                      <textarea 
                        id="comorbidConditions"
                        name="comorbidConditions"
                        bind:value={$form.comorbidConditions}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.comorbidConditions ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.comorbidConditions ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.comorbidConditions}
                        <span class="text-destructive text-sm">{$errors.comorbidConditions}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="medicationsAndTreatments">Medications & Previous Treatments Prior to Death</Label>
                      <textarea 
                        id="medicationsAndTreatments"
                        name="medicationsAndTreatments"
                        bind:value={$form.medicationsAndTreatments}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.medicationsAndTreatments ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.medicationsAndTreatments ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.medicationsAndTreatments}
                        <span class="text-destructive text-sm">{$errors.medicationsAndTreatments}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="primaryDiagnosis">Primary Diagnosis (if any)</Label>
                      <textarea 
                        id="primaryDiagnosis"
                        name="primaryDiagnosis"
                        bind:value={$form.primaryDiagnosis}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.primaryDiagnosis ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.primaryDiagnosis ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.primaryDiagnosis}
                        <span class="text-destructive text-sm">{$errors.primaryDiagnosis}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="secondaryDiagnosis">Secondary Diagnosis (if any)</Label>
                      <textarea 
                        id="secondaryDiagnosis"
                        name="secondaryDiagnosis"
                        bind:value={$form.secondaryDiagnosis}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.secondaryDiagnosis ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.secondaryDiagnosis ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.secondaryDiagnosis}
                        <span class="text-destructive text-sm">{$errors.secondaryDiagnosis}</span>
                      {/if}
                    </div>
                  </div>
                {:else if currentStep === 3}
                  <!-- CLINICAL INFORMATION -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <Label for="symptomsPriorToDeath">Symptoms prior to death</Label>
                      <textarea 
                        id="symptomsPriorToDeath"
                        name="symptomsPriorToDeath"
                        bind:value={$form.symptomsPriorToDeath}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.symptomsPriorToDeath ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.symptomsPriorToDeath ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.symptomsPriorToDeath}
                        <span class="text-destructive text-sm">{$errors.symptomsPriorToDeath}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="diagnosticTestsAndResults">Diagnostic tests and results</Label>
                      <textarea 
                        id="diagnosticTestsAndResults"
                        name="diagnosticTestsAndResults"
                        bind:value={$form.diagnosticTestsAndResults}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.diagnosticTestsAndResults ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.diagnosticTestsAndResults ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.diagnosticTestsAndResults}
                        <span class="text-destructive text-sm">{$errors.diagnosticTestsAndResults}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="treatmentPriorToDeath">Treatment received prior to death</Label>
                      <textarea 
                        id="treatmentPriorToDeath"
                        name="treatmentPriorToDeath"
                        bind:value={$form.treatmentPriorToDeath}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.treatmentPriorToDeath ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.treatmentPriorToDeath ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.treatmentPriorToDeath}
                        <span class="text-destructive text-sm">{$errors.treatmentPriorToDeath}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="treatmentResponse">Response to treatment</Label>
                      <textarea 
                        id="treatmentResponse"
                        name="treatmentResponse"
                        bind:value={$form.treatmentResponse}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.treatmentResponse ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.treatmentResponse ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.treatmentResponse}
                        <span class="text-destructive text-sm">{$errors.treatmentResponse}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="symptomsDurationMonths">Duration of symptoms (months)</Label>
                      <Input 
                        id="symptomsDurationMonths"
                        name="symptomsDurationMonths"
                        bind:value={$form.symptomsDurationMonths}
                      />
                      {#if $errors.symptomsDurationMonths}
                        <span class="text-destructive text-sm">{$errors.symptomsDurationMonths}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="treatmentLocations">Location(s) treatment received</Label>
                      <Input 
                        id="treatmentLocations"
                        name="treatmentLocations"
                        bind:value={$form.treatmentLocations}
                      />
                      {#if $errors.treatmentLocations}
                        <span class="text-destructive text-sm">{$errors.treatmentLocations}</span>
                      {/if}
                    </div>

                    <div class="space-y-2 md:col-span-2">
                      <Label for="locationOfDeath">Location of death</Label>
                      <textarea 
                        id="locationOfDeath"
                        name="locationOfDeath"
                        bind:value={$form.locationOfDeath}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.locationOfDeath ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.locationOfDeath ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.locationOfDeath}
                        <span class="text-destructive text-sm">{$errors.locationOfDeath}</span>
                      {/if}
                    </div>
                  </div>
                {:else if currentStep === 4}
                  <!-- SOCIAL AND ENVIRONMENTAL FACTORS -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <Label for="supportSystem">Support system prior to death</Label>
                      <textarea 
                        id="supportSystem"
                        name="supportSystem"
                        bind:value={$form.supportSystem}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.supportSystem ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.supportSystem ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.supportSystem}
                        <span class="text-destructive text-sm">{$errors.supportSystem}</span>
                      {/if}
                    </div>

                    <div class="space-y-2">
                      <Label for="livingConditions">Living conditions prior to death</Label>
                      <textarea 
                        id="livingConditions"
                        name="livingConditions"
                        bind:value={$form.livingConditions}
                        class={`w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${
                          $errors.livingConditions ? 'border-destructive' : 'border-input'
                        }`}
                        aria-invalid={$errors.livingConditions ? 'true' : undefined}
                      ></textarea>
                      {#if $errors.livingConditions}
                        <span class="text-destructive text-sm">{$errors.livingConditions}</span>
                      {/if}
                    </div>

                    <div class="space-y-2 md:col-span-2">
                      <Label for="socioeconomicStatus">Socioeconomic status prior to death</Label>
                      <select 
                        id="socioeconomicStatus"
                        name="socioeconomicStatus"
                        bind:value={$form.socioeconomicStatus}
                        class={`w-full rounded-md border bg-background px-3 py-2 ${
                          $errors.socioeconomicStatus ? 'border-destructive' : 'border-input'
                        }`}
                      >
                        <option value="">Select status</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                      {#if $errors.socioeconomicStatus}
                        <span class="text-destructive text-sm">{$errors.socioeconomicStatus}</span>
                      {/if}
                    </div>
                  </div>
                {:else if currentStep === 5}
                  <!-- REVIEWER INFORMATION -->
                  <div class="grid grid-cols-1 gap-4">
                    <div class="space-y-2">
                      <Label for="reviewerName">Name of reviewer</Label>
                      <Input 
                        id="reviewerName"
                        name="reviewerName"
                        bind:value={$form.reviewerName}
                      />
                      {#if $errors.reviewerName}
                        <span class="text-destructive text-sm">{$errors.reviewerName}</span>
                      {/if}
                    </div>

                    <div class="space-y-2 md:col-span-2">
                      <div class="flex items-center space-x-2">
                        <Checkbox 
                          id="confirmReview"
                          bind:checked={$form.confirmReview}
                          aria-invalid={$errors.confirmReview ? 'true' : undefined}
                          class={$errors.confirmReview ? 'border-destructive' : ''}
                        />
                        <Label 
                          for="confirmReview" 
                          class="text-sm flex items-center"
                        >
                          I hereby confirm that the information provided in this form is accurate to the best of my knowledge and has been reviewed and validated by me.
                        </Label>
                      </div>
                      {#if $errors.confirmReview}
                        <span class="text-destructive text-sm">{$errors.confirmReview}</span>
                      {/if}
                    </div>
                  </div>
                {/if}
                
                <!-- Navigation Buttons -->
                <div class="flex justify-end gap-4 mt-6">
                  {#if currentStep > 1}
                    <Button 
                      variant="outline" 
                      type="button"
                      onclick={handlePrev}
                    >
                      Previous
                    </Button>
                  {/if}
                  
                  {#if currentStep === totalSteps}
                    <Button 
                      type="submit"
                      disabled={$delayed || !$form.confirmReview}
                      class={!$form.confirmReview ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      {buttonText}
                    </Button>
                  {:else}
                    <Button 
                      type="button"
                      onclick={handleNext}
                    >
                      Next
                    </Button>
                  {/if}
                </div>
              </form>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </main>
  </div>

