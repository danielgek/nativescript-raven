import { Common } from './raven.common';
export declare class RavenNative extends Common {
    static init(dsn: string): void;
    static capture(error: any): void;
}
