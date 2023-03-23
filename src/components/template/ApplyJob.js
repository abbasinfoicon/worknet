import React, { useEffect, useState } from 'react'

const ApplyJob = () => {
    const [data, setData] = useState({
        anrede: "",
        fname: "",
        lname: "",
        email: "",
        tel: "",
        mob: "",
        cv: "",
        agree: false
    });

    const handleChange = (e) => {
        if (e.target.id === 'agreeTerms') {
            setData({ ...data, [e.target.name]: e.target.checked });
        } else if (e.target.id === 'real-file') {
            setData({ ...data, [e.target.name]: e.target.files[0] });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { anrede, fname, lname, email, tel, mob, cv, terms } = data;

        console.log("Submit-", data);
        // after submit data
        setData({
            anrede: "",
            fname: "",
            lname: "",
            email: "",
            tel: "",
            mob: "",
            cv: "",
            agree: false
        });
    };

    useEffect(() => {
        const realFileBtn = document.getElementById("real_file");
        const customBtn = document.getElementById("custom_button");
        const customTxt = document.getElementById("custom_text");

        customBtn.addEventListener("click", function () {
            realFileBtn.click();
        });

        realFileBtn.addEventListener("change", function () {
            if (realFileBtn.value) {
                customTxt.innerHTML = realFileBtn.value.match(
                    /[\/\\]([\w\d\s\.\-\(\)]+)$/
                )[1];
            } else {
                customTxt.innerHTML = "No file chosen, yet.";
            }
        });
    }, [])

    return (
        <form encType='multipart/form-data' onSubmit={handleSubmit} className="contact-form wow slideInUp">
            <div className="form-group">
                <select name="anrede" onChange={handleChange} id="" className="form-control">
                    <option value="anrede">Anrede</option>
                    <option value="basel">Basel</option>
                    <option value="bern">Bern</option>
                    <option value="genf">Genf</option>
                </select>
            </div>

            <div className="form-group wow slideInUp">
                <input type="text" name="fname" value={data.fname} onChange={handleChange} id="" className="form-control" placeholder="Ihr Vorname" />
            </div>

            <div className="form-group wow slideInUp">
                <input type="text" name="lname" value={data.lname} onChange={handleChange} id="" className="form-control" placeholder="Ihr Nachname" />
            </div>

            <div className="form-group wow slideInUp">
                <input type="email" name="email" value={data.email} onChange={handleChange} id="" className="form-control"
                    placeholder="Ihre E-Mail Adresse" />
            </div>

            <div className="form-group wow slideInUp">
                <input type="number" name="tel" value={data.tel} onChange={handleChange} id="" className="form-control"
                    placeholder="Ihre Telefonnummer" />
            </div>

            <div className="form-group wow slideInUp">
                <input type="number" name="mob" value={data.mob} onChange={handleChange} id="" className="form-control" placeholder="Ihre Mobilnummer" />
            </div>

            <h3>Anlagen</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </p>

            <div className="form-group">
                <input type="file" id="real_file" name='cv' onChange={handleChange} hidden="hidden" />
                <button type="button" id="custom_button">Datei anhängen</button>
                <span id="custom_text"></span>
            </div>

            <div className="form-group agreement wow slideInUp">
                <input id="agreeTerms" name='terms' type="checkbox" onChange={handleChange} defaultChecked={data.terms} />
                <label htmlFor="agreeTerms">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy. Lorem ipsum dolor sit amet.</label>
            </div>

            <div className="form-group wow slideInUp">
                <label>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</label>
            </div>

            <button type="submit" className="cutsom-btn hover wow slideInUp">Absenden <i className="fa-solid fa-arrow-right"></i></button>
        </form>
    )
}

export default ApplyJob