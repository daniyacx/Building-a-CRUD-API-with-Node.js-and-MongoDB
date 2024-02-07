const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

const COLLECTION_NAME = 'blogs';

async function getAllBlogs() {
    const db = await getDb();
    return db.collection(COLLECTION_NAME).find().toArray();
}

async function getBlogById(id) {
    const db = await getDb();
    return db.collection(COLLECTION_NAME).findOne({ _id: new ObjectId(id) });
}

async function createBlog(blog) {
    const db = await getDb();
    const result = await db.collection(COLLECTION_NAME).insertOne(blog);
    return blog; 
}


async function updateBlog(id, blog) {
    const db = await getDb();
    const result = await db.collection(COLLECTION_NAME).updateOne({ _id: new ObjectId(id) }, { $set: blog });
    if (result.modifiedCount > 0) {
        return blog;
    } else {
        return null;
    }
}

async function deleteblog(id) {
    const db = await getDb();
    return db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(id) });
}

module.exports = { getAllBlogs: getAllBlogs, getBlogById: getBlogById, createBlog: createBlog, updateBlog: updateBlog, deleteBlog: deleteblog };
