type IAudioData = any[]

export class VoiceModel {
    //  onUpdateTodoList: Signal<ITaskListData> = new Signal()
    constructor() {
        this._audioNotes = []
    }

    private _audioNotes: IAudioData;

    get audioNotes() {
        return this._audioNotes
    }

    set audioNotes(notesList) {
        this._audioNotes = notesList
        // this.onUpdateTodoList.emit(this.todoList)
    }

    create(props: any)  {
        return fetch(`https://moment-server-notes.herokuapp.com/voice_notes/create?id=${props.id}`,{

            method:"POST",
            headers:{
                //'Access-Control-Allow-Origin': '*',
                //'Access-Control-Allow-Credentials': 'true',
                //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
             //   'Access-Control-Allow-Headers': 'Origin,Methods,Credentials,X-PINGOTHER, Content-Type',
                },
         //   mode: 'no-cors',
            body:props.voice
        })
            .then(response => {
                console.log(response)
                response.json()
            })
            .then((data: any) => {
               // return this.list()
                return props.id
            })
    }

    delete(props: any) {
        return fetch(` https://moment-server-notes.herokuapp.com/voice_notes/delete?id=${props}`)
            .then(response => response.json())
            .then((data: any) => {
               // return this.list()
                return props
            })
    }

    list() {
        return fetch('https://moment-server-notes.herokuapp.com/voice_notes/list',{
            method:"POST",
            headers:{
                //'Access-Control-Allow-Origin': '*',
                //'Access-Control-Allow-Credentials': 'true',
                //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                //'Access-Control-Allow-Headers': 'Origin,X-PINGOTHER, Content-Type',
                },
           // mode: 'no-cors',
        })
            .then(response => response.json())
            .then((data: any) => {
                this._audioNotes = data
                return data
            })
    }

    getFileById(id:number){

        return fetch(` https://moment-server-notes.herokuapp.com/voice_notes/item?id=${id}`)
            .then(response => response.json())
            .then((data: any) => {
                //this._audioNotes = data
                return data
            })
    }
}
