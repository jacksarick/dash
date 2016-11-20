    document.getElementById("myChart3").innerHTML = ""; 

	
	var impressions = [300,200];
	var sum = impressions[0] + impressions[1] ;
	var percentages = [Math.round(((impressions[0]/sum)*100)),Math.round(((impressions[1]/sum)*100))];

	var data = {
	    labels: [
	        "Video",
	        "Banner"
	    ],
	    datasets: [{
	        data: [percentages[0], percentages[1]],
	        backgroundColor: [
	            "#6699CC",
		        "#336699"
		        //"#99CCFF"
		        //"#003366",
		        //"#003399"
	        ],
	        hoverBackgroundColor: [
	            "#FF3333",
	            "#CD0000"
	            //"#FFCE56"
	        ]
	    }]
	};

	var ctx = document.getElementById("myChart3");	
	
	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    
	    options:{
	       
	    }
	});