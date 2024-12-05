export interface SparePartInterface {
  sparePartId: number;
  sparePartName: string;
  sparePartQuantity: number;
  sparePartPrice: number;
  sparePartCategoryID: number;
  spareCategory: {
    spareCategoryId: number;
    spareCategoryName: string;
  };
}
