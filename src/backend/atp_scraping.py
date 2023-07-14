# Get Ranking Info

from bs4 import BeautifulSoup
import requests

def get_soup(url):
    req = requests.get(url)
    content = req.text
    return(BeautifulSoup(content, features="lxml"))

"""
def get_from_soup(soup, tag, class_, ext):
    arr = []
    for x in soup.find_all(tag, class_=class_):
        arr.append(x.ext)
    return arr
"""

def get_top_players(soup):
    players = []
    for player in soup.find_all("td", class_="player-cell border-left-dash-1 border-right-dash-1"):
        players.append(player.a.text.strip())

    return players

def get_player_nations(soup):
    nations = []
    for item in soup.find_all("div", class_="country-item"):
        nations.append(item.img["alt"])
    
    return nations

def get_tourn_count_urls(soup):
    tourn_count_urls = []
    for tourn_count in soup.find_all("td", class_="tourn-cell border-left-dash-1 border-right-dash-1"):
        tourn_count_urls.append(tourn_count.a["href"])

    return tourn_count_urls

def get_player_tourns(soup):
    player_tourns = []
    for tourn in soup.find_all("a", class_="tourney-title"):
        player_tourns.append(tourn.text.strip())
    
    return player_tourns
        