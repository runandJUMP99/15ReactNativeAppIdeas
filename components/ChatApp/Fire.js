import firebase from "firebase";

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyA6nD-Geskyu-PtYv-eqCcHWvlGY_Yzhto",
                authDomain: "my-app-55677.firebaseapp.com",
                projectId: "my-app-55677",
                storageBucket: "my-app-55677.appspot.com",
                messagingSenderId: "810525597796",
                appId: "1:810525597796:web:5457e2dba0eefd3024ff71",
                measurementId: "G-5EWYP4858T"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        });
    }

    parse = message => {
        const {user, text, timestamp} = message.val();
        const {key: _id} = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        }
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire();