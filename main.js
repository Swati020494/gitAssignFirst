$(document).ready(function()
{
	var data1; 

	$('#pagntn').twbsPagination({
        totalPages: 20,
        visiblePages: 5,

        onPageClick: function (event, page)
         {
		    var name=$("#searchName").val();
		    	//name="yahoo";

		    $.getJSON("http://localhost:8080/data?name="+name+"&page="+page, function(data) 
					{   
						data1=data;
						//console.log("data:"+data1)
						$(".name").html("");
						$("#search").val("");
						
					   // //console.log( "JSON Data: " + data.items[0].name);
					    var i=0;var count=0;
						for (i in data) 
						{
								
							$('.name').append(`<p id="idLink">&raquo;<a href="`+data[i].html_url+`" target="_blank">`+data[i].full_name+` </a><br>`+data[i].language+`&nbsp; &#124; `+data[i].description+`</p>`);
				    		count++;
				    	}
				    	if(count!=0) 
				    		$("#display").text(count+" out of 10 records"); 
				    	else 
				    		$("#display").text("Sorry! No Records found.");

				    }); 
			$("[type=range]").change(function()
			{
			 	i=0;var count=0;
			 	var rangeVal=$("#starR").val();

			 	$("#lr1").text(rangeVal);
				$(".name").html("");
				for (i in data1) 
				{
					if (data1[i].stargazers_count<=rangeVal) 
					{
						$('.name').append(`<p id="idLink">&raquo;<a href="`+data1[i].html_url+`" target="_blank">`+data1[i].full_name+` </a><br>`+data1[i].language+`&nbsp; &#124; `+data1[i].description+`</p>`);
		 		count++;
		    		}
		    	}
			    	if(count!=0) 
			    		$("#display").text(count+" out of 10 records"); 
			    	else 
			    		$("#display").text("Sorry! No Records found.");
			    
			});



		  //   	$('#search').on('input',function(e)
		  //   	{
								    	
				// $(".name").html(""); 
				// var i=0;
				// var var2=$("#search").val().toLowerCase(); 
				// for (i in data1)  
				// 	{     
				// 		var var1=(data1[i].language).toLowerCase();     
				// 		if ((var1==var2)&&(data1[i].stargazers_count>=$("#starR").val()))
				// 			{    count++;
				// 			$('.name').append(`<p id="idLink">&raquo;<a href="`+data1[i].html_url+`"target="_blank">`+data1[i].full_name+`</a><br>`+data1[i].language+`&nbsp; &#124;`+data1[i].description+`</p>`);    
				// 			 }
				// 			} 
				// 			if(count!=0)
				// 			$("#display").text(count+" out of 10 records");  
				// 			else
				// 			$("#display").text("Sorry! No Records found.");

				// 							});
				//search by language
				$("#search").keypress(function (e) 
				{
					i=0; count=0;
			    	if (e.which == 13) 
			    	{
			    		$(".name").html("");
			    		if(!$("#search").val())
			    		{ 
			    			//console.log("data1 "+data1);
			    			for (i in data1) 
								{
							
									$('.name').append(`<p id="idLink">&raquo;<a href="`+data1[i].html_url+`" target="_blank">`+data1[i].full_name+` </a><br>`+data1[i].language+`&nbsp; &#124; `+data1[i].description+`</p>`);
			    			
			    				}	
			    					count++;
			    		}

			    		else
						{
							$(".name").html("");

							var var2=$("#search").val().toLowerCase();
							
							for (i in data1) 
							{
								var var1=(data1[i].language).toLowerCase();
								
								//if ((var1==var2)&&(data1[i].stargazers_count>=$("#starR").val()))
								//console.log(var1+" "+var2);
								if (var1==var2)
								{				
									count++;
									//console.log("matchi8ng");
									$('.name').append(`<p id="idLink">&raquo;<a href="`+data1[i].html_url+`" target="_blank">`+data1[i].full_name+` </a><br>`+data1[i].language+`&nbsp; &#124; `+data1[i].description+`</p>`);
								}			
							}
					   	 }
					}

					if(count!=0) 
						$("#display").text(count+" out of 10 records"); 
					else 
						$("#display").text("Sorry! No Records found.");
				});

				$("#searchName").keypress(function (e) 
				{
					var name=$("#searchName").val();

					// if(name==null||name=="")
		   			//  name="yahoo";
		    		if (e.which == 13) 
		    		{
		    			$.getJSON("http://localhost:8080/data?name="+name+"&page=1", function( data ) 
						{   
							
							// var totalPages = Math.ceil(data.total_count/10);
							// var defaultOpts = 
							//	{
							// 		totalPages:20
							// 		};
						  	// var currentPage = 1;
						  	// $("#pagntn").twbsPagination('destroy');
						  	// $("#pagntn").twbsPagination($.extend({}, 
						  	//	{
	   						// 		totalPages: totalPages,
						  	//  	startPage: currentPage,
						  	//      }));
						  	//console.log("name:"+name);
						  	data1 = data ;
							$(".name").html("");
							//$("#search").val("");
							//console.log("DATA:"+data1);
						    //console.log( "JSON Data: " + data[0].name);
						    var i=0;var count=0;
							for (i in data) 
							{
								$('.name').append(`<p id="idLink">&raquo;<a href="`+data[i].html_url+`" target="_blank">`+data[i].full_name+` </a><br>`+data[i].language+`&nbsp; &#124; `+data[i].description+`</p>`);
					    		count++;
					    	}
					    	if(count!=0) 
					    		$("#display").text(count+" out of 10 records"); 
					    	else 
					    		$("#display").text("Sorry! No Records found.");
	
					    }); 
		    		}

		    		else 
					    $("#display").text("Sorry! No Records found.");
				});

		}

	});});


		