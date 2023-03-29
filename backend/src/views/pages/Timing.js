import React from 'react'

const Timing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Öffnungszeiten</h3>
            </div>
            <div className="card-body">
              <strong><i className="fas fa-clock mr-1"></i> Montag - Freitag</strong>
              <p className="text-muted">8:00-12:00 Uhr <br />
                13:30-17:30 Uhr 
                </p>
              <hr />
              
              <strong><i className="fas fa-clock mr-1"></i> Wochenende</strong>
              <p className="text-muted">geschlossen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timing