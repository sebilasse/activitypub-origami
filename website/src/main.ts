import App from './App';
import renderer from '@dojo/framework/widget-core/vdom';
import { w } from './widgets/common/Widget';
import ResizeObserver from 'resize-observer-polyfill';
import '@dojo/shim';

const r = renderer(() => {
  console.log('ækˈtɪvəti pʌb ˈkɑnfərəns :');
  console.log('Find the sourcecode here');
  console.log('https://github.com/sebilasse/activitypub-origami');
  return w(App, {data: (<any>window).apconfData})
});
r.mount();
