// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databasename = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server!')
    }

    const db = client.db(databasename)

// Find one & Find Many
    // db.collection('users').findOne({_id: new ObjectID("64308e9f450ce30f5f5d7324")}, (error, user) => {
    //     if(error)
    //     {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // } )

    // db.collection('users').find({age: 20}).toArray((error, users) => {
    //     if(error)
    //     {
    //         return console.log('Unable to fetch data!')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({age: 20}).count((error, users) => {
    //     if(error)
    //     {
    //         return console.log('Unable to fetch data!')
    //     }

    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("64309078c100321007a216ee")}, (error, user) => {
    //     if(error)
    //     {
    //         console.log("Unable to fetch data")
    //     }

    //     console.log(user)
    // })

    // db.collection('tasks').find({Completed: true}).toArray((error, tasks) => {
    //     if(error)
    //     {
    //         return console.log('Unable to fetch data!')
    //     }   
    //     console.log(tasks)
    // })

// Update One & Update Many

    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID("64308e9f450ce30f5f5d7323")
    //     },
    //     {

    //         $inc: {
    //             age: 2
    //         }
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany(
    //     {
    //         Completed: false
    //     },
    //     {
    //         $set: {
    //             Completed: true
    //         }
    //     }
    // ).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

//Delete one & Delete Many
    // db.collection('users').deleteMany(
    //     {
    //         age: 20
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne(
        {
            Description: 'Data 1'
        }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})