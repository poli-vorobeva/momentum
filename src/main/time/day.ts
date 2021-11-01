import Control from "../../common/control";

export class Day extends Control {
    private date: Control<HTMLElement>;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.date = new Control(this.node, 'date')
    }
}
