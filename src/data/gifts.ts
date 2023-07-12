import { createStore } from 'solid-js/store';
export const [giftIds, setGiftIds] = createStore({ gifts: [null, null, null, null, null] });

export const gifts = [
	{
		img: `${import.meta.env.BASE_URL}public/img/garmin-backpack-tether.webp`,
		name: 'Garmin backpack tether',
		why: 'Gets us faster access to checking on Juniper without accidentally dropping the GPS device!',
		description:
			'This lightweight backpack tether is perfect for conditions that demand hands-free attention. The same hook-n-loop material also is used to easily stow your compatible Garmin device for optimal GPS performance while still providing access at a moment’s notice. When the device is detached from the hook-n-loop, the spine mount and lanyard cord - adjustable in length from 2 inches to 14 inches - ensure the device will stay with you at all times.',
	},
	{
		img: `${import.meta.env.BASE_URL}public/img/garmin-collar-contacts-kit.webp`,
		name: 'Garmin dog collar contacts kit',
		why: 'Allows us to completely plug the inside of Juniper’s collar so there’s no risk of shock or freezing from the metal contacts.',
		description:
			'Customize your compatible dog device with this contacts kit that includes short and long contact points, non-stimulation plug and wrench. The contacts can be removed from the device and replaced with the correct size points that are most appropriate for the dog’s coat.',
	},
	{
		img: `${import.meta.env.BASE_URL}public/img/garmin-handheld-screen-protector.webp`,
		name: 'Garmin handheld screen protector',
		why: 'Keeps Juniper’s GPS device screen working and prevents more scratching',
		description:
			'This screen protector reduces sunlight glare, minimizes fingerprint smudges and protects against scratches.',
	},
	{
		img: `${import.meta.env.BASE_URL}public/img/garmin-tt-25-collar.webp`,
		name: 'Garmin Alpha TT25 dog collar',
		why: 'Because we never want to wonder where Juniper is off to…',
		description:
			'Recently released new collar has more than 2x the battery life, is smaller, and can swap the battery for an even bigger version!',
	},
	{
		img: `${import.meta.env.BASE_URL}public/img/garmin-alpha-300.webp`,
		name: 'Garmin Alpha 300',
		why: 'Because this is such an integral part of our lives, we should ensure that we have the best possible.',
		description:
			'Unlike the one we have, this has a user-replaceable battery, more battery life, is smaller, and much more powerful.',
	},
];
