'use strict';

const express = require('express');

const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from localhost:3000
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // Allow the HTTP methods specified
// 	res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allow headers with Content-Type
// 	next();
// });

app.get('/getoutput',(req,res)=>{
	let table2 = 'dataTable'
	let {role} = req.query
	var catalystApp = catalyst.initialize(req);
	console.log("Inside Api")
	getDataFromCatalystDataStore(catalystApp, table2 ,role).then(Detail =>{
		console.log("function respose")
		res.send(Detail)
	})
	.catch((err)=>{
		console.log(err,"error in getting time from true condition")
		
	})
})

function getDataFromCatalystDataStore(catalystApp, tableName , role) {
	return new Promise((resolve, reject) => {
		if(role){
			// Queries the Catalyst Data Store table
	    catalystApp.zcql().executeZCQLQuery("Select * from "+tableName+" where role ='"+role+"'").then(queryResponse => {
			console.log("function inside")
		  resolve(queryResponse);
	    }).catch(err => {
			console.log(err)
	    })
		}else{
			// Queries the Catalyst Data Store table
	    catalystApp.zcql().executeZCQLQuery("Select * from "+tableName).then(queryResponse => {
			console.log("function inside")
		  resolve(queryResponse);
	    }).catch(err => {
			console.log(err)
	    })
		}
	    
	});
   
  }


//   function getDataFromCatalystDataStore2(catalystApp, tableName) {
// 	return new Promise((resolve, reject) => {
// 	    // Queries the Catalyst Data Store table
// 	    catalystApp.zcql().executeZCQLQuery("Select * from " + tableName + "Where " + columnName + "='" +"user'").then(queryResponse => {
// 		  resolve(queryResponse);
// 	    }).catch(err => {
// 			console.log(err)
// 	    })
// 	});
   
//   }
console.log('hello server')

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send(`Internal Server Error: ${err.message}`);
  });

module.exports = app;
