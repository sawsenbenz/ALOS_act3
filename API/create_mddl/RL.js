import rateLimit from "express-rate-limit"


const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 50, 
    message: 'Vous avez dépassé le nombre maximal de demandes, veuillez réessayer plus tard.'
});

export default limiter