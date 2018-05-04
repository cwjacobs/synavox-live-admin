import { FirestoreConfig } from "./firebaseConfigs"
import { SynavoxFirestore } from "./synavoxFirestore"
import { CategoryDataModel } from "../models/CategoryDataModel"
import { MedicineDataModel } from "../models/medicineDataModel";

// Import Firebase / Firestore definitions
//
import * as firebase from 'firebase'
import 'firebase/firestore'

export class Database {

    firestore_db: SynavoxFirestore;
    firestore_dbConfig: FirestoreConfig;

    constructor() {
        this.firestore_db = new SynavoxFirestore();
        this.firestore_dbConfig = new FirestoreConfig();
    }

    hide() {
        // static getTestCollection(): Array<CategoryDataModel> {

        //     let testCollection: Array<CategoryDataModel> =
        //         [
        //             {
        //                 category: "Cholesterol",
        //                 medicineList: [
        //                     {
        //                         aName: "Atorvastatin",
        //                         altName: "Lipitor",
        //                         manufacturer: "MSN Laboratories",
        //                         distributor: "Cardinal Health",
        //                         generic: true
        //                     },
        //                     {
        //                         aName: "Rosuvastatin",
        //                         altName: "Crestor",
        //                         manufacturer: "MSN Laboratories",
        //                         distributor: "McKesson",
        //                         generic: true
        //                     },
        //                     {
        //                         aName: "Lipitor",
        //                         altName: "Atorvastatin",
        //                         manufacturer: "Pfizer",
        //                         distributor: "Cardinal Health",
        //                         generic: false
        //                     },
        //                     {
        //                         aName: "Crestor",
        //                         altName: "Rosuvastatin",
        //                         manufacturer: "AstraZeneca",
        //                         distributor: "McKesson",
        //                         generic: false
        //                     }
        //                 ],
        //             },
        //             {
        //                 category: "Hypertension",
        //                 medicineList: [
        //                     {
        //                         aName: "Lisinopril",
        //                         altName: "Prinivil",
        //                         manufacturer: "Watson Pharmaceuticals",
        //                         distributor: "Cardinal Health",
        //                         generic: true
        //                     },
        //                     {
        //                         aName: "Amlodipine",
        //                         altName: "Norvasc",
        //                         manufacturer: "MSN Laboratories",
        //                         distributor: "Cardinal Health",
        //                         generic: true
        //                     },
        //                     {
        //                         aName: "Benicar",
        //                         altName: "Olmesartan Medoxomil",
        //                         manufacturer: "Daiichi Sankyo",
        //                         distributor: "McKesson",
        //                         generic: false
        //                     },
        //                     {
        //                         aName: "Losartan",
        //                         altName: "Cozaar",
        //                         manufacturer: "Aurobindo Pharma Ltd",
        //                         distributor: "McKesson",
        //                         generic: true
        //                     },
        //                     {
        //                         aName: "Carvedilol",
        //                         altName: "Coreg",
        //                         manufacturer: "GlaxoSmithKline",
        //                         distributor: "Cardinal Health",
        //                         generic: true
        //                     },
        //                 ]
        //             }
        //         ]

        //     return testCollection;
        // };

        // private static testCollection: CategoryDataModel[] = [
        //     new CategoryDataModel("Cholesterol",
        //         [new MedicineDataModel("Atorvastatin", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Rosuvastatin", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Lipitor", "Test Data", "Pfizer", "McKesson", false),
        //         new MedicineDataModel("Crestor", "Test Data", "Pfizer", "McKesson", false)]),

        //     new CategoryDataModel("Hypertension",
        //         [new MedicineDataModel("Lisinopril", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Amlodipine", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Benicar", "Test Data", "Pfizer", "McKesson", false),
        //         new MedicineDataModel("Carvedilol", "Test Data", "Pfizer", "McKesson", false),
        //         new MedicineDataModel("Losartan", "Test Data", "Pfizer", "McKesson", false)]),

        //     new CategoryDataModel("Diabetes-Type1",
        //         [new MedicineDataModel("Apidra", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Lantus", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Humalog", "Test Data", "Pfizer", "McKesson", false),
        //         new MedicineDataModel("Novalog", "Test Data", "Pfizer", "McKesson", false)]),

        //     new CategoryDataModel("Diabetes-Type2",
        //         [new MedicineDataModel("Victoza", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Januvia", "Test Data", "Pfizer", "McKesson", true),
        //         new MedicineDataModel("Metformin", "Test Data", "Pfizer", "McKesson", false),
        //         new MedicineDataModel("Glucophage", "Test Data", "Pfizer", "McKesson", false)])
        // ];
    }

