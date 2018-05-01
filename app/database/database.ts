import { Firestore } from "./firestore"
import { Configuration } from "./firebaseConfigs"
import { FirebaseConfig } from "./firebaseConfigs"
import { MedicineDataModel } from "../models/medicineDataModel"

// Import Firebase / Firestore definitions
//
import * as firebase from 'firebase'
import 'firebase/firestore'

export class Database {

    firestore_db: Firestore;
    firebaseConfig: FirebaseConfig;

    constructor() {
        this.firestore_db = new Firestore();
        this.firebaseConfig = new FirebaseConfig();
    }

    private static testCollection: MedicineDataModel[] = [
        new MedicineDataModel("Cholesterol", ["Atorvastatin", "Rosuvastatin", "Lipitor", "Crestor"]),
        new MedicineDataModel("Hypertension", ["Lisinopril", "Amlodipine", "Benicar", "Losartan", "Carvedilol"]),
        new MedicineDataModel("Diabetes-Type1", ["Apidra", "Lantus", "Humalog", "Novalog"]),
        new MedicineDataModel("Diabetes-Type2", ["Victoza", "Januvia", "Metformin", "Glucophage"]),
        new MedicineDataModel("Anticoagulants", ["Warfarin", "Acenocoumarol ", "Phenprocoumon", "Dabigatran", "Apixaban"]),
        new MedicineDataModel("nobleIQ", ["Craig Jacobs", "Lynn Jacobs", "Kurt Jacobs", "John Holderman", "Tyler Jacobs", "Katia Garcia"]),
    ];

    getTestCollection(): Array<MedicineDataModel> {
        return Database.testCollection;
    };

    initialize_db() {
        this.firestore_db.initialize(this.firebaseConfig.getFirebaseConfig("admin"));
    }

    // Gets every medication in the db, might need to add functionality as db grows
    //
    async getRemoteMedicineCollectionAsync(): Promise<Array<MedicineDataModel>> {
        let medicineCollection: Array<MedicineDataModel> = new Array<MedicineDataModel>();

        let querySnapshot: any = await this.getRemoteCollection("medicineCategories");
        return new Promise<Array<MedicineDataModel>>(function (resolve) {
            querySnapshot.forEach((doc: any) => {
                let medicineCategory: MedicineDataModel = new MedicineDataModel(doc.get("category"), doc.get("medicines"));
                medicineCollection.push(medicineCategory);
            });
            resolve(medicineCollection);
        });
    };

    // Gets Collection specified by requestedCollection
    //
    private getRemoteCollection(requestedCollection: string): Promise<any> {
        let self: Database = this;
        return new Promise<any>(function (resolve) {
            let collectionRef: firebase.firestore.CollectionReference = self.firestore_db.getDatabaseReference(requestedCollection);
            collectionRef.get().then((querySnapshot: any) => {
                resolve(querySnapshot);
            });
        });
    };
};
