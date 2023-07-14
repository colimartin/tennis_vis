# Build Ranking Table
import plotly.graph_objects as go
import atp_scraping as atp

def get_table_info():

    soup = atp.get_soup('https://www.atptour.com/en/rankings/singles')

    nations = atp.get_player_nations(soup)
    players = atp.get_top_players(soup)

    rankings = [(i + 1) for i in range(len(players))]

    return nations, players, rankings

def build_table(nations, players, rankings):
    return(go.Figure(data=[go.Table(
                        columnwidth = [20,80,10],
                        header=dict(values=['Representing', 'Player', 'Ranking']),
                        cells=dict(values=[nations, players, rankings]))
                        ]))

def show_table(fig):
    fig.show()