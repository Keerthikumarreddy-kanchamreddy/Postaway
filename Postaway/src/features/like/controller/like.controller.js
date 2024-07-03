import { getLikesByPostId,toggleLikeStatus } from "../model/like.model.js";

export const getAllLikes = (req, res, next)=>{
    const postId = req.params.postId;
    const status = getLikesByPostId(postId);

    if(status){
       return res.status(200).send({success:"true", msg:status});
    }else{
      return res.status(400).send({success:"false", msg:status});
    }
}

export const toggleLike = (req, res, next)=>{

    const postId = parseInt(req.params.postId);
    const userId = parseInt(req.userId);
    const likeStatus = toggleLikeStatus(userId, postId);

    if(likeStatus){
        return res.status(200).send({success:"true", msg:likeStatus});
    }else{
        return res.status(400).send({success:"false", msg:likeStatus});
    }
}