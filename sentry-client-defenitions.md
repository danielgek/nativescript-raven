```typescript
declare class AsynchronousOperation extends NSOperation {

	static alloc(): AsynchronousOperation; // inherited from NSObject

	static new(): AsynchronousOperation; // inherited from NSObject

	completeOperation(): void;
}

declare class BreadcrumbStore extends NSObject {

	static alloc(): BreadcrumbStore; // inherited from NSObject

	static new(): BreadcrumbStore; // inherited from NSObject

	maxCrumbs: number;

	add(crumb: SentryBreadcrumb): void;

	clear(): void;
}

interface EventPropertiesSetter {

	extra: NSDictionary<string, any>;

	tags: NSDictionary<string, string>;

	addExtraValue(key: string, value: any): void;

	addTagValue(key: string, value: string): void;
}
declare var EventPropertiesSetter: {

	prototype: EventPropertiesSetter;
};

declare class SentryBreadcrumb extends NSObject {

	static alloc(): SentryBreadcrumb; // inherited from NSObject

	static new(): SentryBreadcrumb; // inherited from NSObject

	category: string;

	data: NSDictionary<string, any>;

	level: SentrySeverity;

	message: string;

	readonly timestamp: Date;

	type: string;

	constructor(o: { category: string; timestamp: Date; message: string; level: SentrySeverity; data: NSDictionary<string, any>; to: string; from: string; });

	constructor(o: { category: string; timestamp: Date; message: string; level: SentrySeverity; data: NSDictionary<string, any>; url: string; method: string; statusCode: number; reason: string; });

	constructor(o: { category: string; timestamp: Date; message: string; type: string; level: SentrySeverity; data: NSDictionary<string, any>; });

	initWithCategoryTimestampMessageLevelDataToFrom(category: string, timestamp: Date, message: string, level: SentrySeverity, data: NSDictionary<string, any>, to: string, from: string): this;

	initWithCategoryTimestampMessageLevelDataUrlMethodStatusCodeReason(category: string, timestamp: Date, message: string, level: SentrySeverity, data: NSDictionary<string, any>, url: string, method: string, statusCode: number, reason: string): this;

	initWithCategoryTimestampMessageTypeLevelData(category: string, timestamp: Date, message: string, type: string, level: SentrySeverity, data: NSDictionary<string, any>): this;
}

declare class SentryClient extends NSObject implements EventPropertiesSetter {

	static alloc(): SentryClient; // inherited from NSObject

	static logLevel(): SentryLog;

	static new(): SentryClient; // inherited from NSObject

	static setLogLevel(value: SentryLog): void;

	static setShared(value: SentryClient): void;

	static shared(): SentryClient;

	static versionString(): string;

	breadcrumbs: BreadcrumbStore;

	buildNumber: string;

	delegate: SentryClientUserFeedbackDelegate;

	objcBeforeSendEventBlock: (p1: interop.Pointer | interop.Reference<SentryEvent>) => void;

	releaseVersion: string;

	user: SentryUser;

	extra: NSDictionary<string, any>; // inherited from EventPropertiesSetter

	tags: NSDictionary<string, string>; // inherited from EventPropertiesSetter

	constructor(o: { dsnString: string; });

	addExtraValue(key: string, value: any): void;

	addTagValue(key: string, value: string): void;

	captureErrorFileLineFunction(error: NSError, file: string, line: number, _function: string): void;

	captureEvent(event: SentryEvent): void;

	captureMessageLevel(message: string, level: SentrySeverity): void;

	crash(): void;

	enableAutomaticBreadcrumbTracking(): void;

	enableUserFeedbackAfterFatalEvent(userFeedbackViewModel: SentryUserFeedbackViewModel): void;

	initWithDsnString(dsnString: string): this;

	reportReactNativeCrashStacktraceTerminateProgram(error: NSError, stacktrace: NSArray<any>, terminateProgram: boolean): void;

	snapshotStacktrace(): void;

	startCrashHandler(): void;

	userFeedbackNavigationViewController(): UINavigationController;

	userFeedbackTableViewController(): UserFeedbackTableViewController;
}

interface SentryClientUserFeedbackDelegate {

	userFeedbackReady(): void;

	userFeedbackSent(): void;
}
declare var SentryClientUserFeedbackDelegate: {

	prototype: SentryClientUserFeedbackDelegate;
};

declare class SentryEvent extends NSObject implements EventPropertiesSetter {

	static alloc(): SentryEvent; // inherited from NSObject

	static new(): SentryEvent; // inherited from NSObject

	buildNumber: string;

	culprit: string;

	readonly eventID: string;

	exceptions: NSArray<SentryException>;

	fingerprint: NSArray<string>;

	level: SentrySeverity;

	logger: string;

	message: string;

	modules: NSDictionary<string, string>;

	platform: string;

	releaseVersion: string;

	serverName: string;

	stacktrace: SentryStacktrace;

	threads: NSArray<SentryThread>;

	timestamp: Date;

	user: SentryUser;

	extra: NSDictionary<string, any>; // inherited from EventPropertiesSetter

	tags: NSDictionary<string, string>; // inherited from EventPropertiesSetter

	constructor(o: { timestamp: string; level: Date; logger: SentrySeverity; culprit: string; serverName: string; release: string; buildNumber: string; tags: string; modules: NSDictionary<string, string>; extra: NSDictionary<string, string>; fingerprint: NSDictionary<string, any>; user: NSArray<string>; exceptions: SentryUser; stacktrace: NSArray<SentryException>; });

	addExtraValue(key: string, value: any): void;

	addTagValue(key: string, value: string): void;

	fetchStacktrace(): void;

	initTimestampLevelLoggerCulpritServerNameReleaseBuildNumberTagsModulesExtraFingerprintUserExceptionsStacktrace(message: string, timestamp: Date, level: SentrySeverity, logger: string, culprit: string, serverName: string, release: string, buildNumber: string, tags: NSDictionary<string, string>, modules: NSDictionary<string, string>, extra: NSDictionary<string, any>, fingerprint: NSArray<string>, user: SentryUser, exceptions: NSArray<SentryException>, stacktrace: SentryStacktrace): this;
}

declare class SentryException extends NSObject {

	static alloc(): SentryException; // inherited from NSObject

	static new(): SentryException; // inherited from NSObject

	mechanism: NSDictionary<string, any>;

	module: string;

	thread: SentryThread;

	type: string;

	userReported: boolean;

	value: string;

	constructor(o: { value: string; type: string; mechanism: NSDictionary<string, any>; module: string; });

	initWithValueTypeMechanismModule(value: string, type: string, mechanism: NSDictionary<string, any>, module: string): this;
}

declare class SentryFrame extends NSObject {

	static alloc(): SentryFrame; // inherited from NSObject

	static new(): SentryFrame; // inherited from NSObject

	fileName: string;

	function: string;

	imageAddress: string;

	instructionAddress: string;

	module: string;

	package: string;

	platform: string;

	symbolAddress: string;

	constructor(o: { fileName: string; function: string; module: string; line: number; });

	constructor(o: { fileName: string; function: string; module: string; line: number; column: number; });

	initWithFileNameFunctionModuleLine(fileName: string, _function: string, module: string, line: number): this;

	initWithFileNameFunctionModuleLineColumn(fileName: string, _function: string, module: string, line: number, column: number): this;
}

declare const enum SentryLog {

	None = 0,

	Error = 1,

	Debug = 2,

	Verbose = 3
}

declare class SentryRegister extends NSObject {

	static alloc(): SentryRegister; // inherited from NSObject

	static new(): SentryRegister; // inherited from NSObject

	registers: NSDictionary<string, string>;

	constructor(o: { registerDict: NSDictionary<string, any>; });

	initWithRegisterDict(registerDict: NSDictionary<string, any>): this;
}

declare const enum SentrySeverity {

	Fatal = 0,

	Error = 1,

	Warning = 2,

	Info = 3,

	Debug = 4
}

declare class SentryStacktrace extends NSObject {

	static alloc(): SentryStacktrace; // inherited from NSObject

	static convertReactNativeStacktrace(stacktrace: NSArray<NSDictionary<string, any>>): SentryStacktrace;

	static new(): SentryStacktrace; // inherited from NSObject

	frames: NSArray<SentryFrame>;

	readonly register_: SentryRegister;

	constructor(o: { frames: NSArray<SentryFrame>; });

	constructor(o: { frames: NSArray<SentryFrame>; register: SentryRegister; });

	initWithFrames(frames: NSArray<SentryFrame>): this;

	initWithFramesRegister(frames: NSArray<SentryFrame>, register_: SentryRegister): this;
}

declare class SentryThread extends NSObject {

	static alloc(): SentryThread; // inherited from NSObject

	static new(): SentryThread; // inherited from NSObject

	readonly id: number;

	readonly name: string;

	readonly reason: string;

	readonly stacktrace: SentryStacktrace;

	constructor(o: { id: number; crashed: boolean; current: boolean; name: string; stacktrace: SentryStacktrace; reason: string; });

	initWithIdCrashedCurrentNameStacktraceReason(id: number, crashed: boolean, current: boolean, name: string, stacktrace: SentryStacktrace, reason: string): this;
}

declare class SentryUser extends NSObject {

	static alloc(): SentryUser; // inherited from NSObject

	static new(): SentryUser; // inherited from NSObject

	email: string;

	extra: NSDictionary<string, any>;

	userID: string;

	username: string;

	constructor(o: { id: string; email: string; username: string; extra: NSDictionary<string, any>; });

	initWithIdEmailUsernameExtra(userID: string, email: string, username: string, extra: NSDictionary<string, any>): this;
}

declare class SentryUserFeedback extends NSObject {

	static alloc(): SentryUserFeedback; // inherited from NSObject

	static new(): SentryUserFeedback; // inherited from NSObject

	comments: string;

	email: string;

	event: SentryEvent;

	name: string;
}

declare class SentryUserFeedbackViewModel extends NSObject {

	static alloc(): SentryUserFeedbackViewModel; // inherited from NSObject

	static new(): SentryUserFeedbackViewModel; // inherited from NSObject

	commentsTextFieldPlaceholder: string;

	commentsTextFieldValue: string;

	defaultTextColor: UIColor;

	emailLabel: string;

	emailTextFieldValue: string;

	errorTextColor: UIColor;

	nameLabel: string;

	nameTextFieldValue: string;

	showSentryBranding: boolean;

	subTitle: string;

	submitButtonText: string;

	title: string;

	viewControllerTitle: string;
}

declare var SentryVersionNumber: number;

declare var SentryVersionNumberVar: number;

declare var SentryVersionString: interop.Reference<number>;

declare var SentryVersionStringVar: interop.Reference<number>;

declare class UserFeedbackTableViewController extends UITableViewController implements UITextFieldDelegate {

	static alloc(): UserFeedbackTableViewController; // inherited from NSObject

	static new(): UserFeedbackTableViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

```
