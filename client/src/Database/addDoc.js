import { db } from "../firebase";

export function addDoc(collection,doc,data){

    return new Promise((resolve, reject) => {

        db.collection(collection).doc(doc).set(data).then(result=>{
            resolve(1);
        }).catch(error=>{
            reject(error)
        })
    });
}

export function addSubDoc(collection,doc,sub_collection,sub_doc,data){

    return new Promise((resolve, reject) => {

        db.collection(collection).doc(doc).collection(sub_collection).doc(sub_doc).set(data).then(result=>{
            resolve(1);
        }).catch(error=>{
            reject(error)
        })
    });
}

export default function addToList(collection,doc,data){
    return new Promise((resolve, reject) => {
        
        db.collection(collection).doc(doc).collection("List").doc(data.id).set(data).then(result=>{
            resolve(1);
        }).catch(error=>{
            reject(error)
        })
    });
}