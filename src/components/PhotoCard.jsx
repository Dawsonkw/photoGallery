import React, { useState } from 'react';
import placeholder from '../images/placeholder.png'
import { storage } from '../firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


function PhotoCard(props) {
    const [photoURL, setPhotoURL] = useState(null)

    const storage = getStorage();
    const imageRef = ref(storage, `images/${''}`)

    getDownloadURL(imageRef)
    .then((url) => {
        setPhotoURL(url)
    })
    .catch((error) => console.log(error))
    

    return (
        <div className='photoCard'> 
            <div className='picBox'>
                <div>
                    <img src={photoURL} alt="" />
                </div>
            </div>
            <div className='textArea'>
                <div>
                    Area for text
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;