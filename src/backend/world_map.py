import matplotlib.pyplot as plt
import geopandas as gpd
from geodatasets import get_path

def get_world_map():
    # From GeoPandas, our world map data
    path = get_path("naturalearth.land")

    # Creating axes and plotting world map
    #ax = plt.subplots()

    return(gpd.read_file(path))

def plot_player_travel(p_tourns, df, world_map):

    # Plot world map
    world_map.plot(color="lightgrey")

    # Plot tournaments
    x = df.long
    y = df.lat

    plt.scatter(x, y, s=2, alpha=0.6)
    
    # Plot travel for given player
    p_df = df.loc[df['name-code'].isin(p_tourns)]

    plt.plot(p_df.long, p_df.lat,
             color='blue', linestyle='--',
             )
    plt.show()