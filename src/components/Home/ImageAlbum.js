import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import ImageCard from '../Profile/ImageCard';

const ImageAlbum = () => {
    const { name } = useParams();
    const [albums, setAlbums] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/api/album/${name}`)
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [name])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(
    //             `http://localhost:5000/api/album/${name}`,
    //         );
    //         setAlbums(result.data);
    //     };
    //     fetchData();
    // }, [name]);
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