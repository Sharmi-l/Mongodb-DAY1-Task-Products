// Below mentioned Queries for Mongodb Day1 Task Questions with outputs:


/* Initial Process for Creating, Inserting Database on mongoshell:

1) Created new database -> database name is "productsTask"

      use productsTask

2) Created products collection inside the productsTask database -> collection name is "products"

     db.createCollection("products")

3) viewed the collections inside the  productsTask database

    show collections

4) Inserted objects of array datas inside the collections

     db.products.insertMany([
        
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }

     ])

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 1) : Find all the information about each products

// Query:

         db.products.find({}).toArray();

/*  OUTPUT for Ques1:

[
  {
    _id: ObjectId("646da58dbf09981facd1aa5a"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5b"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5c"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5d"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5e"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5f"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa60"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa61"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa62"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa63"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa64"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa65"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa66"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa67"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa68"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa69"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6a"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6b"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6c"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6d"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6e"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6f"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa70"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa71"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa72"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton', 
    product_color: 'indigo'
  }
]

 */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 2) : Find the product price which are between 400 to 800

// Query: 

          db.products.find({ product_price: { $gt: 400, $lt: 800 } }).pretty();

/*  OUTPUT for Ques2:

[
  {
    _id: ObjectId("646da58dbf09981facd1aa5a"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5c"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5d"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5f"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa60"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 3) : Find the product price which are not between 400 to 600

// Query: 

          db.products.find({ product_price: { $not : { $gt: 400, $lt: 600 }}}).pretty();

/*  OUTPUT for Ques3:

[
  {
    _id: ObjectId("646da58dbf09981facd1aa5a"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5b"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5c"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5e"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa61"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa62"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa63"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa64"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa65"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa66"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa67"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa68"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa69"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6a"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6b"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6c"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6d"),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6e"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6f"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa70"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  }
]
Type "it" for more
productsTask> it
[
  {
    _id: ObjectId("646da58dbf09981facd1aa71"),
    id: '24',
    product_name: 'Tasty Rubber Cheese',
    product_price: 47,
    product_material: 'Frozen',
    product_color: 'orchid'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa72"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 4) : List the four product which are grater than 500 in price 

// Query: 

        db.products.find({ product_price:  { $gte: 500 }}).limit(4).pretty();

/*  OUTPUT for Ques4:

[
  {
    _id: ObjectId("646da58dbf09981facd1aa5a"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5b"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5c"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa60"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Question 5) : Find the product name and product material of each products

//  METHOD 1 :
     
// Query: 
         
       db.products.find({}, { product_name: 1, product_material: 1 });

/* 
OUTPUT for Ques5:

       [
        {
          _id: ObjectId("646da58dbf09981facd1aa5a"),
          product_name: 'Intelligent Fresh Chips',
          product_material: 'Concrete'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa5b"),
          product_name: 'Practical Fresh Sausages',
          product_material: 'Cotton'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa5c"),
          product_name: 'Refined Steel Car',
          product_material: 'Rubber'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa5d"),
          product_name: 'Gorgeous Plastic Pants',
          product_material: 'Soft'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa5e"),
          product_name: 'Sleek Cotton Chair',
          product_material: 'Fresh'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa5f"),
          product_name: 'Awesome Wooden Towels',
          product_material: 'Plastic'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa60"),
          product_name: 'Practical Soft Shoes',
          product_material: 'Rubber'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa61"),
          product_name: 'Incredible Steel Hat',
          product_material: 'Rubber'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa62"),
          product_name: 'Awesome Wooden Ball',
          product_material: 'Soft'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa63"),
          product_name: 'Generic Wooden Pizza',
          product_material: 'Frozen'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa64"),
          product_name: 'Unbranded Wooden Cheese',
          product_material: 'Soft'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa65"),
          product_name: 'Unbranded Plastic Salad',
          product_material: 'Wooden'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa66"),
          product_name: 'Gorgeous Cotton Keyboard',
          product_material: 'Concrete'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa67"),
          product_name: 'Incredible Steel Shirt',
          product_material: 'Metal'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa68"),
          product_name: 'Ergonomic Cotton Hat',
          product_material: 'Rubber'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa69"),
          product_name: 'Small Soft Chair',
          product_material: 'Cotton'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa6a"),
          product_name: 'Incredible Metal Car',
          product_material: 'Fresh'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa6b"),
          product_name: 'Licensed Plastic Bacon',
          product_material: 'Steel'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa6c"),
          product_name: 'Intelligent Cotton Chips',
          product_material: 'Soft'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa6d"),
          product_name: 'Handcrafted Wooden Bacon',
          product_material: 'Concrete'
        }
      ]
      Type "it" for more
      productsTask> it
      [
        {
          _id: ObjectId("646da58dbf09981facd1aa6e"),
          product_name: 'Unbranded Granite Chicken',
          product_material: 'Metal'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa6f"),
          product_name: 'Ergonomic Soft Hat',
          product_material: 'Rubber'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa70"),
          product_name: 'Intelligent Steel Pizza',
          product_material: 'Cotton'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa71"),
          product_name: 'Tasty Rubber Cheese',
          product_material: 'Frozen'
        },
        {
          _id: ObjectId("646da58dbf09981facd1aa72"),
          product_name: 'Licensed Steel Car',
          product_material: 'Cotton'
        }
      ]

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Question 6) : Find the product with a row id of 10

// Query: 

      db.products.find({id : '10'});

/*  OUTPUT for Ques6:

[
  {
    _id: ObjectId("646da58dbf09981facd1aa63"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  }
]

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 7) : Find only the product name and product material

// METHOD 1 :

// Query: 

    db.products.find({},{_id:0,product_name:1,product_material:1})


/*  OUTPUT for Ques7:

[
  {
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  { product_name: 'Refined Steel Car', product_material: 'Rubber' },
  { product_name: 'Gorgeous Plastic Pants', product_material: 'Soft' },
  { product_name: 'Sleek Cotton Chair', product_material: 'Fresh' },
  {
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  { product_name: 'Practical Soft Shoes', product_material: 'Rubber' },
  { product_name: 'Incredible Steel Hat', product_material: 'Rubber' },
  { product_name: 'Awesome Wooden Ball', product_material: 'Soft' },
  { product_name: 'Generic Wooden Pizza', product_material: 'Frozen' },
  { product_name: 'Unbranded Wooden Cheese', product_material: 'Soft' },
  {
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  { product_name: 'Incredible Steel Shirt', product_material: 'Metal' },
  { product_name: 'Ergonomic Cotton Hat', product_material: 'Rubber' },
  { product_name: 'Small Soft Chair', product_material: 'Cotton' },
  { product_name: 'Incredible Metal Car', product_material: 'Fresh' },
  { product_name: 'Licensed Plastic Bacon', product_material: 'Steel' },
  {
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  }
]
Type "it" for more
productsTask> it
[
  {
    product_name: 'Unbranded Granite Chicken',
    product_material: 'Metal'
  },
  { product_name: 'Ergonomic Soft Hat', product_material: 'Rubber' },
  {
    product_name: 'Intelligent Steel Pizza',
    product_material: 'Cotton'
  },
  { product_name: 'Tasty Rubber Cheese', product_material: 'Frozen' },
  { product_name: 'Licensed Steel Car', product_material: 'Cotton' }
]

*/



