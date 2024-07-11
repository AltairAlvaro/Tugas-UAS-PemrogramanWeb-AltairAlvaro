type ProductItemsAvailable = {
  [key: string]: Array<{
    name: string;
    smileCode: string;
    qtyDiamond: number;
    price: number;
  }>;
};

export const PRODUCT_ITEMS_AVAILABLE: ProductItemsAvailable = {
  'mobile-legends': [
    { name: '86', smileCode: 'ML86', qtyDiamond: 86, price: 20_480 },
    { name: '172', smileCode: 'ML172', qtyDiamond: 172, price: 40_640 },
    { name: '257', smileCode: 'ML257', qtyDiamond: 257, price: 61_120 },
    { name: '344', smileCode: 'ML344', qtyDiamond: 344, price: 81_280 },
    { name: '429', smileCode: 'ML429', qtyDiamond: 429, price: 101_760 },
    { name: '514', smileCode: 'ML514', qtyDiamond: 514, price: 122_240 },
    { name: '600', smileCode: 'ML600', qtyDiamond: 600, price: 142_720 },
    { name: '706', smileCode: 'ML706', qtyDiamond: 706, price: 163_200 },
    { name: '792', smileCode: 'ML792', qtyDiamond: 792, price: 183_680 },
    { name: '878', smileCode: 'ML878', qtyDiamond: 878, price: 203_840 },
    { name: '963', smileCode: 'ML963', qtyDiamond: 963, price: 224_320 },
    { name: '1220', smileCode: 'ML1220', qtyDiamond: 1220, price: 285_440 },
    { name: '1412', smileCode: 'ML1412', qtyDiamond: 1412, price: 326_400 },
    { name: '2195', smileCode: 'ML2195', qtyDiamond: 2195, price: 490_240 },
    { name: '3688', smileCode: 'ML3688', qtyDiamond: 3688, price: 817_920 },
    { name: '5532', smileCode: 'ML5532', qtyDiamond: 5532, price: 1_227_520 },
    { name: '9288', smileCode: 'ML9288', qtyDiamond: 9288, price: 2_041_600 },
    { name: '4394', smileCode: 'ML4394', qtyDiamond: 4394, price: 981_120 },
    { name: '1050', smileCode: 'ML1050', qtyDiamond: 1050, price: 244_480 },
    { name: '2901', smileCode: 'ML2901', qtyDiamond: 2901, price: 653_440 },
    { name: '3073', smileCode: 'ML3073', qtyDiamond: 3073, price: 694_080 },
    { name: '6238', smileCode: 'ML6238', qtyDiamond: 6238, price: 1_390_720 },
    { name: '7727', smileCode: 'ML7727', qtyDiamond: 7727, price: 1_717_760 },
    { name: 'Twilight Pass', smileCode: 'MLTP', qtyDiamond: 0, price: 137_280 },
    { name: '1669', smileCode: 'ML1669', qtyDiamond: 1669, price: 387_520 },
    { name: '2539', smileCode: 'ML2539', qtyDiamond: 2539, price: 571_520 },
    { name: '1584', smileCode: 'ML1584', qtyDiamond: 1584, price: 367_040 },
    { name: '1756', smileCode: 'ML1756', qtyDiamond: 1756, price: 407_680 },
    { name: '1841', smileCode: 'ML1841', qtyDiamond: 1841, price: 428_160 },
    { name: '1135', smileCode: 'ML1135', qtyDiamond: 1135, price: 264_960 },
    { name: 'Weekly Diamond Pass', smileCode: 'MLWP', qtyDiamond: 0, price: 26_624 },
    { name: 'Weekly Diamond Pass x 2', smileCode: 'WPMX2', qtyDiamond: 0, price: 53_248 },
    { name: 'Weekly Diamond Pass x 3', smileCode: 'WPMX3', qtyDiamond: 0, price: 79_872 },
    { name: 'Weekly Diamond Pass x 4', smileCode: 'WPMX4', qtyDiamond: 0, price: 106_496 },
    { name: 'Weekly Diamond Pass x 5', smileCode: 'WPMX5', qtyDiamond: 0, price: 133_120 },
  ],
};
