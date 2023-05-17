const firstNameFem = ['Olivia', 'Emma', 'Charlotte', 'Amelia', 'Sophia',
'Isabella', 'Ava', 'Mia', 'Evelyn', 'Luna', 'Harper', 'Scarlett', 'Eleanor', 
'Emily', 'Chloe'];

const firstNameMas = ['Liam', 'Noah', 'Oliver', 'Elijah', 'Henry', 
'Lucas', 'Benjamin', 'Theodore', 'Mateo', 'Levi', 'Sebastian', 'Daniel',
'Jack', 'Alexander', 'Owen'];

const midNameFem = ['Marie', 'Anne', 'Lynn', 'Elizabeth', 'Leigh', 'Nicole',
'Louise', 'Michelle', 'Renee', 'Jean'];

const midNameMas = ['Alan', 'Michael', 'James', 'William', 'Lee', 'John',
'Robert', 'Andrew', 'David', 'Joseph'];

const surname = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia',
'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzales',
'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];

function boyName() {
  let first = firstNameMas[Math.floor(Math.random() * firstNameMas.length)];
  let middle = midNameMas[Math.floor(Math.random() * midNameMas.length)];
  let last = surname[Math.floor(Math.random() * surname.length)];
  
  let fullName = `${first} ${middle} ${last}`;

  document.getElementById('nameDisplay').innerHTML = fullName;
}

function girlName() {
  let first = firstNameFem[Math.floor(Math.random() * firstNameFem.length)];
  let middle = midNameFem[Math.floor(Math.random() * midNameFem.length)];
  let last = surname[Math.floor(Math.random() * surname.length)];
  
  let fullName = `${first} ${middle} ${last}`;
  
  document.getElementById('nameDisplay').innerHTML = fullName;
}