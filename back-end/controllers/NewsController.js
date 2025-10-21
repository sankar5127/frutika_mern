const News = require("../models/News");

exports.store = async (req,res,next) => {
    let {title,author,content} = req.body;
    let img = req.file.filename;
    let img_path = req.file.path;
    let news = await News.create({
        title,author,content,img,img_path
    });

    return res.json({
        status: 200,
        news
    })

}

exports.newsList = async(req,res,next) => {
    let newslist = await News.findAll();
    return res.json({
        status: 200,
        newslist
    })
}

exports.news = async(req,res,next) => {
    let {newsId} = req.params;
    let newsInfo = await News.findOne({
        where:{
            id: newsId
        }
    });
    return res.json({
        status: 200,
        newsInfo
    })
}