const bcrypt = require('bcrypt');

module.exports = {

    genHash: (password) => {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    },

    compareHash: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }

}