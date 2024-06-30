
export default class PostModel {
    constructor(id, userId, caption, imageURL){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageURL = imageURL; 
    }
}

export const add = (data) =>{
    const{userId, caption, imageURL} = data;
    const newPost = new PostModel(posts.length+1, userId, caption, imageURL);
    posts.push(newPost);
    return newPost;
}

export const getByUserId = (userId)=>{
    const userPosts = posts.filter((p)=>p.userId == userId);
    return userPosts;
}

export const getById = (id)=>{
    const post = posts.find((p)=>p.id == id);
    return post;
}

export const update = (data)=>{
    const{userId, caption, imageURL, id} = data;
    const postIndex = posts.findIndex((p)=>p.id = id);
    const modifiedPost = {userId, caption, imageURL, id};
    posts[postIndex] = modifiedPost;
    return modifiedPost;
}

export const remove = (id) =>{
    const postIndex = posts.findIndex((p)=>p.id == id);
    const post = posts[postIndex];
    posts.splice(postIndex,1);
    return post;
}


export const getAll= ()=>{
    return posts;
}

let posts = [{
    id:1,
    userId:1,
    caption:'beautiful flower',
    imageURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.photowall.com%2Fus%2Frose-flower-canvas-print&psig=AOvVaw3kovZ_oUOLOxPzHIZks-9O&ust=1719697326009000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj36vSh_4YDFQAAAAAdAAAAABAJ'
}, {
    id:2,
    userId:1,
    caption:'red rose',
    imageURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2F100-Assorted-Red-Roses-Beautiful-Fresh-Cut-Flowers-Express-Delivery%2F700849279&psig=AOvVaw3kovZ_oUOLOxPzHIZks-9O&ust=1719697326009000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj36vSh_4YDFQAAAAAdAAAAABAR'
},{
    id:3,
    userId:2,
    caption:'black rose',
    imageURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fblack%2520rose&psig=AOvVaw0mi1NQZprUhoNgZL11ZhSY&ust=1719701290271000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKClodiw_4YDFQAAAAAdAAAAABAE'
}]