import winston from 'winston';


const logger = winston.createLogger({
    level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'request-logging' },
  transports: [
    new winston.transports.File({ filename: 'error.log'})]
})

const loggerMiddleware = async (req, res, next)=>{

    if(!req.url.includes('signin')){
        const logData = `Date:${new Date().toString()} req-URL:${req.url} req-body:${JSON.stringify(req.body)}`;
        await logger.info(logData);
    }
    
    next();
}

export default loggerMiddleware;