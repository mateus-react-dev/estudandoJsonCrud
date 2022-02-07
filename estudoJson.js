console.log("estudo de json");
//estudo do crud
const valString = require('./script.json');
const valStringLogin = require('./login.json');
const arrayTest = [];
const arrayLogin = [];
//verificação de registro
arrayTest.push(valString.name, valString.email,valString.cell, valString.password);
if(arrayTest.length==4){console.log("register successfully");}
else{console.log("ERROR");}
//verificação de login
arrayLogin.push(valStringLogin.email, valStringLogin.password);
if(arrayLogin == arrayTest[1],[3]){console.log("login sucessful");}
else{console.log("error");}