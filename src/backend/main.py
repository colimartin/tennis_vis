import atp_scraping as atp
import player_tourn_map as ptm
import world_map as map

import pandas as pd

import os

def main():
    soup = atp.get_soup('https://www.atptour.com/en/rankings/singles')
    players = atp.get_top_players(soup)
    tourn_count_urls = atp.get_tourn_count_urls(soup)

    # To recreate tourn_map JSON
    """
    tourn_map = ptm.get_tourn_map(tourn_count_urls, players)
    ptm.dict_to_json(tourn_map)
    """
 

    # To get dict from existing tourn_map JSON
    tourn_map = ptm.json_to_dict('tourn_map.json')

    db = pd.read_excel('c:/Users/Colin/projects/tennis_vis/src/backend/atp_tournaments.xlsx')
    df = db[['lat', 'long', 'name-code']]

    world_map = map.get_world_map()

    map.plot_player_travel(tourn_map["Daniil Medvedev"], df, world_map)


if __name__=="__main__":

    main()