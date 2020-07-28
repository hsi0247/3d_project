import pandas as pd
import os

def monthdata(year):
    filepath = os.path.abspath('3d/data/월별음주운전사고건수/' + year + '_월별_음주운전_사고건수.csv')
    df = pd.read_csv(filepath, index_col=0)
    return list(df.columns), df.loc['합계'].values

if __name__ == '__main__':
    monthdata('2019')