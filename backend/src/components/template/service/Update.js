import React, { useEffect, useRef, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import bsCustomFileInput from 'bs-custom-file-input'
import { toast } from 'react-toastify';
import { useUpdateDataMutation } from '../../../features/services/serviceApi';

const Update = ({ update, close }) => {
    const [updateData] = useUpdateDataMutation()
    const [sgl, setSgl] = useState(update[0])
    const [content, setContent] = useState(update[0].content)

    const handleChange = (e) => {
        if (e.target.id === 'img') {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                setSgl({ ...sgl, file: file.name, [e.target.name]: reader.result });
            }
            reader.readAsDataURL(file);
        } else {
            setSgl({ ...sgl, [e.target.name]: e.target.value });
        }
    }

    const handleContent = (e, editor) => {
        const data = editor.getData();
        setContent(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("update:", sgl)

        const obj = { ...sgl }
        obj.content = content;
        const res = await updateData(obj);

        if (typeof (res.data) !== 'undefined' && res.data.status === 'Success') {
            toast.success(res.data.message);
            close();

        } else {
            toast.error(res.error.data.message);
        }
    };


    useEffect(() => {
        bsCustomFileInput.init()
    }, [])

    return (
        <form id="customForm" onSubmit={handleSubmit}>
            <div className="modal-body">
                <div className="card-body">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" value={sgl.title} onChange={handleChange} className="form-control" placeholder="Enter Title..." />
                    </div>

                    <div className="form-group">
                        <label>Sub Title</label>
                        <textarea type="text" name="subtitle" value={sgl.subtitle} onChange={handleChange} className="form-control" placeholder="Enter Sub Title..." />
                    </div>

                    <div className="form-group">
                        <label>Content</label>
                        <CKEditor editor={ClassicEditor} data={sgl.content} onChange={(e, editor) => handleContent(e, editor)} />
                    </div>

                    <div className="form-group">
                        <label>Upload Image</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" name="img" onChange={handleChange} className="custom-file-input" id="img" accept="image/png, image/jpeg" />
                                <label className="custom-file-label" htmlFor="file">{sgl.file}</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Link Text</label>
                                <input type="text" name="linkTxt" value={sgl.linkTxt} onChange={handleChange} className="form-control" placeholder="Enter Link Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Link</label>
                                <input type="url" name="link" value={sgl.link} onChange={handleChange} className="form-control" placeholder="Enter Link..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-control" name="status" value={sgl.status} onChange={handleChange}>
                                    {["success", "pending", "reject"].map((item, i) => <option value={item} key={i}>{item}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-default border" onClick={() => close()}>Close</button>
                <button type='submit' className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
            </div>
        </form>
    )
}

export default Update