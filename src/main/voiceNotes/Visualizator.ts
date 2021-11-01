import Control from "../../common/control";
import './visualizator.css'

export default class Visualizator extends Control {
    public canvas: Control<HTMLCanvasElement>;
    private wrapper: Control<HTMLElement>;
    private audio: Control<HTMLAudioElement>;
    private audioCtx: AudioContext;
    private audioSource: MediaElementAudioSourceNode;
    private analyzer: AnalyserNode;
    private ctx: CanvasRenderingContext2D;
    private parentNode: HTMLElement;

    constructor(parentNode: HTMLElement, src?: string) {
        super(parentNode);
        this.parentNode=parentNode
        this.audio = new Control(this.node,'audio')
        this.audio.node.src=src
        this.audioCtx = new AudioContext();
        this.wrapper = new Control(this.node, 'div', 'visualizator__wrapper')
        this.canvas = new Control(this.wrapper.node, 'canvas', 'visualizator-canvas')

        this.ctx = (this.canvas.node as HTMLCanvasElement).getContext('2d'),
            (this.canvas.node as HTMLCanvasElement).width = window.innerWidth/2,
            (this.canvas.node as HTMLCanvasElement).height = window.innerHeight/1.5
        this.audioSource = this.audioCtx.createMediaElementSource(this.audio.node)
        this.analyzer = this.audioCtx.createAnalyser()
        this.audio.node.play()
this.node.style.transition='all ease 500ms'
        this.audio.node.addEventListener('ended',()=>{
            setTimeout(()=>this.destroy(),1000)
        })
        this.audioSource.connect(this.analyzer)
        this.analyzer.connect(this.audioCtx.destination)
        this.analyzer.fftSize = 256*2

        const bufferLength = this.analyzer.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        const barWidth=10
        let barHeight
        let x:number
        const animate=()=>{
            x=0
            this.ctx.clearRect(0,0,(this.canvas.node as HTMLCanvasElement).width
                ,(this.canvas.node as HTMLCanvasElement).height)
            this.analyzer.getByteFrequencyData(dataArray)
            this.drawVisualizer(bufferLength,dataArray,barWidth,x)

            requestAnimationFrame(animate)
        }
        animate()
    }
    drawVisualizer(bufferLen:number,array:Uint8Array,
                   bWidth:number,x:number){
        for(let i=0;i<=bufferLen;i++){
            const barHeight=array[i]*0.9
            this.ctx.save()
            this.ctx.translate(
                (this.canvas.node as HTMLCanvasElement).width/2,
                (this.canvas.node as HTMLCanvasElement).height/2.7)
            this.ctx.rotate(i*Math.PI*6/bufferLen)
            const hue=i*0.3
            //hsl(285, 100%, 60%)
            this.ctx.fillStyle=`hsl(${hue},100%,${barHeight/3}%)`
            this.ctx.fillRect(0,0,bWidth,barHeight)
            x=x+bWidth
            this.ctx.restore()
        }
    }
    destroy(): void {
        this.audio.node.pause()

        this.parentNode.removeChild(this.node)
    }
}
