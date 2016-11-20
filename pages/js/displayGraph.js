
        $(document).ready(function(){
            $("#displayDay").click(function(){
                jQuery("#graph").attr('src','http://individual.utoronto.ca/woojoyce/img/graph-day.png' );
            });

            $("#displayWeek").click(function(){
                jQuery("#graph").attr('src','http://individual.utoronto.ca/woojoyce/img/graph-week.png' );
            });

            $("#displayHour").click(function(){
                jQuery("#graph").attr('src','http://individual.utoronto.ca/woojoyce/img/graph-hour.png' );
            });
        });