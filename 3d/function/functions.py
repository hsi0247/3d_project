import pandas as pd
import os

# DD = Drunk Driving   
# 함수인자는 문자열로 입력

# 해당연도와 해당지역의 월별 음주운전 사고건수
def DDPerMonthRegion(year, region = '합계'):
    filepath = os.path.abspath('3d/data/월별음주운전사고건수/' + year + '_월별_음주운전_사고건수.csv')
    df = pd.read_csv(filepath, index_col=0)
    return list(df.columns), df.loc[region].values.tolist()

# 해당 지역의 연도별 음주운전 사고건수
def DDperRegion(year = None, region = '합계'):
    filepath = os.path.abspath('3d/data/시도구군별_음주운전_데이터_2005_2019.csv')
    df = pd.read_csv(filepath, index_col=0)
    if year == None:
        return list(df.columns), df.loc[region].values.tolist()
    else:
        return df.loc[region, year]

# 해당 연도의 음주운전 사고건수
# def DDperYear(year):
#     filepath = os.path.abspath('3d/data/월별음주운전사고건수/시도구군별_음주운전_데이터_2005_2019.csv')
#     df = pd.read_csv(filepath, index_col=0)
#     return list(df.columns), df.loc['합계'].values

if __name__ == '__main__':
    print(DDPerMonthRegion('2019'))
    print()
    print(DDPerMonthRegion('2019', region = '강원'))
    print()
    print(DDperRegion())
    print()
    print(DDperRegion(region = '강원'))
    print()
    print(DDperRegion(year = '2019', region = '강원'))