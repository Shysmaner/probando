import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function deleteVideoOrImageFromFirebase(docUid) {
    const docRef = doc(db, "cloudinary", docUid),
        docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        await deleteDoc(docRef);
    }
}