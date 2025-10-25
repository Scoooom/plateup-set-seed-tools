var Ys=Object.defineProperty;var Js=(ie,de,ye)=>de in ie?Ys(ie,de,{enumerable:!0,configurable:!0,writable:!0,value:ye}):ie[de]=ye;var N=(ie,de,ye)=>Js(ie,typeof de!="symbol"?de+"":de,ye);(function(){"use strict";class ie{constructor(e,a){N(this,"array");N(this,"objectiveFunctions");this.array=de(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=ye(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function de(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let F=l.length;for(;F--;){let{better:c,worse:g}=ye(r,l[F],e);if(g)continue e;c&&l.splice(F,1)}l.push(r)}return l}function ye(s,e,a){let l=!0,r=!0,F=0;for(;(l||r)&&F<a.length;){const c=a[F](s,e);c<0?r=!1:c>0&&(l=!1),F++}return{better:l,worse:r}}var ds=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
-1357906425,False,True,Conveyor Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,120\r
-1440053805,False,True,Rapid Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,60\r
1329097317,True,False,Mixer,False,False,,,64,0,0,False,False,60\r
-1013770159,True,False,Supplies,False,False,,,256,0,1,False,False,60\r
2127051779,False,True,Compactor Bin,False,False,,,256,0,0,False,False,20\r
-1632826946,False,True,Composter Bin,False,False,,,256,0,0,False,False,20\r
-1855909480,False,True,Expanded Bin,False,False,,,256,0,0,False,False,20\r
481495292,False,False,Starter Bin,False,False,,,256,0,0,False,False,20\r
1551609169,True,False,Bin,False,False,,,256,0,0,False,False,20\r
1286554202,True,False,Fire Extinguisher,False,False,,1972879238:-1706154991,256,0,0,False,False,20\r
1351951642,True,False,Floor Buffer,False,False,,,256,0,0,False,False,120\r
1765889988,True,False,Kitchen Floor Protector,False,False,,,264,0,0,False,False,20\r
-1495393751,False,True,Fast Mop,False,False,,,256,0,0,False,False,60\r
1776760557,False,True,Lasting Mop,False,False,,,256,0,0,False,False,60\r
-1993346570,True,False,Mop,False,False,,,256,0,0,False,False,20\r
-751458770,False,False,Robot Buffer,False,False,,,256,0,0,False,False,250\r
-1723340146,False,True,Robot Buffer,False,False,,,256,0,0,False,False,250\r
-2091039911,False,False,Robot Mop,False,False,,,256,0,0,False,False,250\r
-2147057861,False,True,Robot Mop,False,False,,,256,0,0,False,False,250\r
-1609758240,True,False,Coffee Machine,True,False,,,32,0,0,False,False,20\r
-17368064,False,False,,False,False,,,0,0,0,False,False,20\r
1973114260,True,False,Conveyor,False,False,,,64,0,0,False,False,20\r
-1906799936,True,False,Combiner,False,False,,,64,0,0,False,False,60\r
-331651461,False,True,Grabber - Rotating,False,False,,,64,0,0,False,False,60\r
-1238047163,False,True,Smart Grabber,False,False,,,64,0,0,False,False,60\r
-1029710921,False,True,Grabber,False,False,,,64,0,0,False,False,60\r
-1462602185,True,False,Portioner,False,False,,,64,0,0,False,False,60\r
459840623,False,False,Teleporter,False,False,,,64,0,0,False,False,1250\r
-1248669347,True,False,Counter,False,False,,,1,0,0,False,False,20\r
1365340297,False,False,Kneading Counter,False,False,,,0,0,0,False,False,20\r
-1573577293,False,True,Workstation,False,False,,,32,0,0,False,False,40\r
620400448,True,False,Affordable Bin,False,False,,,2,2,0,False,False,30\r
1830133512,True,False,Gumball Machine,False,False,,,2,2,0,False,False,30\r
1724963734,True,False,Neon Sign,False,False,,,2,2,0,False,False,40\r
371247235,True,False,Neon Sign,False,False,,,2,2,0,False,False,40\r
230540973,True,False,Ceiling Light,False,False,,,2,2,0,False,False,40\r
-1472471467,True,False,Stock Picture,False,False,,,2,2,0,False,False,30\r
-2108088224,True,False,Dirty Floor Sign,False,False,,,2,2,0,False,False,30\r
1569358344,True,False,Barrel,False,False,,,2,4,0,False,False,40\r
-60168847,True,False,Bookcase,False,False,,,2,4,0,False,False,40\r
-1941237931,True,False,Dartboard,False,False,,,2,4,0,False,False,30\r
-441525746,True,False,Fireplace,False,False,,,2,4,0,False,False,100\r
591400026,True,False,Rug,False,False,,,2,4,0,False,False,40\r
-1628995120,True,False,Wall Light,False,False,,,2,4,0,False,False,30\r
-1380985631,False,False,Banner,False,False,,,8192,0,0,False,False,0\r
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0\r
-4737636,False,False,Fairy Lights,False,False,,,8192,0,0,False,False,0\r
-13481890,True,False,Candelabra,False,False,,,2,1,0,False,False,40\r
1233091186,True,False,Chandelier,False,False,,,2,1,0,False,False,40\r
-1180623135,True,False,Precious Flower,False,False,,,2,1,0,False,False,60\r
642318074,True,False,Classical Globe,False,False,,,2,1,0,False,False,60\r
-1486785449,True,False,Painting,False,False,,,2,1,0,False,False,40\r
2076966627,True,False,Rug,False,False,,,2,1,0,False,False,40\r
-972644436,True,False,Statue,False,False,,,2,1,0,False,False,100\r
1551024733,True,False,Brand Mascot,False,False,,,2,8,0,False,False,40\r
-1339970600,True,False,Tidy Plant,False,False,,,2,8,0,False,False,30\r
908498444,True,False,Ceiling Light,False,False,,,2,8,0,False,False,40\r
744277037,True,False,Abstract Lamp,False,False,,,2,8,0,False,False,30\r
531866927,True,False,Vase,False,False,,,2,8,0,False,False,30\r
1220439284,True,False,Indoor fountain,False,False,,,2,8,0,False,False,60\r
668664567,True,False,Calm Painting,False,False,,,2,0,0,False,False,60\r
756364626,True,False,Plant,False,False,,,2,0,0,False,False,60\r
-648349801,False,False,Rug,False,False,,,2,0,0,False,False,60\r
-1506601664,False,False,Drink Tap,False,False,,,0,0,0,False,False,20\r
-2100580689,False,False,,False,False,,,0,0,0,False,False,20\r
532998682,True,False,Dumbwaiter,False,False,,,64,0,0,False,False,60\r
892856538,False,False,,False,False,,,0,0,0,False,False,20\r
-544237849,False,False,Beehive,False,False,,,0,0,0,False,False,20\r
188952245,False,False,,False,False,,,0,0,0,False,False,20\r
1921027834,True,False,Gas Limiter,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-770041014,True,False,Gas Override,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-1448690107,False,True,Danger Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1266458729,False,True,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1154757341,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,5\r
862493270,True,False,Hob,False,False,,1972879238:-1706154991,33,0,0,False,False,20\r
-441141351,False,False,,False,False,,1972879238,32,0,0,False,False,20\r
805530854,False,False,,False,False,,1972879238,0,0,0,False,False,60\r
-60938940,False,False,Bookings Stand,False,False,,,0,0,0,False,False,60\r
-63118559,True,False,Hosting Stand,False,False,,,8,0,0,False,False,60\r
-1813414500,True,False,Display Stand,False,False,,,8,0,0,False,False,120\r
1630557157,False,False,,False,False,,,0,0,0,False,False,20\r
-1324288299,False,False,,False,False,,,0,0,0,False,False,20\r
-374077567,False,False,,False,False,,,0,0,0,False,False,20\r
147181555,False,False,,False,False,,,0,0,0,False,False,20\r
31731938,False,False,,False,False,,,0,0,0,False,False,20\r
1419995156,False,False,,False,False,,,0,0,0,False,False,20\r
34773971,False,False,,False,False,,,0,0,0,False,False,20\r
-1424385600,False,False,,False,False,,,0,0,0,False,False,20\r
377065033,False,False,,False,False,,,0,0,0,False,False,20\r
-483535085,False,False,,False,False,,,0,0,0,False,False,0\r
1553046198,False,False,,False,False,,,0,0,0,False,False,20\r
1063254979,False,False,,False,False,,,0,0,0,False,False,20\r
1732122842,False,False,,False,False,,,0,0,0,False,False,20\r
-1936421857,False,False,,False,False,,,0,0,0,False,False,20\r
2041631136,False,False,,False,False,,,0,0,0,False,False,20\r
949631021,False,False,,False,False,,,0,0,0,False,False,60\r
-571205127,True,False,Blueprint Cabinet,False,False,,,2560,0,0,True,False,20\r
-729493805,False,True,Copying Desk,False,False,,,512,0,0,False,False,120\r
-272437832,False,False,Discount Desk,False,False,,,512,0,0,False,False,120\r
1586911545,False,True,Discount Desk,False,False,,,512,0,0,False,False,120\r
1446975727,False,True,Blueprint Desk,False,False,,,512,0,0,False,False,60\r
1139247360,True,False,Research Desk,False,False,,,1536,0,0,True,False,40\r
238041352,True,False,Booking Desk,False,True,,,8,0,0,False,False,0\r
-1817838704,False,False,Extra Life,False,False,,,0,0,0,False,False,120\r
136867583,False,False,Fast Food Terminal,False,False,,,8,0,0,False,False,60\r
-246383526,False,True,Specials Terminal,False,False,,,8,0,0,False,False,60\r
-1610332021,True,False,Ordering Terminal,False,False,,,8,0,0,False,False,60\r
944301512,False,False,,False,False,,,0,0,0,False,False,20\r
-1311702572,False,True,Microwave,False,False,,1972879238:-1706154991,32,0,0,False,False,120\r
-1068749602,True,False,Oven,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1147639502,False,False,Balloons,False,False,,,8192,0,0,False,False,0\r
-71664252,False,False,Birthday Banner,False,False,,,8192,0,0,False,False,0\r
-326328571,False,False,Piano,False,False,,,0,0,0,False,False,20\r
-905438738,True,False,Apples,True,False,,,288,0,0,False,False,60\r
1807525572,True,False,Beans,True,False,,,288,0,0,False,False,60\r
269523389,True,False,Bone-in Meat,True,False,,,288,0,0,False,False,60\r
-1573812073,True,False,Broccoli,True,False,,,288,0,0,False,False,60\r
759552160,True,False,Burger Buns,True,False,,,288,0,0,False,False,60\r
385684499,False,False,Patties,False,False,,,288,0,0,False,False,60\r
-452101383,True,False,Carrots,True,False,,,288,0,0,False,False,60\r
-117339838,True,False,Cheese,True,False,,,288,0,0,False,False,60\r
961148621,True,False,Eggs,True,False,,,288,0,0,False,False,60\r
-1735137431,False,False,Fish,False,False,,,288,0,0,False,False,60\r
-609358791,False,False,Fish,False,False,,,288,0,0,False,False,60\r
925796718,True,False,Flour,True,False,,,288,0,0,False,False,60\r
-1132411297,True,False,Hot dog bun,True,False,,,288,0,0,False,False,60\r
1799769627,True,False,Hot Dogs,True,False,,,288,0,0,False,False,60\r
-1533430406,True,False,Ice Cream,True,False,,,288,0,0,False,False,60\r
-965827229,True,False,Extra Ketchup,True,False,-965827229,,8,0,0,False,True,60\r
1193867305,True,False,Lettuce,True,False,,,288,0,0,False,False,60\r
-484165118,True,False,Meat,True,False,,,288,0,0,False,False,60\r
-1097889139,True,False,Mushrooms,True,False,,,288,0,0,False,False,60\r
-117356585,True,False,Extra Mustard,True,False,-117356585,,8,0,0,False,True,60\r
1834063794,True,False,Nuts,True,False,,,288,0,0,False,False,60\r
-1963699221,True,False,Oil,True,False,,,288,0,0,False,False,60\r
-1434800013,True,False,Olives,True,False,,,288,0,0,False,False,60\r
-2042103798,True,False,Onion,True,False,,,288,0,0,False,False,60\r
44541785,True,False,Potato,True,False,,,288,0,0,False,False,60\r
-1201769154,True,False,Rice,True,False,,,288,0,0,False,False,60\r
-1507801323,True,False,Thick cut meat,True,False,,,288,0,0,False,False,60\r
1800865634,True,False,Thin cut meat,True,False,,,288,0,0,False,False,60\r
-712909563,True,False,Tomato,True,False,,,288,0,0,False,False,60\r
-1506824829,True,False,Turkey,True,False,,,288,0,0,False,False,60\r
-1353971407,True,False,Wine,True,False,,,288,0,0,False,False,60\r
-101564005,False,False,,False,False,,,0,0,0,False,False,20\r
-897970831,False,False,,False,False,,,0,0,0,False,False,20\r
-996680732,False,False,Counter,False,False,,,0,0,0,False,False,5\r
946079892,False,False,,False,False,,,0,0,0,False,False,60\r
1171429989,False,False,,False,False,,,0,0,0,False,False,60\r
161402590,False,False,,False,False,,,0,0,0,False,False,60\r
739504637,False,True,Auto Plater,False,False,,,256,0,0,False,False,20\r
1653145961,False,False,Dish Rack,False,False,,,0,0,0,False,False,20\r
434150763,True,False,Dish Rack,False,False,,,16,0,0,False,False,20\r
1270423542,False,False,,False,False,,,0,0,0,False,False,20\r
-1474018107,False,False,,False,False,,,0,0,0,False,False,20\r
380220741,False,False,Starter Plates,False,False,,,256,0,0,False,False,20\r
1313469794,True,False,Plates,False,False,,,256,0,0,True,False,20\r
-957949759,True,False,Pot Stack,False,False,-957949759,,32,0,0,False,False,20\r
235423916,True,False,Serving Boards,False,False,235423916,,256,0,0,False,False,20\r
314862254,True,False,Woks,False,False,314862254,,0,0,0,False,False,60\r
-1291027873,False,False,,False,False,,,0,0,0,False,False,20\r
-214921468,False,False,,False,False,,,0,0,0,False,False,20\r
-2135829561,False,False,,False,False,,,0,0,0,False,False,20\r
-372462424,False,False,,False,False,,,0,0,0,False,False,20\r
933445633,False,False,,False,False,,,0,0,0,False,False,20\r
-1555334152,False,False,,False,False,,,0,0,0,False,False,20\r
1980900762,False,False,,False,False,,,0,0,0,False,False,20\r
1855052205,False,False,,False,False,,,0,0,0,False,False,20\r
-68388422,False,False,,False,False,,,0,0,0,False,False,20\r
-1200192498,False,False,,False,False,,,0,0,0,False,False,20\r
-194750543,False,False,,False,False,,,0,0,0,False,False,20\r
1911132834,False,False,,False,False,,,0,0,0,False,False,20\r
1365126444,False,False,,False,False,,,0,0,0,False,False,20\r
-1265562836,False,False,,False,False,,,0,0,0,False,False,20\r
-2046940874,False,False,,False,False,,,0,0,0,False,False,20\r
-923570273,False,False,,False,False,,,0,0,0,False,False,20\r
-488268556,False,False,,False,False,,,0,0,0,False,False,20\r
-548432204,False,False,,False,False,,,0,0,0,False,False,20\r
-758567246,False,False,,False,False,,,0,0,0,False,False,20\r
532701855,False,False,,False,False,,,0,0,0,False,False,20\r
-1857890774,False,True,Freezer,False,False,,,4,0,0,False,False,20\r
-759808000,False,True,Frozen Prep Station,False,False,,,256,0,0,False,False,60\r
1656358740,True,False,Prep Station,False,False,,,256,0,0,False,False,20\r
-262439022,False,False,,False,False,,,0,0,0,False,False,20\r
1890408483,False,False,,False,False,,,0,0,0,False,False,20\r
639111696,True,False,Breadsticks,False,False,,,8,0,0,False,True,20\r
1358522063,True,False,Candle Box,False,False,,,8,0,0,False,True,60\r
221442949,True,False,Flower Pot,False,False,,,8,0,0,False,False,60\r
1528688658,True,False,Napkins,False,False,,,8,0,0,False,True,60\r
2080633647,True,False,Sharp Cutlery,False,False,,,8,0,0,False,True,60\r
446555792,True,False,"Specials" Menu,False,False,,,8,0,0,False,True,60\r
938247786,False,False,Chair,False,False,,,0,0,0,False,False,0\r
1648733244,True,False,Coffee Table,False,False,,,8,0,0,False,False,40\r
-1979922052,False,False,Chair,False,False,,,0,0,0,False,False,0\r
-3721951,False,True,Bar Table,False,False,,,8,0,0,False,False,5\r
-34659638,False,True,Table - Simple Cloth,False,False,,,8,0,0,False,False,60\r
-203679687,False,True,Metal Table,False,False,,,8,0,0,False,False,60\r
-2019409936,False,True,Table - Fancy Cloth,False,False,,,8,0,0,False,False,60\r
209074140,True,False,Dining Table,False,False,,,1,0,0,False,False,20\r
1738351766,True,False,Rolling Pin,False,False,,-523839730,256,0,0,False,False,20\r
624465484,True,False,Scrubbing Brush,False,False,,,256,0,0,False,False,20\r
2023704259,True,False,Sharp Knife,False,False,,2087693779,256,0,0,False,False,20\r
723626409,True,False,Trainers,False,False,,,256,0,0,False,False,60\r
1796077718,True,False,Wellies,False,False,,,256,0,0,False,False,60\r
230848637,True,False,Work Boots,False,False,,,256,0,0,False,False,60\r
1129858275,True,False,Tray Stand,False,False,,,256,0,0,False,False,60\r
-823922901,False,True,Dish Washer,False,False,,,16,0,0,False,False,60\r
-214126192,False,True,Wash Basin,False,False,,,16,0,0,False,False,60\r
1083874952,True,False,Sink,False,False,,,17,0,0,False,False,20\r
1467371088,False,True,Power Sink,False,False,,,16,0,0,False,False,60\r
1860904347,False,True,Soaking Sink,False,False,,,16,0,0,False,False,20\r
-266993023,False,False,Starter Sink,False,False,,,17,0,0,False,False,20\r
2073091578,False,False,,False,False,,,0,0,0,False,False,20\r
-469149429,False,False,,False,False,,,0,0,0,False,False,20\r
834743908,False,False,,False,False,,,0,0,0,False,False,20\r
951367272,False,False,,False,False,,,0,0,0,False,False,20\r
1771016910,False,False,,False,False,,,0,0,0,False,False,60\r
-2122624266,False,False,,False,False,,,0,0,0,False,False,20\r
-404095277,False,False,,False,False,,,0,0,0,False,False,20\r
-1949016360,False,False,,False,False,,,0,0,0,False,False,20\r
-581219245,False,False,,False,False,,,0,0,0,False,False,60\r
-148578487,False,False,,False,False,,,0,0,0,False,False,20\r
-1125517450,False,False,,False,False,,,0,0,0,False,False,20\r
-233558851,False,False,,False,False,,,0,0,0,False,False,20\r
-342718019,False,False,,False,False,,,0,0,0,False,False,20\r
174737401,False,False,,False,False,,,0,0,0,False,False,20\r
310022384,False,False,,False,False,,,0,0,0,False,False,20\r
-1425710426,False,False,,False,False,,,0,0,0,False,False,60\r
-1807971648,False,False,,False,False,,,0,0,0,False,False,60\r
268640447,False,False,,False,False,,,0,0,0,False,False,60\r
1199575543,False,False,,False,False,,,0,0,0,False,False,60\r
-1451048989,False,False,,False,False,,,0,0,0,False,False,60\r
-1820794030,False,False,,False,False,,,0,0,0,False,False,60\r
871235082,False,False,,False,False,,,0,0,0,False,False,20\r
387240739,False,False,,False,False,,,0,0,0,False,False,20\r
1159228054,False,False,Bin,False,False,,,0,0,0,False,False,20\r
-626547002,False,False,,False,False,,,0,0,0,False,False,60\r
359655899,False,False,,False,False,,,0,0,0,False,False,20\r
-232172209,False,False,,False,False,,,0,0,0,False,False,20\r
-1528441435,False,False,,False,False,,,0,0,0,False,False,20\r
564388954,False,False,,False,False,,,0,0,0,False,False,20\r
1363960331,False,False,,False,False,,,0,0,0,False,False,20\r
-760874610,False,False,,False,False,,,0,0,0,False,False,20\r
1823459359,False,False,,False,False,,,0,0,0,False,False,20\r
1659152562,False,False,,False,False,,,0,0,0,False,False,20\r
477050702,False,False,,False,False,,,0,0,0,False,False,20\r
1485375733,False,False,,False,False,,,0,0,0,False,False,20\r
-1114059052,False,False,,False,False,,,0,0,0,False,False,20\r
-1518462324,False,False,,False,False,,,0,0,0,False,False,20\r
-62256073,False,False,,False,False,,,0,0,0,False,False,20\r
1636658728,False,False,,False,False,,,0,0,0,False,False,20\r
-1260306608,False,False,,False,False,,,0,0,0,False,False,20\r
1425494045,False,False,,False,False,,,0,0,0,False,False,20\r
-1614041568,False,False,,False,False,,,0,0,0,False,False,20\r
-1051912790,False,False,,False,False,,,0,0,0,False,False,20\r
1010867759,False,False,,False,False,,,0,0,0,False,False,20\r
-720353319,False,False,,False,False,,,0,0,0,False,False,60\r
-1997868587,False,False,,False,False,,,0,0,0,False,False,60\r
-1920103064,False,False,,False,False,,,0,0,0,False,False,60\r
-1235624607,False,False,,False,False,,,0,0,0,False,False,60\r
-636342486,False,False,Cobwebs,False,False,,,8192,0,0,False,False,0\r
-1318523640,False,False,Ghost Statue,False,False,,,8192,0,0,False,False,0\r
-621580281,False,False,Pumpkin,False,False,,,8192,0,0,False,False,0\r
115181910,False,False,Skeleton,False,False,,,8192,0,0,False,False,0\r
976574457,True,False,Corn,True,False,,,288,0,0,False,False,60\r
235355384,False,False,Bananas,False,False,,,0,0,0,False,False,60\r
-699333907,False,False,Strawberries,False,False,,,0,0,0,False,False,60\r
-1055654549,True,False,Pumpkin,True,False,,,288,0,0,False,False,60\r
148543530,True,False,Cherries,True,False,,,288,0,0,False,False,60\r
-1382019219,False,False,,False,False,,,0,0,0,False,False,20\r
-1403625488,False,False,,False,False,,,0,0,0,False,False,20\r
-1673904972,False,False,,False,False,,,0,0,0,False,False,20\r
1752654754,False,False,,False,False,,,0,0,0,False,False,20\r
-1748395084,False,False,,False,False,,,0,0,0,False,False,20\r
303858729,True,False,Christmas Crackers,True,False,,,288,0,0,False,False,60\r
735786885,True,False,Cranberry,True,False,,,288,0,0,False,False,60\r
-2133205155,True,False,Sugar,True,False,,,288,0,0,False,False,60\r
-667884240,False,False,Conveyor,False,False,,,64,0,0,False,False,20\r
-697441390,False,False,,False,False,,,64,0,0,False,False,20\r
-349733673,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1836107598,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
369884364,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-699013948,False,False,,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
555321421,False,False,Rabbit Poster,False,False,,,8192,0,0,False,False,0\r
-2084684446,False,False,Lantern,False,False,,,8192,0,0,False,False,0\r
-2092567672,True,False,Bamboo,True,False,,,288,0,0,False,False,60\r
595306349,True,False,Seaweed,True,False,,,288,0,0,False,False,60\r
-1210117767,True,False,Mandarins,True,False,,,288,0,0,False,False,60\r
-471813067,True,False,Extra Soy Sauce,True,False,-471813067,,8,0,0,False,True,60\r
-184765154,False,False,,False,False,,,0,0,0,False,False,20\r
-707206359,False,False,,False,False,,,0,0,0,False,False,20\r
1134699240,False,False,,False,False,,,0,0,0,False,False,20\r
-471643137,False,False,Flower Arch,False,False,,,8192,0,0,False,False,0\r
142298503,False,False,Friends Poster,False,False,,,2,0,0,False,False,0\r
-2001861712,False,False,Heart Balloons,False,False,,,8192,0,0,False,False,0\r
-1314508999,False,False,Heart Bunting,False,False,,,8192,0,0,False,False,0\r
785615801,False,False,Neon Sign,False,False,,,8192,0,0,False,False,0\r
645876063,False,False,,False,False,,,0,0,0,False,False,60\r
-916942203,False,False,,False,False,,,0,0,0,False,False,20\r
345407921,False,False,,False,False,,,0,0,0,False,False,20\r
-509190559,False,False,,False,False,,,0,0,0,False,False,20\r
1274763392,False,False,,False,False,,,0,0,0,False,False,20\r
965503721,False,False,,False,False,,,0,0,0,False,False,20\r
260380903,False,False,,False,False,,,0,0,0,False,False,20\r
-89571330,False,False,,False,False,,,0,0,0,False,False,20\r
2114150010,False,False,,False,False,,,0,0,0,False,False,20\r
143484231,True,False,Cupcake Stand,True,False,143484231,,8,0,0,False,False,60\r
801015432,True,False,Ice Dispenser,True,False,,,32,0,0,False,False,20\r
-557736569,True,False,Milk Steamer,True,False,,,32,0,0,False,False,20\r
120342736,True,False,Milk,True,False,,,288,0,0,False,False,60\r
-1598460622,True,False,Tea bags,True,False,,,288,0,0,False,False,60\r
1377093570,True,False,Tea cups,True,False,,,288,0,0,False,False,60\r
-762638188,True,False,Tea pots,True,False,,,288,0,0,False,False,60\r
-660310536,True,False,Cake Tin,True,False,,,256,0,0,False,False,60\r
-2135982034,True,False,Brownie Tray,True,False,,,256,0,0,False,False,120\r
-1723125645,True,False,Cookie Tray,True,False,,,256,0,0,False,False,120\r
-315287689,True,False,Cupcake Tray,True,False,,,256,0,0,False,False,120\r
2136474391,True,False,Doughnut Tray,True,False,,,256,0,0,False,False,120\r
783588616,False,False,Chocolate,False,False,,,0,0,0,False,False,60\r
1470180731,False,False,Lemon Tree,False,False,,,0,0,0,False,False,60\r
-217313684,True,False,Mixing Bowls,False,False,-217313684,,32,0,0,False,False,20\r
782648278,False,False,Cauldron,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-1552572658,True,False,Candles,False,False,,,8192,0,0,False,False,0\r
-119593913,True,False,Pumpkin Stack,False,False,,,8192,0,0,False,False,0\r
-379172217,True,False,Witch Shelf,False,False,,,8192,0,0,False,False,0\r
-292467039,False,False,Enchanting Desk,False,False,,,1536,0,0,False,False,40\r
-1946127856,False,False,Ghostly Clipboard,False,False,,,0,0,0,False,False,60\r
1313278365,False,False,Ghostly Knife,False,False,,,0,0,0,False,False,60\r
689268680,False,False,Ghostly Rolling Pin,False,False,,,0,0,0,False,False,60\r
-560953757,False,False,Ghost Scrubber,False,False,,,0,0,0,False,False,60\r
-1780646993,False,False,Illusion Wall,False,False,,,64,0,0,False,False,60\r
1150470926,False,False,Instant Wand,False,False,,,256,0,0,False,False,60\r
2044081363,False,False,Levitation Line,False,False,,,64,0,0,False,False,20\r
-1298525547,False,False,Levitation Spot,False,False,,,64,0,0,False,False,20\r
119166501,False,False,Levitation Station,False,False,,,0,0,0,False,False,60\r
-1992638820,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120\r
-877630314,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120\r
744482650,False,False,Magic Mirror,False,False,,,64,0,0,False,False,60\r
-1696198539,False,False,Magic Spring,False,False,,,0,0,0,False,False,20\r
-1835366879,False,False,,False,False,,,0,0,0,False,False,20\r
2031496644,False,False,,False,False,,,0,0,0,False,False,20\r
1391464545,False,False,,False,False,,,0,0,0,False,False,20\r
477535207,False,False,,False,False,,,0,0,0,False,False,20\r
923307040,False,False,,False,False,,,0,0,0,False,False,20\r
-1090855913,False,False,,False,False,,,0,0,0,False,False,20\r
50273892,False,False,,False,False,,,0,0,0,False,False,20\r
-70663877,False,False,,False,False,,,0,0,0,False,False,20\r
-2123542635,False,False,,False,False,,,0,0,0,False,False,20\r
423254987,False,False,Preserving Station,False,False,,,256,0,0,False,False,60\r
267288096,False,False,Magic Apple Tree,False,False,,,8,0,0,False,False,60\r
29164230,False,False,Pouch of Holding,False,False,,,256,0,0,False,False,120\r
540526865,False,False,Enchanted Plates,False,False,,,0,0,0,False,False,60\r
2000892639,False,False,Table - Stone,False,False,,,8,0,0,False,False,60\r
-1688921160,False,False,Table - Sharing Cauldron,False,False,,,8,0,0,False,False,60\r
1492264331,False,False,Vanishing Circle,False,False,,,0,0,0,False,False,20\r
-1541798751,True,False,Mince,True,False,-1541798751,,32,0,0,False,False,20\r
-2077197906,True,False,Pasta Sheet,True,False,-2077197906,,32,0,0,False,False,20\r
-1339944542,True,False,Lasagne Tray,True,False,-1339944542,,32,0,0,False,False,20\r
-215543585,True,False,Butter,True,False,-215543585,,32,0,0,False,False,20\r
-182748008,True,False,Spaghetti,True,False,-182748008,,32,0,0,False,False,20\r
509800268,False,False,Dish Source Cabinet,False,False,,,0,0,0,False,False,60\r
1436010410,False,False,,False,False,,,0,0,0,False,False,20\r
-400359294,False,False,,False,False,,,0,0,0,False,False,20\r
-1082709460,False,False,,False,False,,,0,0,0,False,False,20\r
-307800946,False,False,,False,False,,,0,0,0,False,False,20\r
2095304286,False,False,,False,False,,,0,0,0,False,False,20\r
585649337,False,False,,False,False,,,0,0,0,False,False,20\r
-364231730,False,False,,False,False,,,0,0,0,False,False,60\r
-121110359,False,False,,False,False,,,0,0,0,False,False,60\r
-940358190,True,False,Leftover Bags,False,False,,,8,0,0,False,True,60\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60\r
1668340088,False,False,Appliance,False,False,,,0,0,0,False,False,60\r
-450635801,False,False,Appliance,False,False,,,0,0,0,False,False,60\r
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60\r
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60\r
`;const ps=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],gs=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],pe=ds.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(gs[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(F=>Number(F));break;default:r=e[l]}a[ps[l]]=r}return a});class ms{constructor(e){N(this,"Staple");N(this,"Tags");N(this,"StapleWhenMissing");N(this,"Appliance");N(this,"IsRemoved");N(this,"Filter");N(this,"DecorationRequired");N(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var ge=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(ge||{}),Se=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(Se||{});const Ye={DefaultShoppingTag:892};var Je=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(Je||{}),He=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(He||{});pe.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,e)=>s.Name<e.Name?1:-1);var Ts="38";const bs=Number(Ts);function Cs(s,e){return Math.floor(Math.random()*(e-s))+s}function ks(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?Cs(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const ys="12345678",Ss="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of Ss);for(const s of ys);function me(s){return s.length?s.reduce((e,a)=>e+a,0)/s.length:0}class Pe{constructor(e,a){N(this,"fixedSeed");N(this,"instance");N(this,"random");typeof e=="string"&&(e=Ps(e)),this.fixedSeed=e,this.instance=a,this.random=new Le(e+Math.imul(124192293,a))}useSubcontext(e){return new Pe(this.fixedSeed,124192293*e+this.instance)}}class Le{constructor(e){N(this,"seed");const a=g=>Math.imul(1812433253,g)+1>>0,l=e>>0,r=a(l),F=a(r),c=a(F);this.seed=[l,r,F,c]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Ps(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function Qe(s,e,a){return new Pe(a,s*1231231+e)}var De=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(De||{}),I=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(I||{});const Ds=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater","Wash Basin"],Ze={};for(const s of Ds)Ze[s]=!0;const Ms=pe.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class vs{constructor(e,a=0){N(this,"seed");N(this,"mapSize");N(this,"numTiles");N(this,"baseUpgradeChance");N(this,"OwnedAppliances");N(this,"Cards");N(this,"Theme");N(this,"cache",new Map);N(this,"cacheDay");N(this,"cacheOverridePlated");N(this,"cacheOverrideProcesses");N(this,"baseSpawnCount");N(this,"newestCard");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=He.Null,this.cacheDay=-1,this.baseSpawnCount=5}clearCache(){this.cacheDay=-1}getLayoutInfo(){const a=new Pe(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25,this.baseSpawnCount=7),e.Name==="Lake"&&(this.baseUpgradeChance=.2),e.UnlockGroup===De.PrimaryTheme&&(this.Theme=He[e.Name]),this.newestCard=e)}handleNewestRerollEffects(){this.handleNewCardRerollEffects(this.newestCard)}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>pe.filter(l=>l.ID===a))))}addCard(e){var a;e!==void 0&&(((a=this.newestCard)==null?void 0:a.ID)===e.ID&&(this.newestCard=void 0),this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const F=e[r];let c=F.blueprintCount;a%5===0&&(c+=8-this.baseSpawnCount,r===0&&(c+=2)),l+=c*(Ms-1+1),F.spawnInside||(l+=Bs(F.playerInside,this.numTiles)),l+=bs}return l}buildShopOptions(e,a,l,r,F){const c=l.some(h=>h.Name==="Couples");let g=[];for(const h of pe)if(!(!h.IsPurchasable&&!h.IsPurchasableAsUpgrade)){var t=new ms(h);const v=t.Appliance.Name;(t.Staple==ge.NonStaple||t.Staple==ge.WhenMissing)&&((t.Tags&Se.Basic)>Se.None?t.Staple=ge.FixedStaple:t.StapleWhenMissing?(v!="Research Desk"&&v!="Blueprint Cabinet"&&v!="Plates"&&console.log(`Unexpected ${v} StapleWhenMissing Appliance`),e.some(i=>i.ID===t.Appliance.ID)?t.Staple=ge.NonStaple:t.Staple=ge.WhenMissing):c&&v==="Flower Pot"&&(t.Staple=ge.BonusStaple));const C=t.Appliance;e:{if(C.SellOnlyAsDuplicate){if(!e.some(i=>i.ID===C.ID)){t.IsRemoved=!0;break e}}else if(C.RequiresForShop.length>0){let i=!1;for(const o of C.RequiresForShop)e.some(k=>k.ID===o)&&(i=!0);if(!i){t.IsRemoved=!0;break e}}else if(C.SellOnlyAsUnique&&(C.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${C.Name}, ${C.ID}`),e.some(i=>i.ID===C.ID))){t.IsRemoved=!0;break e}if(Ze[v]&&(r??l.every(i=>!i.isMain||i.Name==="Tacos"))){t.IsRemoved=!0;break e}if(t.Filter==Je.RefreshableProvider&&!e.some(i=>i.AllowRefreshes)){t.IsRemoved=!0;break e}if(t.DecorationRequired!=He.Null&&t.DecorationRequired!=a){t.IsRemoved=!0;break e}if(C.RequiresProcessForShop.length>0&&(F?!C.RequiresProcessForShop.some(i=>F.includes(i)):!C.RequiresProcessForShop.some(i=>l.some(o=>o.RequiredProcesses.includes(i))))){t.IsRemoved=!0;break e}}g.push(t)}return g}initRandom(e){return Qe(823828,e,this.seed)}getAppliances(e,a,l,r){var C;(a!==this.cacheDay||l!==this.cacheOverridePlated||(r==null?void 0:r.length)!==((C=this.cacheOverrideProcesses)==null?void 0:C.length)||r!=null&&r.some((i,o)=>{var k;return i!==((k=this.cacheOverrideProcesses)==null?void 0:k[o])}))&&(this.cacheDay=a,this.cacheOverridePlated=l,this.cacheOverrideProcesses=r,this.cache.clear());const F=e.length===1,c=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,l,r);let g=e[e.length-1].blueprintCount,t;if(a%5==0){F?g=10:g+=8-this.baseSpawnCount,t=[];for(let i=0;i<g;i++)t[i]=Se.Decoration;if(F)for(const i of[1,2])t[t.length-i]=Se.SpecialEvent}else if(e.length>1){t=[];for(let i=0;i<g;i++)t[i]=Ye.DefaultShoppingTag}else{const i=Ye.DefaultShoppingTag,o=Math.max(1,g),k=Math.max(0,Math.min(c.filter(y=>y.Staple!==ge.NonStaple&&!y.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),o)),d=Math.max(0,o-k);g=o,t=[];for(let y=0;y<k;y++)t[y]=Se.Basic;for(let y=k;y<k+d;y++)t[y]=i}const h=this.initRandom(a).random;let f=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(f)&&this.cache.get(f).length>=g)return this.cache.get(f).slice(0,g);const v=f;for(;f--;)h.value;{const i=[...c],o=[],k=this.getUpgradeChance(a),d=[];for(let y=0;y<g;y++){const L=t[y],X=h.valueFloat<k;ks(i,h);for(let B=0;B<i.length;B++){const $=i[B];if($.IsRemoved||d.includes($.Appliance)||!$.MatchesRequestTags(L)||!X&&$.Staple==ge.NonStaple&&$.SellAsUpgrade)continue;L!=Se.Decoration&&d.push($.Appliance),o[y]=$.Appliance;break}o[y]==null}return this.cache.set(v,o),o}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function Bs(s,e){return s?e-2:e-1}var Rs=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,Ns=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const we=Rs.trim().split(/\r?\n/).filter(s=>s).map(s=>{var he,Me;const[e,a,l,r,F,c,g,t,h,f,v,C]=s.split(","),i=Number(e),o=Number(l),k=r!=null&&r.length?r.split(":").map(U=>Number(U)):[],d=F.length?F.split(":").map(U=>Number(U)):[],y=c!=null&&c.length?(he=c==null?void 0:c.split(":"))==null?void 0:he.map(U=>Number(U)):[],L=g!=null&&g.length?(Me=g==null?void 0:g.split(":"))==null?void 0:Me.map(U=>Number(U)):[],se=t==="True",X=h==="True",B=Number(f),$=Number(v),oe=Number(C);return{ID:i,Name:a,UnlockGroup:o,Requires:k,BlockedBy:d,RequiredProcesses:y,IngredientProviders:L,isMain:se,isStarterOrSide:X,DishType:B,CustomerMultiplier:$,DishValue:oe}}),Xe=[...[{ID:447437163,Name:"Country",UnlockGroup:De.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:I.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:De.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:I.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:De.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:I.Null,CustomerMultiplier:0,DishValue:0},we.filter(s=>s.Name==="Community")[0],we.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:De.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:I.Null,CustomerMultiplier:0,DishValue:0},we.filter(s=>s.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:De.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:I.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>we.filter(e=>e.Name===s)[0]);const ws=Ns.trim().split(`\r
`).filter(s=>s).map(s=>{var X,B;const[e,a,l,r,F,c,g,t,h,f]=s.split(","),v=Number(e),C=Number(l),i=r!=null&&r.length?(X=r==null?void 0:r.split(":"))==null?void 0:X.map($=>Number($)):[],o=F!=null&&F.length?(B=F==null?void 0:F.split(":"))==null?void 0:B.map($=>Number($)):[],k=c==="True",d=g==="True",y=Number(t),L=Number(h),se=Number(f);return{ID:v,Name:a,UnlockGroup:C,Requires:[],BlockedBy:[],RequiredProcesses:i,IngredientProviders:o,isMain:k,isStarterOrSide:d,DishType:y,CustomerMultiplier:L,DishValue:se}}).sort((s,e)=>s.Name<e.Name?-1:1),Fe={};for(const s of we)Fe[s.Name]=s;for(const s of ws)Fe[s.Name]=s;for(const s of Xe)Fe[s.Name]=s;Fe.Coffee=Fe["Black Coffee"],Fe.Community.AKA="Autumn",Fe["Christmas Rush"].AKA="North Pole",Fe.Couples.AKA="Romantic",Fe["Cherry Pie"]=Fe["Cherry Pies"],Fe["Mushroom Pie"]=Fe["Mushroom Pies"];const Is=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],As=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],xe={};function be(s){if(xe[s]===void 0)switch(xe[s]=pe.filter(e=>e.Name===s)[0],s){case"Display Stand":xe[s].PurchaseCost=120*2;break}if(xe[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return xe[s]}const xs=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function $e(s){let e=0;return(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime),e+=s.actionHistory.length,e}function Ue(s,e){return(a,l)=>{const r=a.achieved[e],F=l.achieved[e],c=Math.min(r.goalsPurchased,s);let t=Math.min(F.goalsPurchased,s)-c;return t===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&F.goalsPurchased+F.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(F.goalsPurchased+F.substitutesPurchased):F.substitutesPurchased-r.substitutesPurchased:t}}const Os={Oven:0,Mince:15,"Cake Tin":15,"Discount Desk":3,"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,Grabber:0,"Smart Grabber":3,Freezer:2,Bin:0,Conveyor:0},Es=[6,6,7,4,6,6,7,8,11,8,7,11,10,7,11];function Hs(s,e,a,l,r=!0,F=As,c=Is,g=Es,t=()=>{},h=15){var ns,Fs,is,os,us,cs;let f={},v=[];const C=[],i=new Array(l.length).fill(0).map(()=>({})),o={};let k=0,d=0;const y={},L=e.some(m=>m.Name==="Turbo"),se=e.some(m=>m.Name==="Lake"),X=[(m,u)=>u.fps-m.fps,(m,u)=>u.upgradesInProgress.length-m.upgradesInProgress.length];let B=[],$=0;const oe={};for(const m of l){for(const u of m){const{goal:P,number:z,substitutes:j,skipMissing:V=!1}=u;for(const A of j)o[A]||(o[A]=[]),o[A].push(P),A==="Flower Pot"&&console.log({substitutesToGoalMap:o});oe[P]?V||(oe[P].number+=z):(oe[P]={...u},V&&(oe[P].number=0));for(let A=0;A<=$;A++){if(i[A]===void 0)debugger;i[A][P]?i[A][P].number+=z:i[A][P]={...u}}for(let A=$+1;A<i.length;A++){if(i[A]===void 0)debugger;i[A][P]||(i[A][P]={...u,number:0})}V||(d+=z*Math.ceil(be(P).PurchaseCost*(L?.5:se?.75:1)))}try{C.push(JSON.parse(JSON.stringify(oe)))}catch{console.log(i),console.log(i[0]);debugger}$++}const he=i[0],Me=Object.values(he).sort((m,u)=>be(m.goal).PurchaseCost-be(u.goal).PurchaseCost).map(m=>m.goal);f=C.shift();for(const m of Object.values(he)){const{goal:u,number:P}=m;y[u]={...m,substitutesPurchased:0,goalsPurchased:0},m.goal!=="Starter Bin"&&(X.push(Ue(P,u)),B.push(Ue(P,u)))}const U=new ie([],[...X,(m,u)=>u.money-m.money,(m,u)=>$e(m)-$e(u),(m,u)=>m.actionHistory.length-u.actionHistory.length,(m,u)=>m.cumulativeRerolls-u.cumulativeRerolls]),D=L?7:5,W=[{spawnInside:!0,blueprintCount:D},{spawnInside:!1,playerInside:!1,blueprintCount:D}];r||W.push({spawnInside:!1,playerInside:!0,blueprintCount:D});const ze=[{spawnInside:!0,blueprintCount:D},{spawnInside:!1,playerInside:!0,blueprintCount:D},{spawnInside:!1,playerInside:!1,blueprintCount:D}];function _e(m,u,P){const z={...m};for(const j of Object.values(u)){const V=j.goal;z[V]={...z[V]},V==="Copying Desk"&&(z[V].goalsPurchased+=z[V].substitutesPurchased,z[V].substitutesPurchased=0),z[V].goalsPurchased+=j.goalsPurchased,z[V].substitutesPurchased+=j.substitutesPurchased}return z}let Ce=[];function Ge(m,u,P,z=!1){var V,A,ce,Te,E;const j=u.fodderUsed;e:for(const R of m){let ae=1+(R.achieved["Copying Desk"].goalsPurchased?1:0);const p=R.upgradesInProgress.filter(T=>T.appliance==="").length;let b=p;if(b*=ae,b<0)continue;let n=[...R.upgradesInProgress];if(b<j)if((p+n.filter(T=>T.appliance==="Mince").length)*ae>=j){let T=0;for(;(p+T*2)*ae<j;)T++;let S=0;for(;T;)n[S].appliance==="Mince"&&(n[S]={appliance:"",cost:0,upgradeTurnTimer:0},n.push({appliance:"",cost:0,upgradeTurnTimer:0}),T--),S++}else continue;const w=(((V=R.achieved["Discount Desk"])==null?void 0:V.goalsPurchased)??0)+(((A=R.achieved["Discount Desk"])==null?void 0:A.substitutesPurchased)??0)-R.upgradesInProgress.filter(T=>T.appliance==="Discount Desk").length>0;let x=0,G=0,q=0;n=n.flatMap(T=>{let S=[];return T.appliance==="Mince"?R.achieved["Copying Desk"].goalsPurchased&&(G+=T.cost*(w?.5:1),q++,S.push({appliance:"",cost:0,upgradeTurnTimer:0}),T.upgradeTurnTimer<=1&&S.push({appliance:"",cost:0,upgradeTurnTimer:0})):T.appliance==="Cake Tin"&&R.achieved["Copying Desk"].goalsPurchased&&(G+=T.cost*(w?.5:1),x++,q++,T.upgradeTurnTimer<=1&&(x++,q++)),rs||R.achieved["Research Desk"].goalsPurchased?T.upgradeTurnTimer<=1?S.push({appliance:"",cost:0,upgradeTurnTimer:0}):S.push({...T,upgradeTurnTimer:T.upgradeTurnTimer-1,cost:w?Math.ceil(T.cost/2):T.cost}):w?S.push({...T,cost:Math.ceil(T.cost/2)}):S.push(T),S.reverse()});let M=0;{let T=u.actionHistory.length,S=!1;for(;T--;)if(u.actionHistory[T]==="buy Blueprint Cabinet")M++;else if(u.actionHistory[T].includes(" for ")){S||(M=0);break}else u.actionHistory[T].includes("reroll")&&(S=!0)}for(let T=0;T<u.achieved["Blueprint Cabinet"].goalsPurchased-M;T++)n.push({appliance:"",cost:0,upgradeTurnTimer:0});let K=R.cumulativeRerolls+u.cumulativeRerolls;if(K>Be)continue;let Y=K*(K+1)/2*10+R.applianceCosts+G;const fe=u.actionHistory.length?_e(R.achieved,u.achieved):R.achieved,O=structuredClone(fe);for(const T of n)T.appliance&&(O[T.appliance]=structuredClone(O[T.appliance]),O[T.appliance].goalsPurchased--);if(u.cumulativeRerolls&&Y>_)continue;let J=[],Re=0,Ve=1;const ke=n.filter(T=>!T.appliance).length;{let T=_-Y;for(const S of Me){const Q=u.achieved[S],Z=Math.ceil(be(Q.goal).PurchaseCost*(L?.5:se?.75:1));if(T-=(Q.goalsPurchased+Q.substitutesPurchased)*Z,Q.substitutesPurchased){let le=Os[Q.goal]??1;if(Q.goal==="Grabber"&&u.actionHistory.some(ee=>ee.includes("Conveyor for Grabber"))&&(le=1),Q.goal!=="Freezer"){if(Q.goal==="Dish Washer"){const ee=(ce=u.actionHistory.filter(Ae=>Ae.includes(" for Dish Washer"))[0].match(/buy (.*) for Dish Washer/))==null?void 0:ce[1];if(!ee)throw"nope";le=["Dish Washer","Wash Basin","Power Sink","Soaking Sink","Sink"].indexOf(ee),le===4&&(le=3)}}if(le)for(let ee=0;ee<Q.substitutesPurchased;ee++)T+=Z,J.push({appliance:Q.goal,cost:Z,upgradeTurnTimer:le}),Re+=le}}if(J.length>ke){let S=J.length-ke;const Q=J.filter(Z=>Z.appliance==="Mince").length;if(n.filter(Z=>Z.appliance==="Mince").length*2+Q>=S-Q){let Z=0;for(;S>0&&n[Z];)n[Z].appliance==="Mince"&&(n[Z]={appliance:"",cost:0,upgradeTurnTimer:0},n.push({appliance:"",cost:0,upgradeTurnTimer:0}),S-=2),Z++;if(S>0){let le=J.length-1;for(;S>0;)J[le].appliance==="Mince"&&(J.splice(le,1),n.push({appliance:"",cost:0,upgradeTurnTimer:0}),S-=2),le--}}else continue e}for(const S of J)S.appliance&&(O[S.appliance]=structuredClone(O[S.appliance]),O[S.appliance].goalsPurchased--)}let te;try{if(te=zs(f,{...R,achieved:O,upgradesInProgress:[...n,...J],fps:R.fps+x}),!z&&H===2&&(!O["Sharp Knife"].goalsPurchased||!(O["Scrubbing Brush"].goalsPurchased||O["Power Sink"].goalsPurchased))||!z&&te>ue*2)continue}catch{continue}if(ue<=0&&te>0)continue;Y+=u.applianceCosts;let Ne=0;{let T="",S=R.actionHistory.length,Q=!0;for(;S--;){const ee=R.actionHistory[S].match(/^(?:spawn|reroll) (..?)/);if(!ee){R.actionHistory[S].match(/^day ..? spawn/)&&(Q=!0);continue}if(Q){Q=!1;continue}T=ee[1][0]}let Z=0,le=!0;for(let ee=0;ee<u.actionHistory.length;ee++){Ne+=Z,Z=0;const Ae=u.actionHistory[ee].match(/^(?:spawn|reroll) (..?)/);if(!Ae){const fs=u.actionHistory[ee].match(/take (\d+) out/);fs&&(Ne+=parseInt(fs[1])/3+1);continue}Ne++;const Ks=Ae[1][0],hs=le?"":Ae[1][1];le=!1,T&&(T[0]!==Ks&&(Z+=3),T[1]&&hs&&T[1]!==hs&&(Z+=10)),T=Ae[1]}}let Ee=R.deskTime+(Ve-1)*20+Math.max(0,j-p)*5*((Te=R.achieved["Clipboard Stand"])!=null&&Te.goalsPurchased?.5:1)+(Re*Ve*5+(c[u.day]??c.at(-1)??0))*((E=fe["Clipboard Stand"])!=null&&E.goalsPurchased?.5:1)+Ne+u.cumulativeRerolls*2;{let T=0;for(const S of J){for(;n[T].appliance;)T++;n[T]=S}for(let S=0;S<M;S++)n.push({appliance:"",cost:0,upgradeTurnTimer:0})}const ne={...u,rerollConfigs:[...R.rerollConfigs,u.rerollConfigs],achieved:fe,money:_-Y,actionHistory:[...R.actionHistory,...u.actionHistory],upgradesInProgress:n,cumulativeRerolls:R.cumulativeRerolls+u.cumulativeRerolls,applianceCosts:R.applianceCosts+u.applianceCosts+G,deskTime:Ee,fps:R.fps+x};if(x&&ne.actionHistory.push(`buy ${x} flower pot copies`),q>x&&ne.actionHistory.push(`buy ${q-x} cab copies`),!(ne.money<-ne.upgradesInProgress.reduce((T,S)=>T+S.cost,0))){if(ne.money>=0||ne.money+ne.upgradesInProgress.reduce((T,S)=>T+S.cost,0)>=0&&C.length){if(te<ue&&(ue=te,console.log(`best so far missing ${te} pieces `+Oe(ne,_))),te<=0){if(U.add(ne)){if(ts(),U.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(ue<=0)continue}if(z&&(H===1?b=0:ae>1&&(b+=R.upgradesInProgress.filter(T=>T.appliance==="Mince").length*ae)),b>k&&(k=b),z){const T=R.cumulativeRerolls;for(let S=0;S<=b;S++)Ce[S]===void 0&&(Ce[S]=new ie([],xs)),Ce[S].add([T,Y]);continue}!u.applianceCosts&&!u.cumulativeRerolls?P.array.push(ne):P.add(ne)}}return ue}const Ke={...y};Ke["Blueprint Cabinet"]={...Ke["Blueprint Cabinet"],goalsPurchased:1};const Ie=new ie([{achieved:Ke,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:[{appliance:"",cost:0,upgradeTurnTimer:0}],day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0,fps:0}],[...X,(m,u)=>m.applianceCosts-u.applianceCosts,(m,u)=>m.cumulativeRerolls-u.cumulativeRerolls]);let ue=1/0,H=0,_=0;const re=new vs(s),qe=["Plates"];let rs=!1,ve=[];{const m=["Booking Desk","Blueprint Cabinet"];pe.filter(u=>m.includes(u.Name)).forEach(u=>re.OwnedAppliances.push(u))}for(const m of e)re.addCard(m);function js(m,u,P,z){let j=[],V=[],A=[];{const E={...m};m.fodderPurchases.some(R=>R)?A.push(E):j.push(E)}const ce=JSON.parse(JSON.stringify(m.achieved)),Te=["upgrade","base","fodder"];m.rerollConfigs.length+2>z&&Te.pop();for(const E of u){let R=[...j],ae=[...V,...A],p=[];for(const b of Te){if(!E)continue;let n=E.Name,w=ce[n],x=!1;switch(b){case"base":break;case"upgrade":{const G=o[E.Name],q=G&&E.Name==="Research Desk"?H>6?"Copying Desk":"Discount Desk":G==null?void 0:G[Math.floor(Math.random()*G.length)];if(w=ce[q],!w)continue;x=!0,n=q}break;case"fodder":w=ce["Starter Bin"],n="Starter Bin",x=!0}if(w){n==="Table - Fancy Cloth"&&(x=!1),E.ThemeRequired&&(x=!1),x?w.substitutesPurchased++:w.goalsPurchased++;{const G=q=>{if(!q)return;{let Y=q.actionHistory.length;for(;Y--;){const fe=q.actionHistory[Y];if(fe.includes(`buy ${E.Name}`))return;if(fe.includes("reroll "))break}}if(!q.numFloor)return;const M={...q};if(M.achieved={...M.achieved},!M.numFloor){console.log(u);debugger}if(M.numFloor--,M.achieved[n])M.achieved[n]={...M.achieved[n],goalsPurchased:M.achieved[n].goalsPurchased+(x?0:1),substitutesPurchased:M.achieved[n].substitutesPurchased+(x?1:0)};else if(M.achieved[n]={...w,goalsPurchased:x?0:1,substitutesPurchased:x?1:0},Number.isNaN(M.achieved[n].goalsPurchased))debugger;const K=n==="Starter Bin"?be(E.Name).PurchaseCost:Math.max(be(E.Name).PurchaseCost,be(n).PurchaseCost);return x?M.applianceCosts+=Math.ceil(K*(L?.5:1)):M.applianceCosts+=Math.ceil(K*(L?.5:se?.75:1)),M.actionHistory=[...M.actionHistory,`buy ${E.Name}`+(x?` for ${n}`:"")],n==="Starter Bin"&&(M.fodderPurchases=[...M.fodderPurchases],M.fodderPurchases[1]++,M.achieved[n].substitutesPurchased--),M};if(b!=="fodder"){const q=j.map(G).filter(Y=>Y),M=V.map(G).filter(Y=>Y),K=A.map(G).filter(Y=>Y);R=R.concat(q),ae=ae.concat(M),p=p.concat(K),q.forEach(P)}else{const q=(u.indexOf(E)===0?j:A).map(G);ae=ae.concat(q)}}}}j=R.filter(b=>b),V=ae.filter(b=>b),A=p.filter(b=>b)}return j.concat(V).concat(A)}let Be=-1;{let m=F.slice(0,h).reduce((u,P)=>u+P)-d;for(;m>0;)Be++,m-=10*Be;console.log({maxCumulativeRerolls:Be,money:m,expectedMoneyByDay:F,gearMoney:d})}for(Be=1/0,Number.isFinite(h)||(Be=3);ue;){let m=Ie.array;if(!m.length){t("No Solutions");debugger;return 0}Ie.clear();const u=new ie([],[...B,(p,b)=>p.cumulativeRerolls-b.cumulativeRerolls,(p,b)=>p.applianceCosts-b.applianceCosts]);if(_+=F[H]??F.at(-1)??0,H++,H>=h){_s(!0,{array:m});debugger;break}if(H>14&&(L||!a.length)){debugger;break}if(H>1&&m.length===0){debugger;break}m.sort((p,b)=>b.achieved["Cake Tin"].substitutesPurchased-p.achieved["Cake Tin"].substitutesPurchased||b.fps-p.fps||b.upgradesInProgress.length-p.upgradesInProgress.length||b.achieved.Mince.substitutesPurchased-p.achieved.Mince.substitutesPurchased),console.log(`fastest so far: ${Oe(m[0],_)}`);let P=2;switch(H){case 1:P=5;break;case 2:P=5;break;case 3:P=1;break;case 4:P=7;break;case 6:default:P=Math.min(Be+1,7);break}P=20,P+=1;let z=2*60*1e3;{let p=0;for(let b=1;b<=P;b++)p+=1/b;z/=p}const j=Math.min(P-1,1/0);if(_>=d){const p=Math.sqrt((_-d)/10*2);console.log(`Have ${_} on day ${H}, need ${d} to buy everything. Allows for ~${p} rerolls across all days`)}H%5||(P=1);let V;(L||H===5||!(H%3))&&(V=a.shift());const A=we.filter(p=>p.Name===V)[0];re.handleNewCardSpawnEffects(A);const ce=re.getAppliances([{spawnInside:!0,blueprintCount:D}],H);let Te=[];if(qe.length)for(let p=qe.length-1;p>=0;p--){let b=ce.length;for(;b--;){const n=ce[b];if(n.Name===qe[p]){if(console.log(`buying ${n.Name} on day ${H}`),_-m.reduce((x,G)=>Math.min(x,G.applianceCosts+10/2*(G.cumulativeRerolls+1)*G.cumulativeRerolls),1/0)<n.PurchaseCost*(L?.5:se?.75:1)){console.log("not enough money-- skip for now");continue}ve.push(n),qe.splice(p,1),_-=n.PurchaseCost*(L?.5:se?.75:1),ce.splice(b,1);break}}Te=ve.map(n=>`Buy ${n.Name}`)}let E=new ie([{day:H,rerollConfigs:[],achieved:{...y},numFloor:D,fodderAvailable:k,fodderUsed:0,money:_,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(p,b)=>re.getPrngAdvancements(p.rerollConfigs,H)-re.getPrngAdvancements(b.rerollConfigs,H),(p,b)=>-re.getPrngAdvancements(p.rerollConfigs,H)+re.getPrngAdvancements(b.rerollConfigs,H),...B,(p,b)=>p.cumulativeRerolls-b.cumulativeRerolls,(p,b)=>p.applianceCosts-b.applianceCosts,(p,b)=>b.numFloor+b.fodderAvailable-p.numFloor+p.fodderAvailable,(p,b)=>p.numFloor-b.numFloor]);Ce=[],Ge(m,E.array[0],Ie,!0);let R=1/0;const ae=p=>Ce.map(b=>b.array.reduce((n,[w,x])=>Math.min(n,x+(w+1+w+p)/2*p*10),1/0));{const p=P;for(;ae(P-1)[0]>_;)P--;P!==p&&console.log(`clamped max rerolls from ${p} down to ${P}`)}e:for(;P--&&(ve.length&&((Fs=(ns=E.array[0])==null?void 0:ns.rerollConfigs)==null?void 0:Fs.length)===1&&(ve.some(n=>n.Name==="Research Desk")&&(rs=!0),re.OwnedAppliances.push(...ve),ve=[],Te=[]),R=Date.now()+z/(((os=(is=E.array[0])==null?void 0:is.rerollConfigs)==null?void 0:os.length)??1),E.array[0]!==void 0);){console.log(`Seed ${s} Day ${H} Reroll ${E.array[0].rerollConfigs.length} expanding ${E.array.length} states`);const p=E.array;if(!C.length&&ue<=0){const n=p[0].rerollConfigs.length;if(n*((n+1)/2)*10+d>_){console.log("get me outta here!");break}}E.clear(),Math.random()<.7?p.sort((n,w)=>w.achieved["Cake Tin"].substitutesPurchased-n.achieved["Cake Tin"].substitutesPurchased||w.achieved.Mince.substitutesPurchased-n.achieved.Mince.substitutesPurchased||n.fodderPurchases[1]-w.fodderPurchases[1]||n.numFloor-w.numFloor||w.achieved["Discount Desk"].goalsPurchased-n.achieved["Discount Desk"].goalsPurchased||w.achieved["Copying Desk"].goalsPurchased-n.achieved["Copying Desk"].goalsPurchased):p.sort((n,w)=>w.achieved.Mince.substitutesPurchased-n.achieved.Mince.substitutesPurchased||w.achieved["Cake Tin"].substitutesPurchased-n.achieved["Cake Tin"].substitutesPurchased||n.fodderPurchases[1]-w.fodderPurchases[1]||n.numFloor-w.numFloor||w.achieved["Discount Desk"].goalsPurchased-n.achieved["Discount Desk"].goalsPurchased||w.achieved["Copying Desk"].goalsPurchased-n.achieved["Copying Desk"].goalsPurchased);const b=ae(p[0].rerollConfigs.length);console.log({minSpentMoneyByExtraBlueprints:b});for(const n of p){if(Date.now()>R){E.array.sort((M,K)=>K.achieved["Cake Tin"].substitutesPurchased-M.achieved["Cake Tin"].substitutesPurchased||es(i[0],M.achieved)-es(i[0],K.achieved)||M.fodderUsed-K.fodderUsed||M.numFloor-K.numFloor||K.applianceCosts-M.applianceCosts);continue e}if(n.numFloor+n.fodderAvailable===0||n.money<n.rerollConfigs.length*10)continue;let w=0;if(b[0]>n.money)continue;for(let M=1;M<b.length;M++)if(w++,b[M]>n.money){w=M-1;break}let x=n.rerollConfigs.length?n.numFloor+Math.min(n.fodderAvailable,w-n.fodderUsed):D;n.fodderPurchases[1]&&(x=n.numFloor);const G=j<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?Math.max(1,n.numFloor):D;let q;n.rerollConfigs.length===0?q=ze:j<n.rerollConfigs.length?q=[n.rerollConfigs.at(-1)]:q=W,re.getAppliances([...n.rerollConfigs,{spawnInside:!0,blueprintCount:x}],n.day);for(const M of q){const K=O=>{E.add(O)&&u.add(O)},Y=O=>{if(!E.add(O)||!u.add(O))return;O.fodderPurchases[0]+O.fodderPurchases[1]||Ge(m,O,Ie)},fe=[G];x!==G&&fe.push(x);for(let O=x-1;O>G;O--)fe.push(O);for(const O of fe){const J=[...n.rerollConfigs,{...M,blueprintCount:O}],Re=J.length===1?ce:re.getAppliances(J,n.day),Ve=[...Re].sort((Ee,ne)=>Ee.PurchaseCost-ne.PurchaseCost),ke=O-n.numFloor;if(ke>n.fodderAvailable)debugger;const te={...n,fodderPurchases:[n.fodderPurchases[1],0],money:n.money-n.rerollConfigs.length*10,rerollConfigs:J,numFloor:J.length===1?O-ve.length:O,fodderAvailable:n.fodderAvailable-ke,fodderUsed:n.fodderUsed+ke,cumulativeRerolls:n.rerollConfigs.length?n.cumulativeRerolls+1:0,actionHistory:n.rerollConfigs.length?[...n.actionHistory,`${ke?`take ${ke} out, `:""}reroll ${M.spawnInside?"I":M.playerInside?"OI":"OO"}`]:[`day ${n.day} spawn`,`spawn ${M.spawnInside?"I":M.playerInside?"OI":"OO"}`,...Te]};te.rerollConfigs.length===1&&te.rerollConfigs[0].spawnInside===!0?Y(te):K(te);let Ne=Y;if((!M.spawnInside||O>G&&!he[Re.at(-1).Name]&&o[Re.at(-1).Name].every(Ee=>!he[Ee]))&&(Ne=K),js(te,Ve,Ne,P),Date.now()>R)break}}}}if(re.addCard(A),ue<=0){if(!C.length){U.array.sort((p,b)=>b.fps-p.fps),t((ue<=0?`full build on ${s} by day ${H}: 
`:"")+U.array.map(p=>Oe(p,_)).join(`
`));break}{const p=(((us=C[0]["Blueprint Cabinet"])==null?void 0:us.number)??0)-(((cs=f["Blueprint Cabinet"])==null?void 0:cs.number)??0);if(p+v.length>2)debugger;for(let b=0;b<p;b++)v.push(15)}for(const p of Object.values(f))p.number&&re.OwnedAppliances.push(be(p.goal));f=C.shift(),i.shift(),B=[];for(const{goal:p,number:b}of Object.values(i[0]))B.push(Ue(b,p));ue=1/0,Ce=[],ts(!0);debugger;Ie.array=U.array,U.clear(),U.objectiveFunctions}}return H;function _s(m=!1,u=Ie){(Math.random()<.001||m)&&u.array.sort((P,z)=>z.fps-P.fps),t(`tier ${l.length-C.length-(m?1:0)} build on ${s} by day ${H}${m?"":" (Partial)"}: 
`+u.array.slice(0,100).map(P=>Oe(P,_)).join(`
`))}function ts(m=!1){(Math.random()<.001||m)&&U.array.sort((u,P)=>P.fps-u.fps),t(`tier ${l.length-C.length-(m?1:0)} build on ${s} by day ${H}${m?"":" (Partial)"}: 
`+U.array.slice(0,100).map(u=>Oe(u,_)).join(`
`))}}function zs(s,e){const a=e.achieved;let l=0;!e.achieved["Discount Desk"].goalsPurchased&&!e.achieved["Discount Desk"].substitutesPurchased&&l++;const r=e.upgradesInProgress.filter(F=>F.appliance==="Cake Tin").length;!r||!e.achieved["Copying Desk"].goalsPurchased?l+=33:e.fps<33&&(l+=Math.ceil((33-e.fps)/r));for(const F of Object.values(s)){const g=F.number-a[F.goal].goalsPurchased-a[F.goal].substitutesPurchased;l+=Math.max(0,g)}return l}function es(s,e){let a=0;for(const l of Object.values(s)){const F=l.number-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased;a+=Math.max(0,F)}return a}function Oe(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${$e(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")+JSON.stringify(s.upgradesInProgress)}const We={};function je(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:F,groupSizes:c}=s,g=[e,a,l,r,F,[...c].sort((o,k)=>o-k)].join("|");if(We[g])return We[g];let t=[0,0,0],h=[0,0,0,0],f=1-.75**F;if(e>0){t[0]=1;let o=1-.75**e;l===.5&&(o*=1.25,f*=1.25),h[0]=c.reduce((k,d)=>k+1+(d-1)*o,0)}const v=c.reduce((o,k)=>o+k);a&&(t[1]=1,h[1]=v),r>0&&(h[2]=v,a?(t[2]=1-.75**r,l===.5&&(t[2]*=1.25)):t[2]=1);let C=1;e>0&&(t[0]*=1+l,C*=1-l,h[0]*=t[0]),a&&(t[1]*=1+C*l,C*=1-l,h[1]*=t[1],h[3]=h[1]*f),r>0&&(t[2]*=1+C*l,C*=1-l,h[2]*=t[2]);const i=[t.map(o=>o*c.length),h];return We[g]=i,i}function Gs(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:F,groupSizes:c}=s;let g=[0,0,0],t=[0,0,0,0],h=1-.75**e,f=1-.75**r,v=1-.75**F;l===.5&&(h*=1.25,f*=1.25,v*=1.25);const C=d=>{g[0]++,t[0]++;for(let y=0;y<d-1;y++)Math.random()<h&&t[0]++},i=d=>{g[1]++,t[1]+=d;for(let y=0;y<d;y++)Math.random()<v&&t[3]++},o=d=>{g[2]++,t[2]+=d};for(const d of c){let y=!1;e>0&&(C(d),!y&&Math.random()<l&&(y=!0,C(d))),i(d),!y&&Math.random()<l&&(y=!0,i(d)),r>0&&Math.random()<f&&(o(d),!y&&Math.random()<l&&(y=!0,o(d)))}return[g,t]}const qs={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},ss={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>ss[s]=!0);class Vs{constructor(e,a=[],l=[]){N(this,"seed");N(this,"mapSize");N(this,"frontDoor");N(this,"startingCards");N(this,"cards");N(this,"playerCount");N(this,"turbo");N(this,"_actionInfoCacheByCards",{});N(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=qs[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,F=!1,c=0,g=[],t=[],h=0,f=[],v=0,C=[];for(const B of a)switch(B.Name==="All You Can Eat"&&(r=!0),B.Name==="Double Helpings"&&(F=!0),B.DishType){case I.Dessert:h++,B.DishValue&&f.push(B.DishValue);break;case I.Starter:B.DishValue&&g.push(B.DishValue),c++;break;case I.Side:B.DishValue&&C.push(B.DishValue),v++;break;case I.Main:case I.Base:B.Name==="Tacos"?(t.push(2),t.push(3)):B.DishValue&&t.push(B.DishValue)}let i=F?.5:r?.25:0,o=[0,0,0,0];if(o[0]=me(g),o[1]=me(t),o[2]=me(f),o[3]=me(C),F)for(let B=0;B<3;B++)o[B]&&(o[B]+=3);const[k,d]=je({starters:c,main:!!o[1],doubleOrderChance:i,desserts:h,sides:v,groupSizes:l});let y=0;for(let B=0;B<d.length;B++)y+=d[B]*o[B];const L=as(this.playerCount),se=this.getBookingDeskCount(e),X=this.getBookingDeskMoney(e);return Math.ceil(L*(y+se*X))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,F=!1,c=0,g=[],t=[],h=0,f=[],v=0,C=[];for(const d of a)switch(d.Name==="All You Can Eat"&&(r=!0),d.Name==="Double Helpings"&&(F=!0),d.DishType){case I.Dessert:h++,d.DishValue&&f.push(d.DishValue);break;case I.Starter:d.DishValue&&g.push(d.DishValue),c++;break;case I.Side:d.DishValue&&C.push(d.DishValue),v++;break;case I.Main:case I.Base:if(!d.isMain){h++,d.DishValue&&f.push(d.DishValue);break}d.Name==="Tacos"?(t.push(2),t.push(3)):d.DishValue&&t.push(d.DishValue)}let i=F?.5:r?.25:0,o=[0,0,0,0];if(o[0]=me(g),o[1]=me(t),o[2]=me(f),o[3]=me(C),F)for(let d=0;d<3;d++)o[d]&&(o[d]+=3);return je({starters:c,main:!!o[1],doubleOrderChance:i,desserts:h,sides:v,groupSizes:l})}actionInfo(e){if(e===0)return 0;const a=this.getCardsByDay(e),l=e.toString()+":"+a.map(D=>D.Name).sort().join(","),r=this._actionInfoCacheByCards[l];if(r)return r;let F=0;const c={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let g=0;for(let D=0;D<a.length;D++)if(a[D].DishType!==I.Null){const W=a[D].Name;g=c[W]??20;break}let t=-1,h=[1,1,1],f=[[],[g],[],[]],v=0;const C=this.getGroupSizes(e);let i=!1,o=!1,k=0,d=[],y=[],L=0,se=[],X=0,B=[],$=!1,oe=!1;for(const D of a){switch(D.Name==="All You Can Eat"&&(i=!0),D.Name==="Double Helpings"&&(o=!0),D.Name){case"Picky Eaters":$=!0;break;case"Leisurely Eating":oe=!0,v+=2;break;case"Instant Service":for(let W=0;W<3;W++)h[W]--;break;case"Ice Cream":f[2].push(5.125);break;case"Cheese Board":f[2].push(10);break;case"Cherry Pies":f[2].push(11);break;case"Apple Pies":f[2].push(15);break;case"Pumpkin Pies":f[2].push(16);break;case"Carrot Soup":case"Meat Soup":f[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":h[0]=4,f[0].push(8);break;case"Broccoli Cheese Soup":f[0].push(5),h[0]=4;break;case"Pumpkin Seed":f[0].push(3*8);break;case"Bread":f[0].push(5*3);break;case"Mandarin Starter":f[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":f[3].push(2);break;case"Onion Rings":f[3].push(8);break;case"Corn on the Cob":f[3].push(6);break;case"Chips":f[3].push(7);break;case"Roast Potato":f[3].push(4);break}switch(D.DishType){case I.Dessert:L++,D.DishValue&&se.push(D.DishValue);break;case I.Starter:D.DishValue&&d.push(D.DishValue),k++;break;case I.Side:D.DishValue&&B.push(D.DishValue),X++;break;case I.Main:case I.Base:D.Name==="Tacos"?(y.push(2),y.push(3)):D.DishValue&&y.push(D.DishValue);break;case I.Extra:D.Name==="Seaweed"?(f[1][0]+=1.75,t+=2):D.Name==="Dumpling - Soy Sauce"?f[1][0]+=.4:D.Name==="Breakfast Beans"?f[1][0]+=1+3/4:D.Name==="Breakfast Eggs"?f[1][0]+=6:D.Name==="Breakfast Extras"&&(t++,f[1][0]+=1.5*2),t++;break}}e>6&&(f[3]=[]),$&&(oe&&!i||(f[1][0]+=2,t++));let he=o?.5:i?.25:0;F+=C.length*v;const[Me,U]=je({starters:k,main:!0,doubleOrderChance:he,desserts:L,sides:X,groupSizes:C});Me.forEach((D,W)=>F+=D*h[W]);for(const D of f)for(let W=0;W<D.length;W++)t>0&&(D[W]+=t),t+=1;return U.forEach((D,W)=>{var ze;if((ze=f[W])!=null&&ze.length){if(!W){const _e=Math.ceil(D/f[W].length/3);F+=_e*f[W].reduce((Ce,Ge)=>Ce+Ge,0);return}F+=D*me(f[W])}}),this._actionInfoCacheByCards[l]=F,F}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,F=!1,c=[[],[],[],[]];for(const k of a)switch(k.Name==="All You Can Eat"&&(r=!0),k.Name==="Double Helpings"&&(F=!0),k.DishType){case I.Main:case I.Base:k.Name==="Tacos"?c[1].push(2.5):k.DishValue&&c[1].push(k.DishValue);break;case I.Dessert:k.DishValue&&c[2].push(k.DishValue);break;case I.Starter:k.DishValue&&c[0].push(k.DishValue);break;case I.Side:k.DishValue&&c[3].push(k.DishValue);break}let g=F?.5:r?.25:0,t=0;F&&(t+=3);const[h,f]=Gs({starters:c[0].length,main:!!c[1].length,doubleOrderChance:g,desserts:c[2].length,sides:c[3].length,groupSizes:l});let v=0;for(let k=0;k<f.length;k++){let d=f[k];for(;d--;){k<3&&(v+=t);let y=c[k][Math.floor(Math.random()*c[k].length)];y%1&&(Math.random()<y%1?y=Math.ceil(y):y=Math.floor(y)),v+=y}}const C=as(this.playerCount),i=this.getBookingDeskCount(e),o=this.getBookingDeskMoney(e);return Math.ceil(C*(v+i*o))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(h=>h.Name==="Herd Mentality"))return Math.min(l,3)+1;const r=[],F=this.getCardsByDay(e);let c=1;(this.turbo||F.some(h=>h.Name==="Morning Rush"))&&r.push(.2),(this.turbo||F.some(h=>h.Name==="Lunch Rush"))&&r.push(.5),(this.turbo||F.some(h=>h.Name==="Dinner Rush"))&&r.push(.8);const g=a/(this.playerCount||2)/this.getDayLength(e),t=.1/l;c+=l-1;for(let h=1;h<l;h++){const f=h/l,v=f-t-g,C=f+t+g;for(let i=r.length-1;i>=0;i--){const o=r[i];v<=o&&o<=C&&r.splice(i,1)}}return c+=r.length,c}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(c=>c.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),F=a*(1+l)/r;return Math.ceil(F)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e,a=0){const l=this.seed?Qe(1997821,e,this.seed).random:new Le(Math.floor(Math.random()*4294967295)),r=this.getNonRushGroupCount(e),F=this.getCardsByDay(e).some(i=>i.Name==="Herd Mentality");let c=r,g=[],[t,h]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?h=t:this.seed==="_max"&&(t=h);{let i=c-1;for(;i--;)l.value}for(;c--;)g.push(l.range(t,h+1)),!F&&c!==r-1&&l.value;let f=this.turbo?3:this.getCardsByDay(e).filter(i=>ss[i.Name]).length,v;switch(a){case 0:v=Math.ceil(Math.max(1,r*.15));break;case 1:v=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));break;case 2:v=Math.ceil(Math.max(1,r*.15*1.5))}let C=f*v;for(;C--;)g.push(l.range(t,h+1));if(!this.seed||this.seed[0]==="_"){let i=t;for(let o=0;o<g.length;o++)g[o]=i,i++,i>h&&(i=t)}return g}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const F=Math.floor((e-1)/3);a+=F,l+=F;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),F=this.getCourseModifier(e),c=this.getDayRate(e),g=this.getCustomersPerHour(e),t=this.getAdvertisingModifier(e);return .85**a*(l/25*c*r)/F*g*t}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===I.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(a+=.25),l.some(r=>r.DishType===I.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new Pe(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new Pe(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new Le(new Pe(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function as(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Ls(s,e,a,l){let r=[],F=[],c=[];const g=s.cards.slice(e);let t=new Vs(s.seed,a,g);t.playerCount=l;for(let h=1;h<=15;h++)c.push(t.getCustomerCount(h)),r.push(t.guessMoney(h)),F.push(t.getBookingDeskCount(h));return r[0]+=t.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:F,expectedCustomersByDay:c}}var ls=self;function $s(s){ls.postMessage(s)}const Us=[],Ws=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Dining Table",number:3,substitutes:[],skipMissing:!0},{goal:"Cake Tin",number:20,substitutes:[],skipMissing:!0},{goal:"Mince",number:8,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:0,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:pe.filter(s=>!s.ThemeRequired&&!Us.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];ls.onmessage=s=>{let{config:e,tiers:a,playerCount:l,maxDay:r=15}=s.data;for(const i of a)for(const o of i){const k=pe.filter(d=>d.Name===o.goal)[0];k.ThemeRequired&&(o.substitutes=pe.filter(d=>d.ThemeRequired===k.ThemeRequired).map(d=>d.Name))}for(;!a.at(-1).length;)a.pop();const F=[...Ws],c=a.flatMap(i=>i.flatMap(o=>[o.goal,...o.substitutes])),g=F.length-1;F[g].substitutes=F[g].substitutes.filter(i=>!c.some(o=>i===o)),a[a.length-1].push(...F);const t=e.cards.filter(i=>Xe.some(o=>o.Name===i.Name)).length+1,h=e.cards.slice(0,t);let{expectedMoneyByDay:f,expectedBookingDesksByDay:v,expectedCustomersByDay:C}=Ls(e,t,h,l);Hs(e.seed,h,e.cards.slice(t).map(i=>i.Name),a,e.solo,f,v,C,$s,r)}})();
