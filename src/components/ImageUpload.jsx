import React, { useState } from 'react';
import {storage, app} from '../firebase.js'
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const ImageUpload = (props) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageChange = (event) => {
        if(event.target.files[0]) {
            setImage(event.target.files[0])
            setImagePreview(URL.createObjectURL(event.target.files[0]))
        }
    };

    const deleteImage = () => {
        setImage(null);
        setImagePreview(null);
        document.getElementById('imageInput').value = '';
    }

    const handleUpload = async(event) => {
        event.preventDefault()

        let photoURL = null
        if (image) {
            setUploading(true)
            const storageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(storageRef, image)
            const downloadURL = await getDownloadURL(storageRef);
            
            console.log('Image Uploaded: ', image.name, downloadURL)
            try {
                console.log(photoURL)
                setImage(null)
                setImagePreview(null)
                document.getElementById('imageInput').value='';
                return image.name
            }
            catch {
                console.log(error)
            }
            setUploading(false)
        }  
    }
    
    return (
        <div>
            {imagePreview && <img src={imagePreview} alt='Preview of Image' />}
            <input type="file" onChange={handleImageChange} id='imageInput'/>
            <button className='deleteImage' onClick={deleteImage}> Delete Image </button>
            <button className='uploadButton' onClick={handleUpload} disabled={!image || uploading} >
                {uploading ? 'Uploading' : 'Upload'}
            </button> 


        </div>
    );
}

export default ImageUpload;