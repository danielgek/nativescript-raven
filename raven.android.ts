import { Common } from './raven.common';
import * as application from 'application';
import * as utils from 'utils/utils';


declare var com: any, io: any;

export class RavenNative extends Common {

    public static init(dsn: string) {

        try {
            if(application.android) {

                application.android.on('activityStarted', (activityEventData)=> {
                    io.sentry.Sentry.init(dsn, new io.sentry.android.AndroidSentryClientFactory(utils.ad.getApplicationContext()));
                });

                application.on(application.uncaughtErrorEvent, args => {
                    
                    if (!args.android) {
                        io.sentry.Sentry.capture(JSON.stringify(args));
                    } else {
                        let event = new io.sentry.event.EventBuilder()
                              .withMessage(JSON.stringify(args.android.stackTrace))
                              .withLevel(io.sentry.event.Event.Level.FATAL);

                        io.sentry.Sentry.capture(event.build());
                    }
                });

            }

        } catch(e){
            console.error('[RavenNative - Android] Exeption on init: ', e);
        }
    }

    /**
     * capture
     */
    public static capture(error: any) {
        try {
            let event = new io.sentry.event.EventBuilder()
                .withMessage(JSON.stringify(error))
                .withLevel(io.sentry.event.Event.Level.ERROR);

            io.sentry.Sentry.capture(event.build());
        } catch (error) {
            console.error('[RavenNative - Android] Exeption on capture: ', error);
        }
    }
}