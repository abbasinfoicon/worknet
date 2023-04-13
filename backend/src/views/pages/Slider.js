import bsCustomFileInput from 'bs-custom-file-input'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useEffect, useState } from 'react'
import { useGetSliderQuery, useAddSliderMutation, useDeleteSliderMutation, useUpdateSliderMutation } from '../../features/services/sliderApi'
import { ToastContainer, toast } from 'react-toastify';

const Slider = () => {
  const { data, isError, isLoading } = useGetSliderQuery();
  const [addSlider, resAdd] = useAddSliderMutation();
  const [deleteSlider, resDel] = useDeleteSliderMutation();
  const [updateSlider, resUpd] = useUpdateSliderMutation();

  const [uid, setUid] = useState(null);
  const [open, setOpen] = useState('');
  const [sgl, setSgl] = useState([]);
  const [content, setContent] = useState('')
  const [field, setField] = useState({
    title: '',
    linkText: '',
    img: '',
    link: '',
    status: '',
    file: ''
  });

  const handleChange = (e, upkey) => {
    try {
      if (e.target.id === 'img') {
        var file = e.target.files[0];
        var reader = new FileReader();

        console.log("file image", file)

        reader.onloadend = function () {
          if (upkey == "update") {
            setSgl({ ...sgl, file: file.name, [e.target.name]: reader.result });
          } else {
            setField({ ...field, file: file.name, [e.target.name]: reader.result });
          }
        }

        reader.readAsDataURL(file);
      } else {

        if (upkey == "update") {
          setSgl({ ...sgl, [e.target.name]: e.target.value });
        } else {
          setField({ ...field, [e.target.name]: e.target.value });
        }
      }

      if (upkey == "update") {
        console.log("handleChange Sgl- ", sgl)
      } else {
        console.log("handleChange Field- ", field)
      }
    } catch (error) {
      console.log('Error occurred while handling input change:', error);
    }
  }

  const handleSubmit = async (e, upkey) => {
    e.preventDefault();

    const { title, img, link, status, file } = upkey == 'update' ? sgl : field;
    if (title && img) {
      (upkey == 'update' ? sgl : field).content = content;
      await (upkey == 'update' ? updateSlider(sgl) : addSlider(field));
      upkey == 'update' ? toast.success("Update Data Successfully!!!") : toast.success("Create Data Successfully!!!");

      setField({
        title: '',
        linkText: '',
        img: '',
        link: '',
        status: '',
        file: ''
      });

      setContent('');
      document.getElementById('customForm').reset();
      closeModal();

    } else {
      toast.error("All Feild required!!!");
    }
  };

  const openModal = (id, name) => {
    setOpen("show");
    document.body.classList.add('modal-open');

    var div = document.createElement('div');
    div.className = 'modal-backdrop fade show';
    document.body.appendChild(div);

    setUid(name);

    const sldDet = data?.data?.filter((sigle) => {
      return sigle._id === id
    })
    setSgl(sldDet);
  }

  const closeModal = () => {
    setOpen('');
    document.body.classList.remove('modal-open');
    document.querySelectorAll(".modal-backdrop").forEach(el => el.remove())
  }

  const deleteSliderData = (id) => {
    deleteSlider(id);
    closeModal();
    setField(data);
  }

  useEffect(() => {
    bsCustomFileInput.init()
  }, [open])

  // console.log("data", data);

  return (
    <div className="card">
      <ToastContainer />

      <div className="card-header">
        <h3 className="card-title">All Details</h3>

        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus"></i>
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div className="add-new p-2 bg-light">
        <button onClick={() => openModal()}>Add New</button>
      </div>

      <div className="card-body p-0">
        {isError ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data?.data.length > 0 ? (
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: '1%' }}>#</th>
                <th style={{ width: '100px' }}>Image</th>
                <th style={{ width: '25%' }}>Title</th>
                <th style={{ width: '30%' }}>Content</th>
                <th>Button</th>
                <th>Link</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                data?.data?.map((item, index) =>
                  <tr key={index}>
                    <td>#{index + 1}</td>
                    <td><img src={item.img} alt="india" className="img-fluid Flag" />  </td>
                    <td>{item.title}</td>
                    <td className="d-flex" dangerouslySetInnerHTML={{ __html: JSON.stringify(item.content) }}></td>
                    <td>{item.linkText}</td>
                    <td>{item.link}</td>
                    <td className={`text-${item.status == 'success' ? 'success' : item.status == 'pending' ? 'warning' : 'danger'}`}>{item.status}</td>
                    <td className="project-actions text-right">
                      <button onClick={() => openModal(item._id, "view")} className="btn btn-primary btn-sm"><i className="fa fa-eye"></i></button>
                      <button onClick={() => openModal(item._id, "edit")} className="btn btn-info btn-sm mx-2"><i className="fa fa-edit"></i></button>
                      <button onClick={() => openModal(item._id, "delete")} className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                    </td>
                  </tr>
                )
              }

            </tbody>
          </table>
        ) : <p>Empty Data!!!</p>}
      </div>

      <div className={`modal fade ${open}`} id="addNew" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">{uid == "view" ? "View Slider" : uid == "edit" ? "Edit Slider" : uid == "delete" ? "Delete Slider" : "Add New"}</h4>
              <button type="button" className="close" onClick={() => closeModal()}>
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {
              uid == null &&
              <form id="customForm" onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="card-body">
                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" name="title" value={field.title} onChange={handleChange} className="form-control" placeholder="Enter Title..." />
                    </div>

                    <div className="form-group">
                      <label>Content</label>
                      <CKEditor editor={ClassicEditor} name="content" id="content" onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(data);
                      }} />
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
                          <label>Button Text</label>
                          <input type="text" name="linkText" value={field.linkText} onChange={handleChange} className="form-control" placeholder="Enter Button Text..." />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Page Link</label>
                          <select className="form-control" name="link" value={field.link} onChange={handleChange}>
                            {["bewerberInnen", "unternehmen", "team", "job", "kontakt"].map((item, i) => <option value={item} key={i}>{item}</option>)}
                          </select>
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
                  <button type="button" className="btn btn-default border" onClick={() => closeModal()}>Close</button>
                  <button type='submit' className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
                </div>
              </form>
            }

            {
              uid == "view" &&
              <div className="view-data p-3">
                <div className="row">
                  <div className="col-md-5">
                    <img src={sgl[0].img} alt="India" className='img-style img-fluid' />
                  </div>

                  <div className="col-md-7">
                    <h3 className="text-primary">{sgl[0].title}</h3>
                    <p className="text-muted d-flex" dangerouslySetInnerHTML={{ __html: JSON.stringify(sgl[0].content) }}></p>

                    <div className='d-flex align-items-center'>
                      <p className='btn btn-primary mr-2'>{sgl[0].linkText}</p>
                      <p>Page Link:- {sgl[0].link}</p>
                    </div>

                    <p className={`btn btn-${sgl[0].status == 'success' ? 'success' : sgl[0].status == 'pending' ? 'warning' : 'danger'} mb-0 mr-2`}>{sgl[0].status}</p>
                    <button type="button" className="btn btn-default border" onClick={() => closeModal()}>Close</button>
                  </div>
                </div>
              </div>
            }

            {
              uid == "edit" &&
              <form onSubmit={(e) => handleSubmit(e, "update")}>
                <div className="modal-body">
                  <div className="card-body">
                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" className="form-control" name='title' value={sgl[0].title} onChange={(e) => handleChange(e, "update")} placeholder="Enter Title..." />
                    </div>

                    <div className="form-group">
                      <label>Content</label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={sgl[0].content}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setContent(data);
                        }} />
                    </div>

                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <label>Upload Image</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input type="file" name="img" className="custom-file-input" onChange={(e) => handleChange(e, "update")} id="file" accept="image/png, image/jpeg" />
                              <label className="custom-file-label" htmlFor="file">Choose Image</label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Button Text</label>
                              <input type="text" name="linkText" value={sgl[0].linkText} onChange={(e) => handleChange(e, "update")} className="form-control" placeholder="Enter Button Text..." />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Page Link</label>
                              <select className="form-control" name="link" value={sgl[0].link} onChange={(e) => handleChange(e, "update")}>
                                {["bewerberInnen", "unternehmen", "team", "job", "kontakt"].map((item, i) => <option value={item} key={i}>{item}</option>)}
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Status</label>
                              <select className="form-control" name="status" value={sgl[0].status} onChange={(e) => handleChange(e, "update")}>
                                {["success", "pending", "reject"].map((item, i) => <option value={item} key={i}>{item}</option>)}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <img src={sgl[0].img} className='img-fluid' />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-default border" onClick={() => closeModal()}>Close</button>
                  <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
                </div>
              </form>
            }

            {
              uid == "delete" &&
              <div className="delete-modal">
                <i className="fas fa-times"></i>
                <h3>Are you sure?</h3>
                <p>Do you really want to delete these records? This process cannot be undone.</p>

                <div className="action">
                  <button className="btn btn-default border" onClick={() => closeModal()}>Cancel</button>
                  <button className="btn btn-danger" onClick={() => deleteSliderData(sgl[0]._id)} title={sgl[0]._id}>Delete</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider