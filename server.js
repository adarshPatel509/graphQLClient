const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');

const schema = require('./schema.js');

const app = express();


//allow cross origin
app.use(cors());

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is running on port 4000.");
});