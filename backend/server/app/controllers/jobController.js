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
            const { title, content, img, file, smallDesc, reference, department, location, address, city, salary, enployment, merit, working, empBenefits, yourTasks, yourProfile, contact, author, status } = req.body;

            const slug = slugify(title, {
                lower: true, // convert to lowercase
                strict: true // remove characters that are not URL-friendly
            });

            // console.log("slug-", slug)

            const now = Date.now()
            const base64Data = img.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            fs.writeFile("./public/assets/uploads/" + now + '.png', base64Data, 'base64', (err) => {
                console.log("create-img-erro ", err);
            });

            if (title && img && smallDesc && reference && department && location && address && city) {
                const data = new jobModel({
                    title, content, smallDesc, reference, department, location, address, city, salary, enployment, merit, working,
                    empBenefits, yourTasks, yourProfile, contact, author, status, slug, file, img: req.get('host') + "/assets/uploads/" + now + '.png',
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
            const now = Date.now()
            const base64Data = req.body.img.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            fs.writeFile("./public/assets/uploads/" + now + '.png', base64Data, 'base64', (err) => {
                console.log("update-img-erro ", err);
            });
            req.body.img = req.get('host') + "/assets/uploads/" + now + '.png'

            const data = await jobModel.findByIdAndUpdate(req.params.id, req.body);
            
            console.log("updated data-", data)

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

        let imgPath = data.img.split('/').slice(1);
        let imgName = data.img.split('/').pop();

        // Define the path to the image file
        const imgdel = "./public/" + imgPath.join('/')

        // Check if the image file exists
        fs.access(imgdel, fs.constants.F_OK, (err) => {
            if (err) {
                console.error(`${imgName} does not exist`);
            } else {
                // Image file exists, so you can unlink it
                fs.unlink(imgdel, (err) => {
                    if (err) {
                        console.error(`Error unlinking ${imgName}: ${err}`);
                    } else {
                        console.log(`${imgName} was deleted`);
                    }
                });
            }
        });

        try {
            const data = await jobModel.findByIdAndDelete(req.params.id, req.body);

            if (data) {
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