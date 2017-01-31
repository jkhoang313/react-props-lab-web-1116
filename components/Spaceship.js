const React = require('react')

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(", ")}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ["black", "red"]
}

module.exports = Spaceship
