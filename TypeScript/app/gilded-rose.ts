import {ItemQualityManagement} from './item-quality-management';
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

/**
 * @class GildedRose
 * @param  {Array} items 
 * @classdesc gilded rose component
 */
export class GildedRose extends ItemQualityManagement {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    super();
    this.items = items;
  }

  /**
   * @description Update items quality using the 
   *              item quality management class
   * @return updated items
   */
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItemQuality(this.items[i]);
    }
    return this.items;
  }
}
