import { AbstractItem } from './gilded-rose';

/**
 * @class AgedBrie
 * @description Increase quality of item with name
 *             "aged brie" if quality is less than 50,
 *              if sell day is le 
 *              and decrease sell in
 * @return {void}
 */
export class AgedBrie extends AbstractItem {
  updateQuality(): void {
    this.sellIn--;
    if (this.quality < 50) {
      this.quality++;
      if (this.sellIn < 0) {
        this.quality++;
      }
    }
  }
}

/**
 * @class BackstagePass
 * @description Increase quality of item with name
 *             "backstage pass" if quality is less than 50, 
 *              if it's below 11 sell days and less than quality 50,
 *              if it's below 6 sell days and less than quality 50
 *              and decrease sell days
 * @return {void}
 */
export class BackstagePass extends AbstractItem {
  updateQuality(): void {
    this.sellIn--;
    if (this.quality < 50) {
      if (this.sellIn < 0) {
        this.quality = 0;
      } else if (this.sellIn < 5) {
        this.quality += 3;
      } else if (this.sellIn < 10) {
        this.quality += 2;
      } else {
        this.quality++;
      }
    }
  }
}

/**
 * @class NormalItem
 * @description Update normal item quality with 
 *              no special specification
 * @param  {object} item
 * @return {void}
 */
export class NormalItem extends AbstractItem {
  updateQuality(): void {
    this.sellIn--;
    if (this.quality > 0) {
      this.quality--;
      if (this.sellIn < 0) {
        this.quality--;
      }
    }
  }
}

/**
 * @class Sulfuras
 * @description Do nothing, quality and sellIn
 *               never change for this item
 * @return {void}
 */
export class Sulfuras extends AbstractItem {
  updateQuality(): void {}
}
