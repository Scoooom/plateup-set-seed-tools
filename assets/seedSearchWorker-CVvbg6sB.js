var Le=Object.defineProperty;var Oe=(b,g,G)=>g in b?Le(b,g,{enumerable:!0,configurable:!0,writable:!0,value:G}):b[g]=G;var C=(b,g,G)=>Oe(b,typeof g!="symbol"?g+"":g,G);(function(){"use strict";var te;var b=(l=>(l[l.Generic=0]="Generic",l[l.Dish=1]="Dish",l[l.PrimaryTheme=3]="PrimaryTheme",l[l.SecondaryTheme=4]="SecondaryTheme",l[l.Franchise=5]="Franchise",l[l.Special=6]="Special",l))(b||{}),g=(l=>(l[l.Base=0]="Base",l[l.Main=1]="Main",l[l.Extra=2]="Extra",l[l.Side=3]="Side",l[l.Starter=4]="Starter",l[l.Dessert=5]="Dessert",l[l.Null=6]="Null",l))(g||{}),G=`373996608,Ice Cream,1,,934171642,,-1533430406,False,False,5,1,2\r
-2075899,Breakfast,1,,,-523839730:1972879238:620897674,380220741:925796718:-266993023,True,False,0,0,5\r
-1199743580,Breakfast Beans,1,-2075899,,1972879238,1807525572:-957949759,False,False,2,1,0\r
1436814208,Breakfast Eggs,1,-2075899,,1972879238:2087693779,961148621,False,False,2,1,0\r
-1998930853,Breakfast Extras,1,-2075899,,2087693779,-712909563:-1097889139,False,False,2,1,0\r
-1778969928,Burgers,1,,,1972879238:620897674,759552160:380220741:385684499,True,False,0,-2,3\r
965292477,Cheeseburgers,1,-1778969928,,1972879238:2087693779:620897674,759552160:380220741:385684499:-117339838,False,False,2,1,0\r
-1091625127,Fresh Patties,1,-1778969928,,1972879238:2087693779:620897674,759552160:380220741:961148621:-484165118,False,False,2,1,0\r
1298035216,Burger Toppings,1,-1778969928,,1972879238:2087693779:620897674,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0\r
1626323920,Hot Dogs,1,,,1972879238:620897674,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0\r
1743900205,Fish,1,,,1972879238:620897674,-609358791:380220741:-1735137431,True,False,0,1,5\r
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238:620897674,380220741:925796718:961148621,True,False,1,1,8\r
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0\r
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0\r
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779:620897674,380220741,True,False,1,1,5\r
274986412,Oysters,1,1743900205,,2087693779:620897674,380220741,True,False,1,1,5\r
-643878280,Spiny Fish,1,1743900205,,2087693779:620897674,380220741,True,False,1,1,5\r
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-905438738:-266993023,False,False,5,1,3\r
-133939790,Pies,1,,,1972879238:-523839730:620897674,925796718:-484165118:380220741:-266993023,True,False,0,1,8\r
-1992316049,Mushroom Pies,1,-133939790,,2087693779:1972879238:-523839730,-1097889139:925796718,False,False,1,1,0\r
-1802123036,Vegetable Pies,1,-133939790,,2087693779:1972879238:-523839730,925796718:-452101383:-1573812073,False,False,1,1,0\r
1570910782,Apple Salad,1,1356267749,,2087693779:620897674,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,8\r
1356267749,Salad,1,,,2087693779:620897674,1193867305:-712909563:380220741,True,False,0,-1,3\r
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,10\r
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0\r
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,8\r
-959076098,Steak,1,,,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
-953651922,Steak Sauce - Mushroom,1,-959076098,,1972879238:2087693779,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0\r
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,1972879238,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0\r
-1192928429,Steak Topping - Mushroom,1,-959076098,,2087693779,-1097889139,False,False,2,1,0\r
-851525606,Steak Topping - Tomato,1,-959076098,,2087693779,-712909563,False,False,2,1,0\r
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,8\r
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,5\r
-1653221873,Stir Fry,1,,,2087693779:1972879238:620897674,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
-204178430,Steak Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1,1,0\r
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1\r
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,2\r
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1\r
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,3\r
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,3\r
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,3\r
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,3\r
550743424,Pizza,1,,,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741:-266993023,True,False,0,0,5\r
1434421325,Mushroom Pizza,1,550743424,,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0\r
-2071275506,Onion Pizza,1,550743424,,2087693779:1972879238:-523839730:620897674,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0\r
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3,1,2\r
1642577536,Herd Mentality,0,,,,,False,False,6,0,0\r
-1737101581,Health and Safety,0,,,,,False,False,6,0,0\r
-2040314977,Picky Eaters,0,,,,,False,False,6,0,0\r
73422455,Tipping Culture,0,,,,,False,False,6,0,0\r
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3,1,3\r
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718:-266993023,False,False,5,1,3\r
1393945424,Pumpkin Seed,1,,,1972879238,-1055654549,False,True,4,1,3\r
1984233383,Pumpkin Soup,1,,,1972879238,-266993023:-2042103798:-1055654549:-957949759,False,True,4,1,2\r
1838568431,Trick - Nasty Nightmares,6,,,,,False,False,6,1,0\r
61056284,Trick - Risky Reservations,6,,,,,False,False,6,1,0\r
2112990883,Trick - Freak Fires,6,,,,,False,False,6,2,0\r
-1477157706,Trick - Mysterious Messes,6,,,,,False,False,6,1,0\r
-209485820,Trick - Dark Deliberations,6,,,,,False,False,6,1,0\r
83673522,Trick - Spooky Solos,6,,,,,False,False,6,1,0\r
1139286658,Trick - Pyro Patrons,6,,,,,False,False,6,2,0\r
79859072,Trick - Cowardly Customers,6,,,,,False,False,6,1,0\r
-2123879305,Trick - Full of Friends,6,,,,,False,False,6,1,0\r
-1895806374,Trick - Grand Gesture,6,,,,,False,False,6,1,0\r
-269971294,Trick - Frightful Fluff,6,,,,,False,False,6,1,0\r
1892828942,Trick - Immortal Impatience,6,,,,,False,False,6,2,0\r
524188336,Trick - Foggy Food,6,,,,,False,False,6,1,0\r
797208634,Trick - Vanishing Valuables,6,,,,,False,False,6,1,0\r
561747534,Trick - Careful Conveyance,6,,,,,False,False,6,1,0\r
-1921275517,Trick - Tiring Times,6,,,,,False,False,6,1,0\r
319209671,Community,6,,,,,False,False,6,1,0\r
536093200,Nut Roast,1,1551533879,,2087693779:1972879238:620897674,1834063794:380220741:-2042103798,True,False,1,1,5\r
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1\r
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,2\r
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,2\r
12170609,Cherry Pies,1,,,1972879238,148543530:925796718:-266993023,False,False,5,1,3\r
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1\r
1551533879,Turkey,1,,,1972879238:620897674,-1506824829:380220741,True,False,0,1,5\r
-361249036,Christmas Rush,6,,,,,False,False,6,0,0\r
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,3\r
1398180456,Turkey - Cranberry Sauce,1,1551533879,,2087693779,735786885:-2133205155,False,False,2,1,0\r
-1460640973,Turkey - Gravy,1,1551533879,,1972879238,-2042103798:-957949759:-266993023,False,False,2,1,0\r
-1243742384,Turkey - Stuffing,1,1551533879,,2087693779:1972879238:-523839730,-2042103798:925796718:-266993023,False,False,2,2,0\r
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0\r
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,2\r
-437161441,Bamboo Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1,1,0\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779:620897674,925796718:-484165118:-452101383:380220741:-266993023,True,False,0,2,8\r
137627410,Seaweed,1,367917843,,1972879238,595306349,False,False,2,1,0\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2\r
1642878331,Mushroom Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1,1,0\r
1064343768,Stir Fry - Soy Sauce,1,-1653221873,,,-471813067,False,False,2,1,0\r
-2106646073,Couples,6,,,,,False,False,6,0,0\r
2028238661,Double Dates,0,-2106646073,,,,False,False,6,0,0\r
587399881,First Dates,0,-2106646073,,,,False,False,6,0,0\r
251686519,Double Brew,0,746549422,,,,False,False,6,0,0\r
2079359756,Slow Brew Coffee,1,746549422:16318784,,,,False,False,6,0,0\r
1103885337,Cake Stand,1,16318784:16318784,,,143484231,False,False,2,1,0\r
16318784,Black Coffee,1,,,-1316622579,-1609758240,False,False,0,-2,1\r
-740215310,Extra Milk,1,16318784,,,120342736,False,False,2,1,0\r
-696561631,Extra Sugar,1,16318784,,,-2133205155,False,False,2,1,0\r
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,2,1,2\r
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,2,1,2\r
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023:-266993023,False,False,2,1,3\r
1316998108,Sponge Cake,1,1113735761,,1972879238:-523839730,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
1609120418,Brownies,1,1113735761,,1972879238:-523839730,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,0\r
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,3\r
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,3\r
627241196,Cupcake,1,1113735761,,1972879238:-523839730,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
-1166412657,Doughnut,1,1113735761,,-523839730:1972879238,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,0\r
1113735761,Cakes,0,,,1972879238:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779:620897674,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,8\r
803049136,Lasagne,1,-1501485763:1651927267,,1972879238:1972879238:-523839730:620897674,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,10\r
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779:620897674,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,8\r
1764920765,Spaghetti,1,,,1972879238:2087693779:620897674,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
934171642,Sundaes,1,,373996608,,-1533430406:602693523,False,False,0,1,3\r
-690833761,Giant Sundaes,1,934171642,,,,False,False,5,1,3\r
431260200,Sundae Syrups,1,934171642,,,825737084:483880621,False,False,2,1,0\r
1879652468,Sundae Toppings,1,934171642,,2087693779,148543530:1834063794,False,False,2,1,0\r
-1272159363,Sandwiches,1,,,2087693779:-523839730:1972879238,925796718:-1673135814:1193867305:-712909563:-266993023,True,False,0,1,3\r
641008296,Club Sandwiches,1,-72176411:-778718372,,,-1506824829:961148621:-1963699221,True,False,2,2,5\r
-1795285445,Giant Sandwiches,1,-1272159363,,,,True,False,2,2,3\r
-72176411,Toast Sandwich,1,-1272159363,,1972879238,,True,False,2,1,5\r
-469306490,Sandwich - Cheese,1,-1272159363,,2087693779,-117339838,False,False,2,1,0\r
525953646,Sandwich - Eggs,1,-1272159363,,2087693779:1972879238,961148621,False,False,2,1,0\r
-778718372,Sandwich - Mayo,1,-1272159363,,2087693779:-523839730,961148621:-1963699221,False,False,2,1,0\r
368792675,Sandwich - Toppers,1,-1272159363,,,-1434800013:-74499940,False,False,2,1,0\r
506626805,Tacos,1,,,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
675343178,Tacos - Cheese,1,506626805,,2087693779,-117339838,False,False,2,1,0\r
-2122069505,Tacos - Lettuce,1,506626805,,2087693779,1193867305,False,False,2,1,0\r
706991842,Tacos - Onion,1,506626805,,2087693779,-2042103798,False,False,2,1,0\r
-1656665053,Tacos - Tomato,1,506626805,,2087693779,-712909563,False,False,2,1,0\r
2055765569,Double Helpings,0,-347199069,,,,False,False,6,1,0\r
-347199069,All You Can Eat,0,,,,,False,False,6,2,0\r
233335391,Personalised Waiting,0,,,,,False,False,6,0,0\r
-1815978981,Closing Time?,0,,,,,False,False,6,0,0\r
-287956430,Leisurely Eating,0,,,,,False,False,6,1,0\r
220354841,Sedate Atmosphere,0,,,,,False,False,6,0,0\r
-37551439,Dinner Rush,0,,1958825350,,,False,False,6,0,0\r
-2112255403,Flexible Dining,0,-1183014556,,,,False,False,6,0,0\r
-1747821833,Individual Dining,0,,-1183014556,,,False,False,6,0,0\r
-523195599,Large Groups,0,-1183014556,,,,False,False,6,0,0\r
-1183014556,Medium Groups,0,,-1747821833,,,False,False,6,0,0\r
165138001,Photographic Memory,0,,,,,False,False,6,0,0\r
-28708234,Empathy,0,,,,,False,False,6,0,0\r
-1617744928,Blindfolded Chefs,0,,,,,False,False,6,0,0\r
1530184692,Instant Service,0,,1989028383:746549422,,,False,False,6,0,0\r
113582858,Discounts,0,,,,,False,False,6,0,0\r
-913531466,Victorian Standards,0,,,,,False,False,6,0,0\r
-53330922,Lunch Rush,0,,1958825350,,,False,False,6,0,0\r
-491994319,Splash Zone,0,,,,,False,False,6,0,0\r
1151685289,Relaxed Atmosphere,0,,,,,False,False,6,0,0\r
73387665,Advertising,0,1765310572,,,,False,False,6,0,0\r
1765310572,Advertising,0,,,,,False,False,6,0,0\r
2079763934,Morning Rush,0,,1958825350,,,False,False,6,0,0\r
1914014233,Simplicity,0,,,,,False,False,6,0,0\r
-534291083,High Expectations,0,,,,,False,False,6,0,0\r
-957080051,High Standards,0,,1356267749,,,False,False,6,0,0\r
1103452725,High Quality,0,,,,,False,False,6,0,0\r
-1857686620,Affordable,3,,,,,False,False,6,0,0\r
1293847744,Charming,3,,,,,False,False,6,0,0\r
-1323758054,Exclusive,3,,,,,False,False,6,0,0\r
-1641333859,Formal,3,,,,,False,False,6,0,0\r
409052852,Variety,5,,319209671:16318784,,,False,False,6,0,0\r
-1205203705,Careful Accounting,5,,,,,False,False,6,-2,0\r
-947047181,Mandatory Tips,5,,,,,False,False,6,-2,0\r
1298492736,Grabber,5,,,,,False,False,6,-2,0\r
1173444265,Wash Basin,5,,,,,False,False,6,-2,0\r
-1096314451,Savings,5,,,,,False,False,6,-2,0\r
2022427578,Reincarnation,5,,,,,False,False,6,-2,0\r
-401283600,Preparation Time,5,,,,,False,False,6,-2,0\r
-357483693,Double Homework,5,,,,,False,False,6,-2,0\r
868780472,Catalogue,5,,,,,False,False,6,-2,0\r
-1418317596,Coupons,5,,,,,False,False,6,-2,0\r
-98765415,Supplier Error,5,,,,,False,False,6,-2,0\r
1618418478,Bootstrapping,5,,,,,False,False,6,-2,0\r
1543829883,Second Helpings,5,,,,,False,False,6,-2,0\r
-1010143518,Loyal Customer,5,,,,,False,False,6,-2,0\r
-1269806478,High Tech Suppliers,5,,,,,False,False,6,-2,0\r
1818403570,Conveyors,5,,,,,False,False,6,-2,0\r
-1121427945,Coffee Tables,5,,,,,False,False,6,-2,0\r
1101419251,Floor Protectors,5,,,,,False,False,6,-2,0\r
-220105135,Flower Pots,5,,,,,False,False,6,-2,0\r
-178381693,Metal Table,5,,,,,False,False,6,0,0\r
-373772933,Simple Cloth Table,5,,,,,False,False,6,0,0\r
`,oe=`-959076098,Steak,1,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779:620897674,1193867305:-712909563:380220741,True,False,0,-1,3\r
550743424,Pizza,1,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779:620897674,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,0,-2,1\r
-1778969928,Burgers,1,1972879238:620897674,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,1972879238:620897674,-1506824829:380220741,True,False,0,1,5\r
-1272159363,Sandwiches,1,2087693779:-523839730:1972879238,925796718:-1673135814:1193867305:-712909563,True,False,0,1,3\r
-133939790,Pies,1,1972879238:-523839730:620897674,925796718:-484165118:380220741,True,False,0,1,8\r
1113735761,Cakes,0,1972879238:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779:620897674,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
934171642,Sundaes,1,,-1533430406:602693523,False,False,0,1,3\r
1743900205,Fish,1,1972879238:620897674,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238:620897674,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:1972879238:620897674,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238:620897674,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`;const A=G.trim().split(/\r?\n/).filter(l=>l).map(l=>{var H,U;const[e,s,a,F,n,r,u,i,o,t,c,p]=l.split(","),T=Number(e),f=Number(a),h=F!=null&&F.length?F.split(":").map(w=>Number(w)):[],d=n.length?n.split(":").map(w=>Number(w)):[],m=r!=null&&r.length?(H=r==null?void 0:r.split(":"))==null?void 0:H.map(w=>Number(w)):[],y=u!=null&&u.length?(U=u==null?void 0:u.split(":"))==null?void 0:U.map(w=>Number(w)):[],B=i==="True",N=o==="True",S=Number(t),v=Number(c),O=Number(p);return{ID:T,Name:s,UnlockGroup:f,Requires:h,BlockedBy:d,RequiredProcesses:m,IngredientProviders:y,isMain:B,isStarterOrSide:N,DishType:S,CustomerMultiplier:v,DishValue:O}});function x(l,e=!0){const s=e&&l.some(a=>a.Name==="Community"||a.Name==="Lake");return A.filter(a=>{if(l.some(F=>F.ID===a.ID)||a.BlockedBy.some(F=>l.some(n=>n.ID===F))||a.Requires.some(F=>!l.some(n=>n.ID===F)))return!1;if(a.isStarterOrSide)if(l.some(F=>F.isMain)){if(l.length&&l[0].DishType===g.Dessert)debugger}else return!1;return!(!s&&a.DishType===g.Base)}).sort((a,F)=>a.ID-F.ID)}const ue=[...[{ID:447437163,Name:"Country",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},A.filter(l=>l.Name==="Community")[0],A.filter(l=>l.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},A.filter(l=>l.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((l,e)=>l.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey","Sundaes"].map(l=>A.filter(e=>e.Name===l)[0]);const ce=oe.trim().split(`\r
`).filter(l=>l).map(l=>{var N,S;const[e,s,a,F,n,r,u,i,o,t]=l.split(","),c=Number(e),p=Number(a),T=F!=null&&F.length?(N=F==null?void 0:F.split(":"))==null?void 0:N.map(v=>Number(v)):[],f=n!=null&&n.length?(S=n==null?void 0:n.split(":"))==null?void 0:S.map(v=>Number(v)):[],h=r==="True",d=u==="True",m=Number(i),y=Number(o),B=Number(t);return{ID:c,Name:s,UnlockGroup:p,Requires:[],BlockedBy:[],RequiredProcesses:T,IngredientProviders:f,isMain:h,isStarterOrSide:d,DishType:m,CustomerMultiplier:y,DishValue:B}}).sort((l,e)=>l.Name<e.Name?-1:1),M={};for(const l of A)M[l.Name]=l;for(const l of ce)M[l.Name]=l;for(const l of ue)M[l.Name]=l;M.Coffee=M["Black Coffee"],M.Community.AKA="Autumn",M["Christmas Rush"].AKA="North Pole",M.Couples.AKA="Romantic",M["Cherry Pie"]=M["Cherry Pies"],M["Mushroom Pie"]=M["Mushroom Pies"];class I{constructor(e,s){C(this,"fixedSeed");C(this,"instance");C(this,"random");typeof e=="string"&&(e=he(e)),this.fixedSeed=e,this.instance=s,this.random=new q(e+Math.imul(124192293,s))}useSubcontext(e){return new I(this.fixedSeed,124192293*e+this.instance)}}class q{constructor(e){C(this,"seed");const s=u=>Math.imul(1812433253,u)+1>>0,a=e>>0,F=s(a),n=s(F),r=s(n);this.seed=[a,F,n,r]}get value(){let e=this.seed.shift(),s=this.seed[2];return e^=e<<11,e^=e>>>8,s^=s>>>19,s=(s^e)>>0,this.seed.push(s),s}range(e,s){return(this.value>>>0)%(s-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function he(l){const s=new TextEncoder().encode(l);let a=5381,F=s.length;for(;F--;)a=(a<<5)+a+s[F];return a>>0}function J(l,e,s){return new I(s,l*1231231+e)}class _{constructor(){C(this,"encourageGroups",[b.Special])}GetOptions(e,s,a){const F=a.random;let n=0;for(s!==15&&(n=this.getPad(e,s));n--;)F.value;let r=this.sortCandidates(e,s,a.random);const[u,i]=this.getUnlockGroups(s);let o=null,t=null;for(const c of r)if(!(c.UnlockGroup!==u&&c.UnlockGroup!==i)&&(o===null||o.UnlockGroup!==u&&c.UnlockGroup===u?o=c:(t===null||t.UnlockGroup!==i&&c.UnlockGroup===i)&&(t=c),o&&o.UnlockGroup===u&&t&&t.UnlockGroup===i))break;return[o,t]}getPad(e,s){if(s===15)return 0;let a=x(e).length+1;return s===5&&(a*=2),a}getCandidates(e,s){return x(e)}sortCandidates(e,s,a){let F=this.getCandidates(e,s),n=W(F,a);return a.valueFloat<.5&&n.sort((u,i)=>{let o=0;return E(u)&&o--,E(i)&&o++,o}),n}getUnlockGroups(e){return e===15?[b.Franchise,b.Franchise]:e===5?[b.PrimaryTheme,b.PrimaryTheme]:[b.Dish,b.Generic]}}class de extends _{getPad(e,s){let a=x(e,!1).length+1;return s!==5&&(a*=2),a}sortCandidates(e,s,a){let F=this.getCandidates(e,s),n=W(F,a);return a.valueFloat<.1&&n.sort((i,o)=>{let t=0;return i.Requires.length&&t--,o.Requires.length&&t++,t}),n}}class X extends _{constructor(){super(...arguments);C(this,"ThanksgivingCards",["Turkey","Nut Roast"])}getPad(s,a){if(a===15)return 0;let F=x(s,!1).length+1;if(a===5){let n=x(s);F+=n.length+2}return F}getCandidates(s,a){return a===5||a===15?x(s,!1):x(s)}sortCandidates(s,a,F){let n=this.getCandidates(s,a),r=W(n,F);return F.valueFloat<.5&&r.sort((o,t)=>{let c=0;return E(o,!1)&&c--,E(t,!1)&&c++,c}),a!==5&&a!==15&&F.valueFloat<.25&&r.sort((t,c)=>{let p=0;return this.ThanksgivingCards.includes(t.Name)&&p++,this.ThanksgivingCards.includes(c.Name)&&p--,p}),r}getUnlockGroups(s){return s===15?[b.Franchise,b.Franchise]:s===5?[b.PrimaryTheme,b.PrimaryTheme]:[b.Dish,b.Dish]}}class fe extends X{constructor(){super(...arguments);C(this,"ThanksgivingCards",["Dumplings","Mandarin Starter","Bamboo","Stir Fry"])}}function W(l,e){debugger;return l.map(a=>[a,e.valueFloat]).sort((a,F)=>a[1]-F[1]).map(a=>a[0])}class Te{constructor(e){C(this,"cards");C(this,"unlockPack");C(this,"seed");this.cards=[],this.unlockPack=new _,this.seed=e}addCard(e){if(e!==void 0){switch(e.Name){case"Community":this.unlockPack=new X;break;case"Turbo":this.unlockPack=new de;break;case"Lake":this.unlockPack=new fe;break}this.cards.push(e)}}getUnlockOptions(e){const a=J(848292,e,this.seed).useSubcontext(1);return this.unlockPack.GetOptions(this.cards,e,a)}getValidUnlockOptions(e){let s=this.unlockPack.getCandidates(this.cards,e);const[a,F]=this.unlockPack.getUnlockGroups(e);s=s.filter(u=>u.UnlockGroup===a||u.UnlockGroup===F);let n=["All You Can Eat","Flexible Dining","Individual Dining","Large Groups","Leisurely Eating","Medium Groups"],r=new Set;return s=s.filter(u=>n.includes(u.Name)?!0:r.has(u.DishType)?!1:(r.add(u.DishType),!0)),s}getCustomers(e,s=1){return[]}getGroupSizeRange(e){if(this.cards.some(n=>n.Name==="Community")){const n=Math.floor((e-1)/3);return[n+1,n+2]}let a=1,F=2;return this.cards.some(n=>n.Name==="Individual Dining")?[1,1]:(this.cards.some(n=>n.Name==="Medium Groups")&&(a++,F+=2),this.cards.some(n=>n.Name==="Large Groups")&&(a+=2,F+=4),this.cards.some(n=>n.Name==="Flexible Groups")&&(a--,F++),[a,F])}}function E(l,e=!0){return l.UnlockGroup===b.Special||l.DishType===g.Main||l.DishType===g.Extra?!0:e?!!l.Requires.length:!1}const j={};function Y(l){const{starters:e,main:s,doubleOrderChance:a,desserts:F,sides:n,groupSizes:r}=l,u=[e,s,a,F,n,[...r].sort((f,h)=>f-h)].join("|");if(j[u])return j[u];let i=[0,0,0],o=[0,0,0,0],t=1-.75**n;if(e>0){i[0]=1;let f=1-.75**e;a===.5&&(f*=1.25,t*=1.25),o[0]=r.reduce((h,d)=>h+1+(d-1)*f,0)}const c=r.reduce((f,h)=>f+h);s&&(i[1]=1,o[1]=c),F>0&&(o[2]=c,s?(i[2]=1-.75**F,a===.5&&(i[2]*=1.25)):i[2]=1);let p=1;e>0&&(i[0]*=1+a,p*=1-a,o[0]*=i[0]),s&&(i[1]*=1+p*a,p*=1-a,o[1]*=i[1],o[3]=o[1]*t),F>0&&(i[2]*=1+p*a,p*=1-a,o[2]*=i[2]);const T=[i.map(f=>f*r.length),o];return j[u]=T,T}function pe(l){const{starters:e,main:s,doubleOrderChance:a,desserts:F,sides:n,groupSizes:r}=l;let u=[0,0,0],i=[0,0,0,0],o=1-.75**e,t=1-.75**F,c=1-.75**n;a===.5&&(o*=1.25,t*=1.25,c*=1.25);const p=d=>{u[0]++,i[0]++;for(let m=0;m<d-1;m++)Math.random()<o&&i[0]++},T=d=>{u[1]++,i[1]+=d;for(let m=0;m<d;m++)Math.random()<c&&i[3]++},f=d=>{u[2]++,i[2]+=d};for(const d of r){let m=!1;e>0&&(p(d),!m&&Math.random()<a&&(m=!0,p(d))),T(d),!m&&Math.random()<a&&(m=!0,T(d)),F>0&&Math.random()<t&&(f(d),!m&&Math.random()<a&&(m=!0,f(d)))}return[u,i]}function ge(l,e){return Math.floor(Math.random()*(e-l))+l}function ee(l,e){let s=l.length;for(;s-- >1;){let a=ge(0,s+1);[l[s],l[a]]=[l[a],l[s]]}return l}const me="abcdefghijklmnopqrstuvwxyz123456789",ke="12345678",Se="ab12",be="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(","),se=569249377;for(const l of be);const K={undefined:!1};for(const l of ke)K[l]=!0;function Ce(l="az"){const e=8-l.length;let s=new Array(e-1).fill(0);s.push(-1);const a=new Array(s.length).fill(Se).map(r=>ee(Array.from(r)).join("")),F=new Array(s.length).fill(me).map(r=>ee(Array.from(r)).join(""));return()=>{s[e-1]++;let r=[F[0]];for(let t=0;t<s.length-1;t++)K[r[t][s[t]]]?r.push(a[t+1]):r.push(F[t+1]);let u=s.length;for(;u--;){const t=r[u];if(s[u]<t.length)break;if(!u)return!1;s[u]=0,s[u-1]++}let i=l,o=F[0];for(let t=0;t<s.length;t++){const c=o[s[t]];i+=c,K[c]?o=a[t+1]:o=F[t+1]}return i}}function P(l){return l.length?l.reduce((e,s)=>e+s,0)/l.length:0}const De={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},ae={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(l=>ae[l]=!0);class ye{constructor(e,s=[],a=[]){C(this,"seed");C(this,"mapSize");C(this,"frontDoor");C(this,"startingCards");C(this,"cards");C(this,"playerCount");C(this,"turbo");C(this,"_actionInfoCacheByCards",{});C(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=s,this.cards=a,this.playerCount=De[this.mapSize],this.turbo=this.startingCards.some(F=>{if(F===void 0){console.log({startingCards:s});debugger}return F.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const s=this.getCardsByDay(e),a=this.getGroupSizes(e);let F=!1,n=!1,r=0,u=[],i=[],o=0,t=[],c=0,p=[];for(const S of s)switch(S.Name==="All You Can Eat"&&(F=!0),S.Name==="Double Helpings"&&(n=!0),S.DishType){case g.Dessert:o++,S.DishValue&&t.push(S.DishValue);break;case g.Starter:S.DishValue&&u.push(S.DishValue),r++;break;case g.Side:S.DishValue&&p.push(S.DishValue),c++;break;case g.Main:case g.Base:if(S.Name==="Sundaes"){debugger;t.push(4,5,5,6);break}S.Name==="Tacos"?(i.push(2),i.push(3)):S.DishValue&&i.push(S.DishValue)}let T=n?.5:F?.25:0,f=[0,0,0,0];if(f[0]=P(u),f[1]=P(i),f[2]=P(t),f[3]=P(p),n)for(let S=0;S<3;S++)f[S]&&(f[S]+=3);const[h,d]=Y({starters:r,main:!!f[1],doubleOrderChance:T,desserts:o,sides:c,groupSizes:a});let m=0;for(let S=0;S<d.length;S++)m+=d[S]*f[S];const y=le(this.playerCount),B=this.getBookingDeskCount(e),N=this.getBookingDeskMoney(e);return Math.ceil(y*(m+B*N))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const s=this.getCardsByDay(e),a=this.getGroupSizes(e);let F=!1,n=!1,r=0,u=[],i=[],o=0,t=[],c=0,p=[];for(const d of s)switch(d.Name==="All You Can Eat"&&(F=!0),d.Name==="Double Helpings"&&(n=!0),d.DishType){case g.Dessert:o++,d.DishValue&&t.push(d.DishValue);break;case g.Starter:d.DishValue&&u.push(d.DishValue),r++;break;case g.Side:d.DishValue&&p.push(d.DishValue),c++;break;case g.Main:case g.Base:if(!d.isMain){if(o++,d.Name==="Sundaes"){debugger;t.push(4,5,5,6);break}d.DishValue&&t.push(d.DishValue);break}d.Name==="Tacos"?(i.push(2),i.push(3)):d.DishValue&&i.push(d.DishValue)}let T=n?.5:F?.25:0,f=[0,0,0,0];if(f[0]=P(u),f[1]=P(i),f[2]=P(t),f[3]=P(p),n)for(let d=0;d<3;d++)f[d]&&(f[d]+=3);return Y({starters:r,main:!!f[1],doubleOrderChance:T,desserts:o,sides:c,groupSizes:a})}actionInfo(e){if(e===0)return 0;const s=this.getCardsByDay(e),a=e.toString()+":"+s.map(k=>k.Name).sort().join(","),F=this._actionInfoCacheByCards[a];if(F)return F;let n=0;const r={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let u=0;for(let k=0;k<s.length;k++)if(s[k].DishType!==g.Null){const D=s[k].Name;u=r[D]??20;break}let i=-1,o=[1,1,1],t=[[],[u],[],[]],c=0;const p=this.getGroupSizes(e);let T=!1,f=!1,h=0,d=[],m=[],y=0,B=[],N=0,S=[],v=!1,O=!1;for(const k of s){switch(k.Name==="All You Can Eat"&&(T=!0),k.Name==="Double Helpings"&&(f=!0),k.Name){case"Picky Eaters":v=!0;break;case"Leisurely Eating":O=!0,c+=2;break;case"Instant Service":for(let D=0;D<3;D++)o[D]--;break;case"Ice Cream":t[2].push(5.125);break;case"Cheese Board":t[2].push(10);break;case"Cherry Pies":t[2].push(11);break;case"Apple Pies":t[2].push(15);break;case"Pumpkin Pies":t[2].push(16);break;case"Carrot Soup":case"Meat Soup":t[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":o[0]=4,t[0].push(8);break;case"Broccoli Cheese Soup":t[0].push(5),o[0]=4;break;case"Pumpkin Seed":t[0].push(3*8);break;case"Bread":t[0].push(5*3);break;case"Mandarin Starter":t[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":t[3].push(2);break;case"Onion Rings":t[3].push(8);break;case"Corn on the Cob":t[3].push(6);break;case"Chips":t[3].push(7);break;case"Roast Potato":t[3].push(4);break}switch(k.DishType){case g.Dessert:y++,k.DishValue&&B.push(k.DishValue);break;case g.Starter:k.DishValue&&d.push(k.DishValue),h++;break;case g.Side:k.DishValue&&S.push(k.DishValue),N++;break;case g.Main:case g.Base:if(k.Name==="Sundaes"){debugger;B.push(4,5,5,6);break}k.Name==="Tacos"?(m.push(2),m.push(3)):k.DishValue&&m.push(k.DishValue);break;case g.Extra:k.Name==="Seaweed"?(t[1][0]+=1.75,i+=2):k.Name==="Dumpling - Soy Sauce"?t[1][0]+=.4:k.Name==="Breakfast Beans"?t[1][0]+=1+3/4:k.Name==="Breakfast Eggs"?t[1][0]+=6:k.Name==="Breakfast Extras"&&(i++,t[1][0]+=1.5*2),i++;break}}e>6&&(t[3]=[]),v&&(O&&!T||(t[1][0]+=2,i++));let H=f?.5:T?.25:0;n+=p.length*c;const[U,w]=Y({starters:h,main:!0,doubleOrderChance:H,desserts:y,sides:N,groupSizes:p});U.forEach((k,D)=>n+=k*o[D]);for(const k of t)for(let D=0;D<k.length;D++)i>0&&(k[D]+=i),i+=1;return w.forEach((k,D)=>{var ie;if((ie=t[D])!=null&&ie.length){if(!D){const Ee=Math.ceil(k/t[D].length/3);n+=Ee*t[D].reduce((Ve,ze)=>Ve+ze,0);return}n+=k*P(t[D])}}),this._actionInfoCacheByCards[a]=n,n}simulateMoney(e){if(e===0)return this.turbo?30:0;const s=this.getCardsByDay(e),a=this.getGroupSizes(e);let F=!1,n=!1,r=[[],[],[],[]];for(const h of s){if(h.Name==="All You Can Eat"&&(F=!0),h.Name==="Double Helpings"&&(n=!0),h.Name==="Sundaes")debugger;switch(h.DishType){case g.Main:case g.Base:if(h.Name==="Sundaes"){debugger;r[1].push(4,5,5,6),r[1].push(4,5,5,6),r[1].push(4,5,5,6),r[1].push(4,5,5,6),r[1].push(4,5,5,6),r[1].push(4,5,5,6);break}h.Name==="Tacos"?r[1].push(2.5):(h.DishValue&&r[1].push(h.DishValue),h.DishValue&&r[1].push(h.DishValue),h.DishValue&&r[1].push(h.DishValue),h.DishValue&&r[1].push(h.DishValue),h.DishValue&&r[1].push(h.DishValue),h.DishValue&&r[1].push(h.DishValue),h.DishValue&&r[1].push(h.DishValue),h.DishValue&&r[1].push(h.DishValue));break;case g.Dessert:if(h.Name==="Giant Sundaes"){debugger;r[1].push(5,6,6,6,7,7,7,8),r[1].push(5,6,6,6,7,7,7,8),r[1].push(5,6,6,6,7,7,7,8);break}h.DishValue&&r[2].push(h.DishValue);break;case g.Starter:h.DishValue&&r[0].push(h.DishValue);break;case g.Side:h.DishValue&&r[3].push(h.DishValue);break}}let u=n?.5:F?.25:0,i=0;n&&(i+=3);const[o,t]=pe({starters:r[0].length,main:!!r[1].length,doubleOrderChance:u,desserts:r[2].length,sides:r[3].length,groupSizes:a});let c=0;for(let h=0;h<t.length;h++){let d=t[h];for(;d--;){h<3&&(c+=i);let m=r[h][Math.floor(Math.random()*r[h].length)];m%1&&(Math.random()<m%1?m=Math.ceil(m):m=Math.floor(m)),c+=m}}const p=le(this.playerCount),T=this.getBookingDeskCount(e),f=this.getBookingDeskMoney(e);return Math.ceil(p*(c+T*f))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let s;this.turbo?s=e-1:(s=Math.max(0,Math.floor((e-1)/3)),e>5&&s++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,s)]}return this._cardsByDay[e]}getBookingDeskCount(e,s=1){const a=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(o=>o.Name==="Herd Mentality"))return Math.min(a,3)+1;const F=[],n=this.getCardsByDay(e);let r=1;(this.turbo||n.some(o=>o.Name==="Morning Rush"))&&F.push(.2),(this.turbo||n.some(o=>o.Name==="Lunch Rush"))&&F.push(.5),(this.turbo||n.some(o=>o.Name==="Dinner Rush"))&&F.push(.8);const u=s/this.getDayLength(e),i=.1/a;r+=a-1;for(let o=1;o<a;o++){const t=o/a,c=t-i-u,p=t+i+u;for(let T=F.length-1;T>=0;T--){const f=F[T];c<=f&&f<=p&&F.splice(T,1)}}return r+=F.length,r}getNonRushGroupCount(e){const s=this.getExpectedCustomers(e),a=this.getCardsByDay(e).filter(r=>r.Name==="Closing Time?").length*.2,F=this.getExpectedGroupSize(e),n=s*(1+a)/F;return Math.ceil(n)}getCustomerCount(e){return this.getGroupSizes(e).reduce((s,a)=>s+a,0)}getGroupSizes(e,s=0){const a=this.seed?J(1997821,e,this.seed).random:new q(Math.floor(Math.random()*4294967295)),F=this.getNonRushGroupCount(e),n=this.getCardsByDay(e).some(T=>T.Name==="Herd Mentality");let r=F,u=[],[i,o]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?o=i:this.seed==="_max"&&(i=o);{let T=r-1;for(;T--;)a.value}for(;r--;)u.push(a.range(i,o+1)),!n&&r!==F-1&&a.value;let t=this.turbo?3:this.getCardsByDay(e).filter(T=>ae[T.Name]).length,c;switch(s){case 0:c=Math.ceil(Math.max(1,F*.15));break;case 1:c=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));break;case 2:c=Math.ceil(Math.max(1,F*.15*1.5))}let p=t*c;for(;p--;)u.push(a.range(i,o+1));if(!this.seed||this.seed[0]==="_"){let T=i;for(let f=0;f<u.length;f++)u[f]=T,T++,T>o&&(T=i)}return u}getExpectedGroupSize(e){const s=this.getGroupSizeRange(e);return(s[0]+s[1])/2}getGroupSizeRange(e){let s=1,a=2;for(const F of this.getCardsByDay(e))switch(F.Name){case"Individual Dining":a--;break;case"Medium Groups":s++,a+=2;break;case"Large Groups":s+=2,a+=2;break;case"Flexible Dining":s--,a++;break;case"Community":const n=Math.floor((e-1)/3);s+=n,a+=n;break}return[s,a]}getExpectedCustomers(e){const s=this.getReductions(e),a=this.getDayLength(e),F=this.getPlayerModifier(),n=this.getCourseModifier(e),r=this.getDayRate(e),u=this.getCustomersPerHour(e),i=this.getAdvertisingModifier(e);return .85**s*(a/25*r*F)/n*u*i}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(a=>a.Name==="Advertising").length}getDayRate(e){let s=1;switch(e){case 1:s=1.25;break;case 2:s=1.5;break;default:s=1.5+.15*(e-3);break}return e>15&&(s+=.15*(e-15)**1.5),s}getCourseModifier(e){let s=1;const a=this.getCardsByDay(e);return a.some(F=>F.DishType===g.Dessert||F.Name==="Black Coffee"||F.Name==="Cakes"||F.Name==="Sundaes")&&(s+=.25),a.some(F=>F.DishType===g.Starter)&&(s+=.25),s}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let s=1;return this.turbo&&(s=1.5,s*=1+e/10),s}getReductions(e){return this.getCardsByDay(e).reduce((a,F)=>a+F.CustomerMultiplier,0)}getMapSize(){const s=new I(this.seed,5078598).useSubcontext(0).random.range(0,8);let a;switch(s){case 0:a="Small (2)";break;case 4:a="Medium (2)";break;case 1:case 5:a="Diner (1)";break;case 2:case 6:a="Large (3)";break;case 3:case 7:a="Huge (4)";break;default:throw new Error}return a}getLayoutInfo(){const s=new I(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,F;switch(s){case 0:F=70,a=2;break;case 4:F=84,a=2;break;case 1:case 5:F=60,a=1;break;case 2:case 6:F=9*13,a=3;break;case 3:case 7:F=12*16,a=4;break;default:throw new Error}return[a,F]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new q(new I(this.seed,98234234).useSubcontext(0).random.value),s=23;for(;s--;)e.value;return e.range(0,4)}}function le(l){switch(l){case 1:return 1.25;case 2:return 1.1;default:return 1}}var Me=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60,-1357906425\r
-1357906425,False,True,Conveyor Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,120,-1440053805\r
-1440053805,False,True,Rapid Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,60,505496455\r
1329097317,True,False,Mixer,False,False,,,64,0,0,False,False,60,505496455:-1440053805:-1357906425\r
-1013770159,True,False,Supplies,False,False,,,256,0,1,False,False,60,\r
2127051779,False,True,Compactor Bin,False,False,,,256,0,0,False,False,20,-1632826946\r
-1632826946,False,True,Composter Bin,False,False,,,256,0,0,False,False,20,-1855909480\r
-1855909480,False,True,Expanded Bin,False,False,,,256,0,0,False,False,20,2127051779\r
481495292,False,False,Starter Bin,False,False,,,256,0,0,False,False,20,\r
1551609169,True,False,Bin,False,False,,,256,0,0,False,False,20,2127051779:-1855909480:-1632826946\r
1286554202,True,False,Fire Extinguisher,False,False,,1972879238:-1706154991,256,0,0,False,False,20,\r
1351951642,True,False,Floor Buffer,False,False,,,256,0,0,False,False,120,-1723340146\r
1765889988,True,False,Kitchen Floor Protector,False,False,,,264,0,0,False,False,20,\r
-1495393751,False,True,Fast Mop,False,False,,,256,0,0,False,False,60,-2147057861\r
1776760557,False,True,Lasting Mop,False,False,,,256,0,0,False,False,60,-1723340146\r
-1993346570,True,False,Mop,False,False,,,256,0,0,False,False,20,-1495393751:1776760557\r
-751458770,False,False,Robot Buffer,False,False,,,256,0,0,False,False,250,\r
-1723340146,False,True,Robot Buffer,False,False,,,256,0,0,False,False,250,-2147057861\r
-2091039911,False,False,Robot Mop,False,False,,,256,0,0,False,False,250,\r
-2147057861,False,True,Robot Mop,False,False,,,256,0,0,False,False,250,-1723340146\r
-1609758240,True,False,Coffee Machine,True,False,,,32,0,0,False,False,20,\r
-17368064,False,False,,False,False,,,0,0,0,False,False,20,\r
1973114260,True,False,Conveyor,False,False,,,64,0,0,False,False,20,-1029710921\r
-1906799936,True,False,Combiner,False,False,,,64,0,0,False,False,60,-1462602185\r
-331651461,False,True,Grabber - Rotating,False,False,,,64,0,0,False,False,60,-1238047163\r
-1238047163,False,True,Smart Grabber,False,False,,,64,0,0,False,False,60,-331651461\r
-1029710921,False,True,Grabber,False,False,,,64,0,0,False,False,60,-1238047163:-331651461\r
-1462602185,True,False,Portioner,False,False,,,64,0,0,False,False,60,-1906799936\r
459840623,False,False,Teleporter,False,False,,,64,0,0,False,False,1250,\r
-1248669347,True,False,Counter,False,False,,,1,0,0,False,False,20,-1573577293:-1857890774\r
1365340297,False,False,Kneading Counter,False,False,,,0,0,0,False,False,20,\r
-1573577293,False,True,Workstation,False,False,,,32,0,0,False,False,40,-1857890774\r
620400448,True,False,Affordable Bin,False,False,,,2,2,0,False,False,30,\r
1830133512,True,False,Gumball Machine,False,False,,,2,2,0,False,False,30,\r
1724963734,True,False,Neon Sign,False,False,,,2,2,0,False,False,40,\r
371247235,True,False,Neon Sign,False,False,,,2,2,0,False,False,40,\r
230540973,True,False,Ceiling Light,False,False,,,2,2,0,False,False,40,\r
-1472471467,True,False,Stock Picture,False,False,,,2,2,0,False,False,30,\r
-2108088224,True,False,Dirty Floor Sign,False,False,,,2,2,0,False,False,30,\r
1569358344,True,False,Barrel,False,False,,,2,4,0,False,False,40,\r
-60168847,True,False,Bookcase,False,False,,,2,4,0,False,False,40,\r
-1941237931,True,False,Dartboard,False,False,,,2,4,0,False,False,30,\r
-441525746,True,False,Fireplace,False,False,,,2,4,0,False,False,100,\r
591400026,True,False,Rug,False,False,,,2,4,0,False,False,40,\r
-1628995120,True,False,Wall Light,False,False,,,2,4,0,False,False,30,\r
-1380985631,False,False,Banner,False,False,,,8192,0,0,False,False,0,\r
-4737636,False,False,Fairy Lights,False,False,,,8192,0,0,False,False,0,\r
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0,\r
-13481890,True,False,Candelabra,False,False,,,2,1,0,False,False,40,\r
1233091186,True,False,Chandelier,False,False,,,2,1,0,False,False,40,\r
-1180623135,True,False,Precious Flower,False,False,,,2,1,0,False,False,60,\r
642318074,True,False,Classical Globe,False,False,,,2,1,0,False,False,60,\r
-1486785449,True,False,Painting,False,False,,,2,1,0,False,False,40,\r
2076966627,True,False,Rug,False,False,,,2,1,0,False,False,40,\r
-972644436,True,False,Statue,False,False,,,2,1,0,False,False,100,\r
1551024733,True,False,Brand Mascot,False,False,,,2,8,0,False,False,40,\r
-1339970600,True,False,Tidy Plant,False,False,,,2,8,0,False,False,30,\r
908498444,True,False,Ceiling Light,False,False,,,2,8,0,False,False,40,\r
744277037,True,False,Abstract Lamp,False,False,,,2,8,0,False,False,30,\r
531866927,True,False,Vase,False,False,,,2,8,0,False,False,30,\r
1220439284,True,False,Indoor fountain,False,False,,,2,8,0,False,False,60,\r
668664567,True,False,Calm Painting,False,False,,,2,0,0,False,False,60,\r
756364626,True,False,Plant,False,False,,,2,0,0,False,False,60,\r
-648349801,False,False,Rug,False,False,,,2,0,0,False,False,60,\r
-1506601664,False,False,Drink Tap,False,False,,,0,0,0,False,False,20,\r
-2100580689,False,False,,False,False,,,0,0,0,False,False,20,\r
532998682,True,False,Dumbwaiter,False,False,,,64,0,0,False,False,60,459840623\r
892856538,False,False,,False,False,,,0,0,0,False,False,20,\r
-544237849,False,False,Beehive,False,False,,,0,0,0,False,False,20,\r
188952245,False,False,,False,False,,,0,0,0,False,False,20,\r
1921027834,True,False,Gas Limiter,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-770041014,True,False,Gas Override,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-1448690107,False,True,Danger Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,1266458729\r
1266458729,False,True,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,-1448690107\r
1154757341,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,5,\r
862493270,True,False,Hob,False,False,,1972879238:-1706154991,33,0,0,False,False,20,-1448690107:1266458729\r
-441141351,False,False,,False,False,,1972879238,32,0,0,False,False,20,\r
805530854,False,False,,False,False,,1972879238,0,0,0,False,False,60,\r
-60938940,False,False,Bookings Stand,False,False,,,0,0,0,False,False,60,\r
-63118559,True,False,Hosting Stand,False,False,,,8,0,0,False,False,60,\r
-1813414500,True,False,Display Stand,False,False,,,8,0,0,False,False,120,\r
1630557157,False,False,,False,False,,,0,0,0,False,False,20,\r
-1324288299,False,False,,False,False,,,0,0,0,False,False,20,\r
-374077567,False,False,,False,False,,,0,0,0,False,False,20,\r
147181555,False,False,,False,False,,,0,0,0,False,False,20,\r
31731938,False,False,,False,False,,,0,0,0,False,False,20,\r
1419995156,False,False,,False,False,,,0,0,0,False,False,20,\r
34773971,False,False,,False,False,,,0,0,0,False,False,20,\r
-1424385600,False,False,,False,False,,,0,0,0,False,False,20,\r
377065033,False,False,,False,False,,,0,0,0,False,False,20,\r
-483535085,False,False,,False,False,,,0,0,0,False,False,0,\r
1553046198,False,False,,False,False,,,0,0,0,False,False,20,\r
1063254979,False,False,,False,False,,,0,0,0,False,False,20,\r
1732122842,False,False,,False,False,,,0,0,0,False,False,20,\r
-1936421857,False,False,,False,False,,,0,0,0,False,False,20,\r
2041631136,False,False,,False,False,,,0,0,0,False,False,20,\r
949631021,False,False,,False,False,,,0,0,0,False,False,60,\r
-571205127,True,False,Blueprint Cabinet,False,False,,,2560,0,0,True,False,20,\r
-729493805,False,True,Copying Desk,False,False,,,512,0,0,False,False,120,1446975727\r
-272437832,False,False,Discount Desk,False,False,,,512,0,0,False,False,120,-729493805\r
1586911545,False,True,Discount Desk,False,False,,,512,0,0,False,False,120,-729493805\r
1446975727,False,True,Blueprint Desk,False,False,,,512,0,0,False,False,60,1586911545\r
1139247360,True,False,Research Desk,False,False,,,1536,0,0,True,False,40,1446975727:1586911545:-729493805\r
238041352,True,False,Booking Desk,False,True,,,8,0,0,False,False,0,\r
-1817838704,False,False,Extra Life,False,False,,,0,0,0,False,False,120,\r
136867583,False,False,Fast Food Terminal,False,False,,,8,0,0,False,False,60,\r
-246383526,False,True,Specials Terminal,False,False,,,8,0,0,False,False,60,\r
-1610332021,True,False,Ordering Terminal,False,False,,,8,0,0,False,False,60,-246383526\r
944301512,False,False,,False,False,,,0,0,0,False,False,20,\r
-1311702572,False,True,Microwave,False,False,,1972879238:-1706154991,32,0,0,False,False,120,\r
-1068749602,True,False,Oven,False,False,,1972879238:-1706154991,32,0,0,False,False,60,-1311702572\r
1147639502,False,False,Balloons,False,False,,,8192,0,0,False,False,0,\r
-71664252,False,False,Birthday Banner,False,False,,,8192,0,0,False,False,0,\r
-326328571,False,False,Piano,False,False,,,0,0,0,False,False,20,\r
-905438738,True,False,Apples,True,False,,,288,0,0,False,False,60,\r
1807525572,True,False,Beans,True,False,,,288,0,0,False,False,60,\r
269523389,True,False,Bone-in Meat,True,False,,,288,0,0,False,False,60,\r
-1573812073,True,False,Broccoli,True,False,,,288,0,0,False,False,60,\r
759552160,True,False,Burger Buns,True,False,,,288,0,0,False,False,60,\r
385684499,False,False,Patties,False,False,,,288,0,0,False,False,60,\r
-452101383,True,False,Carrots,True,False,,,288,0,0,False,False,60,\r
-117339838,True,False,Cheese,True,False,,,288,0,0,False,False,60,\r
961148621,True,False,Eggs,True,False,,,288,0,0,False,False,60,\r
-1735137431,False,False,Fish,False,False,,,288,0,0,False,False,60,\r
-609358791,False,False,Fish,False,False,,,288,0,0,False,False,60,\r
925796718,True,False,Flour,True,False,,,288,0,0,False,False,60,\r
-1132411297,True,False,Hot dog bun,True,False,,,288,0,0,False,False,60,\r
1799769627,True,False,Hot Dogs,True,False,,,288,0,0,False,False,60,\r
-1533430406,True,False,Ice Cream,True,False,,,288,0,0,False,False,60,\r
-965827229,True,False,Extra Ketchup,True,False,-965827229,,8,0,0,False,True,60,\r
1193867305,True,False,Lettuce,True,False,,,288,0,0,False,False,60,\r
-484165118,True,False,Meat,True,False,,,288,0,0,False,False,60,\r
-1097889139,True,False,Mushrooms,True,False,,,288,0,0,False,False,60,\r
-117356585,True,False,Extra Mustard,True,False,-117356585,,8,0,0,False,True,60,\r
1834063794,True,False,Nuts,True,False,,,288,0,0,False,False,60,\r
-1963699221,True,False,Oil,True,False,,,288,0,0,False,False,60,\r
-1434800013,True,False,Olives,True,False,,,288,0,0,False,False,60,\r
-2042103798,True,False,Onion,True,False,,,288,0,0,False,False,60,\r
44541785,True,False,Potato,True,False,,,288,0,0,False,False,60,\r
-1201769154,True,False,Rice,True,False,,,288,0,0,False,False,60,\r
-1507801323,True,False,Thick cut meat,True,False,,,288,0,0,False,False,60,\r
1800865634,True,False,Thin cut meat,True,False,,,288,0,0,False,False,60,\r
-712909563,True,False,Tomato,True,False,,,288,0,0,False,False,60,\r
-1506824829,True,False,Turkey,True,False,,,288,0,0,False,False,60,\r
-1353971407,True,False,Wine,True,False,,,288,0,0,False,False,60,\r
-101564005,False,False,,False,False,,,0,0,0,False,False,20,\r
-897970831,False,False,,False,False,,,0,0,0,False,False,20,\r
-996680732,False,False,Counter,False,False,,,0,0,0,False,False,5,\r
946079892,False,False,,False,False,,,0,0,0,False,False,60,\r
1171429989,False,False,,False,False,,,0,0,0,False,False,60,\r
161402590,False,False,,False,False,,,0,0,0,False,False,60,\r
739504637,False,True,Auto Plater,False,False,,,256,0,0,False,False,20,\r
1653145961,False,False,Dish Rack,False,False,,,0,0,0,False,False,20,\r
434150763,True,False,Dish Rack,False,False,,,16,0,0,False,False,20,\r
1270423542,False,False,,False,False,,,0,0,0,False,False,20,\r
-1474018107,False,False,,False,False,,,0,0,0,False,False,20,\r
380220741,False,False,Starter Plates,False,False,,,256,0,0,False,False,20,\r
1313469794,True,False,Plates,False,False,,,256,0,0,True,False,20,739504637\r
-957949759,True,False,Pot Stack,False,False,-957949759,,32,0,0,False,False,20,\r
235423916,True,False,Serving Boards,False,False,235423916,,256,0,0,False,False,20,\r
314862254,True,False,Woks,False,False,314862254,,0,0,0,False,False,60,\r
-1291027873,False,False,,False,False,,,0,0,0,False,False,20,\r
-214921468,False,False,,False,False,,,0,0,0,False,False,20,\r
-2135829561,False,False,,False,False,,,0,0,0,False,False,20,\r
-372462424,False,False,,False,False,,,0,0,0,False,False,20,\r
933445633,False,False,,False,False,,,0,0,0,False,False,20,\r
-1555334152,False,False,,False,False,,,0,0,0,False,False,20,\r
1980900762,False,False,,False,False,,,0,0,0,False,False,20,\r
1855052205,False,False,,False,False,,,0,0,0,False,False,20,\r
-68388422,False,False,,False,False,,,0,0,0,False,False,20,\r
-1200192498,False,False,,False,False,,,0,0,0,False,False,20,\r
-194750543,False,False,,False,False,,,0,0,0,False,False,20,\r
1911132834,False,False,,False,False,,,0,0,0,False,False,20,\r
1365126444,False,False,,False,False,,,0,0,0,False,False,20,\r
-1265562836,False,False,,False,False,,,0,0,0,False,False,20,\r
-2046940874,False,False,,False,False,,,0,0,0,False,False,20,\r
-923570273,False,False,,False,False,,,0,0,0,False,False,20,\r
-488268556,False,False,,False,False,,,0,0,0,False,False,20,\r
-548432204,False,False,,False,False,,,0,0,0,False,False,20,\r
-758567246,False,False,,False,False,,,0,0,0,False,False,20,\r
532701855,False,False,,False,False,,,0,0,0,False,False,20,\r
-1857890774,False,True,Freezer,False,False,,,4,0,0,False,False,20,-1573577293\r
-759808000,False,True,Frozen Prep Station,False,False,,,256,0,0,False,False,60,\r
1656358740,True,False,Prep Station,False,False,,,256,0,0,False,False,20,-759808000\r
-262439022,False,False,,False,False,,,0,0,0,False,False,20,\r
1890408483,False,False,,False,False,,,0,0,0,False,False,20,\r
639111696,True,False,Breadsticks,False,False,,,8,0,0,False,True,20,\r
1358522063,True,False,Candle Box,False,False,,,8,0,0,False,True,60,\r
221442949,True,False,Flower Pot,False,False,,,8,0,0,False,False,60,\r
1528688658,True,False,Napkins,False,False,,,8,0,0,False,True,60,\r
2080633647,True,False,Sharp Cutlery,False,False,,,8,0,0,False,True,60,\r
446555792,True,False,"Specials" Menu,False,False,,,8,0,0,False,True,60,\r
938247786,False,False,Chair,False,False,,,0,0,0,False,False,0,\r
1648733244,True,False,Coffee Table,False,False,,,8,0,0,False,False,40,\r
-1979922052,False,False,Chair,False,False,,,0,0,0,False,False,0,\r
-3721951,False,True,Bar Table,False,False,,,8,0,0,False,False,5,-34659638\r
-34659638,False,True,Table - Simple Cloth,False,False,,,8,0,0,False,False,60,-203679687\r
-203679687,False,True,Metal Table,False,False,,,8,0,0,False,False,60,-2019409936\r
-2019409936,False,True,Table - Fancy Cloth,False,False,,,8,0,0,False,False,60,-3721951\r
209074140,True,False,Dining Table,False,False,,,1,0,0,False,False,20,-34659638:-203679687:-2019409936:-3721951\r
1738351766,True,False,Rolling Pin,False,False,,-523839730,256,0,0,False,False,20,\r
624465484,True,False,Scrubbing Brush,False,False,,,256,0,0,False,False,20,\r
2023704259,True,False,Sharp Knife,False,False,,2087693779,256,0,0,False,False,20,\r
723626409,True,False,Trainers,False,False,,,256,0,0,False,False,60,\r
1796077718,True,False,Wellies,False,False,,,256,0,0,False,False,60,\r
230848637,True,False,Work Boots,False,False,,,256,0,0,False,False,60,\r
1129858275,True,False,Tray Stand,False,False,,,256,0,0,False,False,60,\r
-823922901,False,True,Dish Washer,False,False,,,16,0,0,False,False,60,1860904347\r
-214126192,False,True,Wash Basin,False,False,,620897674,16,0,0,False,False,60,-823922901\r
1083874952,True,False,Sink,False,False,,620897674,17,0,0,False,False,20,1860904347:1467371088:-214126192:-823922901\r
1467371088,False,True,Power Sink,False,False,,620897674,16,0,0,False,False,60,-214126192\r
1860904347,False,True,Soaking Sink,False,False,,620897674,16,0,0,False,False,20,1467371088\r
-266993023,False,False,Starter Sink,False,False,,,17,0,0,False,False,20,\r
2073091578,False,False,,False,False,,,0,0,0,False,False,20,\r
-469149429,False,False,,False,False,,,0,0,0,False,False,20,\r
834743908,False,False,,False,False,,,0,0,0,False,False,20,\r
951367272,False,False,,False,False,,,0,0,0,False,False,20,\r
1771016910,False,False,,False,False,,,0,0,0,False,False,60,\r
-2122624266,False,False,,False,False,,,0,0,0,False,False,20,\r
-404095277,False,False,,False,False,,,0,0,0,False,False,20,\r
-1949016360,False,False,,False,False,,,0,0,0,False,False,20,\r
-581219245,False,False,,False,False,,,0,0,0,False,False,60,\r
-148578487,False,False,,False,False,,,0,0,0,False,False,20,\r
-1125517450,False,False,,False,False,,,0,0,0,False,False,20,\r
-233558851,False,False,,False,False,,,0,0,0,False,False,20,\r
-342718019,False,False,,False,False,,,0,0,0,False,False,20,\r
174737401,False,False,,False,False,,,0,0,0,False,False,20,\r
310022384,False,False,,False,False,,,0,0,0,False,False,20,\r
-1425710426,False,False,,False,False,,,0,0,0,False,False,60,\r
-1807971648,False,False,,False,False,,,0,0,0,False,False,60,\r
268640447,False,False,,False,False,,,0,0,0,False,False,60,\r
1199575543,False,False,,False,False,,,0,0,0,False,False,60,\r
-1451048989,False,False,,False,False,,,0,0,0,False,False,60,\r
-1820794030,False,False,,False,False,,,0,0,0,False,False,60,\r
871235082,False,False,,False,False,,,0,0,0,False,False,20,\r
387240739,False,False,,False,False,,,0,0,0,False,False,20,\r
1159228054,False,False,Bin,False,False,,,0,0,0,False,False,20,\r
-626547002,False,False,,False,False,,,0,0,0,False,False,60,\r
359655899,False,False,,False,False,,,0,0,0,False,False,20,\r
-232172209,False,False,,False,False,,,0,0,0,False,False,20,\r
-1528441435,False,False,,False,False,,,0,0,0,False,False,20,\r
564388954,False,False,,False,False,,,0,0,0,False,False,20,\r
1363960331,False,False,,False,False,,,0,0,0,False,False,20,\r
-760874610,False,False,,False,False,,,0,0,0,False,False,20,\r
1823459359,False,False,,False,False,,,0,0,0,False,False,20,\r
1659152562,False,False,,False,False,,,0,0,0,False,False,20,\r
477050702,False,False,,False,False,,,0,0,0,False,False,20,\r
1485375733,False,False,,False,False,,,0,0,0,False,False,20,\r
-1114059052,False,False,,False,False,,,0,0,0,False,False,20,\r
-1518462324,False,False,,False,False,,,0,0,0,False,False,20,\r
-62256073,False,False,,False,False,,,0,0,0,False,False,20,\r
1636658728,False,False,,False,False,,,0,0,0,False,False,20,\r
-1260306608,False,False,,False,False,,,0,0,0,False,False,20,\r
1425494045,False,False,,False,False,,,0,0,0,False,False,20,\r
-1614041568,False,False,,False,False,,,0,0,0,False,False,20,\r
-1051912790,False,False,,False,False,,,0,0,0,False,False,20,\r
1010867759,False,False,,False,False,,,0,0,0,False,False,20,\r
-720353319,False,False,,False,False,,,0,0,0,False,False,60,\r
-1997868587,False,False,,False,False,,,0,0,0,False,False,60,\r
-1920103064,False,False,,False,False,,,0,0,0,False,False,60,\r
-1235624607,False,False,,False,False,,,0,0,0,False,False,60,\r
-636342486,False,False,Cobwebs,False,False,,,8192,0,0,False,False,0,\r
-1318523640,False,False,Ghost Statue,False,False,,,8192,0,0,False,False,0,\r
-621580281,False,False,Pumpkin,False,False,,,8192,0,0,False,False,0,\r
115181910,False,False,Skeleton,False,False,,,8192,0,0,False,False,0,\r
976574457,True,False,Corn,True,False,,,288,0,0,False,False,60,\r
235355384,False,False,Bananas,False,False,,,0,0,0,False,False,60,\r
-699333907,False,False,Strawberries,False,False,,,0,0,0,False,False,60,\r
-1055654549,True,False,Pumpkin,True,False,,,288,0,0,False,False,60,\r
148543530,True,False,Cherries,True,False,,,288,0,0,False,False,60,\r
-1382019219,False,False,,False,False,,,0,0,0,False,False,20,\r
-1403625488,False,False,,False,False,,,0,0,0,False,False,20,\r
-1673904972,False,False,,False,False,,,0,0,0,False,False,20,\r
1752654754,False,False,,False,False,,,0,0,0,False,False,20,\r
-1748395084,False,False,,False,False,,,0,0,0,False,False,20,\r
303858729,True,False,Christmas Crackers,True,False,,,288,0,0,False,False,60,\r
735786885,True,False,Cranberry,True,False,,,288,0,0,False,False,60,\r
-2133205155,True,False,Sugar,True,False,,,288,0,0,False,False,60,\r
-667884240,False,False,Conveyor,False,False,,,64,0,0,False,False,20,\r
-697441390,False,False,,False,False,,,64,0,0,False,False,20,\r
-349733673,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
1836107598,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
369884364,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-699013948,False,False,,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
555321421,False,False,Rabbit Poster,False,False,,,8192,0,0,False,False,0,\r
-2084684446,False,False,Lantern,False,False,,,8192,0,0,False,False,0,\r
-2092567672,True,False,Bamboo,True,False,,,288,0,0,False,False,60,\r
595306349,True,False,Seaweed,True,False,,,288,0,0,False,False,60,\r
-1210117767,True,False,Mandarins,True,False,,,288,0,0,False,False,60,\r
-471813067,True,False,Extra Soy Sauce,True,False,-471813067,,8,0,0,False,True,60,\r
-184765154,False,False,,False,False,,,0,0,0,False,False,20,\r
-707206359,False,False,,False,False,,,0,0,0,False,False,20,\r
1134699240,False,False,,False,False,,,0,0,0,False,False,20,\r
-471643137,False,False,Flower Arch,False,False,,,8192,0,0,False,False,0,\r
142298503,False,False,Friends Poster,False,False,,,2,0,0,False,False,0,\r
-2001861712,False,False,Heart Balloons,False,False,,,8192,0,0,False,False,0,\r
-1314508999,False,False,Heart Bunting,False,False,,,8192,0,0,False,False,0,\r
785615801,False,False,Neon Sign,False,False,,,8192,0,0,False,False,0,\r
645876063,False,False,,False,False,,,0,0,0,False,False,60,\r
-916942203,False,False,,False,False,,,0,0,0,False,False,20,\r
345407921,False,False,,False,False,,,0,0,0,False,False,20,\r
-509190559,False,False,,False,False,,,0,0,0,False,False,20,\r
1274763392,False,False,,False,False,,,0,0,0,False,False,20,\r
965503721,False,False,,False,False,,,0,0,0,False,False,20,\r
260380903,False,False,,False,False,,,0,0,0,False,False,20,\r
-89571330,False,False,,False,False,,,0,0,0,False,False,20,\r
2114150010,False,False,,False,False,,,0,0,0,False,False,20,\r
143484231,True,False,Cupcake Stand,True,False,143484231,,8,0,0,False,False,60,\r
801015432,True,False,Ice Dispenser,True,False,,,32,0,0,False,False,20,\r
-557736569,True,False,Milk Steamer,True,False,,,32,0,0,False,False,20,\r
120342736,True,False,Milk,True,False,,,288,0,0,False,False,60,\r
-1598460622,True,False,Tea bags,True,False,,,288,0,0,False,False,60,\r
1377093570,True,False,Tea cups,True,False,,,288,0,0,False,False,60,\r
-762638188,True,False,Tea pots,True,False,,,288,0,0,False,False,60,\r
-660310536,True,False,Cake Tin,True,False,,,256,0,0,False,False,60,\r
-2135982034,True,False,Brownie Tray,True,False,,,256,0,0,False,False,120,\r
-1723125645,True,False,Cookie Tray,True,False,,,256,0,0,False,False,120,\r
-315287689,True,False,Cupcake Tray,True,False,,,256,0,0,False,False,120,\r
2136474391,True,False,Doughnut Tray,True,False,,,256,0,0,False,False,120,\r
783588616,False,False,Chocolate,False,False,,,0,0,0,False,False,60,\r
1470180731,False,False,Lemon Tree,False,False,,,0,0,0,False,False,60,\r
-217313684,True,False,Mixing Bowls,False,False,-217313684,,32,0,0,False,False,20,\r
782648278,False,False,Cauldron,False,False,,1972879238:-1706154991,32,0,0,False,False,60,\r
-1552572658,False,False,Candles,False,False,,,8192,0,0,False,False,0,\r
-119593913,False,False,Pumpkin Stack,False,False,,,8192,0,0,False,False,0,\r
-379172217,False,False,Witch Shelf,False,False,,,8192,0,0,False,False,0,\r
-292467039,False,False,Enchanting Desk,False,False,,,1536,0,0,False,False,40,\r
-1946127856,False,False,Ghostly Clipboard,False,False,,,0,0,0,False,False,60,\r
1313278365,False,False,Ghostly Knife,False,False,,,0,0,0,False,False,60,\r
689268680,False,False,Ghostly Rolling Pin,False,False,,,0,0,0,False,False,60,\r
-560953757,False,False,Ghost Scrubber,False,False,,,0,0,0,False,False,60,\r
-1780646993,False,False,Illusion Wall,False,False,,,64,0,0,False,False,60,\r
1150470926,False,False,Instant Wand,False,False,,,256,0,0,False,False,60,\r
2044081363,False,False,Levitation Line,False,False,,,64,0,0,False,False,20,\r
-1298525547,False,False,Levitation Spot,False,False,,,64,0,0,False,False,20,\r
119166501,False,False,Levitation Station,False,False,,,0,0,0,False,False,60,\r
-1992638820,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120,\r
-877630314,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120,\r
744482650,False,False,Magic Mirror,False,False,,,64,0,0,False,False,60,\r
-1696198539,False,False,Magic Spring,False,False,,,0,0,0,False,False,20,\r
-1835366879,False,False,,False,False,,,0,0,0,False,False,20,\r
2031496644,False,False,,False,False,,,0,0,0,False,False,20,\r
1391464545,False,False,,False,False,,,0,0,0,False,False,20,\r
477535207,False,False,,False,False,,,0,0,0,False,False,20,\r
923307040,False,False,,False,False,,,0,0,0,False,False,20,\r
-1090855913,False,False,,False,False,,,0,0,0,False,False,20,\r
50273892,False,False,,False,False,,,0,0,0,False,False,20,\r
-70663877,False,False,,False,False,,,0,0,0,False,False,20,\r
-2123542635,False,False,,False,False,,,0,0,0,False,False,20,\r
423254987,False,False,Preserving Station,False,False,,,256,0,0,False,False,60,\r
267288096,False,False,Magic Apple Tree,False,False,,,8,0,0,False,False,60,\r
29164230,False,False,Pouch of Holding,False,False,,,256,0,0,False,False,120,\r
540526865,False,False,Enchanted Plates,False,False,,,0,0,0,False,False,60,\r
2000892639,False,False,Table - Stone,False,False,,,8,0,0,False,False,60,\r
-1688921160,False,False,Table - Sharing Cauldron,False,False,,,8,0,0,False,False,60,\r
1492264331,False,False,Vanishing Circle,False,False,,,0,0,0,False,False,20,\r
-1541798751,True,False,Mince,True,False,-1541798751,,32,0,0,False,False,20,\r
-2077197906,True,False,Pasta Sheet,True,False,-2077197906,,32,0,0,False,False,20,\r
-1339944542,True,False,Lasagne Tray,True,False,-1339944542,,32,0,0,False,False,20,\r
-215543585,True,False,Butter,True,False,-215543585,,32,0,0,False,False,20,\r
-182748008,True,False,Spaghetti,True,False,-182748008,,32,0,0,False,False,20,\r
509800268,False,False,Dish Source Cabinet,False,False,,,0,0,0,False,False,60,\r
1436010410,False,False,,False,False,,,0,0,0,False,False,20,\r
-400359294,False,False,,False,False,,,0,0,0,False,False,20,\r
-1082709460,False,False,,False,False,,,0,0,0,False,False,20,\r
-307800946,False,False,,False,False,,,0,0,0,False,False,20,\r
2095304286,False,False,,False,False,,,0,0,0,False,False,20,\r
585649337,False,False,,False,False,,,0,0,0,False,False,20,\r
-773196462,True,False,Buffet,False,False,,,8,0,0,False,False,120,\r
638034870,False,False,Service Counter,False,False,,,8,0,0,False,False,60,\r
-364231730,False,False,,False,False,,,0,0,0,False,False,60,\r
-121110359,False,False,,False,False,,,0,0,0,False,False,60,\r
825737084,True,False,Chocolate Syrup,True,False,,,288,0,0,False,False,60,\r
483880621,True,False,Strawberry Syrup,True,False,,,288,0,0,False,False,60,\r
602693523,True,False,Sundae Glasses,True,False,,,288,0,0,False,False,60,\r
1872560572,True,False,Strawberries,True,False,,,288,0,0,False,False,60,\r
-940358190,True,False,Leftover Bags,False,False,,,8,0,0,False,True,60,\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60,\r
-1673135814,True,False,Ham,True,False,,,288,0,0,False,False,60,\r
-74499940,True,False,Pickle,True,False,,,288,0,0,False,False,60,\r
1895329114,False,False,,False,False,,,0,0,0,False,False,60,\r
-1889835507,False,False,Present Stack,False,False,,,8192,0,0,False,False,0,\r
-380823608,False,False,Tinsel,False,False,,,8192,0,0,False,False,0,\r
-602487625,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0,\r
-302306254,False,False,Wreath,False,False,,,8192,0,0,False,False,0,\r
-1492497486,False,False,,False,False,,,0,0,0,False,False,60,\r
-771033261,False,False,,False,False,,,0,0,0,False,False,60,\r
-1082534766,False,False,,False,False,,,0,0,0,False,False,60,\r
416689423,False,False,,False,False,,,0,0,0,False,False,60,\r
1595436560,False,False,,False,False,,,0,0,0,False,False,60,\r
-1985766917,False,False,,False,False,,,0,0,0,False,False,60,\r
2029957333,False,False,,False,False,,,0,0,0,False,False,60,\r
1621490890,False,False,,False,False,,,0,0,0,False,False,60,\r
708507454,False,False,,False,False,,,0,0,0,False,False,60,\r
684514756,False,False,,False,False,,,0,0,0,False,False,60,\r
1178498897,False,False,,False,False,,,0,0,0,False,False,60,\r
1668340088,False,False,,False,False,,,0,0,0,False,False,60,\r
-450635801,False,False,,False,False,,,0,0,0,False,False,60,\r
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60,\r
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60,\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60,\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60,\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60,\r
`;const Pe=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost","Upgrades"],Be=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number","number[]"],V=Me.trim().split(`\r
`).map(l=>{const e=l.split(",");let s={};for(let a=0;a<e.length;a++){let F;switch(Be[a]){case"number":F=Number(e[a]);break;case"boolean":F=e[a]==="True";break;case"number[]":e[a]===""?F=[]:F=e[a].split(":").map(n=>Number(n));break;default:F=e[a]}s[Pe[a]]=F}return s}),Q=new Map,Fe=new Map;for(const l of V)Q.set(l.ID,l),Fe.set(l.Name,l);const R=new Map,Ne=new Map,we=new Map;{let l=!0;const e=V.filter(a=>a.Upgrades.length);for(const a of e)for(const F of a.Upgrades)R.has(F)||R.set(F,new Set),(te=R.get(F))==null||te.add(a.ID);for(;l;){l=!1;for(const[a,F]of R){const n=F.size;for(const r of F)for(const u of R.get(r)??[])F.add(u);n!==F.size&&(l=!0)}}for(const[a,F]of R)F.delete(a),we.set(a,Array.from(F));const s=Array.from(R.entries()).map(a=>{var F;return`${(F=Q.get(a[0]))==null?void 0:F.Name}:${Array.from(a[1]).map(n=>{var r;return(r=Q.get(n))==null?void 0:r.Name}).join(", ")}`});for(const a of R)Ne.set(a[0],Array.from(a[1]));console.log(s)}V.filter(l=>l.Name==="Booking Desk"||l.Name==="Blueprint Cabinet").sort((l,e)=>l.Name<e.Name?1:-1);const $=V,Re=["Auto Plater","Dish Rack","Plates","Dish Washer"];Fe.get("Sink");for(const l of Re);$.filter(l=>l.IsPurchasable||l.IsPurchasableAsUpgrade).length,["Blueprint Cabinet","Booking Desk"].map(l=>$.filter(e=>e.Name===l)[0]);let z=0;var ve=self;let Z=!1,L=1e3;ve.onmessage=function(l){console.log("Worker: Message received from main script"),l.data.type==="start"?(Z=!0,xe(l.data.data)):(console.log("breaking search"),re(z,!0),Z=!1)},new Array(16).fill(1/0);async function xe({goalCards:l,goalAppliances:e=[],mapSizes:s,maxSeeds:a=1/0}){L=1e3,z=0;const F=new MessageChannel;let n;F.port2.onmessage=T=>{n()};const r=Ce();let u;const i=l[0].cards.filter(T=>T.UnlockGroup===b.Special),o=l[0].cards.filter(T=>T.DishType!==g.Null);o.length||o.push(void 0);const t=l[0].cards.some(T=>T.Name==="Turbo")?[1,2,3,4,5,6,7,8,9,10,11,12,13,14]:[3,5,6,9,12,15,18,21,24,27].slice(0,l.length-1);let c=[-1/0,[]],p=a;e:for(;Z&&p;){re(z);const T=new Promise(m=>{n=m});F.port1.postMessage(null),await T;const f=r();if(!f)break e;u=f,z++;const d=new ye(u).mapSize;if(s.includes(d))for(const m of o){const y=Ae(u,m?[...i,m]:[...i],l,e,t);if(y[0]<c[0]||!Number.isFinite(y[0]))continue;c=y,p--,Ge({seed:u,mapSize:d,cards:y[1],blueprints:[],customerCount:void 0})}}}function Ge(l){postMessage({type:"result",data:l})}function re(l,e=!1){const s={type:"progress",data:l};if(typeof l=="string"){postMessage(s);return}if(!e&&l<L)return;const a=l/se*100,F=a.toExponential(1).match(/^([^e]*)(e.*)?$/);if(!F){debugger;throw new Error("????")}const[n,r,u]=F,i=Number(r)+.1;if(L=Number(i.toString()+u)/100*se,Number.isNaN(L))debugger;s.data=a.toPrecision(2)+"%",a===100&&(s.data="100%"),postMessage(s)}["Blueprint Cabinet","Booking Desk"].flatMap(l=>$.filter(e=>e.Name===l));function Ae(l,e,s,a,F){const n=new Te(l);for(const i of e)n.addCard(i);let r=1;const u=new Set;for(;r<=(F.at(-1)??15);r++){if(!F.includes(r))continue;const i=F.indexOf(r)+1,o=n.getUnlockOptions(r),t=ne(o[0],s[i]),c=ne(o[1],s[i]);let p=-1;if(t>-1&&c>-1)t<c?p=0:c<t?p=1:p=Math.floor(Math.random()*2);else{if(t===-1&&c===-1)return[-1/0,[]];t>=0?p=0:p=1}if(r!==5&&o[p].CustomerMultiplier<1)debugger;if(!o[p])throw console.log({options:o}),new Error;for(const T of o[p].IngredientProviders)u.add(T);n.addCard(o[p])}return[r,n.cards.map(i=>i.Name),n]}function Ie(l,e){for(let s=0;s<l.length;s++)if(l[s].ID===e.ID)return s;return-1}function ne(l,e){return e.include?Ie(e.cards,l):e.cards.some(s=>s.ID===l.ID)?-1:0}})();
