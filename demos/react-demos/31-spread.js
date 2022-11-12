const john = {
    name: 'John',
    age: 32,
    location: 'Kochi'
};

const johnEmployment = {
    company: 'Quest Global',
    location: 'Trivandrum'
};

const johnMasterDetails = {
    ...john,
    ...johnEmployment,
    spouse: 'Jane'
};

console.log( johnMasterDetails );