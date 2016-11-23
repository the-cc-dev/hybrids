import { injectable } from '../proxy';

export function dispatchEvent(name, detail, options) {
  const config = Object.assign(
    { bubbles: true, cancelable: false },
    { detail },
    options
  );

  let event;

  if (document.createEvent) {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(name, config.bubbles, config.cancelable, config.detail);
  } else {
    event = new CustomEvent(name, config);
  }

  this.dispatchEvent(event);
}

export default injectable(dispatchEvent);