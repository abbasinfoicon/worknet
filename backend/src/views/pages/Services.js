import bsCustomFileInput from 'bs-custom-file-input'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { useGetDataQuery } from '../../features/services/serviceApi';
import Create from '../../components/template/service/Create';
import View from '../../components/template/service/View';
import Update from '../../components/template/service/Update';
import Delete from '../../components/template/service/Delete';

const Services = () => {
  const { data: srvsData, isLoading, isError, isSuccess, error, } = useGetDataQuery();
  const [open, setOpen] = useState('');
  const [uid, setUid] = useState(null);
  const [sgl, setSgl] = useState([]);

  const openModal = (id, name) => {
    setOpen("show");
    document.body.classList.add('modal-open');

    var div = document.createElement('div');
    div.className = 'modal-backdrop fade show';
    document.body.appendChild(div);

    setUid(name);

    const sldDet = srvsData?.data?.filter((item) => {
      return item._id === id
    })
    setSgl(sldDet);
  }

  const closeModal = () => {
    setOpen('');
    document.body.classList.remove('modal-open');
    document.querySelectorAll(".modal-backdrop").forEach(el => el.remove())
  }

  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

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
        ) : srvsData?.data?.length === 0 ? (
          <p>Empty Data !!!</p>
        ) :
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: '1%' }}>#</th>
                <th style={{ width: '100px' }}>Image</th>
                <th>Title</th>
                <th>Sub Title</th>
                <th>Content</th>
                <th>Link</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                srvsData?.data?.map((item, i) =>
                  <tr key={i}>
                    <td>#{i + 1}</td>
                    <td><img src={`//${item.img}`} alt={item.title} className="img-fluid Flag" />  </td>
                    <td>{item.title}</td>
                    <td>{item.subtitle}</td>
                    <td className="smdesc" dangerouslySetInnerHTML={{ __html: JSON.stringify(item.content) }}></td>
                    <td>{item.linkTxt} <span>{item.link}</span></td>
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
        }
      </div>

      <div className={`modal fade ${open}`} id="addNew">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">{uid == "view" ? "View Slider" : uid == "edit" ? "Edit Slider" : uid == "delete" ? "Delete Slider" : "Add New"}</h4>
              <button type="button" className="close" onClick={() => closeModal()}>
                <span>×</span>
              </button>
            </div>

            {
              uid == null &&
              <Create close={closeModal} />
            }

            {
              uid == "view" &&
              <View content={sgl} close={closeModal} />
            }

            {
              uid == "edit" &&
              <Update update={sgl} close={closeModal} />
            }

            {
              uid == "delete" &&
              <Delete content={sgl} close={closeModal} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services