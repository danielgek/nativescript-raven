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

    
    public static capture(error: any) {
        try {
            // let event = Event.build("TEST 1 2 3") {
            //     $0.level = .Debug
            //     $0.tags = ["context": "production"]
            //     $0.extra = [
            //         "my_key": 1,
            //         "some_other_value": "foo bar"
            //     ]
            // }

            let event = new SentryEvent({
                level: SentrySeverity.Error,
                tags: NSDictionary.dictionaryWithDictionary(<any>{
                    'context': 'production'
                }),
                extra: NSDictionary.dictionaryWithDictionary(<any>{
                    'my_key': 1,
                    'some_other_value': 'foo bar'
                }),
                message: JSON.stringify(error),
                timestamp: null,  
                logger: null,
                culprit: null, 
                serverName: null, 
                release: null, 
                buildNumber: null,
                modules: null,
                fingerprint: null, 
                user: null, 
                exceptions: null,
                stacktrace: null,
            });

            SentryClient.shared().captureEvent(event)

        } catch (error) {
            console.error('[RavenNative - iOS] Exeption on capture: ', error);
        }
    }
}