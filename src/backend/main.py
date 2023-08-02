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
    ptm.dict_to_json(tourn_map, "tourn_map.json")
    """
 

    # To get dict from existing tourn_map JSON
    tourn_map = ptm.json_to_dict('tourn_map.json')

    db = pd.read_excel('c:/Users/Colin/projects/tennis_vis/src/backend/atp_tournaments.xlsx')
    df = db[['lat', 'long', 'name-code']]

    # To create tournaments JSON from atp_tournaments.xlsx data
    """
    db_dict = df_to_dict(df)
    ptm.dict_to_json(db_dict, "tournaments.json")
    """

    world_map = map.get_world_map()

    #map.plot_player_travel(tourn_map["Daniil Medvedev"], df, world_map)

def df_to_dict(df):
    tournaments = {}
    long = df.long
    lat = df.lat
    for i, tourn in enumerate(df['name-code']):
        tournaments[tourn] = {
            "long": long[i],
            "lat": lat[i]
        }
    return tournaments

if __name__=="__main__":

    main()