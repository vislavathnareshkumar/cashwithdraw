import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {totalAmount: 2000}

  updateTotalAmount = amount => {
    this.setState(prevState => ({
      totalAmount: prevState.totalAmount - amount,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {totalAmount} = this.state

    return (
      <div className="main-container">
        <div className="small-conatiner">
          <div className="heading-container">
            <p className="heading">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="money-detail-container">
            <p className="money-heading">Your Balance</p>
            <div>
              <p className="amount-heading">{totalAmount}</p>
              <p className="amount-para">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="sum-heading">CHOOSE SUM (IN RUPEES)</p>

            <ul className="ul-container">
              {denominationsList.map(each => (
                <DenominationItem
                  key={each.id}
                  value={each.value}
                  updateTotalAmount={this.updateTotalAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
