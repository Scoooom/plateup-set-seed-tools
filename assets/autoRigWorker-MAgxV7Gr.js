var ta=Object.defineProperty;var na=(de,Ce,we)=>Ce in de?ta(de,Ce,{enumerable:!0,configurable:!0,writable:!0,value:we}):de[Ce]=we;var I=(de,Ce,we)=>na(de,typeof Ce!="symbol"?Ce+"":Ce,we);(function(){"use strict";var fs;class de{constructor(e,l){I(this,"array");I(this,"objectiveFunctions");this.array=Ce(e,l),this.objectiveFunctions=l}clear(){this.array=[]}add(e){let l=this.array.length;for(;l--;){let{better:a,worse:r}=we(e,this.array[l],this.objectiveFunctions);if(r)return!1;a&&this.array.splice(l,1)}return this.array.push(e),!0}}function Ce(s,e){if(!s.length)return s;const l=[...s];let a=[];a.push(l.pop());e:for(;l.length;){const r=l.pop();let F=a.length;for(;F--;){let{better:i,worse:h}=we(r,a[F],e);if(h)continue e;i&&a.splice(F,1)}a.push(r)}return a}function we(s,e,l){let a=!0,r=!0,F=0;for(;(a||r)&&F<l.length;){const i=l[F](s,e);i<0?r=!1:i>0&&(a=!1),F++}return{better:a,worse:r}}var ys=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60,-1357906425\r
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
`;const Ps=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost","Upgrades"],Ds=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number","number[]"],$e=ys.trim().split(`\r
`).map(s=>{const e=s.split(",");let l={};for(let a=0;a<e.length;a++){let r;switch(Ds[a]){case"number":r=Number(e[a]);break;case"boolean":r=e[a]==="True";break;case"number[]":e[a]===""?r=[]:r=e[a].split(":").map(F=>Number(F));break;default:r=e[a]}l[Ps[a]]=r}return l});class Ms{constructor(e){I(this,"Staple");I(this,"Tags");I(this,"StapleWhenMissing");I(this,"Appliance");I(this,"IsRemoved");I(this,"Filter");I(this,"DecorationRequired");I(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var ce=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(ce||{}),Fe=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(Fe||{});const xe={DefaultShoppingTag:892};var es=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(es||{}),We=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(We||{});const Ke=new Map,ss=new Map;for(const s of $e)Ke.set(s.ID,s),ss.set(s.Name,s);const ye=new Map,vs=new Map,Bs=new Map;{let s=!0;const e=$e.filter(a=>a.Upgrades.length);for(const a of e)for(const r of a.Upgrades)ye.has(r)||ye.set(r,new Set),(fs=ye.get(r))==null||fs.add(a.ID);for(;s;){s=!1;for(const[a,r]of ye){const F=r.size;for(const i of r)for(const h of ye.get(i)??[])r.add(h);F!==r.size&&(s=!0)}}for(const[a,r]of ye)r.delete(a),Bs.set(a,Array.from(r));const l=Array.from(ye.entries()).map(a=>{var r;return`${(r=Ke.get(a[0]))==null?void 0:r.Name}:${Array.from(a[1]).map(F=>{var i;return(i=Ke.get(F))==null?void 0:i.Name}).join(", ")}`});for(const a of ye)vs.set(a[0],Array.from(a[1]));console.log(l)}$e.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,e)=>s.Name<e.Name?1:-1);const Se=$e;var ws="38";const as=Number(ws);function Rs(s,e){return Math.floor(Math.random()*(e-s))+s}function Ye(s,e){let l=s.length;for(;l-- >1;){let a=e===void 0?Rs(0,l+1):e.range(0,l+1);[s[l],s[a]]=[s[a],s[l]]}return s}const Ns="12345678",Is="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of Is);for(const s of Ns);function ke(s){return s.length?s.reduce((e,l)=>e+l,0)/s.length:0}class Re{constructor(e,l){I(this,"fixedSeed");I(this,"instance");I(this,"random");typeof e=="string"&&(e=As(e)),this.fixedSeed=e,this.instance=l,this.random=new Je(e+Math.imul(124192293,l))}useSubcontext(e){return new Re(this.fixedSeed,124192293*e+this.instance)}}class Je{constructor(e){I(this,"seed");const l=h=>Math.imul(1812433253,h)+1>>0,a=e>>0,r=l(a),F=l(r),i=l(F);this.seed=[a,r,F,i]}get value(){let e=this.seed.shift(),l=this.seed[2];return e^=e<<11,e^=e>>>8,l^=l>>>19,l=(l^e)>>0,this.seed.push(l),l}range(e,l){return(this.value>>>0)%(l-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function As(s){const l=new TextEncoder().encode(s);let a=5381,r=l.length;for(;r--;)a=(a<<5)+a+l[r];return a>>0}function ls(s,e,l){return new Re(l,s*1231231+e)}var Ne=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(Ne||{}),E=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(E||{});const xs=["Auto Plater","Dish Rack","Plates","Dish Washer"],rs={};for(const s of xs)rs[s]=!0;const ts=Se.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length,Os=["Blueprint Cabinet","Booking Desk"].map(s=>Se.filter(e=>e.Name===s)[0]);class Es{constructor(e,l=0){I(this,"seed");I(this,"mapSize");I(this,"numTiles");I(this,"baseUpgradeChance");I(this,"OwnedAppliances");I(this,"Cards");I(this,"Theme");I(this,"extraSpawns");I(this,"cache",new Array(15).fill(0).map(()=>new Map));I(this,"cacheOverridePlated");I(this,"cacheOverrideProcesses");I(this,"baseSpawnCount");I(this,"newestCard");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=l,this.OwnedAppliances=[...Os],this.Cards=[],this.Theme=We.Null,this.baseSpawnCount=5,this.extraSpawns=[]}clearCache(){}getLayoutInfo(){const l=new Re(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"?(this.baseUpgradeChance=.25,this.baseSpawnCount=7):e.Name==="Christmas Rush"&&(this.extraSpawns=[ss.get("Conveyor")]),e.Name==="Lake"&&(this.baseUpgradeChance=.2),e.UnlockGroup===Ne.PrimaryTheme&&(this.Theme=We[e.Name]),this.newestCard=e)}handleNewestRerollEffects(){this.handleNewCardRerollEffects(this.newestCard)}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(l=>Se.filter(a=>a.ID===l))))}addCard(e){var l;e!==void 0&&(((l=this.newestCard)==null?void 0:l.ID)===e.ID&&(this.newestCard=void 0),this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}_getNetPrngAdvancements(e,l,a){let r=0,F=e.blueprintCount;return l%5===0&&(F+=8-this.baseSpawnCount,a&&(F+=2)),r+=F*(ts-1+1),e.spawnInside||(r+=ns(e.playerInside,this.numTiles)),r+=as,r}getPrngAdvancements(e,l){let a=0;for(let r=0;r<e.length;r++){const F=e[r];let i=F.blueprintCount;l%5===0&&(i+=8-this.baseSpawnCount,r===0&&(i+=2)),a+=i*(ts-1+1),F.spawnInside||(a+=ns(F.playerInside,this.numTiles)),a+=as}return a}buildShopOptions(e,l,a,r,F){const i=a.some(o=>o.Name==="Couples");let h=[];for(const o of Se)if(!(!o.IsPurchasable&&!o.IsPurchasableAsUpgrade)){var t=new Ms(o);const k=t.Appliance.Name;(t.Staple==ce.NonStaple||t.Staple==ce.WhenMissing)&&((t.Tags&Fe.Basic)>Fe.None?t.Staple=ce.FixedStaple:t.StapleWhenMissing?(k!="Research Desk"&&k!="Blueprint Cabinet"&&k!="Plates"&&console.log(`Unexpected ${k} StapleWhenMissing Appliance`),e.some(n=>n.ID===t.Appliance.ID)?t.Staple=ce.NonStaple:t.Staple=ce.WhenMissing):i&&k==="Flower Pot"&&(t.Staple=ce.BonusStaple));const b=t.Appliance;e:{if(b.SellOnlyAsDuplicate){if(!e.some(n=>n.ID===b.ID)){t.IsRemoved=!0;break e}}else if(b.RequiresForShop.length>0){let n=!1;for(const u of b.RequiresForShop)e.some(c=>c.ID===u)&&(n=!0);if(!n){t.IsRemoved=!0;break e}}else if(b.SellOnlyAsUnique&&(b.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${b.Name}, ${b.ID}`),e.some(n=>n.ID===b.ID))){t.IsRemoved=!0;break e}if(rs[k]&&(r??a.every(n=>!n.isMain||n.Name==="Tacos"||n.Name==="Sandwiches"))){t.IsRemoved=!0;break e}if(t.Filter==es.RefreshableProvider&&!e.some(n=>n.AllowRefreshes)){t.IsRemoved=!0;break e}if(t.DecorationRequired!=We.Null&&t.DecorationRequired!=l){t.IsRemoved=!0;break e}if(b.RequiresProcessForShop.length>0&&(F?!b.RequiresProcessForShop.some(n=>F.includes(n)):!b.RequiresProcessForShop.some(n=>a.some(u=>u.RequiredProcesses.includes(n))))){t.IsRemoved=!0;break e}}h.push(t)}return h}initRandom(e){return ls(823828,e,this.seed)}getAppliances(e,l,a,r){var b;(a!==this.cacheOverridePlated||(r==null?void 0:r.length)!==((b=this.cacheOverrideProcesses)==null?void 0:b.length)||r!=null&&r.some((n,u)=>{var c;return n!==((c=this.cacheOverrideProcesses)==null?void 0:c[u])}))&&(this.cacheOverridePlated=a,this.cacheOverrideProcesses=r,this.cache.forEach(n=>n.clear()));const F=e.length===1,i=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let h=e[e.length-1].blueprintCount,t;if(l%5==0){F?h=10:h+=8-this.baseSpawnCount,t=[];for(let n=0;n<h;n++)t[n]=Fe.Decoration;if(F)for(const n of[1,2])t[t.length-n]=Fe.SpecialEvent}else if(e.length>1){t=[];for(let n=0;n<h;n++)t[n]=xe.DefaultShoppingTag}else{const n=xe.DefaultShoppingTag,u=Math.max(1,h),c=Math.max(0,Math.min(i.filter(p=>p.Staple!==ce.NonStaple&&!p.IsRemoved).length,Math.max(2,4-Math.floor(l/5)),u)),T=Math.max(0,u-c);h=u,t=[];for(let p=0;p<c;p++)t[p]=Fe.Basic;for(let p=c;p<c+T;p++)t[p]=n}const o=this.initRandom(l).random;let d=this.getPrngAdvancements(e.slice(0,e.length-1),l);if(this.cache[l].has(d)&&this.cache[l].get(d).length>=h)return this.cache[l].get(d).slice(0,h);const k=d;for(;d--;)o.value;{const n=[...i],u=[],c=this.getUpgradeChance(l),T=[];for(let p=0;p<h;p++){const q=t[p],_=o.valueFloat<c;Ye(n,o);for(let v=0;v<n.length;v++){const x=n[v];if(x.IsRemoved||T.includes(x.Appliance)||!x.MatchesRequestTags(q)||!_&&x.Staple==ce.NonStaple&&x.SellAsUpgrade)continue;q!=Fe.Decoration&&T.push(x.Appliance),u[p]=x.Appliance;break}u[p]==null}return e.length===1&&u.splice(0,0,...this.extraSpawns),this.cache[l].set(k,u),u}}_getAllAppliances(e,l,a,r){const F=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let i,h;if(l%5==0)i=[],h=Fe.Decoration;else if(e)h=xe.DefaultShoppingTag,i=[];else{const o=xe.DefaultShoppingTag,d=Math.max(0,Math.min(F.filter(k=>k.Staple!==ce.NonStaple&&!k.IsRemoved).length,Math.max(2,4-Math.floor(l/5))));i=[];for(let k=0;k<d;k++)i[k]=Fe.Basic;h=o}const t=this.initRandom(l).random;for(;e--;)t.value;{const o=[...F],d=[],k=this.getUpgradeChance(l),b=[];let n=-1;for(;;){n++;let u=i.shift();u===void 0&&(u=h);const T=t.valueFloat<k;Ye(o,t);for(let p=0;p<o.length;p++){const q=o[p];if(q.IsRemoved||b.includes(q.Appliance)||!q.MatchesRequestTags(u)||!T&&q.Staple==ce.NonStaple&&q.SellAsUpgrade)continue;u!=Fe.Decoration&&b.push(q.Appliance),d[n]=q.Appliance;break}if(d[n]==null)break}return d}}_getAppliances(e,l,a,r,F){var b;(r!==this.cacheOverridePlated||(F==null?void 0:F.length)!==((b=this.cacheOverrideProcesses)==null?void 0:b.length)||F!=null&&F.some((n,u)=>{var c;return n!==((c=this.cacheOverrideProcesses)==null?void 0:c[u])}))&&(this.cacheOverridePlated=r,this.cacheOverrideProcesses=F,this.cache.forEach(n=>n.clear()));const i=e===0,h=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,r,F);let t=l.blueprintCount,o;if(a%5==0){i?t=10:t+=8-this.baseSpawnCount,o=[];for(let n=0;n<t;n++)o[n]=Fe.Decoration;if(i)for(const n of[1,2])o[o.length-n]=Fe.SpecialEvent}else if(e){o=[];for(let n=0;n<t;n++)o[n]=xe.DefaultShoppingTag}else{const n=xe.DefaultShoppingTag,u=Math.max(1,t),c=Math.max(0,Math.min(h.filter(p=>p.Staple!==ce.NonStaple&&!p.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),u)),T=Math.max(0,u-c);t=u,o=[];for(let p=0;p<c;p++)o[p]=Fe.Basic;for(let p=c;p<c+T;p++)o[p]=n}const d=this.initRandom(a).random;if(this.cache[a].has(e)&&this.cache[a].get(e).length>=t+(e?0:this.extraSpawns.length))return this.cache[a].get(e).slice(0,t);const k=e;for(;e--;)d.value;{const n=[...h],u=[],c=this.getUpgradeChance(a),T=[];for(let p=0;p<t;p++){const q=o[p],_=d.valueFloat<c;Ye(n,d);for(let v=0;v<n.length;v++){const x=n[v];if(x.IsRemoved||T.includes(x.Appliance)||!x.MatchesRequestTags(q)||!_&&x.Staple==ce.NonStaple&&x.SellAsUpgrade)continue;q!=Fe.Decoration&&T.push(x.Appliance),u[p]=x.Appliance;break}u[p]==null}return e||u.splice(0,0,...this.extraSpawns),this.cache[a].set(k,u),u}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function ns(s,e){return s?e-2:e-1}var Hs=`373996608,Ice Cream,1,,934171642,,-1533430406,False,False,5,1,2\r
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
934171642,Sundaes,1,,373996608,,-1533430406:602693523,False,False,0,1,0\r
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
`,Vs=`-959076098,Steak,1,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
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
934171642,Sundaes,1,,-1533430406:602693523,False,False,0,1,0\r
1743900205,Fish,1,1972879238:620897674,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238:620897674,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:1972879238:620897674,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238:620897674,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`;const Oe=Hs.trim().split(/\r?\n/).filter(s=>s).map(s=>{var De,re;const[e,l,a,r,F,i,h,t,o,d,k,b]=s.split(","),n=Number(e),u=Number(a),c=r!=null&&r.length?r.split(":").map($=>Number($)):[],T=F.length?F.split(":").map($=>Number($)):[],p=i!=null&&i.length?(De=i==null?void 0:i.split(":"))==null?void 0:De.map($=>Number($)):[],q=h!=null&&h.length?(re=h==null?void 0:h.split(":"))==null?void 0:re.map($=>Number($)):[],te=t==="True",_=o==="True",v=Number(d),x=Number(k),ie=Number(b);return{ID:n,Name:l,UnlockGroup:u,Requires:c,BlockedBy:T,RequiredProcesses:p,IngredientProviders:q,isMain:te,isStarterOrSide:_,DishType:v,CustomerMultiplier:x,DishValue:ie}}),Fs=[...[{ID:447437163,Name:"Country",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},Oe.filter(s=>s.Name==="Community")[0],Oe.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0},Oe.filter(s=>s.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:Ne.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:E.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey","Sundaes"].map(s=>Oe.filter(e=>e.Name===s)[0]);const zs=Vs.trim().split(`\r
`).filter(s=>s).map(s=>{var _,v;const[e,l,a,r,F,i,h,t,o,d]=s.split(","),k=Number(e),b=Number(a),n=r!=null&&r.length?(_=r==null?void 0:r.split(":"))==null?void 0:_.map(x=>Number(x)):[],u=F!=null&&F.length?(v=F==null?void 0:F.split(":"))==null?void 0:v.map(x=>Number(x)):[],c=i==="True",T=h==="True",p=Number(t),q=Number(o),te=Number(d);return{ID:k,Name:l,UnlockGroup:b,Requires:[],BlockedBy:[],RequiredProcesses:n,IngredientProviders:u,isMain:c,isStarterOrSide:T,DishType:p,CustomerMultiplier:q,DishValue:te}}).sort((s,e)=>s.Name<e.Name?-1:1),fe={};for(const s of Oe)fe[s.Name]=s;for(const s of zs)fe[s.Name]=s;for(const s of Fs)fe[s.Name]=s;fe.Coffee=fe["Black Coffee"],fe.Community.AKA="Autumn",fe["Christmas Rush"].AKA="North Pole",fe.Couples.AKA="Romantic",fe["Cherry Pie"]=fe["Cherry Pies"],fe["Mushroom Pie"]=fe["Mushroom Pies"];const qs=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Us=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],ze={};function Pe(s){if(ze[s]===void 0)switch(ze[s]=Se.filter(e=>e.Name===s)[0],s){case"Display Stand":ze[s].PurchaseCost=120*2;break}if(ze[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return ze[s]}const Gs=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function Ls(s){let e=0;return(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime),e+=s.actionHistory.length,e}function Qe(s,e){return(l,a)=>{const r=l.achieved[e],F=a.achieved[e],i=Math.min(r.goalsPurchased,s);let t=Math.min(F.goalsPurchased,s)-i;return t===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&F.goalsPurchased+F.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(F.goalsPurchased+F.substitutesPurchased):F.substitutesPurchased-r.substitutesPurchased:t}}const $s={Oven:0,"Brownie Tray":4,Workstation:2,"Sharp Knife":0,"Scrubbing Brush":0,Mince:15,"Cake Tin":15,"Discount Desk":1,"Copying Desk":1,"Metal Table":4,"Power Sink":0,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":1,"Safety Hob":2,"Grabber - Rotating":2,Grabber:0,"Smart Grabber":3,Freezer:2,Bin:0,Conveyor:0},Ws=[6,6,7,4,6,6,7,8,11,8,7,11,10,7,11];function js(s,e,l,a,r=!0,F=Us,i=qs,h=Ws,t=()=>{},o=15){var gs,ms,Ts,bs,Cs;let d={};const k=[],b=new Array(a.length).fill(0).map(()=>({})),n={};let u=0,c=0;const T={},p=e.some(y=>y.Name==="Turbo"),q=e.some(y=>y.Name==="Lake"),te=[(y,m)=>m.fps-y.fps,(y,m)=>m.upgradesInProgress.length-y.upgradesInProgress.length,(y,m)=>m.money-y.money,(y,m)=>y.cumulativeRerolls-m.cumulativeRerolls];let _=[],v=0;const x={};for(const y of a){for(const m of y){const{goal:H,number:N,substitutes:Q,skipMissing:W=!1}=m;for(const V of Q)n[V]||(n[V]=[]),n[V].push(H),V==="Flower Pot"&&console.log({substitutesToGoalMap:n});x[H]?W||(x[H].number+=N):(x[H]={...m},W&&(x[H].number=0));for(let V=0;V<=v;V++){if(b[V]===void 0)debugger;b[V][H]?b[V][H].number+=N:b[V][H]={...m}}for(let V=v+1;V<b.length;V++){if(b[V]===void 0)debugger;b[V][H]||(b[V][H]={...m,number:0})}W||(c+=N*Math.ceil(Pe(H).PurchaseCost*(p?.5:q?.75:1)))}try{k.push(JSON.parse(JSON.stringify(x)))}catch{console.log(b),console.log(b[0]);debugger}v++}const ie=b[0],De=Object.values(ie).sort((y,m)=>Pe(y.goal).PurchaseCost-Pe(m.goal).PurchaseCost).map(y=>y.goal);d=k.shift();for(const y of Object.values(ie)){const{goal:m,number:H}=y;T[m]={...y,substitutesPurchased:0,goalsPurchased:0},y.goal!=="Starter Bin"&&(te.push(Qe(H,m)),_.push(Qe(H,m)))}const re=new de([],[...te,(y,m)=>m.money-y.money,(y,m)=>y.cumulativeRerolls-m.cumulativeRerolls]),$=p?7:5,B=[{spawnInside:!0,blueprintCount:$},{spawnInside:!1,playerInside:!1,blueprintCount:$}];r||B.push({spawnInside:!1,playerInside:!0,blueprintCount:$});const Y=[{spawnInside:!0,blueprintCount:$},{spawnInside:!1,playerInside:!0,blueprintCount:$},{spawnInside:!1,playerInside:!1,blueprintCount:$}];function Ue(y,m,H){const N={...y};for(const Q of Object.values(m)){const W=Q.goal;N[W]={...N[W]},W==="Copying Desk"&&(N[W].goalsPurchased+=N[W].substitutesPurchased,N[W].substitutesPurchased=0),N[W].goalsPurchased+=Q.goalsPurchased,N[W].substitutesPurchased+=Q.substitutesPurchased}return N}let Me=[];function je(y,m,H,N=!1){var W,V,me,oe,Te,Z;const Q=m.fodderUsed;e:for(const A of y){let se=1+(A.achieved["Copying Desk"].goalsPurchased?1:0);const C=A.upgradesInProgress.filter(g=>g.appliance==="").length;let S=C;if(S*=se,S<0)continue;const f=m.actionHistory.length?Ue(A.achieved,m.achieved):A.achieved;let R=0,M=[...A.upgradesInProgress];if(S<Q)if((C+M.filter(g=>g.appliance==="Mince").length)*se>=Q){let g=0;for(;(C+g*2)*se<Q;)g++;let P=0;for(;g;)M[P].appliance==="Mince"&&(M[P]={appliance:"",cost:0,upgradeTurnTimer:0},M.push({appliance:"",cost:0,upgradeTurnTimer:0}),g--),P++}else continue;R=Math.max(0,Q-M.filter(g=>g.appliance==="").length);let j=(((W=A.achieved["Discount Desk"])==null?void 0:W.goalsPurchased)??0)+(((V=A.achieved["Discount Desk"])==null?void 0:V.substitutesPurchased)??0)-A.upgradesInProgress.filter(g=>g.appliance==="Discount Desk").length>0,O=0;R===0?O=8:M.length<=4?O=4:A.achieved["Copying Desk"].goalsPurchased>1?M.length<16?O=7:O=6:O=3;let w=0,G=0,J=0;M=M.flatMap(g=>{let P=[];return ds||A.achieved["Research Desk"].goalsPurchased?(P.push({...g,upgradeTurnTimer:g.upgradeTurnTimer-1,cost:j?Math.ceil(g.cost/2):g.cost}),O--):j?(P.push({...g,cost:Math.ceil(g.cost/2)}),O--):P.push(g),O<=0&&(j=!1),P}),R<A.achieved["Copying Desk"].goalsPurchased*8&&(M.sort((g,P)=>g.cost-P.cost),M=M.flatMap(g=>{let P=[g];return R<A.achieved["Copying Desk"].goalsPurchased*8&&(g.appliance==="Mince"?R<A.achieved["Copying Desk"].goalsPurchased*8&&(G+=g.cost,J++,R++,P.push({appliance:"",cost:0,upgradeTurnTimer:0})):g.appliance==="Cake Tin"?(G+=g.cost,w++,J++,R++,g.upgradeTurnTimer<=1&&(w++,J++)):g.appliance==="Freezer"&&(f.Freezer.goalsPurchased++,G+=g.cost,R++,J++)),P})),M=M.map(g=>g.upgradeTurnTimer>0?g:{appliance:"",cost:0,upgradeTurnTimer:0});let L=0;{let g=m.actionHistory.length,P=!1;for(;g--;)if(m.actionHistory[g]==="buy Blueprint Cabinet")L++;else if(m.actionHistory[g].includes(" for ")){P||(L=0);break}else m.actionHistory[g].includes("reroll")&&(P=!0)}for(let g=0;g<m.achieved["Blueprint Cabinet"].goalsPurchased-L;g++)M.push({appliance:"",cost:0,upgradeTurnTimer:0});let D=A.cumulativeRerolls+m.cumulativeRerolls;if(D>Ae)continue;let X=D*(D+1)/2*10+A.applianceCosts+G;const z=structuredClone(f);for(const g of M)g.appliance&&(z[g.appliance]=structuredClone(z[g.appliance]),z[g.appliance].goalsPurchased--);if(m.cumulativeRerolls&&X>ee)continue;let ue=[],ve=0,Be=1;const Le=M.filter(g=>!g.appliance).length;{let g=ee-X;for(const P of De){const K=m.achieved[P],ae=Math.ceil(Pe(K.goal).PurchaseCost*(p?.5:q?.75:1));if(g-=(K.goalsPurchased+K.substitutesPurchased)*ae,K.substitutesPurchased){let ne=$s[K.goal]??1;if(K.goal==="Grabber"&&m.actionHistory.some(le=>le.includes("Conveyor for Grabber"))&&(ne=1),K.goal!=="Freezer")if(K.goal==="Dish Washer"){const le=(me=m.actionHistory.filter(Ve=>Ve.includes(" for Dish Washer"))[0].match(/buy (.*) for Dish Washer/))==null?void 0:me[1];if(!le)throw"nope";ne=["Dish Washer","Wash Basin","Power Sink","Soaking Sink","Sink"].indexOf(le),ne===4&&(ne=3)}else K.goal==="Discount Desk"&&m.actionHistory.some(le=>le.includes("Blueprint Desk for Discount Desk"))&&(ne=1);if(ne)for(let le=0;le<K.substitutesPurchased;le++)g+=ae,ue.push({appliance:K.goal,cost:ae,upgradeTurnTimer:ne}),ve+=ne}}if(ue.length>Le){let P=ue.length-Le;const K=ue.filter(ae=>ae.appliance==="Mince").length;if(M.filter(ae=>ae.appliance==="Mince").length*2+K>=P-K){let ae=0;for(;P>0&&M[ae];)M[ae].appliance==="Mince"&&(M[ae]={appliance:"",cost:0,upgradeTurnTimer:0},M.push({appliance:"",cost:0,upgradeTurnTimer:0}),P-=2),ae++;if(P>0){let ne=ue.length-1;for(;P>0;)ue[ne].appliance==="Mince"&&(ue.splice(ne,1),M.push({appliance:"",cost:0,upgradeTurnTimer:0}),P-=2),ne--}}else continue e}for(const P of ue)P.appliance&&(z[P.appliance]=structuredClone(z[P.appliance]),z[P.appliance].goalsPurchased--)}{let g=0;for(const P of ue){for(;M[g].appliance;)g++;M[g]=P}for(let P=0;P<L;P++)M.push({appliance:"",cost:0,upgradeTurnTimer:0});M.sort((P,K)=>K.cost-P.cost)}let ge;try{if(ge=_s(d,{...A,day:U,achieved:z,upgradesInProgress:M,fps:A.fps+w+(((oe=m.achieved["Flower Pot"])==null?void 0:oe.goalsPurchased)??0)}),!N&&(U===3&&(!(z.Freezer.goalsPurchased+z.Freezer.substitutesPurchased)||!(z.Oven.goalsPurchased||z.Oven.substitutesPurchased))||U===1&&(!(z["Sharp Knife"].goalsPurchased||z["Sharp Knife"].substitutesPurchased)||!(z["Scrubbing Brush"].goalsPurchased||z["Scrubbing Brush"].substitutesPurchased))||Math.min(15,ge)>pe*2))continue}catch{debugger;continue}if(pe<=0&&ge>0)continue;X+=m.applianceCosts;let He=0;{let g="",P=A.actionHistory.length,K=!0;for(;P--;){const le=A.actionHistory[P].match(/^(?:spawn|reroll) (..?)/);if(!le){A.actionHistory[P].match(/^day ..? spawn/)&&(K=!0);continue}if(K){K=!1;continue}g=le[1][0]}let ae=0,ne=!0;for(let le=0;le<m.actionHistory.length;le++){He+=ae,ae=0;const Ve=m.actionHistory[le].match(/^(?:spawn|reroll) (..?)/);if(!Ve){const ks=m.actionHistory[le].match(/take (\d+) out/);ks&&(He+=parseInt(ks[1])/3+1);continue}He++;const ra=Ve[1][0],Ss=ne?"":Ve[1][1];ne=!1,g&&(g[0]!==ra&&(ae+=3),g[1]&&Ss&&g[1]!==Ss&&(ae+=10)),g=Ve[1]}}let la=A.deskTime+(Be-1)*20+Math.max(0,Q-C)*5*((Te=A.achieved["Clipboard Stand"])!=null&&Te.goalsPurchased?.5:1)+(ve*Be*5+(i[m.day]??i.at(-1)??0))*((Z=f["Clipboard Stand"])!=null&&Z.goalsPurchased?.5:1)+He+m.cumulativeRerolls*2;const be={...m,rerollConfigs:[...A.rerollConfigs,m.rerollConfigs],achieved:f,money:ee-X,actionHistory:[...A.actionHistory,...m.actionHistory],upgradesInProgress:M,cumulativeRerolls:A.cumulativeRerolls+m.cumulativeRerolls,applianceCosts:A.applianceCosts+m.applianceCosts+G,deskTime:la,fps:A.fps+w};if(w&&be.actionHistory.push(`buy ${w} flower pot copies`),J>w&&be.actionHistory.push(`buy ${J-w} cab copies`),!(be.money<-be.upgradesInProgress.reduce((g,P)=>g+P.cost,0))){if(be.money>=0||be.money+be.upgradesInProgress.reduce((g,P)=>g+P.cost,0)>=0&&k.length){if(ge<pe&&(pe=ge,console.log(`best so far missing ${ge} pieces `+qe(be,ee))),ge<=0){if(re.add(be)){if(ps(),re.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(pe<=0)continue}if(N&&(U===1?S=0:se>1&&(S+=A.upgradesInProgress.filter(g=>g.appliance==="Mince").length*se)),S>u&&(u=S),N){const g=A.cumulativeRerolls;for(let P=0;P<=S;P++)Me[P]===void 0&&(Me[P]=new de([],Gs)),Me[P].add([g,X]);continue}H.array.push(be)}}return pe}const Ge={...T};Ge["Blueprint Cabinet"]={...Ge["Blueprint Cabinet"],goalsPurchased:1};const Ee=new de([{achieved:Ge,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:[{appliance:"",cost:0,upgradeTurnTimer:0}],day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0,fps:0}],[...te]);let pe=1/0,U=0,ee=0;const he=new Es(s),_e=[];let ds=!1,Ie=[];{const y=["Booking Desk","Blueprint Cabinet"];Se.filter(m=>y.includes(m.Name)).forEach(m=>he.OwnedAppliances.push(m))}for(const y of e)he.addCard(y);function sa(y,m,H,N,Q,W){var A;let V=[],me=[],oe=[];{const se={...y};y.fodderPurchases[0]?oe.push(se):V.push(se)}const Te=Ue(y.achieved,Q),Z=["upgrade","base","fodder"];for(let se=0;se<m.length;se++){const C=se+1===m.length;C&&Z.includes("fodder")&&Z.pop();const S=m[se];let f=[...V],R=[...me,...oe],M=[];for(const j of Z){if(!S)continue;let O=S.Name,w=Te[O],G=!1;switch(j){case"base":if(w&&w.goalsPurchased+w.substitutesPurchased>=ie[O].number)continue;break;case"upgrade":const J=(A=n[S.Name])==null?void 0:A.filter(D=>D!=="Starter Bin"),L=J==null?void 0:J[Math.floor(Math.random()*J.length)];if(w=Te[L],!w||(G=!0,O=L,w.goalsPurchased+w.substitutesPurchased>=ie[O].number))continue;break;case"fodder":w=Te["Starter Bin"],O="Starter Bin",G=!0}if(w){S.ThemeRequired&&(G=!1),G?w.substitutesPurchased++:w.goalsPurchased++;{const J=L=>{if(!L)return;{let z=L.actionHistory.length;for(;z--;){const ue=L.actionHistory[z];if(ue.includes(`buy ${S.Name}`))return;if(ue.includes("reroll "))break}}if(!L.numFloor)return;const D={...L};if(D.achieved={...D.achieved},!D.numFloor){console.log(m);debugger}if(D.numFloor--,D.achieved[O])D.achieved[O]={...D.achieved[O],goalsPurchased:D.achieved[O].goalsPurchased+(G?0:1),substitutesPurchased:D.achieved[O].substitutesPurchased+(G?1:0)};else if(D.achieved[O]={...w,goalsPurchased:G?0:1,substitutesPurchased:G?1:0},Number.isNaN(D.achieved[O].goalsPurchased))debugger;const X=O==="Starter Bin"?Pe(S.Name).PurchaseCost:Math.max(Pe(S.Name).PurchaseCost,Pe(O).PurchaseCost);return G?D.applianceCosts+=Math.ceil(X*(p?.5:1)):D.applianceCosts+=Math.ceil(X*(p?.5:q?.75:1)),D.actionHistory=[...D.actionHistory,`buy ${S.Name}`+(G?` for ${O}`:"")],O==="Starter Bin"&&(D.fodderPurchases=[...D.fodderPurchases],D.fodderPurchases[1]++,D.achieved[O].substitutesPurchased--),D};if(j!=="fodder"){const L=V.map(J).filter(z=>z);L.forEach(H);const D=me.map(J).filter(z=>z);D.forEach(W);const X=C?[]:oe.map(J).filter(z=>z);X.forEach(W),f=f.concat(L),R=R.concat(D),M=M.concat(X)}else{const L=(se===0?V:oe).map(J).filter(D=>D);L.forEach(W),M=M.concat(L)}}}}V=f.filter(j=>j),me=R.filter(j=>j),oe=M.filter(j=>j)}return V.concat(me).concat(oe)}let Ae=-1;{let y=F.slice(0,o).reduce((m,H)=>m+H)-c;for(;y>0;)Ae++,y-=10*Ae;console.log({maxCumulativeRerolls:Ae,money:y,expectedMoneyByDay:F,gearMoney:c})}for(Ae=1/0,Number.isFinite(o)||(Ae=3);pe;){let y=Ee.array;const m=y.reduce((C,S)=>{if(!Object.keys(C).length||Math.random()<.3)for(const f in S.achieved){const R=S.achieved[f].goalsPurchased+S.achieved[f].substitutesPurchased;C[f]?R<C[f].goalsPurchased&&(C[f].goalsPurchased=R):C[f]={...S.achieved[f],goalsPurchased:R,substitutesPurchased:0}}return C},{});if(!y.length){t("No Solutions");debugger;return 0}Ee.clear();const H=new de([],[..._,(C,S)=>C.cumulativeRerolls-S.cumulativeRerolls,(C,S)=>C.applianceCosts-S.applianceCosts]);if(ee+=F[U]??F.at(-1)??0,U++,U>=o){aa(!0,{array:y});debugger;break}if(U>14&&(p||!l.length)){debugger;break}if(U>1&&y.length===0){debugger;break}y.sort((C,S)=>S.achieved["Cake Tin"].substitutesPurchased-C.achieved["Cake Tin"].substitutesPurchased||S.fps-C.fps||S.upgradesInProgress.length-C.upgradesInProgress.length||S.achieved.Mince.substitutesPurchased-C.achieved.Mince.substitutesPurchased),console.log(`fastest so far: ${qe(y[0],ee)}`);let N=2;switch(U){case 1:N=5;break;case 2:N=5;break;case 3:N=1;break;case 4:N=7;break;case 6:default:N=Math.min(Ae+1,7);break}N=20,N+=1;let Q=.5*60*1e3;Q=2*60*1e3,Q=1*60*60*1e3;{let C=0;for(let S=1;S<=N;S++)C+=S;Q/=C}const W=Math.min(N-1,1/0);if(ee>=c){const C=Math.sqrt((ee-c)/10*2);console.log(`Have ${ee} on day ${U}, need ${c} to buy everything. Allows for ~${C} rerolls across all days`)}U%5||(N=1);let V;(p||U===5||!(U%3))&&(V=l.shift());const me=Oe.filter(C=>C.Name===V)[0];he.handleNewCardSpawnEffects(me);const oe=he.getAppliances([{spawnInside:!0,blueprintCount:$}],U);let Te=[];if(_e.length)for(let C=_e.length-1;C>=0;C--){let S=oe.length;for(;S--;){const f=oe[S];if(f.Name===_e[C]){if(console.log(`buying ${f.Name} on day ${U}`),ee-y.reduce((M,j)=>Math.min(M,j.applianceCosts+10/2*(j.cumulativeRerolls+1)*j.cumulativeRerolls),1/0)<f.PurchaseCost*(p?.5:q?.75:1)){console.log("not enough money-- skip for now");continue}Ie.push(f),_e.splice(C,1),ee-=f.PurchaseCost*(p?.5:q?.75:1),oe.splice(S,1);break}}Te=Ie.map(f=>`Buy ${f.Name}`)}let Z=new de([{day:U,rerollConfigs:[],achieved:{...T},numFloor:$,fodderAvailable:u,fodderUsed:0,money:ee,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(C,S)=>he.getPrngAdvancements(C.rerollConfigs,U)-he.getPrngAdvancements(S.rerollConfigs,U),(C,S)=>-he.getPrngAdvancements(C.rerollConfigs,U)+he.getPrngAdvancements(S.rerollConfigs,U),..._,(C,S)=>C.cumulativeRerolls-S.cumulativeRerolls,(C,S)=>C.applianceCosts-S.applianceCosts,(C,S)=>S.numFloor+S.fodderAvailable-C.numFloor+C.fodderAvailable,(C,S)=>C.numFloor-S.numFloor]);Me=[],je(y,Z.array[0],Ee,!0);let A=1/0;const se=C=>Me.map(S=>S.array.reduce((f,[R,M])=>Math.min(f,M+(R+1+R+C)/2*C*10),1/0));{const C=N;for(;se(N-1)[0]>ee;)N--;N!==C&&console.log(`clamped max rerolls from ${C} down to ${N}`)}e:for(;N--&&(Ie.length&&((ms=(gs=Z.array[0])==null?void 0:gs.rerollConfigs)==null?void 0:ms.length)===1&&(Ie.some(f=>f.Name==="Research Desk")&&(ds=!0),he.OwnedAppliances.push(...Ie),Ie=[],Te=[]),A=Date.now()+Q*(((bs=(Ts=Z.array[0])==null?void 0:Ts.rerollConfigs)==null?void 0:bs.length)??1),Z.array[0]!==void 0);){console.log(`Seed ${s} Day ${U} Reroll ${Z.array[0].rerollConfigs.length} expanding ${Z.array.length} states`);let C=Z.array;if(!k.length&&pe<=0){const f=C[0].rerollConfigs.length;if(f*((f+1)/2)*10+c>ee){console.log("get me outta here!");break}}Z.clear(),U>2?C.sort((f,R)=>R.achieved["Cake Tin"].substitutesPurchased-f.achieved["Cake Tin"].substitutesPurchased||os(f,R)||R.achieved.Freezer.substitutesPurchased-f.achieved.Freezer.substitutesPurchased||R.achieved.Mince.substitutesPurchased-f.achieved.Mince.substitutesPurchased||R.fodderUsed-f.fodderUsed||f.numFloor-R.numFloor||f.fodderPurchases[1]-R.fodderPurchases[1]):C.sort((f,R)=>R.achieved.Mince.substitutesPurchased-f.achieved.Mince.substitutesPurchased||os(f,R)||R.achieved["Cake Tin"].substitutesPurchased-f.achieved["Cake Tin"].substitutesPurchased||f.numFloor-R.numFloor||f.fodderPurchases[1]-R.fodderPurchases[1]);const S=se(C[0].rerollConfigs.length);console.log({minSpentMoneyByExtraBlueprints:S});for(const f of C){if(Date.now()>A){Z.array.sort((w,G)=>G.achieved["Cake Tin"].substitutesPurchased-w.achieved["Cake Tin"].substitutesPurchased||is(b[0],w.achieved)-is(b[0],G.achieved)||w.fodderUsed-G.fodderUsed||w.numFloor-G.numFloor||G.applianceCosts-w.applianceCosts);continue e}if(f.numFloor+f.fodderAvailable===0||f.money<f.rerollConfigs.length*10)continue;let R=0;if(S[0]>f.money)continue;for(let w=1;w<S.length;w++)if(R++,S[w]>f.money){R=w-1;break}let M=f.rerollConfigs.length?f.numFloor+Math.min(f.fodderAvailable,R-f.fodderUsed):$;f.fodderPurchases[1]&&(M=f.numFloor);const j=W<f.rerollConfigs.length?f.numFloor:f.rerollConfigs.length?Math.max(1,f.numFloor):$;let O;f.rerollConfigs.length===0?O=Y:W<f.rerollConfigs.length?O=[f.rerollConfigs.at(-1)]:O=B,he.getAppliances([...f.rerollConfigs,{spawnInside:!0,blueprintCount:M}],f.day);for(const w of O){const G=D=>{Z.add(D)&&H.add(D)},J=D=>{if(!Z.add(D)||!H.add(D))return;D.fodderPurchases[0]+D.fodderPurchases[1]||je(y,D,Ee)},L=[j];M>j&&L.push(M);for(let D=M-1;D>j;D--)L.push(D);for(const D of L){const X=[...f.rerollConfigs,{...w,blueprintCount:D}],z=X.length===1?oe:he.getAppliances(X,f.day),ue=[...z].sort((ge,He)=>ge.PurchaseCost-He.PurchaseCost),ve=D-f.numFloor;if(ve>f.fodderAvailable)debugger;const Be={...f,fodderPurchases:[f.fodderPurchases[1],0],money:f.money-f.rerollConfigs.length*10,rerollConfigs:X,numFloor:X.length===1?D-Ie.length:D,fodderAvailable:f.fodderAvailable-ve,fodderUsed:f.fodderUsed+ve,cumulativeRerolls:f.rerollConfigs.length?f.cumulativeRerolls+1:0,actionHistory:f.rerollConfigs.length?[...f.actionHistory,`${ve?`take ${ve} out, `:""}reroll ${w.spawnInside?"I":w.playerInside?"OI":"OO"}`]:[`day ${f.day} spawn`,`spawn ${w.spawnInside?"I":w.playerInside?"OI":"OO"}`,...Te]};Be.rerollConfigs.length===1&&Be.rerollConfigs[0].spawnInside===!0?J(Be):G(Be);let Le=J;if((!w.spawnInside||D>j&&!ie[z.at(-1).Name]&&((Cs=n[z.at(-1).Name])!=null&&Cs.every(ge=>!ie[ge])))&&(Le=G),sa(Be,ue,Le,N,m,G),Date.now()>A)break}}}}if(he.addCard(me),pe<=0){if(!k.length){re.array.sort((C,S)=>S.fps-C.fps),t((pe<=0?`full build on ${s} by day ${U}: 
`:"")+re.array.map(C=>qe(C,ee)).join(`
`));break}for(const C of Object.values(d))C.number&&he.OwnedAppliances.push(Pe(C.goal));d=k.shift(),b.shift(),_=[];for(const{goal:C,number:S}of Object.values(b[0]))_.push(Qe(S,C));pe=1/0,Me=[],ps(!0);debugger;Ee.array=re.array,re.clear(),re.objectiveFunctions}}return U;function aa(y=!1,m=Ee){(Math.random()<.001||y)&&m.array.sort((H,N)=>N.fps-H.fps),t(`tier ${a.length-k.length-(y?1:0)} build on ${s} by day ${U}${y?"":" (Partial)"}: 
`+m.array.slice(0,100).map(H=>qe(H,ee)).join(`
`))}function ps(y=!1){(Math.random()<.001||y)&&re.array.sort((m,H)=>H.fps-m.fps),t(`tier ${a.length-k.length-(y?1:0)} build on ${s} by day ${U}${y?"":" (Partial)"}: 
`+re.array.slice(0,100).map(m=>qe(m,ee)).join(`
`))}}function _s(s,e){const l=e.achieved;let a=0;const r=e.upgradesInProgress.filter(h=>h.appliance==="Cake Tin").length,F=e.achieved["Copying Desk"].goalsPurchased+e.achieved["Copying Desk"].substitutesPurchased,i=[[33,!1]];for(const[h,t]of i){const o=Math.min(8*F,r),d=e.upgradesInProgress.length+e.upgradesInProgress.filter(b=>b.appliance==="Mince").length*2,k=Math.min(Math.ceil(Math.min(h,Math.max(0,(h-e.fps-(t?r:0))/(o+1-1/(d-r+1))))));a+=k}for(const h of Object.values(s)){const o=h.number-l[h.goal].goalsPurchased-l[h.goal].substitutesPurchased;a+=Math.max(0,o)}return a}function is(s,e){let l=0;for(const a of Object.values(s)){const F=a.number-e[a.goal].goalsPurchased-e[a.goal].substitutesPurchased;l+=Math.max(0,F)}return l}function qe(s,e){const l=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${Ls(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${l}/${e}), `+s.actionHistory.join(", ")+JSON.stringify(s.upgradesInProgress)}function os(s,e){let l=0;const a=s.rerollConfigs[0],r=e.rerollConfigs[0];return!a||a.playerInside===r.playerInside?0:(a.playerInside===!1&&l--,r.playerInside===!1&&l++,l)}const Ze={};function Xe(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:F,groupSizes:i}=s,h=[e,l,a,r,F,[...i].sort((u,c)=>u-c)].join("|");if(Ze[h])return Ze[h];let t=[0,0,0],o=[0,0,0,0],d=1-.75**F;if(e>0){t[0]=1;let u=1-.75**e;a===.5&&(u*=1.25,d*=1.25),o[0]=i.reduce((c,T)=>c+1+(T-1)*u,0)}const k=i.reduce((u,c)=>u+c);l&&(t[1]=1,o[1]=k),r>0&&(o[2]=k,l?(t[2]=1-.75**r,a===.5&&(t[2]*=1.25)):t[2]=1);let b=1;e>0&&(t[0]*=1+a,b*=1-a,o[0]*=t[0]),l&&(t[1]*=1+b*a,b*=1-a,o[1]*=t[1],o[3]=o[1]*d),r>0&&(t[2]*=1+b*a,b*=1-a,o[2]*=t[2]);const n=[t.map(u=>u*i.length),o];return Ze[h]=n,n}function Ks(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:F,groupSizes:i}=s;let h=[0,0,0],t=[0,0,0,0],o=1-.75**e,d=1-.75**r,k=1-.75**F;a===.5&&(o*=1.25,d*=1.25,k*=1.25);const b=T=>{h[0]++,t[0]++;for(let p=0;p<T-1;p++)Math.random()<o&&t[0]++},n=T=>{h[1]++,t[1]+=T;for(let p=0;p<T;p++)Math.random()<k&&t[3]++},u=T=>{h[2]++,t[2]+=T};for(const T of i){let p=!1;e>0&&(b(T),!p&&Math.random()<a&&(p=!0,b(T))),n(T),!p&&Math.random()<a&&(p=!0,n(T)),r>0&&Math.random()<d&&(u(T),!p&&Math.random()<a&&(p=!0,u(T)))}return[h,t]}const Ys={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},us={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>us[s]=!0);class Js{constructor(e,l=[],a=[]){I(this,"seed");I(this,"mapSize");I(this,"frontDoor");I(this,"startingCards");I(this,"cards");I(this,"playerCount");I(this,"turbo");I(this,"_actionInfoCacheByCards",{});I(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=l,this.cards=a,this.playerCount=Ys[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:l});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,F=!1,i=0,h=[],t=[],o=0,d=[],k=0,b=[];for(const v of l)switch(v.Name==="All You Can Eat"&&(r=!0),v.Name==="Double Helpings"&&(F=!0),v.DishType){case E.Dessert:o++,v.DishValue&&d.push(v.DishValue);break;case E.Starter:v.DishValue&&h.push(v.DishValue),i++;break;case E.Side:v.DishValue&&b.push(v.DishValue),k++;break;case E.Main:case E.Base:if(v.Name==="Sundaes"){debugger;d.push(4,5,5,6);break}v.Name==="Tacos"?(t.push(2),t.push(3)):v.DishValue&&t.push(v.DishValue)}let n=F?.5:r?.25:0,u=[0,0,0,0];if(u[0]=ke(h),u[1]=ke(t),u[2]=ke(d),u[3]=ke(b),F)for(let v=0;v<3;v++)u[v]&&(u[v]+=3);const[c,T]=Xe({starters:i,main:!!u[1],doubleOrderChance:n,desserts:o,sides:k,groupSizes:a});let p=0;for(let v=0;v<T.length;v++)p+=T[v]*u[v];const q=cs(this.playerCount),te=this.getBookingDeskCount(e),_=this.getBookingDeskMoney(e);return Math.ceil(q*(p+te*_))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,F=!1,i=0,h=[],t=[],o=0,d=[],k=0,b=[];for(const T of l)switch(T.Name==="All You Can Eat"&&(r=!0),T.Name==="Double Helpings"&&(F=!0),T.DishType){case E.Dessert:o++,T.DishValue&&d.push(T.DishValue);break;case E.Starter:T.DishValue&&h.push(T.DishValue),i++;break;case E.Side:T.DishValue&&b.push(T.DishValue),k++;break;case E.Main:case E.Base:if(!T.isMain){if(o++,T.Name==="Sundaes"){debugger;d.push(4,5,5,6);break}T.DishValue&&d.push(T.DishValue);break}T.Name==="Tacos"?(t.push(2),t.push(3)):T.DishValue&&t.push(T.DishValue)}let n=F?.5:r?.25:0,u=[0,0,0,0];if(u[0]=ke(h),u[1]=ke(t),u[2]=ke(d),u[3]=ke(b),F)for(let T=0;T<3;T++)u[T]&&(u[T]+=3);return Xe({starters:i,main:!!u[1],doubleOrderChance:n,desserts:o,sides:k,groupSizes:a})}actionInfo(e){if(e===0)return 0;const l=this.getCardsByDay(e),a=e.toString()+":"+l.map(B=>B.Name).sort().join(","),r=this._actionInfoCacheByCards[a];if(r)return r;let F=0;const i={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let h=0;for(let B=0;B<l.length;B++)if(l[B].DishType!==E.Null){const Y=l[B].Name;h=i[Y]??20;break}let t=-1,o=[1,1,1],d=[[],[h],[],[]],k=0;const b=this.getGroupSizes(e);let n=!1,u=!1,c=0,T=[],p=[],q=0,te=[],_=0,v=[],x=!1,ie=!1;for(const B of l){switch(B.Name==="All You Can Eat"&&(n=!0),B.Name==="Double Helpings"&&(u=!0),B.Name){case"Picky Eaters":x=!0;break;case"Leisurely Eating":ie=!0,k+=2;break;case"Instant Service":for(let Y=0;Y<3;Y++)o[Y]--;break;case"Ice Cream":d[2].push(5.125);break;case"Cheese Board":d[2].push(10);break;case"Cherry Pies":d[2].push(11);break;case"Apple Pies":d[2].push(15);break;case"Pumpkin Pies":d[2].push(16);break;case"Carrot Soup":case"Meat Soup":d[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":o[0]=4,d[0].push(8);break;case"Broccoli Cheese Soup":d[0].push(5),o[0]=4;break;case"Pumpkin Seed":d[0].push(3*8);break;case"Bread":d[0].push(5*3);break;case"Mandarin Starter":d[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":d[3].push(2);break;case"Onion Rings":d[3].push(8);break;case"Corn on the Cob":d[3].push(6);break;case"Chips":d[3].push(7);break;case"Roast Potato":d[3].push(4);break}switch(B.DishType){case E.Dessert:q++,B.DishValue&&te.push(B.DishValue);break;case E.Starter:B.DishValue&&T.push(B.DishValue),c++;break;case E.Side:B.DishValue&&v.push(B.DishValue),_++;break;case E.Main:case E.Base:if(B.Name==="Sundaes"){debugger;te.push(4,5,5,6);break}B.Name==="Tacos"?(p.push(2),p.push(3)):B.DishValue&&p.push(B.DishValue);break;case E.Extra:B.Name==="Seaweed"?(d[1][0]+=1.75,t+=2):B.Name==="Dumpling - Soy Sauce"?d[1][0]+=.4:B.Name==="Breakfast Beans"?d[1][0]+=1+3/4:B.Name==="Breakfast Eggs"?d[1][0]+=6:B.Name==="Breakfast Extras"&&(t++,d[1][0]+=1.5*2),t++;break}}e>6&&(d[3]=[]),x&&(ie&&!n||(d[1][0]+=2,t++));let De=u?.5:n?.25:0;F+=b.length*k;const[re,$]=Xe({starters:c,main:!0,doubleOrderChance:De,desserts:q,sides:_,groupSizes:b});re.forEach((B,Y)=>F+=B*o[Y]);for(const B of d)for(let Y=0;Y<B.length;Y++)t>0&&(B[Y]+=t),t+=1;return $.forEach((B,Y)=>{var Ue;if((Ue=d[Y])!=null&&Ue.length){if(!Y){const Me=Math.ceil(B/d[Y].length/3);F+=Me*d[Y].reduce((je,Ge)=>je+Ge,0);return}F+=B*ke(d[Y])}}),this._actionInfoCacheByCards[a]=F,F}simulateMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,F=!1,i=[[],[],[],[]];for(const c of l){if(c.Name==="All You Can Eat"&&(r=!0),c.Name==="Double Helpings"&&(F=!0),c.Name==="Sundaes")debugger;switch(c.DishType){case E.Main:case E.Base:if(c.Name==="Sundaes"){debugger;i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6);break}c.Name==="Tacos"?i[1].push(2.5):(c.DishValue&&i[1].push(c.DishValue),c.DishValue&&i[1].push(c.DishValue),c.DishValue&&i[1].push(c.DishValue),c.DishValue&&i[1].push(c.DishValue),c.DishValue&&i[1].push(c.DishValue),c.DishValue&&i[1].push(c.DishValue),c.DishValue&&i[1].push(c.DishValue),c.DishValue&&i[1].push(c.DishValue));break;case E.Dessert:if(c.Name==="Giant Sundaes"){debugger;i[1].push(5,6,6,6,7,7,7,8),i[1].push(5,6,6,6,7,7,7,8),i[1].push(5,6,6,6,7,7,7,8);break}c.DishValue&&i[2].push(c.DishValue);break;case E.Starter:c.DishValue&&i[0].push(c.DishValue);break;case E.Side:c.DishValue&&i[3].push(c.DishValue);break}}let h=F?.5:r?.25:0,t=0;F&&(t+=3);const[o,d]=Ks({starters:i[0].length,main:!!i[1].length,doubleOrderChance:h,desserts:i[2].length,sides:i[3].length,groupSizes:a});let k=0;for(let c=0;c<d.length;c++){let T=d[c];for(;T--;){c<3&&(k+=t);let p=i[c][Math.floor(Math.random()*i[c].length)];p%1&&(Math.random()<p%1?p=Math.ceil(p):p=Math.floor(p)),k+=p}}const b=cs(this.playerCount),n=this.getBookingDeskCount(e),u=this.getBookingDeskMoney(e);return Math.ceil(b*(k+n*u))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let l;this.turbo?l=e-1:(l=Math.max(0,Math.floor((e-1)/3)),e>5&&l++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,l)]}return this._cardsByDay[e]}getBookingDeskCount(e,l=1){const a=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(o=>o.Name==="Herd Mentality"))return Math.min(a,3)+1;const r=[],F=this.getCardsByDay(e);let i=1;(this.turbo||F.some(o=>o.Name==="Morning Rush"))&&r.push(.2),(this.turbo||F.some(o=>o.Name==="Lunch Rush"))&&r.push(.5),(this.turbo||F.some(o=>o.Name==="Dinner Rush"))&&r.push(.8);const h=l/this.getDayLength(e),t=.1/a;i+=a-1;for(let o=1;o<a;o++){const d=o/a,k=d-t-h,b=d+t+h;for(let n=r.length-1;n>=0;n--){const u=r[n];k<=u&&u<=b&&r.splice(n,1)}}return i+=r.length,i}getNonRushGroupCount(e){const l=this.getExpectedCustomers(e),a=this.getCardsByDay(e).filter(i=>i.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),F=l*(1+a)/r;return Math.ceil(F)}getCustomerCount(e){return this.getGroupSizes(e).reduce((l,a)=>l+a,0)}getGroupSizes(e,l=0){const a=this.seed?ls(1997821,e,this.seed).random:new Je(Math.floor(Math.random()*4294967295)),r=this.getNonRushGroupCount(e),F=this.getCardsByDay(e).some(n=>n.Name==="Herd Mentality");let i=r,h=[],[t,o]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?o=t:this.seed==="_max"&&(t=o);{let n=i-1;for(;n--;)a.value}for(;i--;)h.push(a.range(t,o+1)),!F&&i!==r-1&&a.value;let d=this.turbo?3:this.getCardsByDay(e).filter(n=>us[n.Name]).length,k;switch(l){case 0:k=Math.ceil(Math.max(1,r*.15));break;case 1:k=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));break;case 2:k=Math.ceil(Math.max(1,r*.15*1.5))}let b=d*k;for(;b--;)h.push(a.range(t,o+1));if(!this.seed||this.seed[0]==="_"){let n=t;for(let u=0;u<h.length;u++)h[u]=n,n++,n>o&&(n=t)}return h}getExpectedGroupSize(e){const l=this.getGroupSizeRange(e);return(l[0]+l[1])/2}getGroupSizeRange(e){let l=1,a=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":a--;break;case"Medium Groups":l++,a+=2;break;case"Large Groups":l+=2,a+=2;break;case"Flexible Dining":l--,a++;break;case"Community":const F=Math.floor((e-1)/3);l+=F,a+=F;break}return[l,a]}getExpectedCustomers(e){const l=this.getReductions(e),a=this.getDayLength(e),r=this.getPlayerModifier(),F=this.getCourseModifier(e),i=this.getDayRate(e),h=this.getCustomersPerHour(e),t=this.getAdvertisingModifier(e);return .85**l*(a/25*i*r)/F*h*t}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(a=>a.Name==="Advertising").length}getDayRate(e){let l=1;switch(e){case 1:l=1.25;break;case 2:l=1.5;break;default:l=1.5+.15*(e-3);break}return e>15&&(l+=.15*(e-15)**1.5),l}getCourseModifier(e){let l=1;const a=this.getCardsByDay(e);return a.some(r=>r.DishType===E.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes"||r.Name==="Sundaes")&&(l+=.25),a.some(r=>r.DishType===E.Starter)&&(l+=.25),l}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let l=1;return this.turbo&&(l=1.5,l*=1+e/10),l}getReductions(e){return this.getCardsByDay(e).reduce((a,r)=>a+r.CustomerMultiplier,0)}getMapSize(){const l=new Re(this.seed,5078598).useSubcontext(0).random.range(0,8);let a;switch(l){case 0:a="Small (2)";break;case 4:a="Medium (2)";break;case 1:case 5:a="Diner (1)";break;case 2:case 6:a="Large (3)";break;case 3:case 7:a="Huge (4)";break;default:throw new Error}return a}getLayoutInfo(){const l=new Re(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new Je(new Re(this.seed,98234234).useSubcontext(0).random.value),l=23;for(;l--;)e.value;return e.range(0,4)}}function cs(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Qs(s,e,l,a){let r=[],F=[],i=[];const h=s.cards.slice(e);let t=new Js(s.seed,l,h);t.playerCount=a;for(let o=1;o<=15;o++)i.push(t.getCustomerCount(o)),r.push(t.guessMoney(o)),F.push(t.getBookingDeskCount(o));return r[0]+=t.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:F,expectedCustomersByDay:i}}var hs=self;function Zs(s){hs.postMessage(s)}const Xs=[],ea=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:0,substitutes:[],skipMissing:!0},{goal:"Cake Tin",number:20,substitutes:[],skipMissing:!0},{goal:"Mince",number:8,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:0,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:Se.filter(s=>!s.ThemeRequired&&!Xs.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];hs.onmessage=s=>{let{config:e,tiers:l,playerCount:a,maxDay:r=15}=s.data;for(const n of l)for(const u of n){const c=Se.filter(T=>T.Name===u.goal)[0];c.ThemeRequired&&(u.substitutes=Se.filter(T=>T.ThemeRequired===c.ThemeRequired).map(T=>T.Name))}for(;!l.at(-1).length;)l.pop();const F=[...ea],i=l.flatMap(n=>n.flatMap(u=>[u.goal,...u.substitutes])),h=F.length-1;F[h].substitutes=F[h].substitutes.filter(n=>!i.some(u=>n===u)),l[l.length-1].push(...F);const t=e.cards.filter(n=>Fs.some(u=>u.Name===n.Name)).length+1,o=e.cards.slice(0,t);let{expectedMoneyByDay:d,expectedBookingDesksByDay:k,expectedCustomersByDay:b}=Qs(e,t,o,a);js(e.seed,o,e.cards.slice(t).map(n=>n.Name),l,e.solo,d,k,b,Zs,r)}})();
