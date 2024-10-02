from flask import Flask, render_template, redirect, request, jsonify
from modelHelper import ModelHelper

# Create an instance of Flask
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

modelHelper = ModelHelper()

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    # Return template and data
    return render_template("home.html")

@app.route("/index")
def index():
    # Return template and data
    return render_template("index.html")

@app.route("/about_us")
def about_us():
    # Return template and data
    return render_template("about_us.html")

@app.route("/dashboard1")
def dashboard1():
    # Return template and data
    return render_template("dashboard1.html")

@app.route("/dashboard2")
def dashboard2():
    # Return template and data
    return render_template("dashboard2.html")

@app.route("/works_cited")
def works_cited():
    # Return template and data
    return render_template("works_cited.html")

@app.route("/makePredictions", methods=["POST"])
def make_predictions():
    content = request.json["data"]
    
    # Parse the input data
    age = float(content["age"])
    gender = int(content["gender"])
    ethnicity = int(content["ethnicity"])
    socioeconomic_status = int(content["socioeconomic_status"])
    education_level = int(content["education_level"])
    bmi = float(content["bmi"])
    smoking = bool(content["smoking"])
    alcohol_consumption = int(content["alcohol_consumption"])
    physical_activity = float(content["physical_activity"])
    diet_quality = int(content["diet_quality"])
    sleep_quality = int(content["sleep_quality"])
    systolic_bp = int(content["systolic_bp"])
    diastolic_bp = int(content["diastolic_bp"])
    fasting_blood_sugar = int(content["fasting_blood_sugar"])
    hba1c = float(content["hba1c"])
    serum_creatinine = float(content["serum_creatinine"])
    bun_levels = int(content["bun_levels"])
    gfr = int(content["gfr"])
    protein_in_urine = float(content["protein_in_urine"])
    acr = int(content["acr"])
    serum_electrolytes_sodium = float(content["serum_electrolytes_sodium"])
    serum_electrolytes_potassium = float(content["serum_electrolytes_potassium"])
    serum_electrolytes_calcium = float(content["serum_electrolytes_calcium"])
    serum_electrolytes_phosphorus = float(content["serum_electrolytes_phosphorus"])
    hemoglobin_levels = float(content["hemoglobin_levels"])
    cholesterol_total = int(content["cholesterol_total"])
    cholesterol_ldl = int(content["cholesterol_ldl"])
    cholesterol_hdl = int(content["cholesterol_hdl"])
    cholesterol_triglycerides = int(content["cholesterol_triglycerides"])
    family_history_kidney_disease = bool(content["family_history_kidney_disease"])
    family_history_hypertension = bool(content["family_history_hypertension"])
    family_history_diabetes = bool(content["family_history_diabetes"])
    previous_acute_kidney_injury = bool(content["previous_acute_kidney_injury"])
    urinary_tract_infections = bool(content["uti"])
    ace_inhibitors = bool(content["ace_inhibitors"])
    diuretics = bool(content["diuretics"])
    statins = bool(content["statins"])
    antidiabetic_medications = bool(content["antidiabetic_medications"])
    edema = bool(content["edema"])
    nsaids_use = int(content["nsaids_use"])
    fatigue_levels = int(content["fatigue_levels"])
    nausea_vomiting = int(content["nausea_vomiting"])
    muscle_cramps = int(content["muscle_cramps"])
    itching = int(content["itching"])
    quality_of_life_score = int(content["quality_of_life_score"])
    heavy_metals_exposure = bool(content["heavy_metals_exposure"])
    occupational_exposure_chemicals = bool(content["occupational_exposure_chemicals"])
    water_quality = int(content["water_quality"])
    medical_checkups_frequency = int(content["medical_checkups_frequency"])
    medication_adherence = int(content["medication_adherence"])
    health_literacy = int(content["health_literacy"])

    # Call your model prediction function (assuming it returns a single prediction)
    preds = modelHelper.makePredictions(
        age, gender, ethnicity, socioeconomic_status, education_level, bmi,
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
    )

    # Return the result as JSON
    return jsonify({"ok": True, "prediction": str(preds)})


#############################################################

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r

#main
if __name__ == "__main__":
    app.run(debug=True)
