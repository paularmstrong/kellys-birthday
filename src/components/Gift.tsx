interface Props {
	img: string;
	name: string;
	why: string;
	description: string;
}

export function Gift(props: Props) {
	return (
		<div class="w-[320px] bg-white rounded-xl flex flex-col gap-4 p-4 animate-in zoom-in">
			<img src={props.img} alt="" />
			<div>
				<h2 class="text-lg font-bold">{props.name}</h2>
				<p>{props.why}</p>
			</div>
		</div>
	);
}
