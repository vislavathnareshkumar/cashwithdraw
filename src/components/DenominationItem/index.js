import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  updateValue = () => {
    const {value, updateTotalAmount} = this.props

    updateTotalAmount(value)
  }

  render() {
    const {value} = this.props

    return (
      <li className="denomination-container">
        <button className="button" onClick={this.updateValue}>
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
