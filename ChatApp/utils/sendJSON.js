import API from './config';
const expiredTokenObj = {status: 401, message: 'Token Expired'};

function secureFetch(type, body = '') {
	if (type === 'GET' || type === 'DELETE') {
		return {
			method: type,
			headers: {
				'Authorization': API.AUTH
			},
		};
	} else {
		return {
			method: type,
			headers: {
				'Authorization': API.AUTH,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(body)
		};
	}
}

export function securePost(path, body) {
	return fetch(`${API.BASE}/${path}`, secureFetch('POST', body)).then((res) =>{ 
		if(res.status!=401)
			return res.json();
		else 
			throw (expiredTokenObj);
	});
}

export function securePut(path, body) {
	return fetch(`${API.BASE}/${path}`, secureFetch('PUT', body)).then((res) => res.json());
}

export function secureGet(path) {
	return fetch(`${API.BASE}/${path}`, secureFetch('GET')).then((res) =>{ 
		if(res.status!=401)
			return res.json();
		else 
			throw (expiredTokenObj);
	});
}

export function secureDelete(path) {
	return fetch(`${API.BASE}/${path}`, secureFetch('DELETE')).then((res) => res.json());
}

