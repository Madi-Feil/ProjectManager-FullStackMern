const mongoose = require("mongoose");
const dbName = "product2";
mongoose.connect('mongodb://localhost/${projectManager}', {
    userNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('Connected to ${projectManager} database!'))
.catch((err)=>console.log(err));