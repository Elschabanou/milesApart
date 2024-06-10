const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
    const uri = "mongodb+srv://user:1234@library.ljxjrqs.mongodb.net/?retryWrites=true&w=majority&appName=Library";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db("Events");
        const collection = database.collection("users");

        // Query the collection to retrieve JSON data
        const test = await collection.find({}).toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(test)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    } finally {
        await client.close();
    }
};
