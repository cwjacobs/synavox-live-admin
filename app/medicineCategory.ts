import { Medicine } from "./medicine";
import { MedicineCategoryView } from "./views/medicineCategoryView";

export class MedicineCategory {

    private categoryView: MedicineCategoryView;

    constructor(readonly name: string) {
        this.categoryView = new MedicineCategoryView(name);
    }

    public getCategoryContainerElement(): HTMLElement {
        return this.categoryView.getCategoryContainerViewElement();
    }

    public addMedicineToCategory(medicine: Medicine) {
        this.categoryView.addMedicineToCategoryView(medicine);
    }
};