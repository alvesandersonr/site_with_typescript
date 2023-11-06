import express from 'express'

// Controllers
import { store } from '../controllers/User'

// Validation
import { userStoreValidate } from '../validations/user'

const router = express.Router()

router.post('/store', userStoreValidate, store)

export default router;