$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        makePredictions();
    });
});

// Function to make predictions by sending form data to the Flask backend
function makePredictions() {
    // Collect input values from the left column
    var age = $("#age").val();
    var gender = $("#gender").val();
    var ethnicity = $("#ethnicity").val();
    var socioeconomic_status = $("#socioeconomicStatus").val();
    var education_level = $("#educationLevel").val();
    var bmi = $("#bmi").val();
    var alcohol_consumption = $("#alcoholConsumption").val();
    var physical_activity = $("#physicalActivity").val();
    var diet_quality = $("#dietQuality").val();
    var sleep_quality = $("#sleepQuality").val();
    var systolic_bp = $("#systolicBP").val();
    var diastolic_bp = $("#diastolicBP").val();
    var fasting_blood_sugar = $("#fastingBloodSugar").val();
    var hba1c = $("#hba1c").val();
    var serum_creatinine = $("#serumCreatinine").val();
    var bun_levels = $("#bunLevels").val();
    var gfr = $("#gfr").val();
    var protein_in_urine = $("#proteinInUrine").val();
    var acr = $("#acr").val();
    var serum_electrolytes_sodium = $("#serumElectrolytesSodium").val();
    var serum_electrolytes_potassium = $("#serumElectrolytesPotassium").val();
    var serum_electrolytes_calcium = $("#serumElectrolytesCalcium").val();
    var serum_electrolytes_phosphorus = $("#serumElectrolytesPhosphorus").val();
    var hemoglobin_levels = $("#hemoglobinLevels").val();
    var cholesterol_total = $("#cholesterolTotal").val();
    var cholesterol_ldl = $("#cholesterolLDL").val();
    var cholesterol_hdl = $("#cholesterolHDL").val();
    var cholesterol_triglycerides = $("#cholesterolTriglycerides").val();
    
    // Collect new fields
    var nsaids_use = $("#nsaidsUse").val();
    var fatigue_levels = $("#fatigueLevels").val();
    var nausea_vomiting = $("#nauseaVomiting").val();
    var muscle_cramps = $("#muscleCramps").val();
    var itching = $("#itching").val();
    var quality_of_life_score = $("#qualityOfLifeScore").val();
    var medical_checkups_frequency = $("#medicalCheckupsFrequency").val();
    var medication_adherence = $("#medicationAdherence").val();
    var health_literacy = $("#healthLiteracy").val();

    // Collect checkbox values from the right column
    var family_history_kidney_disease = $("#familyHistoryKidneyDisease").is(':checked') ? 1 : 0;
    var family_history_hypertension = $("#familyHistoryHypertension").is(':checked') ? 1 : 0;
    var family_history_diabetes = $("#familyHistoryDiabetes").is(':checked') ? 1 : 0;
    // var previous_aki = $("#previousAcuteKidneyInjury").is(':checked') ? 1 : 0;
    var uti = $("#urinaryTractInfections").is(':checked') ? 1 : 0;
    var ace_inhibitors = $("#aceInhibitors").is(':checked') ? 1 : 0;
    var diuretics = $("#diuretics").is(':checked') ? 1 : 0;
    var statins = $("#statins").is(':checked') ? 1 : 0;
    var antidiabetic_medications = $("#antidiabeticMedications").is(':checked') ? 1 : 0;
    var edema = $("#edema").is(':checked') ? 1 : 0;
    var heavy_metals_exposure = $("#heavyMetalsExposure").is(':checked') ? 1 : 0;
    var occupational_exposure_chemicals = $("#occupationalExposureChemicals").is(':checked') ? 1 : 0;
    var smoking = $("smoking").is(":checked") ? 1 : 0;
    var previous_acute_kidney_injury = $("#previousAcuteKidneyInjury").is(':checked') ? 1 : 0;

    // Collect waterQuality from radio buttons
    var water_quality = $('input[name="waterQuality"]:checked').val();

    // Create the payload object with all collected data
    var payload = {
        "age": parseInt(age),
        "gender": parseInt(gender),
        "ethnicity": parseInt(ethnicity),
        "socioeconomic_status": parseInt(socioeconomic_status),
        "education_level": parseInt(education_level),
        "bmi": parseFloat(bmi),
        "alcohol_consumption": parseInt(alcohol_consumption),
        "physical_activity": parseFloat(physical_activity),
        "diet_quality": parseInt(diet_quality),
        "sleep_quality": parseInt(sleep_quality),
        "systolic_bp": parseInt(systolic_bp),
        "diastolic_bp": parseInt(diastolic_bp),
        "fasting_blood_sugar": parseInt(fasting_blood_sugar),
        "hba1c": parseFloat(hba1c),
        "serum_creatinine": parseFloat(serum_creatinine),
        "bun_levels": parseInt(bun_levels),
        "gfr": parseInt(gfr),
        "protein_in_urine": parseFloat(protein_in_urine),
        "acr": parseInt(acr),
        "serum_electrolytes_sodium": parseFloat(serum_electrolytes_sodium),
        "serum_electrolytes_potassium": parseFloat(serum_electrolytes_potassium),
        "serum_electrolytes_calcium": parseFloat(serum_electrolytes_calcium),
        "serum_electrolytes_phosphorus": parseFloat(serum_electrolytes_phosphorus),
        "hemoglobin_levels": parseFloat(hemoglobin_levels),
        "cholesterol_total": parseInt(cholesterol_total),
        "cholesterol_ldl": parseInt(cholesterol_ldl),
        "cholesterol_hdl": parseInt(cholesterol_hdl),
        "cholesterol_triglycerides": parseInt(cholesterol_triglycerides),
        "family_history_kidney_disease": family_history_kidney_disease,
        "family_history_hypertension": family_history_hypertension,
        "family_history_diabetes": family_history_diabetes,
        // "previous_aki": previous_aki,
        "uti": uti,
        "ace_inhibitors": ace_inhibitors,
        "diuretics": diuretics,
        "statins": statins,
        "antidiabetic_medications": antidiabetic_medications,
        "edema": edema,
        "heavy_metals_exposure": heavy_metals_exposure,
        "occupational_exposure_chemicals": occupational_exposure_chemicals,
        "smoking": parseInt(smoking),
        "nsaids_use": parseInt(nsaids_use),
        "fatigue_levels": parseInt(fatigue_levels),
        "nausea_vomiting": parseInt(nausea_vomiting),
        "muscle_cramps": parseInt(muscle_cramps),
        "itching": parseInt(itching),
        "quality_of_life_score": parseInt(quality_of_life_score),
        "water_quality": parseInt(water_quality),
        "medical_checkups_frequency": parseInt(medical_checkups_frequency),
        "medication_adherence": parseInt(medication_adherence),
        "health_literacy": parseInt(health_literacy),
        "previous_acute_kidney_injury": parseInt(previous_acute_kidney_injury)
    };

    // Perform a POST request to the Flask API endpoint
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            console.log(returnedData);
            var prob = parseFloat(returnedData["prediction"]);

            if (prob > 0.5) {
                $("#output").text(`Based on the information entered, there is a ${Math.round(prob * 100)}% probability that you may be diagnosed with CKD. Please consult a healthcare professional for further testing and advice.`);
            } else {
                $("#output").text(`Great news! Based on the information entered, there is a ${Math.round(prob * 100)}% probability that you may be diagnosed with CKD. Please consult a healthcare professional for further testing and advice.`);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}
