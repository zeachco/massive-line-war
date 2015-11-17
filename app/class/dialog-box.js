class DialogBox {
  constructor() {
    this.event_resolve = utils.undefinedFn;
    this.event_reject = utils.undefinedFn;
    this.create();
  }
  create() {
    this.mask = document.createElement('dialog-mask');
    this.container = document.createElement('form');
    this.content = document.createElement('p');
    this.actions = document.createElement('dialog-actions');
    this.container.appendChild(this.content);
    this.container.appendChild(this.actions);
    this.mask.appendChild(this.container);
    document.body.appendChild(this.mask);
    this.container.addEventListener('submit', function(e) {
      e.preventDefault();
      e.stopPropagation();
      let check = this.mask.getElementsByTagName('input')[0];
      let val = check ? check.value : '';
      this.hide();
      this.event_resolve(val);
    }.bind(this));
  }
  on(event, fn) {
    let key = `event_${event}`;
    if (this[key]) {
      this[key] = fn;
    } else {
      window.console.warn(`the event ${key.replace('_', ':')} does not exist`);
    }
  }

  hide() {
    this.mask.style['display'] = 'none';
  }
  show() {
    this.mask.style['display'] = 'block';
  }

  set html(html) {
    this.show();
    this._html = html;
    this.render();
  }
  get html() {
    return this._html;
  }

  render() {
    this.content.innerHTML = this.html;
  }
}

export default DialogBox;
