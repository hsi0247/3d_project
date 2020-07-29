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
                    data: result.values,
                    
                    backgroundColor:
                        'rgba(255,99,132,0.2)',
                    
                    borderColor:
                        'rgba(255,99,132,1)',
                    borderWidth: 1
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
                    responsive:false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display : false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max : 7500, 
                                stepSize : 1500,
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            switch (result.year2) {
                case '2005' :
                    console.log("2005년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12646"></iframe>');
                    break;
                case '2006' :
                    console.log("2006년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12642"></iframe>');
                    break;
                case '2007' :
                    console.log("2007년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12647"></iframe>');
                    break;
                case '2008' :
                    console.log("2008년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12643"></iframe>');
                    break;
                case '2009' :
                    console.log("2009년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12649"></iframe>');
                    break;
                case '2010' :
                    console.log("2010년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12644"></iframe>');
                    break;
                case '2011' :
                    console.log("2011년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12648"></iframe>');
                    break;
                case '2012' :
                    console.log("2012년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12645"></iframe>');
                    break;
                case '2013' :
                    console.log("2013년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12650"></iframe>');
                    break;
                case '2014' :
                    console.log("2014년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12651"></iframe>');
                    break;
                case '2015' :
                    console.log("2015년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12654"></iframe>');
                    break;
                case '2016' :
                    console.log("2016년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12653"></iframe>');
                    break;
                case '2017' :
                    console.log("2017년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12652"></iframe>');
                    break;
                case '2018' :
                    console.log("2018년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12655"></iframe>');
                    break;
                case '2019' :
                    console.log("2019년 folium자료")
                    document.getElementById("folium_data").remove();
                    $("#folium-container").html('<iframe id="folium_data" style="height: 500px; width: 400px;" src="https://repo.yona.io/files/12656"></iframe>');
                    break;
                default :
                  console.log('조건안맞음');
                  break;
              }
        },
        error : function(e){
            console.log(e);
        }
    });
}