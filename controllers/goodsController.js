import routes from "../routes";

export const goods = (req, res) => res.render("goods");
export const getUpload = (req, res) => res.render("uploadGoods");
export const postUpload = (req, res) => {
    const {
      body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.goodsDetail(1));
  };
export const goodsDetail = (req, res) => res.render("goodsDetail");
export const editGoods = (req, res) => res.render("editGoods");
export const deleteGoods = (req, res) => res.render("deleteGoods");
