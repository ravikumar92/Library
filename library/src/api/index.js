import gql from 'graphql-tag'
import Client from 'aws-appsync'
import { Auth } from 'aws-amplify'

import GraphqlAPI from '../graphql'
import AWSConfig from '../config/aws'


const client = new Client({
    url: AWSConfig.appsync.aws_appsync_graphqlEndpoint,
    region: AWSConfig.appsync.aws_appsync_region,
    auth: {
        type: AWSConfig.appsync.aws_appsync_authenticationType,
        jwtToken: async () => (await Auth.currentSession()).idToken.jwtToken,
        apiKey: AWSConfig.appsync.aws_appsync_apiKey
    },
    disableOffline: true
})

function getBookdata() {
    return new Promise(function (resolve, reject) {
        client.query({
            query: gql(GraphqlAPI.bookData),
            fetchPolicy: 'network-only'
        }).then((data) => {
            let arrItems = []
            arrItems = data.data.listLibraries.items;
            resolve(arrItems)
        }).catch((err) => {
            console.log(err);
        })
    })
}

function addBook (val) {
    return new Promise(function(resolve, reject) {
        client.mutate({
            mutation: gql(GraphqlAPI.add_update_book),
            variables:{
                createlibraryinput : {
                    id: val.bookId,
                    number:val.bookCount,
                    title: val.bookName,
                    author: val.author,
                    publisher: val.publisher,
                }
            }
        })
        .then(res => resolve(res))
        .catch((err) => {
            reject(err);
            console.log(err);
        })
    })
}

export default {
    getBookdata,
    addBook
}