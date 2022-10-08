#網路連線
import urllib.request as request
import json
import csv

src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
with request.urlopen(src) as response:
    data = json.load(response) #利用 json 模組處理 json 資料格式

#解讀資料欄位
# import re
list = data["result"]["results"]
# web = list[0]["file"]
# file_split = str(re.split(".jpg", web, flags=re.IGNORECASE))
# with open("data.csv", "w", encoding="utf-8") as file:
#     for i in list:
#         total_list = []
#         total_list.append(i["stitle"])
#         total_list.append(i["address"][5]+i["address"][6]+i["address"][7])
#         total_list.append(i["longitude"])
#         total_list.append(i["latitude"])
#         total_list.append('https' + i['file'].split('https')[1])


for final in list:
    if final["xpostDate"][3] == "5" or final["xpostDate"][3] == "6":
        with open("data.csv", "w", encoding="utf-8") as file:

            w = csv.writer(open("data.csv", "w", encoding="utf-8"))

            title = ['景點名稱','區域','經度','緯度','第一張圖檔網址']
            w.writerow(title)

            for i in list:
                total_list = []
                total_list.append(i["stitle"])
                total_list.append(i["address"][5]+i["address"][6]+i["address"][7])
                total_list.append(i["longitude"])
                total_list.append(i["latitude"])
                total_list.append('https' + i['file'].split('https')[1])

                w.writerow(total_list)
    

#web = list[0]["file"]
#print(web)

#file = re.split(".jpg", web, flags=re.IGNORECASE)
#print(file[0])

#file_final = file[0] + ".jpg"
#print(file_final)
#print(list)



