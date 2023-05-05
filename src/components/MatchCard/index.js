// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardItem} = props
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
  } = matchCardItem

  return (
    <li className="match-card-list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p
        className={
          matchStatus === 'Won' ? 'match-status-won' : 'match-status-lost'
        }
      >
        {matchStatus}
      </p>
    </li>
  )
}
export default MatchCard
