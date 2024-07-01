import { getAll,newComment,update,removeComment } from "../model/comment.model.js"; 


export const getAllComments = (req, res, next)=>{
    const postId = parseInt(req.params.id);
    const status = getAll(postId);
    if(status){
        return res.status(200).send({success:"true", msg:status});
    }else{
        return res.status(400).send({success:"false", msg:"Enter valid postId or try again later"});
    }
}

export const addComment = (req, res, next)=>{
    const data = req.body;
    const status = newComment(data);
    if(status){
        return res.status(201).send({success:"true", msg:status});
    }else{
        return res.status(400).send({success:"false",msg:"something went wrong, try again later"});
    }
}

export const updateComment = (req, res, next)=>{
    const id = req.params.id;
    const content = req.body.content;
    const data =  {id, content};
    const status = update(data);
    if(status){
        return res.status(201).send({status:"true", msg:status});
    }else{
        return res.status(400).send({status:"false", msg:"Enter valid comment Id or try again later"});
    }
}

export const deleteComment = (req, res, next)=>{
    const id = req.params.id;
    const status = removeComment(id);
    if(status){
        return res.status(200).send({status:"true",msg:status});
    }else{
        return res.status(400).send({success:"false", msg:"Enter valid comment Id to delete or try again later"});
    }
}