import React, { useState } from 'react'
import Create from '../../components/template/job/Create';
import View from '../../components/template/job/View';
import Delete from '../../components/template/job/Delete';
import Update from '../../components/template/job/Update';
import { useGetJobQuery } from '../../features/services/jobApi';
import { ToastContainer } from 'react-toastify';

const Job = () => {
  const { data: jobData, isLoading, isError, isSuccess, error, } = useGetJobQuery();
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

    const sldDet = jobData?.data?.filter((item) => {
      return item._id === id
    })
    setSgl(sldDet);
  }

  const closeModal = () => {
    setOpen('');
    document.body.classList.remove('modal-open');
    document.querySelectorAll(".modal-backdrop").forEach(el => el.remove())
  }

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
        ) : jobData?.data?.length === 0 ? (
          <p>Empty Data !!!</p>
        ) :
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: '1%' }}>#</th>
                <th style={{ width: '100px' }}>Image</th>
                <th style={{ width: '20%' }}>Title</th>
                <th style={{ width: '20%' }}>Small Desc</th>
                <th style={{ width: '5%' }}>Reference</th>
                <th style={{ width: '5%' }}>Department</th>
                <th style={{ width: '5%' }}>Location</th>
                <th style={{ width: '5%' }}>Address</th>
                <th style={{ width: '5%' }}>City</th>
                <th style={{ width: '5%' }}>Salary</th>
                <th style={{ width: '5%' }}>Enployment</th>
                <th>Status</th>
                <th style={{ width: '10%' }}></th>
              </tr>
            </thead>
            <tbody>

              {
                jobData?.data?.map((item, i) =>
                  <tr key={i}>
                    <td>#{i + 1}</td>
                    <td><img src={item.img} alt="india" className="img-fluid Flag" />  </td>
                    <td>{item.title}</td>
                    <td className="d-flex" dangerouslySetInnerHTML={{ __html: JSON.stringify(item.smallDesc) }}></td>
                    <td>{item.reference}</td>
                    <td>{item.department}</td>
                    <td>{item.location}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.salary}</td>
                    <td>{item.enployment}</td>

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

export default Job