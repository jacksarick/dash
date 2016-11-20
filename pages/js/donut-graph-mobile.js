

var impressions = [300,200,150];
	var sum = impressions[0] + impressions[1] + impressions[2];
	var percentages = [Math.round(((impressions[0]/sum)*100)),Math.round(((impressions[1]/sum)*100)),Math.round(((impressions[2]/sum)*100))];

	var data = {
	    labels: [
	        "Mobile",
	        "Desktop",
	        "App"
	    ],
	    datasets: [{
	        data: [percentages[0], percentages[1], percentages[2]],
	        backgroundColor: [
	            "#6699CC",
		        "#336699",
		        "#99CCFF"
		        //"#003366",
		        //"#003399"
	        ],
	        hoverBackgroundColor: [
	            "#FF3333",
	            "#CD0000",
	      		"#FF6666"
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
