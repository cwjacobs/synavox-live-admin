import { MedicineDataModel } from "../models/medicineDataModel"

export class Local_TestData {

    private static testCollection: MedicineDataModel[] = [
        new MedicineDataModel("Cholesterol", ["Atorvastatin", "Rosuvastatin", "Lipitor", "Crestor"]),
        new MedicineDataModel("Hypertension", ["Lisinopril", "Amlodipine", "Benicar", "Losartan", "Carvedilol"]),
        new MedicineDataModel("Diabetes-Type1", ["Apidra", "Lantus", "Humalog", "Novalog"]),
        new MedicineDataModel("Diabetes-Type2", ["Victoza", "Januvia", "Metformin", "Glucophage"]),
        new MedicineDataModel("Anticoagulants", ["Warfarin", "Acenocoumarol ", "Phenprocoumon", "Dabigatran", "Apixaban"]),
        new MedicineDataModel("nobleIQ", ["Craig Jacobs", "Lynn Jacobs", "Kurt Jacobs", "John Holderman", "Tyler Jacobs", "Katia Garcia"]),
    ];

    getTestCollection(): Array<MedicineDataModel> {
        return Local_TestData.testCollection;
    }

    getJsonData(): string {
        let json = JSON.stringify(Local_TestData.testCollection);
        return json;
    };
};
