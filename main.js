$(document).ready(function()
{
	var data1; 

	$('#pagntn').twbsPagination({
        totalPages: 50,
        visiblePages: 5,
        itemOnPage: 10,

        onPageClick: function (event, page)
         {
		    var name=$("#searchName").val();
		    if(name==null||name=="")
		    	name="yahoo";
		    $.getJSON( "http://127.0.0.1:8080/data", function( data ) 
					{   
						data1=data;
						$(".name").html("");
						$("#search").val("");
						
					    console.log( "JSON Data: " + data.items[0].name);
					    var i=0;var count=0;
						for (i in data.items) 
						{
								
							$('.name').append(`<p id="idLink">&raquo;<a href="`+data.items[i].html_url+`" target="_blank">`+data.items[i].full_name+` </a><br>`+data.items[i].language+`&nbsp; &#124; `+data.items[i].description+`</p>`);
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
				for (i in data1.items) 
				{
					if (data1.items[i].stargazers_count>=rangeVal) 
					{
						$('.name').append(`<p id="idLink">&raquo;<a href="`+data1.items[i].html_url+`" target="_blank">`+data1.items[i].full_name+` </a><br>`+data1.items[i].language+`&nbsp; &#124; `+data1.items[i].description+`</p>`);
		    			count++;
		    		}
		    	}
			    	if(count!=0) 
			    		$("#display").text(count+" out of 10 records"); 
			    	else 
			    		$("#display").text("Sorry! No Records found.");
			    
			});



		    	$('#search').on('input',function(e)
		    	{
				    	
					$(".name").html("");
					var i=0;
					var var2=$("#search").val().toLowerCase();
					for (i in data1.items) 
					{
						var var1=(data1.items[i].language).toLowerCase();
						if ((var1==var2)&&(data1.items[i].stargazers_count>=$("#starR").val()))
						{				
							count++;
							$('.name').append(`<p id="idLink">&raquo;<a href="`+data1.items[i].html_url+`" target="_blank">`+data1.items[i].full_name+` </a><br>`+data1.items[i].language+`&nbsp; &#124; `+data1.items[i].description+`</p>`);
						}			
					}
					if(count!=0) 
						$("#display").text(count+" out of 10 records"); 
					else 
						$("#display").text("Sorry! No Records found.");

				});
				
				$("#search").keypress(function (e) 
				{
					i=0; count=0;
			    	if (e.which == 13) 
			    	{
			    		$(".name").html("");
			    		if(!$("#search").val())
			    		{
			    			for (i in data1.items) 
								{
							
									$('.name').append(`<p id="idLink">&raquo;<a href="`+data1.items[i].html_url+`" target="_blank">`+data1.items[i].full_name+` </a><br>`+data1.items[i].language+`&nbsp; &#124; `+data1.items[i].description+`</p>`);
			    					count++;
			    				}	

			    		}


			    		else
						{
							$(".name").html("");
							var i=0;
							var var2=$("#search").val().toLowerCase();
									for (i in data1.items) 
									{
										var var1=(data1.items[i].language).toLowerCase();
										if ((var1==var2)&&(data1.items[i].stargazers_count>=$("#starR").val()))
										{				
											count++;
											$('.name').append(`<p id="idLink">&raquo;<a href="`+data1.items[i].html_url+`" target="_blank">`+data1.items[i].full_name+` </a><br>`+data1.items[i].language+`&nbsp; &#124; `+data1.items[i].description+`</p>`);
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
					if(name==null||name=="")
		    		name="yahoo";
		    		if (e.which == 13) 
		    		{
		    			$.getJSON( "http://127.0.0.1:8080/data", function( data ) 
						{   
							data1=data;
							var totalPages = Math.ceil(data.total_count/10);
							//
							var defaultOpts = {
											        totalPages: 20
											    };
					            var currentPage = 1;
					             $("#pagntn").twbsPagination('destroy');
					            $("#pagntn").twbsPagination($.extend({}, {
   					              	totalPages: totalPages,
					                 startPage: currentPage,
					            }));
					        //
							$(".name").html("");
							$("#search").val("");
				
						    console.log( "JSON Data: " + data.items[0].name);
						    var i=0;var count=0;
							for (i in data.items) 
							{
									
								$('.name').append(`<p id="idLink">&raquo;<a href="`+data.items[i].html_url+`" target="_blank">`+data.items[i].full_name+` </a><br>`+data.items[i].language+`&nbsp; &#124; `+data.items[i].description+`</p>`);
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


		