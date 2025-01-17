import { getAll,getById,getByUserId,update,remove,add } from "../model/post.model.js";

export const getAllPosts = (req, res, next)=>{
    const posts = getAll();
    if(posts){
        return res.status(200).send({success:"true", msg:posts});
    }else{
        return res.status(400).send({success:"false", msg:"Bad request, could not get all posts"});
    }
}

export const getPostsByUserId = (req, res, next)=>{
    const id = parseInt(req.userId);
    const posts = getByUserId(id);
    if(posts){
        return res.status(200).send({success:"true", msg:posts});
    }else{
        return res.status(400).send({success:"false", msg:"could not retrieve posts, try later"})
    }
}

export const getPostById = (req, res, next)=>{
    try {
        const id = parseInt(req.params.id);
        const post = getById(id);
        return res.status(200).send({success:"true", msg:post});
    } catch (err) {
        next(err);    
    }
}

export const createPost = (req, res, next) =>{
    const data = req.body;
    const postCreated = add(data);
    if(postCreated){
        return res.status(201).send({success:"true", msg:postCreated});
    }else{
        return res.status(400).send({success:"false", msg:"could not create post, try again later"});
    }
}

export const deletePost = (req, res, next)=>{
    try {
        const id = parseInt(req.params.id);
        const removedPost = remove(id);
        return res.status(200).send({success:"true", msg:removedPost});
    } catch (err) {
     next(err)   
    }
}

export const updatePost = (req, res, next) =>{
    try {
        const id = parseInt(req.params.id);
        const caption = req.query.caption;
        const imageURL = req.query.imageURL;
        const data = {id, caption, imageURL};

        const updatedPost = update(data);
        return res.status(201).send({success:"true", msg:updatedPost});
    } catch (err) {
        next(err);
    }
}

