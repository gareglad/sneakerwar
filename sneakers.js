const cards = [
    {  
        id: 0,
        name: 'Adidas NMD Runner',
        heat: 136,
        cost: 153,
        points: 2000
    },{  
        id: 1,
        name: 'Adidas NMD Runner',
        heat: 136,
        cost: 153,
        points: 2000
    },{
        id: 2,
        name: 'Air Jordan 4',
        heat: 303,
        cost: 378,
        points: 12000
    },
    {   
        id: 3,
        name: 'Adidas Ozweego',
        heat: 204,
        cost: 230,
        points: 2100
    },
    {   
        id: 4,
        name: 'Adidas Yeezy Slides',
        heat: 247,
        cost: 145,
        points: 9009
    },
    {   
        id: 5,
        name: 'Nike Air Max Plus',
        heat: 169,
        cost: 200,
        points: 2000
    },
    {   
        id: 6,
        name: 'New Balance 580',
        heat: 295,
        cost: 499,
        points: 9000
    },
    {   
        id: 7,
        name: 'Nike Air Max 97',
        heat: 144,
        cost: 136,
        points: 20000
    },
    {   
        id: 8,
        name: 'Off-White Out Of Office',
        heat: 433,
        cost: 600,
        points: 10000
    },
    {   
        id: 9,
        name: 'Nike Dunk',
        heat: 275,
        cost: 490,
        points: 19000
    },
    {   
        id: 10,
        name: 'Nike Air Force 1',
        heat: 722,
        cost: 1340,
        points: 25000
    },
    {   
        id: 11,
        name: 'Air Jordan 29',
        heat: 207,
        cost: 273,
        points: 17000
    },
    {   
        id: 12,
        name: 'Nike Air Vapor Max',
        heat: 100,
        cost: 145,
        points: 20798
    },
    {
        id: 13,
        name: 'Converse All Star BB Jet',
        heat: 195,
        cost: 111,
        points: 120
    },
    {
        id: 14,
        name: 'Converse Louie Lopez Pro',
        heat: 144,
        cost: 80,
        points: 100
    },{  
id: 15,
name: 'Under Armour HOVR Phantom',
heat: 54,
cost: 85,
points: 85
},
{  
id: 16,
name: 'New Balance 2002R',
heat: 132,
cost: 140,
points: 150
},
{  
id: 17,
name: 'New Balance 327',
heat: 120,
cost: 87,
points: 95
},
{  
id: 18,
name: 'Adidas Yeezy Boost 350',
heat: 176,
cost: 276,
points: 2000
},
{  
id: 19,
name: 'Converse One Star',
heat: 132,
cost: 112,
points: 150
},
{  
id: 20,
name: 'Reebok Classic',
heat: 67,
cost: 59,
points: 75
},
{  
id: 21,
name: 'New Balance 327',
heat: 137,
cost: 98,
points: 100
},
{  
id: 22,
name: 'Converse One Star',
heat: 160,
cost: 157,
points: 200
},
{  
id: 23,
name: 'Asics Gel Kayano',
heat: 54,
cost: 101,
points: 150
},
{  
id: 24,
name: 'Saucony Ride',
heat: 145,
cost: 143,
points: 200
},
{  
id: 25,
name: 'Nike KD 5',
heat: 439,
cost: 800,
points: 2000
},
{  
id: 26,
name: 'Air Jordan 1',
heat: 77,
cost: 108,
points: 239584
},{  
id: 27,
name: 'Converse Chuck 70',
heat: 148,
cost: 140,
points: 190000
},
{  
id: 28,
name: 'Adidas Yeezy Boost 350',
heat: 140,
cost: 196,
points: 75099
},
{  
id: 29,
name: 'Under Armour Curry 7',
heat: 67,
cost: 98,
points: 110
},
{  
id: 30,
name: 'Air Jordan 1',
heat: 214,
cost: 230,
points: 1000
},
{  
id: 31,
name: 'Adidas Terrex Free Hiker',
heat: 56,
cost: 129,
points: 140
},
{  
id: 32,
name: 'Nike Dunk SB',
heat: 296,
cost: 320,
points: 3000
},
{  
id: 33,
name: 'Adidas Dame 6',
heat: 36,
cost: 55,
points: 70
},{  
id: 34,
name: 'Nike Air Flightposite',
heat: 107,
cost: 160,
points: 180
},
{  
id: 35,
name: 'Nike Kyrie Low',
heat: 79,
cost: 89,
points: 100
},
{  
id: 36,
name: 'Puma Suede',
heat: 161,
cost: 375,
points: 410
},
{  
id: 37,
name: 'Gucci Slide',
heat: 268,
cost: 620,
points: 2300
},
{  
id: 38,
name: 'Gucci Rhyton',
heat: 147,
cost: 699,
points: 3500
},
{  
id: 39,
name: 'Balenciaga Speed',
heat: 141,
cost: 675,
points: 4500
},{  
id: 40,
name: 'Gucci Ace',
heat: 193,
cost: 680,
points: 4000
},{  
id: 41,
name: 'Balenciaga Runner',
heat: 193,
cost: 848,
points: 6000
},
{  
id: 42,
name: 'Balenciaga Triple S',
heat: 237,
cost: 750,
points: 5000
},
{  
id: 43,
name: 'Off-White Off-Court',
heat: 89,
cost: 300,
points: 2400
},
{  
id: 44,
name: 'Nike Free Flyknit',
heat: 206,
cost: 247,
points: 400
},
{  
id: 45,
name: 'Air Jordan 4',
heat: 352,
cost: 685,
points: 5500
},
{  
id: 46,
name: 'Crocs Clog',
heat: 123,
cost: 60,
points: 1999
},
{  
id: 47,
name: 'ASICS Metasprint',
heat: 189,
cost: 250,
points: 290
},
{  
id: 48,
name: 'Reebok Interval 96',
heat: 180,
cost: 132,
points: 132
},
{  
id: 49,
name: 'Adidas X Speedflow 1',
heat: 140,
cost: 128,
points: 128
},
{  
id: 50,
name: 'Louis Vuitton Trainer',
heat: 373,
cost: 1504,
points: 11500
},
{  
id: 51,
name: 'ASICS Gel Nandi 360',
heat: 109,
cost: 197,
points: 220
},
{  
id: 52,
name: 'Nike Air Foamposite',
heat: 882,
cost: 4559,
points: 74000
},
{  
id: 53,
name: 'Balenciaga Track',
heat: 424,
cost: 1290,
points: 9275
},
{  
id: 54,
name: 'Converse Run Star',
heat: 134,
cost: 108,
points: 320
},
{  
id: 55,
name: 'ASICS Fuji Lite 2',
heat: 176,
cost: 160,
points: 250
},
{  
id: 56,
name: 'Adidas The Road',
heat: 24,
cost: 60,
points: 175
},
{  
id: 57,
name: 'Adidas ZX 10000',
heat: 70,
cost: 68,
points: 125
},
{  
id: 58,
name: 'Puma Cell King',
heat: 34,
cost: 70,
points: 200
},
{  
id: 59,
name: 'Nike Force Zoom Trout 7',
heat: 119,
cost: 68,
points: 120
},
{  
id: 60,
name: 'Adidas Seeulater',
heat: 300,
cost: 336,
points: 1426
},
{  
id: 61,
name: 'Under Armour HOVR Apex',
heat: 581,
cost: 749,
points: 5000
},
{  
id: 62,
name: 'Adidas ZX 530',
heat: 31,
cost: 59,
points: 200
},
{  
id: 63,
name: 'New Balance 3000',
heat: 126,
cost: 85,
points: 100
},
{  
id: 64,
name: 'Adidas Shmoofoil Slide',
heat: 379,
cost: 112,
points: 600
},
{  
id: 65,
name: 'Jordan Trainer',
heat: 156,
cost: 200,
points: 600
}
];
