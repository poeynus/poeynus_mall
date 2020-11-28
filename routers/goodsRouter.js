import express from "express";
import routes from "../routes";
import { deleteGoods, editGoods, goods, goodsDetail, getUpload, postUpload } from "../controllers/goodsController";

const goodsRouter = express.Router();

goodsRouter.get(routes.home, goods);

goodsRouter.get(routes.upload, getUpload);
goodsRouter.post(routes.upload, postUpload);

goodsRouter.get(routes.editGoods(), editGoods);
goodsRouter.get(routes.goodsDetail(), goodsDetail);
goodsRouter.get(routes.deleteGoods(), deleteGoods);

export default goodsRouter;