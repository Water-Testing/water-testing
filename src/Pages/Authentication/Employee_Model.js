const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
firstname: {
    type: String,
    required: true
},
lastname: {
    type: String,
    required: true
},
emailaddress: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
},
id: {
    type: String,
    required: true
},
address1: {
    type: String,
    required: false
},
address2: {
    type: String,
    required: false
},
city: {
    type: String,
    required: false
},
state: {
    type: String,
    required: false
},
country: {
    type: String,
    required: false
},
phone: {
    type: Number,
    required: true
}

})

module.exports = mongoose.model('employee', EmployeeSchema);