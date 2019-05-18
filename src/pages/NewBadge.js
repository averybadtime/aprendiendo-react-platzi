import React from "react"
import Badge from "../components/Badge"
import Navbar from "../components/Navbar"
import badgeHeader from "../images/badge-header.svg"
import BadgeForm from "../components/BadgeForm"
import "./styles/NewBadge.css"
class NewBadge extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    }
  }
  handleChange = ev => {
    this.setState({
      form: {
        ...this.state.form,
        [ev.target.name]: ev.target.value
      }
    })
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img src={ badgeHeader } alt="Background" className="img-fluid"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={ this.state.form.firstName }
                lastName={ this.state.form.lastName }
                jobTitle={ this.state.form.jobTitle }
                twitter={ this.state.form.twitter }
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={ this.handleChange } form={ this.state.form }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default NewBadge