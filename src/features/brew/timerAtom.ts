import { atom, useAtom } from "jotai";
import { useEffect } from "react";

import { formatSeconds } from "../../services/time";

const timerSecondsAtom = atom(0);

export const timerElapsedAtom = atom((get) => get(timerSecondsAtom));

export const timestampAtom = atom((get) =>
	formatSeconds(get(timerSecondsAtom)),
);

type UseStopwatchOptions = { isActive: boolean };
export const useStopwatch = ({ isActive }: UseStopwatchOptions) => {
	const [, setSeconds] = useAtom(timerSecondsAtom);

	useEffect(() => {
		if (isActive) {
			const startTime = new Date();
			const interval = setInterval(() => {
				const now = new Date();
				setSeconds((now.getTime() - startTime.getTime()) / 1000);
			}, 100);
			return () => {
				setSeconds(0);
				clearInterval(interval);
			};
		}
	}, [isActive]);
};
