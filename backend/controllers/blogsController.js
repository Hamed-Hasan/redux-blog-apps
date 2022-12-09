const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.createTool = async (req, res, next) => {
    try {
        const db = getDb();
        const blogs = req.body;
        // const postDate = new Date().toLocaleString(); // new Date() > dd/mm/yy
        const result = await db.collection("blogs").insertOne(blogs); // {blogs, postDate}
        if(!result.insertedId){
           return res.status(400).send({success: false, message: "something went wrong"})
        }
        res.send({success: true, message: `Blogs added with id ${result.insertedId}`});

    } catch (error) {
        next(error);
    }
}

module.exports.getAllBlogs = async (req, res, next) => {
 try {
    const db = getDb();
    const blogs = await db.collection("blogs").find({}).toArray();
    res.status(200).send({success: true, data: blogs});
 } catch (error) {
    next(error)
 }
}
module.exports.getBlogDetail = async (req, res, next) => {
 try {
    const db = getDb();
    const { id } = req.params;
    if(!ObjectId.isValid(id)) {
        return res.status(400).send({success:false, message: "Invalid ID"})
    }
    const blogs = await db.collection("blogs").findOne({_id: ObjectId(id)})
    if(!blogs) {
        return res.status(400).send({success: false, message: "Could'n find the blog please try again later!!!"})
    }
    res.status(200).send({success:true, data: blogs});
 } catch (error) {
    next(error)
 }
}
module.exports.deleteSingleBlog = async (req, res, next) => {
 try {
    const db = getDb();
    const { id } = req.params;
    if(!ObjectId.isValid(id)) {
        return res.status(400).send({success:false, message: "Invalid ID"})
    }
    const blogs = await db.collection("blogs").deleteOne({_id: ObjectId(id)})
    if(!blogs) {
        return res.status(400).send({success: false, message: "Could'n deleted the blog please try again later!!!"})
    }
    res.status(200).send({success:true, message: blogs});
 } catch (error) {
    next(error)
 }
}
module.exports.updateSingleBlog = async (req, res, next) => {
 try {
    const db = getDb();
    const { id } = req.params;
    const updateDate = new Date().toLocaleString();
    if(!ObjectId.isValid(id)) {
        return res.status(400).send({success:false, message: "Invalid ID"})
    }
    const blogs = await db.collection("blogs").updateOne({_id: ObjectId(id)},  { $currentDate: {dateModified: true},$set: req.body})
    if(!blogs) {
        return res.status(400).send({success: false, message: "Could'n updated the blog please try again later!!!"})
    }
    res.status(200).send({success:true, message: "successfully updated the blog"});
 } catch (error) {
    next(error)
 }
}

