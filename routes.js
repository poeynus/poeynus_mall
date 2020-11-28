// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Shopping goods

const GOODS = "/goods";
const UPLOAD = "/upload";
const GOODS_DETAIL = "/:id";
const EDIT_GOODS = "/:id/edit";
const DELETE_GOODS = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if(id) {
      return `/users/${id}`;
    }
    else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  goods:GOODS,
  upload:UPLOAD,
  goodsDetail: id => {
    if(id) {
      return `/goods/${id}`;
    }
    else {
      return GOODS_DETAIL;
    }
  },
  editGoods: id => {
    if(id) {
      return `/goods/${id}/edit`;
    }
    else {
      return EDIT_GOODS;
    }
  },
  deleteGoods: id => {
    if(id) {
      return `/goods/${id}/delete`;
    }
    else {
      return DELETE_GOODS;
    }
  },
};

export default routes;