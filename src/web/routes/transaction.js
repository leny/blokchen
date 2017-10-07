/* leny/blokchen
 *
 * /src/web/routes/transaction.js - Transaction Route Handler
 *
 * coded by leny@flatLand!
 * started at 06/10/2017
 */

import { nodeTransactions } from "../../data";

export default function( oRequest, oResponse ) {
    let { from, to, amount } = oRequest.body || {},
        bCheck, sFrom, sTo, iAmount;

    bCheck = [
        ( sFrom = ( from || "" ).trim() ),
        ( sTo = ( to || "" ).trim() ),
        isNaN( ( iAmount = +amount ) ),
    ].some( ( bValue ) => !!bValue );

    if ( !bCheck ) {
        return oResponse.sendStatus( 400 );
    }

    nodeTransactions.push( {
        "from": sFrom,
        "to": sTo,
        "amount": iAmount,
        "timestamp": Date.now(),
    } );

    return oResponse.sendStatus( 204 );
}
