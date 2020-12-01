import Goods from "../models/Goods";
import routes from "../routes";

export const home = async(req, res) => {
  const {
      query: {gName}
  } = req;
  try{
    const goods = await Goods.find({}).sort({_id: -1});
    res.render("home", {searchingBy:gName, goods:goods});
  } catch(error){
    console.log(error);
    res.render("home", {searchingBy:gName, goods:[]});
  }
};

export const getJoin = (req, res) => res.render("join");
export const postJoin = (req, res) => {
    const {
      body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
      res.status(400);
      res.render("join", { pageTitle: "Join" });
    } else {
      // To Do: Register User
      // To Do: Log user in
      res.redirect(routes.home);
    }
  };

export const getLogin = (req, res) => {
    res.render("login");
};
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    res.redirect(routes.home);;
};
export const search = async(req, res) => {
    const {
        query: {gName}
    } = req;
    let goods = [];
    try {
      goods = await Goods.find({title: {$regex: gName, $options: "i"}}).sort({_id: -1});
    } catch(error) {
      console.log(error);
    }
    res.render("search", {searchingBy:gName, goods:goods});
};