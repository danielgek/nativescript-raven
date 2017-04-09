import * as application from 'application';

import { RavenNative } from 'nativescript-raven';
const dns = 'http://5b855f60d717446db54f001413d77f36:3d6c916cec8d4215855521eb005d26ed@mysns-ces-qual2-mgmt.westeurope.cloudapp.azure.com:8888/2';
RavenNative.init(dns);
application.start({ moduleName: "main-page" });
