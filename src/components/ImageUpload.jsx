import React, { useState } from 'react';
import {storage} from '../firebase'
import { ref, getStorage, getDownloadURL, uploadBytes } from 'firebase/storage';

const ImageUpload = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const storage = getStorage(); 

    const handleFormSubmit = async (event) => {
        event.preventDefault();   
        let photoURL = null

        if(selectedImage) {
            const storageRef = ref(storage, ``);
            await uploadBytes(storageRef, selectedImage)
            const downloadURL = await getDownloadURL(storageRef);
            photoURL = downloadURL;
        }
        try {
            console.log('Photo uploaded successfully')


      
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div>
            
        </div>
    );
}

export default ImageUpload;