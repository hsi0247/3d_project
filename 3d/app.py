from flask import Flask,render_template,request,redirect,url_for,jsonify
import pymysql,os



app=Flask(__name__)

if __name__ == '__main__':
    if __package__ is None:
        import sys
        from os import path
        print(path.dirname( path.dirname( path.abspath(__file__) ) ))
        sys.path.append(path.dirname( path.dirname( path.abspath(__file__) ) ))
        # from function.모듈이름 import 함수이름
    else:
        # from ..function.모듈이름 import 함수이름
        pass

@app.route('/')
def index():
    return render_template('index.html')

if __name__ =='__main__':
    app.run(debug=True,host='localhost',port=8890)