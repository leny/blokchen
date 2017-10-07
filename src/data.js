/* leny/blokchen
 *
 * /src/data.js - Data holder
 *
 * coded by leny@flatLand!
 * started at 06/10/2017
 */

// holding data in memory only. This can be improved with storage, persistance, anything.

import BlockChain from "./core/blockchain";

export let chain = new BlockChain();

export let nodeTransactions = [];
