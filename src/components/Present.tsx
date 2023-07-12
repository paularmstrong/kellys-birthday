import { createSignal, onMount } from 'solid-js';
import clsx from 'clsx';
import { gifts } from '../data/gifts';
import { Gift } from './Gift';
import confetti from 'canvas-confetti';

interface Props {
	color: 'orange' | 'emerald' | 'fuchsia' | 'pink' | 'sky';
	speed: 'xfast' | 'fast' | 'medium' | 'slow' | 'xslow' | 'xxslow';
}

const [opened, setOpened] = createSignal(-1);

export function Present(props: Props) {
	const [giftId, setGiftId] = createSignal<number>(-1);
	const [party, setParty] = createSignal<typeof confetti>(null);
	let canvasRef;

	onMount(() => {
		const party = confetti.create(canvasRef, { resize: true, useWorker: true });
		setParty(() => party);
	});

	return (
		<div class="relative">
			{giftId() > -1 ? <Gift {...gifts[giftId()]} /> : null}
			<canvas class="absolute w-[400px] h-[400px] z-10 pointer-events-none" ref={canvasRef} />
			<div class="p-16">
				<div
					class="perspective-[400px] w-[200px] h-[200px]"
					onClick={() => {
						if (giftId() !== -1) {
							return;
						}
						const thisId = opened() + 1;
						setGiftId(thisId);
						setOpened(thisId);
						party()({ particleCount: 400 });
					}}
				>
					<div
						class={clsx(
							'w-[200px] h-[200px] relative transform-style-3d',
							giftId() > -1
								? 'animate-open fill-forward'
								: {
										'animate-rotate-3d-xfast': props.speed === 'xfast',
										'animate-rotate-3d-fast': props.speed === 'fast',
										'animate-rotate-3d-medium': props.speed === 'medium',
										'animate-rotate-3d-slow': props.speed === 'slow',
										'animate-rotate-3d-xslow': props.speed === 'xslow',
										'animate-rotate-3d-xxslow': props.speed === 'xxslow',
								  },
							{
								'text-orange-400': props.color === 'orange',
								'text-emerald-400': props.color === 'emerald',
								'text-fuchsia-400': props.color === 'fuchsia',
								'text-pink-400': props.color === 'pink',
								'text-sky-400': props.color === 'sky',
							}
						)}
					>
						<Side side="front" />
						<Side side="back" />
						<Side side="left" />
						<Side side="right" />
						<Side side="bottom" />
						{giftId() === -1 ? (
							<>
								<Lid side="front" />
								<Lid side="back" />
								<Lid side="left" />
								<Lid side="right" />
								<Lid side="top" />
							</>
						) : null}
						co
					</div>
				</div>
			</div>
		</div>
	);
}

type Side = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom';

type SideProps = {
	side: Side;
};

function Side({ side }: SideProps) {
	return (
		<div
			class={clsx('absolute w-[200px] h-[200px] border-2 border-slate-900 bg-current', {
				'side-front': side === 'front',
				'side-back': side === 'back',
				'side-left': side === 'left',
				'side-right': side === 'right',
				'side-top': side === 'top',
				'side-bottom': side === 'bottom',
			})}
		/>
	);
}

function Lid({ side }: SideProps) {
	return (
		<div
			class={clsx('absolute w-[220px] border-2 border-black bg-current', {
				'lid-front h-1/4': side === 'front',
				'lid-back h-1/4': side === 'back',
				'lid-left h-1/4': side === 'left',
				'lid-right h-1/4': side === 'right',
				'lid-top h-[220px]': side === 'top',
				'lid-bottom h-[220px]': side === 'bottom',
			})}
		/>
	);
}
