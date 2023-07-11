import {Router,Response,Request} from "express";
const router = Router()
import { getItem,getItems,postItem,updateItem,deleteItem } from "../controller/biometric";
import { checkJwt } from "../middleware/session";

import { logMiddleware } from "../middleware/log";

router.get('/:id',checkJwt,logMiddleware,getItem);
router.get('/',checkJwt,getItems);
router.post('/',checkJwt,postItem)
router.put('/:id',checkJwt,updateItem)
router.delete('/:id',checkJwt,deleteItem)




export { router };