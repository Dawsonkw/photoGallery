import React, { useState } from 'react';



function PhotoCard({photoURL}) {
    console.log('photocard URL', photoURL)
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




// const storage = getStorage();
// const imageRef = ref(storage, 'images/'

// getDownloadURL(imageRef)
// .then((url) => {
//     setPhotoURL(url)
// })
// .catch((error) => console.log(error))
