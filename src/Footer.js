import React from "react"
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateSpotlightVideo } from './graphql/subscriptions';

function Footer() {

    return (
        <footer>
            <h3>This is my footer.</h3>
        </footer>
    )

}

export default Footer