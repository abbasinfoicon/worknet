import sliderModel from "../models/sliderModel.js";
import moment from "moment/moment.js";
import fs from "fs"

class sliderController {
    // ALL DATA
    static getAllData = async (req, res) => {
        try {
            const data = await sliderModel.find();

            res.send({
                data: data,
                moment: moment
            });

        } catch (error) {
            console.log("Get All Data - ", error);
        }
    };

    // CREATE DATA
    static addData = async (req, res) => {
        console.log("Body", req.body);

        try {
            const { title, content, linkText, link, status, img, file } = req.body;

            const now = Date.now()
            const base64Data = img.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            fs.writeFile("../public/assets/uploads/" + now + '.png', base64Data, 'base64', (err) => {
                console.log(err);
            });
            if (title && content && img) {
                const data = new sliderModel({
                    title: title,
                    content: content,
                    file: file,
                    img: "/assets/uploads/" + now + '.png',
                    linkText: linkText,
                    link: link,
                    status: status
                });
                const result = await data.save();
                res.status(200).send({
                    status: "Success",
                    message: "Data Successfully!!!",
                    result: result
                })

                console.log("Result-", result);
            } else {
                res.status(400).send({ status: "Failed", message: "All Fieled Required!!!" });
            }
        } catch (error) {
            res.status(404).send({ status: "Failed", message: "Create data Failed!!", error: error });
        }
    };

    // READ SINGLE DATA
    static singleData = async (req, res) => {
        try {
            const data = await sliderModel.findById(req.params.id, req.body);
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

    // UPDATE
    static updateData = async (req, res) => {
        try {
            const data = await sliderModel.findByIdAndUpdate(req.params.id, req.body);
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
        try {
            const data = await sliderModel.findByIdAndDelete(req.params.id, req.body);
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

export default sliderController;