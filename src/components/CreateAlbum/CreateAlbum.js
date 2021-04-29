import React, { useState } from 'react';
import axios from 'axios';

const CreateAlbum = () => {
    const [album, setAlbum] = useState({
        albumName: '',
        albumPrivacy: '',
    })
    const handleChange = (e) => {
        const newAlbumInfo = { ...album };
        newAlbumInfo[e.target.name] = e.target.value;
        setAlbum(newAlbumInfo);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/user/createAlbum`, { ...album })
            alert('new album created successfully');

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card mt-5">
                <div className="card-body">
                    <h3 className="text-center text-secondary my-3">create an album</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">A</span>
                            <input type="text" onBlur={handleChange} name="albumName" class="form-control" placeholder="Album Name" aria-label="name" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <select class="form-select" onClick={handleChange} name="albumPrivacy" id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>select photo album privacy</option>
                                <option value="private">private</option>
                                <option value="public">public</option>
                            </select>
                        </div>
                        <div className="text-center"><button type="submit" class="btn btn-secondary">create</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAlbum;