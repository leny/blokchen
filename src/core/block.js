/* leny/blokchen
 *
 * /src/core/block.js - Block class
 *
 * coded by leny@flatLand!
 * started at 04/10/2017
 */

import sha256 from "crypto-js/sha256";

export default class Block {
    constructor( iIndex, iTimestamp, oData = {}, sPreviousHash ) {
        this.index = iIndex;
        this.timestamp = iTimestamp;
        this.data = oData;
        this.previousHash = sPreviousHash;
        this.hash = this.computeHash();
    }

    computeHash() {
        let { index, timestamp, data, previousHash } = this;

        return sha256( [ index, timestamp, JSON.stringify( data ), previousHash ].join( "" ) ).toString();
    }
}
