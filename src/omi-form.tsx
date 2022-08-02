import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './omi-form.scss'
import { unit } from './appClass'
import '@omiu/button'
import '@omiu/input'

const TYPE = {
    input: "o-input",
    button: "o-button"
}
export {
    TYPE
}

export type Attrs = {
    options: unit
}
const tagName = 'omi-form'
export type Props = OverwriteProps<Attrs, { options: unit , arr: Array<any> }>

@tag(tagName)
export default class Counter extends WeElement<Props> {

    static css = css.default ? css.default : css

    static defaultProps = {
        options: {},
        arr: []
    }

    static propTypes = {
        options: unit,
        arr: Array<any>
    }

    installed(): void {
        for(let i = 0 ; i < this.props.options.items.length ; ++i){
            for(let aitem in this.props.options.items[i]){
                if(aitem != 'type'){
                    this.props.arr[i].setAttribute(aitem,this.props.options.items[i][aitem]);
                }
            }
        }
    }
    render(props: Props) {
        return (
            // <h.f></h.f> or <></> are supported
            <h.f>
                {props.options.items.map(item => {
                    return (
                        <div><item.type ref={(e: any) => props.arr.push(e)}></item.type></div>
                    )
                })}
            </h.f>
        )
    }
}

