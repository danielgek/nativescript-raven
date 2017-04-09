# Nativescript Raven
This plugin uses raven-android
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
 
 ## API
Inits Raven
 `Raven.init(dsn: string);`







