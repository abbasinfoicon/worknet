import React, { useEffect, useRef, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import { toast } from 'react-toastify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useAddJobMutation } from '../../../features/services/jobApi';

const Create = ({ close }) => {
    const [addData, resAdd] = useAddJobMutation()
    const [content, setContent] = useState('')
    const editorRef = useRef(null);
    const [field, setField] = useState({
        title: "",
        img: "",
        smallDesc: "",
        reference: "",
        department: "",
        location: "",
        address: "",
        city: "",
        salary: "",
        enployment: "",
        merit: "",
        working: "",
        empBenefits: "",
        yourTasks: "",
        yourProfile: "",
        contact: "",
        author: "",
        status: "pending",
        file: ""
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
        const { title, img, smallDesc, reference, department, location, address, city, salary, enployment, merit, working, empBenefits, yourTasks, yourProfile, contact, author, status } = field;
        if (title && img && smallDesc && reference && department && location && address && city) {
            field.content = content;
            const res = await addData(field);

            // console.log("field-", field)
            toast.success("Create Data Successfully!!!");

            setField({
                title: "",
                img: "",
                smallDesc: "",
                reference: "",
                department: "",
                location: "",
                address: "",
                city: "",
                salary: "",
                enployment: "",
                merit: "",
                working: "",
                empBenefits: "",
                yourTasks: "",
                yourProfile: "",
                contact: "",
                author: "",
                status: "",
                file: ""
            });

            clearEditorData();

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
        <form id="customForm">
            <div className="modal-body">
                <div className="card-body">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" value={field.title} onChange={handleChange} className="form-control" placeholder="Enter Title..." />
                    </div>

                    <div className="form-group">
                        <label>smallDesc</label>
                        <textarea type="text" name="smallDesc" value={field.smallDesc} onChange={handleChange} className="form-control" placeholder="Enter Title..." />
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
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Reference</label>
                                <input type="text" name="reference" value={field.reference} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Department</label>
                                <input type="text" name="department" value={field.department} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Address</label>
                                <textarea name="address" value={field.address} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" name="location" value={field.location} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" value={field.city} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Salary</label>
                                <input type="text" name="salary" value={field.salary} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Enployment</label>
                                <input type="text" name="enployment" value={field.enployment} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Merit</label>
                                <input type="text" name="merit" value={field.merit} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Working</label>
                                <input type="text" name="working" value={field.working} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>EmpBenefits</label>
                                <input type="text" name="empBenefits" value={field.empBenefits} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Your Tasks</label>
                                <input type="text" name="yourTasks" value={field.yourTasks} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Your Profile</label>
                                <input type="text" name="yourProfile" value={field.yourProfile} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Contact</label>
                                <input type="text" name="contact" value={field.contact} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text" name="author" value={field.author} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
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