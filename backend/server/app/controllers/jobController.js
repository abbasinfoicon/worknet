import moment from "moment/moment.js";
import fs from "fs"
import slugify from "slugify";
import jobModel from "../models/jobModel.js";

class jobController {
    // ALL DATA
    static getAllData = async (req, res) => {
        try {
            const data = await jobModel.find();

            res.send({
                data: data,
                moment: moment
            });

        } catch (error) {
            console.log("Get All Data - ", error);
        }
    };

    // READ SINGLE DATA
    static singleData = async (req, res) => {
        try {
            const data = await jobModel.findById(req.params.id, req.body);
            if (data) {
                res.status(200).send({
                    status: 'success',
                    message: "Single Data Show!!!",
                    data: data
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not found...!"
                });
            }
        } catch (error) {
            console.log("Single Data - ", error);
        }
    };

    // CREATE DATA
    static addData = async (req, res) => {
        try {
            const { title, content, img, smallDesc, reference, department, location, address, city, salary, enployment, merit, working, empBenefits, yourTasks, yourProfile, contact, author, status } = req.body;

            const slug = slugify(title, {
                lower: true, // convert to lowercase
                strict: true // remove characters that are not URL-friendly
            });

            // console.log("slug-", slug)

            const now = Date.now()
            const base64Data = img.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            fs.writeFile("./public/assets/uploads/" + now + '.png', base64Data, 'base64', (err) => {
                console.log("img-erro ", err);
            });

            if (title && img && smallDesc && reference && department && location && address && city) {
                const data = new jobModel({
                    title, content, smallDesc, reference, department, location, address, city, salary, enployment, merit, working, empBenefits, yourTasks, yourProfile, contact, author, status, slug, img: "/assets/uploads/" + now + '.png',
                });
                const result = await data.save();
                res.status(200).send({
                    status: "Success",
                    message: "Data Successfully!!!",
                    result: result
                })

                // console.log("Result-", result);
            } else {
                res.status(400).send({ status: "Failed", message: "All Fieled Required!!!" });
            }
        } catch (error) {
            res.status(404).send({ status: "Failed", message: "Create data Failed!!", error: error });
        }
    };

    // UPDATE
    static updateData = async (req, res) => {
        try {
            
            const data = await jobModel.findByIdAndUpdate(req.params.id, req.body);
            if (data) {
                res.status(200).send({
                    status: 'success',
                    message: "Data Update Successful!!!",
                    data: data
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not Update...!"
                });
            }
        } catch (error) {
            console.log("Update Data - ", error);
        }
    };

    // DELETE
    static deleteData = async (req, res) => {
        const data = await jobModel.findById(req.params.id);
        const imgdel = "./public" + data.img
        try {
            const data = await jobModel.findByIdAndDelete(req.params.id, req.body);

            if (data) {
                fs.unlinkSync(imgdel);
                res.status(200).send({
                    status: 'success',
                    message: "Delete data Successful!!!",
                    data: data
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not Delete...!"
                });
            }
        } catch (error) {
            console.log('Delete Data - ', error);
        }
    };
}

export default jobController;