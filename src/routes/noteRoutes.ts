import { type RequestHandler, Router } from 'express'
import * as noteController from '../controllers/v1/noteController'

const router = Router()

router.get('/:id', noteController.getNote as unknown as RequestHandler)
router.get('/', noteController.getNotes as unknown as RequestHandler)
router.post('/', noteController.createNote as unknown as RequestHandler)
router.put('/:id', noteController.updateNote as unknown as RequestHandler)
router.delete('/:id', noteController.deleteNote as unknown as RequestHandler)

export default router
