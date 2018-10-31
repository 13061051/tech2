# -*- coding: utf-8 -*-

# from django.http import HttpResponse
from django.shortcuts import render

import json
import TechNews
def getLocation():
    with open("data/location.json", 'r',encoding='utf-8') as load_f:
        load_dict = json.load(load_f)
    location2province={}
    provinces=[]
    province_len=len(load_dict)
    for i in range(province_len):
        province=load_dict[i]
        province_name=province['name']
        province_name = province_name.replace("区", "")
        province_name = province_name.replace("市", "")
        province_name = province_name.replace("省", "")
        provinces.append(province_name)
        cities=province['city']
        for city in cities:
            city_name=city['name']
            city_name=city_name.replace("区","")
            city_name = city_name.replace("市", "")
            city_name = city_name.replace("省", "")
            city_name=city_name.replace("县","")
            location2province[city_name]=province_name
    return location2province,provinces
location2province,provinces=getLocation()

def sortByTime(info):
    return info['time']

import json
import xlrd
def getProvinceZhuanlinum(sheetindex):
    workbook = xlrd.open_workbook('data/data3.xlsx')
    sheet_names= workbook.sheet_names()
    sheet=workbook.sheet_by_index(sheetindex)
    cols=sheet.ncols
    rows=sheet.nrows
    province2num={}
    for i in range(1,rows):
        province=sheet.cell(i,0).value
        nums=sheet.row_values(i)[1:5]
        nums=[int(num) for num in nums]
        province2num[province]=nums
    return province2num

def getProvinceIndex(sheetindex):
    province2num=getProvinceZhuanlinum(sheetindex)
    provincenum=[]
    def sortBySecond(info):
        return info[1]
    for info in province2num:
        num=province2num[info][3]
        provincenum.append([info,num])

    provincenum.sort(key=sortBySecond)
    short_cut = (int)(len(provincenum) / 5);
    province_index = []
    province2index = {}
    #
    for i in range(5):
        if i < 4:
            ps = provincenum[i * short_cut:i * short_cut + short_cut]
            min = ps[0][1]
            max = ps[short_cut - 1][1]
            for p in ps:
                if max-min==0:
                    province = p[0]
                    index = (20 * i) + 5
                    index = int(index)
                    if index < 10:
                        index = index + 5
                    if index > 100:
                        index = 100
                    province2index[province] = index
                else:
                    province = p[0]
                    index = (20 * i) + (((p[1] - min) / (max - min)) * 20)
                    index = int(index)
                    if index < 10:
                        index = index + 5
                    if index > 100:
                        index = 100
                    if index==100:
                        print(ps)
                    province2index[province] = index
                    province_index.append([province, index])
        else:
            ps = provincenum[i * short_cut:len(provincenum)]
            min = ps[0][1]
            max = ps[len(provincenum) - (i*short_cut)-1][1]
            for p in ps:
                if max - min == 0:
                    province = p[0]
                    index = (20 * i) + 5
                    index = int(index)
                    if index < 10:
                        index = index + 5
                    if index > 100:
                        index = 100
                    province2index[province] = index
                else:
                    province = p[0]
                    index = (20 * i) + (20 * ((p[1] - min) / (max - min)))
                    index = int(index)
                    if index < 10:
                        index = index + 5
                    if index > 100:
                        index = 100
                    if index==100:
                        print(ps)
                    province2index[province] = index
                    province_index.append([province, index])
    return province2index
def tech_personnel(request):
    with open("data/news2.json", 'r', encoding='utf-8') as load_f:
        load_dict = json.load(load_f)
    province2num={}
    for province in provinces:
        if province in load_dict:
            province2num[province]=len(load_dict[province])
    city = request.GET.get('city')
    index={"北京":[99,95,86,98,100]}
    index["上海"]=[91,91,82,91,90]
    index["重庆"] = [69, 75, 76, 78, 80]
    index["广东"] = [89, 85, 86, 88, 80]
    data=load_dict[city]
    data.sort(key=sortByTime)
    data.reverse()
    news=data
    index_1=(province2num[city]/province2num['广东'])*100
    province_nums=[]
    for province in provinces:
        province_nums.append([province,province2num[province]])
    def sortBySecond(info):
        return info[1]
    province_nums.sort(key=sortBySecond)
    short_cut=(int)(len(province_nums)/5);
    province_index=[]
    province2index={}

    for i in range(5):
        if i<4:
            ps=province_nums[i*short_cut:i*short_cut+short_cut]
            min=ps[0][1]
            max=ps[short_cut-1][1]
            for p in ps:
                province=p[0]
                index=(20*i)+(((p[1]-min)/(max-min))*20)
                index = int(index)
                if index < 10:
                    index= index+ 5
                if index >100:
                    index=100
                province2index[province]=index
                province_index.append([province,index])
        else:
            ps = province_nums[i * short_cut:len(province_nums)]
            min = ps[0][1]
            max = ps[short_cut - 1][1]
            for p in ps:
                province = p[0]
                index = (20 * i) + (20*((p[1] - min) / (max - min)))
                index=int(index)
                if index < 10:
                    index= index+ 5
                if index >100:
                    index=100
                province2index[province] = index
                province_index.append([province, index])
    # 专利指数
    province2index2 =getProvinceIndex(0)
    #基金指数
    province2index3 = getProvinceIndex(1)
    context={'province':"'"+city+"'"}
    context['index']=[91,province2index[city],82,province2index2[city],province2index3[city]]
    context['provinces']=provinces
    titles=[]
    times=[]
    urls=[]
    for i in range(0,len(news)):
        info=news[i]
        title=info['title']
        time=info['time'][0:10]
        if i>=1 and time==news[i-1]['time'][0:10]:
            continue
        if len(titles)>5:
            break;
        url=info['url']

        titles.append(title)
        urls.append(url)
        times.append(time)

    context['title']=titles
    context['time'] = times
    context['url']=urls
    return render(request, 'techpersonel.html',context)
def report(request):
    return render(request, 'statistical_report.html')
def hot_academic(request):
    word=request.GET.get('field')
    context={}
    context['field']="'"+word+"'"
    news=TechNews.getTechNews(field=word)
    news=news[0:5]
    titles=[info['title'] for info in news]
    times = [info['time'] for info in news]
    urls = [info['url'] for info in news]
    briefs=[]
    for info in news:
        text=info['text']
        if len(text)>100:
            text=text[0:100]+"......"
        briefs.append(text)
    context['titles']=titles
    context['urls']=urls
    context['briefs']=briefs
    context['times']=times
    return render(request, 'hot_academic_research.html',context)
def Index(request):
    return render(request, 'new_home/mainpage.html')