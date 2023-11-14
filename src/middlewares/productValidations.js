import { check } from "express-validator"
import validationResults from "../helpers/validationsResults"

const productValidate= [
    check('productName', 'El nombre del producto es obligatorio').notEmpty(),
    check('productName', 'el nombre del producto debe tener de 2 a 10 caracteres').isLength({min: 2, max: 10}),
    check('price', 'el precio es obligatorio').notEmpty(),
    check('price').custom(()=>{
        if(value >= 0 && value <= 10000){
            return true
        }else{
            throw new Error('El precio debe de estar entre 0 y 10000')
        }
    }),

    (req, res, next)=>{
        validationResult(req, res, next)
    }
]

export default productValidate