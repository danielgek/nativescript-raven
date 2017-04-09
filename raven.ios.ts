import {Common} from './raven.common';
import * as application from 'application';
import { RavenNativeAppDelegate } from './raven.appdelegate';

declare var SentryClient: any;

export class RavenNative extends Common {

    static init(dsn: string) {

        try {
            if(application.ios){
                SentryClient.shared = new SentryClient(dsn);
                application.ios.delegate = RavenNativeAppDelegate;
            }

        } catch(e){
            console.error('[iOS] Exeption on RavenNative init: ', e);
        }
    }
}