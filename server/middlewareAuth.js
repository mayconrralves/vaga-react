import jsonwebtoken from 'jsonwebtoken';
import { promisify } from 'util';
import { jwtSecret } from './config';

const middlewareAuth = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	if(!authHeader) {
		return res.status(401).json({ error: 'Token not provided'});
	}

	const [, token] = authHeader.split(' ');

	try {
		const decoded = await promisify(jsonwebtoken.verify)(token, jwtSecret);
		req.userId = decoded.userId;

		next();

	}catch(error){
		console.log(error)
		return res.status(401).json({ error: 'Token Invalid'});
	}
}

export default middlewareAuth;