# Nativescript Raven
This plugin uses raven-android and raven-cocoa to catch native errors/stack traces

#### this plugin is in alpha
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
 
**NOTE** In android Raven saves exeption on this and send it latter(usualy when app reopens), this needs some ajustments

## API
Init Raven
`Raven.init(dsn: string);`







