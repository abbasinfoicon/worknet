import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import bsCustomFileInput from 'bs-custom-file-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddUserMutation } from '../../features/auth/authApi';
import { Link } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [addUser] = useAddUserMutation()

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    img: "",
    password: "",
    cpassword: "",
    terms: false
  });

  const handleChange = (e) => {
    if (e.target.id === 'agreeTerms') {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else if (e.target.id === 'img') {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }

    console.log(data)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, img, password, cpassword, terms } = data;
    if (name && email && phone && password) {
      if (password === cpassword) {


        const res = await addUser(data);
        console.log("Data", res)

        if (res.data.status === 'success') {
          toast.success(res.data.message)
        } else {
          toast.error(res.data.message)
        }

        // after submit data
        setData({
          name: "",
          email: "",
          phone: "",
          img: e.target.reset(),
          password: "",
          cpassword: "",
          terms: false
        });

        // navigate("/");
      } else {
        toast.error("Password not match!");
      }
    } else {
      toast.error("All Feild required!!!");
    }
  };

  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

  return (
    <form encType='multipart/form-data' onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" name="name" value={data.name} onChange={handleChange} placeholder="Full name" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-user"></span>
          </div>
        </div>
      </div>

      <div className="input-group mb-3">
        <input type="email" className="form-control" name="email" value={data.email} onChange={handleChange} placeholder="Email" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope"></span>
          </div>
        </div>
      </div>

      <div className="input-group mb-3">
        <input type="number" className="form-control" name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-phone"></span>
          </div>
        </div>
      </div>

      <div className="input-group mb-3">
        <div className="custom-file">
          <input type="file" className="custom-file-input" name="img" onChange={handleChange} id="img" />
          <label className="custom-file-label" htmlFor="img">Choose Image</label>
        </div>
        <div className="input-group-text">
          <span className="fas fa-image"></span>
        </div>
      </div>

      <div className="input-group mb-3">
        <input type="password" className="form-control" name="password" value={data.password} onChange={handleChange} placeholder="Password" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock"></span>
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input type="password" className="form-control" name="cpassword" value={data.cpassword} onChange={handleChange} placeholder="Retype password" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock"></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="agreeTerms" name="terms" onChange={handleChange} defaultChecked={data.terms} />
            <label htmlFor="agreeTerms">
              I agree to the <Link to="/">terms</Link>
            </label>
          </div>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </div>
      </div>

      <ToastContainer />
    </form>
  )
}

export default Register