/* leny/blokchen
 *
 * /src/web/routes/index.js - Routes definitions
 *
 * coded by leny@flatLand!
 * started at 04/10/2017
 */

import { Router } from "express";

import home from "./home";

let oRouter = new Router();

oRouter.all( "/", home );

export default oRouter;
