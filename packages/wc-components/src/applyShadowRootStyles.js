export default function(node, styleBind) {
    const {rawStyles, root} = styleBind;

    const head = root
    const style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    let el = document.createTextNode(rawStyles)
    style.appendChild(el);
    return {
        update(val) {
            const newEl = document.createTextNode(val)
            style.replaceChild(newEl, el)
            el = newEl
        },
        destroy() {
            head.removeElement(style)
        }
    }
}