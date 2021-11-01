import Control from "../common/control";
import {Weather} from "./weather/weather";
import {AudioPlayer} from "./audioPlayer/audioPlayer";
import './header.css'

export class Header extends Control {
    private header: Control<HTMLElement>;
    private player: AudioPlayer;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.header = new Control(this.node, 'header',
            'header')
        this.player = new AudioPlayer(this.header.node)
        this.header = new Weather(this.header.node)
    }
}
