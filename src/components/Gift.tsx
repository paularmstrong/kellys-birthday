interface Props {
	img: string;
	name: string;
	why: string;
	description: string;
}

export function Gift(props: Props) {
	return (
		<div class="absolute inset-0 bg-white rounded-xl flex flex-col gap-8">
			<img src={props.img} alt="" />
			<h2>{props.name}</h2>
			<p>{props.why}</p>
		</div>
	);
}
