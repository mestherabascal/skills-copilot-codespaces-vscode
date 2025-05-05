function skillMembers() {
  return {
    name: 'members',
    description: 'Get a list of members in the server',
    options: [
      {
        name: 'role',
        description: 'The role to filter members by',
        type: 8, // ROLE
        required: false,
      },
    ],
    async execute(interaction) {
      const role = interaction.options.getRole('role');
      const members = interaction.guild.members.cache;

      if (role) {
        const filteredMembers = members.filter(member => member.roles.cache.has(role.id));
        await interaction.reply(`Members with the role ${role.name}: ${filteredMembers.map(member => member.user.username).join(', ')}`);
      } else {
        await interaction.reply(`All members: ${members.map(member => member.user.username).join(', ')}`);
      }
    },
  };
} 