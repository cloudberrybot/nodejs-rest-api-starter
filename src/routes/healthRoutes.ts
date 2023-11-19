import { type RequestHandler, Router } from 'express'
import * as healthController from '../controllers/v1/healthController'

const router = Router()

router.get('/', healthController.checkHealth as unknown as RequestHandler)

export default router
