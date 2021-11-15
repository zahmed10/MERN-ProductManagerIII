const express = require('express');
const cors = require('cors')
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors())
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/product.routes')(app); 
// const port = 8000;
    
app.listen(8000, () => {
    console.log("listening at Port 8000")
})
// app.listen(port, () => console.log(`Listening on port: ${port}`) );