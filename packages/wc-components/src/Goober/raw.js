import { compile } from './core/compile';
import {astish} from "./core/astish";
import {parse} from "./core/parse";

/**
 * css entry
 * @param {String|Object|Function} val
 * @param {String} tag
 */
export function raw(val, tag) {
    let ctx = this || {};
    let _val = val.call ? val(ctx.p) : val;

    const compiled = _val.unshift
        ? _val.raw
            ? // Tagged templates
            compile(_val, [].slice.call(arguments, 1), ctx.p)
            : // Regular arrays
            _val.reduce((o, i) => (i ? Object.assign(o, i.call ? i(ctx.p) : i) : o), {})
        : _val;

    // Get a string representation of the object or the value that is called 'compiled'
    // let stringifiedCompiled = typeof compiled == 'object' ? stringify(compiled) : compiled;

    let ast = typeof compiled == 'object' ? compiled : astish(compiled);

    return parse(ast,tag );

}

