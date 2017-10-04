/* leny/blokchen
 *
 * /src/web/app.js - Express Config
 *
 * coded by leny@flatLand!
 * started at 04/10/2017
 */

import zouti from "zouti";
import express from "express";
import responseTime from "response-time";
import mitanEko from "mitan-eko";
import bodyParser from "body-parser";

import routes from "./routes";

let oApp;

export default function( iPort ) {
    if ( !oApp ) {
        oApp = express();

        oApp.use( responseTime() );
        oApp.use( mitanEko( "BlòkChèn" ) );
        oApp.use( bodyParser.urlencoded( {
            "extended": false,
        } ) );
        oApp.use( bodyParser.json() );

        oApp.use( routes );

        oApp.listen( iPort, () => {
            zouti.log( `Express listening on ${ iPort }.`, "BlòkChèn" );
        } );
    }

    return oApp;
}
