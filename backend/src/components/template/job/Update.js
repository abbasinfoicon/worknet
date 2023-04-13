import React, { useEffect, useRef, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import bsCustomFileInput from 'bs-custom-file-input'
import { useUpdateJobMutation } from '../../../features/services/jobApi';
import { toast } from 'react-toastify';

const Update = ({ update, close }) => {
    const [updateData, resUpd] = useUpdateJobMutation()
    const [sgl, setSgl] = useState(update[0])
    const [content, setContent] = useState('')
    const editorRef = useRef(null);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, img, smallDesc, reference, department, location, address, city, salary, enployment, merit, working, empBenefits, yourTasks, yourProfile, contact, author, status } = sgl;
        if (title && img && smallDesc && reference && department && location && address && city) {
            sgl.content = content;

            await updateData(sgl);

            toast.success("Update Data Successfully!!!");

            const editorInstance = editorRef.current.editor;
            editorInstance.setData('');
            document.getElementById('customForm').reset();
            close();

        } else {
            toast.error("All Feild required!!!");
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
                        <label>smallDesc</label>
                        <textarea type="text" name="smallDesc" value={sgl.smallDesc} onChange={handleChange} className="form-control" placeholder="Enter Title..." />
                    </div>

                    <div className="form-group">
                        <label>Content</label>
                        <CKEditor editor={ClassicEditor} data={sgl.content} ref={editorRef} onChange={(e, editor) => { const data = editor.getData(); setContent(data); }} />
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
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Reference</label>
                                <input type="text" name="reference" value={sgl.reference} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Department</label>
                                <input type="text" name="department" value={sgl.department} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Address</label>
                                <textarea name="address" value={sgl.address} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" name="location" value={sgl.location} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" value={sgl.city} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Salary</label>
                                <input type="text" name="salary" value={sgl.salary} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Enployment</label>
                                <input type="text" name="enployment" value={sgl.enployment} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Merit</label>
                                <input type="text" name="merit" value={sgl.merit} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Working</label>
                                <input type="text" name="working" value={sgl.working} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>EmpBenefits</label>
                                <input type="text" name="empBenefits" value={sgl.empBenefits} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Your Tasks</label>
                                <input type="text" name="yourTasks" value={sgl.yourTasks} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Your Profile</label>
                                <input type="text" name="yourProfile" value={sgl.yourProfile} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Contact</label>
                                <input type="text" name="contact" value={sgl.contact} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text" name="author" value={sgl.author} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
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