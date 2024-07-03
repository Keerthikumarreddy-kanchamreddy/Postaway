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
    const id = parseInt(req.params.id);
    const post = getById(id);
    if(post){
        return res.status(200).send({success:"true", msg:post});
    }else{
        return res.status(400).send({success:"false", msg:"enter valid post id"});
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
    const id = parseInt(req.params.id);
    const removedPost = remove(id);
    if(removedPost){
        return res.status(200).send({success:"true", msg:removedPost});
    }else{
        return res.status(400).send({success:"false", msg:"could not delete post, try again later"});
    }
}

export const updatePost = (req, res, next) =>{
    const id = parseInt(req.params.id);
    const caption = req.query.caption;
    const imageURL = req.query.imageURL;
    const data = {id, caption, imageURL};

    const updatedPost = update(data);

    if(updatedPost){
        return res.status(201).send({success:"true", msg:updatedPost});
    }else{
        return res.status(400).send({success:"false", msg:"could not update post, please check the post content"});
    }
}

