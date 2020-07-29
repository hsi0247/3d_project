function showAreaChart(){
    $.ajax({	
        type : "POST",
        data : {"area" : $("#selBox_area option:selected").val()},            
        url : "/area_chart",
        dataType : "json",
        success : function(result) {
            document.getElementById("area_accident").remove();
            $("#areaGraph-container").html('<canvas id="area_accident" width="400" height="400"></canvas>');
            var ctx2 = document.getElementById("area_accident");
            var data = {
                labels: result.years,
                datasets: [{
                    label: '사고 건수',
                    data: result.values
                }]
            };
            var myChart = new Chart(ctx2, {
                type: 'bar',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: '지역별 음주운전 교통사고 발생건수',
                        position : 'top',
                        fontSize : 25
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display : false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                 beginAtZero: true
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