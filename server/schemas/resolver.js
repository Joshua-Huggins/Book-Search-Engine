const User = require('../models');

const resolvers = {
    Query: {
        User: async () => {
            return User.find({});
        },
    }
}
module.exports = resolvers