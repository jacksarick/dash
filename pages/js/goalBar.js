        document.getElementById("progress").innerHTML = ""; 
        
        var target=0;
        var bar = new ProgressBar.Line('#progress', {
            color: '#336699',
            strokeWidth: 10,
            trailColor: '#99CCFF',
            trailWidth: 10,
            duration: 1500,
            bar: 60,
            text: {style: {
              color: '#999',
              transform: null
            },
            autoStyleContainer: false,
                value: '0'
            },
            step: function (state, bar) {
                bar.setText((bar.value() * 100).toFixed(0) + '%');
                target = bar.value();
                if ((target * 100).toFixed(0) == 70) {
                    bar.stop();
                }
            }
        });

        bar.animate(1, function () {
            bar.animate();
        })