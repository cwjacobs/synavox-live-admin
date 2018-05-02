import { CategoryDataModel } from "./models/categoryDataModel"

export class Utilities {

    static logMedicineCollection(collection: Array<CategoryDataModel>): void {
        console.log("\n");
        collection.forEach(e => {
            console.log(`Category: ${e.category}`);
            e.medicineList.forEach(medicine => {
                console.log(`\tMedicine Name (audio): ${medicine.aName}`);
                console.log(`\t\tMedicine alt name: ${medicine.altName}`);
                console.log(`\t\tMedicine manufacturer: ${medicine.manufacturer}`);
                console.log(`\t\tMedicine distributor: ${medicine.distributor}`);
                console.log(`\t\tMedicine is generic: ${medicine.generic}`);
                console.log("\n");
            });
        });
    };

}