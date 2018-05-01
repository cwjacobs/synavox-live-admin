import { Database } from "../database/database"
import { PanelViewFactory } from "../factories/panelViewFactory"
import { MedicineDataModel } from "../models/medicineDataModel";

interface KeyValuePair {
    [key: string]: string;
}

export class DashboardController {

    static cssClassSelector: KeyValuePair = {
        ["English"]: "bg-primary",
        ["Spanish"]: "bg-warning",
        ["Mandarin"]: "bg-danger"
    };

    medicineName: string;
    database: Database = new Database();

    async buildDashboardAsync() {

        this.database = new Database();
        this.database.initialize("admin");

        let medicineCollection = await this.database.getRemoteMedicineCollectionAsync();

        this.logMedicineCollection(medicineCollection);

        // medicineCollection.forEach(e => {
        //     console.log(`Category: ${e.category}`);
        //     e.medicineList.forEach(m => {
        //         console.log(`\tMedicine: ${m}`);
        //     })
        // });

        //let medicinePanelViews: HTMLElement[] = new PanelViewFactory().createPanelViews_Model(medicineCollection);

        // medicinePanelViews.forEach(view => {
        //     $('#medicine-panel').append(view);
        // });
    }

    selectMedicineCategory(e: JQuery.Event): void {
        e.preventDefault();

        let targetElement: Element | undefined = e.toElement;
        if (targetElement) {
            let medicineCategory: string | null = (targetElement.textContent !== null) ? targetElement.textContent : "null";
            $('#selected-medicine-info').text(medicineCategory);
        }
    };

    selectMedicine(e: JQuery.Event): void {
        e.preventDefault();

        // This will need some exception handling...!
        let targetElement: Element | undefined = e.toElement;
        if (targetElement) {
            this.medicineName = targetElement.id;
        }

        let self: any = this;

        // Using then (not as clear to me)
        $('.selected-medicine-name').fadeOut(500)
            .promise()

            .progress(function (data) {
                alert('progress');
            });

        // Using done, fail and progress (much more clear to me)
        $('.selected-medicine-name').fadeOut(500)
            .promise()

            .done(function (data) {
                $('.selected-medicine-name').text(self.medicineName);
                $('.selected-medicine-name').fadeIn(500);
            })

            .fail(function (data) {
                alert('fail');
            })

            .progress(function (data) {
                alert('progress');
            });
    };

    selectLanguage(language: string): void {
        let cssClass: string = DashboardController.cssClassSelector[language];

        $('.selected-medicine-language').removeClass('bg-primary').removeClass('bg-warning').removeClass('bg-danger').addClass(cssClass).text(language).show();

        $('#download').removeClass('bg-primary').removeClass('bg-warning').removeClass('bg-danger').addClass(cssClass).show();
    };

    logMedicineCollection(collection: Array<MedicineDataModel>): void {
        collection.forEach(e => {
            console.log(`Category: ${e.category}`);
            e.medicineList.forEach(m => {
                console.log(`\tMedicine: ${m}`);
            })
        });
    }
};