// METHOD 2 :

// Query for find only the product name : 

db.products.find().forEach(function(product){print(" product_name :" + " " + product.product_name )})

// Query for find only the product material : 

db.products.find().forEach(function(product){print(" product_material :" + " " + product.product_material )})

/*  OUTPUT for Ques5:

1) OUTPUT for the product name:

 product_name : Intelligent Fresh Chips
 product_name : Practical Fresh Sausages
 product_name : Refined Steel Car
 product_name : Gorgeous Plastic Pants
 product_name : Sleek Cotton Chair
 product_name : Awesome Wooden Towels
 product_name : Practical Soft Shoes
 product_name : Incredible Steel Hat
 product_name : Awesome Wooden Ball
 product_name : Generic Wooden Pizza
 product_name : Unbranded Wooden Cheese
 product_name : Unbranded Plastic Salad
 product_name : Gorgeous Cotton Keyboard
 product_name : Incredible Steel Shirt
 product_name : Ergonomic Cotton Hat
 product_name : Small Soft Chair
 product_name : Incredible Metal Car
 product_name : Licensed Plastic Bacon
 product_name : Intelligent Cotton Chips
 product_name : Handcrafted Wooden Bacon
 product_name : Unbranded Granite Chicken
 product_name : Ergonomic Soft Hat
 product_name : Intelligent Steel Pizza
 product_name : Tasty Rubber Cheese
 product_name : Licensed Steel Car


2) OUTPUT for the product material :

 product_material : Concrete
 product_material : Cotton
 product_material : Rubber
 product_material : Soft
 product_material : Fresh
 product_material : Plastic
 product_material : Rubber
 product_material : Rubber
 product_material : Soft
 product_material : Frozen
 product_material : Soft
 product_material : Wooden
 product_material : Concrete
 product_material : Metal
 product_material : Rubber
 product_material : Cotton
 product_material : Fresh
 product_material : Steel
 product_material : Soft
 product_material : Concrete
 product_material : Metal
 product_material : Rubber
 product_material : Cotton
 product_material : Frozen
 product_material : Cotton

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 8) : Find all products which contain the value of soft in product material 

// METHOD 1 :

// Query: 

db.products.aggregate([{$match:{product_material:'Soft'}}]);

/*

OUTPUT for Ques8 : 

[
  {
    _id: ObjectId("646da58dbf09981facd1aa5d"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa62"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa64"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6c"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  }
]

*////////////////////////////////////////////////

