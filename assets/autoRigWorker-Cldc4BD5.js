var Os=Object.defineProperty;var zs=(le,ie,me)=>ie in le?Os(le,ie,{enumerable:!0,configurable:!0,writable:!0,value:me}):le[ie]=me;var M=(le,ie,me)=>zs(le,typeof ie!="symbol"?ie+"":ie,me);(function(){"use strict";class le{constructor(e,a){M(this,"array");M(this,"objectiveFunctions");this.array=ie(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=me(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function ie(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let t=l.length;for(;t--;){let{better:F,worse:h}=me(r,l[t],e);if(h)continue e;F&&l.splice(t,1)}l.push(r)}return l}function me(s,e,a){let l=!0,r=!0,t=0;for(;(l||r)&&t<a.length;){const F=a[t](s,e);F<0?r=!1:F>0&&(l=!1),t++}return{better:l,worse:r}}var rs=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
269523389,True,False,Meat,True,False,,,288,0,0,False,False,60\r
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
-1552572658,False,False,Candles,False,False,,,8192,0,0,False,False,0\r
-119593913,False,False,Pumpkin Stack,False,False,,,8192,0,0,False,False,0\r
-379172217,False,False,Witch Shelf,False,False,,,8192,0,0,False,False,0\r
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
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60\r
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60\r
`;const Fs=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],ts=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],he=rs.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(ts[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(t=>Number(t));break;default:r=e[l]}a[Fs[l]]=r}return a});class ns{constructor(e){M(this,"Staple");M(this,"Tags");M(this,"StapleWhenMissing");M(this,"Appliance");M(this,"IsRemoved");M(this,"Filter");M(this,"DecorationRequired");M(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var oe=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(oe||{}),Te=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(Te||{});const Le={DefaultShoppingTag:892};var We=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(We||{}),we=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(we||{}),is="38";const os=Number(is);function us(s,e){return Math.floor(Math.random()*(e-s))+s}function cs(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?us(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const hs="12345678",fs="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of fs);for(const s of hs);function ue(s){return s.length?s.reduce((e,a)=>e+a,0)/s.length:0}class be{constructor(e,a){M(this,"fixedSeed");M(this,"instance");M(this,"random");typeof e=="string"&&(e=ds(e)),this.fixedSeed=e,this.instance=a,this.random=new Ee(e+Math.imul(124192293,a))}useSubcontext(e){return new be(this.fixedSeed,124192293*e+this.instance)}}class Ee{constructor(e){M(this,"seed");const a=h=>Math.imul(1812433253,h)+1>>0,l=e>>0,r=a(l),t=a(r),F=a(t);this.seed=[l,r,t,F]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function ds(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function $e(s,e,a){return new be(a,s*1231231+e)}var Pe=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(Pe||{}),v=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(v||{});const gs=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater"],Ue={};for(const s of gs)Ue[s]=!0;const ps=he.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class ms{constructor(e,a=0){M(this,"seed");M(this,"mapSize");M(this,"numTiles");M(this,"baseUpgradeChance");M(this,"OwnedAppliances");M(this,"Cards");M(this,"Theme");M(this,"cache",new Map);M(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=we.Null,this.cacheDay=-1}getLayoutInfo(){const a=new be(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===Pe.PrimaryTheme&&(this.Theme=we[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>he.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const t=e[r];let F=t.blueprintCount;a%5===0&&(F+=3,r===0&&(F+=2)),l+=F*(ps-1+1),t.spawnInside||(l+=Ts(t.playerInside,this.numTiles)),l+=os}return l}buildShopOptions(e,a,l){const r=l.some(h=>h.Name==="Couples");let t=[];for(const h of he)if(!(!h.IsPurchasable&&!h.IsPurchasableAsUpgrade)){var F=new ns(h);const g=F.Appliance.Name;(F.Staple==oe.NonStaple||F.Staple==oe.WhenMissing)&&((F.Tags&Te.Basic)>Te.None?F.Staple=oe.FixedStaple:F.StapleWhenMissing?(g!="Research Desk"&&g!="Blueprint Cabinet"&&g!="Plates"&&console.log(`Unexpected ${g} StapleWhenMissing Appliance`),e.some(u=>u.ID===F.Appliance.ID)?F.Staple=oe.NonStaple:F.Staple=oe.WhenMissing):r&&g==="Flower Pot"&&(F.Staple=oe.BonusStaple));const n=F.Appliance;if(n.SellOnlyAsDuplicate)e.some(u=>u.ID===n.ID)||(F.IsRemoved=!0);else if(n.RequiresForShop.length>0){let u=!1;for(const d of n.RequiresForShop)e.some(S=>S.ID===d)&&(u=!0);F.IsRemoved=!u}else n.SellOnlyAsUnique&&(n.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${n.Name}, ${n.ID}`),e.some(u=>u.ID===n.ID)&&(F.IsRemoved=!0));Ue[g]&&l.every(u=>!u.isMain||u.Name==="Tacos")&&(F.IsRemoved=!0),F.Filter==We.RefreshableProvider&&(e.some(u=>u.AllowRefreshes)||(F.IsRemoved=!0)),F.DecorationRequired!=we.Null&&F.DecorationRequired!=a&&(F.IsRemoved=!0),n.RequiresProcessForShop.length>0&&(n.RequiresProcessForShop.some(u=>l.some(d=>d.RequiredProcesses.includes(u)))||(F.IsRemoved=!0)),t.push(F)}return t}initRandom(e){return $e(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,r=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let t=e[e.length-1].blueprintCount,F;if(a%5==0){l?t=10:t+=3,F=[];for(let n=0;n<t;n++)F[n]=Te.Decoration;if(l)for(const n of[1,2])F[F.length-n]=Te.SpecialEvent}else if(e.length>1){F=[];for(let n=0;n<t;n++)F[n]=Le.DefaultShoppingTag}else{const n=Le.DefaultShoppingTag,u=Math.max(1,t),d=Math.max(0,Math.min(r.filter(c=>c.Staple!==oe.NonStaple&&!c.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),u)),S=Math.max(0,u-d);t=u,F=[];for(let c=0;c<d;c++)F[c]=Te.Basic;for(let c=d;c<d+S;c++)F[c]=n}const h=this.initRandom(a).random;let o=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(o)&&this.cache.get(o).length>=t)return this.cache.get(o).slice(0,t);const g=o;for(;o--;)h.value;{const n=[...r],u=[],d=this.getUpgradeChance(a),S=[];for(let c=0;c<t;c++){const C=F[c],R=h.valueFloat<d;cs(n,h);for(let W=0;W<n.length;W++){const G=n[W];if(G.IsRemoved||S.includes(G.Appliance)||!G.MatchesRequestTags(C)||!R&&G.Staple==oe.NonStaple&&G.SellAsUpgrade)continue;C!=Te.Decoration&&S.push(G.Appliance),u[c]=G.Appliance;break}u[c]==null}return this.cache.set(g,u),u}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function Ts(s,e){return s?e-2:e-1}var bs=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
-2075899,Breakfast,1,,,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1199743580,Breakfast Beans,1,-2075899,,,1807525572:-957949759,False,False,2,1,0\r
1436814208,Breakfast Eggs,1,-2075899,,,961148621,False,False,2,1,0\r
-1998930853,Breakfast Extras,1,-2075899,,,-712909563:-1097889139,False,False,2,1,0\r
-1778969928,Burgers,1,,,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
965292477,Cheeseburgers,1,-1778969928,,,759552160:380220741:385684499:-117339838,False,False,2,1,0\r
-1091625127,Fresh Patties,1,-1778969928,,,759552160:380220741:961148621:-484165118,False,False,2,1,0\r
1298035216,Burger Toppings,1,-1778969928,,,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0\r
1626323920,Hot Dogs,1,,,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0\r
1743900205,Fish,1,,,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238,380220741:925796718:961148621,True,False,1,1,8\r
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0\r
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0\r
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779,380220741,True,False,1,1,5\r
274986412,Oysters,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-643878280,Spiny Fish,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-266993023:-905438738,False,False,5,1,3\r
-133939790,Pies,1,,,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8\r
-1992316049,Mushroom Pie,1,-133939790,,,-1097889139:925796718:-266993023,False,False,1,1,0\r
-1802123036,Vegetable Pies,1,-133939790,,,925796718:-266993023:-452101383:-1573812073,False,False,1,1,0\r
1570910782,Apple Salad,1,1356267749,,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,8\r
1356267749,Salad,1,,,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,8\r
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0\r
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,5\r
-959076098,Steak,1,,,1972879238,-484165118:380220741,True,False,0,0,5\r
-953651922,Steak Sauce - Mushroom,1,-959076098,,,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0\r
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0\r
-1192928429,Steak Topping - Mushroom,1,-959076098,,,-1097889139,False,False,2,1,0\r
-851525606,Steak Topping - Tomato,1,-959076098,,,-712909563,False,False,2,1,0\r
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,5\r
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,5\r
-1653221873,Stir Fry,1,,,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
-204178430,Steak Stir Fry,1,-1653221873,,,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1,1,0\r
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1\r
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,2\r
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1\r
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,3\r
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,3\r
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,3\r
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,3\r
550743424,Pizza,1,,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
1434421325,Mushroom Pizza,1,550743424,,,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0\r
-2071275506,Onion Pizza,1,550743424,,,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0\r
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
12170609,Cherry Pie,1,,,1972879238,148543530:925796718:-266993023,False,False,5,1,3\r
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1\r
1551533879,Turkey,1,,,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-361249036,Christmas Rush,6,,,,,False,False,6,0,0\r
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,3\r
1398180456,Turkey - Cranberry Sauce,1,1551533879,,,735786885:-2133205155,False,False,2,1,0\r
-1460640973,Turkey - Gravy,1,1551533879,,,-2042103798:-957949759:-266993023,False,False,2,1,0\r
-1243742384,Turkey - Stuffing,1,1551533879,,,-2042103798:925796718:-266993023,False,False,2,2,0\r
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0\r
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,2\r
-437161441,Bamboo Stir Fry,1,-1653221873,,,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1,1,0\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
137627410,Seaweed,1,367917843,,,595306349,False,False,2,1,0\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2\r
1642878331,Mushroom Stir Fry,1,-1653221873,,,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1,1,0\r
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
1316998108,Sponge Cake,1,1113735761,,,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
1609120418,Brownies,1,1113735761,,,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,0\r
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,3\r
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,3\r
627241196,Cupcake,1,1113735761,,,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
-1166412657,Doughnut,1,1113735761,,,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,0\r
1113735761,Cakes,0,,,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,5\r
803049136,Lasagne,1,-1501485763:1651927267,,-1706154991:1972879238:-523839730,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,8\r
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,5\r
675343178,Tacos - Cheese,1,506626805,,,-117339838,False,False,2,1,0\r
-2122069505,Tacos - Lettuce,1,506626805,,,1193867305,False,False,2,1,0\r
706991842,Tacos - Onion,1,506626805,,,-2042103798,False,False,2,1,0\r
-1656665053,Tacos - Tomato,1,506626805,,,-712909563,False,False,2,1,0\r
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
`,Cs=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
550743424,Pizza,1,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,0,-2,1\r
-1778969928,Burgers,1,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-133939790,Pies,1,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8\r
1113735761,Cakes,0,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
1743900205,Fish,1,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,2087693779:1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`;const De=bs.trim().split(`\r
`).filter(s=>s).map(s=>{var _,Ce;const[e,a,l,r,t,F,h,o,g,n,u,d]=s.split(","),S=Number(e),c=Number(l),C=r!=null&&r.length?r.split(":").map(Fe=>Number(Fe)):[],m=t.length?t.split(":").map(Fe=>Number(Fe)):[],R=F!=null&&F.length?(_=F==null?void 0:F.split(":"))==null?void 0:_.map(Fe=>Number(Fe)):[],W=h!=null&&h.length?(Ce=h==null?void 0:h.split(":"))==null?void 0:Ce.map(Fe=>Number(Fe)):[],G=o==="True",j=g==="True",D=Number(n),re=Number(u),K=Number(d);return{ID:S,Name:a,UnlockGroup:c,Requires:C,BlockedBy:m,RequiredProcesses:R,IngredientProviders:W,isMain:G,isStarterOrSide:j,DishType:D,CustomerMultiplier:re,DishValue:K}}),je=[...[{ID:447437163,Name:"Country",UnlockGroup:Pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:Pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:Pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},De.filter(s=>s.Name==="Community")[0],De.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:Pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},De.filter(s=>s.Name==="Christmas Rush")[0]]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>De.filter(e=>e.Name===s)[0]);const Ss=Cs.trim().split(`\r
`).filter(s=>s).map(s=>{var j,D;const[e,a,l,r,t,F,h,o,g,n]=s.split(","),u=Number(e),d=Number(l),S=r!=null&&r.length?(j=r==null?void 0:r.split(":"))==null?void 0:j.map(re=>Number(re)):[],c=t!=null&&t.length?(D=t==null?void 0:t.split(":"))==null?void 0:D.map(re=>Number(re)):[],C=F==="True",m=h==="True",R=Number(o),W=Number(g),G=Number(n);return{ID:u,Name:a,UnlockGroup:d,Requires:[],BlockedBy:[],RequiredProcesses:S,IngredientProviders:c,isMain:C,isStarterOrSide:m,DishType:R,CustomerMultiplier:W,DishValue:G}}).sort((s,e)=>s.Name<e.Name?-1:1),He={};for(const s of De)He[s.Name]=s;for(const s of Ss)He[s.Name]=s;for(const s of je)He[s.Name]=s;const ks=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],ys=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],Ie={};function fe(s){if(Ie[s]===void 0&&(Ie[s]=he.filter(e=>e.Name===s)[0]),Ie[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return Ie[s]}const Ps=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function Be(s){let e=0;return(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime),e+=s.actionHistory.length,e}function Oe(s,e){return(a,l)=>{const r=a.achieved[e],t=l.achieved[e],F=Math.min(r.goalsPurchased,s);let o=Math.min(t.goalsPurchased,s)-F;return o===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&t.goalsPurchased+t.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(t.goalsPurchased+t.substitutesPurchased):t.substitutesPurchased-r.substitutesPurchased:o}}const Ds={"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,"Smart Grabber":3,Freezer:1,Bin:0,Conveyor:0};function Ms(s,e,a,l,r=!0,t=ys,F=ks,h=()=>{}){var Ze,Xe,es,ss;let o={},g=[];const n=[],u=new Array(l.length).fill(0).map(()=>({})),d={};let S=0,c=0;const C={},m=e.some(b=>b.Name==="Turbo"),R=[];let W=[],G=0;const j={};for(const b of l){for(const p of b){const{goal:I,number:O,substitutes:q,skipMissing:w=!1}=p;for(const B of q)d[B]||(d[B]=[]),d[B].push(I),B==="Flower Pot"&&console.log({substitutesToGoalMap:d});j[I]?w||(j[I].number+=O):(j[I]={...p},w&&(j[I].number=0));for(let B=0;B<=G;B++){if(u[B]===void 0)debugger;u[B][I]?u[B][I].number+=O:u[B][I]={...p}}for(let B=G+1;B<u.length;B++){if(u[B]===void 0)debugger;u[B][I]||(u[B][I]={...p,number:0})}w||(c+=fe(I).PurchaseCost*O*(m?.5:1))}try{n.push(JSON.parse(JSON.stringify(j)))}catch{console.log(u),console.log(u[0]);debugger}G++}const D=u[0],re=Object.values(D).sort((b,p)=>fe(b.goal).PurchaseCost-fe(p.goal).PurchaseCost).map(b=>b.goal);o=n.shift();for(const b of Object.values(D)){const{goal:p,number:I}=b;C[p]={...b,substitutesPurchased:0,goalsPurchased:0},b.goal!=="Starter Bin"&&(R.push(Oe(I,p)),W.push(Oe(I,p)))}const K=new le([],[...R,(b,p)=>p.money-b.money,(b,p)=>Be(b)-Be(p),(b,p)=>b.actionHistory.length-p.actionHistory.length,(b,p)=>b.cumulativeRerolls-p.cumulativeRerolls]),_=m?7:5,Ce=[{spawnInside:!0,blueprintCount:_},{spawnInside:!1,playerInside:!1,blueprintCount:_}];r||Ce.push({spawnInside:!1,playerInside:!0,blueprintCount:_});const Fe=[{spawnInside:!0,blueprintCount:_},{spawnInside:!1,playerInside:!0,blueprintCount:_},{spawnInside:!1,playerInside:!1,blueprintCount:_}];function P(b,p,I){const O={...b};for(const q of Object.values(p)){const w=q.goal;O[w]={...O[w]},w==="Copying Desk"&&(O[w].goalsPurchased+=O[w].substitutesPurchased,O[w].substitutesPurchased=0),O[w].goalsPurchased+=q.goalsPurchased,O[w].substitutesPurchased+=q.substitutesPurchased}return O}let x=[];function ve(b,p,I,O=!1){var w,B,ne,ce,E;const q=p.fodderUsed;e:for(const T of b){let z=1+(T.achieved["Copying Desk"].goalsPurchased?1:0);const f=T.upgradesInProgress.filter(k=>k.appliance==="").length;let i=f;if(i*=z,i<0||i<q)continue;let y=[...T.upgradesInProgress];(Je||T.achieved["Research Desk"].goalsPurchased)&&(y=y.map(k=>k.upgradeTurnTimer<=1?{appliance:"",cost:0,upgradeTurnTimer:0}:{...k,upgradeTurnTimer:k.upgradeTurnTimer-1}));let V=0;{let k=p.actionHistory.length,A=!1;for(;k--;)if(p.actionHistory[k]==="buy Blueprint Cabinet")V++;else if(p.actionHistory[k].includes(" for ")){A||(V=0);break}else p.actionHistory[k].includes("reroll")&&(A=!0)}for(let k=0;k<p.achieved["Blueprint Cabinet"].goalsPurchased-V;k++)y.push({appliance:"",cost:0,upgradeTurnTimer:0});let N=T.cumulativeRerolls+p.cumulativeRerolls,$=N*(N+1)/2*10+T.applianceCosts;const L=p.actionHistory.length?P(T.achieved,p.achieved):T.achieved,ee=structuredClone(L);for(const k of y)k.appliance&&(ee[k.appliance]=structuredClone(ee[k.appliance]),ee[k.appliance].goalsPurchased--);if(p.cumulativeRerolls&&$>Y)continue;let te=[],U=0,de=1;const qe=y.filter(k=>!k.appliance).length,Ne=(((w=T.achieved["Discount Desk"])==null?void 0:w.goalsPurchased)??0)+(((B=T.achieved["Discount Desk"])==null?void 0:B.substitutesPurchased)??0)?.5:1;{let k=Y-$;for(const A of re){const Q=p.achieved[A],pe=fe(Q.goal).PurchaseCost*(m?.5:1);if(k-=Q.goalsPurchased*pe*Ne,Q.substitutesPurchased){let ae=Ds[Q.goal]??1;if(Q.goal!=="Freezer"){if(Q.goal==="Dish Washer"){const Z=(ne=p.actionHistory.filter(Me=>Me.includes(" for Dish Washer"))[0].match(/buy (.*) for Dish Washer/))==null?void 0:ne[1];if(!Z)throw"nope";ae=["Dish Washer","Wash Basin","Power Sink","Soaking Sink","Sink"].indexOf(Z),ae===4&&(ae=1)}}if(ae)for(let Z=0;Z<Q.substitutesPurchased;Z++)te.push({appliance:Q.goal,cost:pe,upgradeTurnTimer:ae}),U+=ae}if(k<0)for(let ae=0;ae<Q.goalsPurchased;ae++)te.push({appliance:Q.goal,cost:pe,upgradeTurnTimer:0})}if(te.length>qe)continue e;for(const A of te)A.appliance&&(ee[A.appliance]=structuredClone(ee[A.appliance]),ee[A.appliance].goalsPurchased--)}let se;try{se=Bs(o,ee)}catch{continue}if(X<=0&&se>0)continue;$+=p.applianceCosts*Ne;let ye=0;{let k="",A=T.actionHistory.length,Q=!0;for(;A--;){const Z=T.actionHistory[A].match(/^(?:spawn|reroll) (..?)/);if(!Z){T.actionHistory[A].match(/^day ..? spawn/)&&(Q=!0);continue}if(Q){Q=!1;continue}k=Z[1][0]}let pe=0,ae=!0;for(let Z=0;Z<p.actionHistory.length;Z++){ye+=pe,pe=0;const Me=p.actionHistory[Z].match(/^(?:spawn|reroll) (..?)/);if(!Me){const ls=p.actionHistory[Z].match(/take (\d+) out/);ls&&(ye+=parseInt(ls[1])/3+1);continue}ye++;const Hs=Me[1][0],as=ae?"":Me[1][1];ae=!1,k&&(k[0]!==Hs&&(pe+=3),k[1]&&as&&k[1]!==as&&(pe+=10)),k=Me[1]}}let Ve=T.deskTime+(de-1)*20+Math.max(0,q-f)*5*((ce=T.achieved["Clipboard Stand"])!=null&&ce.goalsPurchased?.5:1)+(U*de*5+(F[p.day]??F.at(-1)??0))*((E=L["Clipboard Stand"])!=null&&E.goalsPurchased?.5:1)+ye+p.cumulativeRerolls*2;{let k=0;for(const A of te){for(;y[k].appliance;)k++;y[k]=A}for(let A=0;A<V;A++)y.push({appliance:"",cost:0,upgradeTurnTimer:0})}const ge={...p,rerollConfigs:[...T.rerollConfigs,p.rerollConfigs],achieved:L,money:Y-$,actionHistory:[...T.actionHistory,...p.actionHistory],upgradesInProgress:y,cumulativeRerolls:T.cumulativeRerolls+p.cumulativeRerolls,applianceCosts:T.applianceCosts+p.applianceCosts*Ne,deskTime:Ve};if(!(te.length>qe)){if(ge.money>=0||ge.money+ge.upgradesInProgress.reduce((k,A)=>k+A.cost,0)>=0&&n.length){if(se<X&&(X=se,console.log(`best so far missing ${se} pieces `+Ae(ge,Y))),se<=0){if(K.add(ge)){if(Qe(),K.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(X<=0)continue}if(i>S&&(S=i),O){const k=T.cumulativeRerolls;for(let A=0;A<=i;A++)x[A]===void 0&&(x[A]=new le([],Ps)),x[A].add([k,$]);continue}I.add(ge)}}return X}const Re={...C};Re["Blueprint Cabinet"]={...Re["Blueprint Cabinet"],goalsPurchased:1};const Se=new le([{achieved:Re,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:[{appliance:"",cost:0,upgradeTurnTimer:0}],day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...R,(b,p)=>b.applianceCosts-p.applianceCosts,(b,p)=>b.cumulativeRerolls-p.cumulativeRerolls]);let X=1/0,H=0,Y=0;const J=new ms(s),xe=[];let Je=!1,ke=[];{const b=["Booking Desk","Blueprint Cabinet"];he.filter(p=>b.includes(p.Name)).forEach(p=>J.OwnedAppliances.push(p))}for(const b of e)J.addCard(b);function Es(b,p,I){var ne,ce;let O=[{...b}],q=[],w=[];const B=JSON.parse(JSON.stringify(b.achieved));for(const E of p){if(!E)continue;let T=E.Name,z=B[T],f=!1,i=z&&H>3&&z.goal==="Research Desk";if(!z||z.goalsPurchased>=(((ne=u[0][T])==null?void 0:ne.number)??0)||i||(ce=d[E.Name])!=null&&ce.some(y=>B[y])&&Math.random()<.5){const y=d[E.Name],V=y&&E.Name==="Research Desk"?H>6?"Copying Desk":"Discount Desk":y==null?void 0:y[Math.floor(Math.random()*y.length)];if(z=B[V],!z)continue;f=!0,T=V}if(f&&z.goalsPurchased+z.substitutesPurchased>=u[0][T].number&&(z=B["Starter Bin"],T="Starter Bin"),!z)debugger;if(z.goalsPurchased>=(u[0][T]?u[0][T].number:9)){z=B["Starter Bin"],T="Starter Bin",f=!0;continue}T==="Table - Fancy Cloth"&&(f=!1),E.ThemeRequired&&(f=!1),f?z.substitutesPurchased++:z.goalsPurchased++;{const y=V=>{const N={...V};if(N.achieved={...N.achieved},N.numFloor--,N.achieved[T])N.achieved[T]={...N.achieved[T],goalsPurchased:N.achieved[T].goalsPurchased+(f?0:1),substitutesPurchased:N.achieved[T].substitutesPurchased+(f?1:0)};else if(N.achieved[T]={...z,goalsPurchased:f?0:1,substitutesPurchased:f?1:0},Number.isNaN(N.achieved[T].goalsPurchased))debugger;const $=T==="Starter Bin"||T==="Table - Fancy Cloth"?fe(E.Name).PurchaseCost:Math.max(fe(E.Name).PurchaseCost,fe(T).PurchaseCost);return N.applianceCosts+=$*(m?.5:1),N.actionHistory=[...N.actionHistory,`buy ${E.Name}`+(f?` for ${T}`:"")],T==="Starter Bin"&&(N.fodderPurchases=[...N.fodderPurchases],N.fodderPurchases[1]++,N.achieved[T].substitutesPurchased--),N};if(T!=="Starter Bin"){const V=O.map(y),N=q.map(y),$=w.map(y);O=V.concat(O),q=N.concat(q),w=$.concat(w),V.forEach(I)}else q=q.concat(w),w=(w.length?w:O).map(y)}}return O.concat(q).concat(w)}for(;X;){let b=Se.array;if(!b.length)return h("No Solutions"),0;Se.clear();const p=new le([],[...W,(f,i)=>f.cumulativeRerolls-i.cumulativeRerolls,(f,i)=>f.applianceCosts-i.applianceCosts]);if(Y+=t[H]??t.at(-1)??0,H++,H>14&&(m||!a.length)){debugger;break}if(H>1&&b.length===0){debugger;break}b.sort((f,i)=>Be(f)-Be(i)),console.log(`fastest so far: ${Ae(b[0],Y)}`),b.every(f=>f.achieved["Copying Desk"].goalsPurchased)&&(g=g.map(f=>f-1),g=g.filter(f=>f>0));let I=2;switch(H){default:I=4;break}let O=.5*60*1e3;const q=Math.min(I-1,1/0);if(Y>=c){const f=Math.sqrt((Y-c)/10*2);console.log(`Have ${Y} on day ${H}, need ${c} to buy everything. Allows for ~${f} rerolls across all days`)}H%5||(I=1);let w;(m||H===5||!(H%3))&&(w=a.shift());const B=De.filter(f=>f.Name===w)[0];J.handleNewCardSpawnEffects(B);const ne=J.getAppliances([{spawnInside:!0,blueprintCount:_}],H);J.handleNewCardRerollEffects(B);let ce=[];if(xe.length)for(let f=xe.length-1;f>=0;f--){let i=ne.length;for(;i--;){const y=ne[i];if(y.Name===xe[f]){if(console.log(`buying ${y.Name} on day ${H}`),Y-b.reduce((N,$)=>Math.min(N,$.applianceCosts+10/2*($.cumulativeRerolls+1)*$.cumulativeRerolls),1/0)<y.PurchaseCost*(m?.5:1)){console.log("not enough money-- skip for now");continue}ke.push(y),xe.splice(f,1),Y-=y.PurchaseCost*(m?.5:1),ne.splice(i,1);break}}ce=ke.map(y=>`Buy ${y.Name}`)}let E=new le([{day:H,rerollConfigs:[],achieved:{...C},numFloor:_,fodderAvailable:S,fodderUsed:0,money:Y,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(f,i)=>J.getPrngAdvancements(f.rerollConfigs,H)-J.getPrngAdvancements(i.rerollConfigs,H),(f,i)=>-J.getPrngAdvancements(f.rerollConfigs,H)+J.getPrngAdvancements(i.rerollConfigs,H),...W,(f,i)=>f.cumulativeRerolls-i.cumulativeRerolls,(f,i)=>f.applianceCosts-i.applianceCosts,(f,i)=>i.numFloor+i.fodderAvailable-f.numFloor+f.fodderAvailable,(f,i)=>f.numFloor-i.numFloor]);ve(b,E.array[0],Se,!0);let T=1/0;const z=x.map(f=>f.array.reduce((i,[y,V])=>Math.min(i,V+E.array[0].rerollConfigs.length*(y+1)*10),1/0));e:for(;I--&&(ke.length&&((Xe=(Ze=E.array[0])==null?void 0:Ze.rerollConfigs)==null?void 0:Xe.length)===1&&(ke.some(i=>i.Name==="Research Desk")&&(Je=!0),J.OwnedAppliances.push(...ke),ke=[],ce=[]),T=Date.now()+O,E.array[0]!==void 0);){console.log(`Seed ${s} Day ${H} Reroll ${E.array[0].rerollConfigs.length} expanding ${E.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:z});const f=E.array;if(!n.length&&X<=0){const i=f[0].rerollConfigs.length;if(i*((i+1)/2)*10+c>Y){console.log("get me outta here!");break}}E.clear();for(const i of f){if(Date.now()>T){E.array.sort((ee,te)=>-1*(ee.applianceCosts-te.applianceCosts));continue e}if(i.numFloor+i.fodderAvailable===0||i.money<i.rerollConfigs.length*10)continue;let y=0;if(z[0]>i.money)continue;for(let L=1;L<z.length;L++)if(y++,z[L]>i.money){y=L-1;break}let V=q<i.rerollConfigs.length?i.numFloor:i.rerollConfigs.length?i.numFloor+Math.min(i.fodderAvailable,y-i.fodderUsed):_;{let L=i.actionHistory.length;for(;L--&&!i.actionHistory[L].includes("reroll");)if(i.actionHistory[L].includes("Starter Bin")){V=i.numFloor;break}}const N=q<i.rerollConfigs.length?i.numFloor:i.rerollConfigs.length?Math.max(1,i.numFloor):_;let $;i.rerollConfigs.length===0?$=Fe:q<i.rerollConfigs.length?$=[i.rerollConfigs.at(-1)]:$=Ce,J.getAppliances([...i.rerollConfigs,{spawnInside:!0,blueprintCount:V}],i.day);for(const L of $){const ee=U=>{if(!E.add(U)||!p.add(U))return;U.fodderPurchases[0]+U.fodderPurchases[1]||ve(b,U,Se)},te=[N];for(let U=V;U>N;U--)te.push(U);for(const U of te){const de=[...i.rerollConfigs,{...L,blueprintCount:U}],Ne=[...de.length===1?ne:J.getAppliances(de,i.day)].sort((Ve,ge)=>Ve.PurchaseCost-ge.PurchaseCost),se=U-i.numFloor;if(se>i.fodderAvailable)debugger;const ye={...i,fodderPurchases:[i.fodderPurchases[1],0],money:i.money-i.rerollConfigs.length*10,rerollConfigs:de,numFloor:de.length===1?U-ke.length:U,fodderAvailable:i.fodderAvailable-se,fodderUsed:i.fodderUsed+se,cumulativeRerolls:i.rerollConfigs.length?i.cumulativeRerolls+1:0,actionHistory:i.rerollConfigs.length?[...i.actionHistory,`${se?`take ${se} out, `:""}reroll ${L.spawnInside?"I":L.playerInside?"OI":"OO"}`]:[`day ${i.day} spawn`,`spawn ${L.spawnInside?"I":L.playerInside?"OI":"OO"}`,...ce]};if(ee(ye),Es(ye,Ne,ee),Date.now()>T)break}}}}if(J.addCard(B),X<=0){if(!n.length){K.array.sort((f,i)=>f.deskTime-i.deskTime),h((X<=0?`full build on ${s} by day ${H}: 
`:"")+K.array.map(f=>Ae(f,Y)).join(`
`));break}{const f=(((es=n[0]["Blueprint Cabinet"])==null?void 0:es.number)??0)-(((ss=o["Blueprint Cabinet"])==null?void 0:ss.number)??0);if(f+g.length>2)debugger;for(let i=0;i<f;i++)g.push(15)}for(const f of Object.values(o))f.number&&J.OwnedAppliances.push(fe(f.goal));o=n.shift(),u.shift(),W=[];for(const{goal:f,number:i}of Object.values(u[0]))W.push(Oe(i,f));X=1/0,x=[],Qe(!0),Se.array=K.array,K.clear(),K.objectiveFunctions}}return H;function Qe(b=!1){(Math.random()<.001||b)&&K.array.sort((p,I)=>p.deskTime-I.deskTime),h(`tier ${l.length-n.length-(b?1:0)} build on ${s} by day ${H}${b?"":" (Partial)"}: 
`+K.array.slice(0,100).map(p=>Ae(p,Y)).join(`
`))}}function Bs(s,e){let a=0;for(const l of Object.values(s)){let r=l.number;const t=r-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased;if(r&&t<0)throw"no more";a+=Math.max(0,t)}return a}function Ae(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${Be(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")+JSON.stringify(s.upgradesInProgress)}const ze={};function Ge(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s,h=[e,a,l,r,[...F].sort((c,C)=>c-C)].join("|");if(ze[h])return ze[h];let o=[0,0,0],g=[0,0,0,0],n=1-.75**t;if(e>0){o[0]=1;let c=1-.75**e;l===.5&&(c*=1.25,n*=1.25),g[0]=F.reduce((C,m)=>C+1+(m-1)*c,0)}const u=F.reduce((c,C)=>c+C);a&&(o[1]=1,g[1]=u),r>0&&(g[2]=u,a?(o[2]=1-.75**r,l===.5&&(o[2]*=1.25)):o[2]=1);let d=1;e>0&&(o[0]*=1+l,d*=1-l,g[0]*=o[0]),a&&(o[1]*=1+d*l,d*=1-l,g[1]*=o[1],g[3]=g[1]*n),r>0&&(o[2]*=1+d*l,d*=1-l,g[2]*=o[2]);const S=[o.map(c=>c*F.length),g];return ze[h]=S,S}function vs(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s;let h=[0,0,0],o=[0,0,0,0],g=1-.75**e,n=1-.75**r,u=1-.75**t;l===.5&&(g*=1.25,n*=1.25,u*=1.25);const d=m=>{h[0]++,o[0]++;for(let R=0;R<m-1;R++)Math.random()<g&&o[0]++},S=m=>{h[1]++,o[1]+=m;for(let R=0;R<m;R++)Math.random()<u&&o[3]++},c=m=>{h[2]++,o[2]+=m};for(const m of F){let R=!1;e>0&&(d(m),!R&&Math.random()<l&&(R=!0,d(m))),S(m),!R&&Math.random()<l&&(R=!0,S(m)),r>0&&Math.random()<n&&(c(m),!R&&Math.random()<l&&(R=!0,c(m)))}return[h,o]}const Rs={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},_e={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>_e[s]=!0);class Ns{constructor(e,a=[],l=[]){M(this,"seed");M(this,"mapSize");M(this,"frontDoor");M(this,"startingCards");M(this,"cards");M(this,"playerCount");M(this,"turbo");M(this,"_actionInfoCacheByCards",{});M(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=Rs[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=0,h=[],o=[],g=0,n=[],u=0,d=[];for(const D of a)switch(D.Name==="All You Can Eat"&&(r=!0),D.Name==="Double Helpings"&&(t=!0),D.DishType){case v.Dessert:g++,D.DishValue&&n.push(D.DishValue);break;case v.Starter:D.DishValue&&h.push(D.DishValue),F++;break;case v.Side:D.DishValue&&d.push(D.DishValue),u++;break;case v.Main:case v.Base:D.Name==="Tacos"?(o.push(2),o.push(3)):D.DishValue&&o.push(D.DishValue)}let S=t?.5:r?.25:0,c=[0,0,0,0];if(c[0]=ue(h),c[1]=ue(o),c[2]=ue(n),c[3]=ue(d),t)for(let D=0;D<3;D++)c[D]&&(c[D]+=3);const[C,m]=Ge({starters:F,main:!!c[1],doubleOrderChance:S,desserts:g,sides:u,groupSizes:l});let R=0;for(let D=0;D<m.length;D++)R+=m[D]*c[D];const W=Ke(this.playerCount),G=this.getBookingDeskCount(e),j=this.getBookingDeskMoney(e);return W*(R+G*j)}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=0,h=[],o=[],g=0,n=[],u=0,d=[];for(const m of a)switch(m.Name==="All You Can Eat"&&(r=!0),m.Name==="Double Helpings"&&(t=!0),m.DishType){case v.Dessert:g++,m.DishValue&&n.push(m.DishValue);break;case v.Starter:m.DishValue&&h.push(m.DishValue),F++;break;case v.Side:m.DishValue&&d.push(m.DishValue),u++;break;case v.Main:case v.Base:m.Name==="Tacos"?(o.push(2),o.push(3)):m.DishValue&&o.push(m.DishValue)}let S=t?.5:r?.25:0,c=[0,0,0,0];if(c[0]=ue(h),c[1]=ue(o),c[2]=ue(n),c[3]=ue(d),t)for(let m=0;m<3;m++)c[m]&&(c[m]+=3);return Ge({starters:F,main:!!c[1],doubleOrderChance:S,desserts:g,sides:u,groupSizes:l})}actionInfo(e){if(e===0)return 0;const a=this.getCardsByDay(e),l=e.toString()+":"+a.map(P=>P.Name).sort().join(","),r=this._actionInfoCacheByCards[l];if(r)return r;let t=0;const F={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let h=0;for(let P=0;P<a.length;P++)if(a[P].DishType!==v.Null){const x=a[P].Name;h=F[x]??20;break}let o=-1,g=[1,1,1],n=[[],[h],[],[]],u=0;const d=this.getGroupSizes(e);let S=!1,c=!1,C=0,m=[],R=[],W=0,G=[],j=0,D=[],re=!1,K=!1;for(const P of a){switch(P.Name==="All You Can Eat"&&(S=!0),P.Name==="Double Helpings"&&(c=!0),P.Name){case"Picky Eaters":re=!0;break;case"Leisurely Eating":K=!0,u+=2;break;case"Instant Service":for(let x=0;x<3;x++)g[x]--;break;case"Ice Cream":n[2].push(5.125);break;case"Cheese Board":n[2].push(10);break;case"Cherry Pie":n[2].push(11);break;case"Apple Pies":n[2].push(15);break;case"Pumpkin Pies":n[2].push(16);break;case"Carrot Soup":case"Meat Soup":n[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":g[0]=4,n[0].push(8);break;case"Broccoli Cheese Soup":n[0].push(5),g[0]=4;break;case"Pumpkin Seed":n[0].push(3*8);break;case"Bread":n[0].push(5*3);break;case"Mandarin Starter":n[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":n[3].push(2);break;case"Onion Rings":n[3].push(8);break;case"Corn on the Cob":n[3].push(6);break;case"Chips":n[3].push(7);break;case"Roast Potato":n[3].push(4);break}switch(P.DishType){case v.Dessert:W++,P.DishValue&&G.push(P.DishValue);break;case v.Starter:P.DishValue&&m.push(P.DishValue),C++;break;case v.Side:P.DishValue&&D.push(P.DishValue),j++;break;case v.Main:case v.Base:P.Name==="Tacos"?(R.push(2),R.push(3)):P.DishValue&&R.push(P.DishValue);break;case v.Extra:P.Name==="Seaweed"?(n[1][0]+=1.75,o+=2):P.Name==="Dumpling - Soy Sauce"?n[1][0]+=.4:P.Name==="Breakfast Beans"?n[1][0]+=1+3/4:P.Name==="Breakfast Eggs"?n[1][0]+=6:P.Name==="Breakfast Extras"&&(o++,n[1][0]+=1.5*2),o++;break}}e>6&&(n[3]=[]),re&&(K&&!S||(n[1][0]+=2,o++));let _=c?.5:S?.25:0;t+=d.length*u;const[Ce,Fe]=Ge({starters:C,main:!0,doubleOrderChance:_,desserts:W,sides:j,groupSizes:d});Ce.forEach((P,x)=>t+=P*g[x]);for(const P of n)for(let x=0;x<P.length;x++)o>0&&(P[x]+=o),o+=1;return Fe.forEach((P,x)=>{var ve;if((ve=n[x])!=null&&ve.length){if(!x){const Re=Math.ceil(P/n[x].length/3);t+=Re*n[x].reduce((Se,X)=>Se+X,0);return}t+=P*ue(n[x])}}),this._actionInfoCacheByCards[l]=t,t}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=[[],[],[],[]];for(const C of a)switch(C.Name==="All You Can Eat"&&(r=!0),C.Name==="Double Helpings"&&(t=!0),C.DishType){case v.Dessert:C.DishValue&&F[2].push(C.DishValue);break;case v.Starter:C.DishValue&&F[0].push(C.DishValue);break;case v.Side:C.DishValue&&F[3].push(C.DishValue);break;case v.Main:case v.Base:C.Name==="Tacos"?(F[1].push(2),F[1].push(3)):C.DishValue&&F[1].push(C.DishValue)}let h=t?.5:r?.25:0,o=0;t&&(o+=3);const[g,n]=vs({starters:F[0].length,main:!!F[1].length,doubleOrderChance:h,desserts:F[2].length,sides:F[3].length,groupSizes:l});let u=0;for(let C=0;C<n.length;C++){let m=n[C];for(;m--;)C<3&&(u+=o),u+=F[C][Math.floor(Math.random()*F[C].length)]}const d=Ke(this.playerCount),S=this.getBookingDeskCount(e),c=this.getBookingDeskMoney(e);return d*(u+S*c)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(g=>g.Name==="Herd Mentality"))return Math.min(l,3)+1;const r=[],t=this.getCardsByDay(e);let F=1;(this.turbo||t.some(g=>g.Name==="Morning Rush"))&&(r.push(.2),F++),(this.turbo||t.some(g=>g.Name==="Lunch Rush"))&&(r.push(.5),F++),(this.turbo||t.some(g=>g.Name==="Dinner Rush"))&&(r.push(.8),F++);const h=a/this.getDayLength(e),o=.1/l;for(let g=1;g<l;g++){const n=g/l,u=n-o-h,d=n+o+h;let S=!1;for(const c of r)if(u<=c&&d>=c){S=!0;break}S||F++}return F}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(F=>F.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),t=a*(1+l)/r;return Math.ceil(t)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=this.seed?$e(1997821,e,this.seed).random:new Ee(Math.floor(Math.random()*4294967295)),l=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(d=>d.Name==="Herd Mentality");let t=l,F=[],[h,o]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?o=h:this.seed==="_max"&&(h=o);{let d=t-1;for(;d--;)a.value}for(;t--;)F.push(a.range(h,o+1)),!r&&t!==l-1&&a.value;let g=this.turbo?3:this.getCardsByDay(e).filter(d=>_e[d.Name]).length;const n=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let u=g*n;for(;u--;)F.push(a.range(h,o+1));if(!this.seed||this.seed[0]==="_"){let d=h;for(let S=0;S<F.length;S++)F[S]=d,d++,d>o&&(d=h)}return F}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const t=Math.floor((e-1)/3);a+=t,l+=t;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),t=this.getCourseModifier(e),F=this.getDayRate(e),h=this.getCustomersPerHour(e),o=this.getAdvertisingModifier(e);return .85**a*(l/25*F*r)/t*h*o}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===v.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(a+=.25),l.some(r=>r.DishType===v.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new be(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new be(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new Ee(new be(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function Ke(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function ws(s,e,a,l){let r=[],t=[];const F=s.cards.slice(e);let h=new Ns(s.seed,a,F);h.playerCount=l;for(let o=1;o<=15;o++)r.push(h.guessMoney(o)),t.push(h.getBookingDeskCount(o));return r[0]+=h.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:t}}var Ye=self;function Is(s){Ye.postMessage(s)}const As=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],xs=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Dining Table",number:3,substitutes:[],skipMissing:!0},{goal:"Dish Rack",number:1,substitutes:[],skipMissing:!0},{goal:"Dish Washer",number:1,substitutes:["Sink","Soaking Sink","Wash Basin","Power Sink"],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:he.filter(s=>!s.ThemeRequired&&!As.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];Ye.onmessage=s=>{let{config:e,tiers:a,playerCount:l}=s.data;for(const u of a)for(const d of u){const S=he.filter(c=>c.Name===d.goal)[0];S.ThemeRequired&&(d.substitutes=he.filter(c=>c.ThemeRequired===S.ThemeRequired).map(c=>c.Name))}for(;!a.at(-1).length;)a.pop();const r=[...xs],t=a.flatMap(u=>u.flatMap(d=>[d.goal,...d.substitutes])),F=r.length-1;r[F].substitutes=r[F].substitutes.filter(u=>!t.some(d=>u===d)),a[a.length-1].push(...r);const h=e.cards.filter(u=>je.some(d=>d.Name===u.Name)).length+1,o=e.cards.slice(0,h);let{expectedMoneyByDay:g,expectedBookingDesksByDay:n}=ws(e,h,o,l);Ms(e.seed,o,e.cards.slice(h).map(u=>u.Name),a,e.solo,g,n,Is)}})();
