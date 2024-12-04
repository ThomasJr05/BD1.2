const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ', ' + year;
  res.send(formattedDate);
});

app.get('/greet' , (req,res) => {
  let name = req.query.name
  let greetingMessage = "Namaste, " + name;
  res.send(greetingMessage)
})




app.get ('/average-speed' , (req, res) =>{
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);

  let averageSpeed = totalDistance / totalTime;
  res.send(averageSpeed.toString())

})


app.get('/eta' , (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);

  let ETA = distance / speed;
  res.send(ETA.toString())
})


app.get('/check-number' , (req, res) => {
  let number = parseFloat(req.query.number);
  let result;

  if (number >= 0){
    result = 'positive';
  }
  else{
    result = 'negative'
  }

  res.send('Number is ' + result)
})


app.get ('/check-even-odd' , (req,res) => {
  let number = parseFloat(req.query.number);
  let result;

  if (number%2 === 0){
    result = 'even'
  }else {
    result = 'odd'
  }
  res.send('Number is ' + result)
})


app.get('check-discount' , (req, res) => {
  let age = parseFloat(req.query.age);
  let result;

  if (age > 65){
    result = "User is eligible for a discount"
  } else{
    result = "User is not eligible for a discount"
  }

  res.send(result)
});


app.get('/check-number-type', (req,res) =>{
  let number = parseFloat(req.query.number);
  let result;

  if (number > 0){
    result = "Positive";
  } else if (number < 0){
    result = "Negative"
  } else {
    result = "Zero"
  }

  res.send(result);
})

app.get('/check-temp' , (req, res) => {
  let temp = parseFloat(req.query.temp);
  let result;


  if (temp < 15) {
    result = "Cold"
  } else if (temp > 25){
    result = "Hot"
  } else {
    result = "Warm"
  }

  res.send(result)
})


app.get("/check-act" , (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;


  if (steps < 5000){
    result = "Low"
  } else if (steps > 10000){
    result = "High"
  } else {
    result = "Moderate"
  }

  res.send(result);
})



function welcomeMessage(){
  return "Welcome to Coding"
}

app.get('/Welcome' , (req,res) =>{
  res.send(welcomeMessage())
})


 function getGreetingMessage(username){
  return "Hello, " + username + "!"
 }

 app.get('/greeting' , (req, res) => {
  let username = req.query.username;

  res.send(getGreetingMessage(username))
 })


function checkPassword(password){
  console.log(password.length);
  if (password.length > 15){
    return "Password is Strong"
  }else {
    return "Password is Weak"
  }
}


app.get('/check-password' , (req,res) => {
  let password = req.query.password
  res.send(checkPassword(password))
})



function calculateSum(num1 , num2){
  let sum = num1 + num2;
  return sum;
}


app.get('/sum' , (req,res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  

  res.send(calculateSum(num1, num2))
})



function greeting(age, gender, name){
  return "Hello, " + name + "! " + "You are a " + age + " year old " + gender 
}

app.get('/pgreeting' , (req, res) => {
  let age = parseFloat(req.query.age)
  let gender = req.query.gender
  let name = req.query.name

  res.send(greeting(age, gender, name))

})



function calculatedPrice(price, discount, tax){
  let discountedPrice = price - (price * (discount/100))
  let finalPrice = discountedPrice + (price * (tax/100))
  return finalPrice
}


app.get('/final' , (req, res) => {
  let price = parseFloat(req.query.price)
  let discount = parseFloat(req.query.discount)
  let tax = parseFloat(req.query.tax)

  res.send(calculatedPrice(price, discount, tax).toString())

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
