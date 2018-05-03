import { Database } from "../database/database"
import { CategoryDataModel } from "../models/categoryDataModel";

export class DashboardController {

    medicineName: string;
    medicineCollection: CategoryDataModel[];

    constructor(private database: Database) {
    }

    async selectCategoryAsync(category: string) {

        $('#category-medicine-list').fadeOut();
        let categoryFound: boolean = false;

        let self = this; // required for 'this' dereference in async loop after await
        self.medicineCollection = await this.database.getRemoteMedicineCollectionAsync();

        self.medicineCollection.forEach(e => {
            if (e.category === category) {
                categoryFound = true;
                let tableRow: string = "";
                e.medicineList.forEach(medicine => {
                    tableRow += '<tr>';
                    tableRow += '<td class="a-name">' + medicine.aName + '</td>';
                    tableRow += '<td class="alt-name">' + medicine.altName + '</td>';
                    tableRow += '<td class="manufacturer">' + medicine.manufacturer + '</td>';
                    tableRow += '<td class="distributor">' + medicine.distributor + '</td>';
                    tableRow += '<td class="generic">' + medicine.generic + '</td>';
                    tableRow += '<td class="edit-medicine"><i class="fa fa-pencil" areia-hidden="true" style="color: green"></td>';
                    tableRow += '<td class="delete-medicine"><i class="fa fa-trash" areia-hidden="true" style="color: red"></td>';
                });
                $('tbody.tbodyData').html(tableRow);
                $('#category-medicine-list').fadeIn();
                return;
            }
        });
        if (!categoryFound) {
            alert(`Category: ${category} not found`);
        }
    };
};
