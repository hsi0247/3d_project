import pandas as pd
import os

def monthdata(year):
    filepath = os.path.abspath('3d/data/월별음주운전사고건수/2005_월별_음주운전_사고건수.csv')
    df = pd.read_csv(filepath, index_col=0)
    return list []


