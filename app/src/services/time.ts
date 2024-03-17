/**
 * Formats the given time duration as MM:ss.
 * @param time the number of seconds
 */
export const formatSeconds = (time: number): string => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${toWidthTwo(minutes)}:${toWidthTwo(seconds)}`;
};

const toWidthTwo = (num: number) => num.toFixed(0).padStart(2, "0");
