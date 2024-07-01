import express from 'express';
import { getAllComments,addComment,updateComment,deleteComment} from '../controller/comment.controller.js';


const router = express.Router();

router.route('/:id').get(getAllComments);
router.route('/').post(addComment);
router.route('/:id').put(updateComment);
router.route('/:id').delete(deleteComment);


export default router;