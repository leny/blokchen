/* leny/blokchen
 *
 * /src/web/routes/mine.js - Mine route handler
 *
 * coded by leny@flatLand!
 * started at 07/10/2017
 */

import { chain, nodeTransactions } from "../../data";
import { OWNER_ADDRESS } from "../../constants";
import Block from "../../core/block";
import BlockChain from "../../core/blockchain";

export default function( oRequest, oResponse ) {
    let oLatestBlock, sLatestProof, sNewProof, oNewBlock;

    if ( nodeTransactions.length === 0 ) {
        return oResponse.sendStatus( 204 );
    }

    oLatestBlock = chain.getLatestBlock();
    sLatestProof = oLatestBlock.data.proof;

    sNewProof = BlockChain.generateProofOfWork( sLatestProof );

    nodeTransactions.push( {
        "from": "core",
        "to": OWNER_ADDRESS,
        "amount": 1,
        "timestamp": Date.now(),
    } );

    oNewBlock = new Block( oLatestBlock.index + 1, Date.now(), {
        "proof": sNewProof,
        "transactions": Array.from( nodeTransactions ),
    }, oLatestBlock.hash );

    chain.addBlock( oNewBlock );
    nodeTransactions.splice( 0, nodeTransactions.length );

    return oResponse.json( oNewBlock );
}
