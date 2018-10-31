import json
#输入关键词获取新闻
def getTechNews(field):
    file = 'data/tech_news.json'
    fb = open(file,'r',encoding="utf-8")
    dicts = json.load(fb)
    count=0;
    datas=[]
    for info in dicts:
        corewords=info['corewords']
        context=info['text']
        if field in context or field in corewords:
            datas.append(info)
            count=count+1
    def sortByTime(info):
        return info['time']
    datas.sort(key=sortByTime)
    datas.reverse()
    return datas
