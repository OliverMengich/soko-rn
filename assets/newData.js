/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
export const CATEGORY =[
    {
        id: 1,
        name: 'Electronics',
        subCategories:['1','5','4','2'],
        imageUrl: 'https://openclipart.org/image/800px/276320',
        featured: true
    },
    {
        id: 2,
        name: 'Men',
        subCategories:['3','6','7','8'],
        imageUrl: 'https://openclipart.org/image/800px/308649',
        featured: true,
    },
    {
        id: 3,
        name: 'Home',
        subCategories:['9','10','11','12'],
        imageUrl: 'https://openclipart.org/image/800px/7032',
        featured: false,
    },
    {
        id: 4,
        name: 'Beauty',
        subCategories:['13','14','15','16'],
        imageUrl:'https://openclipart.org/image/800px/276320',
        featured: false,
    },
    {
        id: 4,
        name: 'Groceries',
        subCategories:['13','14','15','16'],
        imageUrl:'https://openclipart.org/image/800px/276320',
        featured: false,
    },
    {
        id: 5,
        name: 'Sports',
        subCategories:['17','18','19','20'],
        imageUrl:'https://openclipart.org/image/800px/276320',
        //updated at
        featured: false
    },
    {
        id: 6,
        name: 'Kids and Baby',
        subCategories:['21','22','23','24'],
        imageUrl:'https://openclipart.org/image/800px/276320',
        featured: false
    },
    {
        id: 7,
        name: "Women",
        subCategories:['25','26','27','28'],
        imageUrl:'https://openclipart.org/image/800px/276320',
        featured: false
    },
];
export const SUBCATEGORY = [
    {
        id: 1,
        name: 'Mobiles',
        categoryId: 1,
        imageUrl: 'https://openclipart.org/image/800px/276320',
        products:[]
    },
    {
        id: 2,
        name: 'Laptops',
        categoryId: 1,
        imageUrl: 'https://openclipart.org/image/800px/308649',
        products:[]
    },
    {
        id: 3,
        name: 'Bluetooth Speakers',
        categoryId: 1,
        products: [],
    },
    {
        id: 4,
        name: 'Headphones',
        categoryId: 1,
        products: [],
    },
    {
        id: 5,
        name: 'Mens shoes',
        categoryId: 2,
        products: [],
    }
]
const SHOP_DATA = [
    {
        id: '1',
        category: 'Hats',
        imageUrl: 'https://openclipart.org/image/800px/276320',
    },
    {
      id:'2',
      category: 'Sneakers',
      imageUrl: 'https://openclipart.org/image/800px/308649',
      
    },
    {
      id: '3',
      category: 'Jackets',
      imageUrl:'https://openclipart.org/image/800px/7032',
      
    },
];
export default SHOP_DATA;
console.log();