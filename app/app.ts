import { DashboardController } from "./controllers/dashboardController";
import { Database } from "./database/database";
import { CategoryDataModel } from "./models/CategoryDataModel";
import { Utilities } from "./utilities";

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    $('.medicineEditor').css("display", "none");

    $('.addCategoryMedicineListForm').css("display", "none");

    // Initialze Application
    //
    let database: Database = new Database();
    database.initialize("admin");

    let dashboardController = new DashboardController(database);

    // Select Category Handlers
    // ------------------------
    $(document).on('change', '#category-selector', function (e) {
        // Remove the initial 'Select Category...' option from the dropdown
        $('#category-greeting').remove();

        dashboardController.closeMedicineEditor(e);

        dashboardController.closeCategoryEditor(e);

        dashboardController.selectCategoryAsync();
    });


    // Edit Medcine Handlers
    // ---------------------
    $("tbody.tbodyData").on("click", "td.edit-medicine", function (e) {
        dashboardController.closeCategoryEditor(e);

        let selectedMedicine: string = $(this).closest("tr").find("td.aName").text();
        dashboardController.displayMedicineEditor($(this));
    });

    $("tbody.tbodyData").on("click", "td.delete-medicine", function (e) {
        alert("Not yet implemented");
    });

    $('#save').click(function (e) {
        dashboardController.updateMedicine(e);
        dashboardController.closeMedicineEditor(e);
    });

    $('#cancel').click(function (e) {
        dashboardController.closeMedicineEditor(e);
    });


    // Create Category Handlers
    // ------------------------
    $("#createMedicineCategory").click(function (e) {
        dashboardController.closeMedicineEditor(e);
        dashboardController.displayCategoryEditor(e);
    });

    $('#add-medicine').click(function (e) {
        dashboardController.addMedicineToCategory(e);
    });

    $('#category-complete').click(function (e) {
        dashboardController.closeCategoryEditor(e);
    });

    $('#cancel-category').click(function (e) {
        dashboardController.closeCategoryEditor(e);
    });


    // Restore / Log Data Handlers
    // ---------------------------
    $(document).on('click', '#restore-data', function (e) {
        database.storeDefaultData();
    });

    $(document).on('click', '#log-testdata', function (e) {
        let testData: CategoryDataModel[] = database.testCollection;
        Utilities.logMedicineCollection(testData);
    });
});
