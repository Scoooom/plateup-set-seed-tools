var ra=Object.defineProperty;var ta=(de,Ce,we)=>Ce in de?ra(de,Ce,{enumerable:!0,configurable:!0,writable:!0,value:we}):de[Ce]=we;var I=(de,Ce,we)=>ta(de,typeof Ce!="symbol"?Ce+"":Ce,we);(function(){"use strict";var hs;class de{constructor(e,l){I(this,"array");I(this,"objectiveFunctions");this.array=Ce(e,l),this.objectiveFunctions=l}clear(){this.array=[]}add(e){let l=this.array.length;for(;l--;){let{better:a,worse:r}=we(e,this.array[l],this.objectiveFunctions);if(r)return!1;a&&this.array.splice(l,1)}return this.array.push(e),!0}}function Ce(s,e){if(!s.length)return s;const l=[...s];let a=[];a.push(l.pop());e:for(;l.length;){const r=l.pop();let n=a.length;for(;n--;){let{better:u,worse:c}=we(r,a[n],e);if(c)continue e;u&&a.splice(n,1)}a.push(r)}return a}function we(s,e,l){let a=!0,r=!0,n=0;for(;(a||r)&&n<l.length;){const u=l[n](s,e);u<0?r=!1:u>0&&(a=!1),n++}return{better:a,worse:r}}var ks=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60,-1357906425\r
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
-1380985631,True,False,Banner,False,False,,,8192,0,0,False,False,0,\r
-4737636,True,False,Fairy Lights,False,False,,,8192,0,0,False,False,0,\r
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
-1889835507,True,False,Present Stack,False,False,,,8192,0,0,False,False,0,\r
-380823608,True,False,Tinsel,False,False,,,8192,0,0,False,False,0,\r
-602487625,True,False,Christmas Tree,False,False,,,8192,0,0,False,False,0,\r
-302306254,True,False,Wreath,False,False,,,8192,0,0,False,False,0,\r
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
`;const ys=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost","Upgrades"],Ps=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number","number[]"],$e=ks.trim().split(`\r
`).map(s=>{const e=s.split(",");let l={};for(let a=0;a<e.length;a++){let r;switch(Ps[a]){case"number":r=Number(e[a]);break;case"boolean":r=e[a]==="True";break;case"number[]":e[a]===""?r=[]:r=e[a].split(":").map(n=>Number(n));break;default:r=e[a]}l[ys[a]]=r}return l});class Ms{constructor(e){I(this,"Staple");I(this,"Tags");I(this,"StapleWhenMissing");I(this,"Appliance");I(this,"IsRemoved");I(this,"Filter");I(this,"DecorationRequired");I(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var ce=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(ce||{}),ne=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(ne||{});const xe={DefaultShoppingTag:892};var es=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(es||{}),We=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(We||{});const Ke=new Map,ss=new Map;for(const s of $e)Ke.set(s.ID,s),ss.set(s.Name,s);const ye=new Map,Ds=new Map,vs=new Map;{let s=!0;const e=$e.filter(a=>a.Upgrades.length);for(const a of e)for(const r of a.Upgrades)ye.has(r)||ye.set(r,new Set),(hs=ye.get(r))==null||hs.add(a.ID);for(;s;){s=!1;for(const[a,r]of ye){const n=r.size;for(const u of r)for(const c of ye.get(u)??[])r.add(c);n!==r.size&&(s=!0)}}for(const[a,r]of ye)r.delete(a),vs.set(a,Array.from(r));const l=Array.from(ye.entries()).map(a=>{var r;return`${(r=Ke.get(a[0]))==null?void 0:r.Name}:${Array.from(a[1]).map(n=>{var u;return(u=Ke.get(n))==null?void 0:u.Name}).join(", ")}`});for(const a of ye)Ds.set(a[0],Array.from(a[1]));console.log(l)}$e.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,e)=>s.Name<e.Name?1:-1);const Se=$e;var Bs="38";const as=Number(Bs);function ws(s,e){return Math.floor(Math.random()*(e-s))+s}function Ye(s,e){let l=s.length;for(;l-- >1;){let a=e===void 0?ws(0,l+1):e.range(0,l+1);[s[l],s[a]]=[s[a],s[l]]}return s}const Rs="12345678",Ns="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of Ns);for(const s of Rs);function ke(s){return s.length?s.reduce((e,l)=>e+l,0)/s.length:0}class Re{constructor(e,l){I(this,"fixedSeed");I(this,"instance");I(this,"random");typeof e=="string"&&(e=Is(e)),this.fixedSeed=e,this.instance=l,this.random=new Je(e+Math.imul(124192293,l))}useSubcontext(e){return new Re(this.fixedSeed,124192293*e+this.instance)}}class Je{constructor(e){I(this,"seed");const l=c=>Math.imul(1812433253,c)+1>>0,a=e>>0,r=l(a),n=l(r),u=l(n);this.seed=[a,r,n,u]}get value(){let e=this.seed.shift(),l=this.seed[2];return e^=e<<11,e^=e>>>8,l^=l>>>19,l=(l^e)>>0,this.seed.push(l),l}range(e,l){return(this.value>>>0)%(l-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Is(s){const l=new TextEncoder().encode(s);let a=5381,r=l.length;for(;r--;)a=(a<<5)+a+l[r];return a>>0}function ls(s,e,l){return new Re(l,s*1231231+e)}var Ne=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(Ne||{}),E=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(E||{});const As=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater","Wash Basin"];for(const s of As);const rs=Se.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length,xs=["Blueprint Cabinet","Booking Desk"].map(s=>Se.filter(e=>e.Name===s)[0]);class Os{constructor(e,l=0){I(this,"seed");I(this,"mapSize");I(this,"numTiles");I(this,"baseUpgradeChance");I(this,"OwnedAppliances");I(this,"Cards");I(this,"Theme");I(this,"extraSpawns");I(this,"cache",new Array(15).fill(0).map(()=>new Map));I(this,"cacheOverridePlated");I(this,"cacheOverrideProcesses");I(this,"baseSpawnCount");I(this,"newestCard");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=l,this.OwnedAppliances=[...xs],this.Cards=[],this.Theme=We.Null,this.baseSpawnCount=5,this.extraSpawns=[]}clearCache(){}getLayoutInfo(){const l=new Re(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"?(this.baseUpgradeChance=.25,this.baseSpawnCount=7):e.Name==="Christmas Rush"&&(this.extraSpawns=[ss.get("Conveyor")]),e.Name==="Lake"&&(this.baseUpgradeChance=.2),e.UnlockGroup===Ne.PrimaryTheme&&(this.Theme=We[e.Name]),this.newestCard=e)}handleNewestRerollEffects(){this.handleNewCardRerollEffects(this.newestCard)}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(l=>Se.filter(a=>a.ID===l))))}addCard(e){var l;e!==void 0&&(((l=this.newestCard)==null?void 0:l.ID)===e.ID&&(this.newestCard=void 0),this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}_getNetPrngAdvancements(e,l,a){let r=0,n=e.blueprintCount;return l%5===0&&(n+=8-this.baseSpawnCount,a&&(n+=2)),r+=n*(rs-1+1),e.spawnInside||(r+=ts(e.playerInside,this.numTiles)),r+=as,r}getPrngAdvancements(e,l){let a=0;for(let r=0;r<e.length;r++){const n=e[r];let u=n.blueprintCount;l%5===0&&(u+=8-this.baseSpawnCount,r===0&&(u+=2)),a+=u*(rs-1+1),n.spawnInside||(a+=ts(n.playerInside,this.numTiles)),a+=as}return a}buildShopOptions(e,l,a,r,n){const u=a.some(i=>i.Name==="Couples");let c=[];for(const i of Se)if(!(!i.IsPurchasable&&!i.IsPurchasableAsUpgrade)){var t=new Ms(i);const k=t.Appliance.Name;(t.Staple==ce.NonStaple||t.Staple==ce.WhenMissing)&&((t.Tags&ne.Basic)>ne.None?t.Staple=ce.FixedStaple:t.StapleWhenMissing?(k!="Research Desk"&&k!="Blueprint Cabinet"&&k!="Plates"&&console.log(`Unexpected ${k} StapleWhenMissing Appliance`),e.some(F=>F.ID===t.Appliance.ID)?t.Staple=ce.NonStaple:t.Staple=ce.WhenMissing):u&&k==="Flower Pot"&&(t.Staple=ce.BonusStaple));const m=t.Appliance;e:{if(m.SellOnlyAsDuplicate){if(!e.some(F=>F.ID===m.ID)){t.IsRemoved=!0;break e}}else if(m.RequiresForShop.length>0){let F=!1;for(const o of m.RequiresForShop)e.some(T=>T.ID===o)&&(F=!0);if(!F){t.IsRemoved=!0;break e}}else if(m.SellOnlyAsUnique&&(m.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${m.Name}, ${m.ID}`),e.some(F=>F.ID===m.ID))){t.IsRemoved=!0;break e}if(t.Filter==es.RefreshableProvider&&!e.some(F=>F.AllowRefreshes)){t.IsRemoved=!0;break e}if(t.DecorationRequired!=We.Null&&t.DecorationRequired!=l){t.IsRemoved=!0;break e}if(m.RequiresProcessForShop.length>0&&(n?!m.RequiresProcessForShop.some(F=>n.includes(F)):!m.RequiresProcessForShop.some(F=>a.some(o=>o.RequiredProcesses.includes(F))))){t.IsRemoved=!0;break e}}c.push(t)}return c}initRandom(e){return ls(823828,e,this.seed)}getAppliances(e,l,a,r){var m;(a!==this.cacheOverridePlated||(r==null?void 0:r.length)!==((m=this.cacheOverrideProcesses)==null?void 0:m.length)||r!=null&&r.some((F,o)=>{var T;return F!==((T=this.cacheOverrideProcesses)==null?void 0:T[o])}))&&(this.cacheOverridePlated=a,this.cacheOverrideProcesses=r,this.cache.forEach(F=>F.clear()));const n=e.length===1,u=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let c=e[e.length-1].blueprintCount,t;if(l%5==0){n?c=10:c+=8-this.baseSpawnCount,t=[];for(let F=0;F<c;F++)t[F]=ne.Decoration;if(n)for(const F of[1,2])t[t.length-F]=ne.SpecialEvent}else if(e.length>1){t=[];for(let F=0;F<c;F++)t[F]=xe.DefaultShoppingTag}else{const F=xe.DefaultShoppingTag,o=Math.max(1,c),T=Math.max(0,Math.min(u.filter(d=>d.Staple!==ce.NonStaple&&!d.IsRemoved).length,Math.max(2,4-Math.floor(l/5)),o)),b=Math.max(0,o-T);c=o,t=[];for(let d=0;d<T;d++)t[d]=ne.Basic;for(let d=T;d<T+b;d++)t[d]=F}const i=this.initRandom(l).random;let f=this.getPrngAdvancements(e.slice(0,e.length-1),l);if(this.cache[l].has(f)&&this.cache[l].get(f).length>=c)return this.cache[l].get(f).slice(0,c);const k=f;for(;f--;)i.value;{const F=[...u],o=[],T=this.getUpgradeChance(l),b=[];for(let d=0;d<c;d++){const U=t[d],_=i.valueFloat<T;Ye(F,i);for(let v=0;v<F.length;v++){const x=F[v];if(x.IsRemoved||b.includes(x.Appliance)||!x.MatchesRequestTags(U)||!_&&x.Staple==ce.NonStaple&&x.SellAsUpgrade)continue;U!=ne.Decoration&&b.push(x.Appliance),o[d]=x.Appliance;break}o[d]==null}return e.length===1&&o.splice(0,0,...this.extraSpawns),this.cache[l].set(k,o),o}}_getAllAppliances(e,l,a,r){const n=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let u,c;if(l%5==0)u=[],c=ne.Decoration;else if(e)c=xe.DefaultShoppingTag,u=[];else{const i=xe.DefaultShoppingTag,f=Math.max(0,Math.min(n.filter(k=>k.Staple!==ce.NonStaple&&!k.IsRemoved).length,Math.max(2,4-Math.floor(l/5))));u=[];for(let k=0;k<f;k++)u[k]=ne.Basic;c=i}const t=this.initRandom(l).random;for(;e--;)t.value;{const i=[...n],f=[],k=this.getUpgradeChance(l),m=[];let F=-1;for(;;){F++;let o=u.shift();o===void 0&&(o=c);const b=t.valueFloat<k;Ye(i,t);for(let d=0;d<i.length;d++){const U=i[d];if(U.IsRemoved||m.includes(U.Appliance)||!U.MatchesRequestTags(o)||!b&&U.Staple==ce.NonStaple&&U.SellAsUpgrade)continue;o!=ne.Decoration&&m.push(U.Appliance),f[F]=U.Appliance;break}if(f[F]==null)break}return f}}_getAppliances(e,l,a,r,n){var m;(r!==this.cacheOverridePlated||(n==null?void 0:n.length)!==((m=this.cacheOverrideProcesses)==null?void 0:m.length)||n!=null&&n.some((F,o)=>{var T;return F!==((T=this.cacheOverrideProcesses)==null?void 0:T[o])}))&&(this.cacheOverridePlated=r,this.cacheOverrideProcesses=n,this.cache.forEach(F=>F.clear()));const u=e===0,c=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,r,n);let t=l.blueprintCount,i;if(a%5==0){u?t=10:t+=8-this.baseSpawnCount,i=[];for(let F=0;F<t;F++)i[F]=ne.Decoration;if(u)for(const F of[1,2])i[i.length-F]=ne.SpecialEvent}else if(e){i=[];for(let F=0;F<t;F++)i[F]=xe.DefaultShoppingTag}else{const F=xe.DefaultShoppingTag,o=Math.max(1,t),T=Math.max(0,Math.min(c.filter(d=>d.Staple!==ce.NonStaple&&!d.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),o)),b=Math.max(0,o-T);t=o,i=[];for(let d=0;d<T;d++)i[d]=ne.Basic;for(let d=T;d<T+b;d++)i[d]=F}const f=this.initRandom(a).random;if(this.cache[a].has(e)&&this.cache[a].get(e).length>=t+(e?0:this.extraSpawns.length))return this.cache[a].get(e).slice(0,t);const k=e;for(;e--;)f.value;{const F=[...c],o=[],T=this.getUpgradeChance(a),b=[];for(let d=0;d<t;d++){const U=i[d],_=f.valueFloat<T;Ye(F,f);for(let v=0;v<F.length;v++){const x=F[v];if(x.IsRemoved||b.includes(x.Appliance)||!x.MatchesRequestTags(U)||!_&&x.Staple==ce.NonStaple&&x.SellAsUpgrade)continue;U!=ne.Decoration&&b.push(x.Appliance),o[d]=x.Appliance;break}o[d]==null}return e||o.splice(0,0,...this.extraSpawns),this.cache[a].set(k,o),o}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function ts(s,e){return s?e-2:e-1}var Es=`373996608,Ice Cream,1,,934171642,,-1533430406,False,False,5,1,2\r
-2075899,Breakfast,1,,,-523839730:1972879238:620897674,380220741:925796718,True,False,0,0,5\r
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
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-905438738,False,False,5,1,3\r
-133939790,Pies,1,,,1972879238:-523839730:620897674,925796718:-484165118:380220741,True,False,0,1,8\r
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
550743424,Pizza,1,,,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
1434421325,Mushroom Pizza,1,550743424,,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0\r
-2071275506,Onion Pizza,1,550743424,,2087693779:1972879238:-523839730:620897674,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0\r
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
536093200,Nut Roast,1,1551533879,,2087693779:1972879238:620897674,1834063794:380220741:-2042103798,True,False,1,1,5\r
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1\r
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,2\r
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,2\r
12170609,Cherry Pies,1,,,1972879238,148543530:925796718,False,False,5,1,3\r
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
367917843,Dumplings,1,,,1972879238:-523839730:2087693779:620897674,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
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
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023,False,False,2,1,3\r
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
934171642,Sundaes,1,,373996608,,-1533430406:602693523,False,False,0,0,0\r
-690833761,Giant Sundaes,1,934171642,,,,False,False,5,1,0\r
431260200,Sundae Syrups,1,934171642,,,825737084:483880621,False,False,2,1,0\r
1879652468,Sundae Toppings,1,934171642,,2087693779,148543530:1834063794,False,False,2,1,0\r
-1272159363,Sandwiches,1,,,2087693779:-523839730:1972879238,925796718:-1673135814:1193867305:-712909563,True,False,0,1,3\r
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
`,Hs=`-959076098,Steak,1,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
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
934171642,Sundaes,1,,-1533430406:602693523,False,False,0,0,0\r
1743900205,Fish,1,1972879238:620897674,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238:620897674,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:1972879238:620897674,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238:620897674,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`;const Oe=Es.trim().split(/\r?\n/).filter(s=>s).map(s=>{var Me,re;const[e,l,a,r,n,u,c,t,i,f,k,m]=s.split(","),F=Number(e),o=Number(a),T=r!=null&&r.length?r.split(":").map($=>Number($)):[],b=n.length?n.split(":").map($=>Number($)):[],d=u!=null&&u.length?(Me=u==null?void 0:u.split(":"))==null?void 0:Me.map($=>Number($)):[],U=c!=null&&c.length?(re=c==null?void 0:c.split(":"))==null?void 0:re.map($=>Number($)):[],Fe=t==="True",_=i==="True",v=Number(f),x=Number(k),ie=Number(m);return{ID:F,Name:l,UnlockGroup:o,Requires:T,BlockedBy:b,RequiredProcesses:d,IngredientProviders:U,isMain:Fe,isStarterOrSide:_,DishType:v,CustomerMultiplier:x,DishValue:ie}}),ns=[...[{ID:447437163,Name:"Country",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},Oe.filter(s=>s.Name==="Community")[0],Oe.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},Oe.filter(s=>s.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>Oe.filter(e=>e.Name===s)[0]);const zs=Hs.trim().split(`\r
`).filter(s=>s).map(s=>{var _,v;const[e,l,a,r,n,u,c,t,i,f]=s.split(","),k=Number(e),m=Number(a),F=r!=null&&r.length?(_=r==null?void 0:r.split(":"))==null?void 0:_.map(x=>Number(x)):[],o=n!=null&&n.length?(v=n==null?void 0:n.split(":"))==null?void 0:v.map(x=>Number(x)):[],T=u==="True",b=c==="True",d=Number(t),U=Number(i),Fe=Number(f);return{ID:k,Name:l,UnlockGroup:m,Requires:[],BlockedBy:[],RequiredProcesses:F,IngredientProviders:o,isMain:T,isStarterOrSide:b,DishType:d,CustomerMultiplier:U,DishValue:Fe}}).sort((s,e)=>s.Name<e.Name?-1:1),fe={};for(const s of Oe)fe[s.Name]=s;for(const s of zs)fe[s.Name]=s;for(const s of ns)fe[s.Name]=s;fe.Coffee=fe["Black Coffee"],fe.Community.AKA="Autumn",fe["Christmas Rush"].AKA="North Pole",fe.Couples.AKA="Romantic",fe["Cherry Pie"]=fe["Cherry Pies"],fe["Mushroom Pie"]=fe["Mushroom Pies"];const qs=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Us=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],qe={};function Pe(s){if(qe[s]===void 0)switch(qe[s]=Se.filter(e=>e.Name===s)[0],s){case"Display Stand":qe[s].PurchaseCost=120*2;break}if(qe[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return qe[s]}const Vs=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function Gs(s){let e=0;return(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime),e+=s.actionHistory.length,e}function Qe(s,e){return(l,a)=>{const r=l.achieved[e],n=a.achieved[e],u=Math.min(r.goalsPurchased,s);let t=Math.min(n.goalsPurchased,s)-u;return t===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&n.goalsPurchased+n.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(n.goalsPurchased+n.substitutesPurchased):n.substitutesPurchased-r.substitutesPurchased:t}}const Ls={Oven:0,"Brownie Tray":4,Workstation:2,"Sharp Knife":0,"Scrubbing Brush":0,Mince:15,"Cake Tin":15,"Discount Desk":1,"Copying Desk":1,"Metal Table":4,"Power Sink":0,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":1,"Safety Hob":2,"Grabber - Rotating":2,Grabber:0,"Smart Grabber":3,Freezer:2,Bin:0,Conveyor:0},$s=[6,6,7,4,6,6,7,8,11,8,7,11,10,7,11];function Ws(s,e,l,a,r=!0,n=Us,u=qs,c=$s,t=()=>{},i=15){var ps,gs,ms,Ts,bs;let f={};const k=[],m=new Array(a.length).fill(0).map(()=>({})),F={};let o=0,T=0;const b={},d=e.some(y=>y.Name==="Turbo"),U=e.some(y=>y.Name==="Lake"),Fe=[(y,g)=>g.fps-y.fps,(y,g)=>g.upgradesInProgress.length-y.upgradesInProgress.length,(y,g)=>g.money-y.money,(y,g)=>y.cumulativeRerolls-g.cumulativeRerolls];let _=[],v=0;const x={};for(const y of a){for(const g of y){const{goal:H,number:N,substitutes:Q,skipMissing:W=!1}=g;for(const z of Q)F[z]||(F[z]=[]),F[z].push(H),z==="Flower Pot"&&console.log({substitutesToGoalMap:F});x[H]?W||(x[H].number+=N):(x[H]={...g},W&&(x[H].number=0));for(let z=0;z<=v;z++){if(m[z]===void 0)debugger;m[z][H]?m[z][H].number+=N:m[z][H]={...g}}for(let z=v+1;z<m.length;z++){if(m[z]===void 0)debugger;m[z][H]||(m[z][H]={...g,number:0})}W||(T+=N*Math.ceil(Pe(H).PurchaseCost*(d?.5:U?.75:1)))}try{k.push(JSON.parse(JSON.stringify(x)))}catch{console.log(m),console.log(m[0]);debugger}v++}const ie=m[0],Me=Object.values(ie).sort((y,g)=>Pe(y.goal).PurchaseCost-Pe(g.goal).PurchaseCost).map(y=>y.goal);f=k.shift();for(const y of Object.values(ie)){const{goal:g,number:H}=y;b[g]={...y,substitutesPurchased:0,goalsPurchased:0},y.goal!=="Starter Bin"&&(Fe.push(Qe(H,g)),_.push(Qe(H,g)))}const re=new de([],[...Fe,(y,g)=>g.money-y.money,(y,g)=>y.cumulativeRerolls-g.cumulativeRerolls]),$=d?7:5,w=[{spawnInside:!0,blueprintCount:$},{spawnInside:!1,playerInside:!1,blueprintCount:$}];r||w.push({spawnInside:!1,playerInside:!0,blueprintCount:$});const Y=[{spawnInside:!0,blueprintCount:$},{spawnInside:!1,playerInside:!0,blueprintCount:$},{spawnInside:!1,playerInside:!1,blueprintCount:$}];function Ve(y,g,H){const N={...y};for(const Q of Object.values(g)){const W=Q.goal;N[W]={...N[W]},W==="Copying Desk"&&(N[W].goalsPurchased+=N[W].substitutesPurchased,N[W].substitutesPurchased=0),N[W].goalsPurchased+=Q.goalsPurchased,N[W].substitutesPurchased+=Q.substitutesPurchased}return N}let De=[];function je(y,g,H,N=!1){var W,z,me,oe,Te,Z;const Q=g.fodderUsed;e:for(const A of y){let se=1+(A.achieved["Copying Desk"].goalsPurchased?1:0);const C=A.upgradesInProgress.filter(p=>p.appliance==="").length;let S=C;if(S*=se,S<0)continue;const h=g.actionHistory.length?Ve(A.achieved,g.achieved):A.achieved;let R=0,D=[...A.upgradesInProgress];if(S<Q)if((C+D.filter(p=>p.appliance==="Mince").length)*se>=Q){let p=0;for(;(C+p*2)*se<Q;)p++;let P=0;for(;p;)D[P].appliance==="Mince"&&(D[P]={appliance:"",cost:0,upgradeTurnTimer:0},D.push({appliance:"",cost:0,upgradeTurnTimer:0}),p--),P++}else continue;R=Math.max(0,Q-D.filter(p=>p.appliance==="").length);let j=(((W=A.achieved["Discount Desk"])==null?void 0:W.goalsPurchased)??0)+(((z=A.achieved["Discount Desk"])==null?void 0:z.substitutesPurchased)??0)-A.upgradesInProgress.filter(p=>p.appliance==="Discount Desk").length>0,O=0;R===0?O=8:D.length<=4?O=4:A.achieved["Copying Desk"].goalsPurchased>1?D.length<16?O=7:O=6:O=3;let B=0,G=0,J=0;D=D.flatMap(p=>{let P=[];return fs||A.achieved["Research Desk"].goalsPurchased?(P.push({...p,upgradeTurnTimer:p.upgradeTurnTimer-1,cost:j?Math.ceil(p.cost/2):p.cost}),O--):j?(P.push({...p,cost:Math.ceil(p.cost/2)}),O--):P.push(p),O<=0&&(j=!1),P}),R<A.achieved["Copying Desk"].goalsPurchased*8&&(D.sort((p,P)=>p.cost-P.cost),D=D.flatMap(p=>{let P=[p];return R<A.achieved["Copying Desk"].goalsPurchased*8&&(p.appliance==="Mince"?R<A.achieved["Copying Desk"].goalsPurchased*8&&(G+=p.cost,J++,R++,P.push({appliance:"",cost:0,upgradeTurnTimer:0})):p.appliance==="Cake Tin"?(G+=p.cost,B++,J++,R++,p.upgradeTurnTimer<=1&&(B++,J++)):p.appliance==="Freezer"&&(h.Freezer.goalsPurchased++,G+=p.cost,R++,J++)),P})),D=D.map(p=>p.upgradeTurnTimer>0?p:{appliance:"",cost:0,upgradeTurnTimer:0});let L=0;{let p=g.actionHistory.length,P=!1;for(;p--;)if(g.actionHistory[p]==="buy Blueprint Cabinet")L++;else if(g.actionHistory[p].includes(" for ")){P||(L=0);break}else g.actionHistory[p].includes("reroll")&&(P=!0)}for(let p=0;p<g.achieved["Blueprint Cabinet"].goalsPurchased-L;p++)D.push({appliance:"",cost:0,upgradeTurnTimer:0});let M=A.cumulativeRerolls+g.cumulativeRerolls;if(M>Ae)continue;let X=M*(M+1)/2*10+A.applianceCosts+G;const q=structuredClone(h);for(const p of D)p.appliance&&(q[p.appliance]=structuredClone(q[p.appliance]),q[p.appliance].goalsPurchased--);if(g.cumulativeRerolls&&X>ee)continue;let ue=[],ve=0,Be=1;const Le=D.filter(p=>!p.appliance).length;{let p=ee-X;for(const P of Me){const K=g.achieved[P],ae=Math.ceil(Pe(K.goal).PurchaseCost*(d?.5:U?.75:1));if(p-=(K.goalsPurchased+K.substitutesPurchased)*ae,K.substitutesPurchased){let te=Ls[K.goal]??1;if(K.goal==="Grabber"&&g.actionHistory.some(le=>le.includes("Conveyor for Grabber"))&&(te=1),K.goal!=="Freezer")if(K.goal==="Dish Washer"){const le=(me=g.actionHistory.filter(ze=>ze.includes(" for Dish Washer"))[0].match(/buy (.*) for Dish Washer/))==null?void 0:me[1];if(!le)throw"nope";te=["Dish Washer","Wash Basin","Power Sink","Soaking Sink","Sink"].indexOf(le),te===4&&(te=3)}else K.goal==="Discount Desk"&&g.actionHistory.some(le=>le.includes("Blueprint Desk for Discount Desk"))&&(te=1);if(te)for(let le=0;le<K.substitutesPurchased;le++)p+=ae,ue.push({appliance:K.goal,cost:ae,upgradeTurnTimer:te}),ve+=te}}if(ue.length>Le){let P=ue.length-Le;const K=ue.filter(ae=>ae.appliance==="Mince").length;if(D.filter(ae=>ae.appliance==="Mince").length*2+K>=P-K){let ae=0;for(;P>0&&D[ae];)D[ae].appliance==="Mince"&&(D[ae]={appliance:"",cost:0,upgradeTurnTimer:0},D.push({appliance:"",cost:0,upgradeTurnTimer:0}),P-=2),ae++;if(P>0){let te=ue.length-1;for(;P>0;)ue[te].appliance==="Mince"&&(ue.splice(te,1),D.push({appliance:"",cost:0,upgradeTurnTimer:0}),P-=2),te--}}else continue e}for(const P of ue)P.appliance&&(q[P.appliance]=structuredClone(q[P.appliance]),q[P.appliance].goalsPurchased--)}{let p=0;for(const P of ue){for(;D[p].appliance;)p++;D[p]=P}for(let P=0;P<L;P++)D.push({appliance:"",cost:0,upgradeTurnTimer:0});D.sort((P,K)=>K.cost-P.cost)}let ge;try{if(ge=js(f,{...A,day:V,achieved:q,upgradesInProgress:D,fps:A.fps+B+(((oe=g.achieved["Flower Pot"])==null?void 0:oe.goalsPurchased)??0)}),!N&&(V===3&&(!(q.Freezer.goalsPurchased+q.Freezer.substitutesPurchased)||!(q.Oven.goalsPurchased||q.Oven.substitutesPurchased))||V===1&&(!(q["Sharp Knife"].goalsPurchased||q["Sharp Knife"].substitutesPurchased)||!(q["Scrubbing Brush"].goalsPurchased||q["Scrubbing Brush"].substitutesPurchased))||Math.min(15,ge)>pe*2))continue}catch{debugger;continue}if(pe<=0&&ge>0)continue;X+=g.applianceCosts;let He=0;{let p="",P=A.actionHistory.length,K=!0;for(;P--;){const le=A.actionHistory[P].match(/^(?:spawn|reroll) (..?)/);if(!le){A.actionHistory[P].match(/^day ..? spawn/)&&(K=!0);continue}if(K){K=!1;continue}p=le[1][0]}let ae=0,te=!0;for(let le=0;le<g.actionHistory.length;le++){He+=ae,ae=0;const ze=g.actionHistory[le].match(/^(?:spawn|reroll) (..?)/);if(!ze){const Ss=g.actionHistory[le].match(/take (\d+) out/);Ss&&(He+=parseInt(Ss[1])/3+1);continue}He++;const la=ze[1][0],Cs=te?"":ze[1][1];te=!1,p&&(p[0]!==la&&(ae+=3),p[1]&&Cs&&p[1]!==Cs&&(ae+=10)),p=ze[1]}}let aa=A.deskTime+(Be-1)*20+Math.max(0,Q-C)*5*((Te=A.achieved["Clipboard Stand"])!=null&&Te.goalsPurchased?.5:1)+(ve*Be*5+(u[g.day]??u.at(-1)??0))*((Z=h["Clipboard Stand"])!=null&&Z.goalsPurchased?.5:1)+He+g.cumulativeRerolls*2;const be={...g,rerollConfigs:[...A.rerollConfigs,g.rerollConfigs],achieved:h,money:ee-X,actionHistory:[...A.actionHistory,...g.actionHistory],upgradesInProgress:D,cumulativeRerolls:A.cumulativeRerolls+g.cumulativeRerolls,applianceCosts:A.applianceCosts+g.applianceCosts+G,deskTime:aa,fps:A.fps+B};if(B&&be.actionHistory.push(`buy ${B} flower pot copies`),J>B&&be.actionHistory.push(`buy ${J-B} cab copies`),!(be.money<-be.upgradesInProgress.reduce((p,P)=>p+P.cost,0))){if(be.money>=0||be.money+be.upgradesInProgress.reduce((p,P)=>p+P.cost,0)>=0&&k.length){if(ge<pe&&(pe=ge,console.log(`best so far missing ${ge} pieces `+Ue(be,ee))),ge<=0){if(re.add(be)){if(ds(),re.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(pe<=0)continue}if(N&&(V===1?S=0:se>1&&(S+=A.upgradesInProgress.filter(p=>p.appliance==="Mince").length*se)),S>o&&(o=S),N){const p=A.cumulativeRerolls;for(let P=0;P<=S;P++)De[P]===void 0&&(De[P]=new de([],Vs)),De[P].add([p,X]);continue}H.array.push(be)}}return pe}const Ge={...b};Ge["Blueprint Cabinet"]={...Ge["Blueprint Cabinet"],goalsPurchased:1};const Ee=new de([{achieved:Ge,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:[{appliance:"",cost:0,upgradeTurnTimer:0}],day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0,fps:0}],[...Fe]);let pe=1/0,V=0,ee=0;const he=new Os(s),_e=[];let fs=!1,Ie=[];{const y=["Booking Desk","Blueprint Cabinet"];Se.filter(g=>y.includes(g.Name)).forEach(g=>he.OwnedAppliances.push(g))}for(const y of e)he.addCard(y);function ea(y,g,H,N,Q,W){var A;let z=[],me=[],oe=[];{const se={...y};y.fodderPurchases[0]?oe.push(se):z.push(se)}const Te=Ve(y.achieved,Q),Z=["upgrade","base","fodder"];for(let se=0;se<g.length;se++){const C=se+1===g.length;C&&Z.includes("fodder")&&Z.pop();const S=g[se];let h=[...z],R=[...me,...oe],D=[];for(const j of Z){if(!S)continue;let O=S.Name,B=Te[O],G=!1;switch(j){case"base":if(B&&B.goalsPurchased+B.substitutesPurchased>=ie[O].number)continue;break;case"upgrade":const J=(A=F[S.Name])==null?void 0:A.filter(M=>M!=="Starter Bin"),L=J==null?void 0:J[Math.floor(Math.random()*J.length)];if(B=Te[L],!B||(G=!0,O=L,B.goalsPurchased+B.substitutesPurchased>=ie[O].number))continue;break;case"fodder":B=Te["Starter Bin"],O="Starter Bin",G=!0}if(B){S.ThemeRequired&&(G=!1),G?B.substitutesPurchased++:B.goalsPurchased++;{const J=L=>{if(!L)return;{let q=L.actionHistory.length;for(;q--;){const ue=L.actionHistory[q];if(ue.includes(`buy ${S.Name}`))return;if(ue.includes("reroll "))break}}if(!L.numFloor)return;const M={...L};if(M.achieved={...M.achieved},!M.numFloor){console.log(g);debugger}if(M.numFloor--,M.achieved[O])M.achieved[O]={...M.achieved[O],goalsPurchased:M.achieved[O].goalsPurchased+(G?0:1),substitutesPurchased:M.achieved[O].substitutesPurchased+(G?1:0)};else if(M.achieved[O]={...B,goalsPurchased:G?0:1,substitutesPurchased:G?1:0},Number.isNaN(M.achieved[O].goalsPurchased))debugger;const X=O==="Starter Bin"?Pe(S.Name).PurchaseCost:Math.max(Pe(S.Name).PurchaseCost,Pe(O).PurchaseCost);return G?M.applianceCosts+=Math.ceil(X*(d?.5:1)):M.applianceCosts+=Math.ceil(X*(d?.5:U?.75:1)),M.actionHistory=[...M.actionHistory,`buy ${S.Name}`+(G?` for ${O}`:"")],O==="Starter Bin"&&(M.fodderPurchases=[...M.fodderPurchases],M.fodderPurchases[1]++,M.achieved[O].substitutesPurchased--),M};if(j!=="fodder"){const L=z.map(J).filter(q=>q);L.forEach(H);const M=me.map(J).filter(q=>q);M.forEach(W);const X=C?[]:oe.map(J).filter(q=>q);X.forEach(W),h=h.concat(L),R=R.concat(M),D=D.concat(X)}else{const L=(se===0?z:oe).map(J).filter(M=>M);L.forEach(W),D=D.concat(L)}}}}z=h.filter(j=>j),me=R.filter(j=>j),oe=D.filter(j=>j)}return z.concat(me).concat(oe)}let Ae=-1;{let y=n.slice(0,i).reduce((g,H)=>g+H)-T;for(;y>0;)Ae++,y-=10*Ae;console.log({maxCumulativeRerolls:Ae,money:y,expectedMoneyByDay:n,gearMoney:T})}for(Ae=1/0,Number.isFinite(i)||(Ae=3);pe;){let y=Ee.array;const g=y.reduce((C,S)=>{if(!Object.keys(C).length||Math.random()<.3)for(const h in S.achieved){const R=S.achieved[h].goalsPurchased+S.achieved[h].substitutesPurchased;C[h]?R<C[h].goalsPurchased&&(C[h].goalsPurchased=R):C[h]={...S.achieved[h],goalsPurchased:R,substitutesPurchased:0}}return C},{});if(!y.length){t("No Solutions");debugger;return 0}Ee.clear();const H=new de([],[..._,(C,S)=>C.cumulativeRerolls-S.cumulativeRerolls,(C,S)=>C.applianceCosts-S.applianceCosts]);if(ee+=n[V]??n.at(-1)??0,V++,V>=i){sa(!0,{array:y});debugger;break}if(V>14&&(d||!l.length)){debugger;break}if(V>1&&y.length===0){debugger;break}y.sort((C,S)=>S.achieved["Cake Tin"].substitutesPurchased-C.achieved["Cake Tin"].substitutesPurchased||S.fps-C.fps||S.upgradesInProgress.length-C.upgradesInProgress.length||S.achieved.Mince.substitutesPurchased-C.achieved.Mince.substitutesPurchased),console.log(`fastest so far: ${Ue(y[0],ee)}`);let N=2;switch(V){case 1:N=5;break;case 2:N=5;break;case 3:N=1;break;case 4:N=7;break;case 6:default:N=Math.min(Ae+1,7);break}N=20,N+=1;let Q=.5*60*1e3;Q=2*60*1e3,Q=1*60*60*1e3;{let C=0;for(let S=1;S<=N;S++)C+=S;Q/=C}const W=Math.min(N-1,1/0);if(ee>=T){const C=Math.sqrt((ee-T)/10*2);console.log(`Have ${ee} on day ${V}, need ${T} to buy everything. Allows for ~${C} rerolls across all days`)}V%5||(N=1);let z;(d||V===5||!(V%3))&&(z=l.shift());const me=Oe.filter(C=>C.Name===z)[0];he.handleNewCardSpawnEffects(me);const oe=he.getAppliances([{spawnInside:!0,blueprintCount:$}],V);let Te=[];if(_e.length)for(let C=_e.length-1;C>=0;C--){let S=oe.length;for(;S--;){const h=oe[S];if(h.Name===_e[C]){if(console.log(`buying ${h.Name} on day ${V}`),ee-y.reduce((D,j)=>Math.min(D,j.applianceCosts+10/2*(j.cumulativeRerolls+1)*j.cumulativeRerolls),1/0)<h.PurchaseCost*(d?.5:U?.75:1)){console.log("not enough money-- skip for now");continue}Ie.push(h),_e.splice(C,1),ee-=h.PurchaseCost*(d?.5:U?.75:1),oe.splice(S,1);break}}Te=Ie.map(h=>`Buy ${h.Name}`)}let Z=new de([{day:V,rerollConfigs:[],achieved:{...b},numFloor:$,fodderAvailable:o,fodderUsed:0,money:ee,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(C,S)=>he.getPrngAdvancements(C.rerollConfigs,V)-he.getPrngAdvancements(S.rerollConfigs,V),(C,S)=>-he.getPrngAdvancements(C.rerollConfigs,V)+he.getPrngAdvancements(S.rerollConfigs,V),..._,(C,S)=>C.cumulativeRerolls-S.cumulativeRerolls,(C,S)=>C.applianceCosts-S.applianceCosts,(C,S)=>S.numFloor+S.fodderAvailable-C.numFloor+C.fodderAvailable,(C,S)=>C.numFloor-S.numFloor]);De=[],je(y,Z.array[0],Ee,!0);let A=1/0;const se=C=>De.map(S=>S.array.reduce((h,[R,D])=>Math.min(h,D+(R+1+R+C)/2*C*10),1/0));{const C=N;for(;se(N-1)[0]>ee;)N--;N!==C&&console.log(`clamped max rerolls from ${C} down to ${N}`)}e:for(;N--&&(Ie.length&&((gs=(ps=Z.array[0])==null?void 0:ps.rerollConfigs)==null?void 0:gs.length)===1&&(Ie.some(h=>h.Name==="Research Desk")&&(fs=!0),he.OwnedAppliances.push(...Ie),Ie=[],Te=[]),A=Date.now()+Q*(((Ts=(ms=Z.array[0])==null?void 0:ms.rerollConfigs)==null?void 0:Ts.length)??1),Z.array[0]!==void 0);){console.log(`Seed ${s} Day ${V} Reroll ${Z.array[0].rerollConfigs.length} expanding ${Z.array.length} states`);let C=Z.array;if(!k.length&&pe<=0){const h=C[0].rerollConfigs.length;if(h*((h+1)/2)*10+T>ee){console.log("get me outta here!");break}}Z.clear(),V>2?C.sort((h,R)=>R.achieved["Cake Tin"].substitutesPurchased-h.achieved["Cake Tin"].substitutesPurchased||is(h,R)||R.achieved.Freezer.substitutesPurchased-h.achieved.Freezer.substitutesPurchased||R.achieved.Mince.substitutesPurchased-h.achieved.Mince.substitutesPurchased||R.fodderUsed-h.fodderUsed||h.numFloor-R.numFloor||h.fodderPurchases[1]-R.fodderPurchases[1]):C.sort((h,R)=>R.achieved.Mince.substitutesPurchased-h.achieved.Mince.substitutesPurchased||is(h,R)||R.achieved["Cake Tin"].substitutesPurchased-h.achieved["Cake Tin"].substitutesPurchased||h.numFloor-R.numFloor||h.fodderPurchases[1]-R.fodderPurchases[1]);const S=se(C[0].rerollConfigs.length);console.log({minSpentMoneyByExtraBlueprints:S});for(const h of C){if(Date.now()>A){Z.array.sort((B,G)=>G.achieved["Cake Tin"].substitutesPurchased-B.achieved["Cake Tin"].substitutesPurchased||Fs(m[0],B.achieved)-Fs(m[0],G.achieved)||B.fodderUsed-G.fodderUsed||B.numFloor-G.numFloor||G.applianceCosts-B.applianceCosts);continue e}if(h.numFloor+h.fodderAvailable===0||h.money<h.rerollConfigs.length*10)continue;let R=0;if(S[0]>h.money)continue;for(let B=1;B<S.length;B++)if(R++,S[B]>h.money){R=B-1;break}let D=h.rerollConfigs.length?h.numFloor+Math.min(h.fodderAvailable,R-h.fodderUsed):$;h.fodderPurchases[1]&&(D=h.numFloor);const j=W<h.rerollConfigs.length?h.numFloor:h.rerollConfigs.length?Math.max(1,h.numFloor):$;let O;h.rerollConfigs.length===0?O=Y:W<h.rerollConfigs.length?O=[h.rerollConfigs.at(-1)]:O=w,he.getAppliances([...h.rerollConfigs,{spawnInside:!0,blueprintCount:D}],h.day);for(const B of O){const G=M=>{Z.add(M)&&H.add(M)},J=M=>{if(!Z.add(M)||!H.add(M))return;M.fodderPurchases[0]+M.fodderPurchases[1]||je(y,M,Ee)},L=[j];D>j&&L.push(D);for(let M=D-1;M>j;M--)L.push(M);for(const M of L){const X=[...h.rerollConfigs,{...B,blueprintCount:M}],q=X.length===1?oe:he.getAppliances(X,h.day),ue=[...q].sort((ge,He)=>ge.PurchaseCost-He.PurchaseCost),ve=M-h.numFloor;if(ve>h.fodderAvailable)debugger;const Be={...h,fodderPurchases:[h.fodderPurchases[1],0],money:h.money-h.rerollConfigs.length*10,rerollConfigs:X,numFloor:X.length===1?M-Ie.length:M,fodderAvailable:h.fodderAvailable-ve,fodderUsed:h.fodderUsed+ve,cumulativeRerolls:h.rerollConfigs.length?h.cumulativeRerolls+1:0,actionHistory:h.rerollConfigs.length?[...h.actionHistory,`${ve?`take ${ve} out, `:""}reroll ${B.spawnInside?"I":B.playerInside?"OI":"OO"}`]:[`day ${h.day} spawn`,`spawn ${B.spawnInside?"I":B.playerInside?"OI":"OO"}`,...Te]};Be.rerollConfigs.length===1&&Be.rerollConfigs[0].spawnInside===!0?J(Be):G(Be);let Le=J;if((!B.spawnInside||M>j&&!ie[q.at(-1).Name]&&((bs=F[q.at(-1).Name])!=null&&bs.every(ge=>!ie[ge])))&&(Le=G),ea(Be,ue,Le,N,g,G),Date.now()>A)break}}}}if(he.addCard(me),pe<=0){if(!k.length){re.array.sort((C,S)=>S.fps-C.fps),t((pe<=0?`full build on ${s} by day ${V}: 
`:"")+re.array.map(C=>Ue(C,ee)).join(`
`));break}for(const C of Object.values(f))C.number&&he.OwnedAppliances.push(Pe(C.goal));f=k.shift(),m.shift(),_=[];for(const{goal:C,number:S}of Object.values(m[0]))_.push(Qe(S,C));pe=1/0,De=[],ds(!0);debugger;Ee.array=re.array,re.clear(),re.objectiveFunctions}}return V;function sa(y=!1,g=Ee){(Math.random()<.001||y)&&g.array.sort((H,N)=>N.fps-H.fps),t(`tier ${a.length-k.length-(y?1:0)} build on ${s} by day ${V}${y?"":" (Partial)"}: 
`+g.array.slice(0,100).map(H=>Ue(H,ee)).join(`
`))}function ds(y=!1){(Math.random()<.001||y)&&re.array.sort((g,H)=>H.fps-g.fps),t(`tier ${a.length-k.length-(y?1:0)} build on ${s} by day ${V}${y?"":" (Partial)"}: 
`+re.array.slice(0,100).map(g=>Ue(g,ee)).join(`
`))}}function js(s,e){const l=e.achieved;let a=0;const r=e.upgradesInProgress.filter(c=>c.appliance==="Cake Tin").length,n=e.achieved["Copying Desk"].goalsPurchased+e.achieved["Copying Desk"].substitutesPurchased,u=[[33,!1]];for(const[c,t]of u){const i=Math.min(8*n,r),f=e.upgradesInProgress.length+e.upgradesInProgress.filter(m=>m.appliance==="Mince").length*2,k=Math.min(Math.ceil(Math.min(c,Math.max(0,(c-e.fps-(t?r:0))/(i+1-1/(f-r+1))))));a+=k}for(const c of Object.values(s)){const i=c.number-l[c.goal].goalsPurchased-l[c.goal].substitutesPurchased;a+=Math.max(0,i)}return a}function Fs(s,e){let l=0;for(const a of Object.values(s)){const n=a.number-e[a.goal].goalsPurchased-e[a.goal].substitutesPurchased;l+=Math.max(0,n)}return l}function Ue(s,e){const l=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${Gs(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${l}/${e}), `+s.actionHistory.join(", ")+JSON.stringify(s.upgradesInProgress)}function is(s,e){let l=0;const a=s.rerollConfigs[0],r=e.rerollConfigs[0];return!a||a.playerInside===r.playerInside?0:(a.playerInside===!1&&l--,r.playerInside===!1&&l++,l)}const Ze={};function Xe(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:n,groupSizes:u}=s,c=[e,l,a,r,n,[...u].sort((o,T)=>o-T)].join("|");if(Ze[c])return Ze[c];let t=[0,0,0],i=[0,0,0,0],f=1-.75**n;if(e>0){t[0]=1;let o=1-.75**e;a===.5&&(o*=1.25,f*=1.25),i[0]=u.reduce((T,b)=>T+1+(b-1)*o,0)}const k=u.reduce((o,T)=>o+T);l&&(t[1]=1,i[1]=k),r>0&&(i[2]=k,l?(t[2]=1-.75**r,a===.5&&(t[2]*=1.25)):t[2]=1);let m=1;e>0&&(t[0]*=1+a,m*=1-a,i[0]*=t[0]),l&&(t[1]*=1+m*a,m*=1-a,i[1]*=t[1],i[3]=i[1]*f),r>0&&(t[2]*=1+m*a,m*=1-a,i[2]*=t[2]);const F=[t.map(o=>o*u.length),i];return Ze[c]=F,F}function _s(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:n,groupSizes:u}=s;let c=[0,0,0],t=[0,0,0,0],i=1-.75**e,f=1-.75**r,k=1-.75**n;a===.5&&(i*=1.25,f*=1.25,k*=1.25);const m=b=>{c[0]++,t[0]++;for(let d=0;d<b-1;d++)Math.random()<i&&t[0]++},F=b=>{c[1]++,t[1]+=b;for(let d=0;d<b;d++)Math.random()<k&&t[3]++},o=b=>{c[2]++,t[2]+=b};for(const b of u){let d=!1;e>0&&(m(b),!d&&Math.random()<a&&(d=!0,m(b))),F(b),!d&&Math.random()<a&&(d=!0,F(b)),r>0&&Math.random()<f&&(o(b),!d&&Math.random()<a&&(d=!0,o(b)))}return[c,t]}const Ks={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},os={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>os[s]=!0);class Ys{constructor(e,l=[],a=[]){I(this,"seed");I(this,"mapSize");I(this,"frontDoor");I(this,"startingCards");I(this,"cards");I(this,"playerCount");I(this,"turbo");I(this,"_actionInfoCacheByCards",{});I(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=l,this.cards=a,this.playerCount=Ks[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:l});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,n=!1,u=0,c=[],t=[],i=0,f=[],k=0,m=[];for(const v of l)switch(v.Name==="All You Can Eat"&&(r=!0),v.Name==="Double Helpings"&&(n=!0),v.DishType){case E.Dessert:i++,v.DishValue&&f.push(v.DishValue);break;case E.Starter:v.DishValue&&c.push(v.DishValue),u++;break;case E.Side:v.DishValue&&m.push(v.DishValue),k++;break;case E.Main:case E.Base:v.Name==="Tacos"?(t.push(2),t.push(3)):v.DishValue&&t.push(v.DishValue)}let F=n?.5:r?.25:0,o=[0,0,0,0];if(o[0]=ke(c),o[1]=ke(t),o[2]=ke(f),o[3]=ke(m),n)for(let v=0;v<3;v++)o[v]&&(o[v]+=3);const[T,b]=Xe({starters:u,main:!!o[1],doubleOrderChance:F,desserts:i,sides:k,groupSizes:a});let d=0;for(let v=0;v<b.length;v++)d+=b[v]*o[v];const U=us(this.playerCount),Fe=this.getBookingDeskCount(e),_=this.getBookingDeskMoney(e);return Math.ceil(U*(d+Fe*_))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,n=!1,u=0,c=[],t=[],i=0,f=[],k=0,m=[];for(const b of l)switch(b.Name==="All You Can Eat"&&(r=!0),b.Name==="Double Helpings"&&(n=!0),b.DishType){case E.Dessert:i++,b.DishValue&&f.push(b.DishValue);break;case E.Starter:b.DishValue&&c.push(b.DishValue),u++;break;case E.Side:b.DishValue&&m.push(b.DishValue),k++;break;case E.Main:case E.Base:if(!b.isMain){i++,b.DishValue&&f.push(b.DishValue);break}b.Name==="Tacos"?(t.push(2),t.push(3)):b.DishValue&&t.push(b.DishValue)}let F=n?.5:r?.25:0,o=[0,0,0,0];if(o[0]=ke(c),o[1]=ke(t),o[2]=ke(f),o[3]=ke(m),n)for(let b=0;b<3;b++)o[b]&&(o[b]+=3);return Xe({starters:u,main:!!o[1],doubleOrderChance:F,desserts:i,sides:k,groupSizes:a})}actionInfo(e){if(e===0)return 0;const l=this.getCardsByDay(e),a=e.toString()+":"+l.map(w=>w.Name).sort().join(","),r=this._actionInfoCacheByCards[a];if(r)return r;let n=0;const u={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let c=0;for(let w=0;w<l.length;w++)if(l[w].DishType!==E.Null){const Y=l[w].Name;c=u[Y]??20;break}let t=-1,i=[1,1,1],f=[[],[c],[],[]],k=0;const m=this.getGroupSizes(e);let F=!1,o=!1,T=0,b=[],d=[],U=0,Fe=[],_=0,v=[],x=!1,ie=!1;for(const w of l){switch(w.Name==="All You Can Eat"&&(F=!0),w.Name==="Double Helpings"&&(o=!0),w.Name){case"Picky Eaters":x=!0;break;case"Leisurely Eating":ie=!0,k+=2;break;case"Instant Service":for(let Y=0;Y<3;Y++)i[Y]--;break;case"Ice Cream":f[2].push(5.125);break;case"Cheese Board":f[2].push(10);break;case"Cherry Pies":f[2].push(11);break;case"Apple Pies":f[2].push(15);break;case"Pumpkin Pies":f[2].push(16);break;case"Carrot Soup":case"Meat Soup":f[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":i[0]=4,f[0].push(8);break;case"Broccoli Cheese Soup":f[0].push(5),i[0]=4;break;case"Pumpkin Seed":f[0].push(3*8);break;case"Bread":f[0].push(5*3);break;case"Mandarin Starter":f[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":f[3].push(2);break;case"Onion Rings":f[3].push(8);break;case"Corn on the Cob":f[3].push(6);break;case"Chips":f[3].push(7);break;case"Roast Potato":f[3].push(4);break}switch(w.DishType){case E.Dessert:U++,w.DishValue&&Fe.push(w.DishValue);break;case E.Starter:w.DishValue&&b.push(w.DishValue),T++;break;case E.Side:w.DishValue&&v.push(w.DishValue),_++;break;case E.Main:case E.Base:w.Name==="Tacos"?(d.push(2),d.push(3)):w.DishValue&&d.push(w.DishValue);break;case E.Extra:w.Name==="Seaweed"?(f[1][0]+=1.75,t+=2):w.Name==="Dumpling - Soy Sauce"?f[1][0]+=.4:w.Name==="Breakfast Beans"?f[1][0]+=1+3/4:w.Name==="Breakfast Eggs"?f[1][0]+=6:w.Name==="Breakfast Extras"&&(t++,f[1][0]+=1.5*2),t++;break}}e>6&&(f[3]=[]),x&&(ie&&!F||(f[1][0]+=2,t++));let Me=o?.5:F?.25:0;n+=m.length*k;const[re,$]=Xe({starters:T,main:!0,doubleOrderChance:Me,desserts:U,sides:_,groupSizes:m});re.forEach((w,Y)=>n+=w*i[Y]);for(const w of f)for(let Y=0;Y<w.length;Y++)t>0&&(w[Y]+=t),t+=1;return $.forEach((w,Y)=>{var Ve;if((Ve=f[Y])!=null&&Ve.length){if(!Y){const De=Math.ceil(w/f[Y].length/3);n+=De*f[Y].reduce((je,Ge)=>je+Ge,0);return}n+=w*ke(f[Y])}}),this._actionInfoCacheByCards[a]=n,n}simulateMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,n=!1,u=[[],[],[],[]];for(const T of l)switch(T.Name==="All You Can Eat"&&(r=!0),T.Name==="Double Helpings"&&(n=!0),T.DishType){case E.Main:case E.Base:T.Name==="Tacos"?u[1].push(2.5):T.DishValue&&u[1].push(T.DishValue);break;case E.Dessert:T.DishValue&&u[2].push(T.DishValue);break;case E.Starter:T.DishValue&&u[0].push(T.DishValue);break;case E.Side:T.DishValue&&u[3].push(T.DishValue);break}let c=n?.5:r?.25:0,t=0;n&&(t+=3);const[i,f]=_s({starters:u[0].length,main:!!u[1].length,doubleOrderChance:c,desserts:u[2].length,sides:u[3].length,groupSizes:a});let k=0;for(let T=0;T<f.length;T++){let b=f[T];for(;b--;){T<3&&(k+=t);let d=u[T][Math.floor(Math.random()*u[T].length)];d%1&&(Math.random()<d%1?d=Math.ceil(d):d=Math.floor(d)),k+=d}}const m=us(this.playerCount),F=this.getBookingDeskCount(e),o=this.getBookingDeskMoney(e);return Math.ceil(m*(k+F*o))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let l;this.turbo?l=e-1:(l=Math.max(0,Math.floor((e-1)/3)),e>5&&l++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,l)]}return this._cardsByDay[e]}getBookingDeskCount(e,l=1){const a=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(i=>i.Name==="Herd Mentality"))return Math.min(a,3)+1;const r=[],n=this.getCardsByDay(e);let u=1;(this.turbo||n.some(i=>i.Name==="Morning Rush"))&&r.push(.2),(this.turbo||n.some(i=>i.Name==="Lunch Rush"))&&r.push(.5),(this.turbo||n.some(i=>i.Name==="Dinner Rush"))&&r.push(.8);const c=l/this.getDayLength(e),t=.1/a;u+=a-1;for(let i=1;i<a;i++){const f=i/a,k=f-t-c,m=f+t+c;for(let F=r.length-1;F>=0;F--){const o=r[F];k<=o&&o<=m&&r.splice(F,1)}}return u+=r.length,u}getNonRushGroupCount(e){const l=this.getExpectedCustomers(e),a=this.getCardsByDay(e).filter(u=>u.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),n=l*(1+a)/r;return Math.ceil(n)}getCustomerCount(e){return this.getGroupSizes(e).reduce((l,a)=>l+a,0)}getGroupSizes(e,l=0){const a=this.seed?ls(1997821,e,this.seed).random:new Je(Math.floor(Math.random()*4294967295)),r=this.getNonRushGroupCount(e),n=this.getCardsByDay(e).some(F=>F.Name==="Herd Mentality");let u=r,c=[],[t,i]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?i=t:this.seed==="_max"&&(t=i);{let F=u-1;for(;F--;)a.value}for(;u--;)c.push(a.range(t,i+1)),!n&&u!==r-1&&a.value;let f=this.turbo?3:this.getCardsByDay(e).filter(F=>os[F.Name]).length,k;switch(l){case 0:k=Math.ceil(Math.max(1,r*.15));break;case 1:k=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));break;case 2:k=Math.ceil(Math.max(1,r*.15*1.5))}let m=f*k;for(;m--;)c.push(a.range(t,i+1));if(!this.seed||this.seed[0]==="_"){let F=t;for(let o=0;o<c.length;o++)c[o]=F,F++,F>i&&(F=t)}return c}getExpectedGroupSize(e){const l=this.getGroupSizeRange(e);return(l[0]+l[1])/2}getGroupSizeRange(e){let l=1,a=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":a--;break;case"Medium Groups":l++,a+=2;break;case"Large Groups":l+=2,a+=2;break;case"Flexible Dining":l--,a++;break;case"Community":const n=Math.floor((e-1)/3);l+=n,a+=n;break}return[l,a]}getExpectedCustomers(e){const l=this.getReductions(e),a=this.getDayLength(e),r=this.getPlayerModifier(),n=this.getCourseModifier(e),u=this.getDayRate(e),c=this.getCustomersPerHour(e),t=this.getAdvertisingModifier(e);return .85**l*(a/25*u*r)/n*c*t}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(a=>a.Name==="Advertising").length}getDayRate(e){let l=1;switch(e){case 1:l=1.25;break;case 2:l=1.5;break;default:l=1.5+.15*(e-3);break}return e>15&&(l+=.15*(e-15)**1.5),l}getCourseModifier(e){let l=1;const a=this.getCardsByDay(e);return a.some(r=>r.DishType===E.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(l+=.25),a.some(r=>r.DishType===E.Starter)&&(l+=.25),l}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let l=1;return this.turbo&&(l=1.5,l*=1+e/10),l}getReductions(e){return this.getCardsByDay(e).reduce((a,r)=>a+r.CustomerMultiplier,0)}getMapSize(){const l=new Re(this.seed,5078598).useSubcontext(0).random.range(0,8);let a;switch(l){case 0:a="Small (2)";break;case 4:a="Medium (2)";break;case 1:case 5:a="Diner (1)";break;case 2:case 6:a="Large (3)";break;case 3:case 7:a="Huge (4)";break;default:throw new Error}return a}getLayoutInfo(){const l=new Re(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new Je(new Re(this.seed,98234234).useSubcontext(0).random.value),l=23;for(;l--;)e.value;return e.range(0,4)}}function us(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Js(s,e,l,a){let r=[],n=[],u=[];const c=s.cards.slice(e);let t=new Ys(s.seed,l,c);t.playerCount=a;for(let i=1;i<=15;i++)u.push(t.getCustomerCount(i)),r.push(t.guessMoney(i)),n.push(t.getBookingDeskCount(i));return r[0]+=t.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:n,expectedCustomersByDay:u}}var cs=self;function Qs(s){cs.postMessage(s)}const Zs=[],Xs=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:0,substitutes:[],skipMissing:!0},{goal:"Cake Tin",number:20,substitutes:[],skipMissing:!0},{goal:"Mince",number:8,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:0,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:Se.filter(s=>!s.ThemeRequired&&!Zs.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];cs.onmessage=s=>{let{config:e,tiers:l,playerCount:a,maxDay:r=15}=s.data;for(const F of l)for(const o of F){const T=Se.filter(b=>b.Name===o.goal)[0];T.ThemeRequired&&(o.substitutes=Se.filter(b=>b.ThemeRequired===T.ThemeRequired).map(b=>b.Name))}for(;!l.at(-1).length;)l.pop();const n=[...Xs],u=l.flatMap(F=>F.flatMap(o=>[o.goal,...o.substitutes])),c=n.length-1;n[c].substitutes=n[c].substitutes.filter(F=>!u.some(o=>F===o)),l[l.length-1].push(...n);const t=e.cards.filter(F=>ns.some(o=>o.Name===F.Name)).length+1,i=e.cards.slice(0,t);let{expectedMoneyByDay:f,expectedBookingDesksByDay:k,expectedCustomersByDay:m}=Js(e,t,i,a);Ws(e.seed,i,e.cards.slice(t).map(F=>F.Name),l,e.solo,f,k,m,Qs,r)}})();
