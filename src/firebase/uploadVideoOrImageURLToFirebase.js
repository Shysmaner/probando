import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

export async function uploadVideoOrImageURLToFirebase(url, publicId, user){
    const collectionRef = collection(db, "cloudinary");

    console.log(url, publicId, user);
    await addDoc(collectionRef, {
        url,
        publicId,
        userUid: user.uid
    });
}