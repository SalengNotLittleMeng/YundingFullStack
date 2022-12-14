function customTag(tagName, fn) {
    Array.from(document.getElementsByTagName(tagName)).forEach(fn);
}

let sliderText = `     <div class="slider" data-time="3000">
            <ul>
                <li class="slider__item--selected">
                    <img src="https://wallpapercave.com/wp/wp6878944.jpg" />
                </li>
                <li class="slider__item">
                    <img src="https://cdn.filestackcontent.com/IEMTnwZrR2SJNoRUw6Tq" />
                </li>
                <li class="slider__item">
                    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.BnD5hsZ4pC9lBGI5tWU-ZwHaEK?pid=ImgDet&rs=1" />
                </li>
                <li class="slider__item">
                    <img src="https://i0.wp.com/wptavern.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-11-at-6.51.54-PM.png?ssl=1" />
                </li>
            </ul>
            <a class="slider__next"></a>
            <a class="slider__previous"></a>
            <div class="slider__control">
                <span class="slider__control-buttons--selected"></span>
                <span class="slider__control-buttons"></span>
                <span class="slider__control-buttons"></span>
                <span class="slider__control-buttons"></span>
            </div>
        </div>`

function greetingHandler(element) {
    element.innerHTML = sliderText
}

customTag('my-element', greetingHandler);
class Slider {
    constructor({ container, cycle = 3000 } = {}) {
        this.container = container;
        this.items = Array.from(container.querySelectorAll('.slider__item, .slider__item--selected'));
        this.cycle = cycle;

        const controller = this.container.querySelector('.slider__control');
        const buttons = controller.querySelectorAll('.slider__control-buttons, .slider__control-buttons--selected');

        controller.addEventListener('mouseover', (evt) => {
            console.log(evt.target)
            const idx = Array.from(buttons).indexOf(evt.target);
            if (idx >= 0) {
                this.slideTo(idx);
                this.stop();
            }
        });

        controller.addEventListener('mouseout', (evt) => {
            this.start();
        });

        /*
          ??????slide????????????????????????????????????????????????selected??????
        */
        this.container.addEventListener('slide', (evt) => {
            const idx = evt.detail.index;
            const selected = controller.querySelector('.slider__control-buttons--selected');
            if (selected) selected.className = 'slider__control-buttons';
            buttons[idx].className = 'slider__control-buttons--selected';
        });

        const previous = this.container.querySelector('.slider__previous');
        previous.addEventListener('click', (evt) => {
            this.stop();
            this.slidePrevious();
            this.start();
            evt.preventDefault();
        });

        const next = this.container.querySelector('.slider__next');
        next.addEventListener('click', (evt) => {
            this.stop();
            this.slideNext();
            this.start();
            evt.preventDefault();
        });
    }
    start() {
        this.stop();
        this._timer = setInterval(() => this.slideNext(), this.cycle);
    }
    stop() {
            clearInterval(this._timer);
        }
        /*
          ???????????????`.slider__item--selected`????????????????????????
        */
    getSelectedItem() {
        const selected = this.container.querySelector('.slider__item--selected');
        return selected;
    }

    /*
      ????????????????????????items?????????????????????
    */
    getSelectedItemIndex() {
        return this.items.indexOf(this.getSelectedItem());
    }

    slideTo(idx) {
        const selected = this.getSelectedItem();
        if (selected) {
            selected.className = 'slider__item';
        }
        const item = this.items[idx];
        if (item) {
            item.className = 'slider__item--selected';
        }

        const detail = { index: idx };
        const event = new CustomEvent('slide', { bubbles: true, detail });
        this.container.dispatchEvent(event);
    }

    /*
      ???????????????????????????????????????
    */
    slideNext() {
        const currentIdx = this.getSelectedItemIndex();
        const nextIdx = (currentIdx + 1) % this.items.length;
        this.slideTo(nextIdx);
    }

    /*
      ???????????????????????????????????????
    */
    slidePrevious() {
        const currentIdx = this.getSelectedItemIndex();
        const previousIdx = (this.items.length + currentIdx - 1) % this.items.length;
        this.slideTo(previousIdx);
    }
}
const container = document.querySelector('.slider');
const slider = new Slider({ container });
slider.start();