// Question 8) : Find all products which contain the value of soft in product material 

// METHOD 2 :

// Query: 

db.products.find({ product_material: "Soft" }, { product_material: 1 });

/*  OUTPUT for Ques8:

[
  {
    _id: ObjectId("646da58dbf09981facd1aa5d"),
    product_material: 'Soft'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa62"),
    product_material: 'Soft'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa64"),
    product_material: 'Soft'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6c"),
    product_material: 'Soft'
  }
]

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Question 9) : Find products which contain product color indigo  and product price 492.00

// Query: 

       db.products.find({ $or: [{ product_color: "indigo" }, { product_price: 492.0 }]}).pretty();

/*  OUTPUT for Ques9:

[
  {
    _id: ObjectId("646da58dbf09981facd1aa5b"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa5d"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa63"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa6a"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("646da58dbf09981facd1aa72"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]

*/ 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Question 10) : Delete the products which product price value are same


// Query: 

         db.products.find({}, { product_price : 1 }).forEach(function(doc) {
         db.products.deleteMany({_id: { $gt: doc._id }, product_price : doc.product_price })
         })


/*  OUTPUT for Ques10:  (Below Outputs did not have id: "20" and id: "24" products details. bcz that id products prices are same. Deleted the products  id: "20" and id: "24" due to duplicates)


productsTask> db.products.find({}).toArray()
[
  {
    _id: ObjectId("6474c231cca9af9e14db1df4"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1df5"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1df6"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1df7"),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1df8"),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1df9"),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1dfa"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1dfb"),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1dfc"),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1dfd"),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1dfe"),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1dff"),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e00"),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e01"),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e02"),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e03"),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e04"),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e05"),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e06"),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e08"),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e09"),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e0a"),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  },
  {
    _id: ObjectId("6474c231cca9af9e14db1e0c"),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]


*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////