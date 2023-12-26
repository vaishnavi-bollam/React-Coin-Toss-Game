// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {imageEl: 0, headCount: 0, TailCount: 0}

  onClicked = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState(prevState => ({TailCount: prevState.TailCount + 1}))
    }
    this.setState({imageEl: randomNumber})
  }

  render() {
    const {headCount, TailCount, imageEl} = this.state
    const totalCount = headCount + TailCount
    const renderAuth = () => {
      if (imageEl === 0) {
        return (
          <img
            alt="toss result"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          />
        )
      }
      return (
        <img
          alt="toss result"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        />
      )
    }
    return (
      <div className="main-bg">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>

          {renderAuth()}
          <br />
          <button className="button" onClick={this.onClicked}>
            Toss Coin
          </button>
          <div className="para">
            <p className="para-Ele">Total:{totalCount}</p>
            <p className="para-Ele">Heads:{headCount}</p>
            <p className="para-Ele">Tails:{TailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
