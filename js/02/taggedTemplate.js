const user = {
    firstName: 'James',
    lastName: 'Bond',
    age: '30',
    nationality: 'American',
  };
  const { firstName, lastName, age, nationality } = user;
  const taggedTemplate = (user) => `<em>My name is </em>
  <strong> ${firstName}</strong> <strong>${lastName}</strong>
  <em>, and I'm </em> 
  <strong> ${age} </strong>
  <em> years old. I'm </em>
  <strong> ${nationality}</strong>
  <em>.</em>`;
  
   
  taggedTemplate(user);

export default taggedTemplate;