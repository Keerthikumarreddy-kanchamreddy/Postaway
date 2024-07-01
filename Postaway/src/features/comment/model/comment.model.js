
export default class CommentModel{
    constructor(id, postId, userId, content){
        this.id= id;
        this.postId = postId;
        this.userId = userId;
        this.content = content;
    }
}

export const newComment = (data)=>{
    const {postId, userId, content} = data;
    const addComment = new CommentModel(comments.length+1, postId, userId, content);
    comments.push(addComment);
    return addComment;
}

export const getAll =(postId)=>{
    const allComments = comments.filter((c)=> c.postId == postId);
    return allComments;
}

export const update = (data)=>{
    const{id,content} = data;
    const commentIndex = comments.findIndex((c)=>c.id == id);
    const userId = comments[commentIndex].userId;
    const postId = comments[commentIndex].postId;
    const modifiedComment = {id, postId,userId,content};
    comments[commentIndex] = modifiedComment;
    return modifiedComment;
}

export const removeComment = (id)=>{
    const commentIndex = comments.findIndex((c)=>c.id == id);
    const comment = comments[commentIndex];
    comments.splice(commentIndex,1);
    return comment;
} 


let comments = [{
    id:1,
    postId:1, 
    userId:1,
    content:"1st comment of the 1st user on 1st post"
},{
    id:2,
    postId:2,
    userId:1,
    content:"1st comment of the 1st user on 2nd post"
},{
    id:3,
    postId:1,
    userId:2,
    comment:"1st comment of the 2nd user on 1st post"
}]