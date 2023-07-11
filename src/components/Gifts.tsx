import { Present } from './Present';
import { giftIds, setGiftIds } from '../data/gifts';

export function Gifts() {
	return (
		<div class="flex gap-24 items-center w-full justify-around px-24">
			<Present speed="medium" color="orange" />
			<Present speed="xfast" color="emerald" />
			<Present speed="xxslow" color="fuchsia" />
			<Present speed="fast" color="pink" />
			<Present speed="xslow" color="sky" />
		</div>
	);
}
