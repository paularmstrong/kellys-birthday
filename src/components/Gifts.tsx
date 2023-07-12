import { onMount } from 'solid-js';
import confetti from 'canvas-confetti';
import { Present } from './Present';

export function Gifts() {
	let canvasRef;
	onMount(() => {
		const party = confetti.create(canvasRef, { resize: true, useWorker: true });
		setTimeout(() => {
			party({ particleCount: 1000, spread: 365 });
		}, 250);
	});

	return (
		<div class="grow overflow-hidden flex flex-wrap gap-4 items-center justify-around px-24">
			<Present speed="medium" color="orange" />
			<Present speed="xfast" color="emerald" />
			<Present speed="xxslow" color="fuchsia" />
			<Present speed="fast" color="pink" />
			<Present speed="xslow" color="sky" />
			<canvas class="fixed w-screen h-screen z-10 pointer-events-none" ref={canvasRef} />
		</div>
	);
}
