import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  // addBand = event => {
  //   event.preventDefault()

  // }

  renderBands = () => this.props.bands.map( (band, index)  => <li key={index} >{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        BandsContainer
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
//OR const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
