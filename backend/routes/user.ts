import express from 'express'

// Controllers
import { store } from '../controllers/User'

// Validation
import { userStoreValidate } from '../validations/user'

const router = express.Router()

router.post('/create', userStoreValidate, store)

export default router;