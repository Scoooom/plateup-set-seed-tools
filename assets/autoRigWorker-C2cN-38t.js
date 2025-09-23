var Ls=Object.defineProperty;var $s=(ae,ie,Te)=>ie in ae?Ls(ae,ie,{enumerable:!0,configurable:!0,writable:!0,value:Te}):ae[ie]=Te;var B=(ae,ie,Te)=>$s(ae,typeof ie!="symbol"?ie+"":ie,Te);(function(){"use strict";class ae{constructor(e,a){B(this,"array");B(this,"objectiveFunctions");this.array=ie(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=Te(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function ie(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let t=l.length;for(;t--;){let{better:o,worse:g}=Te(r,l[t],e);if(g)continue e;o&&l.splice(t,1)}l.push(r)}return l}function Te(s,e,a){let l=!0,r=!0,t=0;for(;(l||r)&&t<a.length;){const o=a[t](s,e);o<0?r=!1:o>0&&(l=!1),t++}return{better:l,worse:r}}var is=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
`;const os=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],us=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],oe=is.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(us[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(t=>Number(t));break;default:r=e[l]}a[os[l]]=r}return a});class cs{constructor(e){B(this,"Staple");B(this,"Tags");B(this,"StapleWhenMissing");B(this,"Appliance");B(this,"IsRemoved");B(this,"Filter");B(this,"DecorationRequired");B(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var ue=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(ue||{}),be=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(be||{});const je={DefaultShoppingTag:892};var _e=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(_e||{}),Ae=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(Ae||{});oe.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,e)=>s.Name<e.Name?1:-1);var hs="38";const fs=Number(hs);function ds(s,e){return Math.floor(Math.random()*(e-s))+s}function gs(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?ds(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const ps="12345678",ms="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of ms);for(const s of ps);function ce(s){return s.length?s.reduce((e,a)=>e+a,0)/s.length:0}class Ce{constructor(e,a){B(this,"fixedSeed");B(this,"instance");B(this,"random");typeof e=="string"&&(e=Ts(e)),this.fixedSeed=e,this.instance=a,this.random=new ze(e+Math.imul(124192293,a))}useSubcontext(e){return new Ce(this.fixedSeed,124192293*e+this.instance)}}class ze{constructor(e){B(this,"seed");const a=g=>Math.imul(1812433253,g)+1>>0,l=e>>0,r=a(l),t=a(r),o=a(t);this.seed=[l,r,t,o]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Ts(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function Ke(s,e,a){return new Ce(a,s*1231231+e)}var Se=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(Se||{}),v=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(v||{});const bs=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater"],Ye={};for(const s of bs)Ye[s]=!0;const Cs=oe.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class Ss{constructor(e,a=0){B(this,"seed");B(this,"mapSize");B(this,"numTiles");B(this,"baseUpgradeChance");B(this,"OwnedAppliances");B(this,"Cards");B(this,"Theme");B(this,"cache",new Map);B(this,"cacheDay");B(this,"cacheOverridePlated");B(this,"cacheOverrideProcesses");B(this,"baseSpawnCount");B(this,"newestCard");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=Ae.Null,this.cacheDay=-1,this.baseSpawnCount=5}clearCache(){this.cacheDay=-1}getLayoutInfo(){const a=new Ce(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25,this.baseSpawnCount=7),e.Name==="Lake"&&(this.baseUpgradeChance=.2),e.UnlockGroup===Se.PrimaryTheme&&(this.Theme=Ae[e.Name]),this.newestCard=e)}handleNewestRerollEffects(){this.handleNewCardRerollEffects(this.newestCard)}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>oe.filter(l=>l.ID===a))))}addCard(e){var a;e!==void 0&&(((a=this.newestCard)==null?void 0:a.ID)===e.ID&&(this.newestCard=void 0),this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const t=e[r];let o=t.blueprintCount;a%5===0&&(o+=8-this.baseSpawnCount,r===0&&(o+=2)),l+=o*(Cs-1+1),t.spawnInside||(l+=ks(t.playerInside,this.numTiles)),l+=fs}return l}buildShopOptions(e,a,l,r,t){const o=l.some(h=>h.Name==="Couples");let g=[];for(const h of oe)if(!(!h.IsPurchasable&&!h.IsPurchasableAsUpgrade)){var F=new cs(h);const k=F.Appliance.Name;(F.Staple==ue.NonStaple||F.Staple==ue.WhenMissing)&&((F.Tags&be.Basic)>be.None?F.Staple=ue.FixedStaple:F.StapleWhenMissing?(k!="Research Desk"&&k!="Blueprint Cabinet"&&k!="Plates"&&console.log(`Unexpected ${k} StapleWhenMissing Appliance`),e.some(n=>n.ID===F.Appliance.ID)?F.Staple=ue.NonStaple:F.Staple=ue.WhenMissing):o&&k==="Flower Pot"&&(F.Staple=ue.BonusStaple));const p=F.Appliance;e:{if(p.SellOnlyAsDuplicate){if(!e.some(n=>n.ID===p.ID)){F.IsRemoved=!0;break e}}else if(p.RequiresForShop.length>0){let n=!1;for(const u of p.RequiresForShop)e.some(T=>T.ID===u)&&(n=!0);if(!n){F.IsRemoved=!0;break e}}else if(p.SellOnlyAsUnique&&(p.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${p.Name}, ${p.ID}`),e.some(n=>n.ID===p.ID))){F.IsRemoved=!0;break e}if(Ye[k]&&(r??l.every(n=>!n.isMain||n.Name==="Tacos"))){F.IsRemoved=!0;break e}if(F.Filter==_e.RefreshableProvider&&!e.some(n=>n.AllowRefreshes)){F.IsRemoved=!0;break e}if(F.DecorationRequired!=Ae.Null&&F.DecorationRequired!=a){F.IsRemoved=!0;break e}if(p.RequiresProcessForShop.length>0&&(t?!p.RequiresProcessForShop.some(n=>t.includes(n)):!p.RequiresProcessForShop.some(n=>l.some(u=>u.RequiredProcesses.includes(n))))){F.IsRemoved=!0;break e}}g.push(F)}return g}initRandom(e){return Ke(823828,e,this.seed)}getAppliances(e,a,l,r){var p;(a!==this.cacheDay||l!==this.cacheOverridePlated||(r==null?void 0:r.length)!==((p=this.cacheOverrideProcesses)==null?void 0:p.length)||r!=null&&r.some((n,u)=>{var T;return n!==((T=this.cacheOverrideProcesses)==null?void 0:T[u])}))&&(this.cacheDay=a,this.cacheOverridePlated=l,this.cacheOverrideProcesses=r,this.cache.clear());const t=e.length===1,o=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,l,r);let g=e[e.length-1].blueprintCount,F;if(a%5==0){t?g=10:g+=8-this.baseSpawnCount,F=[];for(let n=0;n<g;n++)F[n]=be.Decoration;if(t)for(const n of[1,2])F[F.length-n]=be.SpecialEvent}else if(e.length>1){F=[];for(let n=0;n<g;n++)F[n]=je.DefaultShoppingTag}else{const n=je.DefaultShoppingTag,u=Math.max(1,g),T=Math.max(0,Math.min(o.filter(C=>C.Staple!==ue.NonStaple&&!C.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),u)),f=Math.max(0,u-T);g=u,F=[];for(let C=0;C<T;C++)F[C]=be.Basic;for(let C=T;C<T+f;C++)F[C]=n}const h=this.initRandom(a).random;let c=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(c)&&this.cache.get(c).length>=g)return this.cache.get(c).slice(0,g);const k=c;for(;c--;)h.value;{const n=[...o],u=[],T=this.getUpgradeChance(a),f=[];for(let C=0;C<g;C++){const z=F[C],K=h.valueFloat<T;gs(n,h);for(let D=0;D<n.length;D++){const q=n[D];if(q.IsRemoved||f.includes(q.Appliance)||!q.MatchesRequestTags(z)||!K&&q.Staple==ue.NonStaple&&q.SellAsUpgrade)continue;z!=be.Decoration&&f.push(q.Appliance),u[C]=q.Appliance;break}u[C]==null}return this.cache.set(k,u),u}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function ks(s,e){return s?e-2:e-1}var ys=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2
-2075899,Breakfast,1,,,-523839730:-1706154991,380220741:925796718,True,False,0,0,5
-1199743580,Breakfast Beans,1,-2075899,,,1807525572:-957949759,False,False,2,1,0
1436814208,Breakfast Eggs,1,-2075899,,,961148621,False,False,2,1,0
-1998930853,Breakfast Extras,1,-2075899,,,-712909563:-1097889139,False,False,2,1,0
-1778969928,Burgers,1,,,1972879238,759552160:380220741:385684499,True,False,0,-2,3
965292477,Cheeseburgers,1,-1778969928,,,759552160:380220741:385684499:-117339838,False,False,2,1,0
-1091625127,Fresh Patties,1,-1778969928,,,759552160:380220741:961148621:-484165118,False,False,2,1,0
1298035216,Burger Toppings,1,-1778969928,,,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0
1626323920,Hot Dogs,1,,,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0
1743900205,Fish,1,,,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238,380220741:925796718:961148621,True,False,1,1,8
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779,380220741,True,False,1,1,5
274986412,Oysters,1,1743900205,,2087693779,380220741,True,False,1,1,5
-643878280,Spiny Fish,1,1743900205,,2087693779,380220741,True,False,1,1,5
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-266993023:-905438738,False,False,5,1,3
-133939790,Pies,1,,,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8
-1992316049,Mushroom Pie,1,-133939790,,,-1097889139:925796718:-266993023,False,False,1,1,0
-1802123036,Vegetable Pies,1,-133939790,,,925796718:-266993023:-452101383:-1573812073,False,False,1,1,0
1570910782,Apple Salad,1,1356267749,,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,8
1356267749,Salad,1,,,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,8
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,5
-959076098,Steak,1,,,1972879238,-484165118:380220741,True,False,0,0,5
-953651922,Steak Sauce - Mushroom,1,-959076098,,,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0
-1192928429,Steak Topping - Mushroom,1,-959076098,,,-1097889139,False,False,2,1,0
-851525606,Steak Topping - Tomato,1,-959076098,,,-712909563,False,False,2,1,0
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,5
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,5
-1653221873,Stir Fry,1,,,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10
-204178430,Steak Stir Fry,1,-1653221873,,,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1,1,0
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,2
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,3
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,3
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,3
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,3
550743424,Pizza,1,,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5
1434421325,Mushroom Pizza,1,550743424,,,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0
-2071275506,Onion Pizza,1,550743424,,,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3,1,2
1642577536,Herd Mentality,0,,,,,False,False,6,0,0
-1737101581,Health and Safety,0,,,,,False,False,6,0,0
-2040314977,Picky Eaters,0,,,,,False,False,6,0,0
73422455,Tipping Culture,0,,,,,False,False,6,0,0
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3,1,3
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718,False,False,5,1,3
1393945424,Pumpkin Seed,1,,,1972879238,-1055654549,False,True,4,1,3
1984233383,Pumpkin Soup,1,,,1972879238,-266993023:-2042103798:-1055654549:-957949759,False,True,4,1,2
1838568431,Trick - Nasty Nightmares,6,,,,,False,False,6,1,0
61056284,Trick - Risky Reservations,6,,,,,False,False,6,1,0
2112990883,Trick - Freak Fires,6,,,,,False,False,6,2,0
-1477157706,Trick - Mysterious Messes,6,,,,,False,False,6,1,0
-209485820,Trick - Dark Deliberations,6,,,,,False,False,6,1,0
83673522,Trick - Spooky Solos,6,,,,,False,False,6,1,0
1139286658,Trick - Pyro Patrons,6,,,,,False,False,6,2,0
79859072,Trick - Cowardly Customers,6,,,,,False,False,6,1,0
-2123879305,Trick - Full of Friends,6,,,,,False,False,6,1,0
-1895806374,Trick - Grand Gesture,6,,,,,False,False,6,1,0
-269971294,Trick - Frightful Fluff,6,,,,,False,False,6,1,0
1892828942,Trick - Immortal Impatience,6,,,,,False,False,6,2,0
524188336,Trick - Foggy Food,6,,,,,False,False,6,1,0
797208634,Trick - Vanishing Valuables,6,,,,,False,False,6,1,0
561747534,Trick - Careful Conveyance,6,,,,,False,False,6,1,0
-1921275517,Trick - Tiring Times,6,,,,,False,False,6,1,0
319209671,Community,6,,,,,False,False,6,1,0
536093200,Nut Roast,1,1551533879,,2087693779:-1706154991,1834063794:380220741:-2042103798,True,False,1,1,5
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,2
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,2
12170609,Cherry Pie,1,,,1972879238,148543530:925796718:-266993023,False,False,5,1,3
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1
1551533879,Turkey,1,,,-1706154991,-1506824829:380220741,True,False,0,1,5
-361249036,Christmas Rush,6,,,,,False,False,6,0,0
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,3
1398180456,Turkey - Cranberry Sauce,1,1551533879,,,735786885:-2133205155,False,False,2,1,0
-1460640973,Turkey - Gravy,1,1551533879,,,-2042103798:-957949759:-266993023,False,False,2,1,0
-1243742384,Turkey - Stuffing,1,1551533879,,,-2042103798:925796718:-266993023,False,False,2,2,0
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,2
-437161441,Bamboo Stir Fry,1,-1653221873,,,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1,1,0
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0
367917843,Dumplings,1,,,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8
137627410,Seaweed,1,367917843,,,595306349,False,False,2,1,0
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2
1642878331,Mushroom Stir Fry,1,-1653221873,,,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1,1,0
1064343768,Stir Fry - Soy Sauce,1,-1653221873,,,-471813067,False,False,2,1,0
-2106646073,Couples,6,,,,,False,False,6,0,0
2028238661,Double Dates,0,-2106646073,,,,False,False,6,0,0
587399881,First Dates,0,-2106646073,,,,False,False,6,0,0
251686519,Double Brew,0,746549422,,,,False,False,6,0,0
2079359756,Slow Brew Coffee,1,746549422:16318784,,,,False,False,6,0,0
1103885337,Cake Stand,1,16318784:16318784,,,143484231,False,False,2,1,0
16318784,Black Coffee,1,,,-1316622579,-1609758240,False,False,0,-2,1
-740215310,Extra Milk,1,16318784,,,120342736,False,False,2,1,0
-696561631,Extra Sugar,1,16318784,,,-2133205155,False,False,2,1,0
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,2,1,2
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,2,1,2
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023,False,False,2,1,3
1316998108,Sponge Cake,1,1113735761,,,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0
1609120418,Brownies,1,1113735761,,,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,0
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,3
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,3
627241196,Cupcake,1,1113735761,,,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0
-1166412657,Doughnut,1,1113735761,,,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,0
1113735761,Cakes,0,,,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,5
803049136,Lasagne,1,-1501485763:1651927267,,-1706154991:1972879238:-523839730,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,8
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,5
675343178,Tacos - Cheese,1,506626805,,,-117339838,False,False,2,1,0
-2122069505,Tacos - Lettuce,1,506626805,,,1193867305,False,False,2,1,0
706991842,Tacos - Onion,1,506626805,,,-2042103798,False,False,2,1,0
-1656665053,Tacos - Tomato,1,506626805,,,-712909563,False,False,2,1,0
2055765569,Double Helpings,0,-347199069,,,,False,False,6,1,0
-347199069,All You Can Eat,0,,,,,False,False,6,2,0
233335391,Personalised Waiting,0,,,,,False,False,6,0,0
-1815978981,Closing Time?,0,,,,,False,False,6,0,0
-287956430,Leisurely Eating,0,,,,,False,False,6,1,0
220354841,Sedate Atmosphere,0,,,,,False,False,6,0,0
-37551439,Dinner Rush,0,,1958825350,,,False,False,6,0,0
-2112255403,Flexible Dining,0,-1183014556,,,,False,False,6,0,0
-1747821833,Individual Dining,0,,-1183014556,,,False,False,6,0,0
-523195599,Large Groups,0,-1183014556,,,,False,False,6,0,0
-1183014556,Medium Groups,0,,-1747821833,,,False,False,6,0,0
165138001,Photographic Memory,0,,,,,False,False,6,0,0
-28708234,Empathy,0,,,,,False,False,6,0,0
-1617744928,Blindfolded Chefs,0,,,,,False,False,6,0,0
1530184692,Instant Service,0,,746549422,,,False,False,6,0,0
113582858,Discounts,0,,,,,False,False,6,0,0
-913531466,Victorian Standards,0,,,,,False,False,6,0,0
-53330922,Lunch Rush,0,,1958825350,,,False,False,6,0,0
-491994319,Splash Zone,0,,,,,False,False,6,0,0
1151685289,Relaxed Atmosphere,0,,,,,False,False,6,0,0
73387665,Advertising,0,1765310572,,,,False,False,6,0,0
1765310572,Advertising,0,,,,,False,False,6,0,0
2079763934,Morning Rush,0,,1958825350,,,False,False,6,0,0
1914014233,Simplicity,0,,,,,False,False,6,0,0
-534291083,High Expectations,0,,,,,False,False,6,0,0
-957080051,High Standards,0,,1356267749,,,False,False,6,0,0
1103452725,High Quality,0,,,,,False,False,6,0,0
-1857686620,Affordable,3,,,,,False,False,6,0,0
1293847744,Charming,3,,,,,False,False,6,0,0
-1323758054,Exclusive,3,,,,,False,False,6,0,0
-1641333859,Formal,3,,,,,False,False,6,0,0
409052852,Variety,5,,319209671:16318784,,,False,False,6,0,0
-1205203705,Careful Accounting,5,,,,,False,False,6,-2,0
-947047181,Mandatory Tips,5,,,,,False,False,6,-2,0
1298492736,Grabber,5,,,,,False,False,6,-2,0
1173444265,Wash Basin,5,,,,,False,False,6,-2,0
-1096314451,Savings,5,,,,,False,False,6,-2,0
2022427578,Reincarnation,5,,,,,False,False,6,-2,0
-401283600,Preparation Time,5,,,,,False,False,6,-2,0
-357483693,Double Homework,5,,,,,False,False,6,-2,0
868780472,Catalogue,5,,,,,False,False,6,-2,0
-1418317596,Coupons,5,,,,,False,False,6,-2,0
-98765415,Supplier Error,5,,,,,False,False,6,-2,0
1618418478,Bootstrapping,5,,,,,False,False,6,-2,0
1543829883,Second Helpings,5,,,,,False,False,6,-2,0
-1010143518,Loyal Customer,5,,,,,False,False,6,-2,0
-1269806478,High Tech Suppliers,5,,,,,False,False,6,-2,0
1818403570,Conveyors,5,,,,,False,False,6,-2,0
-1121427945,Coffee Tables,5,,,,,False,False,6,-2,0
1101419251,Floor Protectors,5,,,,,False,False,6,-2,0
-220105135,Flower Pots,5,,,,,False,False,6,-2,0
-178381693,Metal Table,5,,,,,False,False,6,0,0
-373772933,Simple Cloth Table,5,,,,,False,False,6,0,0
`,Ps=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const Me=ys.trim().split(/\r?\n/).filter(s=>s).map(s=>{var ge,ke;const[e,a,l,r,t,o,g,F,h,c,k,p]=s.split(","),n=Number(e),u=Number(l),T=r!=null&&r.length?r.split(":").map(G=>Number(G)):[],f=t.length?t.split(":").map(G=>Number(G)):[],C=o!=null&&o.length?(ge=o==null?void 0:o.split(":"))==null?void 0:ge.map(G=>Number(G)):[],z=g!=null&&g.length?(ke=g==null?void 0:g.split(":"))==null?void 0:ke.map(G=>Number(G)):[],J=F==="True",K=h==="True",D=Number(c),q=Number(k),le=Number(p);return{ID:n,Name:a,UnlockGroup:u,Requires:T,BlockedBy:f,RequiredProcesses:C,IngredientProviders:z,isMain:J,isStarterOrSide:K,DishType:D,CustomerMultiplier:q,DishValue:le}}),Je=[...[{ID:447437163,Name:"Country",UnlockGroup:Se.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:Se.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:Se.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},Me.filter(s=>s.Name==="Community")[0],Me.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:Se.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},Me.filter(s=>s.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:Se.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>Me.filter(e=>e.Name===s)[0]);const Ds=Ps.trim().split(`\r
`).filter(s=>s).map(s=>{var K,D;const[e,a,l,r,t,o,g,F,h,c]=s.split(","),k=Number(e),p=Number(l),n=r!=null&&r.length?(K=r==null?void 0:r.split(":"))==null?void 0:K.map(q=>Number(q)):[],u=t!=null&&t.length?(D=t==null?void 0:t.split(":"))==null?void 0:D.map(q=>Number(q)):[],T=o==="True",f=g==="True",C=Number(F),z=Number(h),J=Number(c);return{ID:k,Name:a,UnlockGroup:p,Requires:[],BlockedBy:[],RequiredProcesses:n,IngredientProviders:u,isMain:T,isStarterOrSide:f,DishType:C,CustomerMultiplier:z,DishValue:J}}).sort((s,e)=>s.Name<e.Name?-1:1),fe={};for(const s of Me)fe[s.Name]=s;for(const s of Ds)fe[s.Name]=s;for(const s of Je)fe[s.Name]=s;fe.Coffee=fe["Black Coffee"],fe.Community.AKA="Autumn",fe["Christmas Rush"].AKA="North Pole",fe.Couples.AKA="Romantic";const Ms=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Bs=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],ve={};function de(s){if(ve[s]===void 0)switch(ve[s]=oe.filter(e=>e.Name===s)[0],s){case"Display Stand":ve[s].PurchaseCost=120*2;break}if(ve[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return ve[s]}const Rs=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function Ne(s){let e=0;return(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime),e+=s.actionHistory.length,e}function qe(s,e){return(a,l)=>{const r=a.achieved[e],t=l.achieved[e],o=Math.min(r.goalsPurchased,s);let F=Math.min(t.goalsPurchased,s)-o;return F===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&t.goalsPurchased+t.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(t.goalsPurchased+t.substitutesPurchased):t.substitutesPurchased-r.substitutesPurchased:F}}const vs={"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,"Smart Grabber":3,Freezer:2,Bin:0,Conveyor:0},Ns=[6,6,7,4,6,6,7,8,11,8,7,11,10,7,11];function ws(s,e,a,l,r=!0,t=Bs,o=Ms,g=Ns,F=()=>{},h=15){var as,ls,rs,Fs;let c={},k=[];const p=[],n=new Array(l.length).fill(0).map(()=>({})),u={};let T=0,f=0;const C={},z=e.some(b=>b.Name==="Turbo"),J=e.some(b=>b.Name==="Lake"),K=[];let D=[],q=0;const le={};for(const b of l){for(const m of b){const{goal:w,number:O,substitutes:$,skipMissing:I=!1}=m;for(const R of $)u[R]||(u[R]=[]),u[R].push(w),R==="Flower Pot"&&console.log({substitutesToGoalMap:u});le[w]?I||(le[w].number+=O):(le[w]={...m},I&&(le[w].number=0));for(let R=0;R<=q;R++){if(n[R]===void 0)debugger;n[R][w]?n[R][w].number+=O:n[R][w]={...m}}for(let R=q+1;R<n.length;R++){if(n[R]===void 0)debugger;n[R][w]||(n[R][w]={...m,number:0})}I||(f+=O*Math.ceil(de(w).PurchaseCost*(z?.5:J?.75:1)))}try{p.push(JSON.parse(JSON.stringify(le)))}catch{console.log(n),console.log(n[0]);debugger}q++}const ge=n[0],ke=Object.values(ge).sort((b,m)=>de(b.goal).PurchaseCost-de(m.goal).PurchaseCost).map(b=>b.goal);c=p.shift();for(const b of Object.values(ge)){const{goal:m,number:w}=b;C[m]={...b,substitutesPurchased:0,goalsPurchased:0},b.goal!=="Starter Bin"&&(K.push(qe(w,m)),D.push(qe(w,m)))}const G=new ae([],[...K,(b,m)=>m.money-b.money,(b,m)=>Ne(b)-Ne(m),(b,m)=>b.actionHistory.length-m.actionHistory.length,(b,m)=>b.cumulativeRerolls-m.cumulativeRerolls]),y=z?7:5,V=[{spawnInside:!0,blueprintCount:y}];r||V.push({spawnInside:!1,playerInside:!0,blueprintCount:y});const Ee=[{spawnInside:!0,blueprintCount:y}];function Le(b,m,w){const O={...b};for(const $ of Object.values(m)){const I=$.goal;O[I]={...O[I]},I==="Copying Desk"&&(O[I].goalsPurchased+=O[I].substitutesPurchased,O[I].substitutesPurchased=0),O[I].goalsPurchased+=$.goalsPurchased,O[I].substitutesPurchased+=$.substitutesPurchased}return O}let ye=[];function Oe(b,m,w,O=!1){var I,R,te,he,E;const $=m.fodderUsed;e:for(const S of b){let H=1+(S.achieved["Copying Desk"].goalsPurchased?1:0);const d=S.upgradesInProgress.filter(P=>P.appliance==="").length;let i=d;if(i*=H,i<0||i<$)continue;let M=[...S.upgradesInProgress];(es||S.achieved["Research Desk"].goalsPurchased)&&(M=M.map(P=>P.upgradeTurnTimer<=1?{appliance:"",cost:0,upgradeTurnTimer:0}:{...P,upgradeTurnTimer:P.upgradeTurnTimer-1}));let U=0;{let P=m.actionHistory.length,A=!1;for(;P--;)if(m.actionHistory[P]==="buy Blueprint Cabinet")U++;else if(m.actionHistory[P].includes(" for ")){A||(U=0);break}else m.actionHistory[P].includes("reroll")&&(A=!0)}for(let P=0;P<m.achieved["Blueprint Cabinet"].goalsPurchased-U;P++)M.push({appliance:"",cost:0,upgradeTurnTimer:0});let N=S.cumulativeRerolls+m.cumulativeRerolls;if(N>Be)continue;let W=N*(N+1)/2*10+S.applianceCosts;const L=m.actionHistory.length?Le(S.achieved,m.achieved):S.achieved,X=structuredClone(L);for(const P of M)P.appliance&&(X[P.appliance]=structuredClone(X[P.appliance]),X[P.appliance].goalsPurchased--);if(m.cumulativeRerolls&&W>Y)continue;let re=[],j=0,pe=1;const Ue=M.filter(P=>!P.appliance).length,Ie=(((I=S.achieved["Discount Desk"])==null?void 0:I.goalsPurchased)??0)+(((R=S.achieved["Discount Desk"])==null?void 0:R.substitutesPurchased)??0)?.5:1;{let P=Y-W;for(const A of ke){const _=m.achieved[A],ne=Math.ceil(de(_.goal).PurchaseCost*(z?.5:J?.75:1)*Ie);if(P-=(_.goalsPurchased+_.substitutesPurchased)*ne,_.substitutesPurchased){let se=vs[_.goal]??1;if(_.goal!=="Freezer"){if(_.goal==="Dish Washer"){const Z=(te=m.actionHistory.filter(Re=>Re.includes(" for Dish Washer"))[0].match(/buy (.*) for Dish Washer/))==null?void 0:te[1];if(!Z)throw"nope";se=["Dish Washer","Wash Basin","Power Sink","Soaking Sink","Sink"].indexOf(Z),se===4&&(se=3)}}if(se)for(let Z=0;Z<_.substitutesPurchased;Z++)P+=ne,re.push({appliance:_.goal,cost:ne,upgradeTurnTimer:se}),j+=se}if(P<0||_.goal==="Plates"&&L.Plates.goalsPurchased<2)for(let se=0;se<_.goalsPurchased;se++)P+=ne,re.push({appliance:_.goal,cost:ne,upgradeTurnTimer:_.goal==="Plates"?999:0})}if(re.length>Ue)continue e;for(const A of re)A.appliance&&(X[A.appliance]=structuredClone(X[A.appliance]),X[A.appliance].goalsPurchased--)}let ee;try{ee=Is(c,X)}catch{continue}if(Fe<=0&&ee>0)continue;W+=m.applianceCosts*Ie;let De=0;{let P="",A=S.actionHistory.length,_=!0;for(;A--;){const Z=S.actionHistory[A].match(/^(?:spawn|reroll) (..?)/);if(!Z){S.actionHistory[A].match(/^day ..? spawn/)&&(_=!0);continue}if(_){_=!1;continue}P=Z[1][0]}let ne=0,se=!0;for(let Z=0;Z<m.actionHistory.length;Z++){De+=ne,ne=0;const Re=m.actionHistory[Z].match(/^(?:spawn|reroll) (..?)/);if(!Re){const ns=m.actionHistory[Z].match(/take (\d+) out/);ns&&(De+=parseInt(ns[1])/3+1);continue}De++;const Vs=Re[1][0],ts=se?"":Re[1][1];se=!1,P&&(P[0]!==Vs&&(ne+=3),P[1]&&ts&&P[1]!==ts&&(ne+=10)),P=Re[1]}}let We=S.deskTime+(pe-1)*20+Math.max(0,$-d)*5*((he=S.achieved["Clipboard Stand"])!=null&&he.goalsPurchased?.5:1)+(j*pe*5+(o[m.day]??o.at(-1)??0))*((E=L["Clipboard Stand"])!=null&&E.goalsPurchased?.5:1)+De+m.cumulativeRerolls*2;{let P=0;for(const A of re){for(;M[P].appliance;)P++;M[P]=A}for(let A=0;A<U;A++)M.push({appliance:"",cost:0,upgradeTurnTimer:0})}const me={...m,rerollConfigs:[...S.rerollConfigs,m.rerollConfigs],achieved:L,money:Y-W,actionHistory:[...S.actionHistory,...m.actionHistory],upgradesInProgress:M,cumulativeRerolls:S.cumulativeRerolls+m.cumulativeRerolls,applianceCosts:S.applianceCosts+m.applianceCosts*Ie,deskTime:We};if(!(re.length>Ue)){if(me.money>=0||me.money+me.upgradesInProgress.reduce((P,A)=>P+A.cost,0)>=0&&p.length){if(ee<Fe&&(Fe=ee,console.log(`best so far missing ${ee} pieces `+xe(me,Y))),ee<=0){if(G.add(me)){if(ss(),G.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(Fe<=0)continue}if(i>T&&(T=i),O){const P=S.cumulativeRerolls;for(let A=0;A<=i;A++)ye[A]===void 0&&(ye[A]=new ae([],Rs)),ye[A].add([P,W]);continue}w.add(me)}}return Fe}const $e={...C};$e["Blueprint Cabinet"]={...$e["Blueprint Cabinet"],goalsPurchased:1};const we=new ae([{achieved:$e,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:[{appliance:"",cost:0,upgradeTurnTimer:0}],day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...K,(b,m)=>b.applianceCosts-m.applianceCosts,(b,m)=>b.cumulativeRerolls-m.cumulativeRerolls]);let Fe=1/0,x=0,Y=0;const Q=new Ss(s),He=[];let es=!1,Pe=[];{const b=["Booking Desk","Blueprint Cabinet"];oe.filter(m=>b.includes(m.Name)).forEach(m=>Q.OwnedAppliances.push(m))}for(const b of e)Q.addCard(b);function Gs(b,m,w){var te,he;let O=[{...b}],$=[],I=[];const R=JSON.parse(JSON.stringify(b.achieved));for(const E of m){if(!E)continue;let S=E.Name,H=R[S],d=!1,i=H&&x>3&&H.goal==="Research Desk";if(!H||H.goalsPurchased>=(((te=n[0][S])==null?void 0:te.number)??0)||i||(he=u[E.Name])!=null&&he.some(M=>R[M]&&R[M].goalsPurchased+R[M].substitutesPurchased<n[0][M].number)&&Math.random()<.5){const M=u[E.Name],U=M&&E.Name==="Research Desk"?x>6?"Copying Desk":"Discount Desk":M==null?void 0:M[Math.floor(Math.random()*M.length)];if(H=R[U],!H)continue;d=!0,S=U}if(d&&H.goalsPurchased+H.substitutesPurchased>=n[0][S].number&&(H=R["Starter Bin"],S="Starter Bin"),!H)debugger;if(H.goalsPurchased>=(n[0][S]?n[0][S].number:9)){H=R["Starter Bin"],S="Starter Bin",d=!0;continue}S==="Table - Fancy Cloth"&&(d=!1),E.ThemeRequired&&(d=!1),d?H.substitutesPurchased++:H.goalsPurchased++;{const M=U=>{const N={...U};if(N.achieved={...N.achieved},N.numFloor--,N.achieved[S])N.achieved[S]={...N.achieved[S],goalsPurchased:N.achieved[S].goalsPurchased+(d?0:1),substitutesPurchased:N.achieved[S].substitutesPurchased+(d?1:0)};else if(N.achieved[S]={...H,goalsPurchased:d?0:1,substitutesPurchased:d?1:0},Number.isNaN(N.achieved[S].goalsPurchased))debugger;const W=S==="Starter Bin"||S==="Table - Fancy Cloth"?de(E.Name).PurchaseCost:Math.max(de(E.Name).PurchaseCost,de(S).PurchaseCost);return d?N.applianceCosts+=Math.ceil(W*(z?.5:1)):N.applianceCosts+=Math.ceil(W*(z?.5:J?.75:1)),N.actionHistory=[...N.actionHistory,`buy ${E.Name}`+(d?` for ${S}`:"")],S==="Starter Bin"&&(N.fodderPurchases=[...N.fodderPurchases],N.fodderPurchases[1]++,N.achieved[S].substitutesPurchased--),N};if(S!=="Starter Bin"){const U=O.map(M),N=$.map(M),W=I.map(M);O=U.concat(O),$=N.concat($),I=W.concat(I),U.forEach(w)}else $=$.concat(I),I=(I.length?I:O).map(M)}}return O.concat($).concat(I)}let Be=-1;{let b=t.slice(0,h).reduce((m,w)=>m+w)-f;for(;b>0;)Be++,b-=10*Be;console.log({maxCumulativeRerolls:Be,money:b,expectedMoneyByDay:t,gearMoney:f})}for(Number.isFinite(h)||(Be=3);Fe;){let b=we.array;if(!b.length)return F("No Solutions"),0;we.clear();const m=new ae([],[...D,(d,i)=>d.cumulativeRerolls-i.cumulativeRerolls,(d,i)=>d.applianceCosts-i.applianceCosts]);if(Y+=t[x]??t.at(-1)??0,x++,x>=h)break;if(x>14&&(z||!a.length)){debugger;break}if(x>1&&b.length===0){debugger;break}b.sort((d,i)=>Ne(d)-Ne(i)),console.log(`fastest so far: ${xe(b[0],Y)}`),b.every(d=>d.achieved["Copying Desk"].goalsPurchased)&&(k=k.map(d=>d-1),k=k.filter(d=>d>0));let w=2;switch(x){default:w=Math.min(Be+1);break}let O=.5*60*1e3;const $=Math.min(w-1,1/0);if(Y>=f){const d=Math.sqrt((Y-f)/10*2);console.log(`Have ${Y} on day ${x}, need ${f} to buy everything. Allows for ~${d} rerolls across all days`)}x%5||(w=1);let I;(z||x===5||!(x%3))&&(I=a.shift());const R=Me.filter(d=>d.Name===I)[0];Q.handleNewCardSpawnEffects(R);const te=Q.getAppliances([{spawnInside:!0,blueprintCount:y}],x);let he=[];if(He.length)for(let d=He.length-1;d>=0;d--){let i=te.length;for(;i--;){const M=te[i];if(M.Name===He[d]){if(console.log(`buying ${M.Name} on day ${x}`),Y-b.reduce((N,W)=>Math.min(N,W.applianceCosts+10/2*(W.cumulativeRerolls+1)*W.cumulativeRerolls),1/0)<M.PurchaseCost*(z?.5:J?.75:1)){console.log("not enough money-- skip for now");continue}Pe.push(M),He.splice(d,1),Y-=M.PurchaseCost*(z?.5:J?.75:1),te.splice(i,1);break}}he=Pe.map(M=>`Buy ${M.Name}`)}let E=new ae([{day:x,rerollConfigs:[],achieved:{...C},numFloor:y,fodderAvailable:T,fodderUsed:0,money:Y,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(d,i)=>Q.getPrngAdvancements(d.rerollConfigs,x)-Q.getPrngAdvancements(i.rerollConfigs,x),(d,i)=>-Q.getPrngAdvancements(d.rerollConfigs,x)+Q.getPrngAdvancements(i.rerollConfigs,x),...D,(d,i)=>d.cumulativeRerolls-i.cumulativeRerolls,(d,i)=>d.applianceCosts-i.applianceCosts,(d,i)=>i.numFloor+i.fodderAvailable-d.numFloor+d.fodderAvailable,(d,i)=>d.numFloor-i.numFloor]);Oe(b,E.array[0],we,!0);let S=1/0;const H=ye.map(d=>d.array.reduce((i,[M,U])=>Math.min(i,U+E.array[0].rerollConfigs.length*(M+1)*10),1/0));e:for(;w--&&(Pe.length&&((ls=(as=E.array[0])==null?void 0:as.rerollConfigs)==null?void 0:ls.length)===1&&(Pe.some(i=>i.Name==="Research Desk")&&(es=!0),Q.OwnedAppliances.push(...Pe),Pe=[],he=[]),S=Date.now()+O,E.array[0]!==void 0);){console.log(`Seed ${s} Day ${x} Reroll ${E.array[0].rerollConfigs.length} expanding ${E.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:H});const d=E.array;if(!p.length&&Fe<=0){const i=d[0].rerollConfigs.length;if(i*((i+1)/2)*10+f>Y){console.log("get me outta here!");break}}E.clear();for(const i of d){if(Date.now()>S){E.array.sort((X,re)=>-1*(X.applianceCosts-re.applianceCosts));continue e}if(i.numFloor+i.fodderAvailable===0||i.money<i.rerollConfigs.length*10)continue;let M=0;if(H[0]>i.money)continue;for(let L=1;L<H.length;L++)if(M++,H[L]>i.money){M=L-1;break}let U=$<i.rerollConfigs.length?i.numFloor:i.rerollConfigs.length?i.numFloor+Math.min(i.fodderAvailable,M-i.fodderUsed):y;{let L=i.actionHistory.length;for(;L--&&!i.actionHistory[L].includes("reroll");)if(i.actionHistory[L].includes("Starter Bin")){U=i.numFloor;break}}const N=$<i.rerollConfigs.length?i.numFloor:i.rerollConfigs.length?Math.max(1,i.numFloor):y;let W;i.rerollConfigs.length===0?W=Ee:$<i.rerollConfigs.length?W=[i.rerollConfigs.at(-1)]:W=V,Q.getAppliances([...i.rerollConfigs,{spawnInside:!0,blueprintCount:U}],i.day);for(const L of W){const X=j=>{if(!E.add(j)||!m.add(j))return;j.fodderPurchases[0]+j.fodderPurchases[1]||Oe(b,j,we)},re=[N];for(let j=U;j>N;j--)re.push(j);for(const j of re){const pe=[...i.rerollConfigs,{...L,blueprintCount:j}],Ie=[...pe.length===1?te:Q.getAppliances(pe,i.day)].sort((We,me)=>We.PurchaseCost-me.PurchaseCost),ee=j-i.numFloor;if(ee>i.fodderAvailable)debugger;const De={...i,fodderPurchases:[i.fodderPurchases[1],0],money:i.money-i.rerollConfigs.length*10,rerollConfigs:pe,numFloor:pe.length===1?j-Pe.length:j,fodderAvailable:i.fodderAvailable-ee,fodderUsed:i.fodderUsed+ee,cumulativeRerolls:i.rerollConfigs.length?i.cumulativeRerolls+1:0,actionHistory:i.rerollConfigs.length?[...i.actionHistory,`${ee?`take ${ee} out, `:""}reroll ${L.spawnInside?"I":L.playerInside?"OI":"OO"}`]:[`day ${i.day} spawn`,`spawn ${L.spawnInside?"I":L.playerInside?"OI":"OO"}`,...he]};if(X(De),Gs(De,Ie,X),Date.now()>S)break}}}}if(Q.addCard(R),Fe<=0){if(!p.length){G.array.sort((d,i)=>d.deskTime-i.deskTime),F((Fe<=0?`full build on ${s} by day ${x}: 
`:"")+G.array.map(d=>xe(d,Y)).join(`
`));break}{const d=(((rs=p[0]["Blueprint Cabinet"])==null?void 0:rs.number)??0)-(((Fs=c["Blueprint Cabinet"])==null?void 0:Fs.number)??0);if(d+k.length>2)debugger;for(let i=0;i<d;i++)k.push(15)}for(const d of Object.values(c))d.number&&Q.OwnedAppliances.push(de(d.goal));c=p.shift(),n.shift(),D=[];for(const{goal:d,number:i}of Object.values(n[0]))D.push(qe(i,d));Fe=1/0,ye=[],ss(!0),we.array=G.array,G.clear(),G.objectiveFunctions}}return x;function ss(b=!1){(Math.random()<.001||b)&&G.array.sort((m,w)=>m.deskTime-w.deskTime),F(`tier ${l.length-p.length-(b?1:0)} build on ${s} by day ${x}${b?"":" (Partial)"}: 
`+G.array.slice(0,100).map(m=>xe(m,Y)).join(`
`))}}function Is(s,e){let a=0;for(const l of Object.values(s)){const t=l.number-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased;a+=Math.max(0,t)}return a}function xe(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${Ne(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")+JSON.stringify(s.upgradesInProgress)}const Ge={};function Ve(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:o}=s,g=[e,a,l,r,t,[...o].sort((u,T)=>u-T)].join("|");if(Ge[g])return Ge[g];let F=[0,0,0],h=[0,0,0,0],c=1-.75**t;if(e>0){F[0]=1;let u=1-.75**e;l===.5&&(u*=1.25,c*=1.25),h[0]=o.reduce((T,f)=>T+1+(f-1)*u,0)}const k=o.reduce((u,T)=>u+T);a&&(F[1]=1,h[1]=k),r>0&&(h[2]=k,a?(F[2]=1-.75**r,l===.5&&(F[2]*=1.25)):F[2]=1);let p=1;e>0&&(F[0]*=1+l,p*=1-l,h[0]*=F[0]),a&&(F[1]*=1+p*l,p*=1-l,h[1]*=F[1],h[3]=h[1]*c),r>0&&(F[2]*=1+p*l,p*=1-l,h[2]*=F[2]);const n=[F.map(u=>u*o.length),h];return Ge[g]=n,n}function As(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:o}=s;let g=[0,0,0],F=[0,0,0,0],h=1-.75**e,c=1-.75**r,k=1-.75**t;l===.5&&(h*=1.25,c*=1.25,k*=1.25);const p=f=>{g[0]++,F[0]++;for(let C=0;C<f-1;C++)Math.random()<h&&F[0]++},n=f=>{g[1]++,F[1]+=f;for(let C=0;C<f;C++)Math.random()<k&&F[3]++},u=f=>{g[2]++,F[2]+=f};for(const f of o){let C=!1;e>0&&(p(f),!C&&Math.random()<l&&(C=!0,p(f))),n(f),!C&&Math.random()<l&&(C=!0,n(f)),r>0&&Math.random()<c&&(u(f),!C&&Math.random()<l&&(C=!0,u(f)))}return[g,F]}const xs={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},Qe={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>Qe[s]=!0);class Es{constructor(e,a=[],l=[]){B(this,"seed");B(this,"mapSize");B(this,"frontDoor");B(this,"startingCards");B(this,"cards");B(this,"playerCount");B(this,"turbo");B(this,"_actionInfoCacheByCards",{});B(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=xs[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,o=0,g=[],F=[],h=0,c=[],k=0,p=[];for(const D of a)switch(D.Name==="All You Can Eat"&&(r=!0),D.Name==="Double Helpings"&&(t=!0),D.DishType){case v.Dessert:h++,D.DishValue&&c.push(D.DishValue);break;case v.Starter:D.DishValue&&g.push(D.DishValue),o++;break;case v.Side:D.DishValue&&p.push(D.DishValue),k++;break;case v.Main:case v.Base:D.Name==="Tacos"?(F.push(2),F.push(3)):D.DishValue&&F.push(D.DishValue)}let n=t?.5:r?.25:0,u=[0,0,0,0];if(u[0]=ce(g),u[1]=ce(F),u[2]=ce(c),u[3]=ce(p),t)for(let D=0;D<3;D++)u[D]&&(u[D]+=3);const[T,f]=Ve({starters:o,main:!!u[1],doubleOrderChance:n,desserts:h,sides:k,groupSizes:l});let C=0;for(let D=0;D<f.length;D++)C+=f[D]*u[D];const z=Ze(this.playerCount),J=this.getBookingDeskCount(e),K=this.getBookingDeskMoney(e);return Math.ceil(z*(C+J*K))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,o=0,g=[],F=[],h=0,c=[],k=0,p=[];for(const f of a)switch(f.Name==="All You Can Eat"&&(r=!0),f.Name==="Double Helpings"&&(t=!0),f.DishType){case v.Dessert:h++,f.DishValue&&c.push(f.DishValue);break;case v.Starter:f.DishValue&&g.push(f.DishValue),o++;break;case v.Side:f.DishValue&&p.push(f.DishValue),k++;break;case v.Main:case v.Base:if(!f.isMain){h++,f.DishValue&&c.push(f.DishValue);break}f.Name==="Tacos"?(F.push(2),F.push(3)):f.DishValue&&F.push(f.DishValue)}let n=t?.5:r?.25:0,u=[0,0,0,0];if(u[0]=ce(g),u[1]=ce(F),u[2]=ce(c),u[3]=ce(p),t)for(let f=0;f<3;f++)u[f]&&(u[f]+=3);return Ve({starters:o,main:!!u[1],doubleOrderChance:n,desserts:h,sides:k,groupSizes:l})}actionInfo(e){if(e===0)return 0;const a=this.getCardsByDay(e),l=e.toString()+":"+a.map(y=>y.Name).sort().join(","),r=this._actionInfoCacheByCards[l];if(r)return r;let t=0;const o={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let g=0;for(let y=0;y<a.length;y++)if(a[y].DishType!==v.Null){const V=a[y].Name;g=o[V]??20;break}let F=-1,h=[1,1,1],c=[[],[g],[],[]],k=0;const p=this.getGroupSizes(e);let n=!1,u=!1,T=0,f=[],C=[],z=0,J=[],K=0,D=[],q=!1,le=!1;for(const y of a){switch(y.Name==="All You Can Eat"&&(n=!0),y.Name==="Double Helpings"&&(u=!0),y.Name){case"Picky Eaters":q=!0;break;case"Leisurely Eating":le=!0,k+=2;break;case"Instant Service":for(let V=0;V<3;V++)h[V]--;break;case"Ice Cream":c[2].push(5.125);break;case"Cheese Board":c[2].push(10);break;case"Cherry Pie":c[2].push(11);break;case"Apple Pies":c[2].push(15);break;case"Pumpkin Pies":c[2].push(16);break;case"Carrot Soup":case"Meat Soup":c[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":h[0]=4,c[0].push(8);break;case"Broccoli Cheese Soup":c[0].push(5),h[0]=4;break;case"Pumpkin Seed":c[0].push(3*8);break;case"Bread":c[0].push(5*3);break;case"Mandarin Starter":c[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":c[3].push(2);break;case"Onion Rings":c[3].push(8);break;case"Corn on the Cob":c[3].push(6);break;case"Chips":c[3].push(7);break;case"Roast Potato":c[3].push(4);break}switch(y.DishType){case v.Dessert:z++,y.DishValue&&J.push(y.DishValue);break;case v.Starter:y.DishValue&&f.push(y.DishValue),T++;break;case v.Side:y.DishValue&&D.push(y.DishValue),K++;break;case v.Main:case v.Base:y.Name==="Tacos"?(C.push(2),C.push(3)):y.DishValue&&C.push(y.DishValue);break;case v.Extra:y.Name==="Seaweed"?(c[1][0]+=1.75,F+=2):y.Name==="Dumpling - Soy Sauce"?c[1][0]+=.4:y.Name==="Breakfast Beans"?c[1][0]+=1+3/4:y.Name==="Breakfast Eggs"?c[1][0]+=6:y.Name==="Breakfast Extras"&&(F++,c[1][0]+=1.5*2),F++;break}}e>6&&(c[3]=[]),q&&(le&&!n||(c[1][0]+=2,F++));let ge=u?.5:n?.25:0;t+=p.length*k;const[ke,G]=Ve({starters:T,main:!0,doubleOrderChance:ge,desserts:z,sides:K,groupSizes:p});ke.forEach((y,V)=>t+=y*h[V]);for(const y of c)for(let V=0;V<y.length;V++)F>0&&(y[V]+=F),F+=1;return G.forEach((y,V)=>{var Ee;if((Ee=c[V])!=null&&Ee.length){if(!V){const Le=Math.ceil(y/c[V].length/3);t+=Le*c[V].reduce((ye,Oe)=>ye+Oe,0);return}t+=y*ce(c[V])}}),this._actionInfoCacheByCards[l]=t,t}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,o=[[],[],[],[]];for(const T of a)switch(T.Name==="All You Can Eat"&&(r=!0),T.Name==="Double Helpings"&&(t=!0),T.DishType){case v.Main:case v.Base:T.Name==="Tacos"?o[1].push(2.5):T.DishValue&&o[1].push(T.DishValue);break;case v.Dessert:T.DishValue&&o[2].push(T.DishValue);break;case v.Starter:T.DishValue&&o[0].push(T.DishValue);break;case v.Side:T.DishValue&&o[3].push(T.DishValue);break}let g=t?.5:r?.25:0,F=0;t&&(F+=3);const[h,c]=As({starters:o[0].length,main:!!o[1].length,doubleOrderChance:g,desserts:o[2].length,sides:o[3].length,groupSizes:l});let k=0;for(let T=0;T<c.length;T++){let f=c[T];for(;f--;){T<3&&(k+=F);let C=o[T][Math.floor(Math.random()*o[T].length)];C%1&&(Math.random()<C%1?C=Math.ceil(C):C=Math.floor(C)),k+=C}}const p=Ze(this.playerCount),n=this.getBookingDeskCount(e),u=this.getBookingDeskMoney(e);return Math.ceil(p*(k+n*u))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(h=>h.Name==="Herd Mentality"))return Math.min(l,3)+1;const r=[],t=this.getCardsByDay(e);let o=1;(this.turbo||t.some(h=>h.Name==="Morning Rush"))&&r.push(.2),(this.turbo||t.some(h=>h.Name==="Lunch Rush"))&&r.push(.5),(this.turbo||t.some(h=>h.Name==="Dinner Rush"))&&r.push(.8);const g=a/(this.playerCount||2)/this.getDayLength(e),F=.1/l;o+=l-1;for(let h=1;h<l;h++){const c=h/l,k=c-F-g,p=c+F+g;for(let n=r.length-1;n>=0;n--){const u=r[n];k<=u&&u<=p&&r.splice(n,1)}}return o+=r.length,o}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(o=>o.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),t=a*(1+l)/r;return Math.ceil(t)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=this.seed?Ke(1997821,e,this.seed).random:new ze(Math.floor(Math.random()*4294967295)),l=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(p=>p.Name==="Herd Mentality");let t=l,o=[],[g,F]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?F=g:this.seed==="_max"&&(g=F);{let p=t-1;for(;p--;)a.value}for(;t--;)o.push(a.range(g,F+1)),!r&&t!==l-1&&a.value;let h=this.turbo?3:this.getCardsByDay(e).filter(p=>Qe[p.Name]).length;const c=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let k=h*c;for(;k--;)o.push(a.range(g,F+1));if(!this.seed||this.seed[0]==="_"){let p=g;for(let n=0;n<o.length;n++)o[n]=p,p++,p>F&&(p=g)}return o}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const t=Math.floor((e-1)/3);a+=t,l+=t;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),t=this.getCourseModifier(e),o=this.getDayRate(e),g=this.getCustomersPerHour(e),F=this.getAdvertisingModifier(e);return .85**a*(l/25*o*r)/t*g*F}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===v.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(a+=.25),l.some(r=>r.DishType===v.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new Ce(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new Ce(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new ze(new Ce(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function Ze(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Os(s,e,a,l){let r=[],t=[],o=[];const g=s.cards.slice(e);let F=new Es(s.seed,a,g);F.playerCount=l;for(let h=1;h<=15;h++)o.push(F.getCustomerCount(h)),r.push(F.guessMoney(h)),t.push(F.getBookingDeskCount(h));return r[0]+=F.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:t,expectedCustomersByDay:o}}var Xe=self;function Hs(s){Xe.postMessage(s)}const zs=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],qs=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Dining Table",number:3,substitutes:[],skipMissing:!0},{goal:"Dish Rack",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:oe.filter(s=>!s.ThemeRequired&&!zs.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];Xe.onmessage=s=>{let{config:e,tiers:a,playerCount:l,maxDay:r=15}=s.data;for(const n of a)for(const u of n){const T=oe.filter(f=>f.Name===u.goal)[0];T.ThemeRequired&&(u.substitutes=oe.filter(f=>f.ThemeRequired===T.ThemeRequired).map(f=>f.Name))}for(;!a.at(-1).length;)a.pop();const t=[...qs],o=a.flatMap(n=>n.flatMap(u=>[u.goal,...u.substitutes])),g=t.length-1;t[g].substitutes=t[g].substitutes.filter(n=>!o.some(u=>n===u)),a[a.length-1].push(...t);const F=e.cards.filter(n=>Je.some(u=>u.Name===n.Name)).length+1,h=e.cards.slice(0,F);let{expectedMoneyByDay:c,expectedBookingDesksByDay:k,expectedCustomersByDay:p}=Os(e,F,h,l);ws(e.seed,h,e.cards.slice(F).map(n=>n.Name),a,e.solo,c,k,p,Hs,r)}})();
