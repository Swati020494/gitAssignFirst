var http = require('http');
var fs = require('fs');
var data = JSON.parse(fs.readFileSync('details.json', 'utf8'));
http.createServer(function(request,response){
	 var url = request.url;
  console.log(url);
  if(url == '/')
  {

		fs.readFile(__dirname + '/index.html','utf8', function (err, data) {
		if (err) console.log(err);
		else{response.writeHead(200, {'Content-Type': 'text/html'});
				response.write(data);
				response.end();}
    });

  }
  else   if(url == '/main.js')
  {
    
		fs.readFile(__dirname + '/main.js','utf8', function (err, data) {
		if (err) console.log(err);
		else{response.writeHead(200, {'Content-Type': 'text/javascript'});
				response.write(data);
				response.end();}
		});

  }
 
  else   if(url == '/style.css')
   {
    		fs.readFile(__dirname + '/style.css','utf8', function (err, data) {
		if (err) console.log(err);
		else{response.writeHead(200, {'Content-Type': 'text/css'});
				response.write(data);
				response.end();}
    });

  }  
  else   if(url == '/github-logo-icon-0.png'){
    
  	fs.readFile(__dirname + '/github-logo-icon-0.png','utf8', function (err, data) {
      if (err) console.log(err);
      else{response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(data);
            response.end();}
    });

  }
  else   if(url == '/jquery.twbsPagination.js'){
    
  	fs.readFile(__dirname + '/jquery.twbsPagination.js','utf8', function (err, data) {
      if (err) console.log(err);
      else{response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(data);
            response.end();}
    });

  }
   
  else if(url == '/data')
  {
    response.setHeader('Content-Type', 'application/json');
 	response.write(JSON.stringify(data));
  	response.end();
  }
  
}).listen(8080);
