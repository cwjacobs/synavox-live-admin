import { Medicine } from "../medicine";

export class MedicineCategoryView {

    private lowerCaseCategoryName: string;
    private medicineListElement: HTMLElement;
    private categoryContainerViewElement: HTMLElement;
    private titleContainerElementId: string;

    constructor(readonly categoryName: string) {
        this.lowerCaseCategoryName = this.categoryName.toLowerCase();

        // <div class="panel panel-default" id="cholesterol-group">
        this.categoryContainerViewElement = document.createElement('div');
        {
            let elementClass: string = 'panel panel-default';
            let elementId: string = this.lowerCaseCategoryName + '-group';

            this.categoryContainerViewElement.className = elementClass;
            this.categoryContainerViewElement.id = elementId;
            this.categoryContainerViewElement.appendChild(this.createTitleContainerElement());
            this.categoryContainerViewElement.appendChild(this.createMedicineListContainerElement());
        }
    };

    public getCategoryContainerViewElement(): HTMLElement {
        return this.categoryContainerViewElement;
    };

    public addMedicineToCategoryView(medicine: Medicine) {
        this.medicineListElement.appendChild(medicine.getMedicineButtonElement());
    };

    private createTitleContainerElement(): HTMLElement {
        let buttonElement: HTMLElement = this.createTitleButtonElement();

        let titleElement: HTMLElement = this.createTitleElement();
        titleElement.appendChild(buttonElement);

        // <div class="panel-heading" role="tab" id="collapse-heading-[category name]">
        let titleContainerElement: HTMLElement = document.createElement('div');
        {
            let elementClass: string = 'panel-heading';
            // let elementId: string = 'collapse-one';
            this.titleContainerElementId = 'collapse-heading-' + this.lowerCaseCategoryName;

            titleContainerElement.className = elementClass;
            titleContainerElement.id = this.titleContainerElementId;
            titleContainerElement.setAttribute('roll', 'tab');
            titleContainerElement.appendChild(titleElement);
        }
        return titleContainerElement;
    }

    private createTitleButtonElement(): HTMLElement {
        // <a class="medicine-catagory" role="button" data-toggle="collapse" data-parent="#collapse" href="#collapse-[category name]" aria-expanded="true" aria-controls="collapse-[category name]">
        //    Cholesterol
        // </a>
        let element: HTMLElement = document.createElement('a');
    
        let elementClass: string = 'synavox';
        element.className = elementClass;
        element.id = this.lowerCaseCategoryName;

        element.setAttribute('roll', 'button');
        element.setAttribute('data-toggle', 'collapse');
        element.setAttribute('data-parent', '#collapse');
        element.setAttribute('href', '#collapse-' + this.lowerCaseCategoryName);
        element.setAttribute('aria-expanded', 'true');
        element.setAttribute('aria-controls', 'collapse-' + this.lowerCaseCategoryName);
        element.textContent = this.categoryName;

        return element;
    }

    private createTitleElement(): HTMLElement {
        // <h4 class="panel-title"></h4>
        let titleElement: HTMLElement = document.createElement('h4');
        {
            let elementClass: string = 'panel-title';
            titleElement.className = elementClass;
        }
        return titleElement;
    }

    // <div id="collapse-one" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapse-heading-one">
    //      <div id="medicine-list-cholesterol" class="panel-body text-left" style="margin-left: 20px">
    //          <a href="#">
    //              <h5 class="text-secondary" id = "atorvastatin" > Atorvastatin </h5>
    //           </a>
    //           <a href = "#">
    //              <h5 class="text-secondary" id = "rosuvastatin" > Rosuvastatin </h5>
    //           </a>
    //           <a href = "#">
    //              <h5 class="text-secondary" id = "crestor" > Crestor </h5>
    //           </a>
    //           <a href = "#">
    //              <h5 class="text-secondary" id = "lipitor" > Lipitor </h5>
    //           </a>
    //      </div>
    // </div>

    private createMedicineListContainerElement(): HTMLElement {
        // <div id="medicine-list-cholesterol" class="panel-body text-left" style="margin-left: 20px">
        this.medicineListElement = this.createMedicineListElement();

        // <div id="collapse-[category name]" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapse-heading-[category name]"><div>
        let element: HTMLElement = document.createElement('div');
        {
            let elementId: string = 'collapse-' + this.lowerCaseCategoryName;
            let elementClass: string = 'panel-collapse collapse';

            element.id = elementId;
            element.className = elementClass;

            element.setAttribute('role', 'tabpanel');
            element.setAttribute('aria-labelledby', 'collapse-heading-' + this.lowerCaseCategoryName);

            element.appendChild(this.medicineListElement);
        }

        return element;
    }

    private createMedicineListElement(): HTMLElement {
        // <div id="medicine-list-[category name]" class="panel-body text-left" style="margin-left: 20px">
        let element: HTMLElement = document.createElement('div');
        {
            let elementId: string = 'medicine-list-' + this.lowerCaseCategoryName;
            let elementClass: string = 'panel-body text-left';
            let elementStyle: string = 'margin-left: 20px';

            element.id = elementId;
            element.className = elementClass;
            element.setAttribute('style', elementStyle);
        }

        return element;
    }
};