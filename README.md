# Association of Tennis Professionals (ATP) Player Path Visualization

ReactJS with a Python backend. ObservableJS Plots, BeautifulSoup, GeoPandas.

## About

Uses data from the ATP tour website to compile a JSON file containing the tournaments each ATP top 100 player has participated in this year. Displays that information using ObservableJS Plots and a custom built database of ATP top level tennis tournaments for the React frontend. A Python GeoPandas mapping solution is also available in the source code.

The user is presented with a drop down menu of players. Upon selection a map is displayed with blue dots representing the 67 top level men's tennis tournaments. A green dot shows the first tournament the player participated in this year, a red dot shows their most recent tournament and black lines connect each of their played tournaments in chronological order.
Below the map, the user is told how many total tournaments the player has participated in this year and those tournaments are listed.

ATP Challenger tournaments (the "minor leagues" of tennis) are listed but not mapped. 

GitHub Pages: https://colimartin.github.io/tennis_vis/

![alt text](https://github.com/colimartin/tennis_vis/blob/main/tennis_vis_screen.png?raw=true)

## Generating the Data

### ATP Tournaments Datasheet 
atp_tournaments.xlsx is a custom excel datasheet containing information on the 67 top level tournaments in men's tennis.
The 7 columns are 
- "name-official": the official name listed for the tournament on https://www.atptour.com/en/tournaments,
- "city": the city in which the tournament takes place,
- "country": the three-letter code of the country in which the tournament takes place as determined by the International   Organization for Standardization https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3,
- "lat": the latitude of the city rounded to 4 decimal places, 
- "long": the longitude of the city rounded to 4 decimal places, 
- "level": the number of ATP ranking points given to the winner of the tournament, and thus the level of importance it carries in the ATP season. The 4 tennis majors (Australian Open, French Open, Wimbledon, US Open) are 2000, the year-end finals is 1500, the next level below is 1000, then 500, 250, and 0 for the 'United Cup', a 'FIFA World Cup' style exhibition tournament played at the beginning of the season, and the 'Laver Cup', the 'Ryder Cup' of tennis, both of which award no points.
- "name-code": the shorter name codes that atptour.com uses to refer to tournaments in their site HTML.

### Python Backend
- atp_scraping.py deals with BeautifulSoup webscraping, getting the list of top 100 players, the URLs to access the tournaments they've participated in, and their actual list of tournaments.
- player_tourn_map.py generates a dictionary mapping each top 100 player to a list of their played tournaments. It also handles turning a dictionary into a JSON file saved to the "backend" folder, and turning a JSON file saved in the "backend" folder into a dictionary.
- map.py uses Matplotlib and GeoPandas to plot the ATP tennis tournaments  onto a world map. This visualization is unique to the backend and not used on the GitHub pages site.
- main.py combines these files to accomplish several functions, which the user can pick and choose from.
  - **Create tourn_map.json**: Call player_tourn_map.py to build the tourn_map dictionary, then converting it into a JSON to make it accessible to the React frontend.
  - **Create tournaments.json** from atp_tournaments.xlsx to give the React frontend access to the latitude and longitude coordinates and names of the tournaments.
  - **Map with map.py**: Use atp_tournaments.xlsx to send tournament information to map.py to plot player travel in Python

## React Frontend
