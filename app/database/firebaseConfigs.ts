interface KeyValuePair {
    [key: string]: Configuration;
}

export interface Configuration {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
};

export class FirestoreConfig {

    private static configurations: KeyValuePair = {
        ["admin"]: {
            apiKey: "AIzaSyDWoBUhqcPPNNsHGPM1x5eI6gRRYTXNWPM",
            authDomain: "synavox-live.firebaseapp.com",
            databaseURL: "https://synavox-live.firebaseio.com",
            projectId: "synavox-live",
            storageBucket: "synavox-live.appspot.com",
            messagingSenderId: "341085923340"
        },

        ["pharmacy"]: {
            apiKey: "AIzaSyDWoBUhqcPPNNsHGPM1x5eI6gRRYTXNWPM",
            authDomain: "synavox-live.firebaseapp.com",
            databaseURL: "https://synavox-live.firebaseio.com",
            projectId: "synavox-live",
            storageBucket: "synavox-live.appspot.com",
            messagingSenderId: "341085923340"
        }
    };

    getFirebaseConfig(name: string): Configuration {
        return FirestoreConfig.configurations[name];
    };
};

