import Control from "./common/control";
import {Footer} from "./footer/Footer";
import {Header} from "./header/header";
import {Main} from "./main/main";

export class App extends Control {
    public getDayTime: () => string;
    private main: Main;
    private header: Header;
    private footer: Footer;
    private currentNumber: number;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.getDayTime = () => {
            const hours = new Date().getHours()
            return hours < 6 ? 'night' : hours < 12 ? 'morning' : hours < 18 ? 'day' : 'evening'
        }
        this.header = new Header(this.node)
        this.main = new Main(this.node, this.getDayTime())
        this.footer = new Footer(this.node)
        this.currentNumber = Math.floor(Math.random() * 20)
        this.main.changeImage = (direction: string) => {
            if (direction === 'next') {
                if (this.currentNumber + 1 > 20) {
                    this.currentNumber = 1
                } else {
                    this.currentNumber += 1
                }
            } else {
                if (this.currentNumber - 1 <= 0) {
                    this.currentNumber = 20
                } else {
                    this.currentNumber -= 1
                }

            }
            let img = new Image();
            img.addEventListener('load', () => parentNode.style.backgroundImage = `url(${img.src})`)
            img.src = `https://raw.githubusercontent.com/poli8512/stage1-tasks/assets/images/${this.getDayTime()}/${this.currentNumber >= 10
                ? this.currentNumber : '0' + this.currentNumber}.jpg`
        }
    }
}
