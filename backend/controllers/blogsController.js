const { getDb } = require("../utils/dbConnect");

module.exports.createTool = async (req, res, next) => {
    try {
        const db = getDb();
        const blogs = req.body;
        const postDate = new Date().toLocaleString(); // new Date() > dd/mm/yy
        const result = await db.collection ("blogs").insertOne({blogs, postDate});
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
    res.status(200).send(blogs);
 } catch (error) {
    next(error)
 }
}