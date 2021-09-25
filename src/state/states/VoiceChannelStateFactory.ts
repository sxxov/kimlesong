import type { Client } from 'discord.js';
import type { YoutubeMoosick } from 'youtube-moosick';
import { VoiceChannelState } from './VoiceChannelState.js';

export class VoiceChannelStateFactory {
	constructor(private client: Client, private ytm: YoutubeMoosick) {}

	public create(id: string) {
		return new VoiceChannelState({
			client: this.client,
			ytm: this.ytm,
			id,
			guildId: this.client.guilds.cache.find((guild) =>
				Boolean(
					guild.channels.cache.find((channel) => channel.id === id),
				),
			)!.id,
		});
	}
}
