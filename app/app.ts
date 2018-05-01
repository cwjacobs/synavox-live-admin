import { DashboardController } from "./controllers/dashboardController"

/// <reference path ="../node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function () {

    let dashboardController = new DashboardController();
    
    dashboardController.buildDashboardAsync();

    // $(document).on('click', '.medicine-selector', function (e) {
    //     dashboardController.selectMedicine(e);
    // });

    // $(document).on('click', '.language-selector', function (e) {
    //     let language: string | null = e.target.textContent !== null ? e.target.textContent : "null";
    //     dashboardController.selectLanguage(language);
    // });
});

