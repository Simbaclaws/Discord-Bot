import Command from "../Command";
import { Client, CommandInteraction } from "discord.js";

export const Code: Command = {
  name: "code",
  description: "Let the Urapolku Developer Generate Code",
  options: [
    {
      name: "prompt",
      description: "The prompt to give the Urapolku developer for generating code",
      type: 3,
      required: true
    }
  ],
  run: async (client: Client, interaction: CommandInteraction) => {
    const guild = await interaction.guild?.fetch();

    if (!guild) {
      await interaction.followUp({
        ephemeral: true,
        content: "No guild found!",
      });
      return;
    }

    const user = interaction.options.get("user")?.user;

    if (!user || user === null) {
      await interaction.followUp({
        ephemeral: true,
        content: "No user found!",
      });
      return;
    }

    const guild_member = await interaction.guild?.members.fetch(user);

    if (!guild_member || guild_member === null) {
      await interaction.followUp({
        ephemeral: true,
        content: "No guild member found!",
      });
      return;
    }

    await interaction.followUp({
      content: `Please wait while I generate your code: ${user.tag}.`,
    });
  }
}