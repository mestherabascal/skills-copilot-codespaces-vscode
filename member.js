function skillMembers() {
  return {
    name: "skillMembers",
    description: "Get the skill members of a team.",
    parameters: [
      {
        type: "object",
        name: "team",
        description: "The team to get the skill members from.",
        required: true,
      },
    ],
    async run({ $ }) {
      const { team } = this;
      const response = await $.get(`https://api.example.com/teams/${team}/members`);
      return response.data;
    },
  };
}