$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        makePredictions();
    });
});

// call Flask API endpoint
function makePredictions() {
    var sex_flag = $("#gender").val();
    var age = $("#age").val();
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
    var gender = $("#gender").val();
    var smoking = $("#smoking").val();
    var family_history_kidney_disease = $("#familyHistoryKidneyDisease").val();
    var family_history_hypertension = $("#familyHistoryHypertension").val();
    var family_history_diabetes = $("#familyHistoryDiabetes").val();
    var previous_aki = $("#previousAki").val();
    var uti = $("#uti").val();
    var kidney_stones = $("#kidneyStones").val();
    var hypertension = $("#hypertension").val();
    var diabetes = $("#diabetes").val();
    var obesity = $("#obesity").val();
    var heavy_metals_exposure = $("#heavyMetalsExposure").val();
    var occupational_exposure_chemicals = $("#occupationalExposureChemicals").val();
    var water_quality = $("#waterQuality").val();
    var ethnicity = $("#ethnicity").val();
    var socioeconomic_status = $("#socioeconomicStatus").val();
    var education_level = $("#educationLevel").val();

    // check if inputs are valid (optional, add your own validation logic here)

    // create the payload
    var payload = {
        "sex_flag": sex_flag,
        "age": age,
        "bmi": bmi,
        "alcohol_consumption": alcohol_consumption,
        "physical_activity": physical_activity,
        "diet_quality": diet_quality,
        "sleep_quality": sleep_quality,
        "systolic_bp": systolic_bp,
        "diastolic_bp": diastolic_bp,
        "fasting_blood_sugar": fasting_blood_sugar,
        "hba1c": hba1c,
        "serum_creatinine": serum_creatinine,
        "bun_levels": bun_levels,
        "gfr": gfr,
        "protein_in_urine": protein_in_urine,
        "gender": gender,
        "smoking": smoking,
        "family_history_kidney_disease": family_history_kidney_disease,
        "family_history_hypertension": family_history_hypertension,
        "family_history_diabetes": family_history_diabetes,
        "previous_aki": previous_aki,
        "uti": uti,
        "kidney_stones": kidney_stones,
        "hypertension": hypertension,
        "diabetes": diabetes,
        "obesity": obesity,
        "heavy_metals_exposure": heavy_metals_exposure,
        "occupational_exposure_chemicals": occupational_exposure_chemicals,
        "water_quality": water_quality,
        "ethnicity": ethnicity,
        "socioeconomic_status": socioeconomic_status,
        "education_level": education_level
    };

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);
            var prob = parseFloat(returnedData["prediction"]);

            if (prob > 0.5) {
                $("#output").text(`You are diagnosed with CDK with probability ${prob}!`);
            } else {
                $("#output").text(`You are not diagnosed with CDK with probability ${prob}, sorry. :(`);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}
