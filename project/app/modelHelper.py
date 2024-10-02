import pandas as pd
import pickle
import numpy as np

class ModelHelper:
    def __init__(self):
        pass

    def makePredictions(
        self, age, gender, ethnicity, socioeconomic_status, education_level, bmi,
        smoking, alcohol_consumption, physical_activity, diet_quality, sleep_quality,
        family_history_kidney_disease, family_history_hypertension, family_history_diabetes,
        previous_acute_kidney_injury, urinary_tract_infections, systolic_bp, diastolic_bp,
        fasting_blood_sugar, hba1c, serum_creatinine, bun_levels, gfr, protein_in_urine,
        acr, serum_electrolytes_sodium, serum_electrolytes_potassium, serum_electrolytes_calcium,
        serum_electrolytes_phosphorus, hemoglobin_levels, cholesterol_total, cholesterol_ldl,
        cholesterol_hdl, cholesterol_triglycerides, ace_inhibitors, diuretics, nsaids_use, 
        statins, antidiabetic_medications, edema, fatigue_levels, nausea_vomiting, muscle_cramps, 
        itching, quality_of_life_score, heavy_metals_exposure, occupational_exposure_chemicals,
        water_quality, medical_checkups_frequency, medication_adherence, health_literacy
    ):
        # create dataframe of one row for inference
        df = pd.DataFrame({
            "Age": [age],
            "Gender": [gender],
            "Ethnicity": [ethnicity],
            "SocioeconomicStatus": [socioeconomic_status],
            "EducationLevel": [education_level],
            "BMI": [bmi],
            "Smoking": [smoking],
            "AlcoholConsumption": [alcohol_consumption],
            "PhysicalActivity": [physical_activity],
            "DietQuality": [diet_quality],
            "SleepQuality": [sleep_quality],
            "FamilyHistoryKidneyDisease": [family_history_kidney_disease],
            "FamilyHistoryHypertension": [family_history_hypertension],
            "FamilyHistoryDiabetes": [family_history_diabetes],
            "PreviousAcuteKidneyInjury": [previous_acute_kidney_injury],
            "UrinaryTractInfections": [urinary_tract_infections],
            "SystolicBP": [systolic_bp],
            "DiastolicBP": [diastolic_bp],
            "FastingBloodSugar": [fasting_blood_sugar],
            "HbA1c": [hba1c],
            "SerumCreatinine": [serum_creatinine],
            "BUNLevels": [bun_levels],
            "GFR": [gfr],
            "ProteinInUrine": [protein_in_urine],
            "ACR": [acr],
            "SerumElectrolytesSodium": [serum_electrolytes_sodium],
            "SerumElectrolytesPotassium": [serum_electrolytes_potassium],
            "SerumElectrolytesCalcium": [serum_electrolytes_calcium],
            "SerumElectrolytesPhosphorus": [serum_electrolytes_phosphorus],
            "HemoglobinLevels": [hemoglobin_levels],
            "CholesterolTotal": [cholesterol_total],
            "CholesterolLDL": [cholesterol_ldl],
            "CholesterolHDL": [cholesterol_hdl],
            "CholesterolTriglycerides": [cholesterol_triglycerides],
            "ACEInhibitors": [ace_inhibitors],
            "Diuretics": [diuretics],
            "NSAIDsUse": [nsaids_use],
            "Statins": [statins],
            "AntidiabeticMedications": [antidiabetic_medications],
            "Edema": [edema],
            "FatigueLevels": [fatigue_levels],
            "NauseaVomiting": [nausea_vomiting],
            "MuscleCramps": [muscle_cramps],
            "Itching": [itching],
            "QualityOfLifeScore": [quality_of_life_score],
            "HeavyMetalsExposure": [heavy_metals_exposure],
            "OccupationalExposureChemicals": [occupational_exposure_chemicals],
            "WaterQuality": [water_quality],
            "MedicalCheckupsFrequency": [medical_checkups_frequency],
            "MedicationAdherence": [medication_adherence],
            "HealthLiteracy": [health_literacy]
        })

        # Load the model
        model = pickle.load(open("Chronic_Kidney_Dsease_Model_Pipeline.h5", 'rb'))

        # Make predictions
        preds = model.predict_proba(df)
        return preds[0][1]
