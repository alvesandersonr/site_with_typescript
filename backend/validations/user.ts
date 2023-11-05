import { body } from "express-validator"

export const userStoreValidate = [
    body("firstName").escape().not().isEmpty().withMessage("First Name is required"),
    body("lastName").escape().not().isEmpty().withMessage("Last Name is required"),
    body("email").escape().not().isEmpty().isEmail().withMessage("Email is required"),
    body("password").escape().not().isEmpty().withMessage("Password is required"),
]