import fs from 'fs';

let products = null;
try {
	  const jsonString = fs.readFileSync('./products.json')
		/*
			id,
			name,
			price,
			type,
			brand,
			description,
			quantity,
			url,
		*/
	  products = JSON.parse(jsonString)['products'];
	} 
catch(err) {
  console.error(err);
}

export default products;