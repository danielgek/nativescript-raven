import { Common } from './raven.common';
export declare class RavenNative extends Common {
    static init(dns: string);
    static capture(error: any);
}
