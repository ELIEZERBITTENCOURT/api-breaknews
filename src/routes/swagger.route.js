import { Router } from "express";
const router = Router();

import { serve, setup } from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

router.use("/", serve);
router.get("/", setup(swaggerDocument));

export default router;