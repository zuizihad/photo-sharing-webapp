import React, { useEffect, useState } from 'react';

const UploadPhoto = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/getAlbum`)
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [])
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card mt-5">
                <div className="card-body">
                    <h3 className="text-center text-secondary my-3">upload photo in an album</h3>
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="file" class="form-control" placeholder="Album Name" aria-label="name" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>select photo album</option>
                                {
                                    albums.map(album => <option value={album.albumName}>{album.albumName}</option>)
                                }
                            </select>
                        </div>
                        <div className="text-center"><button type="button" class="btn btn-secondary">upload</button></div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UploadPhoto;