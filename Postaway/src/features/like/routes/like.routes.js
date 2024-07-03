import express from 'express';
import { getAllLikes,toggleLike } from '../controller/like.controller.js';

const router = express.Router();

router.route('/:postId').get(getAllLikes);
router.route('/toggle/:postId').get(toggleLike);

export default router;