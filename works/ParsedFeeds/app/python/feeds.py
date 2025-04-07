from bs4 import BeautifulSoup
import requests
import csv
import json 

urls = [
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/charles-m-blow/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/jamelle-bouie/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/david-brooks/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/frank-bruni/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/gail-collins/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ross-douthat/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/maureen-dowd/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/thomas-l-friedman/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/michelle-goldberg/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ezra-klein/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/nicholas-kristof/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/paul-krugman/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/farhad-manjoo/rss.xml',
    'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/bret-stephens/rss.xml'
        ]

# CSV rows
# fields = ['Title', 'Short Description', 'Publication Date', 'URL']
# rows = []

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
        
        # rows.append([title, desc, date, link])
        article_list.append({'title': title, 'description': desc, 'date': date, 'link': link})

list(map(request_articles, urls))


# Write to CSV
# with open('output.csv', 'w') as f:
#     write = csv.writer(f)

#     write.writerow(fields)
#     write.writerows(rows)

# Function to pass the GET response
def export_feeds_JSON():
    return article_list

# print('CSV out!')
# print('JSON out!')
