import Control from "../common/control";
import {Time} from "./time/time";
import {Greeting} from "./greeting/greeting";
import {Day} from "./time/day";
import {SliderIcons} from "./slider/slider";
import VoiceNotes from "./voiceNotes/voiceNotes";
import './main.css'
export class Main extends Control  {
    changeImage: (direction: string) => void;
    private sliderIcons: SliderIcons
    private time: Time;
    private day: Day;
    private greeting: Greeting;
    private main: Control<HTMLElement>;
    private randomNumber: number;
    private voiceNotes: VoiceNotes;


    constructor(parentNode: HTMLElement, dayTime: string) {
        super(parentNode);
        this.main = new Control(this.node, 'main', 'main')
        this.sliderIcons = new SliderIcons(this.main.node)

        this.sliderIcons.buttonNext.node.onclick = () => this.changeImage('next')
        this.sliderIcons.buttonPrev.node.onclick = () => this.changeImage('prev')
        this.time = new Time(this.main.node)
        this.day = new Day(this.main.node)
        this.greeting = new Greeting(this.main.node, dayTime)
        // this.sliderIcons.buttonNext.node.dispatchEvent(new Event('click'))
        this.voiceNotes= new VoiceNotes(this.main.node)
    }
}
