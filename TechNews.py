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
#从文本中获取词云
def getWordCloud(field):
    data=[
        {
            'name': '人工智能',
            'value': 10000,
        },
        {
            'name': '大数据',
            'value': 7000,
        },
        {
            'name': '智能穿戴',
            'value': 8000,
        },
        {
            'name': '物联网',
            'value': 6000,
        },
        {
            'name': '信息安全',
            'value': 11000,
        },
        {
            'name': '模式识别',
            'value': 9000,
        },
        {
            'name': '设计',
            'value': 6000,
        },
        {
            'name': '机械运输',
            'value': 4000,
        },
        {
            'name': '基因测序',
            'value': 7000,
        },
        {
            'name': '肿瘤',
            'value': 7000,
        },
        {
            'name': '分布式计算',
            'value': 8000,
        }
        ]
    return data
def getIndex(field):
    #从领域计算三个指数
    index=[50,50,50]
    if field=="人工智能":
        index=[80,80,90]
    elif field=="数据挖掘":
        index=[78,78,89]
    elif index=='无人驾驶':
        index=[89,78,88]
    else:
        index=[50,50,50]
    return index
def getScholars(field):
    #从领域获取专家
    names = ['周志华', '孙剑', '姜远', '詹德川', '叶翰嘉']
    links = ['CN-BP75S7TJ', 'CN-BA743W3J', 'CN-BN75FVXJ', 'CN-BV74A6TJ', 'CN-BD84LR9J']
    if field=="人工智能":
        names= ['周志华', '孙剑', '姜远', '詹德川', '叶翰嘉']
        links = ['CN-BP75S7TJ', 'CN-BA743W3J', 'CN-BN75FVXJ', 'CN-BV74A6TJ', 'CN-BD84LR9J']
    elif field=="数据挖掘":
        names = ['马少平', '张敏', '刘奕群', '茹立云', 'CN-BW73ZHLJ']
        links = ['CN-B574A18J', 'CN-BJ73VXDJ', 'CN-BI73XDFJ', 'CN-B875E9HJ', 'CN-BW73ZHLJ']
    return names,links