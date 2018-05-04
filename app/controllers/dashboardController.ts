import { Database } from "../database/database"
import { CategoryDataModel } from "../models/categoryDataModel";

export class DashboardController {

    medicineName: string;
    medicineCollection: CategoryDataModel[];

    constructor(private database: Database) {
    }

    async selectCategoryAsync(category: string) {

        $('#categoryMedicineList').fadeOut();
        let categoryFound: boolean = false;

        let self = this; // required for 'this' dereference in async loop after await
        self.medicineCollection = await this.database.getRemoteMedicineCollectionAsync();

        self.medicineCollection.forEach(e => {
            if (e.category === category) {
                categoryFound = true;
                let tableRow: string = "";
                e.medicineList.forEach(medicine => {
                    tableRow += '<tr>';
                    tableRow += '<td class="aName">' + medicine.aName + '</td>';
                    tableRow += '<td class="altName">' + medicine.altName + '</td>';
                    tableRow += '<td class="manufacturer">' + medicine.manufacturer + '</td>';
                    tableRow += '<td class="distributor">' + medicine.distributor + '</td>';
                    tableRow += '<td class="isGenertic">' + medicine.isGeneric + '</td>';
                    tableRow += '<td class="edit-medicine"><i class="fa fa-pencil" areia-hidden="true" style="color: green"></td>';
                    tableRow += '<td class="delete-medicine"><i class="fa fa-trash" areia-hidden="true" style="color: red"></td>';
                });
                $('tbody.tbodyData').html(tableRow);
                $('#categoryMedicineList').fadeIn();
                return;
            }
        });
        if (!categoryFound) {
            alert(`Category: ${category} not found`);
        }
    };

    editMedicine(e: JQuery.Event<HTMLElement, null>) {
        $('.editMedicineForm').css("display", "block");
        $('#edit-buttons').css("visibility: visible");

        $("#aName").val($(this).closest('tr').find('.aName').text());
        $("#altName").val($(this).closest('tr').find('.altName').text());
        $("#manufacturer").val($(this).closest('tr').find('.manufacturer').text());
        $("#distributor").val($(this).closest('tr').find('.distributor').text());
        $("#isGeneric").val($(this).closest('tr').find('.isGeneric').text());
    };

    closeMedicine(e: JQuery.Event<HTMLElement, null>) {
        $('.editMedicineForm').css("display", "none");
    };

};
