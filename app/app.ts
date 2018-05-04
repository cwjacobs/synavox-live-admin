import { DashboardController } from "./controllers/dashboardController"
import { Database } from "./database/database";
import { CategoryDataModel } from "./models/CategoryDataModel";
import { Utilities } from "./utilities"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    $('.editMedicineForm').css("display", "none");

    // Initialze Application
    //
    let database: Database = new Database();
    database.initialize("admin");

    let dashboardController = new DashboardController(database);

    $(document).on('change', '#category-selector', function (e) {
        // Remove the initial 'Select Category...' option from the dropdown
        $('#category-greeting').remove();

        // Display list of selected category medicines
        let selectedCategory: string = $(this).find('option:selected').text();
        dashboardController.selectCategoryAsync(selectedCategory);
    });

    // $(document).on('click', '.edit-medicine', function (e) {
    //     alert("document");
    //     //dashboardController.editMedicine(e);
    // });

    $("tbody.tbodyData").on("click", "td.edit-medicine", function (e) {
        dashboardController.editMedicine(e);
    });

    $("tbody.tbodyData").on("click", "td.delete-medicine", function (e) {
        dashboardController.closeMedicine(e);
    });

    $('#save').click(function (e) {
        $('.editMedicineForm').css("display", "none");
    });

    $('#cancel').click(function (e) {
        $('.editMedicineForm').css("display", "none");
    });

    $(document).on('click', '#restore-data', function (e) {
        database.storeDefaultData();
    });

    $(document).on('click', '#log-testdata', function (e) {
        let testData: CategoryDataModel[] = database.testCollection;
        Utilities.logMedicineCollection(testData);
    });
});
