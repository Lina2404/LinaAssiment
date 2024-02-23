const companyData = {
    companyName: 'Google',
    location: 'pune',
    departments: {
      sales: {
        manager: 'sambhaji mitkar',
        employees: [
          { name: 'lina', position: 'Sales Representative', age: 23 },
          { name: 'tina', position: 'Sales Associate', age: 24 }
        ]
      },
      marketing: {
        manager: 'sachin shirsath',
        employees: [
          { name: 'sachin', position: 'Marketing Specialist', age: 30 },
          { name: 'aashish', position: 'Social Media Coordinator', age: 26 }
        ]
      },
      development: {
        manager: 'Siddharth sp',
        employees: [
          { name: 'rachana', position: 'Software Engineer', age: 30},
          { name: 'rohini', position: 'UI/UX Designer', age: 32 }
        ]
      }
    }
  };
  

  console.log(companyData);
  