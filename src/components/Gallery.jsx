import React, { useEffect, useState } from 'react';
import { storage } from '../firebase';
import {ref, listAll, getDownloadURL} from 'firebase/storage'
import PhotoCard from './PhotoCard';



const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages()
    }, []);

    const handleImageUpload = () => {
        fetchImages();
    }

    const fetchImages = () => {
        const listRef = ref(storage, 'images/');
        listAll(listRef)
            .then((response) => {
                const imagePromise = response.items.map((itemRef) => {
                    return getDownloadURL(itemRef);
                })

                Promise.all(imagePromise)
                    .then((urls) => {
                        console.log('fetched urls:', urls)
                        setImages(urls)
                    })
                    .catch((error) => {
                        console.error('Error fetching Image URLs:', error)
                    })
            })
            .catch((error) => {
                console.error('Error fetching Images: ', error);
            });
    };

    return (
        <div className='gallery'>
            {images.map((url, index) => (
                <PhotoCard key={index} photoURL={url} />
            ))}
        </div>
    );
};

export default Gallery;