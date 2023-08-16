import * as Plot from "@observablehq/plot";
import * as topojson from "topojson";

import countries50m from "./countries-50m.json";
import tournaments_json from "./backend/tournaments.json";

import { useEffect, useRef } from "react";

const tournaments = JSON.parse(JSON.stringify(tournaments_json));
const land50m = JSON.parse(JSON.stringify(countries50m));
const land = topojson.feature(land50m, land50m.objects.land);

function getLatAndLong() {
  var lat_long = []
  for (var tourn in tournaments) {
    lat_long.push(tournaments[tourn])
  }
  return lat_long
}

function getPlayerLatAndLong(player_tourns) {
  var p_lat_long = []
  for (var tourn in tournaments) {
    if (player_tourns.includes(tourn)) {
      p_lat_long.push(tournaments[tourn])
    }
  }
  return p_lat_long
}

function MyMap({ player_tourns }) {
  const tourn_lat_long = getLatAndLong();
  const p_lat_long = getPlayerLatAndLong(player_tourns);
  const p_first_tourn = [p_lat_long[0]];
  const p_last_tourn = [p_lat_long[p_lat_long.length - 1]]
  const ref = useRef();
  useEffect(() => {
    const playerMap = Plot.plot({
      projection: "equirectangular",
      marks: [
        Plot.graticule(),
        Plot.geo(land, {fill: "grey"}),
        Plot.sphere(),
        Plot.dot(tourn_lat_long, {x: "long", y: "lat", r: 2, fill: "blue"}),
        Plot.line(p_lat_long, {x: "long", y: "lat", stroke: "black"}),
        Plot.dot(p_first_tourn, {x: "long", y: "lat", r: 2, fill: "lime"}),
        Plot.dot(p_last_tourn, {x: "long", y: "lat", r: 2, fill: "red"})
      ]
    })
    ref.current.append(playerMap);
    return () => playerMap.remove();
  });

  return (
    <div ref={ref}></div>
  );
}

export default function D3Plotting({ player_tourns }) {
  return (
    <div>
      <p></p>
      <MyMap player_tourns={player_tourns}/>
    </div>
  )
}