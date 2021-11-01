import Control from "../../common/control";
import {VoiceModel} from "./VoiceModel";
import {MediaRecord} from "./MediaRecord";
import VizualMicrofon from "./VisualMicrofon";
import Visualizator from "./Visualizator";
import './voiceNotes.css'

interface IAudioItems {
    indx: string,
    element: Control<HTMLElement>
}

interface IRecData {
    id: number;
    voice: string | ArrayBuffer
}

export default class VoiceNotes extends Control {

    private model: VoiceModel;
    private audiosWrapper: Control<HTMLElement>;
    private mediaRecord: MediaRecord;
    private uploadedIds: number[];
    private audioItemsArr: IAudioItems[];

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.model = new VoiceModel()
        this.mediaRecord = new MediaRecord(this.node)

        this.mediaRecord.onStop = (data) => {
            this.audioStopHandler(data)
        }
        this.uploadedIds = []
        this.audioItemsArr = []
        this.audiosWrapper = new Control(this.node, 'div', 'audioWrapper')
    }
    async audioStopHandler(data: IRecData) {
        const newAudioId = await this.model.create(data)
        this.createAudioElement(newAudioId)
    }
    animateOut(element: Control<HTMLElement>) {
        return new Promise((resolve) => {
            element.node.classList.add('audioItem__hidden')
            element.node.addEventListener('transitionend', () =>{
             //   element.destroy()
            })
            resolve(null)
        })
    }

    createAudioElement(id: string) {
        const audioItem = new Control(this.audiosWrapper.node, 'div', 'audioItem__wrapper audioItem__hidden')
        this.audioItemsArr.push({indx: id, element: audioItem})
        const buttonPlay = new Control(audioItem.node, 'button', 'audioItem__button', 'play')
        const buttonDelete = new Control(audioItem.node, 'button', 'deleteItem__button', 'X')
        buttonDelete.node.setAttribute('data-index', id)
        buttonPlay.node.setAttribute('data-index', id)
        buttonPlay.node.addEventListener('click', async (e) => {
            const ind = +(e.target as HTMLElement).dataset.index
            const audioTrack = await this.model.getFileById(ind)
            new Visualizator(this.node, audioTrack.voice)
            const d = await this.model.list()
        })
        buttonDelete.node.addEventListener('click', async (e) => {
            const ind = +(e.target as HTMLElement).dataset.index
            const deletedTrack = await this.model.delete(ind)
            this.audioItemsArr.splice(this.uploadedIds.indexOf(deletedTrack), 1)
            await this.animateOut(audioItem)
            audioItem.destroy()
        })
        setTimeout(() => {
            audioItem.node.classList.remove('audioItem__hidden')
        }, 500)
    }

    drawAudios(array: string[]) {
        this.audiosWrapper.node.innerHTML = ''
        array.forEach((aud: string) => {
            this.createAudioElement(aud)
        })
    }

}
