
import {validationResult} from 'express-validator' 

const validationResults = (req, res, next) =>{
    const erros= validationResult
    if(!err){
res.send({ errors: errors.array()});
    }
    //le digo que continue con el flujo
    next()
}

export default validationResults;