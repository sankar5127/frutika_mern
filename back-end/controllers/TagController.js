const Tag = require("../models/Tags");
exports.tags = async (req,res,next) => {
    let tags = await Tag.findAll();
    return res.json({
        status: 200,
        tags: tags
    })
};


