export class MedicineView {
    private lowerCaseTitle: string;
    private medicineButtonViewElement: HTMLElement;

    constructor(readonly title: string) {
        this.lowerCaseTitle = this.title.toLowerCase();

        this.medicineButtonViewElement = this.createMedicineButtonViewElement();
        this.medicineButtonViewElement.appendChild(this.createMedicineButtonTextElement());
    };

    public getMedicineButtonViewElement(): HTMLElement {
        return this.medicineButtonViewElement;
    };

    private createMedicineButtonTextElement(): HTMLElement {
        // <h5 class="text-secondary" id="atorvastatin">Atorvastatin</h5>
        let element = document.createElement('h5');
        {
            let elementId: string = this.title;
            let elementClass: string = 'medicine-selector text-info';

            element.id = elementId;
            element.className = elementClass;
            element.textContent = this.title;
        }
        return element;
    };

    private createMedicineButtonViewElement(): HTMLElement {
        // <a href="#"></a>
        let element = document.createElement('a');
        {
            element.setAttribute('href', '#');
        }
        return element;
    };
};