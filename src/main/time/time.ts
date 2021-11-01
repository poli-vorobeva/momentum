import Control from "../../common/control";
import './time.css'
export class Time extends Control {
    private time: Control<HTMLElement>;
    private date: Date;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.time = new Control(this.node, 'time', 'time')
        this.startTimer()
    }

    startTimer() {
        setInterval(() => {
            this.date = new Date()
            const hour = this.date.getHours()
            const minutes = this.date.getMinutes()
            const seconds = this.date.getSeconds()
            this.time.node.textContent = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        }, 1000)
    }
}
