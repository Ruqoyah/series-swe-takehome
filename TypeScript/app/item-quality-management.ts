import { Item } from '@/gilded-rose';

/**
 * @class ItemQualityManagement
 * @param  {Array} items 
 * @classdesc Item quality management component
 */
export class ItemQualityManagement {
  
   /**
   * @description Update item quality based on 
   *             the item name
   * @param  {object} item
   * @return {void}
   */
  updateItemQuality(item: Item) {
    if (item.name == 'Aged Brie') {
      this.updateAgedBrie(item);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.updateBackstagePass(item);
    } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
      // Do nothing, quality and sellIn never change for this item
    } else {
      this.updateNormalItem(item);
    }
  }

  /**
   * @description Increase quality of item with name
   *             "aged brie" if quality is less than 50 
   *              and decrease sell in
   * @param  {object} item
   * @return {void}
   */
  updateAgedBrie(item: Item) {
    this.increaseQuality(item);
    this.decreaseSellIn(item);
    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }
  
 /**
   * @description Increase quality of item with name
   *             "backstage pass" if quality is less than 50, 
   *              if it's below 11 sell days and less than quality 50,
   *              if it's below 6 sell days and less than quality 50
   *              and decrease sell days
   * @param  {object} item
   * @return {void}
   */
  updateBackstagePass(item: Item) {
    this.increaseQuality(item);
    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }
    this.decreaseSellIn(item);
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
  
  /**
   * @description Update normal item quality with 
   *              no special specification
   * @param  {object} item
   * @return {void}
   */
  updateNormalItem(item: Item) {
    this.decreaseQuality(item);
    this.decreaseSellIn(item);
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  /**
   * @description Increase Item Quality if item quality 
   *              is less than 50
   * @param  {object} item
   * @return {void}
   */
  increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }
  
  /**
   * @description Decrease Item Quality if item quality 
   *              is greater than 0
   * @param  {object} item
   * @return {void}
   */
  decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }
    
  /**
   * @description Decrease Item sell day
   * @param  {object} item
   * @return {void}
   */
  decreaseSellIn(item: Item) {
    item.sellIn -= 1;
  }  
}
  