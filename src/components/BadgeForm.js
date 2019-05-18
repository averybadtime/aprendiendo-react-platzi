import React from "react"
class BadgeForm extends React.Component {

  handleSubmit = ev => {
    ev.preventDefault()
    console.log("Button was clicked!")
    console.log("Form was submitted!")
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>New attendant</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              onChange={ this.props.onChange }
              type="text"
              name="firstName"
              className="form-control"
              value={ this.props.form.firstName }
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              onChange={ this.props.onChange }
              type="text"
              name="lastName"
              className="form-control"
              value={ this.props.form.lastName }
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-m@il</label>
            <input
              onChange={ this.props.onChange }
              type="email"
              name="email"
              className="form-control"
              value={ this.props.form.email }
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job title</label>
            <input
              onChange={ this.props.onChange }
              type="text"
              name="jobTitle"
              className="form-control"
              value={ this.props.form.jobTitle }
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={ this.props.onChange }
              type="text"
              name="twitter"
              className="form-control"
              value={ this.props.form.twitter }
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}
export default BadgeForm