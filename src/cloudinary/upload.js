import axios from "axios";
import { uploadVideoOrImageURLToFirebase } from "../firebase/uploadVideoOrImageURLToFirebase";

export async function upload(type, file, user) {
    let cloudinaryUrl = 'https://api.cloudinary.com/v1_1/drld54ue0/video/upload';

    if (type === "image") cloudinaryUrl = "https://api.cloudinary.com/v1_1/drld54ue0/image/upload";

    async function uploadVideoOrImage() {
        if (!file) return false;

        ///setUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'GeneralPreset');

        try {
            const response = await axios.post(cloudinaryUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);

            await uploadVideoOrImageURLToFirebase(response.data.secure_url, response.data.public_id, user);
            return true;

        } catch (error) {
            console.error('Error uploading video:', error);
            return false;

        } finally {
            ///setUploading(false);
        }
    };

    const res = await uploadVideoOrImage();

    return res;
}