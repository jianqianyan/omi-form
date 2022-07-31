import { checkUndefined } from './utils'

class optionObj {
    constructor(value: String, lable: String, display?: Boolean) {
        this.value = value;
        this.label = lable;
        this.display = checkUndefined(display, false);
    }
    value: String
    label: String
    display: Boolean
}

class propsObj {
    constructor(name: String, value: String) {
        this.name = name;
        this.value = value
    }
    name: String
    value: String
}

class unit {
    constructor(type: String, title?: String, fieId?: String, option?: Array<Object>, props?: Array<Object>) {
        this.type = type;
        this.title = checkUndefined(title, "");
        this.fieId = checkUndefined(fieId, null);
        this.option = checkUndefined(option, []);
        this.props = checkUndefined(props, [])
    }
    // 类别
    type: String
    // lable名称 
    title: String
    // 字段名称 用于input绑定之类的
    fieId: String
    // 值 input之类的的值
    value: String
    // 选项 如checkbox之类
    option: Array<optionObj>
    // 插件
    props: Array<propsObj>
}

export { unit }