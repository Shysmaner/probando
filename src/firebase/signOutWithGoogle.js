import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export const signOutWithGoogle = async () => {
    try {
        await signOut(auth).then(() => {
            window.location.href = window.location.origin;
        }).catch((error) => {
            console.log(error);
        });

    } catch (err) {
        console.log(err);
    }
}