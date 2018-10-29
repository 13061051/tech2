# -*- coding: utf-8 -*-

# from django.http import HttpResponse
from django.shortcuts import render

import json

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
    if index_1<10:
        index_1=index_1+5
    if index_1>100:
        while index_1>100:
            index_1=index_1-5
    index_1=(int)(index_1)
    context={'city':"'"+city+"'"}
    context['index']=[91,index_1,82,91,90]
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
    return render(request, 'hot_academic_research.html')
def Index(request):
    return render(request, 'new_home/mainpage.html')