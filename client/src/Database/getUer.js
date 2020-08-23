import firebase from '../firebase'

export default function getUser() {
    return new Promise((resolve, reject) => {
        var data = []

        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                data.push(user.displayName);
                data.push(user.photoURL);
                data.push(user.email);
                data.push(user.uid);
                resolve(data)
            }
            else{
                resolve(-1)
            }
        })

    });
}