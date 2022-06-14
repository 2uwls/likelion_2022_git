import requests
r=requests.get("http://naver.com")
print(r.json())