import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {

    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).send('Unauthorized');
    }

    try {
        const payload = jwt.verify(token,"Y8wA3eqJsbxhxzo1gpF");
        req.userId = payload.userId;
        req.username = payload.username;
    } catch (error) {
        console.log(error);
        return res.status(401).send('Unauthorized');
    }

    next();
}

export default jwtAuth;