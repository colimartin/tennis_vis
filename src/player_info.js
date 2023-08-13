function EnumTourns({ tourns }) {
    return (
        <p>Played: {tourns}</p>
    )
}

export default function D3Plotting({ player_name, player_tourns }) {
    const num_tourns = player_tourns.length
    return (
      <div>
        <p>{player_name} has competed in {num_tourns} tournaments this year</p>
        <p>He started with {player_tourns[0]}</p>
        <EnumTourns tourns={player_tourns.slice(1, num_tourns-1)}/>
        <p>And most recently played {player_tourns[num_tourns - 1]}</p>
      </div>
    )
  }