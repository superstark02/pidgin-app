import { db } from "../firebase";

export default function deleteDoc(collection,doc,subCollection,id){

    return new Promise((resolve, reject) => {

        db.collection(collection).doc(doc).collection(subCollection).doc(id).delete().then(snap=>{
            resolve(1);
        })
    });

}