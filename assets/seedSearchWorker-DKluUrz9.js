var ze=Object.defineProperty;var Ve=(C,g,A)=>g in C?ze(C,g,{enumerable:!0,configurable:!0,writable:!0,value:A}):C[g]=A;var b=(C,g,A)=>Ve(C,typeof g!="symbol"?g+"":g,A);(function(){"use strict";var re;var C=(l=>(l[l.Generic=0]="Generic",l[l.Dish=1]="Dish",l[l.PrimaryTheme=3]="PrimaryTheme",l[l.SecondaryTheme=4]="SecondaryTheme",l[l.Franchise=5]="Franchise",l[l.Special=6]="Special",l))(C||{}),g=(l=>(l[l.Base=0]="Base",l[l.Main=1]="Main",l[l.Extra=2]="Extra",l[l.Side=3]="Side",l[l.Starter=4]="Starter",l[l.Dessert=5]="Dessert",l[l.Null=6]="Null",l))(g||{}),A=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
-2075899,Breakfast,1,,,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1199743580,Breakfast Beans,1,-2075899,,1972879238,1807525572:-957949759,False,False,2,1,0\r
1436814208,Breakfast Eggs,1,-2075899,,1972879238:2087693779,961148621,False,False,2,1,0\r
-1998930853,Breakfast Extras,1,-2075899,,2087693779,-712909563:-1097889139,False,False,2,1,0\r
-1778969928,Burgers,1,,,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
965292477,Cheeseburgers,1,-1778969928,,1972879238:2087693779,759552160:380220741:385684499:-117339838,False,False,2,1,0\r
-1091625127,Fresh Patties,1,-1778969928,,1972879238:2087693779,759552160:380220741:961148621:-484165118,False,False,2,1,0\r
1298035216,Burger Toppings,1,-1778969928,,1972879238:2087693779,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0\r
1626323920,Hot Dogs,1,,,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0\r
1743900205,Fish,1,,,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238,380220741:925796718:961148621,True,False,1,1,8\r
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0\r
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0\r
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779,380220741,True,False,1,1,5\r
274986412,Oysters,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-643878280,Spiny Fish,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-905438738,False,False,5,1,3\r
-133939790,Pies,1,,,-1706154991:-523839730,925796718:-484165118:380220741,True,False,0,1,8\r
-1992316049,Mushroom Pies,1,-133939790,,2087693779:1972879238:-523839730,-1097889139:925796718,False,False,1,1,0\r
-1802123036,Vegetable Pies,1,-133939790,,2087693779:1972879238:-523839730,925796718:-452101383:-1573812073,False,False,1,1,0\r
1570910782,Apple Salad,1,1356267749,,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,8\r
1356267749,Salad,1,,,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,8\r
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0\r
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,5\r
-959076098,Steak,1,,,1972879238,-484165118:380220741,True,False,0,0,5\r
-953651922,Steak Sauce - Mushroom,1,-959076098,,1972879238:2087693779,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0\r
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,1972879238,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0\r
-1192928429,Steak Topping - Mushroom,1,-959076098,,2087693779,-1097889139,False,False,2,1,0\r
-851525606,Steak Topping - Tomato,1,-959076098,,2087693779,-712909563,False,False,2,1,0\r
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,5\r
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,5\r
-1653221873,Stir Fry,1,,,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
-204178430,Steak Stir Fry,1,-1653221873,,2087693779:1972879238,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1,1,0\r
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1\r
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,2\r
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1\r
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,3\r
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,3\r
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,3\r
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,3\r
550743424,Pizza,1,,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
1434421325,Mushroom Pizza,1,550743424,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0\r
-2071275506,Onion Pizza,1,550743424,,2087693779:-1706154991:-523839730,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0\r
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3,1,2\r
1642577536,Herd Mentality,0,,,,,False,False,6,0,0\r
-1737101581,Health and Safety,0,,,,,False,False,6,0,0\r
-2040314977,Picky Eaters,0,,,,,False,False,6,0,0\r
73422455,Tipping Culture,0,,,,,False,False,6,0,0\r
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3,1,3\r
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718,False,False,5,1,3\r
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
536093200,Nut Roast,1,1551533879,,2087693779:-1706154991,1834063794:380220741:-2042103798,True,False,1,1,5\r
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1\r
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,2\r
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,2\r
12170609,Cherry Pies,1,,,1972879238,148543530:925796718,False,False,5,1,3\r
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1\r
1551533879,Turkey,1,,,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-361249036,Christmas Rush,6,,,,,False,False,6,0,0\r
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,3\r
1398180456,Turkey - Cranberry Sauce,1,1551533879,,2087693779,735786885:-2133205155,False,False,2,1,0\r
-1460640973,Turkey - Gravy,1,1551533879,,1972879238,-2042103798:-957949759:-266993023,False,False,2,1,0\r
-1243742384,Turkey - Stuffing,1,1551533879,,2087693779:1972879238:-523839730,-2042103798:925796718:-266993023,False,False,2,2,0\r
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0\r
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,2\r
-437161441,Bamboo Stir Fry,1,-1653221873,,2087693779:1972879238,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1,1,0\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
137627410,Seaweed,1,367917843,,1972879238,595306349,False,False,2,1,0\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2\r
1642878331,Mushroom Stir Fry,1,-1653221873,,2087693779:1972879238,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1,1,0\r
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
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023,False,False,2,1,3\r
1316998108,Sponge Cake,1,1113735761,,-1706154991:-523839730,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
1609120418,Brownies,1,1113735761,,-1706154991:-523839730,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,0\r
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,3\r
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,3\r
627241196,Cupcake,1,1113735761,,-1706154991:-523839730,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
-1166412657,Doughnut,1,1113735761,,-523839730:1972879238,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,0\r
1113735761,Cakes,0,,,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,5\r
803049136,Lasagne,1,-1501485763:1651927267,,-1706154991:1972879238:-523839730,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,8\r
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,5\r
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
1530184692,Instant Service,0,,746549422,,,False,False,6,0,0\r
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
`,te=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
550743424,Pizza,1,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,0,-2,1\r
-1778969928,Burgers,1,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-133939790,Pies,1,-1706154991:-523839730,925796718:-484165118:380220741,True,False,0,1,8\r
1113735761,Cakes,0,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
1743900205,Fish,1,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`;const I=A.trim().split(/\r?\n/).filter(l=>l).map(l=>{var H,U;const[e,a,s,F,r,t,u,i,o,n,c,T]=l.split(","),d=Number(e),f=Number(s),p=F!=null&&F.length?F.split(":").map(N=>Number(N)):[],h=r.length?r.split(":").map(N=>Number(N)):[],m=t!=null&&t.length?(H=t==null?void 0:t.split(":"))==null?void 0:H.map(N=>Number(N)):[],y=u!=null&&u.length?(U=u==null?void 0:u.split(":"))==null?void 0:U.map(N=>Number(N)):[],R=i==="True",P=o==="True",S=Number(n),v=Number(c),O=Number(T);return{ID:d,Name:a,UnlockGroup:f,Requires:p,BlockedBy:h,RequiredProcesses:m,IngredientProviders:y,isMain:R,isStarterOrSide:P,DishType:S,CustomerMultiplier:v,DishValue:O}});function x(l,e=!0){const a=e&&l.some(s=>s.Name==="Community"||s.Name==="Lake");return I.filter(s=>{if(l.some(F=>F.ID===s.ID)||s.BlockedBy.some(F=>l.some(r=>r.ID===F))||s.Requires.some(F=>!l.some(r=>r.ID===F)))return!1;if(s.isStarterOrSide)if(l.some(F=>F.isMain)){if(l.length&&l[0].DishType===g.Dessert)debugger}else return!1;return!(!a&&s.DishType===g.Base)}).sort((s,F)=>s.ID-F.ID)}const ie=[...[{ID:447437163,Name:"Country",UnlockGroup:C.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:C.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:C.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},I.filter(l=>l.Name==="Community")[0],I.filter(l=>l.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:C.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0},I.filter(l=>l.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:C.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:g.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((l,e)=>l.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(l=>I.filter(e=>e.Name===l)[0]);const oe=te.trim().split(`\r
`).filter(l=>l).map(l=>{var P,S;const[e,a,s,F,r,t,u,i,o,n]=l.split(","),c=Number(e),T=Number(s),d=F!=null&&F.length?(P=F==null?void 0:F.split(":"))==null?void 0:P.map(v=>Number(v)):[],f=r!=null&&r.length?(S=r==null?void 0:r.split(":"))==null?void 0:S.map(v=>Number(v)):[],p=t==="True",h=u==="True",m=Number(i),y=Number(o),R=Number(n);return{ID:c,Name:a,UnlockGroup:T,Requires:[],BlockedBy:[],RequiredProcesses:d,IngredientProviders:f,isMain:p,isStarterOrSide:h,DishType:m,CustomerMultiplier:y,DishValue:R}}).sort((l,e)=>l.Name<e.Name?-1:1),M={};for(const l of I)M[l.Name]=l;for(const l of oe)M[l.Name]=l;for(const l of ie)M[l.Name]=l;M.Coffee=M["Black Coffee"],M.Community.AKA="Autumn",M["Christmas Rush"].AKA="North Pole",M.Couples.AKA="Romantic",M["Cherry Pie"]=M["Cherry Pies"],M["Mushroom Pie"]=M["Mushroom Pies"];class E{constructor(e,a){b(this,"fixedSeed");b(this,"instance");b(this,"random");typeof e=="string"&&(e=ue(e)),this.fixedSeed=e,this.instance=a,this.random=new q(e+Math.imul(124192293,a))}useSubcontext(e){return new E(this.fixedSeed,124192293*e+this.instance)}}class q{constructor(e){b(this,"seed");const a=u=>Math.imul(1812433253,u)+1>>0,s=e>>0,F=a(s),r=a(F),t=a(r);this.seed=[s,F,r,t]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function ue(l){const a=new TextEncoder().encode(l);let s=5381,F=a.length;for(;F--;)s=(s<<5)+s+a[F];return s>>0}function Z(l,e,a){return new E(a,l*1231231+e)}class _{constructor(){b(this,"encourageGroups",[C.Special])}GetOptions(e,a,s){const F=s.random;let r=0;for(a!==15&&(r=this.getPad(e,a));r--;)F.value;let t=this.sortCandidates(e,a,s.random);const[u,i]=this.getUnlockGroups(a);let o=null,n=null;for(const c of t)if(!(c.UnlockGroup!==u&&c.UnlockGroup!==i)&&(o===null||o.UnlockGroup!==u&&c.UnlockGroup===u?o=c:(n===null||n.UnlockGroup!==i&&c.UnlockGroup===i)&&(n=c),o&&o.UnlockGroup===u&&n&&n.UnlockGroup===i))break;return[o,n]}getPad(e,a){if(a===15)return 0;let s=x(e).length+1;return a===5&&(s*=2),s}getCandidates(e,a){return x(e)}sortCandidates(e,a,s){let F=this.getCandidates(e,a),r=W(F,s);return s.valueFloat<.5&&r.sort((u,i)=>{let o=0;return z(u)&&o--,z(i)&&o++,o}),r}getUnlockGroups(e){return e===15?[C.Franchise,C.Franchise]:e===5?[C.PrimaryTheme,C.PrimaryTheme]:[C.Dish,C.Generic]}}class ce extends _{getPad(e,a){let s=x(e,!1).length+1;return a!==5&&(s*=2),s}sortCandidates(e,a,s){let F=this.getCandidates(e,a),r=W(F,s);return s.valueFloat<.1&&r.sort((i,o)=>{let n=0;return i.Requires.length&&n--,o.Requires.length&&n++,n}),r}}class J extends _{constructor(){super(...arguments);b(this,"ThanksgivingCards",["Turkey","Nut Roast"])}getPad(a,s){if(s===15)return 0;let F=x(a,!1).length+1;if(s===5){let r=x(a);F+=r.length+2}return F}getCandidates(a,s){return s===5||s===15?x(a,!1):x(a)}sortCandidates(a,s,F){let r=this.getCandidates(a,s),t=W(r,F);return F.valueFloat<.5&&t.sort((o,n)=>{let c=0;return z(o,!1)&&c--,z(n,!1)&&c++,c}),s!==5&&s!==15&&F.valueFloat<.25&&t.sort((n,c)=>{let T=0;return this.ThanksgivingCards.includes(n.Name)&&T++,this.ThanksgivingCards.includes(c.Name)&&T--,T}),t}getUnlockGroups(a){return a===15?[C.Franchise,C.Franchise]:a===5?[C.PrimaryTheme,C.PrimaryTheme]:[C.Dish,C.Dish]}}class he extends J{constructor(){super(...arguments);b(this,"ThanksgivingCards",["Dumplings","Mandarin Starter","Bamboo","Stir Fry"])}}function W(l,e){return l.map(s=>[s,e.valueFloat]).sort((s,F)=>s[1]-F[1]).map(s=>s[0])}class fe{constructor(e){b(this,"cards");b(this,"unlockPack");b(this,"seed");this.cards=[],this.unlockPack=new _,this.seed=e}addCard(e){if(e!==void 0){switch(e.Name){case"Community":this.unlockPack=new J;break;case"Turbo":this.unlockPack=new ce;break;case"Lake":this.unlockPack=new he;break}this.cards.push(e)}}getUnlockOptions(e){const s=Z(848292,e,this.seed).useSubcontext(1);return this.unlockPack.GetOptions(this.cards,e,s)}getCustomers(e,a=1){return[]}getGroupSizeRange(e){if(this.cards.some(r=>r.Name==="Community")){const r=Math.floor((e-1)/3);return[r+1,r+2]}let s=1,F=2;return this.cards.some(r=>r.Name==="Individual Dining")?[1,1]:(this.cards.some(r=>r.Name==="Medium Groups")&&(s++,F+=2),this.cards.some(r=>r.Name==="Large Groups")&&(s+=2,F+=4),this.cards.some(r=>r.Name==="Flexible Groups")&&(s--,F++),[s,F])}}function z(l,e=!0){return l.UnlockGroup===C.Special||l.DishType===g.Main||l.DishType===g.Extra?!0:e?!!l.Requires.length:!1}const j={};function Y(l){const{starters:e,main:a,doubleOrderChance:s,desserts:F,sides:r,groupSizes:t}=l,u=[e,a,s,F,r,[...t].sort((f,p)=>f-p)].join("|");if(j[u])return j[u];let i=[0,0,0],o=[0,0,0,0],n=1-.75**r;if(e>0){i[0]=1;let f=1-.75**e;s===.5&&(f*=1.25,n*=1.25),o[0]=t.reduce((p,h)=>p+1+(h-1)*f,0)}const c=t.reduce((f,p)=>f+p);a&&(i[1]=1,o[1]=c),F>0&&(o[2]=c,a?(i[2]=1-.75**F,s===.5&&(i[2]*=1.25)):i[2]=1);let T=1;e>0&&(i[0]*=1+s,T*=1-s,o[0]*=i[0]),a&&(i[1]*=1+T*s,T*=1-s,o[1]*=i[1],o[3]=o[1]*n),F>0&&(i[2]*=1+T*s,T*=1-s,o[2]*=i[2]);const d=[i.map(f=>f*t.length),o];return j[u]=d,d}function de(l){const{starters:e,main:a,doubleOrderChance:s,desserts:F,sides:r,groupSizes:t}=l;let u=[0,0,0],i=[0,0,0,0],o=1-.75**e,n=1-.75**F,c=1-.75**r;s===.5&&(o*=1.25,n*=1.25,c*=1.25);const T=h=>{u[0]++,i[0]++;for(let m=0;m<h-1;m++)Math.random()<o&&i[0]++},d=h=>{u[1]++,i[1]+=h;for(let m=0;m<h;m++)Math.random()<c&&i[3]++},f=h=>{u[2]++,i[2]+=h};for(const h of t){let m=!1;e>0&&(T(h),!m&&Math.random()<s&&(m=!0,T(h))),d(h),!m&&Math.random()<s&&(m=!0,d(h)),F>0&&Math.random()<n&&(f(h),!m&&Math.random()<s&&(m=!0,f(h)))}return[u,i]}function Te(l,e){return Math.floor(Math.random()*(e-l))+l}function X(l,e){let a=l.length;for(;a-- >1;){let s=Te(0,a+1);[l[a],l[s]]=[l[s],l[a]]}return l}const ge="abcdefghijklmnopqrstuvwxyz123456789",pe="12345678",me="ab12",ke="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(","),ee=569249377;for(const l of ke);const K={undefined:!1};for(const l of pe)K[l]=!0;function Se(l="az"){const e=8-l.length;let a=new Array(e-1).fill(0);a.push(-1);const s=new Array(a.length).fill(me).map(t=>X(Array.from(t)).join("")),F=new Array(a.length).fill(ge).map(t=>X(Array.from(t)).join(""));return()=>{a[e-1]++;let t=[F[0]];for(let n=0;n<a.length-1;n++)K[t[n][a[n]]]?t.push(s[n+1]):t.push(F[n+1]);let u=a.length;for(;u--;){const n=t[u];if(a[u]<n.length)break;if(!u)return!1;a[u]=0,a[u-1]++}let i=l,o=F[0];for(let n=0;n<a.length;n++){const c=o[a[n]];i+=c,K[c]?o=s[n+1]:o=F[n+1]}return i}}function B(l){return l.length?l.reduce((e,a)=>e+a,0)/l.length:0}const Ce={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},se={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(l=>se[l]=!0);class be{constructor(e,a=[],s=[]){b(this,"seed");b(this,"mapSize");b(this,"frontDoor");b(this,"startingCards");b(this,"cards");b(this,"playerCount");b(this,"turbo");b(this,"_actionInfoCacheByCards",{});b(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=s,this.playerCount=Ce[this.mapSize],this.turbo=this.startingCards.some(F=>{if(F===void 0){console.log({startingCards:a});debugger}return F.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),s=this.getGroupSizes(e);let F=!1,r=!1,t=0,u=[],i=[],o=0,n=[],c=0,T=[];for(const S of a)switch(S.Name==="All You Can Eat"&&(F=!0),S.Name==="Double Helpings"&&(r=!0),S.DishType){case g.Dessert:o++,S.DishValue&&n.push(S.DishValue);break;case g.Starter:S.DishValue&&u.push(S.DishValue),t++;break;case g.Side:S.DishValue&&T.push(S.DishValue),c++;break;case g.Main:case g.Base:S.Name==="Tacos"?(i.push(2),i.push(3)):S.DishValue&&i.push(S.DishValue)}let d=r?.5:F?.25:0,f=[0,0,0,0];if(f[0]=B(u),f[1]=B(i),f[2]=B(n),f[3]=B(T),r)for(let S=0;S<3;S++)f[S]&&(f[S]+=3);const[p,h]=Y({starters:t,main:!!f[1],doubleOrderChance:d,desserts:o,sides:c,groupSizes:s});let m=0;for(let S=0;S<h.length;S++)m+=h[S]*f[S];const y=ae(this.playerCount),R=this.getBookingDeskCount(e),P=this.getBookingDeskMoney(e);return Math.ceil(y*(m+R*P))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const a=this.getCardsByDay(e),s=this.getGroupSizes(e);let F=!1,r=!1,t=0,u=[],i=[],o=0,n=[],c=0,T=[];for(const h of a)switch(h.Name==="All You Can Eat"&&(F=!0),h.Name==="Double Helpings"&&(r=!0),h.DishType){case g.Dessert:o++,h.DishValue&&n.push(h.DishValue);break;case g.Starter:h.DishValue&&u.push(h.DishValue),t++;break;case g.Side:h.DishValue&&T.push(h.DishValue),c++;break;case g.Main:case g.Base:if(!h.isMain){o++,h.DishValue&&n.push(h.DishValue);break}h.Name==="Tacos"?(i.push(2),i.push(3)):h.DishValue&&i.push(h.DishValue)}let d=r?.5:F?.25:0,f=[0,0,0,0];if(f[0]=B(u),f[1]=B(i),f[2]=B(n),f[3]=B(T),r)for(let h=0;h<3;h++)f[h]&&(f[h]+=3);return Y({starters:t,main:!!f[1],doubleOrderChance:d,desserts:o,sides:c,groupSizes:s})}actionInfo(e){if(e===0)return 0;const a=this.getCardsByDay(e),s=e.toString()+":"+a.map(k=>k.Name).sort().join(","),F=this._actionInfoCacheByCards[s];if(F)return F;let r=0;const t={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let u=0;for(let k=0;k<a.length;k++)if(a[k].DishType!==g.Null){const D=a[k].Name;u=t[D]??20;break}let i=-1,o=[1,1,1],n=[[],[u],[],[]],c=0;const T=this.getGroupSizes(e);let d=!1,f=!1,p=0,h=[],m=[],y=0,R=[],P=0,S=[],v=!1,O=!1;for(const k of a){switch(k.Name==="All You Can Eat"&&(d=!0),k.Name==="Double Helpings"&&(f=!0),k.Name){case"Picky Eaters":v=!0;break;case"Leisurely Eating":O=!0,c+=2;break;case"Instant Service":for(let D=0;D<3;D++)o[D]--;break;case"Ice Cream":n[2].push(5.125);break;case"Cheese Board":n[2].push(10);break;case"Cherry Pies":n[2].push(11);break;case"Apple Pies":n[2].push(15);break;case"Pumpkin Pies":n[2].push(16);break;case"Carrot Soup":case"Meat Soup":n[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":o[0]=4,n[0].push(8);break;case"Broccoli Cheese Soup":n[0].push(5),o[0]=4;break;case"Pumpkin Seed":n[0].push(3*8);break;case"Bread":n[0].push(5*3);break;case"Mandarin Starter":n[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":n[3].push(2);break;case"Onion Rings":n[3].push(8);break;case"Corn on the Cob":n[3].push(6);break;case"Chips":n[3].push(7);break;case"Roast Potato":n[3].push(4);break}switch(k.DishType){case g.Dessert:y++,k.DishValue&&R.push(k.DishValue);break;case g.Starter:k.DishValue&&h.push(k.DishValue),p++;break;case g.Side:k.DishValue&&S.push(k.DishValue),P++;break;case g.Main:case g.Base:k.Name==="Tacos"?(m.push(2),m.push(3)):k.DishValue&&m.push(k.DishValue);break;case g.Extra:k.Name==="Seaweed"?(n[1][0]+=1.75,i+=2):k.Name==="Dumpling - Soy Sauce"?n[1][0]+=.4:k.Name==="Breakfast Beans"?n[1][0]+=1+3/4:k.Name==="Breakfast Eggs"?n[1][0]+=6:k.Name==="Breakfast Extras"&&(i++,n[1][0]+=1.5*2),i++;break}}e>6&&(n[3]=[]),v&&(O&&!d||(n[1][0]+=2,i++));let H=f?.5:d?.25:0;r+=T.length*c;const[U,N]=Y({starters:p,main:!0,doubleOrderChance:H,desserts:y,sides:P,groupSizes:T});U.forEach((k,D)=>r+=k*o[D]);for(const k of n)for(let D=0;D<k.length;D++)i>0&&(k[D]+=i),i+=1;return N.forEach((k,D)=>{var ne;if((ne=n[D])!=null&&ne.length){if(!D){const Ie=Math.ceil(k/n[D].length/3);r+=Ie*n[D].reduce((Ee,Ge)=>Ee+Ge,0);return}r+=k*B(n[D])}}),this._actionInfoCacheByCards[s]=r,r}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),s=this.getGroupSizes(e);let F=!1,r=!1,t=[[],[],[],[]];for(const p of a)switch(p.Name==="All You Can Eat"&&(F=!0),p.Name==="Double Helpings"&&(r=!0),p.DishType){case g.Main:case g.Base:p.Name==="Tacos"?t[1].push(2.5):p.DishValue&&t[1].push(p.DishValue);break;case g.Dessert:p.DishValue&&t[2].push(p.DishValue);break;case g.Starter:p.DishValue&&t[0].push(p.DishValue);break;case g.Side:p.DishValue&&t[3].push(p.DishValue);break}let u=r?.5:F?.25:0,i=0;r&&(i+=3);const[o,n]=de({starters:t[0].length,main:!!t[1].length,doubleOrderChance:u,desserts:t[2].length,sides:t[3].length,groupSizes:s});let c=0;for(let p=0;p<n.length;p++){let h=n[p];for(;h--;){p<3&&(c+=i);let m=t[p][Math.floor(Math.random()*t[p].length)];m%1&&(Math.random()<m%1?m=Math.ceil(m):m=Math.floor(m)),c+=m}}const T=ae(this.playerCount),d=this.getBookingDeskCount(e),f=this.getBookingDeskMoney(e);return Math.ceil(T*(c+d*f))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const s=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(o=>o.Name==="Herd Mentality"))return Math.min(s,3)+1;const F=[],r=this.getCardsByDay(e);let t=1;(this.turbo||r.some(o=>o.Name==="Morning Rush"))&&F.push(.2),(this.turbo||r.some(o=>o.Name==="Lunch Rush"))&&F.push(.5),(this.turbo||r.some(o=>o.Name==="Dinner Rush"))&&F.push(.8);const u=a/this.getDayLength(e),i=.1/s;t+=s-1;for(let o=1;o<s;o++){const n=o/s,c=n-i-u,T=n+i+u;for(let d=F.length-1;d>=0;d--){const f=F[d];c<=f&&f<=T&&F.splice(d,1)}}return t+=F.length,t}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),s=this.getCardsByDay(e).filter(t=>t.Name==="Closing Time?").length*.2,F=this.getExpectedGroupSize(e),r=a*(1+s)/F;return Math.ceil(r)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,s)=>a+s,0)}getGroupSizes(e,a=0){const s=this.seed?Z(1997821,e,this.seed).random:new q(Math.floor(Math.random()*4294967295)),F=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(d=>d.Name==="Herd Mentality");let t=F,u=[],[i,o]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?o=i:this.seed==="_max"&&(i=o);{let d=t-1;for(;d--;)s.value}for(;t--;)u.push(s.range(i,o+1)),!r&&t!==F-1&&s.value;let n=this.turbo?3:this.getCardsByDay(e).filter(d=>se[d.Name]).length,c;switch(a){case 0:c=Math.ceil(Math.max(1,F*.15));break;case 1:c=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));break;case 2:c=Math.ceil(Math.max(1,F*.15*1.5))}let T=n*c;for(;T--;)u.push(s.range(i,o+1));if(!this.seed||this.seed[0]==="_"){let d=i;for(let f=0;f<u.length;f++)u[f]=d,d++,d>o&&(d=i)}return u}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,s=2;for(const F of this.getCardsByDay(e))switch(F.Name){case"Individual Dining":s--;break;case"Medium Groups":a++,s+=2;break;case"Large Groups":a+=2,s+=2;break;case"Flexible Dining":a--,s++;break;case"Community":const r=Math.floor((e-1)/3);a+=r,s+=r;break}return[a,s]}getExpectedCustomers(e){const a=this.getReductions(e),s=this.getDayLength(e),F=this.getPlayerModifier(),r=this.getCourseModifier(e),t=this.getDayRate(e),u=this.getCustomersPerHour(e),i=this.getAdvertisingModifier(e);return .85**a*(s/25*t*F)/r*u*i}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(s=>s.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=.15*(e-15)**1.5),a}getCourseModifier(e){let a=1;const s=this.getCardsByDay(e);return s.some(F=>F.DishType===g.Dessert||F.Name==="Black Coffee"||F.Name==="Cakes")&&(a+=.25),s.some(F=>F.DishType===g.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((s,F)=>s+F.CustomerMultiplier,0)}getMapSize(){const a=new E(this.seed,5078598).useSubcontext(0).random.range(0,8);let s;switch(a){case 0:s="Small (2)";break;case 4:s="Medium (2)";break;case 1:case 5:s="Diner (1)";break;case 2:case 6:s="Large (3)";break;case 3:case 7:s="Huge (4)";break;default:throw new Error}return s}getLayoutInfo(){const a=new E(this.seed,5078598).useSubcontext(0).random.range(0,8);let s,F;switch(a){case 0:F=70,s=2;break;case 4:F=84,s=2;break;case 1:case 5:F=60,s=1;break;case 2:case 6:F=9*13,s=3;break;case 3:case 7:F=12*16,s=4;break;default:throw new Error}return[s,F]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new q(new E(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function ae(l){switch(l){case 1:return 1.25;case 2:return 1.1;default:return 1}}var De=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60,-1357906425\r
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
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0,\r
-4737636,False,False,Fairy Lights,False,False,,,8192,0,0,False,False,0,\r
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
-214126192,False,True,Wash Basin,False,False,,,16,0,0,False,False,60,-823922901\r
1083874952,True,False,Sink,False,False,,,17,0,0,False,False,20,1860904347:1467371088:-214126192:-823922901\r
1467371088,False,True,Power Sink,False,False,,,16,0,0,False,False,60,-214126192\r
1860904347,False,True,Soaking Sink,False,False,,,16,0,0,False,False,20,1467371088\r
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
-364231730,False,False,,False,False,,,0,0,0,False,False,60,\r
-121110359,False,False,,False,False,,,0,0,0,False,False,60,\r
-940358190,True,False,Leftover Bags,False,False,,,8,0,0,False,True,60,\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60,\r
1668340088,False,False,Appliance,False,False,,,0,0,0,False,False,60,\r
-450635801,False,False,Appliance,False,False,,,0,0,0,False,False,60,\r
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60,\r
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60,\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60,\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60,\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60,\r
`;const ye=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost","Upgrades"],Me=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number","number[]"],G=De.trim().split(`\r
`).map(l=>{const e=l.split(",");let a={};for(let s=0;s<e.length;s++){let F;switch(Me[s]){case"number":F=Number(e[s]);break;case"boolean":F=e[s]==="True";break;case"number[]":e[s]===""?F=[]:F=e[s].split(":").map(r=>Number(r));break;default:F=e[s]}a[ye[s]]=F}return a}),Q=new Map,Be=new Map;for(const l of G)Q.set(l.ID,l),Be.set(l.Name,l);const w=new Map,Pe=new Map;{let l=!0;const e=G.filter(s=>s.Upgrades.length);for(const s of e)for(const F of s.Upgrades)w.has(F)||w.set(F,new Set),(re=w.get(F))==null||re.add(s.ID);for(;l;){l=!1;for(const[s,F]of w){const r=F.size;for(const t of F)for(const u of w.get(t)??[])F.add(u);r!==F.size&&(l=!0)}}for(const[s,F]of w)F.delete(s);const a=Array.from(w.entries()).map(s=>{var F;return`${(F=Q.get(s[0]))==null?void 0:F.Name}:${Array.from(s[1]).map(r=>{var t;return(t=Q.get(r))==null?void 0:t.Name}).join(", ")}`});for(const s of w)Pe.set(s[0],Array.from(s[1]));console.log(a)}G.filter(l=>l.Name==="Booking Desk"||l.Name==="Blueprint Cabinet").sort((l,e)=>l.Name<e.Name?1:-1);const Ne=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater","Wash Basin"];for(const l of Ne);G.filter(l=>l.IsPurchasable||l.IsPurchasableAsUpgrade).length,["Blueprint Cabinet","Booking Desk"].map(l=>G.filter(e=>e.Name===l)[0]);let V=0;var we=self;let $=!1,L=1e3;we.onmessage=function(l){console.log("Worker: Message received from main script"),l.data.type==="start"?($=!0,Re(l.data.data)):(console.log("breaking search"),le(V,!0),$=!1)};async function Re({goalCards:l,goalAppliances:e=[],mapSizes:a,maxSeeds:s=1/0}){L=1e3,V=0;const F=new MessageChannel;let r;F.port2.onmessage=d=>{r()};const t=Se();let u;const i=l[0].cards.filter(d=>d.UnlockGroup===C.Special),o=l[0].cards.filter(d=>d.DishType!==g.Null);o.length||o.push(void 0);const n=l[0].cards.some(d=>d.Name==="Turbo")?[1,2,3,4,5,6,7,8,9,10,11,12,13,14]:[3,5,6,9,12,15,18,21,24,27].slice(0,l.length-1);let c=[-1/0,[]],T=s;e:for(;$&&T;){le(V);const d=new Promise(m=>{r=m});F.port1.postMessage(null),await d;const f=t();if(!f)break e;u=f,V++;const h=new be(u).mapSize;if(a.includes(h))for(const m of o){const y=xe(u,m?[...i,m]:[...i],l,e,n);if(y[0]<c[0]||!Number.isFinite(y[0]))continue;c=y,T--,ve({seed:u,mapSize:h,cards:y[1],blueprints:[],customerCount:void 0})}}}function ve(l){postMessage({type:"result",data:l})}function le(l,e=!1){const a={type:"progress",data:l};if(typeof l=="string"){postMessage(a);return}if(!e&&l<L)return;const s=l/ee*100,F=s.toExponential(1).match(/^([^e]*)(e.*)?$/);if(!F){debugger;throw new Error("????")}const[r,t,u]=F,i=Number(t)+.1;if(L=Number(i.toString()+u)/100*ee,Number.isNaN(L))debugger;a.data=s.toPrecision(2)+"%",s===100&&(a.data="100%"),postMessage(a)}["Blueprint Cabinet","Booking Desk"].flatMap(l=>G.filter(e=>e.Name===l));function xe(l,e,a,s,F){const r=new fe(l);for(const i of e)r.addCard(i);let t=1;const u=new Set;for(;t<=(F.at(-1)??15);t++){if(!F.includes(t))continue;const i=F.indexOf(t)+1,o=r.getUnlockOptions(t),n=Fe(o[0],a[i]),c=Fe(o[1],a[i]);let T=-1;if(n>-1&&c>-1)n<c?T=0:c<n?T=1:T=Math.floor(Math.random()*2);else{if(n===-1&&c===-1)return[-1/0,[]];n>=0?T=0:T=1}if(t!==5&&o[T].CustomerMultiplier<1)debugger;if(!o[T])throw console.log({options:o}),new Error;for(const d of o[T].IngredientProviders)u.add(d);r.addCard(o[T])}return[t,r.cards.map(i=>i.Name),r]}function Ae(l,e){for(let a=0;a<l.length;a++)if(l[a].ID===e.ID)return a;return-1}function Fe(l,e){return e.include?Ae(e.cards,l):e.cards.some(a=>a.ID===l.ID)?-1:0}})();
