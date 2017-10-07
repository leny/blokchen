/* leny/blokchen
 *
 * /src/web/routes/check.js - Check route handler
 *
 * coded by leny@flatLand!
 * started at 06/10/2017
 */

import { OWNER_ADDRESS } from "../../constants";
import { chain } from "../../data";

export default function( oRequest, oResponse ) {
    oResponse.json( {
        "size": chain.blocks.length,
        "owner": OWNER_ADDRESS,
        "valid": chain.isValid(),
    } );
}
