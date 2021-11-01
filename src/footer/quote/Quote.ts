import Control from "../../common/control";

export default class Quote extends Control{
    private quoteWrapper: Control<HTMLElement>;
    private quote: Control<HTMLElement>;
    private author: Control<HTMLElement>;
    private quoteNumber: number;
    private fetchQuote: (lang: string) => Promise<any>;
    private rotateIconDegr: number;
    private changeQuote: Control<HTMLButtonElement>
    constructor(parentNode:HTMLElement) {
        super(parentNode);
        this.changeQuote = new Control(parentNode, 'button', 'change-quote')
        this.changeQuote.node.style.backgroundImage='url(./public/assets/svg/reload.svg)'
        this.quoteWrapper = new Control(parentNode, 'div')
        this.quote = new Control(this.quoteWrapper.node, 'div', 'quote')
        this.author = new Control(this.quoteWrapper.node, 'div', 'author')
        this.quoteNumber=Math.floor(Math.random()*4)
        this.fetchQuote=(lang:string)=> {
            return fetch(`./public/quotes${lang}.json`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(data => data.json())
        }
        this.getQuote('Ru')
        this.rotateIconDegr=180
        this.changeQuote.node.addEventListener('click',()=>{
            this.changeQuote.node.style.transform=`rotate(${this.rotateIconDegr}deg)`
            this.quoteNumber=this.quoteNumber+1<4?this.quoteNumber+1:0
            this.getQuote('Ru')
            this.rotateIconDegr+=180
        })
    }
    getQuote(lang: string) {
        this.fetchQuote(lang).then(data=>{
            this.quote.node.textContent=data[this.quoteNumber].text
            this.author.node.textContent=data[this.quoteNumber].author
        })



    }

}
