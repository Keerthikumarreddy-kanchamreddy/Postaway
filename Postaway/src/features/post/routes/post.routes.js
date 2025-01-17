import express from 'express';
import { getAllPosts,getPostById,getPostsByUserId,createPost,deletePost,updatePost } from '../controller/post.controller.js';

const router = express.Router();

router.route('/all').get(getAllPosts);
router.route('/:id').get(getPostById);
router.route('/').get(getPostsByUserId);
router.route('/').post(createPost);
router.route('/:id').delete(deletePost);
router.route('/:id').put(updatePost);


export default router;