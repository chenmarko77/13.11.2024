// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
 
//   // Перебір ключів об'єкта hotel
//   for (const key in hotel) {
//     console.log('Key: ', key);
//   }
 
//   /*
//    * Key: name
//    * Key: stars
//    * Key: capacity
//    */

// const hotel = {
//     nikname: 'Resort Hotel',
//     email: 5,
//     hours: 100,
//   };
//     for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
//   }

//   const hotel = {
//     Myname: 'Marko',
//     surname: 'Chen',
//     age: 12,
//   };

//     for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
//   }


// const keys = Object.keys(hotel); 
 // ["name", "stars", "capacity"]
// const values = Object.values(hotel);
 // ["Resort Hotel", 5, 100]
//  const entries = Object.entries(hotel); 
 // [Array(2), Array(2), Array(2)]
// console.log(keys);
// console.log(values);
// console.log(entries);

// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(...temperatures); // NaN
// console.log(min);

// const houses = ['Arryn', 'Frey', 
//     'Greyjoy', 'Stark', 'Lannister', 
//     'Tyrell'];
// const copyHouses = [...houses]
// const lessFamily = houses.slice(0,2)
// console.log(lessFamily);

// houses.push(64)
// console.log(copyHouses == houses);

// console.log(houses);
// console.log(copyHouses);

// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
//   const secondBatch = ['Stark', 'Lannister', 'Tyrell'];
 
//   const lessFamily = firstBatch.slice(0,3)
// console.log(lessFamily);

//   const houses = [...firstBatch, ...secondBatch];


// const a = { x: 1, y: 7,e:20 };
// const b = { x: 2, z: 5,e:10, };
// const d = { ...a, ...b, e:10, x:23};
// {x:23, y: 7, z:5 ,e:10}

//1
// const products = [
//     {
//         name:'Banana',
//         price:2,
//         category:'fruit'
//     },
//     {
//         name:'Potato',
//         price:1,
//         category:'vegetables'
//     },
//     {
//         name:'Watermalon',
//         price:10,
//         category:'fruit'
//     },
// ]
// function calcPrice(a){
//     let sum = 0
//     for (const element of a) {
//         sum = sum + element.price
//     }
//     return console.log(sum)

// }
// calcPrice(products)

// 2) Створіть об'єкт "user" з властивостями "name", "age", "email" та методом "login", який буде виводити повідомлення на екран з привітанням користувача та його даними. Для виклику методу "login" використовуйте функцію зворотнього виклику (callback).

// const user = {
//         name:'Marko',
//         age: 12,
//         email: 'chenmarko77@user.com', 
//         login:function() {
//             console.log(`Hello ${this.name} you are ${this.age} your email is ${this.email} `);  
//         },
// }
// user.login()

// 2

// const user = {
//     name:'Marko',
//     age: 12,
//     email: 'chenmarko77@user.com', 
//     login:function(callback) {
//         callback(this.name,this.age,this.email)
//     },
// }

// function greet(name,age,email) {
//     console.log(`Hello ${name} you are ${age} your email is ${email} `);  
// }
// user.login(greet)
  

// 3) Створіть функцію "getObjectLength", яка приймає об'єкт як параметр і повертає кількість його властивостей.


// const user = {
//         name:'Marko',
//         age: 12,
//         email: 'chenmarko77@user.com', 
//         score: 5,

//         };

// function getObjectLength(param) {
// return console.log(Object.keys(param).length);

    
// }

// getObjectLength(user)

// 4) Створіть об'єкт "person" з властивостями "firstName", "lastName" та "fullName". Значення властивості "fullName" повинно бути отримано за допомогою з'єднання значень властивостей "firstName" та "lastName". Додайте до об'єкту метод, який буде виводити повідомлення на екран з повним ім'ям людини.


// const person = {
//     firstName:'Marko',
//     lastName: 'Chen',

//     myName:function () {
//         let fullName = (`${this.firstName} ${this.lastName}`)
//         return fullName
//     }
//     };
// console.log( person.myName());
 



// 5) Створіть об'єкт "product" з властивостями "name", "price" та "quantity". Додайте до об'єкту метод, який буде розраховувати вартість всіх товарів. Результат повинен бути виведений на екран.



// const product = {
//     name:'Xbox',
//     price: 299.99,
//     quantity: 2000,

//     result:function () {
//         console.log(this.price*this.quantity);
        
//     }
//     };
// product.result()


// 6) Створіть масив об'єктів "movies", де кожен об'єкт буде містити властивості "title", "director", "year" та "genre". Напишіть функцію, яка приймає масив об'єктів "movies" та жанр (строку) як параметри, та повертає масив фільмів, які належать до цього жанру.


// const movies = [
//   {
//   title: 'Avatar',
//   director: 'John',
//   year: 55,
//   genre: 'adventure'
//   },

//   {
//     title: 'Christmas mood',
//     director: 'Bear',
//     year: 1909,
//     genre: 'crimi'
//     },

//     {
//       title: 'Sommer vibe',
//       director: 'Mario',
//       year: 2055,
//       genre: 'adventure'
//       }

      
//     ]

//     function movieGenre(a,b) {
//        let newMovies = []
//         for (const element of a) {
//             if (element.genre == b) {
//                 newMovies.push(element.title)
//             } 
//         }
//         return newMovies
//     }

//    console.log(movieGenre(movies,'adventure'));
    
    