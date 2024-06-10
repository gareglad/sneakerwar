const cards = [
    {  
        id: 0,
        name: 'Airmax',
        heat: 136,
        cost: 153,
        points: 2000
    },{  
        id: 1,
        name: 'Airmax',
        heat: 136,
        cost: 153,
        points: 2000
    },{
        id: 2,
        name: 'Tigerstrike',
        heat: 303,
        cost: 378,
        points: 12000
    },
    {   
        id: 3,
        name: 'Jumpjack',
        heat: 204,
        cost: 230,
        points: 2100
    },
    {   
        id: 4,
        name: 'Rocketboost',
        heat: 247,
        cost: 145,
        points: 9009
    },
    {   
        id: 5,
        name: 'Elephase',
        heat: 169,
        cost: 200,
        points: 2000
    },
    {   
        id: 6,
        name: 'Icesole',
        heat: 295,
        cost: 499,
        points: 9000
    },
    {   
        id: 7,
        name: 'Nestlace',
        heat: 144,
        cost: 136,
        points: 20000
    },
    {   
        id: 8,
        name: 'Pianostep',
        heat: 433,
        cost: 600,
        points: 10000
    },
    {   
        id: 9,
        name: 'Vacc-kick',
        heat: 275,
        cost: 490,
        points: 19000
    },
    {   
        id: 10,
        name: 'Riverrun',
        heat: 722,
        cost: 1340,
        points: 25000
    },
    {   
        id: 11,
        name: 'Candlesprint',
        heat: 207,
        cost: 273,
        points: 17000
    },
    {   
        id: 12,
        name: 'Cloudfly',
        heat: 100,
        cost: 145,
        points: 20798
    },
    {
        id: 13,
        name: 'Kiteloop',
        heat: 195,
        cost: 111,
        points: 120
    },
    {
        id: 14,
        name: 'Ladderjump',
        heat: 144,
        cost: 80,
        points: 100
    },{  
        id: 15,
        name: 'Earcush',
        heat: 54,
        cost: 85,
        points: 85
    },
    {  
        id: 16,
        name: 'Glovetread',
        heat: 132,
        cost: 140,
        points: 150
    },
    {  
        id: 17,
        name: 'Quiltfit',
        heat: 120,
        cost: 87,
        points: 95
    },
    {  
        id: 18,
        name: 'Quantum Boost 350',
        heat: 176,
        cost: 276,
        points: 2000
    },
    {  
        id: 19,
        name: 'Nova Star',
        heat: 132,
        cost: 112,
        points: 150
    },
    {  
        id: 20,
        name: 'Retro Classic',
        heat: 67,
        cost: 59,
        points: 75
    },
    {  
        id: 21,
        name: 'Fusion 327',
        heat: 137,
        cost: 98,
        points: 100
    },
    {  
        id: 22,
        name: 'Nova Star',
        heat: 160,
        cost: 157,
        points: 200
    },
    {  
        id: 23,
        name: 'Gel Kinetic',
        heat: 54,
        cost: 101,
        points: 150
    },
    {  
        id: 24,
        name: 'RideWave',
        heat: 145,
        cost: 143,
        points: 200
    },
    {  
        id: 25,
        name: 'KD Vortex',
        heat: 439,
        cost: 800,
        points: 2000
    },
    {  
        id: 26,
        name: 'AeroStrike 1',
        heat: 77,
        cost: 108,
        points: 239584
    },{  
        id: 27,
        name: 'Chuck Zenith 70',
        heat: 148,
        cost: 140,
        points: 190000
    },
    {  
        id: 28,
        name: 'Quantum Boost 350',
        heat: 140,
        cost: 196,
        points: 75099
    },
    {  
        id: 29,
        name: 'Curry Lightning 7',
        heat: 67,
        cost: 98,
        points: 110
    },
    {  
        id: 30,
        name: 'AeroStrike 1',
        heat: 214,
        cost: 230,
        points: 1000
    },
    {  
        id: 31,
        name: 'Terrex Hiker',
        heat: 56,
        cost: 129,
        points: 140
    },
    {  
        id: 32,
        name: 'Dunk SB X',
        heat: 296,
        cost: 320,
        points: 3000
    },
    {  
        id: 33,
        name: 'Dame Blaze 6',
        heat: 36,
        cost: 55,
        points: 70
    },{  
        id: 34,
        name: 'Flightposite Z',
        heat: 107,
        cost: 160,
        points: 180
    },
    {  
        id: 35,
        name: 'Kyrie Low Pro',
        heat: 79,
        cost: 89,
        points: 100
    },
    {  
        id: 36,
        name: 'Suede Rush',
        heat: 161,
        cost: 375,
        points: 410
    },
    {  
        id: 37,
        name: 'Elite Slide',
        heat: 268,
        cost: 620,
        points: 2300
    },
    {  
        id: 38,
        name: 'Rhyton Glide',
        heat: 147,
        cost: 699,
        points: 3500
    },
    {  
        id: 39,
        name: 'SpeedWave',
        heat: 141,
        cost: 675,
        points: 4500
    },{  
        id: 40,
        name: 'Ace Rush',
        heat: 193,
        cost: 680,
        points: 4000
    },{  
        id: 41,
        name: 'Runner Fusion',
        heat: 193,
        cost: 848,
        points: 6000
    },
    {  
        id: 42,
        name: 'Triple S Max',
        heat: 237,
        cost: 750,
        points: 5000
    },
    {  
        id: 43,
        name: 'Off-Court Surge',
        heat: 89,
        cost: 300,
        points: 2400
    },
    {  
        id: 44,
        name: 'Free Flyknit Pro',
        heat: 206,
        cost: 247,
        points: 400
    },
    {  
        id: 45,
        name: 'Volt Apex 4',
        heat: 352,
        cost: 685,
        points: 5500
    },
    {  
        id: 46,
        name: 'Clog Max',
        heat: 123,
        cost: 60,
        points: 1999
    },
    {  
        id: 47,
        name: 'Metasprint X',
        heat: 189,
        cost: 250,
        points: 290
    },
    {  
        id: 48,
        name: 'Interval 96',
        heat: 180,
        cost: 132,
        points: 132
    },
    {  
        id: 49,
        name: 'Speedflow 1',
        heat: 140,
        cost: 128,
        points: 128
    },
    {  
        id: 50,
        name: 'Luxe Trainer',
        heat: 373,
        cost: 1504,
        points: 11500
    },
    {  
        id: 51,
        name: 'Gel Nandi 360',
        heat: 109,
        cost: 197,
        points: 220
    },
    {  
        id: 52,
        name: 'Foamposite Pro',
        heat: 882,
        cost: 4559,
        points: 74000
    },
      {  
        id: 53,
        name: 'Track Pro',
        heat: 424,
        cost: 1290,
        points: 9275
    },
    {  
        id: 54,
        name: 'Run Star Max',
        heat: 134,
        cost: 108,
        points: 320
    },
    {  
        id: 55,
        name: 'Fuji Lite 2',
        heat: 176,
        cost: 160,
        points: 250
    },
    {  
        id: 56,
        name: 'Road Runner',
        heat: 24,
        cost: 60,
        points: 175
    },
    {  
        id: 57,
        name: 'ZX TenThousand',
        heat: 70,
        cost: 68,
        points: 125
    },
    {  
        id: 58,
        name: 'Cell King Pro',
        heat: 34,
        cost: 70,
        points: 200
    },
    {  
        id: 59,
        name: 'Force Zoom 7',
        heat: 119,
        cost: 68,
        points: 120
    },
    {  
        id: 60,
        name: 'Seeulater Max',
        heat: 300,
        cost: 336,
        points: 1426
    },
    {  
        id: 61,
        name: 'HOVR Apex',
        heat: 581,
        cost: 749,
        points: 5000
    },
    {  
        id: 62,
        name: 'ZX 530',
        heat: 31,
        cost: 59,
        points: 200
    },
    {  
        id: 63,
        name: 'NovaStride 3000',
        heat: 126,
        cost: 85,
        points: 100
    },
    {  
        id: 64,
        name: 'Shmoofoil Slide',
        heat: 379,
        cost: 112,
        points: 600
    },
    {  
        id: 65,
        name: 'Trainer Pro',
        heat: 156,
        cost: 200,
        points: 600
    },
    {  
        id: 66,
        name: 'Zoom Kobe 1',
        heat: 717,
        cost: 3683,
        points: 6000
    },
    {  
        id: 67,
        name: 'Stan Pro',
        heat: 176,
        cost: 300,
        points: 350000
    },
    {  
        id: 68,
        name: 'Paris Glide',
        heat: 316,
        cost: 749,
        points: 2000
    },
       {  
        id: 69,
        name: 'NovaStride 574',
        heat: 513,
        cost: 750,
        points: 1200
    },
    {  
        id: 70,
        name: 'Lace Up Boot',
        heat: 427,
        cost: 1390,
        points: 13000
    },
    {  
        id: 71,
        name: 'Jordan 2012',
        heat: 191,
        cost: 250,
        points: 425
    },
    {  
        id: 72,
        name: 'Bistro Clog',
        heat: 509,
        cost: 250,
        points: 3420
    },
    {  
        id: 73,
        name: 'Adizero Afterburner',
        heat: 280,
        cost: 350,
        points: 1000
    },
    {  
        id: 74,
        name: 'Air Max 1/97',
        heat: 419,
        cost: 850,
        points: 3000
    },
    {  
        id: 75,
        name: 'Trainer Max',
        heat: 405,
        cost: 575,
        points: 4000
    },
    {  
        id: 76,
        name: 'Air Humara',
        heat: 407,
        cost: 534,
        points: 35000
    },
    {  
        id: 77,
        name: 'Zoom Kobe 5',
        heat: 348,
        cost: 690,
        points: 3999
    },
    {  
        id: 78,
        name: 'Stride 991',
        heat: 257,
        cost: 535,
        points: 1999
    },
    {  
        id: 79,
        name: 'Diadora Game',
        heat: 192,
        cost: 105,
        points: 200
    },
    {  
        id: 80,
        name: 'Rain Boot Pro',
        heat: 152,
        cost: 396,
        points: 4000
    },
    {  
        id: 81,
        name: 'Cortez Glide',
        heat: 432,
        cost: 597,
        points: 3000
    },
    {  
        id: 82,
        name: 'Pro Leather',
        heat: 297,
        cost: 154,
        points: 800
    },
    {  
        id: 83,
        name: 'Vulc Sneaker',
        heat: 212,
        cost: 208,
        points: 2000
    },
    {  
        id: 84,
        name: 'Pump Omni',
        heat: 148,
        cost: 222,
        points: 400000
    },
    {  
        id: 85,
        name: 'Bapesta X',
        heat: 242,
        cost: 405,
        points: 650000
    },
    {  
        id: 86,
        name: 'Ja 1',
        heat: 499,
        cost: 1124,
        points: 12500
    },
    {  
        id: 87,
        name: 'Air Huarache',
        heat: 757,
        cost: 1495,
        points: 17000
    },
    {  
        id: 88,
        name: 'AC 1',
        heat: 281,
        cost: 600,
        points: 2600
    },
    {  
        id: 89,
        name: 'Sole Fury',
        heat: 124,
        cost: 70,
        points: 250
    },
    {  
        id: 90,
        name: 'InstaPump Fury',
        heat: 21,
        cost: 70,
        points: 1450
    },
    {  
        id: 91,
        name: 'Son of Mars',
        heat: 231,
        cost: 280,
        points: 1000
    },
    {  
        id: 92,
        name: 'Style 43',
        heat: 332,
        cost: 328,
        points: 1000
    },
    {  
        id: 93,
        name: 'Fusion 1010',
        heat: 79,
        cost: 89,
        points: 350
    },
    {  
        id: 94,
        name: 'Wade Pack',
        heat: 310,
        cost: 343,
        points: 1500
    },
    {  
        id: 95,
        name: 'FlyBoost 3000',
        heat: 212,
        cost: 290,
        points: 1200
    },
    {  
        id: 96,
        name: 'PowerRun Elite',
        heat: 321,
        cost: 480,
        points: 2500
    },
    {  
        id: 97,
        name: 'QuickStep Nova',
        heat: 198,
        cost: 220,
        points: 1300
    },
    {  
        id: 98,
        name: 'Velocity Max',
        heat: 245,
        cost: 310,
        points: 1700
    },
    {  
        id: 99,
        name: 'StormRunner Pro',
        heat: 176,
        cost: 270,
        points: 1450
    },
    {  
        id: 100,
        name: 'HyperZoom 2.0',
        heat: 288,
        cost: 400,
        points: 2100
    }
];
