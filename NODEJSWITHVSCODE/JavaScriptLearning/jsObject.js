function printNestedObject(obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'object') {
        // If the property is an object, recursively call the function
        console.log(key + ':');
        printNestedObject(obj[key]);
      } else {
        // Print the property and its value
        console.log(key + ': ' + obj[key]);
      }
    }
  }
  
  // Example usage
  var obj = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA'
    }
  };
  
  printNestedObject(obj);
  