
	var data = {
	    labels: [
	        "North America",
	        "Europe",
	        "Asia"
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

	var ctx = document.getElementById("myChart2");	
	
	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    
	    options:{
	        	
	    }
	});