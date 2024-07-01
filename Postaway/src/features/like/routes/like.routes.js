import express from 'express';
import { getAllLikes,toggleLike } from '../controller/like.controller';

const router = express.Router();

router.route('/:id').get(getAllLikes);
router.route();

