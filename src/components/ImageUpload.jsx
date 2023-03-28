import React, { useState } from 'react';
import {storage} from '../firebase'
import { ref, getStorage, getDownloadURL, uploadBytes } from 'firebase/storage';

const ImageUpload = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const storage = getStorage(); 

    const handleFormSubmit = async (event) => {
        event.preventDefault();   
        let photoURL = null
    }

    return (
        <div>
            
        </div>
    );
}

export default ImageUpload;