export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export abstract class AbstractItem extends Item {
  abstract updateQuality(): void;
}

/**
 * @class GildedRose
 * @param  {Array} items 
 * @classdesc gilded rose component
 */
export class GildedRose {
  items: Array<AbstractItem>;

  constructor(items: Array<AbstractItem>) {
    this.items = items;
  }

  /**
   * @description Update items quality using the 
   *              item quality management class
   * @return updated items
   */
  updateQuality() {
    this.items.forEach(item => item.updateQuality());
    return this.items;
  }
}
