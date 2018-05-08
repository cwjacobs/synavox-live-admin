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

    getMedicineDataModelProperties(dataModel: MedicineDataModel): any {

        let properties: any = {
            altName: dataModel.altName,
            manufacturer: dataModel.manufacturer,
            distributor: dataModel.distributor,
            isGeneric: dataModel.isGeneric
        }
        return properties;
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
                let properties = this.getMedicineDataModelProperties(medicine);
                adminCategoriesRef.doc(e.category).collection("Medicines").doc(medicine.name).set({ properties }, setOptions);
            })
        });

        console.log("...default dataset store complete");

        return;
    };

    initialize(configurationName: string) {
        this.firestore.initialize(configurationName);
    }

    // Gets every medication in the db, might need to add functionality as db grows
    //
    async getRemoteMedicineCollectionAsync(): Promise<Array<CategoryDataModel>> {
    // async getRemoteMedicineCollectionAsync(): Promise<CategoryDataModel> {
        let self: any = this;
        // let medicineCollection: Array<MedicineDataModel> = new Array<MedicineDataModel>();

        return new Promise<Array<CategoryDataModel>>(function (resolve) {
            let medicineCollection: Array<MedicineDataModel> = new Array<MedicineDataModel>();

            let medicineCategoriesRef: firebase.firestore.CollectionReference = self.firestore.getCollectionReference("adminCategories");
            medicineCategoriesRef.doc("Hypertension").collection("Medicines").get().then((querySnapShot => {
                let x = 0;
                querySnapShot.forEach(doc => {
                    let altName: string = doc.get("altName");
                    let manufacturer: string = doc.get("manufacturer");
                    let distributor: string = doc.get("distributor");
                    let mdm = new MedicineDataModel(doc.id, altName, manufacturer, distributor, true );
                    medicineCollection.push(mdm);
                    console.log(doc.id, " => ", doc.data());
                });
                let cdm = new CategoryDataModel("Hypertension", medicineCollection);
                let cdmArray: Array<CategoryDataModel> = new Array<CategoryDataModel>();
                cdmArray.push(cdm);
                resolve(cdmArray);
            }));
            // resolve(Database.testCollection);
            //resolve(medicineCollection);
        });


        // db.collection("transactions").doc("2018-01-02").collection("education-1").get()
        //     .then(function (querySnapshot) {

        // this.firestore.db.collection("adminCategories:").doc("Hypertension").collection("Medicines").get()
        //     .then(function (querySnapshot) {
        //         querySnapshot.forEach(doc => {
        //             console.log("Medicines", doc.id, " => ", doc.data());
        //         })
        //     });

        // this.firestore.db.collection("adminCategories").get()
        //     .then(function (querySnapshot) {
        //         querySnapshot.forEach(doc => {
        //             console.log("adminCategories:", doc.id, " => ", doc.data());
        //         })
        //     });

        // collectionRef.get().then((querySnapshot: any) => {
        //     resolve(querySnapshot);
        // });


        //let querySnapshot: any = await this.getRemoteCollection("adminCategories");

        //let querySnapshot: any = await this.getRemoteCollection("medicineCategories");

        // return new Promise<Array<CategoryDataModel>>(function (resolve) {
        // querySnapshot.forEach((doc: any) => {
        //     let medicineCategory: CategoryDataModel = new CategoryDataModel(doc.get("category"), doc.collection("Medicines"));
        //     medicineCollection.push(medicineCategory);
        // });
        // resolve(Database.testCollection);
        //resolve(medicineCollection);
        // });
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
