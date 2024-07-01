export default class LikeModel{
    constructor(id, userId, postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }
}

export const toggleLikeStatus = (userId, postId)=>{
    const likeIndex = likes.findIndex((l)=> l.postId == postId && l.userId == userId);

    if(likeIndex != -1){
        const unlikedPost = likes[likeIndex];
        likes.splice(likeIndex,1);
        return unlikedPost;
    }else{
        const newLike = new LikeModel(likes.length+1, userId, postId);
        likes.push(newLike);
        return newLike;
    }
}

export const getLikesByPostId = (postId)=>{
    const allLikes = likes.filter((l)=>l.postId == postId);
    return allLikes; 
}

let likes = [{
    id:1,
    userId:1,
    postId:1
}];