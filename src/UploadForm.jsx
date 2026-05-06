import { useContext, useState } from "react";
import { upload } from "./cloudinary/upload";
import { UserContext } from "./UserProvider";

export function UploadForm() {
    const { user } = useContext(UserContext);
    const [selectValue, setSelectValue] = useState("image");
    const [inputValue, setInputValue] = useState(null);

    const handleSelectOnChange = (value) => {
        setSelectValue(value);
    }

    const handleFormOnSubmit = async(event) => {
        event.preventDefault();
        
        if(!inputValue) return;

        const res = await upload(selectValue, inputValue, user);

        console.log(res);
    }

    const handleInputOnChange = (value) => {
        setInputValue(value);
    }

    return (
        <>
            <select onChange={(event)=> handleSelectOnChange(event.target.value)}>
                <option value="image">Imágen</option>
                <option value="video">Vídeo</option>
            </select>
            <form onSubmit={(event)=> handleFormOnSubmit(event)}>
                <input type="file" onChange={(event)=> handleInputOnChange(event.target.files[0])}></input>
                <button type="submit">Enviar</button>
            </form></>
    )
}