// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "./firebase";

// export async function loadDataFromFirebase(user) {

//     const collectionRef = query(collection(db, "cloudinary"), where("userUid", "==", user.uid)),
//         collectionSnapshot = await getDocs(collectionRef);

//     let docs = [];
//     if (!collectionSnapshot.empty) {
//         collectionSnapshot.docs.forEach(doc => {
//             docs.push(doc.data());
//         });
//     }

//     return docs;
// }