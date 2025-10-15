import config from '../config_overlay/config.json';

export const ConfigService = {
  getTeamBlueColor: () => config.teamBlueColor,
  getTeamOrangeColor: () => config.teamOrangeColor,
  getTotalMatches: () => config.totalMatches,
  getTeamBlueName: () => config.teamBlueName,
  getTeamOrangeName: () => config.teamOrangeName,
  getTeamBlueLogo: () => config.teamBlueLogo,
  getTeamOrangeLogo: () => config.teamOrangeLogo
};