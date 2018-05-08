import { Database } from "../database/database";
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
            //if (e.category === category) {
                categoryFound = true;
                let tableRow: string = "";
                e.medicineList.forEach(medicine => {
                    tableRow += '<tr>';
                    tableRow += '<td class="name" id="' + medicine.name + '">' + medicine.name + '</td>';
                    tableRow += '<td class="altName">' + medicine.altName + '</td>';
                    tableRow += '<td class="manufacturer">' + medicine.manufacturer + '</td>';
                    tableRow += '<td class="distributor">' + medicine.distributor + '</td>';
                    tableRow += '<td class="isGeneric">' + medicine.isGeneric + '</td>';
                    tableRow += '<td class="edit-medicine"><i class="fa fa-pencil" areia-hidden="true" style="color: green"></td>';
                    tableRow += '<td class="delete-medicine"><i class="fa fa-trash" areia-hidden="true" style="color: red"></td>';
                });
                $('tbody.tbodyData').html(tableRow);
                $('#categoryMedicineList').fadeIn();
                //return;
            //}
        });
        if (!categoryFound) {
            alert(`Category: ${category} not found`);
        }
    };

    editMedicine(e: JQuery<HTMLElement>) {
        $('.medicineEditor').css("display", "block");
        $('#edit-buttons').css("visibility: visible");

        $("#edit-name").val($(e).closest('tr').find("td.name").text());
        $("#edit-altName").val($(e).closest('tr').find("td.altName").text());
        $("#edit-manufacturer").val($(e).closest('tr').find("td.manufacturer").text());
        $("#edit-distributor").val($(e).closest('tr').find("td.distributor").text());

        let isGeneric: string = $(e).closest('tr').find("td.isGeneric").text();
        if (isGeneric === "true") {
            $("#edit-isGeneric").prop("checked", true);
        }
        else {
            $("#edit-isGeneric").prop("checked", false);
        }
    };

    updateMedicine(e: JQuery.Event<HTMLElement, null>) {
        
        $("#name-edit").val($(e).closest('tr').find("td.name").text());
        $("#altName-edit").val($(e).closest('tr').find("td.altName").text());
        $("#manufacturer-edit").val($(e).closest('tr').find("td.manufacturer").text());
        $("#distributor-edit").val($(e).closest('tr').find("td.distributor").text());

        let isGeneric: string = $(e).closest('tr').find("td.isGeneric").text();
        if (isGeneric === "true") {
            $("#isGeneric-edit").prop("checked", true);
        }
        else {
            $("#isGeneric-edit").prop("checked", false);
        }

        $('.medicineEditor').css("display", "block");
        $('#edit-buttons').css("visibility: visible");
    }

    closeMedicine(e: JQuery.Event<HTMLElement, null>) {
        $('.medicineEditor').css("display", "none");
    };

};
