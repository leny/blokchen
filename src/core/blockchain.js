/* leny/blokchen
 *
 * /src/core/blockchain.js - BlockChain class
 *
 * coded by leny@flatLand!
 * started at 04/10/2017
 */

import sha256 from "crypto-js/sha256";
import Block from "./block";
import { BASE_PROOF } from "../constants";

const rCheckProof = /^00[a-z0-9]{60}00$/i;

export default class BlockChain {
    constructor() {
        this.blocks = [ BlockChain.generateGenesisBlock() ];
    }

    getLatestBlock() {
        return this.blocks[ this.blocks.length - 1 ];
    }

    addBlock( oBlock ) {
        oBlock.previousHash = this.getLatestBlock().hash;
        oBlock.hash = oBlock.computeHash();
        this.blocks.push( oBlock );
    }

    isValid() {
        return this.blocks.every( ( oBlock, iIndex ) => {
            if ( oBlock.hash !== oBlock.computeHash() ) {
                return false;
            }

            if ( iIndex === 0 ) {
                return true;
            }

            const oPreviousBlock = this.blocks[ iIndex - 1 ];

            if ( oBlock.previousHash !== oPreviousBlock.hash ) {
                return false;
            }

            return true;
        } );
    }
}

BlockChain.generateGenesisBlock = () => new Block( 0, Date.now(), {
    "proof": BASE_PROOF,
    "transactions": [],
}, "" );

BlockChain.generateProofOfWork = ( sPreviousProof ) => {
    let i = 0,
        sNextProof;

    do {
        sNextProof = sha256( `${ ++i }${ sPreviousProof }` ).toString();
    } while ( !rCheckProof.test( sNextProof ) );

    return sNextProof;
};

BlockChain.setConsensus = ( aChains ) => {
    return aChains.reduce( ( oPreviousChain, oCurrentChain ) => {
        return oPreviousChain.blocks.length < oCurrentChain.block.length ? oCurrentChain : oPreviousChain;
    } );
};
