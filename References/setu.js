class Product {
    constructor(title) {
      this.title = title;
    }
  }
  
  class User {
    constructor(name, age, likedProducts) {
      this.name = name;
      this.age = age;
      this.likedProducts = likedProducts;
    }
  }
  
  function recommendProducts(currentUser, allUsers) {
    const recommendedProducts = [];
    const ageRanges = [
      [1, 10], [11, 20], [21, 30], [31, 40], [41, 50],
      [51, 60], [61, 70], [71, 80], [81, 90], [91, 100]
    ];
    let userAgeRange = null;
    
    for (const range of ageRanges) {
      if (range[0] <= currentUser.age && currentUser.age <= range[1]) {
        userAgeRange = range;
        break;
      }
    }
    
    if (userAgeRange !== null) {
      for (const otherUser of allUsers) {
        let otherUserAgeRange = null;
        for (const range of ageRanges) {
          if (range[0] <= otherUser.age && otherUser.age <= range[1]) {
            otherUserAgeRange = range;
            break;
          }
        }
        
        if (otherUser !== currentUser && otherUserAgeRange !== null &&
            userAgeRange.toString() === otherUserAgeRange.toString()) {
          for (const product of otherUser.likedProducts) {
            if (!recommendedProducts.some((recProduct) => recProduct.title === product.title)) {
              recommendedProducts.push(product);
            }
          }
        }
      }
    }
    
    return recommendedProducts;
  }
  
  const product1 = new Product('Product 1 - Laptop');
  const product2 = new Product('Product 2 - Smart Watch');
  const product3 = new Product('Product 3 - Headphones');
  const product4 = new Product('Product 4 - Smartphone');
  const product5 = new Product('Product 5 - Fitness Tracker');
  
  const user1 = new User('John', 25, [product1, product3, product4]);
  const user2 = new User('Emma', 22, [product1, product3, product4]);
  const user3 = new User('Michael', 55, [product2, product3, product5]);
  const user4 = new User('Sarah', 23, [product2, product3, product5]);
  
  const allUsers = [user1, user2, user3, user4];
  const recommendedProducts = recommendProducts(user1, allUsers);
  
  console.log('Hey ' + user1.name + ', users of your age range have liked these products:');
  if (recommendedProducts.length === 0) {
    console.log('No suggested products available');
  } else {
    recommendedProducts.forEach((product, index) => {
      console.log(`${index + 1}. ${product.title}`);
    });
  }
  