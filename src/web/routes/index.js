/* leny/blokchen
 *
 * /src/web/routes/index.js - Routes definitions
 *
 * coded by leny@flatLand!
 * started at 04/10/2017
 */

import { Router } from "express";

import home from "./home";
import check from "./check";
import transaction from "./transaction";
import blocks from "./blocks";
import latestBlock from "./blocks-latest";
import blockAtIndex from "./blocks-at-index";
import mine from "./mine";

let oRouter = new Router();

oRouter.all( "/", home );
oRouter.get( "/check", check );
oRouter.post( "/transaction", transaction );
oRouter.get( "/blocks", blocks );
oRouter.get( "/blocks/latest", latestBlock );
oRouter.get( "/blocks/:index", blockAtIndex );
oRouter.post( "/mine", mine );

export default oRouter;
