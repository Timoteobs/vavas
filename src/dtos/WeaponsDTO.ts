export interface WeaponsDTO {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: {
    fireRate: Number;
    magazineSize: Number;
    runSpeedMultiplier: Number;
    equipTimeSeconds: Number;
    reloadTimeSeconds: Number;
    firstBulletAccuracy: Number;
    shotgunPelletCount: Number;
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
    adsStats: {
      zoomMultiplier: Number;
      fireRate: Number;
      runSpeedMultiplier: Number;
      burstCount: Number;
      firstBulletAccuracy: Number
    };
    altShotgunStats: string;
    airBurstStats: string;
    damageRanges:
    {
      rangeStartMeters: Number;
      rangeEndMeters: Number;
      headDamage: Number;
      bodyDamage: Number;
      legDamage: Number
    }[];
  };
  shopData: {
    cost: number;
    category: string;
    categoryText: string;
    gridPosition: {
      row: Number;
      column: Number;
    };
    canBeTrashed: boolean;
    image: string;
    newImage: string;
    newImage2: string;
    assetPath: string;
  };
  skins:
  {
    uuid: string;
    displayName: string;
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: string;
    assetPath: string;
    chromas: {
      uuid: string;
      displayName: string;
      displayIcon: string;
      fullRender: string;
      swatch: string;
      streamedVideo: string;
      assetPath: string;
    }[];
    levels: {
      uuid: string;
      displayName: string;
      levelItem: string;
      displayIcon: string;
      streamedVideo: string;
      assetPath: string;
    }[];
  }[],
}