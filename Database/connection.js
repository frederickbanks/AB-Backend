// require mongoose
const mongoose = require('mongoose');

// asign promises to return data to variable
mongoose.Promise = Promise;

// asign live servce to variable
const mongoURL = 'mongodb://localhost:27017/booksDB';

// connection string => return error if unable to connect
mongoose.connect(mongoURL, {useNewUrlParser : true}).then(instance => console.log(`connected to db: ${instance.connections[0].name}`)
).catch(err => console.log(err));

if(process.env.NODE_ENV == "production"){
    mongoose.connect(process.env.DB_url);
} else {
    let url = { useNewUrlParser: true};
        mongoose.connect(mongoURL, url)
}

// export mongoose
module.exports = mongoose