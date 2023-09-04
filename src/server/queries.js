export const getPlayers = async (args, context) => {
  return context.entities.Player.findMany({});
};

export const getUsers = async (args, context) => {
  return context.entities.User.findMany({});
};

export const getSeasons = async (args, context) => {
  return context.entities.Season.findMany({});
};
