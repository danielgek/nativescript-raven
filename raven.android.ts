import { Common } from './raven.common';
import * as application from 'application';


declare var com: any;

export class RavenNative extends Common {

    static init(dsn: string) {

        try {
            if(application.android){

                application.android.on('activityStarted', (activityEventData)=> {
                    com.getsentry.raven.android.Raven.init(activityEventData.activity.getApplicationContext(), dsn);
                });

                application.on('uncaughtError', args => {
                    
                    if (!args.android) {
                        com.getsentry.raven.android.Raven.capture(JSON.stringify(args));
                    } else {
                        com.getsentry.raven.android.Raven.capture(args.android);
                        let eventBuilder = new com.getsentry.raven.event.EventBuilder()
                              .withMessage(JSON.stringify(args.android))
                              .withLevel(com.getsentry.raven.event.Event.Level.ERROR);
                        com.getsentry.raven.android.Raven.capture(eventBuilder.build());
                    }
                });

            }

        } catch(e){
            console.error('[Android] Exeption on RavenNative init: ', e);
        }
    }
}