import { DashboardController } from "./controllers/dashboardController"
import { Database } from "./database/database";
import { CategoryDataModel } from "./models/CategoryDataModel";
import { Utilities } from "./utilities"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let dashboardController = new DashboardController();

    dashboardController.buildDashboardAsync();

    $(document).on('click', '#restore-data', function (e) {
        //let database: Database = new Database();
        //database.initialize("admin");
        let database = dashboardController.dataBase;
        database.storeDefaultData();
    });

    $(document).on('click', '#log-testdata', function (e) {
        let testData: CategoryDataModel[] = Database.getTestCollection();
        Utilities.logMedicineCollection(testData);
    });

    // $(document).on('click', '.language-selector', function (e) {
    //     let language: string | null = e.target.textContent !== null ? e.target.textContent : "null";
    //     dashboardController.selectLanguage(language);
    // });
});
