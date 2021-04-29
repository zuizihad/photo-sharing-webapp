import React, { useEffect, useState } from 'react';
import AlbumCard from './AlbumCard';

const Profile = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/getAlbum`)
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    albums.map(album => <AlbumCard key={album._id} album={album}></AlbumCard>)
                }
            </div>
        </div>
    );
};

export default Profile;