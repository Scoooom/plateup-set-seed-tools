var Me=Object.defineProperty;var Ne=(b,m,G)=>m in b?Me(b,m,{enumerable:!0,configurable:!0,writable:!0,value:G}):b[m]=G;var T=(b,m,G)=>Ne(b,typeof m!="symbol"?m+"":m,G);(function(){"use strict";var b=(r=>(r[r.Generic=0]="Generic",r[r.Dish=1]="Dish",r[r.PrimaryTheme=3]="PrimaryTheme",r[r.SecondaryTheme=4]="SecondaryTheme",r[r.Franchise=5]="Franchise",r[r.Special=6]="Special",r))(b||{}),m=(r=>(r[r.Base=0]="Base",r[r.Main=1]="Main",r[r.Extra=2]="Extra",r[r.Side=3]="Side",r[r.Starter=4]="Starter",r[r.Dessert=5]="Dessert",r[r.Null=6]="Null",r))(m||{}),G=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,X=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const R=G.trim().split(/\r?\n/).filter(r=>r).map(r=>{var I,O;const[e,t,s,a,n,i,o,c,u,l,p,k]=r.split(","),F=Number(e),h=Number(s),f=a!=null&&a.length?a.split(":").map(w=>Number(w)):[],d=n.length?n.split(":").map(w=>Number(w)):[],g=i!=null&&i.length?(I=i==null?void 0:i.split(":"))==null?void 0:I.map(w=>Number(w)):[],D=o!=null&&o.length?(O=o==null?void 0:o.split(":"))==null?void 0:O.map(w=>Number(w)):[],M=c==="True",y=u==="True",C=Number(l),P=Number(p),z=Number(k);return{ID:F,Name:t,UnlockGroup:h,Requires:f,BlockedBy:d,RequiredProcesses:g,IngredientProviders:D,isMain:M,isStarterOrSide:y,DishType:C,CustomerMultiplier:P,DishValue:z}});function v(r,e=!0){const t=e&&r.some(s=>s.Name==="Community"||s.Name==="Lake");return R.filter(s=>{if(r.some(a=>a.ID===s.ID)||s.BlockedBy.some(a=>r.some(n=>n.ID===a))||s.Requires.some(a=>!r.some(n=>n.ID===a)))return!1;if(s.isStarterOrSide)if(r.some(a=>a.isMain)){if(r.length&&r[0].DishType===m.Dessert)debugger}else return!1;return!(!t&&s.DishType===m.Base)}).sort((s,a)=>s.ID-a.ID)}const _=[...[{ID:447437163,Name:"Country",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:m.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:m.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:m.Null,CustomerMultiplier:0,DishValue:0},R.filter(r=>r.Name==="Community")[0],R.filter(r=>r.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:m.Null,CustomerMultiplier:0,DishValue:0},R.filter(r=>r.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:b.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:m.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((r,e)=>r.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(r=>R.filter(e=>e.Name===r)[0]);const $=X.trim().split(`\r
`).filter(r=>r).map(r=>{var y,C;const[e,t,s,a,n,i,o,c,u,l]=r.split(","),p=Number(e),k=Number(s),F=a!=null&&a.length?(y=a==null?void 0:a.split(":"))==null?void 0:y.map(P=>Number(P)):[],h=n!=null&&n.length?(C=n==null?void 0:n.split(":"))==null?void 0:C.map(P=>Number(P)):[],f=i==="True",d=o==="True",g=Number(c),D=Number(u),M=Number(l);return{ID:p,Name:t,UnlockGroup:k,Requires:[],BlockedBy:[],RequiredProcesses:F,IngredientProviders:h,isMain:f,isStarterOrSide:d,DishType:g,CustomerMultiplier:D,DishValue:M}}).sort((r,e)=>r.Name<e.Name?-1:1),x={};for(const r of R)x[r.Name]=r;for(const r of $)x[r.Name]=r;for(const r of _)x[r.Name]=r;x.Coffee=x["Black Coffee"],x.Community.AKA="Autumn",x["Christmas Rush"].AKA="North Pole",x.Couples.AKA="Romantic";class E{constructor(e,t){T(this,"fixedSeed");T(this,"instance");T(this,"random");typeof e=="string"&&(e=ee(e)),this.fixedSeed=e,this.instance=t,this.random=new A(e+Math.imul(124192293,t))}useSubcontext(e){return new E(this.fixedSeed,124192293*e+this.instance)}}class A{constructor(e){T(this,"seed");const t=o=>Math.imul(1812433253,o)+1>>0,s=e>>0,a=t(s),n=t(a),i=t(n);this.seed=[s,a,n,i]}get value(){let e=this.seed.shift(),t=this.seed[2];return e^=e<<11,e^=e>>>8,t^=t>>>19,t=(t^e)>>0,this.seed.push(t),t}range(e,t){return(this.value>>>0)%(t-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function ee(r){const t=new TextEncoder().encode(r);let s=5381,a=t.length;for(;a--;)s=(s<<5)+s+t[a];return s>>0}function j(r,e,t){return new E(t,r*1231231+e)}class q{constructor(){T(this,"encourageGroups",[b.Special])}GetOptions(e,t,s){const a=s.random;let n=0;for(t!==15&&(n=this.getPad(e,t));n--;)a.value;let i=this.sortCandidates(e,t,s.random);const[o,c]=this.getUnlockGroups(t);let u=null,l=null;for(const p of i)if(!(p.UnlockGroup!==o&&p.UnlockGroup!==c)&&(u===null||u.UnlockGroup!==o&&p.UnlockGroup===o?u=p:(l===null||l.UnlockGroup!==c&&p.UnlockGroup===c)&&(l=p),u&&u.UnlockGroup===o&&l&&l.UnlockGroup===c))break;return[u,l]}getPad(e,t){if(t===15)return 0;let s=v(e).length+1;return t===5&&(s*=2),s}getCandidates(e,t){return v(e)}sortCandidates(e,t,s){let a=this.getCandidates(e,t),n=H(a,s);return s.valueFloat<.5&&n.sort((o,c)=>{let u=0;return V(o)&&u--,V(c)&&u++,u}),n}getUnlockGroups(e){return e===15?[b.Franchise,b.Franchise]:e===5?[b.PrimaryTheme,b.PrimaryTheme]:[b.Dish,b.Generic]}}class se extends q{getPad(e,t){let s=v(e,!1).length+1;return t!==5&&(s*=2),s}sortCandidates(e,t,s){let a=this.getCandidates(e,t),n=H(a,s);return s.valueFloat<.1&&n.sort((c,u)=>{let l=0;return c.Requires.length&&l--,u.Requires.length&&l++,l}),n}}class K extends q{constructor(){super(...arguments);T(this,"ThanksgivingCards",["Turkey","Nut Roast"])}getPad(t,s){if(s===15)return 0;let a=v(t,!1).length+1;if(s===5){let n=v(t);a+=n.length+2}return a}getCandidates(t,s){return s===5||s===15?v(t,!1):v(t)}sortCandidates(t,s,a){let n=this.getCandidates(t,s),i=H(n,a);return a.valueFloat<.5&&i.sort((u,l)=>{let p=0;return V(u,!1)&&p--,V(l,!1)&&p++,p}),s!==5&&s!==15&&a.valueFloat<.25&&i.sort((l,p)=>{let k=0;return this.ThanksgivingCards.includes(l.Name)&&k++,this.ThanksgivingCards.includes(p.Name)&&k--,k}),i}getUnlockGroups(t){return t===15?[b.Franchise,b.Franchise]:t===5?[b.PrimaryTheme,b.PrimaryTheme]:[b.Dish,b.Dish]}}class re extends K{constructor(){super(...arguments);T(this,"ThanksgivingCards",["Dumplings","Mandarin Starter","Bamboo","Stir Fry"])}}function H(r,e){return r.map(s=>[s,e.valueFloat]).sort((s,a)=>s[1]-a[1]).map(s=>s[0])}class te{constructor(e){T(this,"cards");T(this,"unlockPack");T(this,"seed");this.cards=[],this.unlockPack=new q,this.seed=e}addCard(e){if(e!==void 0){switch(e.Name){case"Community":this.unlockPack=new K;break;case"Turbo":this.unlockPack=new se;break;case"Lake":this.unlockPack=new re;break}this.cards.push(e)}}getUnlockOptions(e){const s=j(848292,e,this.seed).useSubcontext(1);return this.unlockPack.GetOptions(this.cards,e,s)}getCustomers(e,t=1){return[]}getGroupSizeRange(e){if(this.cards.some(n=>n.Name==="Community")){const n=Math.floor((e-1)/3);return[n+1,n+2]}let s=1,a=2;return this.cards.some(n=>n.Name==="Individual Dining")?[1,1]:(this.cards.some(n=>n.Name==="Medium Groups")&&(s++,a+=2),this.cards.some(n=>n.Name==="Large Groups")&&(s+=2,a+=4),this.cards.some(n=>n.Name==="Flexible Groups")&&(s--,a++),[s,a])}}function V(r,e=!0){return r.UnlockGroup===b.Special||r.DishType===m.Main||r.DishType===m.Extra?!0:e?!!r.Requires.length:!1}function ae(r,e){return Math.floor(Math.random()*(e-r))+r}function Q(r,e){let t=r.length;for(;t-- >1;){let s=ae(0,t+1);[r[t],r[s]]=[r[s],r[t]]}return r}const ne="12345678",W="bdghjmqrtvwxy346789",ie="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const r of ie);for(const r of ne);function le(){let r="";for(;r.length<8;)r+=W[Math.floor(Math.random()*W.length)];return r}function B(r){return r.length?r.reduce((e,t)=>e+t,0)/r.length:0}const L={};function U(r){const{starters:e,main:t,doubleOrderChance:s,desserts:a,sides:n,groupSizes:i}=r,o=[e,t,s,a,n,[...i].sort((h,f)=>h-f)].join("|");if(L[o])return L[o];let c=[0,0,0],u=[0,0,0,0],l=1-.75**n;if(e>0){c[0]=1;let h=1-.75**e;s===.5&&(h*=1.25,l*=1.25),u[0]=i.reduce((f,d)=>f+1+(d-1)*h,0)}const p=i.reduce((h,f)=>h+f);t&&(c[1]=1,u[1]=p),a>0&&(u[2]=p,t?(c[2]=1-.75**a,s===.5&&(c[2]*=1.25)):c[2]=1);let k=1;e>0&&(c[0]*=1+s,k*=1-s,u[0]*=c[0]),t&&(c[1]*=1+k*s,k*=1-s,u[1]*=c[1],u[3]=u[1]*l),a>0&&(c[2]*=1+k*s,k*=1-s,u[2]*=c[2]);const F=[c.map(h=>h*i.length),u];return L[o]=F,F}function oe(r){const{starters:e,main:t,doubleOrderChance:s,desserts:a,sides:n,groupSizes:i}=r;let o=[0,0,0],c=[0,0,0,0],u=1-.75**e,l=1-.75**a,p=1-.75**n;s===.5&&(u*=1.25,l*=1.25,p*=1.25);const k=d=>{o[0]++,c[0]++;for(let g=0;g<d-1;g++)Math.random()<u&&c[0]++},F=d=>{o[1]++,c[1]+=d;for(let g=0;g<d;g++)Math.random()<p&&c[3]++},h=d=>{o[2]++,c[2]+=d};for(const d of i){let g=!1;e>0&&(k(d),!g&&Math.random()<s&&(g=!0,k(d))),F(d),!g&&Math.random()<s&&(g=!0,F(d)),a>0&&Math.random()<l&&(h(d),!g&&Math.random()<s&&(g=!0,h(d)))}return[o,c]}const ue={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},Y={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(r=>Y[r]=!0);class ce{constructor(e,t=[],s=[]){T(this,"seed");T(this,"mapSize");T(this,"frontDoor");T(this,"startingCards");T(this,"cards");T(this,"playerCount");T(this,"turbo");T(this,"_actionInfoCacheByCards",{});T(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=t,this.cards=s,this.playerCount=ue[this.mapSize],this.turbo=this.startingCards.some(a=>{if(a===void 0){console.log({startingCards:t});debugger}return a.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const t=this.getCardsByDay(e),s=this.getGroupSizes(e);let a=!1,n=!1,i=0,o=[],c=[],u=0,l=[],p=0,k=[];for(const C of t)switch(C.Name==="All You Can Eat"&&(a=!0),C.Name==="Double Helpings"&&(n=!0),C.DishType){case m.Dessert:u++,C.DishValue&&l.push(C.DishValue);break;case m.Starter:C.DishValue&&o.push(C.DishValue),i++;break;case m.Side:C.DishValue&&k.push(C.DishValue),p++;break;case m.Main:case m.Base:C.Name==="Tacos"?(c.push(2),c.push(3)):C.DishValue&&c.push(C.DishValue)}let F=n?.5:a?.25:0,h=[0,0,0,0];if(h[0]=B(o),h[1]=B(c),h[2]=B(l),h[3]=B(k),n)for(let C=0;C<3;C++)h[C]&&(h[C]+=3);const[f,d]=U({starters:i,main:!!h[1],doubleOrderChance:F,desserts:u,sides:p,groupSizes:s});let g=0;for(let C=0;C<d.length;C++)g+=d[C]*h[C];const D=J(this.playerCount),M=this.getBookingDeskCount(e),y=this.getBookingDeskMoney(e);return Math.ceil(D*(g+M*y))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const t=this.getCardsByDay(e),s=this.getGroupSizes(e);let a=!1,n=!1,i=0,o=[],c=[],u=0,l=[],p=0,k=[];for(const d of t)switch(d.Name==="All You Can Eat"&&(a=!0),d.Name==="Double Helpings"&&(n=!0),d.DishType){case m.Dessert:u++,d.DishValue&&l.push(d.DishValue);break;case m.Starter:d.DishValue&&o.push(d.DishValue),i++;break;case m.Side:d.DishValue&&k.push(d.DishValue),p++;break;case m.Main:case m.Base:if(!d.isMain){u++,d.DishValue&&l.push(d.DishValue);break}d.Name==="Tacos"?(c.push(2),c.push(3)):d.DishValue&&c.push(d.DishValue)}let F=n?.5:a?.25:0,h=[0,0,0,0];if(h[0]=B(o),h[1]=B(c),h[2]=B(l),h[3]=B(k),n)for(let d=0;d<3;d++)h[d]&&(h[d]+=3);return U({starters:i,main:!!h[1],doubleOrderChance:F,desserts:u,sides:p,groupSizes:s})}actionInfo(e){if(e===0)return 0;const t=this.getCardsByDay(e),s=e.toString()+":"+t.map(S=>S.Name).sort().join(","),a=this._actionInfoCacheByCards[s];if(a)return a;let n=0;const i={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let o=0;for(let S=0;S<t.length;S++)if(t[S].DishType!==m.Null){const N=t[S].Name;o=i[N]??20;break}let c=-1,u=[1,1,1],l=[[],[o],[],[]],p=0;const k=this.getGroupSizes(e);let F=!1,h=!1,f=0,d=[],g=[],D=0,M=[],y=0,C=[],P=!1,z=!1;for(const S of t){switch(S.Name==="All You Can Eat"&&(F=!0),S.Name==="Double Helpings"&&(h=!0),S.Name){case"Picky Eaters":P=!0;break;case"Leisurely Eating":z=!0,p+=2;break;case"Instant Service":for(let N=0;N<3;N++)u[N]--;break;case"Ice Cream":l[2].push(5.125);break;case"Cheese Board":l[2].push(10);break;case"Cherry Pies":l[2].push(11);break;case"Apple Pies":l[2].push(15);break;case"Pumpkin Pies":l[2].push(16);break;case"Carrot Soup":case"Meat Soup":l[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":u[0]=4,l[0].push(8);break;case"Broccoli Cheese Soup":l[0].push(5),u[0]=4;break;case"Pumpkin Seed":l[0].push(3*8);break;case"Bread":l[0].push(5*3);break;case"Mandarin Starter":l[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":l[3].push(2);break;case"Onion Rings":l[3].push(8);break;case"Corn on the Cob":l[3].push(6);break;case"Chips":l[3].push(7);break;case"Roast Potato":l[3].push(4);break}switch(S.DishType){case m.Dessert:D++,S.DishValue&&M.push(S.DishValue);break;case m.Starter:S.DishValue&&d.push(S.DishValue),f++;break;case m.Side:S.DishValue&&C.push(S.DishValue),y++;break;case m.Main:case m.Base:S.Name==="Tacos"?(g.push(2),g.push(3)):S.DishValue&&g.push(S.DishValue);break;case m.Extra:S.Name==="Seaweed"?(l[1][0]+=1.75,c+=2):S.Name==="Dumpling - Soy Sauce"?l[1][0]+=.4:S.Name==="Breakfast Beans"?l[1][0]+=1+3/4:S.Name==="Breakfast Eggs"?l[1][0]+=6:S.Name==="Breakfast Extras"&&(c++,l[1][0]+=1.5*2),c++;break}}e>6&&(l[3]=[]),P&&(z&&!F||(l[1][0]+=2,c++));let I=h?.5:F?.25:0;n+=k.length*p;const[O,w]=U({starters:f,main:!0,doubleOrderChance:I,desserts:D,sides:y,groupSizes:k});O.forEach((S,N)=>n+=S*u[N]);for(const S of l)for(let N=0;N<S.length;N++)c>0&&(S[N]+=c),c+=1;return w.forEach((S,N)=>{var Z;if((Z=l[N])!=null&&Z.length){if(!N){const be=Math.ceil(S/l[N].length/3);n+=be*l[N].reduce((ye,Te)=>ye+Te,0);return}n+=S*B(l[N])}}),this._actionInfoCacheByCards[s]=n,n}simulateMoney(e){if(e===0)return this.turbo?30:0;const t=this.getCardsByDay(e),s=this.getGroupSizes(e);let a=!1,n=!1,i=[[],[],[],[]];for(const f of t)switch(f.Name==="All You Can Eat"&&(a=!0),f.Name==="Double Helpings"&&(n=!0),f.DishType){case m.Main:case m.Base:f.Name==="Tacos"?i[1].push(2.5):f.DishValue&&i[1].push(f.DishValue);break;case m.Dessert:f.DishValue&&i[2].push(f.DishValue);break;case m.Starter:f.DishValue&&i[0].push(f.DishValue);break;case m.Side:f.DishValue&&i[3].push(f.DishValue);break}let o=n?.5:a?.25:0,c=0;n&&(c+=3);const[u,l]=oe({starters:i[0].length,main:!!i[1].length,doubleOrderChance:o,desserts:i[2].length,sides:i[3].length,groupSizes:s});let p=0;for(let f=0;f<l.length;f++){let d=l[f];for(;d--;){f<3&&(p+=c);let g=i[f][Math.floor(Math.random()*i[f].length)];g%1&&(Math.random()<g%1?g=Math.ceil(g):g=Math.floor(g)),p+=g}}const k=J(this.playerCount),F=this.getBookingDeskCount(e),h=this.getBookingDeskMoney(e);return Math.ceil(k*(p+F*h))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let t;this.turbo?t=e-1:(t=Math.max(0,Math.floor((e-1)/3)),e>5&&t++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,t)]}return this._cardsByDay[e]}getBookingDeskCount(e,t=1){const s=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(u=>u.Name==="Herd Mentality"))return Math.min(s,3)+1;const a=[],n=this.getCardsByDay(e);let i=1;(this.turbo||n.some(u=>u.Name==="Morning Rush"))&&a.push(.2),(this.turbo||n.some(u=>u.Name==="Lunch Rush"))&&a.push(.5),(this.turbo||n.some(u=>u.Name==="Dinner Rush"))&&a.push(.8);const o=t/(this.playerCount||2)/this.getDayLength(e),c=.1/s;i+=s-1;for(let u=1;u<s;u++){const l=u/s,p=l-c-o,k=l+c+o;for(let F=a.length-1;F>=0;F--){const h=a[F];p<=h&&h<=k&&a.splice(F,1)}}return i+=a.length,i}getNonRushGroupCount(e){const t=this.getExpectedCustomers(e),s=this.getCardsByDay(e).filter(i=>i.Name==="Closing Time?").length*.2,a=this.getExpectedGroupSize(e),n=t*(1+s)/a;return Math.ceil(n)}getCustomerCount(e){return this.getGroupSizes(e).reduce((t,s)=>t+s,0)}getGroupSizes(e,t=!1){const s=this.seed?j(1997821,e,this.seed).random:new A(Math.floor(Math.random()*4294967295)),a=this.getNonRushGroupCount(e),n=this.getCardsByDay(e).some(F=>F.Name==="Herd Mentality");let i=a,o=[],[c,u]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?u=c:this.seed==="_max"&&(c=u);{let F=i-1;for(;F--;)s.value}for(;i--;)o.push(s.range(c,u+1)),!n&&i!==a-1&&s.value;let l=this.turbo?3:this.getCardsByDay(e).filter(F=>Y[F.Name]).length,p=Math.ceil(Math.max(1,a*.15));t&&(p=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15)));let k=l*p;for(;k--;)o.push(s.range(c,u+1));if(!this.seed||this.seed[0]==="_"){let F=c;for(let h=0;h<o.length;h++)o[h]=F,F++,F>u&&(F=c)}return o}getExpectedGroupSize(e){const t=this.getGroupSizeRange(e);return(t[0]+t[1])/2}getGroupSizeRange(e){let t=1,s=2;for(const a of this.getCardsByDay(e))switch(a.Name){case"Individual Dining":s--;break;case"Medium Groups":t++,s+=2;break;case"Large Groups":t+=2,s+=2;break;case"Flexible Dining":t--,s++;break;case"Community":const n=Math.floor((e-1)/3);t+=n,s+=n;break}return[t,s]}getExpectedCustomers(e){const t=this.getReductions(e),s=this.getDayLength(e),a=this.getPlayerModifier(),n=this.getCourseModifier(e),i=this.getDayRate(e),o=this.getCustomersPerHour(e),c=this.getAdvertisingModifier(e);return .85**t*(s/25*i*a)/n*o*c}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(s=>s.Name==="Advertising").length}getDayRate(e){let t=1;switch(e){case 1:t=1.25;break;case 2:t=1.5;break;default:t=1.5+.15*(e-3);break}return e>15&&(t+=(this.turbo?.1:0)*(e-15)**1.5),t}getCourseModifier(e){let t=1;const s=this.getCardsByDay(e);return s.some(a=>a.DishType===m.Dessert||a.Name==="Black Coffee"||a.Name==="Cakes")&&(t+=.25),s.some(a=>a.DishType===m.Starter)&&(t+=.25),t}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let t=1;return this.turbo&&(t=1.5,t*=1+e/10),t}getReductions(e){return this.getCardsByDay(e).reduce((s,a)=>s+a.CustomerMultiplier,0)}getMapSize(){const t=new E(this.seed,5078598).useSubcontext(0).random.range(0,8);let s;switch(t){case 0:s="Small (2)";break;case 4:s="Medium (2)";break;case 1:case 5:s="Diner (1)";break;case 2:case 6:s="Large (3)";break;case 3:case 7:s="Huge (4)";break;default:throw new Error}return s}getLayoutInfo(){const t=new E(this.seed,5078598).useSubcontext(0).random.range(0,8);let s,a;switch(t){case 0:a=70,s=2;break;case 4:a=84,s=2;break;case 1:case 5:a=60,s=1;break;case 2:case 6:a=9*13,s=3;break;case 3:case 7:a=12*16,s=4;break;default:throw new Error}return[s,a]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new A(new E(this.seed,98234234).useSubcontext(0).random.value),t=23;for(;t--;)e.value;return e.range(0,4)}}function J(r){switch(r){case 1:return 1.25;case 2:return 1.1;default:return 1}}_.filter(r=>r.Name==="Community")[0],R.filter(r=>r.Name==="Salad")[0];const he=[3,5,6,9,12],de=self;de.onmessage=r=>{let{n:e,data:{allowedTables:t,startingDishes:s,mapSettings:a}}=r.data;Q(a),Q(s);let n=[...s];for(;e--;){n.length||(n=[...s],a.shift());const i=a[0];if(!i)break;const o=n.pop();fe(r.data.type,i,o,t)}};function fe(r,e,t,s){let a;switch(r){case"strict":a=ge;break;case"flex":a=me;break;case"priorityModel":let n=!1;(e.Name==="Community"||e.Name==="Lake")&&(n=!0),n?a=Ce:a=ke,e.Name==="Turbo"&&(a=()=>!0);break;default:throw new Error}for(;;){const n=le(),i=new ce(n).getMapSize();if(!s.includes(i))continue;let o=new te(n);if(o.addCard(e),o.addCard(t),a(o,he)){Fe({seed:n,mapSize:i,startingDish:t.Name,setting:e.AKA??e.Name});return}}}function Fe(r){pe({type:"result",data:r})}function pe(r){postMessage(r)}function ge(r,e){let t=[r.cards];for(let s=0;s<e.length;s++){const a=new Set;let n=[];for(const i of t){r.cards=i;const o=r.getUnlockOptions(e[s]);if(a.add(o[0].Name),a.add(o[1].Name),a.size>2)return!1;n.push([...i,o[0]]),n.push([...i,o[1]])}t=n}return!0}function me(r,e){let t=[r.cards];const s=new Set;for(let a=0;a<e.length;a++){let n=[];for(const i of t){r.cards=i;const o=r.getUnlockOptions(e[a]);if(s.add(o[0].Name),s.add(o[1].Name),s.size>10)return!1;n.push([...i,o[0]]),n.push([...i,o[1]])}t=n}return!0}function ke(r,e){let s=[r.cards],a={};for(let n=0;n<e.length;n++){let i=[[[]],[[]]],o=[new Set,new Set],c=[new Map,new Map],u=[];for(let l=0;l<s.length;l++){const p=s[l];r.cards=p;const k=e[n],F=r.getUnlockOptions(k);if(k===5){for(const h of[0,1]){o[0].add(F[h].ID);const f=[...p,F[h]],d=f.map(g=>g.ID).sort((g,D)=>g-D).join(",");a[d]||(a[d]=!0,u.push(f))}if(o[0].size>2)return!1;continue}for(let h=0;h<=1;h++){const f=F[h],d=[...p,f],g=d.map(D=>D.ID).sort((D,M)=>D-M).join(",");if(a[g]?console.log("prevented dupe path"):(a[g]=!0,u.push(d)),c[h].set(p,f),!o[h].has(f.ID)){o[h].add(f.ID),i[h]=i[h].flatMap(D=>{let M=[];for(let y=0;y<=D.length;y++){const C=[...D];C.splice(y,0,f),M.push(C)}return M});for(let D=0;D<i[h].length;D++){const M=i[h][D];let y=!0;for(let C=0;C<=l;C++){const P=s[C],z=Se(r,k,P,M),I=c[h].get(P);if((I==null?void 0:I.ID)!==z.ID){y=!1;break}}y||(i[h].splice(D,1),D--)}if(!i[h].length)return!1}}}s=u}return!0}function Ce(r,e){let s=[r.cards];for(let a=0;a<e.length;a++){let n=[[]],i=new Set,o=new Map,c=[];for(let u=0;u<s.length;u++){const l=s[u];r.cards=l;const p=e[a],k=r.getUnlockOptions(p);o.set(l,k);for(let F=0;F<=1;F++){const h=k[F];c.push([...l,h]),!i.has(h.ID)&&(i.add(h.ID),n=n.flatMap(f=>{let d=[];for(let g=0;g<=f.length;g++){const D=[...f];D.splice(g,0,h),d.push(D)}return d}))}for(let F=0;F<n.length;F++){const h=n[F];let f=!0;for(let d=0;d<=u;d++){const g=s[d],D=De(r,p,g,h),M=o.get(g);if(!D.some(y=>y.ID===M[0].ID)||!D.some(y=>y.ID===M[1].ID)){f=!1;break}}f||(n.splice(F,1),F--)}if(!n.length)return!1}s=c}return!0}function Se(r,e,t,s){const a=r.unlockPack.getCandidates(t,e);for(const n of s)if(a.some(i=>i.ID===n.ID))return n;throw new Error("no valid options")}function De(r,e,t,s){const a=r.unlockPack.getCandidates(t,e),n=[];for(const i of s)if(a.some(o=>o.ID===i.ID)&&(n.push(i),n.length===2))return n;throw new Error("not enough valid options")}})();
