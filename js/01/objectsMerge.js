import taggedTemplate from "../02/taggedTemplate";

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
};


const objectsMerge = (...objects) => {
    const mergeobjects = { ...objects };
  
    return mergeobjects;
  };


export default objectsMerge;