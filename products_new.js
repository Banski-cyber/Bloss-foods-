const PRODUCTS = [
    // Grains & Staples
    { id:'rice',        name:'Rice',                          category:'Grains & Staples', price:1900,  stock:100 },
    { id:'beans_honey', name:'Honey Beans',                   category:'Grains & Staples', price:2400,  stock:50  },
    { id:'beans_drum',  name:'Drum Beans',                    category:'Grains & Staples', price:1800,  stock:50  },
    { id:'garri',       name:'Garri',                         category:'Grains & Staples', price:500,   stock:60  },
    { id:'semovita',    name:'Semovita',                      category:'Grains & Staples', price:1800,  stock:50  },
    { id:'elubo_white', name:'Elubo (White, Packed)',         category:'Grains & Staples', price:900,   stock:30  },
    { id:'elubo_black', name:'Elubo (Black, Packed)',         category:'Grains & Staples', price:2300,  stock:30  },

    // Oils & Proteins
    { id:'p_oil',         name:'Palm Oil (Full)',              category:'Oils & Proteins', price:1800, stock:50 },
    { id:'groundnut_oil', name:'Groundnut Oil',                category:'Oils & Proteins', price:2200, stock:40 },
    { id:'egusi',         name:'Egusi (Grinded Melon, 1 Cup)', category:'Oils & Proteins', price:500,  stock:80 },
    { id:'eggs',          name:'Eggs',                          category:'Oils & Proteins', price:250,  stock:60 },

    // Noodles & Pasta
    { id:'spaghetti', name:'Spaghetti', category:'Noodles & Pasta', stock:70,
        variants:[{label:'Small', price:1000},{label:'Medium', price:1100},{label:'Large', price:1800}] },
    { id:'n_single',  name:'Noodles (Single)', category:'Noodles & Pasta', price:250, stock:200 },

    // Beverages & Cereals
    { id:'sugar', name:'Dangote Sugar', category:'Beverages & Cereals', stock:60,
        variants:[{label:'Sachet', price:600},{label:'Per Piece', price:50}] },
    { id:'milo_roll',   name:'Milo (Roll)',      category:'Beverages & Cereals', price:2000, stock:30 },
    { id:'dano_roll',   name:'Dano Milk (Roll)', category:'Beverages & Cereals', price:1400, stock:30 },
    { id:'custard_ord', name:'Custard',          category:'Beverages & Cereals', price:250,  stock:40 },
    { id:'cornflakes',  name:'Cornflakes',       category:'Beverages & Cereals', price:250,  stock:20 },
    { id:'golden_morn', name:'Golden Morn',      category:'Beverages & Cereals', price:300,  stock:40 },
    { id:'coco_pops',   name:'Coco Pops',        category:'Beverages & Cereals', price:250,  stock:20 },

    // Seasoning & Spices
    { id:'hot_pepper',      name:'Hot Pepper (Roll)',         category:'Seasoning & Spices', price:1000, stock:30  },
    { id:'curry_thyme',     name:'Curry & Thyme (Roll)',      category:'Seasoning & Spices', price:800,  stock:30  },
    { id:'gino_paste',      name:'Gino Paste',                category:'Seasoning & Spices', price:250,  stock:40  },
    { id:'party_jollof',    name:'Party Jollof',              category:'Seasoning & Spices', price:250,  stock:40  },
    { id:'sonia_tomato',    name:'Sonia Tomato',              category:'Seasoning & Spices', price:200,  stock:40  },
    { id:'maggi',           name:'Maggi',                      category:'Seasoning & Spices', price:50,   stock:150 },
    { id:'chicken_flavour', name:'Chicken Flavour (25 Cubes)', category:'Seasoning & Spices', price:450,  stock:30  },
    { id:'gino_max',        name:'Gino Max (25 Cubes)',       category:'Seasoning & Spices', price:400,  stock:30  },
    { id:'dangote_salt',    name:'Dangote Salt',               category:'Seasoning & Spices', price:450,  stock:50  },

    // Household & Fresh
    { id:'viva', name:'Viva Detergent', category:'Household & Fresh', price:600, stock:30 },

    // Snacks & Extras
    { id:'checkers_peanut', name:'Checkers Peanut', category:'Snacks & Extras', price:150, stock:50 },
    { id:'groundnut',       name:'Groundnut',       category:'Snacks & Extras', price:50,  stock:80 },
];
module.exports = PRODUCTS;
