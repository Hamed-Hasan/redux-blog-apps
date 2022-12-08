const { getDb } = require("../utils/dbConnect");

module.exports.createTool = async (req, res, next) => {
    try {
        const db = getDb();
        const blogs = req.body;
        const postData = new Date().toLocaleTimeString();
        if(!result.insertedId){
            res.status(400).send({success: false, message: "something went wrong"})
        }
        const result = await db.collection ("blogs").insertOne({ blogs, postData });
        res.send({success: true, data: result});

    } catch (error) {
        next(error);
    }
}