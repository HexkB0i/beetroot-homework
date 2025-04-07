from bs4 import BeautifulSoup
import requests
import csv
import json 

urls = [
    'https://feeds.arstechnica.com/arstechnica/index'
        ]

# JSON Array
article_list = []


def request_articles(url):
    feed = requests.get(url)
    soup = BeautifulSoup(feed.content, 'xml')
    items = soup.find_all('item')
    
    for item in items:
        title = item.title.text
        desc = item.description.text
        date = item.pubDate.text
        link = item.link.text

        content = item.find('content:encoded').text
        img = item.find('media:content')
        img_url = img.attrs['url']
        
        
        # rows.append([title, desc, date, link])
        article_list.append({'title': title, 'description': desc, 'date': date, 'link': link, 'content': content, 'img': img_url})

list(map(request_articles, urls))

# print(article_list[1])

# Function to pass the GET response
def export_feeds_JSON():
    return article_list


