import { AbstractItem, GildedRose } from '@/gilded-rose';
import { NormalItem, AgedBrie, Sulfuras, BackstagePass } from '@/item-quality-management';

describe('Gilded Rose', () => {
  let gildedRose: (item: AbstractItem) => GildedRose;
  let items: AbstractItem[];

  beforeEach(() => {
    gildedRose = (item) => new GildedRose([item]);
  });

  describe('updateQuality', () => {
    it('should return the same name for an item', () => {
      const itemName: string = 'Dexterity Vest';
      items = gildedRose(new NormalItem(itemName, 0, 0)).updateQuality();
      expect(items[0].name).toBe(itemName);
    });

    it('should degrade twice as fast when sell in days has passed', () => {
      const quality: number = 10;
      items = gildedRose(new NormalItem('Dexterity Vest', 0, quality)).updateQuality();
      expect(items[0].quality).toBe(quality - 2);
    });

    it('should not have an item with negative quality', () => {
      items = gildedRose(new NormalItem('Dexterity Vest', 1, 0)).updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it('should increase the quality of "Aged Brie" the older it gets', () => {
      const quality: number = 10;
      items = gildedRose(new AgedBrie('Aged Brie', 2, quality)).updateQuality();
      expect(items[0].quality).toBe(quality + 1);
    });

    it('should not increase the quality of an item more than 50', () => {
      const quality: number = 50;
      items = gildedRose(new AgedBrie('Aged Brie', 2, quality)).updateQuality();
      expect(items[0].quality).toBe(quality);
    });

    it('should not decrease the quality of "Sulfuras, Hand of Ragnaros"', () => {
      const quality: number = 80;
      items = gildedRose(new Sulfuras('Sulfuras, Hand of Ragnaros', 0, quality)).updateQuality();
      expect(items[0].quality).toBe(quality);
    });

    it('should increase the quality of "Backstage passes to a TAFKAL80ETC concert" by 3 when sell there are 5 days or less', () => {
      const quality: number = 10;
      items = gildedRose(new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 5, quality)).updateQuality();
      expect(items[0].quality).toBe(quality + 3);
    });

    it('should increase the quality of "Backstage passes to a TAFKAL80ETC concert" by 2 when sell there are 10 days or less', () => {
      const sellIn: number = 10;
      const quality: number = 10;
      items = gildedRose(new BackstagePass('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)).updateQuality();
      expect(items[0].sellIn).toBe(sellIn - 1);
      expect(items[0].quality).toBe(quality + 2);
    });

    it('should drop quality to 0 after concert', () => {
      const quality: number = 10;
      items = gildedRose(new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 0, quality)).updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});
