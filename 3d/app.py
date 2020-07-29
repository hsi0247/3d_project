from flask import Flask,render_template,request,redirect,url_for,jsonify
import pymysql,os

app=Flask(__name__)

if __name__ == '__main__':
    if __package__ is None:
        import sys
        from os import path
        print(path.dirname( path.dirname( path.abspath(__file__) ) ))
        sys.path.append(path.dirname( path.dirname( path.abspath(__file__) ) ))
        from function.functions import DDPerMonthRegion, DDperRegion, DDNRegion
    else:
        from ..function.functions import DDPerMonthRegion, DDperRegion, DDNRegion
        pass

@app.route('/')
def index():
    years, values = DDperRegion()
    # print(type(years))
    # print(values)
    return render_template('index.html',years=years,values=values)

@app.route('/month_chart', methods=['POST'])
def show_month_chart():
    year = request.form.get('year')
    years, values = DDPerMonthRegion(year)
    return jsonify(years=years, values=values)

@app.route('/area_chart', methods=['POST'])
def show_area_chart():
    area = request.form.get('area')
    years, values = DDperRegion(area)
    return jsonify(years=years, values=values)

@app.route('/year_area_chart', methods=['POST'])
def show_year_area_chart():
    year2 = request.form.get('year2')
    areas, values = DDNRegion(year2)
    print(areas)
    return jsonify(areas = areas, values = values, year2=year2)

if __name__ =='__main__':
    app.run(debug=True,host='localhost',port=8890)