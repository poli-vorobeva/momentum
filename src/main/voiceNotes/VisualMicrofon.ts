import Control from "../../common/control";


export default class VizualMicrofon extends Control {
    public canvas: Control<HTMLCanvasElement>;
    private canvasCtx: CanvasRenderingContext2D;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.canvas = new Control(parentNode, 'canvas','microfon-canvas');
        this.canvasCtx = (this.canvas.node as HTMLCanvasElement).getContext("2d");
        this.canvas.node.width = window.innerWidth
        this.canvas.node.height = 200
        let once = false;

        if (!once) {
            once = true
        } else {
            return
        }
        // @ts-ignore
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var analyser = audioCtx.createAnalyser();

        var mDev;
        var mss;


        navigator.mediaDevices.getUserMedia({audio: true}).then(md => {
            mDev = md;
            mss = audioCtx.createMediaStreamSource(mDev);
            mss.connect(analyser)
        });


// ...

        analyser.fftSize = 2048;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);

        analyser.getByteTimeDomainData(dataArray);

// Get a canvas defined with ID "oscilloscope"
        // var canvas = document.getElementById("oscilloscope");
        // var canvasCtx = (this.canvas.node as HTMLCanvasElement).getContext("2d");


// draw an oscilloscope of the current audio source

        const draw = () => {

            requestAnimationFrame(draw);

            analyser.getByteTimeDomainData(dataArray);
            this.canvasCtx.clearRect(0,0,(this.canvas.node as HTMLCanvasElement).width
                ,(this.canvas.node as HTMLCanvasElement).height)
            this.canvasCtx.fillStyle = "rgba(200, 200, 200,0)";
            this.canvasCtx.fillRect(0, 0, this.canvas.node.width, this.canvas.node.height);

            this.canvasCtx.lineWidth = 4;
            this.canvasCtx.strokeStyle = "rgba(255, 255, 255,0.5)";

            this.canvasCtx.beginPath();

            var sliceWidth = this.canvas.node.width * 1.0 / bufferLength;
            var x = 0;

            for (var i = 0; i < bufferLength; i++) {

                var v = dataArray[i] / 128.0;
                var y = v * this.canvas.node.height / 2;

                if (i === 0) {
                    this.canvasCtx.moveTo(x, y);
                } else {
                    this.canvasCtx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            this.canvasCtx.lineTo(this.canvas.node.width, this.canvas.node.height / 2);
            this.canvasCtx.stroke();
        }
        draw();
    }
}
