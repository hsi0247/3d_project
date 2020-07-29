from flask import Flask,render_template,request,redirect,url_for,jsonify
import pymysql,os

app=Flask(__name__)

if __name__ == '__main__':
    if __package__ is None:
        import sys
        from os import path
        print(path.dirname( path.dirname( path.abspath(__file__) ) ))
        sys.path.append(path.dirname( path.dirname( path.abspath(__file__) ) ))
        from function.functions import DDPerMonthRegion
    else:
        from ..function.functions import DDPerMonthRegion

@app.route('/')
def index():
    years, values = DDPerMonthRegion('2019')
    return jsonify(years = years, values = values)

if __name__ =='__main__':
    app.run(debug=True,host='localhost',port=8890)