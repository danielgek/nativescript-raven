import * as application from 'application';

import { RavenNative } from 'nativescript-raven';
const dns = 'YOUR_DNS';
RavenNative.init(dns);
application.start({ moduleName: "main-page" });


