import { css, LeafComponent, registerComponent } from '@leaf-web/core'
import { palette } from '../colors'

class Square extends LeafComponent {
  //static watchedProps = ['value']
  constructor () {
    super()
  }

  render () {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }

  css () {
    return css`
    button {
        width: 100px;
        height: 100px;
    }
    `
  }
}

registerComponent('leaf-square', Square)

export default Square
