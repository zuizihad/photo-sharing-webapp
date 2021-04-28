import React from 'react';

const UploadPhoto = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card mt-5">
                <div className="card-body">
                    <h3 className="text-center text-secondary my-3">upload photo in an album</h3>
                    <form action="">
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" placeholder="Album Name" aria-label="name" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>select photo album</option>
                                <option value="1">school</option>
                                <option value="2">country side tour</option>
                                <option value="3">picnic</option>
                                <option value="4">maldwip</option>
                                <option value="5">nijhum dwip</option>
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