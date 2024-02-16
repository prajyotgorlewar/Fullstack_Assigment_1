import { rejects } from 'node:assert';
import { resolve } from 'node:path';
import querystring from 'node:querystring';


const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6';
const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        limit: 10,
        offset,
    }
    const url=baseUrl + '?' + querystring.stringify(parameters);
    return url;
}


const fetchPincodeData=(offset)=>{
    const fetchPromise=fetch(createRequestUrl(offset)).then((response)=>{
        // const { records }=response.json();
        return response.json();
        
    })
    fetchPromise.then((data) => {
        console.log('data available');
        console.log(data);
    });
}

const promises = [];

promises.push(fetchPincodeData(31));
promises.push(fetchPincodeData(51));
promises.push(fetchPincodeData(61));

// Using Promise.all to wait for all promises to resolve
Promise.all(promises)
    .then(results => {
        const combinedData = [...results[0], ...results[1], ...results[2]];
        console.log(combinedData);
    })
    .catch(error => {
        console.error('Error fetching pincode data:', error);
    });