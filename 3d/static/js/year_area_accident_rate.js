function showYearAreaChart(){
    $.ajax({	
        type : "POST",
        data : {"year2" : $("#selBox_year2 option:selected").val()},            
        url : "/year_area_chart",
        dataType : "json",
        success : function(result) {
            document.getElementById("year_area_accident").remove();
            $("#yearAreaGraph-container").html('<canvas id="year_area_accident" width="400" height="400"></canvas>');
            var ctx11 = document.getElementById("year_area_accident");
            var data = {
                labels: result.areas,
                datasets: [{
                    label: '사고 건수',
                    data: result.values
                }]
            };
            var month_barChart = new Chart(ctx11, {
                type: 'bar',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: '년도별 지역 음주운전 교통사고 발생건수',
                        position : 'top',
                        fontSize : 25
                    },
                    scales: {
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