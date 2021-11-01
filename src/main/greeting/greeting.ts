import Control from "../../common/control";

export class Greeting extends Control {
    private greetingWrapper: Control<HTMLElement>;
    private greetingText: Control<HTMLElement>;
    private input: Control<HTMLElement>;
    private defaultName: string;

    constructor(parentNode: HTMLElement, dayTime: string) {
        super(parentNode);
        this.greetingWrapper = new Control(this.node, 'div',
            'greeting-container')
        this.greetingText = new Control(this.greetingWrapper.node, 'span',
            'greeting', `Good ${dayTime},`)
        const storageName = localStorage.getItem('userName')
        this.defaultName = storageName + '!' ?? '[ Enter name ]'
        this.input = new Control(this.greetingWrapper.node, 'div', 'greeting-name', this.defaultName)
        if (storageName) {
            this.input.node.style.color = '#fff'
        }
        this.input.node.setAttribute('contenteditable', 'true')
        this.input.node.addEventListener('click', () => {
            this.input.node.textContent = storageName ? storageName + '' : ''
            this.input.node.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault()
                    localStorage.setItem('userName', this.input.node.innerText)
                    this.input.node.blur()
                    this.input.node.style.color = '#fff'
                }
            })

        })
    }
}
