import * as Plot from "@observablehq/plot";
import * as topojson from "topojson";

import countries50m from "./countries-50m.json";
import tournaments_json from "./backend/tournaments.json";

import { useEffect, useRef } from "react";

const tournaments = JSON.parse(JSON.stringify(tournaments_json));
const land50m = JSON.parse(JSON.stringify(countries50m));
const land = topojson.feature(land50m, land50m.objects.land);

function getLatAndLong(){
  var long = []
  var lat = []
  for (var tourn in tournaments) {
    long.push(tournaments[tourn].long)
    lat.push(tournaments[tourn].lat)
  }
  return [long, lat]
}

function MyMap() {
  const lat_and_long = getLatAndLong();
  const long = lat_and_long[0];
  const lat = lat_and_long[1];
  const ref = useRef();
  useEffect(() => {
    const playerMap = Plot.plot({
      projection: "equirectangular",
      marks: [
        Plot.graticule(),
        Plot.geo(land, {fill: "grey"}),
        Plot.sphere(),
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