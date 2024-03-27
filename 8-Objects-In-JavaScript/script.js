//  Object Creation :

//  Object is an Instance of given class :

//  IN JavaScript we can create two a way of Object creating a Method :

//  1St Methods :


let item = {
    name : 'HP',
    price : 65000,
    Quantity : 1
}

console.log(item)


//  2ND Methods : 


let item2 = new Object()

item2.name = 'MAC OS'
item2.price = 100000
item2.Quantity = 2

console.log(item2)   


//  We can create Nested Object Value also :


let item3 = {
    name : 'Dell',
    price : 65000,
    Quantity : 2,
    dimension : {
        height :7,
        weight : 10,
        breadth : 11
    }
}

console.log(item3)


// And We can also add Array Variable also :

//  And we can access Array Value also :


let item4 = {
    name : 'Asus',
    price : 75000,
    Quantity : 22,
    categ : ['Electronics','Phones'],
    dimensions : {
        le : 5,
        he : 4,
        bre: 10
    }
}

console.log(item4)
console.log(item4.categ[0])
console.log(item4.dimensions.le)



//  HOW to Add Methods in Object :


item = {
    name : 'HP',
    price : 65000,
    Quantity : 1,
    buy : function() {
        console.log('Your item can added in cart-Item Function')
    }
}

item.buy()
console.log(item)


//  2ND Methods Without using Function Name :

item = {
    name : 'DELL',
    price : 14522,
    Quantity : 10,
    buy : function() {
        console.log("1ST Methods while using Function Keyword")
    },
    addtolist() {
        console.log("2nd Methods without using Function Keyword")
    }
}

item.addtolist()

let cart = {
    User_Name : 'Raj vickram',
    Email : 'vikramsachin400@gmail.com',
    Password : 'Vikram200@'
}

console.log(cart)


let cartItem = {
    Note : 1,
    Powder : 1,
    Shoes : 2,
    Signup : {
        User_Name : 'Raj vickram',
        Email : 'vikramsachin400@gmail.com',
        Password : 'Vikram200@'
    },
    disp() {
        console.log('all values are presented in this CartItem')
    }
}

console.log(cartItem)
cartItem.disp()