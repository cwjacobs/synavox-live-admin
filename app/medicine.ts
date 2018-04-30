import { MedicineView } from "./views/medicineView";

export class Medicine {

    private medicineView: MedicineView;

    constructor(readonly name: string) {
        this.medicineView = new MedicineView(name);
    }

    public getMedicineButtonElement(): HTMLElement {
        return this.medicineView.getMedicineButtonViewElement();
    }
};
