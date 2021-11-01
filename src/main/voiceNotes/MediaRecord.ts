import Control from "../../common/control";
import VizualMicrofon from "./VisualMicrofon";
interface IRecData {
    id: number;
    voice: string | ArrayBuffer
}
function blobToBase64(blob: Blob) {
    return new Promise<string | ArrayBuffer>((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
export class MediaRecord extends Control {
    public onStop: (result: IRecData) => void
    private stopRecord: Control<HTMLInputElement>;
    private startRecord: Control<HTMLElement>;
    private wrapper: Control<HTMLElement>;
    private visualMicro: VizualMicrofon;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.wrapper = new Control(this.node, 'div', 'media-wrapper')
        this.startRecord = new Control(this.wrapper.node, 'button', 'media-start', 'Сделать заметку')
        this.stopRecord = new Control(this.wrapper.node, 'button', 'media-stop', 'Готово')
        this.visualMicro,

            navigator.mediaDevices.getUserMedia({audio: true})
                .then(stream => {
                    const mediaRecorder = new MediaRecorder(stream)
                    let visualMicro:VizualMicrofon
                    let voiceNotes: any[] = []
                    this.startRecord.node.addEventListener('click', () => {
                        console.log('start')
                        voiceNotes = []
                        mediaRecorder.start()
                        console.log(mediaRecorder)
                        visualMicro= new VizualMicrofon(parentNode)
                    })
                    this.stopRecord.node.addEventListener('click', () => {
                        console.log('stop')
                        mediaRecorder.stop()
                        visualMicro.canvas.destroy()
                    })
                    mediaRecorder.addEventListener("dataavailable", (event) => {
                        voiceNotes.push(event.data);
                    });
                    mediaRecorder.addEventListener("stop", async () => {
                        const voiceBlob = new Blob(voiceNotes, {
                            type: 'audio/wav'
                        });
                        const str64 = await blobToBase64(voiceBlob) as string
                        this.onStop({id: +new Date(), voice: str64})
                    })
                })
    }
}
