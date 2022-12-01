const express = require('express');
const connectDB = require('./src/Pages/Authentication/db.js');
const app = express();

connectDB();

app.get('/', (req,res) => res.send('API Running'));

app.use(express.json());
app.use('/src/Pages/Authentication/Employee_Model' , require('./src/Pages/Authentication/Employee_Model'));

app.use(express.json({extended: false}));
// "start": "react-scripts start",
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log('Server started on port', PORT));

