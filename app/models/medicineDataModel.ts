export class MedicineDataModel {

    aName: string;
    altName: string;
    manufacturer: string;
    distributor: string;
    isGeneric: Boolean;

    constructor(aName: string, altName: string, manufacturer: string, distributor: string, isGeneric: boolean) {
        this.aName = aName;
        this.altName = altName;
        this.manufacturer = manufacturer;
        this.distributor = distributor;
        this.isGeneric = isGeneric;
    };
};
