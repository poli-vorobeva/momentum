import Control from "../../common/control";

export class SliderIcons extends Control {
    public buttonPrev: Control<HTMLButtonElement>;
    public buttonNext: Control<HTMLButtonElement>;
    changeImage: (direction: string) => void;
    private container: Control<HTMLElement>;
    private sliderIconsWrapper: Control<HTMLElement>;
    private randomNumber: number;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.sliderIconsWrapper = new Control(this.node, 'div', 'slider-icons')
        this.buttonPrev = new Control(this.sliderIconsWrapper.node, 'button',
            'slide-prev slider-icon')
        this.buttonPrev.node.style.backgroundImage='url(./public/assets/svg/slider-prev.svg)'
        this.buttonNext = new Control(this.sliderIconsWrapper.node, 'button', 'slide-next slider-icon')
        this.buttonNext.node.style.backgroundImage='url(./public/assets/svg/slider-next.svg)'

    }
}
