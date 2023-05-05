// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {IplTeam} = props
  const {id, name, teamImageUrl} = IplTeam

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="mach-card-list">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
