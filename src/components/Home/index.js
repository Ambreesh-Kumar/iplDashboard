// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamlList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeamsData = teams.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))

    console.log(updatedTeamsData)
    this.setState({teamlList: updatedTeamsData, isLoading: false})
  }

  render() {
    const {teamlList, isLoading} = this.state
    console.log(teamlList)
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
            <div className="dashboard-heading-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-log"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-unordered-list">
              {teamlList.map(eachItem => (
                <TeamCard IplTeam={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
