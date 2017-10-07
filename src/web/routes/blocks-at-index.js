/* leny/blokchen
 *
 * /src/web/routes/blocks-at-index.js - Chains Block at Index route handler
 *
 * coded by leny@flatLand!
 * started at 07/10/2017
 */

import { chain } from "../../data";

export default function( oRequest, oResponse ) {
    let iIndex = oRequest.params.index,
        oBlock;

    if ( !( oBlock = chain.blocks[ iIndex ] ) ) {
        return oResponse.sendStatus( 404 );
    }

    return oResponse.json( oBlock );
}
