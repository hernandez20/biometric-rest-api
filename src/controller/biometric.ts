import { Request, Response } from "express";
//import dbConnect from "../config/mongo";
import { RequestExt } from "../interfaces/req-ext";
//import { JwtPayload } from "jsonwebtoken";

import {
  insertData, getDatas, getData, updateData, deleteData
} from "../services/briometric";
import { handleHttp } from "../utils/error.handler";

const getItem = async ({ params }: RequestExt, res: Response) => {
    try {
      console.log("a")
    const { id } = params;
    const response = await getData(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getDatas();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateData(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertData(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteData(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };