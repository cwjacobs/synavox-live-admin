import { Database } from "../database/database";
import { CategoryDataModel } from "../models/categoryDataModel";
import { MedicineDataModel } from "../models/medicineDataModel";

export class DashboardController {

    medicineName: string;
    medicineCollection: CategoryDataModel[];

    constructor(private database: Database) {
    }

    async selectCategoryAsync() {

        $('#categoryMedicineList').fadeOut();
        let categoryFound: boolean = false;

        let category: string = $("#category-selector").find('option:selected').text();

        let self = this; // required for 'this' dereference in async loop after await
        self.medicineCollection = await this.database.getRemoteMedicineCategoryAsync(category);

        self.medicineCollection.forEach(e => {
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
        
        let category: string = $("#category-selector").find('option:selected').text();

        let name: any = $("#edit-name").val();
        let altName: any = $("#edit-altName").val();
        let manufacturer: any = $("#edit-manufacturer").val();
        let distributor: any = $("#edit-distributor").val();
        let isGeneric = $("#edit-isGeneric").prop("checked");

        let tableRowSelector: any = "td#" + $("#edit-name").val();

        let tableRowElement: any = $(tableRowSelector);

        tableRowElement.closest('tr').find("td.altName").text(altName);

        tableRowElement.closest('tr').find("td.manufacturer").text(manufacturer);

        tableRowElement.closest('tr').find("td.distributor").text(distributor);

        tableRowElement.closest('tr').find("td.isGeneric").text(isGeneric);

        let medicine: MedicineDataModel = new MedicineDataModel(name, altName, manufacturer, distributor, isGeneric);

        this.database.storeMedicineData(category, medicine);

        $('.medicineEditor').css("display", "none");
    }

    closeMedicine(e: JQuery.Event<HTMLElement, null>) {
        $('.medicineEditor').css("display", "none");
    };

};
