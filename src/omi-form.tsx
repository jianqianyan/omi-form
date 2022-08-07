import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './omi-form.scss'
import { unit } from './appClass'
import '@omiu/button'
import '@omiu/input'
import "@omiu/checkbox"
import "@omiu/date-picker"

const TYPE = {
    input: "o-input",
    button: "o-button",
    checkbox: "o-checkbox",
    datePicker: "o-date-picker"
}
export {
    TYPE
}

export type Attrs = {
    options: unit
}
const tagName = 'omi-form'
export type Props = OverwriteProps<Attrs, { options: unit, refArr: any }>

@tag(tagName)
export default class Counter extends WeElement<Props> {

    static css = css.default ? css.default : css

    static defaultProps = {
        options: {},
        refArr: {},
    }

    static propTypes = {
        options: unit,
        refArr: {}
    }

    // checkbox处理
    checkboxPro = (item: any) => {
        return (
            <div class="form-box">
                <ul>
                    <div class="title-box">
                        {item.title}
                    </div>
                    {item.options.map((aitem, index) => {
                        // console.log(aitem);
                        const props = {
                            label: item.options[index].label,
                            value: item.options[index].value,
                            field: item.field
                        }
                        return <li><item.type {...props} onchange={this.checkboxValueChange}></item.type></li>
                    })}
                </ul>
            </div>

        )
    }

    // 处理checkbox值变化
    checkboxValueChange = (e: any) => {
        let field = e.path[0].props.field,
            value = this.props.options.value,
            newValue = e.path[0].props.value;
        if (!value[field]) value[field] = [];
        if (value[field].indexOf(newValue) == -1)
            value[field].push(newValue);
        else 
            value[field].splice(value[field].indexOf(newValue) , 1);
    }

    // 通用组件处理
    generalPro = (item: any) => {
        const props = item;
        if (item.type == TYPE.input) props.size = "medium"
        return (
            <div class="form-box">
                <div class="title-box">{item.title}</div>
                <div>
                    <item.type  {...props} onchange={this.valueChange}></item.type>
                </div>
            </div>
        )
    }

     // 处理普通的值变化
     valueChange = (e: any) => {
        let field = e.path[0].props.field;
        this.props.options.value[field] = e.detail;
    }

    // 组件处理
    actionPro = (item: any) => {
        if (item.type == TYPE.checkbox) {
            return this.checkboxPro(item);
        }
        else {
            return this.generalPro(item);
        }
    }

    // click
    createClick = () => {
        this.props.options.onSubmit(this.props.options.value);
    }

    installed(): void {

    }

    render(props: Props) {
        return (
            // <h.f></h.f> or <></> are supported
            <h.f>
                {props.options.items.map(item => {
                    return this.actionPro(item);
                })}
                <div class="form-box">
                    <div class="title-box">

                    </div>
                    <div class="from-button">
                        <o-button type="primary" size="small" onClick={this.createClick}><span>创建</span></o-button>
                        <o-button size="small"><span>重置</span></o-button>
                    </div>
                </div>
            </h.f>
        )
    }
}

