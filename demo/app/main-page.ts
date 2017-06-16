import * as observable from 'data/observable';
import * as pages from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { RavenNative } from 'nativescript-raven';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

}

export function onTapTry(eventData) {
  try {
    throw 'try catch exeption example'
  } catch(error) { 
    RavenNative.capture(error);
  }
}

export function onTapMain(eventData) {
  throw 'Test Sentry on Main thread'
}