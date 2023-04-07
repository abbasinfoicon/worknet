import bsCustomFileInput from 'bs-custom-file-input'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useEffect } from 'react'

const OurFeatures = () => {
  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">About Details</h3>

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
        <button data-toggle="modal" data-target="#addNew">New Add</button>
      </div>

      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <h3>Vertrauen</h3>
                    <p>Vermittlung ist Vertrauenssache – uns ist eine erfolgreiche und nachhaltige Zusammenarbeit wichtig.</p>

                    <div className='d-flex'>
                      <button className='btn btn-primary mr-1' data-toggle="modal" data-target="#addNew">Edit</button>
                      <button className='btn btn-danger' data-toggle="modal" data-target="#addNew">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <h3>Engagement</h3>
                    <p>Wir setzen uns mit Engagement und Freude ein und legen den Fokus auf das Wesentliche.</p>

                    <div className='d-flex'>
                      <button className='btn btn-primary mr-1' data-toggle="modal" data-target="#addNew">Edit</button>
                      <button className='btn btn-danger' data-toggle="modal" data-target="#addNew">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <h3>Menschenbezogenheit</h3>
                    <p>Humanität, Zuverlässigkeit und persönliche Betreuung sind daher die Leitmotive unseres Handelns.</p>

                    <div className='d-flex'>
                      <button className='btn btn-primary mr-1' data-toggle="modal" data-target="#addNew">Edit</button>
                      <button className='btn btn-danger' data-toggle="modal" data-target="#addNew">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <h3>Flexibilität</h3>
                    <p>Wir legen grossen Wert auf Flexibilität und sind stets bestrebt, mit Ihnen individuelle Lösungen zu erarbeiten.</p>

                    <div className='d-flex'>
                      <button className='btn btn-primary mr-1' data-toggle="modal" data-target="#addNew">Edit</button>
                      <button className='btn btn-danger' data-toggle="modal" data-target="#addNew">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="addNew" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit About page</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="card-body">
                  <div className='row'>
                    <div className="col-md-4 form-group">
                      <label>SubTitle</label>
                      <input type="text" className="form-control" value="Über Uns" placeholder="Enter Sub Title..." />
                    </div>
                    <div className="col-md-8 form-group">
                      <label>Title</label>
                      <input type="text" className="form-control" value="Wir vernetzen Arbeit und bringen Menschen erfolgreich zusammen." placeholder="Enter Title..." />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Content</label>
                    <CKEditor initData="<p>Als Bindeglied zwischen Arbeitsuchenden und Unternehmen steht worknet ag dafür, Erfolge durch flexible Personaldienstleistungen tatkräftig zu unterstützen.</p><ul><li>Seit 2005 widmen wir uns der Vermittlung von Temporär- und Dauerstellen.</li><li>Wir konnten in der Region Basel ein umfangreiches Recruiting-Netzwerk aufbauen</li><li>Wir erweitern unsere Personallösungen für unsere Kunden stets und passen uns an die individuellen Bedürfnisse unserer Partner an.</li></ul>" />
                  </div>

                  <div className="row">
                    <div className="col-md-5">
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

                    <div className='col-md-2'>
                      <div className="form-group">
                        <label>Seit</label>
                        <input type="number" value="2005" className="form-control" placeholder="Enter Seit..." />
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className="form-group">
                        <label>Button Text</label>
                        <input type="text" value="Unser Team" className="form-control" placeholder="Button Text..." />
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Page Link</label>
                        <select className="form-control">
                          <option>Company</option>
                          <option>Application</option>
                          <option selected>Team</option>
                          <option>Contact</option>
                          <option>Job</option>
                          <option>Home</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default border" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurFeatures