export class MedicineDataModel {
    
    category: string;
    medicineList: string[];

    constructor(category: string, medicineList: string[]) {
        this.category = category;
        this.medicineList = medicineList;
    };
};

