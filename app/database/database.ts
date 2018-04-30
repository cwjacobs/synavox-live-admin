import { Firestore_db } from "./firestore_db"
import { Local_TestData } from "./local_TestData"
import { MedicineDataModel } from "../models/medicineDataModel"

export class Database {

    database: Firestore_db | Local_TestData;

    // Gets every medication in the db, might need to add functionality as db grows
    //
    getMedicineCollectionAsync(): Promise<Array<MedicineDataModel>> {

        return new Promise<Array<MedicineDataModel>>(function (resolve) {
            let database = new Firestore_db();

            if (!database) {
                resolve(new Local_TestData().getTestCollection());
            }

            let medicineCollection: Array<MedicineDataModel> = new Array<MedicineDataModel>();

            let medicineCollectionRef = database.initialize();

            medicineCollectionRef.get().then((querySnapshot: any) => {
                querySnapshot.forEach((doc: any) => {
                    let medicineCategory: MedicineDataModel = new MedicineDataModel(doc.get("category"), doc.get("medicines"));
                    medicineCollection.push(medicineCategory);
                });
                resolve(medicineCollection);
            });
        })
    };
};
