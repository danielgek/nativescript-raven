# Nativescript Raven
This plugin uses **sentry-android** and **sentry-cocoa** to catch native errors/stack traces and send them to a sentry server.


## Getting started

#### Instalation
Add plugin
`tns plugin add nativescript-raven`

Get DSN from sentry dashboard

Init RavenNative on you app.ts

```ts
import { RavenNative } from 'nativescript-raven';
const dsn = 'https://<key>:<secret>@host/<project>';
RavenNative.init(dns);
```
**NOTE:** if you are using **Angular** on top of Nativescript add the init to **main.ts** instead
 
**NOTE 2:** If you have a **native exeption** the plugin will save the log and send it in the **next app startup**, this is how the native plugins are implemented and it is expected behavior

## API
### Init Raven

`Raven.init(dsn: string);`

### Capture exeption

`Raven.capture(error: any);`

Example: 
```
try {
    throw 'try catch exeption example'
} catch(error) { 
    RavenNative.capture(error);
}
```






