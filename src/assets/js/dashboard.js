//[Dashboard Javascript]

//Project:	converge - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	$('.countnm').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 5000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});	
	
	//Date range as a button
    $('#daterange-btn').daterangepicker(
      {
        ranges   : {
          'Today'       : [moment(), moment()],
          'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month'  : [moment().startOf('month'), moment().endOf('month')],
          'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate  : moment()
      },
      function (start, end) {
        $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
      }
    );
	
	
	var options = {
        series: [{
            name: "Progress",
            data: [0, 20, 40, 35, 65, 80]
        }],
        chart: {
          height: 240,
          type: 'area',
			toolbar: {
        		show: false,
			},
          zoom: {
            enabled: false
          }
        },
		colors:['#019ff8'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          	show: true,
			curve: 'smooth',
			lineCap: 'butt',
			width: 3,
			dashArray: 0, 
        },
        grid: {
			borderColor: '#e2f3fc', 
          row: {
            colors: ['transparent'], // takes an array which will be repeated on columns
            opacity: 0
          },			
		  yaxis: {
			lines: {
			  show: true,
			},
		  },
        },
		fill: {
			opacity: 0.9,
			type: "gradient",
			gradient: {
			  shadeIntensity: 0.9,
			  opacityFrom: 0.01,
			  opacityTo: 1,
			  stops: [0, 90, 100]
			}
		  },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		  labels: {
			show: true,        
          },
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true
          },
        },
        yaxis: {
          labels: {
            show: true,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
		tooltip: {
			theme: 'dark'
		  },
      };
      var chart = new ApexCharts(document.querySelector("#charts_widget_2_chart"), options);
      chart.render();
	
		
		var colors = [
		  '#9c3134',
		  '#9c3134c1',
		  '#9c3134c3',
		  '#9c3134c5',
		  '#9c3134c9'
		]
	
		 var options = {
          series: [{
			   name: "Performance",
          data: [95, 80, 76, 68, 55]
        }],
          chart: {
          height: 300,
          type: 'bar',
			toolbar: {
        		show: false,
			},
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '35%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
			position: 'top',
      		horizontalAlign: 'left', 
        },
        xaxis: {
          categories: [
            ['Business & Management'],
            ['Education'],
            ['Interdisciplinary Studies'],
            ['Social Sciences'],
            ['Agriculture & Environment Studies '], 
           // ['Architecture & Design '], 
          ],
          labels: {
            show: false,
          }
        },
		yaxis: {
          labels: {
            show: true,
            formatter: function (val) {
              return val + "%";
            }
          }
		}
			 
        };

        var chart = new ApexCharts(document.querySelector("#performance_chart"), options);
        chart.render();
	
		var options = {
          series: [44, 55],
          chart: {
			  
          type: 'donut',
        },
		labels: ["Boys", "Girls"],
        dataLabels: {
          enabled: false
        },
        legend: {
			position: 'bottom',
      		horizontalAlign: 'center', 
        },
		colors: colors,
        responsive: [{
          breakpoint: 1500,
          options: {
            chart: {
              width: 250,
            },
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#pass_chart"), options);
        chart.render();
	
	
		 var options = {
          series: [{
            name: "Usage",
            data: [40, 60, 70, 45, 48, 71, 55, 60, 50, 55, 60, 70]
        }],
          chart: {
          height: 168,
          type: 'line',
			toolbar: {
        		show: false,
			},
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
			width: 3,
        },
		markers: {
			size: 4,
			strokeWidth: 2,
		},
		colors: colors,
        grid: {
			show: false,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
          		show: false,
			},
			axisBorder: {
			  show: false,
			},
			axisTicks: {
			  show: false,
			},
        },
		yaxis: {
          min: 0,
			labels: {
          		show: false,
			}
        },
        };

        var chart = new ApexCharts(document.querySelector("#usage_chart"), options);
        chart.render();
	
		
	
		$('.act-div').slimScroll({
			height: '365px'
		  });
	
	
}); // End of use strict
