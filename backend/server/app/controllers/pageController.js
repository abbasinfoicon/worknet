import pageModel from "../models/pageModel.js";
import moment from "moment/moment.js";
import fs from "fs"

class pageController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await pageModel.find();

      res.send({
        data: data.length > 0 ? data : "NO DATA",
        moment: moment
      });

    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREATE DATA
  static addData = async (req, res) => {
    try {
      console.log("Body", req.body);
      // console.log("Img", req.files);

      // const mulimg = req.files["img"][0].filename;
      const { title, img, smallDesc, desc, categories, subCategories, show, status } = req.body
      console.log("page data-", req.body)
      if (title && smallDesc && categories && show && desc) {
        const data = new pageModel({
          title: title,
          img: img,
          smallDesc: smallDesc,
          desc: desc,
          categories: categories,
          subCategories: subCategories,
          show: show,
          status: status
        });
        const result = await data.save();
        res.send({
          status: "Success",
          message: "Data Successfully!!!",
          result: result
        })

        // console.log(result);
      } else {
        res.send({ status: "Failed", message: "All Fieled Required!!!" });
      }
    } catch (error) {
      res.send({ status: "Failed", message: "Create data Failed!!", error: error });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await pageModel.findById(req.params.id, req.body);

      res.render("pages/page/view-page", {
        data: data,
        moment: moment,
        page_name: "page",
        sub_page: "viewPage"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await pageModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/page/edit-page", {
        data: data,
        page_name: "page",
        sub_page: "editPage"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const mulimg = req.files["img"]?.[0].filename;
      const { page, banner, show, smallDesc, desc, categories, status, subCategories } = req.body
      await pageModel.findByIdAndUpdate(req.params.id, {
        page: page,
        banner: banner,
        show: show,
        smallDesc: smallDesc,
        desc: desc,
        categories: categories,
        subCategories: subCategories,
        img: mulimg,
        status: status
      });

      res.redirect("/page");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    const data = await pageModel.findById(req.params.id);
    const file_name = "public/assets/upload/" + data.img
    const file_name2 = "public/assets/upload/" + data.banner

    // console.log("file-img", file_name);
    try {
      await pageModel.findByIdAndDelete(req.params.id, req.body);
      fs.unlinkSync(file_name);
      fs.unlinkSync(file_name2);

      res.redirect("/page");
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default pageController;
