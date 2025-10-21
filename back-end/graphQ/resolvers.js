const User = require("../models/User");
const Tag = require("../models/Tags");

module.exports = {
    async users() {
        let users = await User.findAll();
        return users;
    },

    async user({ id }) {
        let user = await User.findByPk(id)
        return user;
    },

    async createTag({tagInput}) {
        let tag = await Tag.create({name: tagInput.name})
        return tag;
    }
}