import React, { useEffect, useRef, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import { toast } from 'react-toastify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useAddDataMutation } from '../../../features/services/serviceApi';

const Create = ({ close }) => {
    const [addData, resAdd] = useAddDataMutation()
    const [content, setContent] = useState('')
    const editorRef = useRef(null);
    const [field, setField] = useState({
        title: "",
        img: "",
        subtitle: "",
        content: "",
        link: "",
        linkTxt: "",
        status: "",
    });

    const handleChange = (e) => {
        if (e.target.id === 'img') {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                setField({ ...field, file: file.name, [e.target.name]: reader.result });
            }

            reader.readAsDataURL(file);
        } else {
            setField({ ...field, [e.target.name]: e.target.value });
        }
    }

    const clearEditorData = () => {
        const editorInstance = editorRef.current.editor;
        editorInstance.setData('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        field.content = content;
        const res = await addData(field);

        console.log(res)

        if (typeof (res.data) !== 'undefined' && res.data.status === 'Success') {
            toast.success(res.data.message);

            setField({
                title: "",
                img: "",
                subtitle: "",
                content: "",
                link: "",
                linkTxt: "",
                status: "",
            });

            clearEditorData();

            document.getElementById('customForm').reset();
            close();
        } else {
            toast.error(res.error.data.message);
        }
    };

    useEffect(() => {
        bsCustomFileInput.init()
    }, [])

    return (
        <form id="customForm">
            <div className="modal-body">
                <div className="card-body">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" value={field.title} onChange={handleChange} className="form-control" placeholder="Enter Title..." />
                    </div>

                    <div className="form-group">
                        <label>Sub Title</label>
                        <textarea type="text" name="subtitle" value={field.subtitle} onChange={handleChange} className="form-control" placeholder="Enter Sub Title..." />
                    </div>

                    <div className="form-group">
                        <label>Content</label>
                        <CKEditor editor={ClassicEditor} ref={editorRef} onChange={(event, editor) => { const data = editor.getData(); setContent(data); }} />
                    </div>

                    <div className="form-group">
                        <label>Upload Image</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" name="img" onChange={handleChange} className="custom-file-input" id="img" accept="image/png, image/jpeg" />
                                <label className="custom-file-label" htmlFor="file">Choose Image</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Link Text</label>
                                <input type="text" name="linkTxt" value={field.linkTxt} onChange={handleChange} className="form-control" placeholder="Enter Link Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Link</label>
                                <input type="url" name="link" value={field.link} onChange={handleChange} className="form-control" placeholder="Enter Link..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-control" name="status" value={field.status} onChange={handleChange}>
                                    {["success", "pending", "reject"].map((item, i) => <option value={item} key={i}>{item}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-default border" onClick={() => close()}>Close</button>
                <button type='button' onClick={handleSubmit} className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
            </div>
        </form>
    )
}

export default Create