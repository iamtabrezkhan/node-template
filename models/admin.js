const mongoose = require('mongoose');
const {compareHash, genHash} = require('../common/bcrypt')

const adminSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    created: {
        type: Number,
        default: Date.now()
    }
})

adminSchema.statics.getByEmail = function getByEmail(email) {
    return new Promise((resolve, reject) => {
        Admin.findOne({'email': email}, async (err, admin) => {
            if(err) reject(err);
            resolve(admin)
        })
    })
}

adminSchema.statics.createAdmin = function createAdmin(email, password) {
    return new Promise((resolve, reject) => {
        const newAdmin = new Admin({
            email: email,
            password: password
        })
        const hash = genHash(password);
        newAdmin.password = hash;
        newAdmin.save((err, admin) => {
            if(err) reject(err);
            resolve(admin);
        })
    })
}

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;