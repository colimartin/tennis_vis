function EnumTourns({ tourns }) {
  const tournsList = tourns.map((tourn) =>
    <li>{tourn}</li>
  );
  return (
      <p>Played: {tournsList}</p>
  )
}

export default function PlayerInfo({ player_name, player_tourns }) {
    const num_tourns = player_tourns.length
    var flipped_tourns = []
    for (var i = num_tourns - 1; i >= 0; i--){
      flipped_tourns.push(player_tourns[i])
    }
    return (
      <div>
        <p>{player_name} has competed in {num_tourns} tournaments this year</p>
        <p>He started with {flipped_tourns[0]}</p>
        <EnumTourns tourns={flipped_tourns.slice(1, num_tourns-1)}/>
        <p>And most recently played {flipped_tourns[num_tourns - 1]}</p>
        <p>Note: ATP Challenger Tournaments are not currently mapped</p>
      </div>
    )
  }