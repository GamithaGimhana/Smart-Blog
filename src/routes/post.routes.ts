import { Router } from 'express'
import { authenticate } from '../middlewares/auth.middleware'
import { savePost, getAllPost, getMyPost } from '../controllers/post.controller'
import { requireRole } from '../middlewares/role.middleware'
import { Role } from '../models/user.model'

const router = Router()

// /api/v1/auth/create
// protected route (AUTHOR, ADMIN)
router.post('/create', authenticate, requireRole([ Role.ADMIN, Role.AUTHOR ]), savePost)

// /api/v1/auth/
// public route
router.post('/', getAllPost)

// /api/v1/auth/me
// protected route (AUTHOR, ADMIN)
router.get('/me', authenticate, requireRole([ Role.ADMIN, Role.AUTHOR ]), getMyPost)

export default router
