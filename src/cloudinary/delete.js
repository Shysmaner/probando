import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { deleteVideoOrImageFromFirebase } from "../firebase/deleteVideoOrImageFromFirebase";

export async function deletee(docUid, publicId) {
    let res;

    await fetch("http://localhost:5000/deleteFromCloudinary", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            publicId
        })
    })
        .then(res => res.ok ? res.status : Promise.reject(res))
        .then(status => res = status)
        .catch(err => res = err);

    if(res === 200) deleteVideoOrImageFromFirebase(docUid);
}