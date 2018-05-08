import { CategoryDataModel } from "./models/categoryDataModel"
import { MedicineDataModel } from "./models/medicineDataModel"

export class Utilities {

    static logMedicine(medicine: MedicineDataModel): void {
        console.log("\n");
        console.log(`\tMedicine Name (audio): ${medicine.name}`);
        console.log(`\t\tMedicine alt name: ${medicine.altName}`);
        console.log(`\t\tMedicine manufacturer: ${medicine.manufacturer}`);
        console.log(`\t\tMedicine distributor: ${medicine.distributor}`);
        console.log(`\t\tMedicine is generic: ${medicine.isGeneric}`);
        console.log("\n");
    };

    static logMedicineCollection(collection: Array<CategoryDataModel>): void {
        console.log("\n");
        collection.forEach(e => {
            console.log(`Category: ${e.category}`);
            e.medicineList.forEach(medicine => {
                console.log(`\tMedicine Name (audio): ${medicine.name}`);
                console.log(`\t\tMedicine alt name: ${medicine.altName}`);
                console.log(`\t\tMedicine manufacturer: ${medicine.manufacturer}`);
                console.log(`\t\tMedicine distributor: ${medicine.distributor}`);
                console.log(`\t\tMedicine is generic: ${medicine.isGeneric}`);
                console.log("\n");
            });
        });
    };
}