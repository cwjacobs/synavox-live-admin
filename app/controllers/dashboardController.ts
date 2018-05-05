import { Database } from "../database/database"
import { CategoryDataModel } from "../models/categoryDataModel";
import { MedicineDataModel } from "../models/medicineDataModel";

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
                    tableRow += '<td class="aName" id="id-aName">' + medicine.aName + '</td>';
                    tableRow += '<td class="altName">' + medicine.altName + '</td>';
                    tableRow += '<td class="manufacturer">' + medicine.manufacturer + '</td>';
                    tableRow += '<td class="distributor">' + medicine.distributor + '</td>';
                    tableRow += '<td class="isGeneric">' + medicine.isGeneric + '</td>';
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

    editMedicine(e: JQuery<HTMLElement>) {
        $('.editMedicineForm').css("display", "block");
        $('#edit-buttons').css("visibility: visible");

        //let aName: string = $(e).closest('tr').find("td.aName").text();
        //$("#aName-edit").text(aName);

        $("#aName-edit").val($(e).closest('tr').find("td.aName").text());
        $("#altName-edit").val($(e).closest('tr').find("td.altName").text());
        $("#manufacturer-edit").val($(e).closest('tr').find("td.manufacturer").text());
        $("#distributor-edit").val($(e).closest('tr').find("td.distributor").text());

        //$("#isGeneric-edit").val($(e).closest('tr').find("td.isGeneric").text());

        let isGeneric: string = $(e).closest('tr').find("td.isGeneric").text();
        if(isGeneric === "true") {
            $("#isGeneric-edit").prop("checked", true);
        }
        else {
            $("#isGeneric-edit").prop("checked", false);
        }
    };

    closeMedicine(e: JQuery.Event<HTMLElement, null>) {
        $('.editMedicineForm').css("display", "none");
    };

};
