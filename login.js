const jwt =require('jsonwebtoken');

router.post("/login",async(req,res)=>{

    let user = req.body;

    if(user.username==="bousaw" && user.password==="Stare.120"){

        const accessToken=jwt.sign({username:user.password},"secret");
        res.status(201).send(accessToken)

    }else {
         res.status(502).json({error:"Nom d'utilisateur ou mot de passe incorrect"})
         }    
})