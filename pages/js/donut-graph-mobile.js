
	var data = {
	    labels: [
	        "Mobile",
	        "Desktop",
	        "App"
	    ],
	    datasets: [{
	        data: [300, 200, 150],
	        backgroundColor: [
	            "#6699CC",
		        "#336699",
		        "#99CCFF"
		        //"#003366",
		        //"#003399"
	        ],
	        hoverBackgroundColor: [
	            "#FF6384",
	            "#36A2EB",
	            "#FFCE56"
	        ]
	    }]
	};

	var ctx = document.getElementById("myChart");	
	
	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    
	    options:{	
	       segmentShowStroke : false,
		   animateScale : true
	    }
	});
