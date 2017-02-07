var http=require("http");
var fs = require('fs');
var path = require('path');
const url_req = require('url') ;
var lodash = require('lodash');
var data = JSON.parse(fs.readFileSync('details.json', 'utf8'));
//******************************seperate from the url query**********************************
function getQueryVariable(variable) {
    var vars = variable.replace("&","=").split("=");
    return vars ; 
}

//******************************distribute url accordingly************************************
http.createServer(function(request,response){
	function getUrl(name,type)
{
	fs.readFile(__dirname + '/'+name,'utf8', function (err, data) {
		if (err) 
			console.log(err);
		else
			{
				response.writeHead(200, {'Content-Type': type});
				response.write(data);
				response.end();
			}});}
//******************************ask url accordingly*******************************************
  if(url == '/')
  getUrl('index.html','text/html');
  else   if(url == '/main.js')
  	    getUrl('main.js','text/javascript');
  else   if(url == '/style.css')
   		  	    getUrl('style.css','text/css');
  else   if(url == '/gitimage.png')
  					console.log("load image");
  else   if(url == '/jquery.twbsPagination.js')
           		  	    getUrl('jquery.twbsPagination.js','text/js');
  
//******************************get /data from the url and process its parameters****************
  else if(url == '/data')
  {
  	    if(url_req.parse(request.url).query!=null){
		var query = url_req.parse(request.url).query;
		var getSeperated = getQueryVariable(query);
		fs.readFile(__dirname + '/details.json','utf8', function (err, data) {	
			if (err) 
				console.log(err);
			else
			{
				var items = JSON.parse(data).items;
				var len = items.length ; 
				var nameOfItems = [];
				for(var i =0 ; i<len ; i++)
				{
					if(lodash.includes(items[i].name,getSeperated[1]))
						nameOfItems.push(items[i]);
				}
				var page = getSeperated[3];
				var items =  [] ;
				var begin = (page-1)*10 ;
				var end = begin +10 ;
				for(var i=begin;i<end && i<nameOfItems.length;i++)
					items.push(nameOfItems[i]);
				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.write(JSON.stringify(items));
				response.end(); 
			}});}
	else 
	{
	fs.readFile(__dirname + '/details.json','utf8', function (err, data) {	
	if (err) 
		console.log(err);
	else{
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(data);
		response.end();
	}});}}}).listen(8080);