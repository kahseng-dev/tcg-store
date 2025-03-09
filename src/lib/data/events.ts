export type Event = {
	datetime: Date;
	title: string;
	category: string;
}

export const events:Event[] = [
	{
		datetime: new Date(),
		title: "SV08 New Expansion",
		category: "Pokemon TCG"

	},
	{
		datetime: new Date(),
		title: "Gym Store Event",
		category: "Pokemon TCG"

	},
    {
		datetime: new Date(),
		title: "Meetup Event",
		category: "One Piece TCG"
	},
	{
		datetime: new Date(),
		title: "Standard Battle",
		category: "One Piece TCG"
	},
    {
		datetime: new Date(),
		title: "Tournament (Monthly)",
		category: "Hololive"
	}
];
