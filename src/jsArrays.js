
import response from './response.json' assert { type: 'json' };



const mappedArray = response.map(item => ({
  name: item.name,
  year: item.vehicle.year
}));

console.log("Mapped array:");
console.log(mappedArray);


const filteredArray = response.filter(item => item.vehicle.year > 2020);

console.log("\nFiltered array:");
console.log(filteredArray);
