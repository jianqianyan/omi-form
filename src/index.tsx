import { WeElement, render, h, tag } from 'omi'

import './o-counter'
import './omi-form'
import './index.css'
import * as css from './index.less'
import logo from './logo.svg'

interface MyAppProps {
  name: string
}


@tag('my-app')
export default class extends WeElement<MyAppProps> {

  static css = css.default

  abc: string

  onCountChanged = (evt: CustomEvent) => {
    console.log(evt.detail)
  }

  render(props) {
    return (
      <div class="app">
        <o-counter onCountChanged={this.onCountChanged}></o-counter>
        <omi-form jsonT="[{type: 'button'}]"></omi-form>
      </div>
    )
  }
}

render(<my-app></my-app>, '#root', {
  // if using OMI to build the whole application, ignore the attributs of DOM and use props of virtual dom
  ignoreAttrs: true
})
