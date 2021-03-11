import express, { Router } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import multer from 'multer';
import multerConfig from './multerConfig';
import path from 'path';
import cors from 'cors';
import { products } from './loadingProducts';
import { jwtSecret, port } from './config';
import middlewareAuth from './middlewareAuth';
import orders from './orders';
import users from './users';


const upload = multer(multerConfig);


const registerUser = (req, res) => {
	const { name, email, password, address } = req.body;
	if(!name || !email || !password){
		return res.status(401).json({
			error: "name, password and email are required"
		})
	}
	const user = users.find(user => user.email === email);
	if(user){
		return res.status(401).json({
			error: "email already exists"
		});
	}
	console.log('register', name, email, password);
	users.push({
		id: users.length+1,
		email,
		password,
		name,
		address: address ? address : ' ',
		urlAvatar: '',

	});
	return res.json (
		{
			id:  users.length+1,
			email,
			name,
		}
	);
}

const updateUser = (req, res)=> {
	const id = req.userId;
	const { email, password, name, address, urlAvatar } = req.body;
	if(email) users[id-1].email = email;
	if(password) users[id-1].password = password;
	if(name) users[id-1].name = name;
	if(address) users[id-1].address = address;
	if(urlAvatar) users[id-1].urlAvatar = urlAvatar;
	console.log('updateUser', req.body);
	return res.json(users[id-1]);
}

const getUser = (req, res ) => {
	const id = req.userId;
	const { name, email, address, urlAvatar } = users[id-1];
	console.log('getUser', users[id-1]);
	return res.json(
		 {
		 	name,
		 	email,
		 	address,
		 	urlAvatar,
		 }
		);
}

const updatePhoto = (req, res) => {
	if(!req.file){
		return res.status(400).json({
			error: 'unsent file'
		});
	}
	const { originalname: name,filename} = req.file;

	const id = req.userId;
	const path = 'http://localhost:'+port+'/uploads/'+filename;
	users[id-1].urlAvatar = path;
	console.log('update photo');
	res.json({
		name,
		path, 
	})
}
const login = (req, res) => {
	const {email, password} = req.body;
	if(!email && !password){
		return res.status(401).json({
			error: "email and password are required"
		});
	}
	const user = users.find(user => user.email === email && user.password === password);
	if(!user){
		return res.status(401).json({
					error: 'no authorization'
			});
	}
	const { name, address, urlAvatar} = user;
	console.log('login', email, password);
	return res.json({
		user: {
			name,
			email,
			address,
			urlAvatar
		},
		token: jsonwebtoken.sign({userId: user.id}, jwtSecret, {
			expiresIn: '1d'
		}),
	});
}

const getProducts = (req, res) => {
	console.log('get products');
	return res.json(products);
}

const getProduct = (req, res) => {
	const { id } = req.query;

    const product = products.filter(p=>p.id === id);
    if(!product.length){
    	return res.status(400).json({
    		error: 'Product no found',
    	});
    }
	console.log('getProduct', product[0]);
    return res.json(
    	{product: product[0]}
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
		return res.status(400).json({
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

	});
	console.log('orders');
	return res.json(
		orders[orders.length-1]
	)
}

const server = express();

const routes = new Router();

server.use(routes);
routes.use(cors());
routes.use(express.json());

routes.post('/login', login);
routes.post('/register', registerUser);
routes.get('/products', getProducts);
routes.get('/product', getProduct);

routes.use('/imgs',
			express.static(path.resolve(__dirname, 'imgs'))
);
routes.use(middlewareAuth);
//rotas protegidas
routes.post('/cart/close', addOrder);
routes.use('/uploads',
			express.static(path.resolve(__dirname, 'uploads'))
);

routes.post('/user/photo/update',upload.single('avatar'), updatePhoto);
routes.put('/user/update', updateUser);
routes.get('/user', getUser );

server.listen(port);