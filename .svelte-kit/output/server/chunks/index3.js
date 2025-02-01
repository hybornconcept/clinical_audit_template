const COLUMN_HEADERS = {
  uniquePatientId: "Patient ID",
  facility: "Facility",
  sex: "Sex",
  dateOfBirth: "Date of Birth",
  artStartDate: "ART Start Date",
  lastPickupDate: "Last Pickup Date",
  dateOfDeath: "Date of Death",
  dateOfDeathConfirmed: "Date of Death Confirmed",
  deathInfoProvider: "Death Information Provider",
  deathInfoValidator: "Death Information Validator",
  hIVRelatedDeath: "HIV Related Death",
  causeOfDeath: "Cause of Death",
  comorbidConditions: "Comorbid Conditions",
  medicationsAndTreatments: "Medications & Treatments",
  primaryDiagnosis: "Primary Diagnosis",
  secondaryDiagnosis: "Secondary Diagnosis",
  symptomsPriorToDeath: "Symptoms Prior to Death",
  symptomsDurationMonths: "Symptoms Duration (Months)",
  diagnosticTestsAndResults: "Diagnostic Tests & Results",
  treatmentPriorToDeath: "Treatment Prior to Death",
  treatmentLocations: "Treatment Locations",
  treatmentResponse: "Treatment Response",
  locationOfDeath: "Location of Death",
  supportSystem: "Support System",
  socioeconomicStatus: "Socioeconomic Status",
  livingConditions: "Living Conditions",
  reviewerName: "Reviewer Name",
  dateOfReview: "Review Date"
};
function exportToCSV(data, filename) {
  if (!data.length) return;
  const headers = Object.values(COLUMN_HEADERS);
  const fields = Object.keys(COLUMN_HEADERS);
  const csvContent = [
    // Add headers
    headers.join(","),
    // Add data rows
    ...data.map(
      (record) => fields.map((field) => {
        const value = record[field];
        if (value === null || value === void 0) return "";
        if (typeof value === "string" && (value.includes(",") || value.includes('"') || value.includes("\n"))) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
      }).join(",")
    )
  ].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== void 0) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
const socioeconomicOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" }
];
const sexOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" }
];
const facilityOptions = [
  { value: "akamkpa_general_hospital", label: "Akamkpa General Hospital" },
  { value: "akani_esuk_health_centre", label: "Akani Esuk Health Centre" },
  { value: "akpabuyo_st_joseph_hospital", label: "Akpabuyo St Joseph Hospital" },
  { value: "akpet_central_cottage_hospital", label: "Akpet Central Cottage Hospital" },
  { value: "anantigha_primary_health_centre", label: "Anantigha Primary Health Centre" },
  { value: "anderson_primary_health_centre", label: "Anderson Primary Health Centre" },
  { value: "aningeje_primary_health_centre", label: "Aningeje Primary Health Centre" },
  { value: "aya_medical_centre", label: "Aya Medical Centre" },
  { value: "bakor_medical_centre", label: "Bakor Medical centre" },
  { value: "calabar_general_hospital", label: "Calabar General Hospital" },
  { value: "calabar_south_family_health_centre", label: "Calabar South Family Health Centre" },
  { value: "calabar_women_and_children_hospital", label: "Calabar Women and Children Hospital" },
  { value: "county_specialist_hospital", label: "County Specialist Hospital" },
  { value: "diamond_hill_health_centre", label: "Diamond Hill Health Centre" },
  { value: "dr_lawrence_henshaw_memorial_hospital", label: "Dr Lawrence Henshaw Memorial Hospital" },
  { value: "eja_memorial_hospital", label: "Eja Memorial Hospital" },
  { value: "ekana_medical_centre", label: "Ekana Medical Centre" },
  { value: "ekorinim_health_centre", label: "Ekorinim Health Centre" },
  { value: "ekpo_abasi_primary_health_centre", label: "Ekpo Abasi Primary Health Centre" },
  { value: "ekpri_obutong_health_centre", label: "Ekpri Obutong Health Centre" },
  { value: "emmanuel_infirmiry", label: "Emmanuel Infirmiry" },
  { value: "essierebom_primary_health_centre", label: "Essierebom Primary Health Centre" },
  { value: "faith_foundation_clinic", label: "Faith Foundation Clinic" },
  { value: "goldie_clinic", label: "Goldie Clinic" },
  { value: "henshaw_town_health_post", label: "Henshaw Town Health Post" },
  { value: "hiltop_healthcare_foundation", label: "Hiltop Healthcare Foundation" },
  { value: "holy_family_catholic_hospital", label: "Holy Family Catholic Hospital" },
  { value: "igbo_imabana_model_primary_health_centre", label: "Igbo-Imabana Model Primary Health Centre" },
  { value: "ikang_primary_health_centre", label: "Ikang Primary Health Centre" },
  { value: "ikot_edem_odo_health_centre", label: "Ikot Edem Odo Health Centre" },
  { value: "ikot_effiong_otop_comprehensive_health_centre_ucth_annex", label: "Ikot Effiong Otop Comprehensive Health Centre (UCTH Annex)" },
  { value: "ikot_ekpo_health_centre_ward_10", label: "Ikot Ekpo Health Centre (Ward 10)" },
  { value: "ishie_health_post", label: "Ishie Health Post" },
  { value: "kasuk_health_centre", label: "Kasuk Health Centre" },
  { value: "katchuan_irruan_model_phc", label: "Katchuan Irruan Model PHC" },
  { value: "mambo_clinic", label: "Mambo Clinic" },
  { value: "melrose_hospital", label: "Melrose Hospital" },
  { value: "mfamosing_primary_health_center", label: "Mfamosing Primary Health Center" },
  { value: "mma_efa_health_centre", label: "Mma Efa Health Centre" },
  { value: "mount_zion_medical_centre", label: "Mount Zion Medical Centre" },
  { value: "nyahasang_health_centre", label: "Nyahasang Health Centre" },
  { value: "oba_comprehensive_health_centre", label: "Oba Comprehensive Health Centre" },
  { value: "oban_health_centre", label: "Oban Health Centre" },
  { value: "obanliku_general_hospital", label: "Obanliku General Hospital" },
  { value: "obubra_general_hospital", label: "Obubra General Hospital" },
  { value: "obubra_maternal_and_child_health_clinic", label: "Obubra Maternal and Child Health Clinic" },
  { value: "obudu_clinic", label: "Obudu Clinic" },
  { value: "ogoja_catholic_maternity_hospital", label: "Ogoja Catholic Maternity Hospital" },
  { value: "ogoja_general_hospital", label: "Ogoja General Hospital" },
  { value: "ogoja_santa_maria_clinic", label: "Ogoja Santa Maria Clinic" },
  { value: "okpoma_general_hospital", label: "Okpoma General Hospital" },
  { value: "okundi_comprehensive_health_centre", label: "Okundi Comprehensive Health Centre" },
  { value: "peace_medical_centre", label: "Peace medical centre" },
  { value: "police_hospital", label: "Police Hospital" },
  { value: "sacred_heart_catholic_hospital", label: "Sacred Heart Catholic Hospital" },
  { value: "ugep_general_hospital", label: "Ugep General Hospital" },
  { value: "ukpem_general_hospital", label: "Ukpem General Hospital" },
  { value: "university_of_calabar_medical_centre", label: "University of Calabar Medical Centre" },
  { value: "university_of_calabar_teaching_hospital", label: "University of Calabar Teaching Hospital" },
  { value: "wanihem_comprehensive_health_centre", label: "Wanihem Comprehensive Health Centre" },
  { value: "yala_lutheran_hospital", label: "Yala Lutheran Hospital" },
  { value: "ikot_enebong_health_post", label: "Ikot Enebong Health Post" },
  { value: "obudu_urban1_primary_health_centre", label: "Obudu Urban1 Primary Health Centre" },
  { value: "cross_river_university_of_science_and_technology_crutech_medical_centre", label: "Cross River University of Science and Technology (CRUTECH) Medical Centre" }
];
const facilityValues = facilityOptions.map((option) => option.value);
const facilityValuesTuple = facilityValues;
export {
  socioeconomicOptions as a,
  facilityValuesTuple as b,
  exportToCSV as e,
  facilityOptions as f,
  sexOptions as s
};
