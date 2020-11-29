import routes from "../routes";
import Goods from "../models/Goods";

export const goods = (req, res) => res.render("goods");
export const getUpload = (req, res) => res.render("uploadGoods");
export const postUpload = async(req, res) => {
    const {
    body: { title, pays ,description },
    file: { path },
    } = req;
    const newGoods = await Goods.create({
      fileUrl: path,
      title: title,
      description: description,
      pays: pays
    });
    res.redirect(routes.goodsDetail(newGoods.id));
  };
export const goodsDetail = async(req, res) => {
  const {
    params: {id}
  } = req;
  try {
    const goods = await Goods.findById({_id:id});
    res.render("goodsDetail", { goods });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditGoods = async(req, res) => {
  const {
    params: {id}
  } = req;
  try {
    const goods = await Goods.findById({_id:id});
    res.render("editGoods", {goods});
  } catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postEditGoods = async(req, res) => {
  const {
    params: {id},
    body: {title, description, pays}
  } = req;
  try{
    await Goods.findOneAndUpdate({_id:id}, {title, pays, description});
    res.redirect(routes.goodsDetail(id));
  } catch(error){
    res.redirect(routes.home);
  }
};
export const deleteGoods = async(req, res) => {
  const {
    params: {id}
  } = req;
  try{
    await Goods.findByIdAndRemove({_id:id});
  }catch(error){
    
  }
  res.redirect(routes.home);
};
