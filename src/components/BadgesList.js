import React from "react"
import "./styles/BadgesList.css"
class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        { this.props.badges.map(badge => {
          return (
            <li
              className="BadgesList__item"
              key={ badge.id }
            >
              <div className="BadgesList__item-photo">
                <img src={ badge.avatarUrl } alt={`Foto de perfil de ${ badge.firstName }`}/>
              </div>
              <div className="BadgesList__item-information">
                <div className="name">{ badge.firstName } { badge.lastName }</div>
                <div className="twitter">@{ badge.twitter }</div>
                <div className="job-title">{ badge.jobTitle }</div>
              </div>
            </li>
          )
        }) }
      </ul>
    )
  }
}
export default BadgesList