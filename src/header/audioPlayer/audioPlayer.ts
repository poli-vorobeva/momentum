import Control from "../../common/control";
import './audioPlayer.css'
import Visualizator from "../../main/voiceNotes/Visualizator";

export class AudioPlayer extends Control {
    private player: Control<HTMLElement>;
    private playerControls: Control<HTMLElement>;
    private buttonPrev: Control<HTMLButtonElement>;
    private buttonPlay: Control<HTMLButtonElement>;
    private nextButton: Control<HTMLButtonElement>;
    private trackList: Control<HTMLUListElement>;
    private audioList: string[];
    private fetchAudio: (name: string) => Promise<any>;
    private audio: HTMLAudioElement;
    private children: any[];
    private isPlaing: boolean;
    private audioUrl: string;
    private input: Control<HTMLInputElement>;
    private visual: Visualizator | null;
    private parentNode: HTMLElement;
    private inputWrapper: Control<HTMLElement>;
    private inputContent: Control<HTMLElement>;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.parentNode = parentNode
        this.player = new Control(this.node, 'div', 'player')
        this.playerControls = new Control(this.player.node, 'div', 'player-controls')
        this.buttonPrev = new Control(this.playerControls.node, 'button', 'play-prev player-icon')
        this.buttonPrev.node.style.backgroundImage = 'url(./public/assets/svg/play-prev.svg)'
        this.buttonPlay = new Control(this.playerControls.node, 'button', 'play player-icon')
        this.buttonPlay.node.style.backgroundImage = 'url(./public/assets/svg/play.svg)'
        this.inputWrapper=new Control(this.node,'div','input-file-wrapper')
        this.inputContent=new Control(this.inputWrapper.node,'span','','Играть свою...')
        this.input = new Control(this.inputWrapper.node, 'input','input-file')
        this.input.node.setAttribute('type', 'file')
        this.input.node.setAttribute('accept', 'audio/*')
        this.isPlaing = false
        this.audioUrl = ''
        this.input.node.addEventListener('change', (e) => {
            const files = (e.target as HTMLInputElement).files
            const src = URL.createObjectURL(files[0])
            this.audioUrl = src
            this.visualAudio()
        })
        this.visual = null

        this.buttonPlay.node.addEventListener('click', () => {
            this.visualAudio()
        })
        this.nextButton = new Control(this.playerControls.node, 'button', 'play-next player-icon')
        this.nextButton.node.style.backgroundImage = 'url(./public/assets/svg/play-next.svg)'
        this.trackList = new Control(this.player.node, 'ul', 'play-list')
        // this.audio=new Audio()
        this.audioList = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind']
        this.children = []
        this.audioList.forEach(e => {
            const item = new Control(this.trackList.node, 'li', 'track-audio', e)
            this.children.push(item.node)
            item.node.addEventListener('click', (i) => {
                this.children.forEach(e => e.classList.contains('active-track') && e.classList.remove('active-track'))
                item.node.classList.add('active-track')
                this.fetchAudio(e).then((data) => {
                    this.audioUrl = data
                })
            })
        })
        this.fetchAudio = (name: string) => {
            return fetch(`./public/assets/sounds/${name}.mp3`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(data => {
                return data.url
            })
        }
    }

    visualAudio() {
        this.isPlaing = !this.isPlaing
        if (this.isPlaing) {
            this.visual = new Visualizator(this.parentNode, this.audioUrl)
            this.visual.node.style.transition='all ease 500ms'
        } else {
            console.log(this.parentNode)
            this.visual.node.style.opacity = '0'
           setTimeout(()=>{
               this.visual && this.parentNode.removeChild(this.visual.node)

           },500)

        }

    }
}
