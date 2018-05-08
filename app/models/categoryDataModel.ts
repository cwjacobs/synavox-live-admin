import { MedicineDataModel } from "./medicineDataModel"

export class CategoryDataModel {

    constructor(public category: string, public medicineList: Array<MedicineDataModel> = new Array<MedicineDataModel>()) {
    };
};

