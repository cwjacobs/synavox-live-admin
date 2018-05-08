import { Configuration, FirestoreConfig } from "./firebaseConfigs"

// Import Firebase / Firestore definitions
//
import * as firebase from 'firebase'
import 'firebase/firestore'

export class SynavoxFirestore {

    config: FirestoreConfig;
    mainApp: firebase.app.App;
    db: firebase.firestore.Firestore;

    static settings = { timestampsInSnapshots: true };

    constructor() {
        this.config = new FirestoreConfig();
    };

    initialize(configurationName: string): void {
        let firebaseConfig: Configuration = this.config.getFirebaseConfig(configurationName);

        this.mainApp = firebase.initializeApp(firebaseConfig, firebaseConfig.projectId);

        firebase.firestore(this.mainApp).settings(SynavoxFirestore.settings);

        this.db = firebase.firestore(this.mainApp);

        console.log(`Firebase app name: ${this.mainApp.name}`);
    };

    getCollectionReference(requestedCollection: string): firebase.firestore.CollectionReference {
        let requestedCollectionRef: firebase.firestore.CollectionReference = firebase.firestore(this.mainApp).collection(requestedCollection);
        return requestedCollectionRef;
    };

    getDatabaseSubreference(parentCollection: firebase.firestore.CollectionReference, subCollection: string): firebase.firestore.CollectionReference {
        let requestedCollectionRef: firebase.firestore.CollectionReference = parentCollection.doc().collection("Cholesterol");
        return requestedCollectionRef;
    };
}

