import { useTrackCall } from "./segment";

type ComponentName = Capitalize<string>;
type Tracking =
	| ComponentName
	| [name: ComponentName, properties: Record<string, any>];

export type TrackingProps = { tracking: Tracking };

export const useClickMetrics = <T extends (...args: any[]) => any>(
	tracking: Tracking,
	callback: T,
): T => {
	const track = useTrackCall();

	const name = typeof tracking === "string" ? tracking : tracking[0];
	const properties = typeof tracking === "string" ? {} : tracking[1];

	return ((...args: any[]) => {
		track(`${name} Clicked`, properties);
		return callback(...args);
	}) as T;
};
