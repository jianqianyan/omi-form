import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './omi-form.scss'
import { unit } from './appClass'
import '@omiu/button'

export type Attrs = {
    jsonT: Array<unit>
}



const tagName = 'omi-form'



export type Props = OverwriteProps<Attrs, { jsonT: Array<unit> }>

@tag(tagName)
export default class Counter extends WeElement<Props> {

    static css = css.default ? css.default : css

    static defaultProps = {
        jsonT: []
    }

    static propTypes = {
        jsonT: Array<unit>
    }

    ans: String
    _contName: any
    install(): void {

    }

    renderAction() {
        return this.props.jsonT.map(item => {
            this._contName = 'o-' + item.type;
            return (
                <div>{<this._contName></this._contName>}</div>
            )
        })
    }

    render(props: Props) {
        return (
            // <h.f></h.f> or <></> are supported
            <h.f>
                {this.renderAction()}
            </h.f>
        )
    }
}

