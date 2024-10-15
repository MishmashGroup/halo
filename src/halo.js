/*!
 * 
 *    Library Name: halo
 *    Description: Recursive, pure and simple render function.
 *    Author: Nadan Gergeo <nadan@mishma.sh> (www.mishma.sh)
 *    Contributors: Steven Hartgers <steven@mishma.sh> (www.mishma.sh)
 *    License: GPL-3.0-only
 *    Version: 1.0.0
 *
 */

const ROOT_ID = "root";
const ready = fn => (document.readyState != 'loading' && fn()) || document.addEventListener('DOMContentLoaded', fn);
const doHydrate = (id, HTML) => { const el = document.getElementById(id); el.outerHTML = HTML; return el };

const render = ({el, type, children, attr = {}, eventHandlers = {}}, path = [], hydrate = true, allEventHandlers = {}) => {
    const _children = children instanceof Object ? Object.entries(children).reduce((result, [key, value]) => (result + render(value, [...path, key], false, allEventHandlers)), "") : children;
    const id = path.length ? path.join(".") : ROOT_ID;
    const isRoot = id === ROOT_ID;
    Object.keys(eventHandlers) !== 0 && (allEventHandlers[id] = eventHandlers);
    const _attr = Object.keys(attr).reduce((result = "", current) => (result + ` ${current}="${attr[current]}" `), "");
    const HTML = `<${type} id=${id} ${_attr}>${_children}</${type}>`;
    hydrate && (el = doHydrate(id, HTML));

    isRoot && hydrate && Object.entries(allEventHandlers).map(([id, eventNames]) => {
        const el = document.getElementById(id);
        Object.entries(eventNames).map(([eventName, eventHandlers]) => {
            eventHandlers.forEach(eventHandler => {
                el.addEventListener(eventName, eventHandler);
            });
        });
    });

    return HTML;
};

export { ROOT_ID, ready, doHydrate, render };