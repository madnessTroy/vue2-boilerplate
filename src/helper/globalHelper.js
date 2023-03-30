import { Tooltip } from '~bootstrap'

export const initTooltip = () => {
    return new Tooltip(document.body, {
        selector: '[data-bs-toggle=\'tooltip\']',
        trigger: window.innerWidth > 600 ? 'hover' : 'focus'
        // customClass: 'custom-tooltip'
    })
}
