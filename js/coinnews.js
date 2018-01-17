  function getCurrentRates()
    {   	
       try
       {
       		var isSuccess="false";
	    	$("#loadingProgressNews").show();    	
	        $.ajax({
	            type: "GET",
	            url: "https://api.coinmarketcap.com/v1/ticker/?limit=100",
	            dataType: "json",
	            success: function (data) {
	            	$("#coinlist ul").empty();
	                var myJsonObject = data;
	                contentType: "application/json";
	                $.each(myJsonObject, function(i, mobj){
	                	var cssPercentGrowth="percentdrop";
	                	var cssPrice="pricedrop";
	                    var cname = mobj.name;                    
	                    var csymbol = mobj.symbol; 
			    		var cprice_usd = mobj.price_usd; 		    		
			    		var c24hrchange=mobj.percent_change_24h + "%";
			    		if(mobj.percent_change_24h >= 0)
			    		{
			    			c24hrchange="+" +c24hrchange
			    			cssPercentGrowth="percentgrowth";
			    			cssPrice="priceincrease";
			    		}
			    		
			            $("#coinlist ul").append('<table width="100%" class="table1">'+ 
	                    		'<tr>' + 
	                    			'<td class="coinsymbol" width="90%">' + csymbol + '</td>' +
	                    			'<td align="right"  width="10%"><image src="icons/menu.png" class="alertIcon"></td>' +			
	                    		 '</tr>'+                    		 
	                    		'<tr>' + 
	                    			'<td class="' + cssPrice + '"  width="50%">' + "$" + cprice_usd.substring(0,7)+ '</td>' + 
	                    			'<td class="' + cssPercentGrowth +'"  width="50%">' +  c24hrchange  + '&nbsp;&nbsp</td>' +
	                    		 '</tr>'+
	                    		 '<tr>' + 
	                    			'<td width="100%" colspan="2" class="seperatorcolor"></td>' +                     			
	                    		 '</tr>'+                    		                    		  
	                    		 '</table>');                      		                     		                
	                    });               
	                    
	                    //Add button
	                    $("#coinlist ul").append('<table width="100%">'+                     		
	                    		 '<tr>' + 
	                    			'<td colspan="2" align="center" margin-top="10px"><image src="icons/add_100px.png"></td>' +			
	                    		 '</tr>'+                    		  
	                    		 '</table>');  
	                    		 
	                   isSuccess="true";            		      
	            },
	            complete:function(){     
	            	if(isSuccess=="true")
	            	{       	
	            		$("#loadingProgressNews").hide();
	            	}   
	            	else
	            	{
	            		$("#loadtext").html("Error Connecting WiFi.");
	            	}         	
	            },
	            error: function (xhr) {	            	
	                //alert(xhr.responseText);
	            }
	        });
	    }
	    catch(e)
	    {
	   		 $("#loadtext").html("Error Connecting WiFi.");
	    }
		  
    }