// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatch: {},
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData

    const updatedLatestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: updatedLatestMatchDetails,
      recentMatchesList: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {teamBanner, latestMatch, recentMatchesList, isLoading} = this.state
    console.log(teamBanner)
    console.log(latestMatch)
    console.log(recentMatchesList)
    const {matchData} = this.state
    return (
      <div>
        {isLoading ? (
          <div
            data-testid="loader"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: '100vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg-container">
            <div>
              <img src={teamBanner} alt="team banner" className="team-banner" />
            </div>
            <div>
              <h1 className="latest-match-heading">Latest Matches</h1>
              <div className="latest-match-container">
                <LatestMatch latestMatchDetail={latestMatch} />
              </div>
            </div>
            <ul className="recent-matches-list">
              {recentMatchesList.map(eachMatch => (
                <MatchCard matchCardItem={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
