import { Common } from './raven.common';
import * as application from 'application';
import { RavenNativeAppDelegate } from './raven.appdelegate';

declare var SentryClient, SentrySeverity, SentryEvent : any;

export class RavenNative extends Common {

    public static init(dsn: string) {

        try {
            if(application.ios){
                SentryClient.sharedClient = SentryClient.alloc().initWithDsnDidFailWithError(dsn);
                application.ios.delegate = RavenNativeAppDelegate;
            }

        } catch(error){
            console.error('[RavenNative - iOS] Exeption on init: ', error);
        }
    }

    
    public static capture(error: any) {
        try {
            let event = new SentryEvent({ level: SentrySeverity.Error }); //if this fails try SentryEvent.alloc()
            event.message = error;
            
            SentryClient.sharedClient.sendEventWithCompletionHandler(event, function(error) {
                if (error) {
                    console.error('[RavenNative - iOS] Exeption on capture: ', error);
                }
            });

        } catch (error) {
            console.error('[RavenNative - iOS] Exeption on capture: ', error);
        }
    }
}