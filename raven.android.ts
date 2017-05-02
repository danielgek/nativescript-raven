import { Common } from './raven.common';
import * as application from 'application';


declare var com: any;

export class RavenNative extends Common {

    public static init(dsn: string) {

        try {
            if(application.android){

                application.android.on(application.launchEvent, (activityEventData)=> {
                    com.getsentry.raven.android.Raven.init(activityEventData.activity.getApplicationContext(), dsn);
                });

                application.on(application.uncaughtErrorEvent, args => {
                    
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
            console.error('[RavenNative - Android] Exeption on init: ', e);
        }
    }
}