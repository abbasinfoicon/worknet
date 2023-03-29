import bsCustomFileInput from 'bs-custom-file-input'
import { CKEditor } from 'ckeditor4-react'
import React, { useEffect } from 'react'

const Testimonial = () => {
  useEffect(() => {
    bsCustomFileInput.init()
  }, [])
  
  return (
    <div className="card">
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
        <button data-toggle="modal" data-target="#addNew">Add New</button>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{ width: '1%' }}>#</th>
              <th style={{ width: '100px' }}>Image</th>
              <th style={{ width: '25%' }}>Title</th>
              <th style={{ width: '30%' }}>Content</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td><img src="https://www.infoicontechnologies.com/uploads/1637928011506-5d8da684cb46aded530962309228859a.jpg" alt="india" className="img-fluid Flag" />  </td>
              <td>SwiftUI – An Interactive and Revolutionary UI Framework Equipped with Futuristic Features!</td>
              <td>Call or e-mail our sales department to place an order or for pricing, product information, pre-sales advice and sales information.</td>
              <th className='text-warning'>Pending</th>
              <td className="project-actions text-right">
                <a className="btn btn-primary btn-sm" href="#"><i className="fas fa-eye"></i></a>
                <a className="btn btn-info btn-sm mx-2" href="#"><i className="fas fa-pencil-alt"></i></a>
                <a className="btn btn-danger btn-sm" href="#"><i className="fas fa-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="addNew" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="card-body">
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Title..." />
                  </div>

                  <div className="form-group">
                    <label>Content</label>
                    <CKEditor initData="<p>Full Description</p>" />
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group">
                        <label>Upload Image</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input type="file" name="img" className="custom-file-input" id="file" />
                            <label className="custom-file-label" htmlFor="file">Choose Image</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="form-control">
                          <option>Success</option>
                          <option>Panding</option>
                          <option>Reject</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default border" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
              </div>
            </form>

            <div className="view-data p-3">
              <div className="row">
                <div className="col-md-7">
                  <h3 className="text-primary">SwiftUI – An Interactive and Revolutionary UI Framework Equipped with Futuristic Features!</h3>
                  <p className="text-muted">Call or e-mail our sales department to place an order or for pricing, product information, pre-sales advice and sales information.</p>
                </div>

                <div className="col-md-5">
                  <img src='https://www.infoicontechnologies.com/uploads/1637928011506-5d8da684cb46aded530962309228859a.jpg' alt="India" className='img-style img-fluid' />
                  
                  <div className="text-muted">
                    <p className="text-sm">Create by
                      <b className="d-block"><i className="fas fa-user"></i> Admin | <i className="fas fa-clock"></i> 02-Feb-2023</b>
                    </p>
                    <p className="text-sm">Categories
                      <b className="d-block"><i class="fas fa-folder-open"></i> App Developement</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-5 mb-3 d-flex justify-content-center gap-2">
                <button type="button" className="btn btn-sm btn-default border" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-sm btn-primary"><i className="fas fa-paper-plane"></i> Add New</button>
                <button type="button" className="btn btn-sm btn-warning"><i className="fas fa-paper-plane"></i> Edit</button>
                <button type="button" className="btn btn-sm btn-info"><i className="fas fa-paper-plane"></i> All Lists</button>
              </div>
            </div>

            <div className="delete-modal">
              <i className="fas fa-times"></i>
              <h3>Are you sure?</h3>
              <p>Do you really want to delete these records? This process cannot be undone.</p>

              <div className="action">
                <button className="btn btn-default border" data-dismiss="modal">Cancel</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial