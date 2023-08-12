import * as Plot from "@observablehq/plot";
import * as topojson from "topojson";

import countries50m from "./countries-50m.json";
import tournaments_json from "./backend/tournaments.json";

import { useEffect, useRef } from "react";

const tournaments = JSON.parse(JSON.stringify(tournaments_json));
const land50m = JSON.parse(JSON.stringify(countries50m));
const land = topojson.feature(land50m, land50m.objects.land);

function getLatAndLong(){
  var lat_long = []
  for (var tourn in tournaments) {
    lat_long.push(tournaments[tourn])
  }
  return lat_long
}

function MyMap() {
  const tourn_lat_long = getLatAndLong();
  const ref = useRef();
  useEffect(() => {
    const playerMap = Plot.plot({
      projection: "equirectangular",
      marks: [
        Plot.graticule(),
        Plot.geo(land, {fill: "grey"}),
        Plot.sphere(),
        Plot.dot(tourn_lat_long, {x: "long", y: "lat", r: 2, fill: "red"})
      ]
    })
    ref.current.append(playerMap);
    return () => playerMap.remove();
  });

  return (
    <div ref={ref}></div>
  );
}

export default function D3Plotting() {
  
    return (
      <div>
        <p></p>
        <MyMap />
      </div>
    )
}