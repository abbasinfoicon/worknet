import React from 'react'

const ForgotPassword = () => {
  return (
    <form action="recover-password.html" method="post">
      <div className="input-group mb-3">
        <input type="email" className="form-control" placeholder="Email" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope"></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-block">Request new password</button>
        </div>
      </div>
    </form>
  )
}

export default ForgotPassword