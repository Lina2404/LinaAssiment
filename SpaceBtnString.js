//Write a code to Remove the spaces found in a string

const removeSpaces = inputString => {
    return inputString.replace(/\s/g, '');
  };
  
  
  const originalString = 'hi welcome to my code ';
  const stringWithoutSpaces = removeSpaces(originalString);
  
  console.log('Original String:', originalString);
  console.log('String without Spaces:', stringWithoutSpaces);
  