//Write an Arrow function to print different food menu for different day in a week
const printFoodMenu = (day, isVegetarian) => {
    switch (day.toLowerCase()) {

      case 'monday':
        console.log('Monday Menu: Maharashtrian Puran Poli');
        break;

      case 'tuesday':
        console.log('Tuesday Menu: Grilled Chicken Salad');
        break;

      case 'wednesday':
        console.log('Wednesday Menu: Misal Pav');
        break;

      case 'thursday':
        console.log('Thursday Menu: Pav Bhaji');
        break;

      case 'friday':
        console.log('Friday Menu: Margherita Pizza');
        break;

      case 'saturday':
        if (isVegetarian) {
          console.log('Saturday Menu: Maharashtrian Special Thali');
        } else {
          console.log('Saturday Menu: Non-Vegetarian Special Seafood Thali');
        }
        break;
      case 'sunday':
        if (isVegetarian) {
          console.log('Sunday Menu: Maharashtrian Special');
        } else {
          console.log('Sunday Menu: Non-Vegetarian Special Chicken Thali');
        }
        break;
      default:
        console.log('Invalid day');
    }
  };
  
  printFoodMenu('Monday');
  printFoodMenu('Tuesday');
  printFoodMenu('wednesday');
  printFoodMenu('Thursday');
  printFoodMenu('Friday');
  printFoodMenu('Saturday',false);//false for nom-Vegetarian
  printFoodMenu('Sunday', true); //true for Vegetarian

  //output
// Monday Menu: Maharashtrian Puran Poli
// Tuesday Menu: Grilled Chicken Salad
// Wednesday Menu: Misal Pav
// Thursday Menu: Pav Bhaji
// Friday Menu: Margherita Pizza
// Saturday Menu: Non-Vegetarian Special Seafood Thali
// Sunday Menu: Maharashtrian Special
  