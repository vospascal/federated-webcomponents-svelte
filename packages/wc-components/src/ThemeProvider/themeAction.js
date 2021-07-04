function themeAction(node, [styles, current]) {

    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style');
    style.setAttribute("data-theme", current);
    head.appendChild(style);
    style.type = 'text/css';
    let el = document.createTextNode(styles)
    style.appendChild(el);
    return {
        update([val, curr]) {
            const newEl = document.createTextNode(val)
            style.replaceChild(newEl, el)
            style.setAttribute("data-theme", curr);
            el = newEl
        },
        destroy() {
            head.removeElement(style)
        }
    }
}

export default themeAction
