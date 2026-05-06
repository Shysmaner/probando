import { useContext, useEffect, useState } from "react"
// import { loadDataFromFirebase } from "./firebase/loadDataFromFirebase";
import { UserContext } from "./UserProvider";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { deletee } from "./cloudinary/delete";

export function LoadedData() {
    const { user } = useContext(UserContext);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loadedData, setLoadedData] = useState([]);

    // const getData = async () => {
    //     if (!user) return;

    //     const res = await loadDataFromFirebase(user);

    //     setLoadedData(res);

    //     setDataLoaded(true);

    //     res.map((doc, index) => {
    //         console.log(doc);
    //     })
    // }

    useEffect(() => {
        //getData();

        if(!user) return;

        const colRef = query(collection(db, "cloudinary"), where("userUid", "==", user.uid));

        const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
            let docs = [];

            if (!querySnapshot.empty) {
                querySnapshot.docs.forEach(doc => {
                    const updatedDoc = {
                        ...doc.data(),
                        uid: doc.id
                    }
                    docs.push(updatedDoc);
                });
            }

            setLoadedData(docs);
            setDataLoaded(true);
        });


        return ()=> unsubscribe();
    }, [user]);

    const handleDelete = async(docUid, publicId) => {
        if(confirm("¿Quieres eliminar el documento?")){
            await deletee(docUid, publicId);
        }
    }

    return (
        <>
            {dataLoaded && (
                loadedData.length > 0 ? (
                    loadedData.map((doc, index) => {
                        return <div key={index}>
                            <img src={doc.url}></img>
                            <button onClick={()=> handleDelete(doc.uid, doc.publicId)}>Eliminar</button>
                        </div>
                    })
                ) : (
                    <p>No hay imágenes ni vídeos subidos</p>
                )
            )}

        </>
    )
}