const {MongoClient} = require("mongodb")
const url = "mongodb+srv://venkatesh222:p9O6w07WNbbhSUYj@cluster0.ghqbuqp.mongodb.net/ecomProject?retryWrites=true&w=majority"

const client = new MongoClient(url)
const findAllFrom = async (query,collectionName) =>{
    try{
        await client.connect();
        console.log("connection to db is successfull");
        const database = client.db("ecomProject")
        const collection = database.collection(collectionName)
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse
    }
    catch (error) { 
         return error.message
    }

}

module.exports = {findAllFrom}