function showMonthChart(){
    $.ajax({	
        type : "POST",
        data : {"year" : $("#selBox_year option:selected").val()},            
        url : "/month_chart",
        dataType : "json",
        success : function(result) {
            document.getElementById("month_accident").remove();
            $("#monthGraph-container").html('<canvas id="month_accident" width="400" height="400"></canvas>');
            var ctx1 = document.getElementById("month_accident");
            var data = ""
            data = {
                labels: result.years,
                datasets: [{
                    label: '사고 건수',
                    data: result.values
                }]
            };
            var month_barChart = new Chart(ctx1, {
                type: 'bar',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: '월별 음주운전 교통사고 발생건수',
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