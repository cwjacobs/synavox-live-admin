import { Configuration, FirestoreConfig } from "./firebaseConfigs"

// Import Firebase / Firestore definitions
//
import * as firebase from 'firebase'
import 'firebase/firestore'

export class SynavoxFirestore {

    config: FirestoreConfig;
    mainApp: firebase.app.App;
    firestore: firebase.firestore.Firestore;

    static settings = { timestampsInSnapshots: true };

    constructor() {
        this.config = new FirestoreConfig();
    };

    initialize(configurationName: string): void {
        let firebaseConfig: Configuration = this.config.getFirebaseConfig(configurationName);

        this.mainApp = firebase.initializeApp(firebaseConfig, firebaseConfig.projectId);

        firebase.firestore(this.mainApp).settings(SynavoxFirestore.settings);

        console.log(`Firebase app name: ${this.mainApp.name}`);
    };

    getDatabaseReference(requestedCollection: string): firebase.firestore.CollectionReference {
        let requestedCollectionRef: firebase.firestore.CollectionReference = firebase.firestore(this.mainApp).collection(requestedCollection);
        return requestedCollectionRef;
    };

    restoreDefaultData(collectionReference: firebase.firestore.CollectionReference): void {

        const setOptions = {
            merge: true
        };

        collectionReference.doc("Cholesterol").set({
            category: "Cholesterol",
            medicines: ["Atorvastatin", "Rosuvastatin", "Lipitor", "Crestor"],
        }, setOptions);

        collectionReference.doc("Hypertension").set({
            category: "Hypertension",
            medicines: ["Lisinopril", "Amlodipine", "Benicar", "Losartan", "Carvedilol"],
        }, setOptions);

        collectionReference.doc("Diabetes-Type1").set({
            category: "Diabetes-Type1",
            medicines: ["Apidra", "Lantus", "Humalog", "Novalog"],
        }, setOptions);

        collectionReference.doc("Diabetes-Type2").set({
            category: "Diabetes-Type2",
            medicines: ["Victoza", "Januvia", "Metformin", "Glucophage"],
        }, setOptions);

        collectionReference.doc("Anticoagulants").set({
            category: "Anticoagulants",
            medicines: ["Warfarin", "Acenocoumarol", "Phenprocoumon", "Dabigatran", "Apixaban"],
        }, setOptions);

        return;
    };
}

