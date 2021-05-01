import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ImageCard from './ImageCard';
import axios from 'axios';

const ImageAlbum = () => {
    const { name } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/album/${name}`)
            .then((res) => res.json())
            .then(data => setAlbums(data))
    }, []);
    return (
        <div className="container">
            <div className="row">
                {
                    // albums.map(singelImage => <ImageCard singelImage={singelImage}></ImageCard>)
                    albums.map(album => <ImageCard album={album}></ImageCard>)
                }
            </div>
        </div>

    );
};

export default ImageAlbum;