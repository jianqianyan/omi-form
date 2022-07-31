const isIterable = (obj: any) => obj != null 
  && typeof obj[Symbol.iterator] === 'function';

let iterative = function(fn: any){
    return function(subject: any , ...rest: any[]){
        if(isIterable(subject)){
            const ret = [];
            for(let obj of subject){
                ret.push(fn.apply(this, [obj , ...rest]))
            }
            return ret;
        }
        return fn.apply(this,[subject , ...rest]);
    }
}


let checkUndefined = (target: any , defaultValue: any) => {
    if(typeof target == "undefined")    return defaultValue;
    return target;
};

export {
    checkUndefined
}