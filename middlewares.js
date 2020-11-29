import multer from "multer";
import routes from "./routes";

const multerGoods = multer({dest:"uploads/goods/"});

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "poeynus-mall";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadImage = multerGoods.single("goodsFile");