function showMonthChart(){
    $.ajax({	
        type : "POST",
        data : {"year" : $("#selBox_year option:selected").val()},            
        url : "/month_chart",
        dataType : "json",
        success : function(result) {
            document.getElementById("month_accident").remove();
            $("#monthGraph-container").html('<canvas id="month_accident" style="margin-right: 50px" width="800" height="500"></canvas>');
            var ctx1 = document.getElementById("month_accident");
            var data = ""
            data = {
                labels: result.years,
                datasets: [{
                    label: '사고 건수',
                    data: result.values,
                    fill: false,
                    lineTension: 0,
                    
                    backgroundColor:
                        'rgba(255,99,132,0.2)',
                  
                    borderColor:
                        'rgba(255,99,132,1)',
                    borderWidth: 1
                }]
            };
            var month_barChart = new Chart(ctx1, {
                type: 'line',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: '월별 음주운전 교통사고 발생건수',
                        position : 'top',
                        fontSize : 25
                    },
                    responsive : false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display : false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max : 2000,
                                min : 500,
                                stepSize : 500,
                            }
                        }]
                    }
                }
            });
        },
        error : function(e){
            console.log(e);
        }
    });
}