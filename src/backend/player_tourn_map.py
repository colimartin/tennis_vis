# Get Tournament Count Info
# Build Tournament Count HashMap 
import atp_scraping as atp
import json

def get_tourn_map(tourn_count_urls, players):

    tourn_map = {}

    for i, player_url in enumerate(tourn_count_urls):
        scrape_url = 'https://www.atptour.com'
        scrape_url += player_url
        tourn_soup = atp.get_soup(scrape_url)
        
        player_tourns = atp.get_player_tourns(tourn_soup)
        
        tourn_map[players[i]] = player_tourns
    
    return tourn_map

def json_to_dict(file):
    with open(file) as json_file:
        return json.load(json_file)

def dict_to_json(dict):
    json = json.dumps(dict)
    with open("tourn_map.json", "w") as json_file:
        json_file.write(json)

#print(tourn_map["Carlos Alcaraz"])