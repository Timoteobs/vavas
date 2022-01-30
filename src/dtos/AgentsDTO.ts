export interface AgentDTO {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  killfeedPortrait: string;
  background: string;
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
  abilities: {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  }[];
  voiceLine: {
    minDuration: number;
    maxDuration: number;
    mediaList: {
      id: number;
      wwise: string;
      wave: string;
    }[];
  }
}