    private static testCollection: Array<CategoryDataModel> =
        [
            {
                category: "Cholesterol",
                medicineList: [
                    {
                        aName: "Atorvastatin",
                        altName: "Lipitor",
                        manufacturer: "MSN Laboratories",
                        distributor: "Cardinal Health",
                        isGeneric: true
                    },
                    {
                        aName: "Rosuvastatin",
                        altName: "Crestor",
                        manufacturer: "MSN Laboratories",
                        distributor: "McKesson",
                        isGeneric: true
                    },
                    {
                        aName: "Lipitor",
                        altName: "Atorvastatin",
                        manufacturer: "Pfizer",
                        distributor: "Cardinal Health",
                        isGeneric: false
                    },
                    {
                        aName: "Crestor",
                        altName: "Rosuvastatin",
                        manufacturer: "AstraZeneca",
                        distributor: "McKesson",
                        isGeneric: false
                    }
                ],
            },
            {
                category: "Hypertension",
                medicineList: [
                    {
                        aName: "Lisinopril",
                        altName: "Prinivil",
                        manufacturer: "Watson Pharmaceuticals",
                        distributor: "Cardinal Health",
                        isGeneric: true
                    },
                    {
                        aName: "Amlodipine",
                        altName: "Norvasc",
                        manufacturer: "MSN Laboratories",
                        distributor: "Cardinal Health",
                        isGeneric: true
                    },
                    {
                        aName: "Benicar",
                        altName: "Olmesartan Medoxomil",
                        manufacturer: "Daiichi Sankyo",
                        distributor: "McKesson",
                        isGeneric: false
                    },
                    {
                        aName: "Losartan",
                        altName: "Cozaar",
                        manufacturer: "Aurobindo Pharma Ltd",
                        distributor: "McKesson",
                        isGeneric: true
                    },
                    {
                        aName: "Carvedilol",
                        altName: "Coreg",
                        manufacturer: "GlaxoSmithKline",
                        distributor: "Cardinal Health",
                        isGeneric: true
                    },
                ]
            }
        ];

    public get testCollection(): Array<CategoryDataModel> {
        return Database.testCollection;
    }

    storeDefaultData(): void {
        console.log("Storing default dataset...");
        console.log("\n");

        const setOptions = {
            merge: true
        };

        let adminCategoriesRef: firebase.firestore.CollectionReference = this.firestore_db.getDatabaseReference("adminCategories");

        Database.testCollection.forEach(e => {
            console.log(`Adding Category ${e.category} to Firestore`);
            
            adminCategoriesRef.doc(e.category).set({
                category: e.category,
                medicines: e.medicineList
            }, setOptions);
        });

        // adminCategoriesRef.doc("Cholesterol").set({
        //     category: "Cholesterol",
        //     medicines: [
        //         { aName: "Atorvastatin", altName: "Lipitor", manufacturer: "MSN Laboratories", distributor: "Cardinal Health", generic: true },
        //         { aName: "Rosuvastatin", altName: "Crestor", manufacturer: "MSN Laboratories", distributor: "McKesson", generic: true },
        //         { aName: "Lipitor", altName: "Atorvastatin", manufacturer: "Pfizer", distributor: "Cardinal Health", generic: false },
        //         { aName: "Crestor", altName: "Rosuvastatin", manufacturer: "AstraZeneca ", distributor: "McKesson", generic: false },
        //     ]
        // }, setOptions);

        // adminCategoriesRef.doc("Hypertension").set({
        //     category: "Hypertension",
        //     medicines: [
        //         { aName: "Lisinopril", altName: "Prinivil", manufacturer: "Watson Pharmaceuticals", distributor: "Cardinal Health", generic: true },
        //         { aName: "Amlodipine", altName: "Norvasc", manufacturer: "MSN Laboratories", distributor: "McKesson", generic: true },
        //         { aName: "Benicar", altName: "Olmesartan Medoxomil", manufacturer: "Daiichi Sankyo", distributor: "Cardinal Health", generic: false },
        //         { aName: "Losartan", altName: "Cozaar", manufacturer: "Aurobindo Pharma Ltd ", distributor: "McKesson", generic: true },
        //         { aName: "Carvedilol", altName: "Coreg", manufacturer: "GlaxoSmithKline ", distributor: "McKesson", generic: true },
        //     ]
        // }, setOptions);

        console.log("...default dataset store complete");

        return;
    };

    initialize(configurationName: string) {
        this.firestore_db.initialize(configurationName);
    }

    // Gets every medication in the db, might need to add functionality as db grows
    //
    async getRemoteMedicineCollectionAsync(): Promise<Array<CategoryDataModel>> {
        let medicineCollection: Array<CategoryDataModel> = new Array<CategoryDataModel>();

        let querySnapshot: any = await this.getRemoteCollection("adminCategories");
        //let querySnapshot: any = await this.getRemoteCollection("medicineCategories");
        return new Promise<Array<CategoryDataModel>>(function (resolve) {
            querySnapshot.forEach((doc: any) => {
                let medicineCategory: CategoryDataModel = new CategoryDataModel(doc.get("category"), doc.get("medicines"));
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
