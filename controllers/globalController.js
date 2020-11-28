import {goods} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    const {
        query: {gName}
    } = req;
    res.render("home", {searchingBy:gName, goods:goods});
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
export const search = (req, res) => {
    const {
        query: {gName}
    } = req;
    res.render("search", {searchingBy:gName, goods:goods});
};