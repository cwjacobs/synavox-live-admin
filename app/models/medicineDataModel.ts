export class MedicineDataModel {

    aName: string;
    altName: string;
    manufacturer: string;
    distributor: string;
    generic: Boolean;

    constructor(aName: string, altName: string, manufacturer: string, distributor: string, generic: boolean) {
        this.aName = aName;
        this.altName = altName;
        this.manufacturer = manufacturer;
        this.distributor = distributor;
        this.generic = generic;
    };
};
