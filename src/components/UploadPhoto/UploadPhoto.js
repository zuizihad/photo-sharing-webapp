import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const UploadPhoto = () => {
    const [albums, setAlbums] = useState([])
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/api/getAlbum`)
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [])

    const handleImage = event => {
        const imageData = new FormData()
        imageData.set('key', 'bcaa76da5c37cf7520b24da6b76c88ea');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res?.data?.data?.display_url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onSubmit = data => {
        const albumImageData = {
            albumName: data.albumName,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/api/uploadImage`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(albumImageData)
        })
            .then(response => {
                alert('new Image added successfully')
            })
    };
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card mt-5">
                <div className="card-body">
                    <h3 className="text-center text-secondary my-3">upload photo in an album</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group mb-3">
                            <input type="file" onChange={handleImage} class="form-control" placeholder="Album Name" aria-label="name" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <select class="form-select" {...register("albumName", { required: true })} id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>select photo album</option>
                                {
                                    albums.map(album => <option value={album.albumName}>{album.albumName}</option>)
                                }
                            </select>
                        </div>
                        <div className="text-center"><button type="submit" class="btn btn-secondary">upload</button></div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UploadPhoto;