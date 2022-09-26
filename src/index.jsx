import { css, LeafComponent, registerComponent } from '@leaf-web/core'
import { palette } from './colors.js'
import Counter from './components/Counter.jsx'
import Resources from './components/Resources.jsx'
import './styles/global.css'
import Square from './components/Square.jsx'
import Button from './components/Button.jsx'

class MyApp extends LeafComponent {
  constructor () {
    super()

    this.links = [
      { title: 'Documentation', description: 'Leafjs official documentation.', link: 'https://leafjs.samzhangjy.com' },
      {
        title: 'GitHub',
        description: 'Found a bug? Report an issue to us!',
        link: 'https://github.com/samzhangjy/leafjs'
      }
    ]
    this.state = {
      squars: Array(9).fill(null),
      Isx: true
    }
  }

  calculate_winner (squars) {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i]
      if (squars[a] && squars[a] == squars[b] && squars[a] == squars[c]) {
        return squars[a]
      }
    }
    return null
  }

  handleClick (i) {
    const squ = this.state.squars.slice()
    if (this.state.Isx) {
      if (this.calculate_winner(this.state.squars)) return
      // alert(this.calculate_winner(this.state.squars))

      squ[i] = 'X'
      this.state.Isx = false
    } else {
      if (this.calculate_winner(this.state.squars)) return
      squ[i] = 'O'
      this.state.Isx = true
    }

    // this.setState({ squars: squ });
    this.state.squars = squ
  }

  renderSpuare (i) {
    return <Square value={this.state.squars[i]} onClick={() => this.handleClick(i)}/>
  }

  render () {
    const winner = this.calculate_winner(this.state.squars)
    let status = 'Next player is ' + this.state.Isx ? 'X' : 'O'
    if (winner) {
      status = 'Winner is ' + winner
    } else {
      // console.log(winner);
      status = `Next player is ${this.state.Isx ? 'X' : 'O'}`
      console.log(status)
    }
    console.log(winner)
    return (
      <div>
        {status}
        <br/>
        {this.renderSpuare(0)}
        {this.renderSpuare(1)}
        {this.renderSpuare(2)}
        <br />
        {this.renderSpuare(3)}
        {this.renderSpuare(4)}
        {this.renderSpuare(5)}
        <br />
        {this.renderSpuare(6)}
        {this.renderSpuare(7)}
        {this.renderSpuare(8)}
      </div>
    )
  }
}

registerComponent('my-app', MyApp)
