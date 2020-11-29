import express from "express";
import routes from "../routes";
import {uploadImage} from "../middlewares";
import { deleteGoods, postEditGoods, getEditGoods, goods, goodsDetail, getUpload, postUpload } from "../controllers/goodsController";

const goodsRouter = express.Router();

goodsRouter.get(routes.home, goods);

goodsRouter.get(routes.upload, getUpload);
goodsRouter.post(routes.upload, uploadImage, postUpload);

goodsRouter.get(routes.editGoods(), getEditGoods);
goodsRouter.post(routes.editGoods(), postEditGoods);

goodsRouter.get(routes.goodsDetail(), goodsDetail);
goodsRouter.get(routes.deleteGoods(), deleteGoods);

export default goodsRouter;