import { MedicineDataModel } from "./medicineDataModel"

export class CategoryDataModel {

    // category: string;
    // medicineList: Array<MedicineDataModel>;

    constructor(public category: string, public medicineList: Array<MedicineDataModel> = new Array<MedicineDataModel>()) {
        // this.category = category;
        // this.medicineList = medicineList;
    };
};

