/* leny/blokchen
 *
 * /src/web/routes/blocks-latest.js - Latest Block Route Handler
 *
 * coded by leny@flatLand!
 * started at 07/10/2017
 */

import { chain } from "../../data";

export default function( oRequest, oResponse ) {
    oResponse.json( chain.getLatestBlock() );
}
