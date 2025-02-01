// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface ClinicalAuditRecord {
		uniquePatientId: string;
		facility: string;
		sex: string;
		dateOfBirth: string;
		artStartDate: string;
		lastPickupDate: string;
		dateOfDeath: string;
		dateOfDeathConfirmed: string;
		deathInfoProvider: string;
		deathInfoValidator: string;
		hIVRelatedDeath: string;
		causeOfDeath: string;
		comorbidConditions: string;
		medicationsAndTreatments: string;
		primaryDiagnosis: string;
		secondaryDiagnosis: string;
		symptomsPriorToDeath: string;
		symptomsDurationMonths: string;
		diagnosticTestsAndResults: string;
		treatmentPriorToDeath: string;
		treatmentLocations: string;
		treatmentResponse: string;
		locationOfDeath: string;
		supportSystem: string;
		socioeconomicStatus: string;
		livingConditions: string;
		reviewerName: string;
		
		dateOfReview: string;
	}

	interface StatsCardProps {
		title: string;
		value: number | string;
		description: string;
		icon: any; // Using any for Lucide icon components
	}
}

export {};
