import { Header } from "./Header";
import { LoadedData } from "./LoadedData";
import { UploadForm } from "./UploadForm";

export function Home(){
    return (
        <div>
            <Header/>
            <h2>Hello</h2>
            <LoadedData/>
            <UploadForm/>
        </div>
    )
}