/// <reference path="node_modules/tns-platform-declarations/ios/ios.d.ts" />

declare var SentryClient: any;

export class RavenNativeAppDelegate extends UIResponder implements UIApplicationDelegate {

  
    public static ObjCProtocols = [UIApplicationDelegate];

    public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        if (SentryClient.sharedClient) {
            SentryClient.sharedClient.startCrashHandlerWithError();
        }else{
            console.error('[iOS] No SentryClient.shared instance found!');
        }
        return true;
    }

}