import {Common} from './raven.common';
import * as application from 'application';
import { RavenNativeAppDelegate } from './raven.appdelegate';

declare var SentryClient, SentrySeverity, SentryEvent : any;

export class RavenNative extends Common {

    public static init(dsn: string) {

        try {
            if(application.ios){
                SentryClient.shared = new SentryClient(dsn);
                application.ios.delegate = RavenNativeAppDelegate;
            }

        } catch(error){
            console.error('[RavenNative - iOS] Exeption on init: ', error);
        }
    }
}