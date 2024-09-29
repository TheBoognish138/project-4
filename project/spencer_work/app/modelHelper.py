import pandas as pd
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(self, sex_flag, age, bmi, alcohol_consumption, physical_activity,
                        diet_quality, sleep_quality, systolic_bp, diastolic_bp, 
                        fasting_blood_sugar, hba1c, serum_creatinine, bun_levels, 
                        gfr, protein_in_urine, gender, smoking, family_history_kidney_disease,
                        family_history_hypertension, family_history_diabetes, previous_aki,
                        uti, kidney_stones, hypertension, diabetes, obesity, 
                        heavy_metals_exposure, occupational_exposure_chemicals, water_quality,
                        ethnicity, socioeconomic_status, education_level):
        
        # create dataframe of one row for inference
        df = pd.DataFrame({
            "Age": [age],
            "BMI": [bmi],
            "AlcoholConsumption": [alcohol_consumption],
            "PhysicalActivity": [physical_activity],
            "DietQuality": [diet_quality],
            "SleepQuality": [sleep_quality],
            "SystolicBP": [systolic_bp],
            "DiastolicBP": [diastolic_bp],
            "FastingBloodSugar": [fasting_blood_sugar],
            "HbA1c": [hba1c],
            "SerumCreatinine": [serum_creatinine],
            "BUNLevels": [bun_levels],
            "GFR": [gfr],
            "ProteinInUrine": [protein_in_urine],
            "Gender": [gender],
            "Smoking": [smoking],
            "FamilyHistoryKidneyDisease": [family_history_kidney_disease],
            "FamilyHistoryHypertension": [family_history_hypertension],
            "FamilyHistoryDiabetes": [family_history_diabetes],
            "PreviousAcuteKidneyInjury": [previous_aki],
            "UrinaryTractInfections": [uti],
            "KidneyStones": [kidney_stones],
            "Hypertension": [hypertension],
            "Diabetes": [diabetes],
            "Obesity": [obesity],
            "HeavyMetalsExposure": [heavy_metals_exposure],
            "OccupationalExposureChemicals": [occupational_exposure_chemicals],
            "WaterQuality": [water_quality],
            "Ethnicity": [ethnicity],
            "SocioeconomicStatus": [socioeconomic_status],
            "EducationLevel": [education_level]
        })

        # model
        model = pickle.load(open("Chronic_Kidney_Dsease_Model_Pipeline.h5", 'rb'))

        # columns in order
        df = df.loc[:, ['Pclass', 'Sex', 'Age', 'Fare', 'Embarked', 'Has_Cabin', 'Family_Size']]

        preds = model.predict_proba(df)
        return(preds[0][1])
