import express, { Router } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import multer from 'multer';
import multerConfig from './multerConfig';
import path from 'path';
import products from './loadingProducts';
import { jwtSecret } from './config';
import middlewareAuth from './middlewareAuth';
import orders from './orders';
import users from './users';


const port = 3333; 
const upload = multer(multerConfig);
const registerUser = (req, res) => {
	const { name, email, password, address } = req.body;
	const user = users.find(user => user.email === email);
	if(user){
		return res.status(401).json({
			error: "email already exists"
		});
	}
	users.push({
		id: users.length+1,
		email,
		password,
		name,
		address,
		urlAvatar: '',

	});
	return res.json (
		users[users.length-1]
		)
}
const updateUser = (req, res)=> {
	const id = req.userId;
	const { email, password, name, address, urlAvatar } = req.body;
	console.log(users)
	if(email) users[id-1].email = email;
	if(password) users[id-1].password = password;
	if(name) users[id-1].name = name;
	if(address) users[id-1].address = address;
	if(urlAvatar) users[id-1].urlAvatar = urlAvatar;

	return res.json(users[id-1]);
}
const updatePhoto = (req, res) => {
	const { originalname: name,filename} = req.file;
	const id = req.userId;
	const path = 'http://localhost:'+port+'/uploads/'+filename;
	users[id-1].urlAvatar = path;
	res.json({
		name,
		path, 
	})
}
const login = (req, res) => {
	const {email, password} = req.body;
	const user = users.find(user => user.email === email && user.password === password);
	if(!user){
		return res.status(401).json({
					error: 'no authorization'
			});
	}
	return res.json({
		token: jsonwebtoken.sign({userId: user.id}, jwtSecret, {
			expiresIn: '1d'
		}),
	});
}

const getProducts = (req, res) => {
	return res.json(products);
}

const getProduct = (req, res) => {
	const { id } = req.query;

    const product = products.filter(p=>p.id === id);

    return res.json(
    	product
    	);
}

const addOrder = (req, res) => {
	const { listProducts, date, deliveryAdress } = req.body;
	const productsLessZero = [];
	for( const l of listProducts ){
		if(products[l.id-1].quantity - l.quantity < 0){
			productsLessZero.push(products[l.id-1]);
		}
		else {
			products[l.id-1].quantity -= l.quantity; 
		}
	}
	if(productsLessZero.length){
		return res.json({
			error: 'The order is not possible. Some products with quantity less than zero',
			products: productsLessZero
		})
	}
	const total = listProducts.reduce((aux, p) => aux + (parseInt(p.quantity)*parseFloat(p.price)),0);
	orders.push({
		id: orders.length+1,
		userId: req.userId,
		date,
		deliveryAdress,
		total,
		listProducts,

	})
	return res.json(
		orders[orders.length-1]
	)
}

const server = express();
const routes = new Router();
server.use(routes);
routes.use(express.json());
routes.get('/', (req, res)=> {
	return res.json({
		teste: 'ok'
	});
});

routes.get('/login', login);
routes.post('/register', registerUser);
routes.get('/products', getProducts);
routes.get('/product', getProduct);

routes.use(middlewareAuth);
routes.post('/cart/close', addOrder);
routes.use('/uploads',
			express.static(path.resolve(__dirname, 'uploads'))
		);
routes.post('/user/photo/update',upload.single('avatar'), updatePhoto);
routes.put('/user/update', updateUser);
routes.get('/store', (req,res)=> {
	return res.json({
		'teste': 'ok2'
	});
});
server.listen(port);