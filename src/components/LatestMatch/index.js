// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetail} = props
  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetail

  return (
    <div className="latest-match-card">
      <div className="detail-container">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className=" competing-Team-Logo"
        />
      </div>
      <div className="detail-container">
        <p className="first-inning">First Innings</p>
        <p className="man-of-the-match">{firstInnings}</p>
        <p className="first-inning">Second Innings</p>
        <p className="man-of-the-match">{secondInnings}</p>
        <p className="first-inning">Man Of The Match</p>
        <p className="man-of-the-match">{manOfTheMatch}</p>
        <p className="first-inning">Umpires</p>
        <p className="man-of-the-match">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
