import express from 'express';
import { getAllPosts,getPostById,createPost,deletePost } from '../controller/post.controller.js';

const router = express.Router();

router.route('/all').get(getAllPosts);
router.route('/:id').get(getPostById);
router.route('/').post(createPost);
router.route('/:id').delete(deletePost);


export default router;