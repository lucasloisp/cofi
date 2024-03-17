export type ScreenCall = (name: string) => Promise<unknown>;
export type TrackCall = (
	name: string,
	properties: Record<string, any>,
) => Promise<unknown>;
