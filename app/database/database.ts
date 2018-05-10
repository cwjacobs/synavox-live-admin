import { FirestoreConfig } from "./firebaseConfigs"
import { SynavoxFirestore } from "./synavoxFirestore"
import { CategoryDataModel } from "../models/CategoryDataModel"
import { MedicineDataModel } from "../models/medicineDataModel";
import { Utilities } from "../utilities";

// Import Firebase / Firestore definitions
//
import * as firebase from 'firebase'
import 'firebase/firestore'
import { Server } from "tls";

export class Database {

    firestore: SynavoxFirestore;
    firestoreConfig: FirestoreConfig;

    constructor() {
        this.firestore = new SynavoxFirestore();
        this.firestoreConfig = new FirestoreConfig();
    }

    hide() {
        // static getTestCollection(): Array<CategoryDataModel> {

        //     let testCollection: Array<CategoryDataModel> =
        //         [
        //             {
        //                 category: "Cholesterol",
        //                 medicineList: [
        //                     {
        //                         name: "Atorvastatin",
        //                         altName: "Lipitor",
        //                         manufacturer: "MSN Laboratories",
        //                         distributor: "Cardinal Health",
        //                         generic: true
        //                     },
        //                     {
        //                         name: "Rosuvastatin",
        //                         altName: "Crestor",
        //                         manufacturer: "MSN Laboratories",
        //                         distributor: "McKesson",
        //                         generic: true
        //                     },
        //                     {
        //                         name: "Lipitor",
        //                         altName: "Atorvastatin",
        //                         manufacturer: "Pfizer",
        //                         distributor: "Cardinal Health",
        //                         generic: false
        //                     },
        //                     {
        //                         name: "Crestor",
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
        //                         name: "Lisinopril",
        //                         altName: "Prinivil",
        //                         manufacturer: "Watson Pharmaceuticals",
        //                         distributor: "Cardinal Health",
        //                         generic: true
        //                     },
        //                     {
        //                         name: "Amlodipine",
        //                         altName: "Norvasc",
        //                         manufacturer: "MSN Laboratories",
        //                         distributor: "Cardinal Health",
        //                         generic: true
        //                     },
        //                     {
        //                         name: "Benicar",
        //                         altName: "Olmesartan Medoxomil",
        //                         manufacturer: "Daiichi Sankyo",
        //                         distributor: "McKesson",
        //                         generic: false
        //                     },
        //                     {
        //                         name: "Losartan",
        //                         altName: "Cozaar",
        //                         manufacturer: "Aurobindo Pharma Ltd",
        //                         distributor: "McKesson",
        //                         generic: true
        //                     },
        //                     {
        //                         name: "Carvedilol",
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
                        name: "Atorvastatin",
                        altName: "Lipitor",
                        manufacturer: "MSN Laboratories",
                        distributor: "Cardinal Health",
                        isGeneric: true
                    },
                    {
                        name: "Rosuvastatin",
                        altName: "Crestor",
                        manufacturer: "MSN Laboratories",
                        distributor: "McKesson",
                        isGeneric: true
                    },
                    {
                        name: "Lipitor",
                        altName: "Atorvastatin",
                        manufacturer: "Pfizer",
                        distributor: "Cardinal Health",
                        isGeneric: false
                    },
                    {
                        name: "Crestor",
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
                        name: "Lisinopril",
                        altName: "Prinivil",
                        manufacturer: "Watson Pharmaceuticals",
                        distributor: "Cardinal Health",
                        isGeneric: true
                    },
                    {
                        name: "Amlodipine",
                        altName: "Norvasc",
                        manufacturer: "MSN Laboratories",
                        distributor: "Cardinal Health",
                        isGeneric: true
                    },
                    {
                        name: "Benicar",
                        altName: "Olmesartan Medoxomil",
                        manufacturer: "Daiichi Sankyo",
                        distributor: "McKesson",
                        isGeneric: false
                    },
                    {
                        name: "Losartan",
                        altName: "Cozaar",
                        manufacturer: "Aurobindo Pharma Ltd",
                        distributor: "McKesson",
                        isGeneric: true
                    },
                    {
                        name: "Carvedilol",
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

    private createCategoryMap(): Map<string, CategoryDataModel> {
        let map: Map<string, CategoryDataModel> = new Map<string, CategoryDataModel>();
        let collection = Database.testCollection;

        collection.forEach(e => {
            map.set(e.category, e);
        });
        return map;
    }

    private createMedicineMap(): Map<string, MedicineDataModel> {
        let map: Map<string, MedicineDataModel> = new Map<string, MedicineDataModel>();
        let collection = Database.testCollection;

        collection.forEach(e => {
            e.medicineList.forEach(m => {
                map.set(m.name, m);
            })
        });
        return map;
    }

    public findCategory(category: string, map: Map<string, CategoryDataModel>): CategoryDataModel {
        let result: CategoryDataModel;
        let collection = Database.testCollection;

        let categoryModel: CategoryDataModel | undefined = map.get(category);

        if (categoryModel !== undefined) {
            return categoryModel;
        }
        else {
            throw ("categoryModel is undefined");
        }
    }

    public findMedacine(medicine: string, map: Map<string, MedicineDataModel>): MedicineDataModel {
        let medicineDataModel = map.get(medicine);
        if (medicineDataModel !== undefined) {
            return medicineDataModel;
        }
        else {
            throw ("Nope!");
        }
    }

    getMedicineInformation(medicine: MedicineDataModel): any {

        let information: any = {
            altName: medicine.altName,
            manufacturer: medicine.manufacturer,
            distributor: medicine.distributor,
            isGeneric: medicine.isGeneric
        }
        return information;
    }

    storeDefaultData(): void {
        console.log("Storing default dataset...");
        console.log("\n");

        const setOptions = {
            merge: true
        };

        let adminCategoriesRef: firebase.firestore.CollectionReference = this.firestore.getCollectionReference("adminCategories");

        Database.testCollection.forEach(e => {
            console.log(`Adding Category ${e.category} to Firestore`);

            let medicineList: Array<MedicineDataModel> = e.medicineList;
            medicineList.forEach(medicine => {
                let information = this.getMedicineInformation(medicine);
                adminCategoriesRef.doc(e.category).collection("Medicines").doc(medicine.name).set({ information }, setOptions);
            })
        });

        console.log("...default dataset store complete");

        return;
    };

    initialize(configurationName: string) {
        this.firestore.initialize(configurationName);
    }

    getMedicineDataModel(name: string, medFields: any): MedicineDataModel {
        let altName: string = medFields.information.altName;
        let manufacturer: string = medFields.information.manufacturer;
        let distributor: string = medFields.information.distributor;
        let isGeneric: boolean = medFields.information.isGeneric

        let medicineDataModel = new MedicineDataModel(name, altName, manufacturer, distributor, isGeneric);

        return medicineDataModel;
    }

    // Gets every medication in the db, might need to add functionality as db grows
    //
    async getRemoteMedicineCategoryAsync(category: string): Promise<Array<CategoryDataModel>> {
        let self: any = this;

        return new Promise<Array<CategoryDataModel>>(function (resolve) {
            let medicineCollection: Array<MedicineDataModel> = new Array<MedicineDataModel>();

            let medicineCategoriesRef: firebase.firestore.CollectionReference = self.firestore.getCollectionReference("adminCategories");
            medicineCategoriesRef.doc(category).collection("Medicines").get().then((querySnapShot => {
                querySnapShot.forEach(doc => {
                    let mdm = self.getMedicineDataModel(doc.id, doc.data());
                    medicineCollection.push(mdm);
                });
                let cdm = new CategoryDataModel(category, medicineCollection);
                let cdmArray: Array<CategoryDataModel> = new Array<CategoryDataModel>();
                cdmArray.push(cdm);
                resolve(cdmArray);
            }));
        });
    };

    // Gets Collection specified by requestedCollection
    //
    private getRemoteCollection(requestedCollection: string): Promise<any> {
        let self: Database = this;
        return new Promise<any>(function (resolve) {
            let collectionRef: firebase.firestore.CollectionReference = self.firestore.getCollectionReference(requestedCollection);
            collectionRef.get().then((querySnapshot: any) => {
                resolve(querySnapshot);
            });
        });
    };
};
