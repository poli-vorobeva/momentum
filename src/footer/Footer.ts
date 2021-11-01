import Control from "../common/control";
import Quote from "./quote/Quote";

export class Footer extends Control {
    private footer: Control<HTMLElement>;
    private quote: Control<HTMLElement>;
    private author: Control<HTMLElement>;
    private quoteNumber: number;
    private fetchQuote: (lang: string) => Promise<any>;
    private rotateIconDegr: number;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.footer = new Control(this.node, 'footer', 'footer')
        this.quote= new Quote(this.footer.node)
    }
}
