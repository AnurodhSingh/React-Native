import API from './config';
import fetchBody from './fetchBody';


function secureFetch(type, token, body=''){
	if(type === 'GET' || type === 'DELETE'){
		return {
			method: type,
			headers: {
				'Authorization': API.AUTH
			},
		};
	}else{
		return {
			method: type,
			headers: {
				'Authorization': API.AUTH,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify( body )
		};
	}
}

export function* sendJSON( path, body ) {
	console.log('#### sendJSON api url : ',`${path}`,body);
	return yield fetch(`${API.BASE}/${path}`, fetchBody(body)).then((response) => {
	//return Promise.all([Promise.resolve(response), response.json()]);
		console.log('######### sendJSON response ',response);
		return response.json();
	});
}

export function* securePost(path, token='', body){
	console.log('#### api url : ',`${API.BASE}/${path}`,body);
	return yield fetch(`${API.BASE}/${path}`, secureFetch('POST', token, body)).then((response) => {
	// return Promise.all([Promise.resolve(JSON.stringify(response)), response.json()]);
		console.log('######### securePost ',response.status);
		return response.json();
	});
}

export function* securePut(path, token='', body){
	return yield fetch(`${API.BASE}/${path}`, secureFetch('PUT', token, body)).then((response) => {
	// return Promise.all([Promise.resolve(JSON.stringify(response)), response.json()]);
		console.log('######### securePut ',response.status);
		return response.json();
	});
}

export function* secureGet(path, token=''){
	return yield fetch(`${API.BASE}/${path}`, secureFetch('GET', token)).then((response) => {
	// return Promise.all([Promise.resolve(JSON.stringify(response)), response.json()]);
		console.log('######### secureGet ',response.status);
		return response.json();
	});
}

export function* secureDelete(path, token=''){
	return yield fetch(`${API.BASE}/${path}`, secureFetch('DELETE', token)).then((response) => {
	// return Promise.all([Promise.resolve(JSON.stringify(response)), response.json()]);
		console.log('######### secureDelete ',response.status);
		return response.json();
	});
}

export default sendJSON;
