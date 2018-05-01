import { Configuration } from "./firebaseConfigs"

// Import Firebase / Firestore definitions
//
import * as firebase from 'firebase'
import 'firebase/firestore'

export class Firestore_db {

    mainApp: firebase.app.App;
    firestore: firebase.firestore.Firestore;
    static settings = { timestampsInSnapshots: true };

    constructor() {
    }

    initialize(firebaseConfig: Configuration): void {
        //const settings = { timestampsInSnapshots: true };

        // const firebaseConfig = {
        //     apiKey: "AIzaSyDWoBUhqcPPNNsHGPM1x5eI6gRRYTXNWPM",
        //     authDomain: "synavox-live.firebaseapp.com",
        //     databaseURL: "https://synavox-live.firebaseio.com",
        //     projectId: "synavox-live",
        //     storageBucket: "synavox-live.appspot.com",
        //     messagingSenderId: "341085923340"
        // };

        this.mainApp = firebase.initializeApp(firebaseConfig, "synavox-live");

        // const firestore = firebase.firestore(this.mainApp);
        // firestore.settings(settings);
        firebase.firestore(this.mainApp).settings(Firestore_db.settings);

        console.log(`Firebase app name: ${this.mainApp.name}`);
    }

    getDatabaseReference(requestedCollection: string): firebase.firestore.CollectionReference {
        let requestedCollectionRef: firebase.firestore.CollectionReference = firebase.firestore(this.mainApp).collection(requestedCollection);
        return requestedCollectionRef;
    }

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
    }
}

