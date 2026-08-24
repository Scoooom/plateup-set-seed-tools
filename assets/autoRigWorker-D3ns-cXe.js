var la=Object.defineProperty;var Fa=(J,ee,ue)=>ee in J?la(J,ee,{enumerable:!0,configurable:!0,writable:!0,value:ue}):J[ee]=ue;var C=(J,ee,ue)=>Fa(J,typeof ee!="symbol"?ee+"":ee,ue);(function(){"use strict";class J{constructor(e,a){C(this,"array");C(this,"objectiveFunctions");this.array=ee(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:F}=ue(e,this.array[a],this.objectiveFunctions);if(F)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function ee(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const F=a.pop();let t=l.length;for(;t--;){let{better:n,worse:u}=ue(F,l[t],e);if(u)continue e;n&&l.splice(t,1)}l.push(F)}return l}function ue(s,e,a){let l=!0,F=!0,t=0;for(;(l||F)&&t<a.length;){const n=a[t](s,e);n<0?F=!1:n>0&&(l=!1),t++}return{better:l,worse:F}}var Ts=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60
-1357906425,False,True,Conveyor Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,120
-1440053805,False,True,Rapid Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,60
1329097317,True,False,Mixer,False,False,,,64,0,0,False,False,60
-1013770159,True,False,Supplies,False,False,,,256,0,1,False,False,60
2127051779,False,True,Compactor Bin,False,False,,,256,0,0,False,False,20
-1632826946,False,True,Composter Bin,False,False,,,256,0,0,False,False,20
-1855909480,False,True,Expanded Bin,False,False,,,256,0,0,False,False,20
481495292,False,False,Starter Bin,False,False,,,256,0,0,False,False,20
1551609169,True,False,Bin,False,False,,,256,0,0,False,False,20
1286554202,True,False,Fire Extinguisher,False,False,,1972879238:-1706154991,256,0,0,False,False,20
1351951642,True,False,Floor Buffer,False,False,,,256,0,0,False,False,120
1765889988,True,False,Kitchen Floor Protector,False,False,,,264,0,0,False,False,20
-1495393751,False,True,Fast Mop,False,False,,,256,0,0,False,False,60
1776760557,False,True,Lasting Mop,False,False,,,256,0,0,False,False,60
-1993346570,True,False,Mop,False,False,,,256,0,0,False,False,20
-751458770,False,False,Robot Buffer,False,False,,,256,0,0,False,False,250
-1723340146,False,True,Robot Buffer,False,False,,,256,0,0,False,False,250
-2091039911,False,False,Robot Mop,False,False,,,256,0,0,False,False,250
-2147057861,False,True,Robot Mop,False,False,,,256,0,0,False,False,250
-1609758240,True,False,Coffee Machine,True,False,,,32,0,0,False,False,20
-17368064,False,False,,False,False,,,0,0,0,False,False,20
1973114260,True,False,Conveyor,False,False,,,64,0,0,False,False,20
-1906799936,True,False,Combiner,False,False,,,64,0,0,False,False,60
-331651461,False,True,Grabber - Rotating,False,False,,,64,0,0,False,False,60
-1238047163,False,True,Smart Grabber,False,False,,,64,0,0,False,False,60
-1029710921,False,True,Grabber,False,False,,,64,0,0,False,False,60
-1462602185,True,False,Portioner,False,False,,,64,0,0,False,False,60
459840623,False,False,Teleporter,False,False,,,64,0,0,False,False,1250
-1248669347,True,False,Counter,False,False,,,1,0,0,False,False,20
1365340297,False,False,Kneading Counter,False,False,,,0,0,0,False,False,20
-1573577293,False,True,Workstation,False,False,,,32,0,0,False,False,40
620400448,True,False,Affordable Bin,False,False,,,2,2,0,False,False,30
1830133512,True,False,Gumball Machine,False,False,,,2,2,0,False,False,30
1724963734,True,False,Neon Sign,False,False,,,2,2,0,False,False,40
371247235,True,False,Neon Sign,False,False,,,2,2,0,False,False,40
230540973,True,False,Ceiling Light,False,False,,,2,2,0,False,False,40
-1472471467,True,False,Stock Picture,False,False,,,2,2,0,False,False,30
-2108088224,True,False,Dirty Floor Sign,False,False,,,2,2,0,False,False,30
1569358344,True,False,Barrel,False,False,,,2,4,0,False,False,40
-60168847,True,False,Bookcase,False,False,,,2,4,0,False,False,40
-1941237931,True,False,Dartboard,False,False,,,2,4,0,False,False,30
-441525746,True,False,Fireplace,False,False,,,2,4,0,False,False,100
591400026,True,False,Rug,False,False,,,2,4,0,False,False,40
-1628995120,True,False,Wall Light,False,False,,,2,4,0,False,False,30
-1380985631,True,False,Banner,False,False,,,8192,0,0,False,False,0
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0
-4737636,True,False,Fairy Lights,False,False,,,8192,0,0,False,False,0
-13481890,True,False,Candelabra,False,False,,,2,1,0,False,False,40
1233091186,True,False,Chandelier,False,False,,,2,1,0,False,False,40
-1180623135,True,False,Precious Flower,False,False,,,2,1,0,False,False,60
642318074,True,False,Classical Globe,False,False,,,2,1,0,False,False,60
-1486785449,True,False,Painting,False,False,,,2,1,0,False,False,40
2076966627,True,False,Rug,False,False,,,2,1,0,False,False,40
-972644436,True,False,Statue,False,False,,,2,1,0,False,False,100
1551024733,True,False,Brand Mascot,False,False,,,2,8,0,False,False,40
-1339970600,True,False,Tidy Plant,False,False,,,2,8,0,False,False,30
908498444,True,False,Ceiling Light,False,False,,,2,8,0,False,False,40
744277037,True,False,Abstract Lamp,False,False,,,2,8,0,False,False,30
531866927,True,False,Vase,False,False,,,2,8,0,False,False,30
1220439284,True,False,Indoor fountain,False,False,,,2,8,0,False,False,60
668664567,True,False,Calm Painting,False,False,,,2,0,0,False,False,60
756364626,True,False,Plant,False,False,,,2,0,0,False,False,60
-648349801,False,False,Rug,False,False,,,2,0,0,False,False,60
-1506601664,False,False,Drink Tap,False,False,,,0,0,0,False,False,20
-2100580689,False,False,,False,False,,,0,0,0,False,False,20
532998682,True,False,Dumbwaiter,False,False,,,64,0,0,False,False,60
892856538,False,False,,False,False,,,0,0,0,False,False,20
-544237849,False,False,Beehive,False,False,,,0,0,0,False,False,20
188952245,False,False,,False,False,,,0,0,0,False,False,20
1921027834,True,False,Gas Limiter,False,False,,1972879238:-1706154991,32,0,0,False,False,60
-770041014,True,False,Gas Override,False,False,,1972879238:-1706154991,32,0,0,False,False,60
-1448690107,False,True,Danger Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60
1266458729,False,True,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60
1154757341,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,5
862493270,True,False,Hob,False,False,,1972879238:-1706154991,33,0,0,False,False,20
-441141351,False,False,,False,False,,1972879238,32,0,0,False,False,20
805530854,False,False,,False,False,,1972879238,0,0,0,False,False,60
-60938940,False,False,Bookings Stand,False,False,,,0,0,0,False,False,60
-63118559,True,False,Hosting Stand,False,False,,,8,0,0,False,False,60
-1813414500,True,False,Display Stand,False,False,,,8,0,0,False,False,120
1630557157,False,False,,False,False,,,0,0,0,False,False,20
-1324288299,False,False,,False,False,,,0,0,0,False,False,20
-374077567,False,False,,False,False,,,0,0,0,False,False,20
147181555,False,False,,False,False,,,0,0,0,False,False,20
31731938,False,False,,False,False,,,0,0,0,False,False,20
1419995156,False,False,,False,False,,,0,0,0,False,False,20
34773971,False,False,,False,False,,,0,0,0,False,False,20
-1424385600,False,False,,False,False,,,0,0,0,False,False,20
377065033,False,False,,False,False,,,0,0,0,False,False,20
-483535085,False,False,,False,False,,,0,0,0,False,False,0
1553046198,False,False,,False,False,,,0,0,0,False,False,20
1063254979,False,False,,False,False,,,0,0,0,False,False,20
1732122842,False,False,,False,False,,,0,0,0,False,False,20
-1936421857,False,False,,False,False,,,0,0,0,False,False,20
2041631136,False,False,,False,False,,,0,0,0,False,False,20
949631021,False,False,,False,False,,,0,0,0,False,False,60
-571205127,True,False,Blueprint Cabinet,False,False,,,2560,0,0,True,False,20
-729493805,False,True,Copying Desk,False,False,,,512,0,0,False,False,120
-272437832,False,False,Discount Desk,False,False,,,512,0,0,False,False,120
1586911545,False,True,Discount Desk,False,False,,,512,0,0,False,False,120
1446975727,False,True,Blueprint Desk,False,False,,,512,0,0,False,False,60
1139247360,True,False,Research Desk,False,False,,,1536,0,0,True,False,40
238041352,True,False,Booking Desk,False,True,,,8,0,0,False,False,0
-1817838704,False,False,Extra Life,False,False,,,0,0,0,False,False,120
136867583,False,False,Fast Food Terminal,False,False,,,8,0,0,False,False,60
-246383526,False,True,Specials Terminal,False,False,,,8,0,0,False,False,60
-1610332021,True,False,Ordering Terminal,False,False,,,8,0,0,False,False,60
944301512,False,False,,False,False,,,0,0,0,False,False,20
-1311702572,False,True,Microwave,False,False,,1972879238:-1706154991,32,0,0,False,False,120
-1068749602,True,False,Oven,False,False,,1972879238:-1706154991,32,0,0,False,False,60
1147639502,False,False,Balloons,False,False,,,8192,0,0,False,False,0
-71664252,False,False,Birthday Banner,False,False,,,8192,0,0,False,False,0
-326328571,False,False,Piano,False,False,,,0,0,0,False,False,20
-905438738,True,False,Apples,True,False,,,288,0,0,False,False,60
1807525572,True,False,Beans,True,False,,,288,0,0,False,False,60
269523389,True,False,Meat,True,False,,,288,0,0,False,False,60
-1573812073,True,False,Broccoli,True,False,,,288,0,0,False,False,60
759552160,True,False,Burger Buns,True,False,,,288,0,0,False,False,60
385684499,False,False,Patties,False,False,,,288,0,0,False,False,60
-452101383,True,False,Carrots,True,False,,,288,0,0,False,False,60
-117339838,True,False,Cheese,True,False,,,288,0,0,False,False,60
961148621,True,False,Eggs,True,False,,,288,0,0,False,False,60
-1735137431,False,False,Fish,False,False,,,288,0,0,False,False,60
-609358791,False,False,Fish,False,False,,,288,0,0,False,False,60
925796718,True,False,Flour,True,False,,,288,0,0,False,False,60
-1132411297,True,False,Hot dog bun,True,False,,,288,0,0,False,False,60
1799769627,True,False,Hot Dogs,True,False,,,288,0,0,False,False,60
-1533430406,True,False,Ice Cream,True,False,,,288,0,0,False,False,60
-965827229,True,False,Extra Ketchup,True,False,-965827229,,8,0,0,False,True,60
1193867305,True,False,Lettuce,True,False,,,288,0,0,False,False,60
-484165118,True,False,Meat,True,False,,,288,0,0,False,False,60
-1097889139,True,False,Mushrooms,True,False,,,288,0,0,False,False,60
-117356585,True,False,Extra Mustard,True,False,-117356585,,8,0,0,False,True,60
1834063794,True,False,Nuts,True,False,,,288,0,0,False,False,60
-1963699221,True,False,Oil,True,False,,,288,0,0,False,False,60
-1434800013,True,False,Olives,True,False,,,288,0,0,False,False,60
-2042103798,True,False,Onion,True,False,,,288,0,0,False,False,60
44541785,True,False,Potato,True,False,,,288,0,0,False,False,60
-1201769154,True,False,Rice,True,False,,,288,0,0,False,False,60
-1507801323,True,False,Thick cut meat,True,False,,,288,0,0,False,False,60
1800865634,True,False,Thin cut meat,True,False,,,288,0,0,False,False,60
-712909563,True,False,Tomato,True,False,,,288,0,0,False,False,60
-1506824829,True,False,Turkey,True,False,,,288,0,0,False,False,60
-1353971407,True,False,Wine,True,False,,,288,0,0,False,False,60
-101564005,False,False,,False,False,,,0,0,0,False,False,20
-897970831,False,False,,False,False,,,0,0,0,False,False,20
-996680732,False,False,Counter,False,False,,,0,0,0,False,False,5
946079892,False,False,,False,False,,,0,0,0,False,False,60
1171429989,False,False,,False,False,,,0,0,0,False,False,60
161402590,False,False,,False,False,,,0,0,0,False,False,60
739504637,False,True,Auto Plater,False,False,,,256,0,0,False,False,20
1653145961,False,False,Dish Rack,False,False,,,0,0,0,False,False,20
434150763,True,False,Dish Rack,False,False,,,16,0,0,False,False,20
1270423542,False,False,,False,False,,,0,0,0,False,False,20
-1474018107,False,False,,False,False,,,0,0,0,False,False,20
380220741,False,False,Starter Plates,False,False,,,256,0,0,False,False,20
1313469794,True,False,Plates,False,False,,,256,0,0,True,False,20
-957949759,True,False,Pot Stack,False,False,-957949759,,32,0,0,False,False,20
235423916,True,False,Serving Boards,False,False,235423916,,256,0,0,False,False,20
314862254,True,False,Woks,False,False,314862254,,0,0,0,False,False,60
-1291027873,False,False,,False,False,,,0,0,0,False,False,20
-214921468,False,False,,False,False,,,0,0,0,False,False,20
-2135829561,False,False,,False,False,,,0,0,0,False,False,20
-372462424,False,False,,False,False,,,0,0,0,False,False,20
933445633,False,False,,False,False,,,0,0,0,False,False,20
-1555334152,False,False,,False,False,,,0,0,0,False,False,20
1980900762,False,False,,False,False,,,0,0,0,False,False,20
1855052205,False,False,,False,False,,,0,0,0,False,False,20
-68388422,False,False,,False,False,,,0,0,0,False,False,20
-1200192498,False,False,,False,False,,,0,0,0,False,False,20
-194750543,False,False,,False,False,,,0,0,0,False,False,20
1911132834,False,False,,False,False,,,0,0,0,False,False,20
1365126444,False,False,,False,False,,,0,0,0,False,False,20
-1265562836,False,False,,False,False,,,0,0,0,False,False,20
-2046940874,False,False,,False,False,,,0,0,0,False,False,20
-923570273,False,False,,False,False,,,0,0,0,False,False,20
-488268556,False,False,,False,False,,,0,0,0,False,False,20
-548432204,False,False,,False,False,,,0,0,0,False,False,20
-758567246,False,False,,False,False,,,0,0,0,False,False,20
532701855,False,False,,False,False,,,0,0,0,False,False,20
-1857890774,False,True,Freezer,False,False,,,4,0,0,False,False,20
-759808000,False,True,Frozen Prep Station,False,False,,,256,0,0,False,False,60
1656358740,True,False,Prep Station,False,False,,,256,0,0,False,False,20
-262439022,False,False,,False,False,,,0,0,0,False,False,20
1890408483,False,False,,False,False,,,0,0,0,False,False,20
639111696,True,False,Breadsticks,False,False,,,8,0,0,False,True,20
1358522063,True,False,Candle Box,False,False,,,8,0,0,False,True,60
221442949,True,False,Flower Pot,False,False,,,8,0,0,False,False,60
1528688658,True,False,Napkins,False,False,,,8,0,0,False,True,60
2080633647,True,False,Sharp Cutlery,False,False,,,8,0,0,False,True,60
446555792,True,False,"Specials" Menu,False,False,,,8,0,0,False,True,60
938247786,False,False,Chair,False,False,,,0,0,0,False,False,0
1648733244,True,False,Coffee Table,False,False,,,8,0,0,False,False,40
-1979922052,False,False,Chair,False,False,,,0,0,0,False,False,0
-3721951,False,True,Bar Table,False,False,,,8,0,0,False,False,5
-34659638,False,True,Table - Simple Cloth,False,False,,,8,0,0,False,False,60
-203679687,False,True,Metal Table,False,False,,,8,0,0,False,False,60
-2019409936,False,True,Table - Fancy Cloth,False,False,,,8,0,0,False,False,60
209074140,True,False,Dining Table,False,False,,,1,0,0,False,False,20
1738351766,True,False,Rolling Pin,False,False,,-523839730,256,0,0,False,False,20
624465484,True,False,Scrubbing Brush,False,False,,,256,0,0,False,False,20
2023704259,True,False,Sharp Knife,False,False,,2087693779,256,0,0,False,False,20
723626409,True,False,Trainers,False,False,,,256,0,0,False,False,60
1796077718,True,False,Wellies,False,False,,,256,0,0,False,False,60
230848637,True,False,Work Boots,False,False,,,256,0,0,False,False,60
1129858275,True,False,Tray Stand,False,False,,,256,0,0,False,False,60
-823922901,False,True,Dish Washer,False,False,,,16,0,0,False,False,60
-214126192,False,True,Wash Basin,False,False,,,16,0,0,False,False,60
1083874952,True,False,Sink,False,False,,,17,0,0,False,False,20
1467371088,False,True,Power Sink,False,False,,,16,0,0,False,False,60
1860904347,False,True,Soaking Sink,False,False,,,16,0,0,False,False,20
-266993023,False,False,Starter Sink,False,False,,,17,0,0,False,False,20
2073091578,False,False,,False,False,,,0,0,0,False,False,20
-469149429,False,False,,False,False,,,0,0,0,False,False,20
834743908,False,False,,False,False,,,0,0,0,False,False,20
951367272,False,False,,False,False,,,0,0,0,False,False,20
1771016910,False,False,,False,False,,,0,0,0,False,False,60
-2122624266,False,False,,False,False,,,0,0,0,False,False,20
-404095277,False,False,,False,False,,,0,0,0,False,False,20
-1949016360,False,False,,False,False,,,0,0,0,False,False,20
-581219245,False,False,,False,False,,,0,0,0,False,False,60
-148578487,False,False,,False,False,,,0,0,0,False,False,20
-1125517450,False,False,,False,False,,,0,0,0,False,False,20
-233558851,False,False,,False,False,,,0,0,0,False,False,20
-342718019,False,False,,False,False,,,0,0,0,False,False,20
174737401,False,False,,False,False,,,0,0,0,False,False,20
310022384,False,False,,False,False,,,0,0,0,False,False,20
-1425710426,False,False,,False,False,,,0,0,0,False,False,60
-1807971648,False,False,,False,False,,,0,0,0,False,False,60
268640447,False,False,,False,False,,,0,0,0,False,False,60
1199575543,False,False,,False,False,,,0,0,0,False,False,60
-1451048989,False,False,,False,False,,,0,0,0,False,False,60
-1820794030,False,False,,False,False,,,0,0,0,False,False,60
871235082,False,False,,False,False,,,0,0,0,False,False,20
387240739,False,False,,False,False,,,0,0,0,False,False,20
1159228054,False,False,Bin,False,False,,,0,0,0,False,False,20
-626547002,False,False,,False,False,,,0,0,0,False,False,60
359655899,False,False,,False,False,,,0,0,0,False,False,20
-232172209,False,False,,False,False,,,0,0,0,False,False,20
-1528441435,False,False,,False,False,,,0,0,0,False,False,20
564388954,False,False,,False,False,,,0,0,0,False,False,20
1363960331,False,False,,False,False,,,0,0,0,False,False,20
-760874610,False,False,,False,False,,,0,0,0,False,False,20
1823459359,False,False,,False,False,,,0,0,0,False,False,20
1659152562,False,False,,False,False,,,0,0,0,False,False,20
477050702,False,False,,False,False,,,0,0,0,False,False,20
1485375733,False,False,,False,False,,,0,0,0,False,False,20
-1114059052,False,False,,False,False,,,0,0,0,False,False,20
-1518462324,False,False,,False,False,,,0,0,0,False,False,20
-62256073,False,False,,False,False,,,0,0,0,False,False,20
1636658728,False,False,,False,False,,,0,0,0,False,False,20
-1260306608,False,False,,False,False,,,0,0,0,False,False,20
1425494045,False,False,,False,False,,,0,0,0,False,False,20
-1614041568,False,False,,False,False,,,0,0,0,False,False,20
-1051912790,False,False,,False,False,,,0,0,0,False,False,20
1010867759,False,False,,False,False,,,0,0,0,False,False,20
-720353319,False,False,,False,False,,,0,0,0,False,False,60
-1997868587,False,False,,False,False,,,0,0,0,False,False,60
-1920103064,False,False,,False,False,,,0,0,0,False,False,60
-1235624607,False,False,,False,False,,,0,0,0,False,False,60
-636342486,False,False,Cobwebs,False,False,,,8192,0,0,False,False,0
-1318523640,False,False,Ghost Statue,False,False,,,8192,0,0,False,False,0
-621580281,False,False,Pumpkin,False,False,,,8192,0,0,False,False,0
115181910,False,False,Skeleton,False,False,,,8192,0,0,False,False,0
976574457,True,False,Corn,True,False,,,288,0,0,False,False,60
235355384,False,False,Bananas,False,False,,,0,0,0,False,False,60
-699333907,False,False,Strawberries,False,False,,,0,0,0,False,False,60
-1055654549,True,False,Pumpkin,True,False,,,288,0,0,False,False,60
148543530,True,False,Cherries,True,False,,,288,0,0,False,False,60
-1382019219,False,False,,False,False,,,0,0,0,False,False,20
-1403625488,False,False,,False,False,,,0,0,0,False,False,20
-1673904972,False,False,,False,False,,,0,0,0,False,False,20
1752654754,False,False,,False,False,,,0,0,0,False,False,20
-1748395084,False,False,,False,False,,,0,0,0,False,False,20
303858729,True,False,Christmas Crackers,True,False,,,288,0,0,False,False,60
735786885,True,False,Cranberry,True,False,,,288,0,0,False,False,60
-2133205155,True,False,Sugar,True,False,,,288,0,0,False,False,60
-667884240,False,False,Conveyor,False,False,,,64,0,0,False,False,20
-697441390,False,False,,False,False,,,64,0,0,False,False,20
-349733673,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60
1836107598,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60
369884364,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60
-699013948,False,False,,False,False,,1972879238:-1706154991,32,0,0,False,False,60
555321421,False,False,Rabbit Poster,False,False,,,8192,0,0,False,False,0
-2084684446,False,False,Lantern,False,False,,,8192,0,0,False,False,0
-2092567672,True,False,Bamboo,True,False,,,288,0,0,False,False,60
595306349,True,False,Seaweed,True,False,,,288,0,0,False,False,60
-1210117767,True,False,Mandarins,True,False,,,288,0,0,False,False,60
-471813067,True,False,Extra Soy Sauce,True,False,-471813067,,8,0,0,False,True,60
-184765154,False,False,,False,False,,,0,0,0,False,False,20
-707206359,False,False,,False,False,,,0,0,0,False,False,20
1134699240,False,False,,False,False,,,0,0,0,False,False,20
-471643137,False,False,Flower Arch,False,False,,,8192,0,0,False,False,0
142298503,False,False,Friends Poster,False,False,,,2,0,0,False,False,0
-2001861712,False,False,Heart Balloons,False,False,,,8192,0,0,False,False,0
-1314508999,False,False,Heart Bunting,False,False,,,8192,0,0,False,False,0
785615801,False,False,Neon Sign,False,False,,,8192,0,0,False,False,0
645876063,False,False,,False,False,,,0,0,0,False,False,60
-916942203,False,False,,False,False,,,0,0,0,False,False,20
345407921,False,False,,False,False,,,0,0,0,False,False,20
-509190559,False,False,,False,False,,,0,0,0,False,False,20
1274763392,False,False,,False,False,,,0,0,0,False,False,20
965503721,False,False,,False,False,,,0,0,0,False,False,20
260380903,False,False,,False,False,,,0,0,0,False,False,20
-89571330,False,False,,False,False,,,0,0,0,False,False,20
2114150010,False,False,,False,False,,,0,0,0,False,False,20
143484231,True,False,Cupcake Stand,True,False,143484231,,8,0,0,False,False,60
801015432,True,False,Ice Dispenser,True,False,,,32,0,0,False,False,20
-557736569,True,False,Milk Steamer,True,False,,,32,0,0,False,False,20
120342736,True,False,Milk,True,False,,,288,0,0,False,False,60
-1598460622,True,False,Tea bags,True,False,,,288,0,0,False,False,60
1377093570,True,False,Tea cups,True,False,,,288,0,0,False,False,60
-762638188,True,False,Tea pots,True,False,,,288,0,0,False,False,60
-660310536,True,False,Cake Tin,True,False,,,256,0,0,False,False,60
-2135982034,True,False,Brownie Tray,True,False,,,256,0,0,False,False,120
-1723125645,True,False,Cookie Tray,True,False,,,256,0,0,False,False,120
-315287689,True,False,Cupcake Tray,True,False,,,256,0,0,False,False,120
2136474391,True,False,Doughnut Tray,True,False,,,256,0,0,False,False,120
783588616,False,False,Chocolate,False,False,,,0,0,0,False,False,60
1470180731,False,False,Lemon Tree,False,False,,,0,0,0,False,False,60
-217313684,True,False,Mixing Bowls,False,False,-217313684,,32,0,0,False,False,20
782648278,False,False,Cauldron,False,False,,1972879238:-1706154991,32,0,0,False,False,60
-1552572658,True,False,Candles,False,False,,,8192,0,0,False,False,0
-119593913,True,False,Pumpkin Stack,False,False,,,8192,0,0,False,False,0
-379172217,True,False,Witch Shelf,False,False,,,8192,0,0,False,False,0
-292467039,False,False,Enchanting Desk,False,False,,,1536,0,0,False,False,40
-1946127856,False,False,Ghostly Clipboard,False,False,,,0,0,0,False,False,60
1313278365,False,False,Ghostly Knife,False,False,,,0,0,0,False,False,60
689268680,False,False,Ghostly Rolling Pin,False,False,,,0,0,0,False,False,60
-560953757,False,False,Ghost Scrubber,False,False,,,0,0,0,False,False,60
-1780646993,False,False,Illusion Wall,False,False,,,64,0,0,False,False,60
1150470926,False,False,Instant Wand,False,False,,,256,0,0,False,False,60
2044081363,False,False,Levitation Line,False,False,,,64,0,0,False,False,20
-1298525547,False,False,Levitation Spot,False,False,,,64,0,0,False,False,20
119166501,False,False,Levitation Station,False,False,,,0,0,0,False,False,60
-1992638820,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120
-877630314,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120
744482650,False,False,Magic Mirror,False,False,,,64,0,0,False,False,60
-1696198539,False,False,Magic Spring,False,False,,,0,0,0,False,False,20
-1835366879,False,False,,False,False,,,0,0,0,False,False,20
2031496644,False,False,,False,False,,,0,0,0,False,False,20
1391464545,False,False,,False,False,,,0,0,0,False,False,20
477535207,False,False,,False,False,,,0,0,0,False,False,20
923307040,False,False,,False,False,,,0,0,0,False,False,20
-1090855913,False,False,,False,False,,,0,0,0,False,False,20
50273892,False,False,,False,False,,,0,0,0,False,False,20
-70663877,False,False,,False,False,,,0,0,0,False,False,20
-2123542635,False,False,,False,False,,,0,0,0,False,False,20
423254987,False,False,Preserving Station,False,False,,,256,0,0,False,False,60
267288096,False,False,Magic Apple Tree,False,False,,,8,0,0,False,False,60
29164230,False,False,Pouch of Holding,False,False,,,256,0,0,False,False,120
540526865,False,False,Enchanted Plates,False,False,,,0,0,0,False,False,60
2000892639,False,False,Table - Stone,False,False,,,8,0,0,False,False,60
-1688921160,False,False,Table - Sharing Cauldron,False,False,,,8,0,0,False,False,60
1492264331,False,False,Vanishing Circle,False,False,,,0,0,0,False,False,20
-1541798751,True,False,Mince,True,False,-1541798751,,32,0,0,False,False,20
-2077197906,True,False,Pasta Sheet,True,False,-2077197906,,32,0,0,False,False,20
-1339944542,True,False,Lasagne Tray,True,False,-1339944542,,32,0,0,False,False,20
-215543585,True,False,Butter,True,False,-215543585,,32,0,0,False,False,20
-182748008,True,False,Spaghetti,True,False,-182748008,,32,0,0,False,False,20
509800268,False,False,Dish Source Cabinet,False,False,,,0,0,0,False,False,60
1436010410,False,False,,False,False,,,0,0,0,False,False,20
-400359294,False,False,,False,False,,,0,0,0,False,False,20
-1082709460,False,False,,False,False,,,0,0,0,False,False,20
-307800946,False,False,,False,False,,,0,0,0,False,False,20
2095304286,False,False,,False,False,,,0,0,0,False,False,20
585649337,False,False,,False,False,,,0,0,0,False,False,20
-364231730,False,False,,False,False,,,0,0,0,False,False,60
-121110359,False,False,,False,False,,,0,0,0,False,False,60
-940358190,True,False,Leftover Bags,False,False,,,8,0,0,False,True,60
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60
-872135723,False,False,,False,False,,,0,0,0,False,False,60
-1879606524,False,False,,False,False,,,0,0,0,False,False,60
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60
286909233,False,False,,False,False,,,0,0,0,False,False,20
-679488834,False,False,,False,False,,,0,0,0,False,False,20
1710403104,False,False,,False,False,,,0,0,0,False,False,20
1710403103,False,False,,False,False,,,0,0,0,False,False,20
199496276,False,False,,False,False,,,0,0,0,False,False,20
1076426452,False,False,,False,False,,,0,0,0,False,False,20
524986663,False,False,Buffet - Heated,False,False,,,8,0,0,False,False,120
-1228506595,False,False,Buffet - Platter,False,False,,,8,0,0,False,False,120
-773196462,True,False,Buffet,False,False,,,8,0,0,False,False,120
638034870,False,False,Service Counter,False,False,,,8,0,0,False,False,60
1521405905,False,False,Shoddy Counter,False,False,,,1,0,0,False,False,20
-703157650,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,5
179021494,False,False,Shoddy Oven,False,False,,1972879238:-1706154991,32,0,0,False,False,60
-951016989,False,False,Shoddy Starter Plates,False,False,,,256,0,0,False,False,20
307023830,False,False,Starting Shower,False,False,,,17,0,0,False,False,20
-995798081,False,False,Shoddy Table,False,False,,,1,0,0,False,False,20
-896355051,False,False,,False,False,,,0,0,0,False,False,20
295017434,False,False,,False,False,,,0,0,0,False,False,20
-733956586,False,False,,False,False,,,0,0,0,False,False,20
973562672,False,False,,False,False,,,0,0,0,False,False,20
1314289638,False,False,,False,False,,,0,0,0,False,False,20
-1094202280,False,False,,False,False,,,0,0,0,False,False,20
1861256409,False,False,,False,False,,,0,0,0,False,False,20
-1616825935,False,False,,False,False,,,0,0,0,False,False,20
1127950131,False,False,,False,False,,,0,0,0,False,False,20
-1304047988,False,False,,False,False,,,0,0,0,False,False,20
458216451,False,False,,False,False,,,0,0,0,False,False,20
494894462,False,False,Bay Leaves,False,False,,,0,0,0,False,False,20
-1383080431,False,False,Mint,False,False,,,0,0,0,False,False,20
1631244582,False,False,Sage,False,False,,,0,0,0,False,False,20
239366585,False,False,Cherry Blossom,False,False,,,0,0,0,False,False,20
-78023961,False,False,Lavender,False,False,,,0,0,0,False,False,20
269955775,False,False,Rose,False,False,,,0,0,0,False,False,20
-1677597382,False,False,Viola Flowers,False,False,,,0,0,0,False,False,20
-2146458011,False,False,Spring Onion,False,False,,,0,0,0,False,False,20
-1873457825,False,False,Thyme,False,False,,,0,0,0,False,False,20
1071144288,False,False,Chili,False,False,,,0,0,0,False,False,20
116617378,False,False,Seed,False,False,,,0,0,0,False,False,20
444566625,False,False,Chives,False,False,,,0,0,0,False,False,20
349483235,False,False,Fennel,False,False,,,0,0,0,False,False,20
-552159415,False,False,Jasmine,False,False,,,0,0,0,False,False,20
-1848709278,False,False,Oregano,False,False,,,0,0,0,False,False,20
245231715,False,False,Rosemary,False,False,,,0,0,0,False,False,20
-395285279,False,False,Tarragon,False,False,,,0,0,0,False,False,20
1154874054,False,False,,False,False,,,0,0,0,False,False,60
-1000906413,False,False,,False,False,,,0,0,0,False,False,60
-1809492459,True,False,Avocado,True,False,,,288,0,0,False,False,60
-1374072955,True,False,Bell Peppers,True,False,,,288,0,0,False,False,60
-2137213147,True,False,Frying Pans,True,False,,,288,0,0,False,False,60
-870467526,True,False,Limes,True,False,,,288,0,0,False,False,60
825737084,True,False,Chocolate Syrup,True,False,,,288,0,0,False,False,60
483880621,True,False,Strawberry Syrup,True,False,,,288,0,0,False,False,60
602693523,True,False,Sundae Glasses,True,False,,,288,0,0,False,False,60
1872560572,True,False,Strawberries,True,False,,,288,0,0,False,False,60
-1673135814,True,False,Ham,True,False,,,288,0,0,False,False,60
-74499940,True,False,Pickle,True,False,,,288,0,0,False,False,60
1895329114,False,False,,False,False,,,0,0,0,False,False,60
-1889835507,True,False,Present Stack,False,False,,,8192,0,0,False,False,0
-380823608,True,False,Tinsel,False,False,,,8192,0,0,False,False,0
-602487625,True,False,Christmas Tree,False,False,,,8192,0,0,False,False,0
-302306254,True,False,Wreath,False,False,,,8192,0,0,False,False,0
-1492497486,False,False,,False,False,,,0,0,0,False,False,60
-771033261,False,False,,False,False,,,0,0,0,False,False,60
-1082534766,False,False,,False,False,,,0,0,0,False,False,60
416689423,False,False,,False,False,,,0,0,0,False,False,60
1595436560,False,False,,False,False,,,0,0,0,False,False,60
-1985766917,False,False,,False,False,,,0,0,0,False,False,60
2029957333,False,False,,False,False,,,0,0,0,False,False,60
1621490890,False,False,,False,False,,,0,0,0,False,False,60
708507454,False,False,,False,False,,,0,0,0,False,False,60
684514756,False,False,,False,False,,,0,0,0,False,False,60
1178498897,False,False,,False,False,,,0,0,0,False,False,60
1668340088,False,False,,False,False,,,0,0,0,False,False,60
-450635801,False,False,,False,False,,,0,0,0,False,False,60
`;const bs=[505496455,-1357906425,-1440053805,1329097317,-1013770159,2127051779,-1632826946,-1855909480,481495292,1551609169,1286554202,1351951642,1765889988,-1495393751,1776760557,-1993346570,-751458770,-1723340146,-2091039911,-2147057861,-1609758240,-17368064,1973114260,-1906799936,-331651461,-1238047163,-1029710921,-1462602185,459840623,-1248669347,1365340297,-1573577293,620400448,1830133512,1724963734,371247235,230540973,-1472471467,-2108088224,1569358344,-60168847,-1941237931,-441525746,591400026,-1628995120,-1380985631,-4737636,1797739089,-13481890,1233091186,-1180623135,642318074,-1486785449,2076966627,-972644436,1551024733,-1339970600,908498444,744277037,531866927,1220439284,668664567,756364626,-648349801,-1506601664,-2100580689,532998682,892856538,-544237849,188952245,1921027834,-770041014,-1448690107,1266458729,1154757341,862493270,-441141351,805530854,-60938940,-63118559,-1813414500,1630557157,-1324288299,-374077567,147181555,31731938,1419995156,34773971,-1424385600,377065033,-483535085,1553046198,1063254979,1732122842,-1936421857,2041631136,949631021,-571205127,-729493805,-272437832,1586911545,1446975727,1139247360,238041352,-1817838704,136867583,-246383526,-1610332021,944301512,-1311702572,-1068749602,1147639502,-71664252,-326328571,-905438738,1807525572,269523389,-1573812073,759552160,385684499,-452101383,-117339838,961148621,-1735137431,-609358791,925796718,-1132411297,1799769627,-1533430406,-965827229,1193867305,-484165118,-1097889139,-117356585,1834063794,-1963699221,-1434800013,-2042103798,44541785,-1201769154,-1507801323,1800865634,-712909563,-1506824829,-1353971407,-101564005,-897970831,-996680732,946079892,1171429989,161402590,739504637,1653145961,434150763,1270423542,-1474018107,380220741,1313469794,-957949759,235423916,314862254,-1291027873,-214921468,-2135829561,-372462424,933445633,-1555334152,1980900762,1855052205,-68388422,-1200192498,-194750543,1911132834,1365126444,-1265562836,-2046940874,-923570273,-488268556,-548432204,-758567246,532701855,-1857890774,-759808e3,1656358740,-262439022,1890408483,639111696,1358522063,221442949,1528688658,2080633647,446555792,938247786,1648733244,-1979922052,-3721951,-34659638,-203679687,-2019409936,209074140,1738351766,624465484,2023704259,723626409,1796077718,230848637,1129858275,-823922901,-214126192,1083874952,1467371088,1860904347,-266993023,2073091578,-469149429,834743908,951367272,1771016910,-2122624266,-404095277,-1949016360,-581219245,-148578487,-1125517450,-233558851,-342718019,286909233,174737401,-679488834,1710403104,1710403103,199496276,310022384,-1425710426,-1807971648,268640447,1199575543,-1451048989,-1820794030,1076426452,871235082,387240739,1159228054,-626547002,359655899,-232172209,-1528441435,564388954,1363960331,-760874610,1823459359,1659152562,477050702,1485375733,-1114059052,-1518462324,-62256073,1636658728,-1260306608,1425494045,-1614041568,-1051912790,1010867759,-720353319,-1997868587,-1920103064,-1235624607,-636342486,-1318523640,-621580281,115181910,976574457,235355384,-699333907,-1055654549,148543530,-1382019219,-1403625488,-1673904972,1752654754,-1748395084,303858729,735786885,-2133205155,-667884240,-697441390,-349733673,1836107598,369884364,-699013948,555321421,-2084684446,-2092567672,595306349,-1210117767,-471813067,-184765154,-707206359,1134699240,-471643137,142298503,-2001861712,-1314508999,785615801,645876063,-916942203,345407921,-509190559,1274763392,965503721,260380903,-89571330,2114150010,143484231,801015432,-557736569,120342736,-1598460622,1377093570,-762638188,-660310536,-2135982034,-1723125645,-315287689,2136474391,783588616,1470180731,-217313684,782648278,-1552572658,-119593913,-379172217,-292467039,-1946127856,1313278365,689268680,-560953757,-1780646993,1150470926,2044081363,-1298525547,119166501,-1992638820,-877630314,744482650,-1696198539,-1835366879,2031496644,1391464545,477535207,923307040,-1090855913,50273892,-70663877,-2123542635,423254987,267288096,29164230,540526865,2000892639,-1688921160,1492264331,-1541798751,-2077197906,-1339944542,-215543585,-182748008,509800268,1436010410,-400359294,-1082709460,-307800946,2095304286,585649337,524986663,-1228506595,-773196462,638034870,-364231730,-121110359,1521405905,-703157650,179021494,-951016989,307023830,-995798081,-896355051,295017434,-733956586,973562672,1314289638,-1094202280,1861256409,-1616825935,1127950131,-1304047988,458216451,494894462,-1383080431,1631244582,239366585,-78023961,269955775,-1677597382,-2146458011,-1873457825,1071144288,116617378,444566625,349483235,-552159415,-1848709278,245231715,-395285279,1154874054,-1000906413,-1809492459,-1374072955,-2137213147,-870467526,825737084,483880621,602693523,1872560572,-940358190,-2070005162,-1673135814,-74499940,1895329114,-1889835507,-380823608,-602487625,-302306254,-1492497486,-771033261,-1082534766,416689423,1595436560,-1985766917,2029957333,1621490890,708507454,684514756,1178498897,1668340088,-450635801,745886540,-5840756,-872135723,-1879606524,-26827118],Cs=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],Ss=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],ce=Ts.trim().split(/\r\n|\n/).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let F;switch(Ss[l]){case"number":F=Number(e[l]);break;case"boolean":F=e[l]==="True";break;case"number[]":e[l]===""?F=[]:F=e[l].split(":").map(t=>Number(t));break;default:F=e[l]}a[Cs[l]]=F}return a}),Je=new Map(bs.map((s,e)=>[s,e]));ce.sort((s,e)=>(Je.get(s.ID)??1/0)-(Je.get(e.ID)??1/0));class ys{constructor(e){C(this,"Staple");C(this,"Tags");C(this,"StapleWhenMissing");C(this,"Appliance");C(this,"IsRemoved");C(this,"Filter");C(this,"DecorationRequired");C(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var se=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(se||{}),he=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(he||{});const Qe={DefaultShoppingTag:892};var Xe=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(Xe||{}),Re=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(Re||{}),ks="39";const Ps=Number(ks);function Ds(s,e){return Math.floor(Math.random()*(e-s))+s}function vs(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?Ds(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const Ms="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of Ms);function we(s){return s.length?s.reduce((e,a)=>e+a,0)/s.length:0}class de{constructor(e,a){C(this,"fixedSeed");C(this,"instance");C(this,"random");typeof e=="string"&&(e=Bs(e)),this.fixedSeed=e,this.instance=a,this.random=new Ze(e+Math.imul(124192293,a))}useSubcontext(e){return new de(this.fixedSeed,124192293*e+this.instance)}}class Ze{constructor(e){C(this,"seed");const a=u=>Math.imul(1812433253,u)+1>>0,l=e>>0,F=a(l),t=a(F),n=a(t);this.seed=[l,F,t,n]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Bs(s){const a=new TextEncoder().encode(s);let l=5381,F=a.length;for(;F--;)l=(l<<5)+l+a[F];return l>>0}function es(s,e,a){return new de(a,s*1231231+e)}var fe=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(fe||{}),x=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(x||{}),ss=(s=>(s[s.Normal=0]="Normal",s[s.Halloween=1]="Halloween",s[s.Christmas=2]="Christmas",s))(ss||{});const Rs={[-1552572658]:1,[-379172217]:1,[-119593913]:1,[-1889835507]:2,[-302306254]:2,[-602487625]:2,[-1380985631]:2,[-380823608]:2,[-4737636]:2};function ws(s){return Rs[s]??0}const Is=[[1,[10,20],[11,17]],[2,[12,10],[12,31]],[2,[1,1],[1,5]]];function Le(s,e,a){return Math.floor((Date.UTC(s,e-1,a)-Date.UTC(s,0,1))/864e5)}function Ns([s,e],[a,l],F){const t=F.getFullYear(),n=Le(t,F.getMonth()+1,F.getDate()),u=Le(t,s,e),o=Le(t,a,l);return u<=n&&n<=o}function As(s=new Date){for(const[e,a,l]of Is)if(Ns(a,l,s))return e;return 0}const xs=As();function as(s){const e=ws(s.ID);return e===ss.Normal||e===xs}const Es=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater"],ls={};for(const s of Es)ls[s]=!0;const Os=ce.filter(s=>(s.IsPurchasable||s.IsPurchasableAsUpgrade)&&as(s)).length;class Hs{constructor(e,a=0,l=!1){C(this,"seed");C(this,"mapSize");C(this,"numTiles");C(this,"baseUpgradeChance");C(this,"januaryRedEnvelopes");C(this,"OwnedAppliances");C(this,"Cards");C(this,"Theme");C(this,"cache",new Map);C(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.januaryRedEnvelopes=l,this.OwnedAppliances=[],this.Cards=[],this.Theme=Re.Null,this.cacheDay=-1}getLayoutInfo(){const a=new de(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,F;switch(a){case 0:F=70,l=2;break;case 4:F=84,l=2;break;case 1:case 5:F=60,l=1;break;case 2:case 6:F=9*13,l=3;break;case 3:case 7:F=12*16,l=4;break;default:throw new Error}return[l,F]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.ID===507410699&&(this.januaryRedEnvelopes=!0),e.UnlockGroup===fe.PrimaryTheme&&(this.Theme=Re[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>ce.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let F=0;F<e.length;F++){const t=e[F];let n=t.blueprintCount;a%5===0&&(n+=3,F===0&&(n+=2)),l+=n*(Os-1+1),t.spawnInside||(l+=Gs(t.playerInside,this.numTiles)),l+=Ps}return l}buildShopOptions(e,a,l){const F=l.some(u=>u.Name==="Couples");let t=[];for(const u of ce)if(!(!u.IsPurchasable&&!u.IsPurchasableAsUpgrade||!as(u))){var n=new ys(u);const f=n.Appliance.Name;(n.Staple==se.NonStaple||n.Staple==se.WhenMissing)&&((n.Tags&he.Basic)>he.None?n.Staple=se.FixedStaple:n.StapleWhenMissing?(f!="Research Desk"&&f!="Blueprint Cabinet"&&f!="Plates"&&console.log(`Unexpected ${f} StapleWhenMissing Appliance`),e.some(i=>i.ID===n.Appliance.ID)?n.Staple=se.NonStaple:n.Staple=se.WhenMissing):F&&f==="Flower Pot"&&(n.Staple=se.BonusStaple));const c=n.Appliance;if(c.SellOnlyAsDuplicate)e.some(i=>i.ID===c.ID)||(n.IsRemoved=!0);else if(c.RequiresForShop.length>0){let i=!1;for(const m of c.RequiresForShop)e.some(k=>k.ID===m)&&(i=!0);n.IsRemoved=!i}else c.SellOnlyAsUnique&&(c.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${c.Name}, ${c.ID}`),e.some(i=>i.ID===c.ID)&&(n.IsRemoved=!0));ls[f]&&l.every(i=>!i.isMain||i.Name==="Tacos")&&(n.IsRemoved=!0),n.Filter==Xe.RefreshableProvider&&(e.some(i=>i.AllowRefreshes)||(n.IsRemoved=!0)),n.DecorationRequired!=Re.Null&&n.DecorationRequired!=a&&(n.IsRemoved=!0),c.RequiresProcessForShop.length>0&&(c.RequiresProcessForShop.some(i=>l.some(m=>m.RequiredProcesses.includes(i)))||(n.IsRemoved=!0)),t.push(n)}return t}initRandom(e){return es(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,F=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let t=e[e.length-1].blueprintCount,n;if(a%5==0){l?t=10:t+=3,n=[];for(let c=0;c<t;c++)n[c]=he.Decoration;if(l)for(const c of[1,2])n[n.length-c]=he.SpecialEvent}else if(e.length>1){n=[];for(let c=0;c<t;c++)n[c]=Qe.DefaultShoppingTag}else{const c=Qe.DefaultShoppingTag,i=Math.max(1,t),m=Math.max(0,Math.min(F.filter(g=>g.Staple!==se.NonStaple&&!g.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),i)),k=Math.max(0,i-m);t=i,n=[];for(let g=0;g<m;g++)n[g]=he.Basic;for(let g=m;g<m+k;g++)n[g]=c}const u=this.initRandom(a).random;let o=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(o)&&this.cache.get(o).length>=t)return this.cache.get(o).slice(0,t);const f=o;for(;o--;)u.value;{const c=[...F],i=[],m=this.getUpgradeChance(a),k=[];for(let g=0;g<t;g++){const T=n[g],D=u.valueFloat<m;vs(c,u);for(let j=0;j<c.length;j++){const H=c[j];if(H.IsRemoved||k.includes(H.Appliance)||!H.MatchesRequestTags(T)||!D&&H.Staple==se.NonStaple&&H.SellAsUpgrade)continue;T!=he.Decoration&&k.push(H.Appliance),i[g]=H.Appliance;break}i[g]==null}return this.cache.set(f,i),i}}getUpgradeChance(e){let a=1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance);return this.januaryRedEnvelopes&&(a=a+(1-a)*.2),a}}function Gs(s,e){return s?e-2:e-1}var zs=`373996608,Ice Cream,1,,934171642,,-1533430406,False,False,5,1,1,1,0,0
-2075899,Breakfast,1,,,-523839730:-1706154991,380220741:925796718,True,False,0,0,3,1,0,0
-1199743580,Breakfast Beans,1,-2075899,,1972879238,1807525572:-957949759,False,False,2,1,0,1,0,0
1436814208,Breakfast Eggs,1,-2075899,,1972879238:2087693779,961148621,False,False,2,1,0,1,0,0
-1998930853,Breakfast Extras,1,-2075899,,2087693779,-712909563:-1097889139,False,False,2,1,0,1,0,0
-1778969928,Burgers,1,,,1972879238,759552160:380220741:385684499,True,False,0,-2,1,1,0,0
965292477,Cheeseburgers,1,-1778969928,,1972879238:2087693779,759552160:380220741:385684499:-117339838,False,False,2,1,0,1,0,0
-1091625127,Fresh Patties,1,-1778969928,,1972879238:2087693779,759552160:380220741:961148621:-484165118,False,False,2,1,0,1,0,0
1298035216,Burger Toppings,1,-1778969928,,1972879238:2087693779,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0,1,0,0
1626323920,Hot Dogs,1,,,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,3,1,0,0
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0,1,0,0
1743900205,Fish,1,,,1972879238,-609358791:380220741:-1735137431,True,False,0,1,3,1,0,0
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238,380220741:925796718:961148621,True,False,1,1,5,1,0,0
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0,1,0,0
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0,1,0,0
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779,380220741,True,False,1,1,3,1,0,0
274986412,Oysters,1,1743900205,,2087693779,380220741,True,False,1,1,3,1,0,0
-643878280,Spiny Fish,1,1743900205,,2087693779,380220741,True,False,1,1,3,1,0,0
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-266993023:-905438738,False,False,5,1,1,1,0,0
-133939790,Pies,1,,,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,5,1,0,0
-1992316049,Mushroom Pies,1,-133939790,,2087693779:1972879238:-523839730,-1097889139:925796718:-266993023,False,False,1,1,0,1,0,0
-1802123036,Vegetable Pies,1,-133939790,,2087693779:1972879238:-523839730,925796718:-266993023:-452101383:-1573812073,False,False,1,1,0,1,0,0
1570910782,Apple Salad,1,1356267749,,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,5,1,0,0
1356267749,Salad,1,,,2087693779,1193867305:-712909563:380220741,True,False,0,-1,1,1,0,0
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,5,1,0,0
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0,1,0,0
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,5,1,0,0
-959076098,Steak,1,,,1972879238,-484165118:380220741,True,False,0,0,3,1,0,0
-953651922,Steak Sauce - Mushroom,1,-959076098,,1972879238:2087693779,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0,1,0,0
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,1972879238,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0,1,0,0
-1192928429,Steak Topping - Mushroom,1,-959076098,,2087693779,-1097889139,False,False,2,1,0,1,0,0
-851525606,Steak Topping - Tomato,1,-959076098,,2087693779,-712909563,False,False,2,1,0,1,0,0
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,5,1,0,0
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,3,1,0,0
-1653221873,Stir Fry,1,,,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,5,1,0,0
-204178430,Steak Stir Fry,1,-1653221873,,2087693779:1972879238,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1,1,0,1,0,0
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1,1,0,0
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,1,1,0,0
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1,1,0,0
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,1,1,0,0
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,1,1,0,0
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,1,1,0,0
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,1,1,0,0
550743424,Pizza,1,,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,3,1,0,0
1434421325,Mushroom Pizza,1,550743424,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0,1,0,0
-2071275506,Onion Pizza,1,550743424,,2087693779:-1706154991:-523839730,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0,1,0,0
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3,1,1,1,0,0
1642577536,Herd Mentality,0,,,,,False,False,6,0,0,1,0,0
-1737101581,Health and Safety,0,,,,,False,False,6,0,0,1,0,0
-2040314977,Picky Eaters,0,,,,,False,False,6,0,0,1,0,0
73422455,Tipping Culture,0,,,,,False,False,6,0,0,1,0,0
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3,1,1,1,0,0
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718,False,False,5,1,1,1,0,0
1393945424,Pumpkin Seed,1,,,1972879238,-1055654549,False,True,4,1,1,1,0,0
1984233383,Pumpkin Soup,1,,,1972879238,-266993023:-2042103798:-1055654549:-957949759,False,True,4,1,1,1,0,0
1838568431,Trick - Nasty Nightmares,6,,,,,False,False,6,1,0,1,0,0
61056284,Trick - Risky Reservations,6,,,,,False,False,6,1,0,1,0,0
2112990883,Trick - Freak Fires,6,,,,,False,False,6,2,0,1,0,0
-1477157706,Trick - Mysterious Messes,6,,,,,False,False,6,1,0,1,0,0
-209485820,Trick - Dark Deliberations,6,,,,,False,False,6,1,0,1,0,0
83673522,Trick - Spooky Solos,6,,,,,False,False,6,1,0,1,0,0
1139286658,Trick - Pyro Patrons,6,,,,,False,False,6,2,0,1,0,0
79859072,Trick - Cowardly Customers,6,,,,,False,False,6,1,0,1,0,0
-2123879305,Trick - Full of Friends,6,,,,,False,False,6,1,0,1,0,0
-1895806374,Trick - Grand Gesture,6,,,,,False,False,6,1,0,1,0,0
-269971294,Trick - Frightful Fluff,6,,,,,False,False,6,1,0,1,0,0
1892828942,Trick - Immortal Impatience,6,,,,,False,False,6,2,0,1,0,0
524188336,Trick - Foggy Food,6,,,,,False,False,6,1,0,1,0,0
797208634,Trick - Vanishing Valuables,6,,,,,False,False,6,1,0,1,0,0
561747534,Trick - Careful Conveyance,6,,,,,False,False,6,1,0,1,0,0
-1921275517,Trick - Tiring Times,6,,,,,False,False,6,1,0,1,0,0
319209671,Community,6,,,,,False,False,6,1,0,1,0,0
536093200,Nut Roast,1,1551533879,,2087693779:-1706154991,1834063794:380220741:-2042103798,True,False,1,1,3,1,0,0
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1,1,0,0
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,1,1,0,0
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,1,1,0,0
12170609,Cherry Pies,1,,,1972879238,148543530:925796718:-266993023,False,False,5,1,1,1,0,0
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1,1,0,0
1551533879,Turkey,1,,,-1706154991,-1506824829:380220741,True,False,0,1,3,1,0,0
-361249036,Christmas Rush,6,,,,,False,False,6,0,0,1,0,0
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,1,1,0,0
1398180456,Turkey - Cranberry Sauce,1,1551533879,,2087693779,735786885:-2133205155,False,False,2,1,0,1,0,0
-1460640973,Turkey - Gravy,1,1551533879,,1972879238,-2042103798:-957949759:-266993023,False,False,2,1,0,1,0,0
-1243742384,Turkey - Stuffing,1,1551533879,,2087693779:1972879238:-523839730,-2042103798:925796718:-266993023,False,False,2,2,0,1,0,0
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0,1,0,0
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,1,1,0,0
-437161441,Bamboo Stir Fry,1,-1653221873,,2087693779:1972879238,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1,1,0,1,0,0
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0,1,0,0
367917843,Dumplings,1,,,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,5,1,0,0
137627410,Seaweed,1,367917843,,1972879238,595306349,False,False,2,1,0,1,0,0
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,1,1,0,0
1642878331,Mushroom Stir Fry,1,-1653221873,,2087693779:1972879238,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1,1,0,1,0,0
1064343768,Stir Fry - Soy Sauce,1,-1653221873,,,-471813067,False,False,2,1,0,1,0,0
-2106646073,Couples,6,,,,,False,False,6,0,0,1,0,0
2028238661,Double Dates,0,-2106646073,,,,False,False,6,0,0,1,0,0
587399881,First Dates,0,-2106646073,,,,False,False,6,0,0,1,0,0
251686519,Double Brew,0,746549422,,,,False,False,6,0,0,1,0,0
2079359756,Slow Brew Coffee,1,746549422:16318784,,,,False,False,6,0,0,1,0,0
1103885337,Cake Stand,1,16318784:16318784,,,143484231,False,False,2,1,0,1,0,0
16318784,Coffee,1,,,-1316622579,-1609758240,False,False,0,-2,1,1,0,0
-740215310,Extra Milk,1,16318784,,,120342736,False,False,2,1,0,1,0,0
-696561631,Extra Sugar,1,16318784,,,-2133205155,False,False,2,1,0,1,0,0
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,2,1,1,1,0,0
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,2,1,1,1,0,0
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023,False,False,2,1,1,1,0,0
1316998108,Sponge Cake,1,1113735761,,-1706154991:-523839730,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,3,1,0,0
1609120418,Brownies,1,1113735761,,-1706154991:-523839730,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,1,1,0,0
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,1,1,0,0
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,1,1,0,0
627241196,Cupcake,1,1113735761,,-1706154991:-523839730,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,3,1,0,0
-1166412657,Doughnut,1,1113735761,,-523839730:1972879238,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,3,1,0,0
1113735761,Cakes,1,,,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,1,1,0,0
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,5,1,0,0
803049136,Lasagne,1,-1501485763:1651927267,,-1706154991:1972879238:-523839730,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,5,1,0,0
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,5,1,0,0
675343178,Tacos - Cheese,1,506626805,,2087693779,-117339838,False,False,2,1,0,1,0,0
-2122069505,Tacos - Lettuce,1,506626805,,2087693779,1193867305,False,False,2,1,0,1,0,0
706991842,Tacos - Onion,1,506626805,,2087693779,-2042103798,False,False,2,1,0,1,0,0
-1656665053,Tacos - Tomato,1,506626805,,2087693779,-712909563,False,False,2,1,0,1,0,0
2055765569,Double Helpings,0,-347199069,,,,False,False,6,1,0,1,0,0
-347199069,All You Can Eat,0,,,,,False,False,6,2,0,1,0,0
233335391,Personalised Waiting,0,,,,,False,False,6,0,0,1,0,0
-1815978981,Closing Time?,0,,,,,False,False,6,0,0,1,0,0
-287956430,Leisurely Eating,0,,,,,False,False,6,1,0,1,0,0
220354841,Sedate Atmosphere,0,,,,,False,False,6,0,0,1,0,0
-37551439,Dinner Rush,0,,1958825350,,,False,False,6,0,0,1,0,0
-2112255403,Flexible Dining,0,-1183014556,,,,False,False,6,0,0,1,0,0
-1747821833,Individual Dining,0,,-1183014556,,,False,False,6,0,0,1,0,0
-523195599,Large Groups,0,-1183014556,,,,False,False,6,0,0,1,0,0
-1183014556,Medium Groups,0,,-1747821833,,,False,False,6,0,0,1,0,0
165138001,Photographic Memory,0,,,,,False,False,6,0,0,1,0,0
-28708234,Empathy,0,,,,,False,False,6,0,0,1,0,0
-1617744928,Blindfolded Chefs,0,,,,,False,False,6,0,0,1,0,0
1530184692,Instant Service,0,,1989028383:746549422,,,False,False,6,0,0,1,0,0
113582858,Discounts,0,,,,,False,False,6,0,0,1,0,0
-913531466,Victorian Standards,0,,,,,False,False,6,0,0,1,0,0
-53330922,Lunch Rush,0,,1958825350,,,False,False,6,0,0,1,0,0
-491994319,Splash Zone,0,,,,,False,False,6,0,0,1,0,0
1151685289,Relaxed Atmosphere,0,,,,,False,False,6,0,0,1,0,0
73387665,Advertising,0,1765310572,,,,False,False,6,0,0,1,0,0
1765310572,Advertising,0,,,,,False,False,6,0,0,1,0,0
2079763934,Morning Rush,0,,1958825350,,,False,False,6,0,0,1,0,0
1914014233,Simplicity,0,,,,,False,False,6,0,0,1,0,0
-534291083,High Expectations,0,,,,,False,False,6,0,0,1,0,0
-957080051,High Standards,0,,1356267749,,,False,False,6,0,0,1,0,0
1103452725,High Quality,0,,,,,False,False,6,0,0,1,0,0
-1857686620,Affordable,3,,,,,False,False,6,0,0,1,0,0
1293847744,Charming,3,,,,,False,False,6,0,0,1,0,0
-1323758054,Exclusive,3,,,,,False,False,6,0,0,1,0,0
-1641333859,Formal,3,,,,,False,False,6,0,0,1,0,0
409052852,Variety,5,,319209671:16318784,,,False,False,6,0,0,1,0,1
-1205203705,Careful Accounting,5,,,,,False,False,6,-2,0,1,0,0
-947047181,Mandatory Tips,5,,,,,False,False,6,-2,0,1,0,0
1298492736,Grabber,5,,,,,False,False,6,-2,0,1,0,0
1173444265,Wash Basin,5,,,,,False,False,6,-2,0,1,0,0
-1096314451,Savings,5,,,,,False,False,6,-2,0,1,0,0
2022427578,Reincarnation,5,,,,,False,False,6,-2,0,1,0,0
-401283600,Preparation Time,5,,,,,False,False,6,-2,0,1,0,0
-357483693,Double Homework,5,,,,,False,False,6,-2,0,1,0,0
868780472,Catalogue,5,,,,,False,False,6,-2,0,1,0,0
-1418317596,Coupons,5,,,,,False,False,6,-2,0,1,0,0
-98765415,Supplier Error,5,,,,,False,False,6,-2,0,1,0,0
1618418478,Bootstrapping,5,,,,,False,False,6,-2,0,1,0,0
1543829883,Second Helpings,5,,,,,False,False,6,-2,0,1,0,0
-1010143518,Loyal Customer,5,,,,,False,False,6,-2,0,1,0,0
-1269806478,High Tech Suppliers,5,,,,,False,False,6,-2,0,1,0,0
1818403570,Conveyors,5,,,,,False,False,6,-2,0,1,0,0
-1121427945,Coffee Tables,5,,,,,False,False,6,-2,0,1,0,0
1101419251,Floor Protectors,5,,,,,False,False,6,-2,0,1,0,0
-220105135,Flower Pots,5,,,,,False,False,6,-2,0,1,0,0
-178381693,Metal Table,5,,,,,False,False,6,0,0,1,0,0
-373772933,Simple Cloth Table,5,,,,,False,False,6,0,0,1,0,0
-85470894,Black Coffee,1,,,-1316622579,,False,False,5,1,1,0,0,0
-1528287489,,0,,,2087693779:1972879238:-523839730,,True,False,0,0,1,0,0,0
670300431,,0,,,1972879238,,False,False,0,0,0,0,0,0
-95393944,Ice Cream - Bananas,1,,,,,False,False,5,1,0,0,0,0
-81988936,Ice Cream - Nuts,1,,,,,False,False,5,1,0,0,0,0
2105828628,Ice Cream - Strawberry,1,,,,,False,False,5,1,0,0,0,0
-2072924167,Treat - Cute Customers,6,,,,,False,False,6,0,0,0,0,0
942723993,Treat - Blueprint Boom,6,,,,,False,False,6,0,0,0,0,0
-1086090066,Treat - Affordable Aesthetic,6,,-1857686620:-1086090066:761584062:5738470:898820513,,,False,False,6,0,0,0,0,0
761584062,Treat - Charming Character,6,,1293847744:-1086090066:761584062:5738470:898820513,,,False,False,6,0,0,0,0,0
5738470,Treat - Exclusive Extravagance,6,,-1323758054:-1086090066:761584062:5738470:898820513,,,False,False,6,0,0,0,0,0
898820513,Treat - Fancy Feelings,6,,-1641333859:-1086090066:761584062:5738470:898820513,,,False,False,6,0,0,0,0,0
-1728887993,Treat - Wonderful Windfall,6,,,,,False,False,6,0,0,0,0,0
-1839415999,Trick - Spatial Scares,6,,,,,False,False,6,1,0,0,0,0
-241426865,Trick - Burning Books,6,,,,,False,False,6,1,0,0,0,0
-338554380,Sweetcorn,1,,,,,False,False,3,1,0,0,0,0
-1409566802,Dessert Waffles,1,,,,,False,False,5,1,0,0,0,0
1491215862,Flower Pots,6,,,,,False,False,6,0,0,0,0,0
1958825350,Turbo,6,,,,,False,False,6,0,0,0,0,0
746549422,Coffee Shop,6,,,,,False,False,6,0,0,0,0,0
-1115351824,Cake Batter,1,,,,,False,False,0,0,0,0,0,0
-1081939710,Cake Flavour - Chocolate,1,,,1972879238,,False,False,0,1,0,0,0,0
1902212503,Cookies,1,,,-1706154991:-523839730,,False,False,0,-1,1,0,0,0
-192521877,Enchantment,6,,,,,False,False,6,0,0,0,0,0
1764920765,Spaghetti,1,,,1972879238:2087693779,,True,False,0,1,3,1,0,0
-1974675533,Spaghetti II: Extra Starch,1,,,,,False,False,0,0,2,0,0,0
1411587046,Spaghetti I: Traditional Recipe,1,,,,,False,False,0,-1,1,0,0,0
-1889522844,Easy Street,6,,,,,False,False,6,0,0,0,0,0
-1542554250,Friendly Faces,6,,,,,False,False,6,0,0,0,0,0
1134277391,Purrvana,6,,,,,False,False,6,0,0,0,0,0
-1409140412,Overheat 5,6,,,,,False,False,6,0,0,0,0,0
1358714374,Overheating,6,,,,,False,False,6,-1,0,0,0,0
118281906,Hot Desking,6,,,,,False,False,6,-1,0,0,0,0
-1636036373,Friction Burns,6,,,,,False,False,6,-1,0,0,0,0
-1280757615,Hotheads,6,,,,,False,False,6,-1,0,0,0,0
1382681650,Second Bite,6,,,,,False,False,6,-1,0,0,0,0
1510465155,Customer Crowds,6,,,,,False,False,6,-1,0,0,0,0
1898278106,Health Concerns,6,,,,,False,False,6,0,0,0,0,0
1901536762,Popularity Crisis,6,,,,,False,False,6,0,0,0,0,0
737629539,Flaming Knives,6,,,,,False,False,6,0,0,0,0,0
-2134682523,Soft Touch,6,,,,,False,False,6,0,0,0,0,0
2137249839,Elephant Queues,6,,,,,False,False,6,0,0,0,0,0
-43856987,Rented Restaurants,6,,,,,False,False,6,0,0,0,0,0
421796067,Ends and Beginnings,6,,,,,False,False,6,-2,0,0,0,0
1299515713,Shaky Foundations,6,,,,,False,False,6,0,0,0,0,0
-1128294925,Dubious Desks,6,,,,,False,False,6,0,0,0,0,0
-823626125,Fajitas - Bell Peppers,1,544487102,,2087693779,,False,False,2,1,0,1,0,0
-525525407,Fajitas - Cheese,1,544487102,,2087693779,,False,False,2,1,0,1,0,0
-780950614,Fajitas - Onion,1,544487102,,2087693779,,False,False,2,1,0,1,0,0
-960612653,Fajitas - Crema,1,544487102,,2087693779,,False,False,2,1,0,1,0,0
-1315816541,Fajitas - Guacamole,1,544487102:-1438205860,,2087693779,,False,False,2,2,0,1,0,0
-1438205860,Fajitas - Salsa,1,544487102,,2087693779,,False,False,2,2,0,1,0,0
693878802,Fajitas - Tomato,1,544487102,,2087693779,,False,False,2,1,0,1,0,0
544487102,Fajitas,1,,,1972879238,,True,False,0,0,1,1,0,0
-1451591918,Sundaes II: Homemade,1,,,-523839730:-1853370850,,False,False,2,2,4,0,0,0
620309357,Sundaes I: Scoops,1,,,,,False,False,2,1,4,0,0,0
934171642,Sundaes,1,,373996608,,,False,False,0,0,2,1,0,0
-690833761,Giant Sundaes,1,934171642,,,,False,False,5,1,3,1,0,0
431260200,Sundae Syrups,1,934171642,,,,False,False,2,1,2,1,0,0
1879652468,Sundae Toppings,1,934171642,,2087693779,,False,False,2,1,3,1,0,0
-1272159363,Sandwiches,1,,,2087693779:-523839730:-1706154991,,True,False,0,1,3,1,0,0
641008296,Club Sandwiches,1,-72176411:-778718372,,,,True,False,2,2,3,1,0,0
-1795285445,Giant Sandwiches,1,-1272159363,,,,True,False,2,2,1,1,0,0
-72176411,Toast Sandwich,1,-1272159363,,-1706154991,,True,False,2,1,3,1,0,0
-469306490,Sandwich - Cheese,1,-1272159363,,2087693779,,False,False,2,1,0,1,0,0
525953646,Sandwich - Eggs,1,-1272159363,,2087693779:1972879238,,False,False,2,1,0,1,0,0
-778718372,Sandwich - Mayo,1,-1272159363,,2087693779:-523839730,,False,False,2,1,0,1,0,0
368792675,Sandwich - Toppers,1,-1272159363,,,,False,False,2,1,0,1,0,0
1989028383,Banquet Dining,6,,,,,False,False,6,0,0,0,0,0
-2066052899,Christmas Treats,6,,,,,False,False,6,0,0,0,0,0
506626805,Tacos,1,,,1972879238,,True,False,0,-1,1,1,0,0
-1690048134,Variety,5,,319209671:16318784,,,False,False,6,0,0,1,1,1
2026578658,Variety,5,,319209671:16318784,,,False,False,6,0,0,1,2,1
-437866401,Variety,5,,319209671:16318784,,,False,False,6,0,0,1,3,1
-1122993754,Variety,5,,319209671:16318784,,,False,False,6,0,0,1,4,1
-1189327033,Variety,5,,319209671:16318784,,,False,False,6,0,0,1,5,1
1366303950,Variety,5,,,,,False,False,6,0,0,0,2,0
779560009,Renown,5,,,,,False,False,6,0,0,0,2,0
337471011,Expansion,5,,,,,False,False,6,0,0,0,0,0
1197914155,Discount,5,,,,,False,False,6,0,0,0,0,0
-1641150757,Simplicity,5,,,,,False,False,6,0,0,0,0,0
686050224,Focus,5,,,,,False,False,6,0,0,0,0,0
-760406109,Quality,5,,,,,False,False,6,0,0,0,0,0
-771711089,Variety,5,,,,,False,False,6,0,0,0,0,1
840658034,Renown,5,,,,,False,False,6,0,0,0,0,1
965426081,Expectation,5,,,,,False,False,6,0,0,0,0,1
-1586319402,Variety,5,,,,,False,False,6,0,0,0,1,1
-1893812821,Renown,5,,,,,False,False,6,0,0,0,1,1
1689349004,Expectation,5,,,,,False,False,6,0,0,0,1,1
`,Ls=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,3
1356267749,Salad,1,2087693779,1193867305:-712909563:380220741,True,False,0,-1,1
550743424,Pizza,1,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,3
367917843,Dumplings,1,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,5
16318784,Coffee,1,-1316622579,-1609758240,False,False,0,-2,1
-1778969928,Burgers,1,1972879238,759552160:380220741:385684499,True,False,0,-2,1
1551533879,Turkey,1,-1706154991,-1506824829:380220741,True,False,0,1,3
-133939790,Pies,1,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,5
1113735761,Cakes,1,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,1
1764920765,Spaghetti,1,1972879238:2087693779,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,3
1743900205,Fish,1,1972879238,-609358791:380220741:-1735137431,True,False,0,1,3
506626805,Tacos,1,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1
1626323920,Hot Dogs,1,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,3
-2075899,Breakfast,1,-523839730:-1706154991,380220741:925796718,True,False,0,0,3
-1653221873,Stir Fry,1,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,5
-85470894,Black Coffee,1,-1316622579,,False,False,5,1,1
373996608,Ice Cream,1,,,False,False,5,1,1
-211821608,Apple Pies,1,2087693779:1972879238:-523839730,,False,False,5,1,1
1380953991,Broccoli,1,1972879238,,False,True,3,1,1
-520693398,Chips,1,1972879238:2087693779,,False,True,3,1,1
364243605,Mashed Potato,1,1972879238:2087693779,,False,True,3,1,1
2012685115,Carrot Soup,1,1972879238,,False,True,4,1,1
-997241706,Meat Soup,1,1972879238,,False,True,4,1,1
-233806503,Tomato Soup,1,1972879238:2087693779,,False,True,4,1,1
312770813,Cheese Board,1,2087693779,,False,False,5,1,1
-1745179096,Onion Rings,1,1972879238:2087693779,,False,True,3,1,1
1168007081,Corn on the Cob,1,1972879238,,False,True,3,1,1
-95393944,Ice Cream - Bananas,1,,,False,False,5,1,0
-81988936,Ice Cream - Nuts,1,,,False,False,5,1,0
2105828628,Ice Cream - Strawberry,1,,,False,False,5,1,0
400765800,Pumpkin Pies,1,2087693779:1972879238:-523839730,,False,False,5,1,1
1393945424,Pumpkin Seed,1,1972879238,,False,True,4,1,1
1984233383,Pumpkin Soup,1,1972879238,,False,True,4,1,1
1847735819,Bread,1,1972879238,,False,True,4,1,1
-1015158173,Broccoli Cheese Soup,1,1972879238,,False,True,4,1,1
12170609,Cherry Pies,1,1972879238,,False,False,5,1,1
-1289628495,Roast Potato,1,1972879238,,False,True,3,1,1
-338554380,Sweetcorn,1,,,False,False,3,1,0
-1409566802,Dessert Waffles,1,,,False,False,5,1,0
-1742801708,Bamboo,1,1972879238,,False,True,3,1,1
1696424557,Mandarin Starter,1,,,False,True,4,1,1
-1115351824,Cake Batter,1,,,False,False,0,0,0
-1081939710,Cake Flavour - Chocolate,1,1972879238,,False,False,0,1,0
1902212503,Cookies,1,-1706154991:-523839730,,False,False,0,-1,1
-1974675533,Spaghetti II: Extra Starch,1,,,False,False,0,0,2
1411587046,Spaghetti I: Traditional Recipe,1,,,False,False,0,-1,1
544487102,Fajitas,1,1972879238,,True,False,0,0,1
-1451591918,Sundaes II: Homemade,1,-523839730:-1853370850,,False,False,2,2,4
620309357,Sundaes I: Scoops,1,,,False,False,2,1,4
934171642,Sundaes,1,,,False,False,0,0,2
-1272159363,Sandwiches,1,2087693779:-523839730:-1706154991,,True,False,0,1,3
`;const Pe=zs.trim().split(/\r\n|\n/).filter(s=>s).map(s=>{var ye,ne;const[e,a,l,F,t,n,u,o,f,c,i,m,k,g,T]=s.split(","),b=Number(e),D=Number(l),j=F!=null&&F.length?F.split(":").map(E=>Number(E)):[],H=t.length?t.split(":").map(E=>Number(E)):[],_=n!=null&&n.length?(ye=n==null?void 0:n.split(":"))==null?void 0:ye.map(E=>Number(E)):[],S=u!=null&&u.length?(ne=u==null?void 0:u.split(":"))==null?void 0:ne.map(E=>Number(E)):[],Fe=o==="True",X=f==="True",K=Number(c),Ae=Number(i),Ue=Number(m),xe=k==="1",ge=Number(g);return{ID:b,Name:a,UnlockGroup:D,Requires:j,BlockedBy:H,RequiredProcesses:_,IngredientProviders:S,isMain:Fe,isStarterOrSide:X,DishType:K,CustomerMultiplier:Ae,DishValue:Ue,IsUnlockable:xe,MinimumFranchiseTier:ge,IsSpecificFranchiseTier:T==="1"}}),qs=[...[{ID:447437163,Name:"Country",UnlockGroup:fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:x.Null,CustomerMultiplier:0,DishValue:0,IsUnlockable:!0,MinimumFranchiseTier:0,IsSpecificFranchiseTier:!1},{ID:2002876295,Name:"City",UnlockGroup:fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:x.Null,CustomerMultiplier:0,DishValue:0,IsUnlockable:!0,MinimumFranchiseTier:0,IsSpecificFranchiseTier:!1},{ID:-1864906012,Name:"Alpine",UnlockGroup:fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:x.Null,CustomerMultiplier:0,DishValue:0,IsUnlockable:!0,MinimumFranchiseTier:0,IsSpecificFranchiseTier:!1},Pe.filter(s=>s.Name==="Community")[0],Pe.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:x.Null,CustomerMultiplier:0,DishValue:0,IsUnlockable:!0,MinimumFranchiseTier:0,IsSpecificFranchiseTier:!1},Pe.filter(s=>s.Name==="Christmas Rush")[0],{ID:507410699,Name:"January",UnlockGroup:fe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:x.Null,CustomerMultiplier:0,DishValue:0,IsUnlockable:!0,MinimumFranchiseTier:0,IsSpecificFranchiseTier:!1}]].sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey","Fajitas","Sundaes"].map(s=>Pe.filter(e=>e.Name===s)[0]),Ls.trim().split(/\r\n|\n/).filter(s=>s).map(s=>{var _,S;const[e,a,l,F,t,n,u,o,f,c]=s.split(","),i=Number(e),m=Number(l),k=F!=null&&F.length?(_=F==null?void 0:F.split(":"))==null?void 0:_.map(Fe=>Number(Fe)):[],g=t!=null&&t.length?(S=t==null?void 0:t.split(":"))==null?void 0:S.map(Fe=>Number(Fe)):[],T=n==="True",b=u==="True",D=Number(o),j=Number(f),H=Number(c);return{ID:i,Name:a,UnlockGroup:m,Requires:[],BlockedBy:[],RequiredProcesses:k,IngredientProviders:g,isMain:T,isStarterOrSide:b,DishType:D,CustomerMultiplier:j,DishValue:H,IsUnlockable:!0,MinimumFranchiseTier:0,IsSpecificFranchiseTier:!1}}).sort((s,e)=>s.Name<e.Name?-1:1);const js=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Us=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],Ie={};function le(s){return Ie[s]===void 0&&(Ie[s]=ce.filter(e=>e.Name===s)[0]),Ie[s]===void 0&&console.error(`Could not find ${s} appliance`),Ie[s]}const Vs=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function De(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=s.actionHistory.filter(l=>l==="spawn OI"||l==="spawn OO").length*3,e+=s.actionHistory.reduce((l,F)=>{var t;return F.includes("take ")?l+3+Number((t=F.match(/(\d+)/))==null?void 0:t[0]):l},0),e+=a.goalsPurchased+a.substitutesPurchased;return e}function qe(s,e){return(a,l)=>{const F=a.achieved[e],t=l.achieved[e],n=Math.min(F.goalsPurchased,s);let o=Math.min(t.goalsPurchased,s)-n;return o===0?F.goalsPurchased>=s||F.goalsPurchased+F.substitutesPurchased>=s&&t.goalsPurchased+t.substitutesPurchased>=s?F.goalsPurchased+F.substitutesPurchased-(t.goalsPurchased+t.substitutesPurchased):t.substitutesPurchased-F.substitutesPurchased:o}}const Fs={"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,"Smart Grabber":2};function $s(s,e,a,l,F=!0,t=Us,n=js,u=()=>{}){var os,us,cs,hs;let o={},f=[];const c=[],i=new Array(l.length).fill(0).map(()=>({})),m={};let k=0,g=0;const T={},b=e.some(p=>p.Name==="Turbo"),D=[];let j=[],H=0;const _={};for(const p of l){for(const d of p){const{goal:v,number:I,substitutes:A,skipMissing:P=!1}=d;for(const R of A)m[R]=v;_[v]?P||(_[v].number+=I):(_[v]={...d},P&&(_[v].number=0));for(let R=0;R<=H;R++){if(i[R]===void 0)debugger;i[R][v]?i[R][v].number+=I:i[R][v]={...d}}for(let R=H+1;R<i.length;R++){if(i[R]===void 0)debugger;i[R][v]||(i[R][v]={...d,number:0})}P||(g+=le(v).PurchaseCost*I*(b?.5:1))}try{c.push(JSON.parse(JSON.stringify(_)))}catch{console.log(i),console.log(i[0]);debugger}H++}const S=i[0],Fe=Object.values(S).sort((p,d)=>le(p.goal).PurchaseCost-le(d.goal).PurchaseCost).map(p=>p.goal);o=c.shift();for(const p of Object.values(S)){const{goal:d,number:v}=p;T[d]={...p,substitutesPurchased:0,goalsPurchased:0},p.goal!=="Starter Bin"&&(D.push(qe(v,d)),j.push(qe(v,d)))}const X=new J([],[...D,(p,d)=>d.money-p.money,(p,d)=>De(p)-De(d),(p,d)=>p.actionHistory.length-d.actionHistory.length,(p,d)=>p.cumulativeRerolls-d.cumulativeRerolls,(p,d)=>(p.day+1)%5?p.upgradesInProgress-d.upgradesInProgress:0]),K=b?7:5,Ae=[{spawnInside:!0,blueprintCount:K},{spawnInside:!1,playerInside:!1,blueprintCount:K}];F||Ae.push({spawnInside:!1,playerInside:!0,blueprintCount:K});const Ue=[{spawnInside:!0,blueprintCount:K},{spawnInside:!1,playerInside:!0,blueprintCount:K},{spawnInside:!1,playerInside:!1,blueprintCount:K}];function xe(p,d,v){const I={...p};for(const A of Object.values(d)){const P=A.goal;I[P]={...I[P]},P==="Copying Desk"&&(I[P].goalsPurchased+=I[P].substitutesPurchased,I[P].substitutesPurchased=0),I[P].goalsPurchased+=A.goalsPurchased,v&&(I[P].substitutesPurchased+=A.substitutesPurchased)}return I}let ge=[];function Ve(p,d,v,I=!1){var V,M,w,$,Y,h,r,N,ae,me,Q,O,Te,be,G,re,$e,Oe,te,ve;const A=d.fodderUsed,P=Object.values(d.achieved).some(y=>y.substitutesPurchased)&&!((V=d.achieved["Research Desk"])!=null&&V.goalsPurchased),R=d.actionHistory.at(-1)==="buy Blueprint Cabinet"&&((M=d.actionHistory.at(-2))!=null&&M.includes("reroll"))?1:0;e:for(const y of p){if(P&&!ts&&!((w=y.achieved["Research Desk"])!=null&&w.goalsPurchased))continue;let We=1+(y.achieved["Copying Desk"].goalsPurchased?1:0);const ds=y.achieved["Blueprint Cabinet"].goalsPurchased;let ie=ds;if(ie-=f.length,ie-=y.upgradesInProgress,ie*=We,ie<0||ie<A)continue;let fs=y.cumulativeRerolls+d.cumulativeRerolls,Me=fs*(fs+1)/2*10+y.applianceCosts;const _e=d.actionHistory.length?xe(y.achieved,d.achieved,!1):y.achieved,q=d.actionHistory.length?xe(y.achieved,d.achieved,!0):y.achieved,Be=Ws(o,_e);if(E<=0&&Be>0||d.cumulativeRerolls&&Me>L)continue;let Ce=0,Se=0,gs=[],He=0,Ke=1;const Ye=q["Blueprint Cabinet"].goalsPurchased-f.length-R,ps=(($=y.achieved["Discount Desk"])==null?void 0:$.goalsPurchased)??0+((Y=y.achieved["Discount Desk"])==null?void 0:Y.substitutesPurchased)??0?.5:1;{let W=L-Me;for(const Z of Fe){const z=d.achieved[Z];W-=z.goalsPurchased*le(z.goal).PurchaseCost*(b?.5:1)*ps;let ms=!1;(W<0||z.substitutesPurchased)&&(z.goal==="Copying Desk"&&Se&&(Se=0,He--),ms=!0,W<0&&(Ce+=z.goalsPurchased),Ce+=z.substitutesPurchased,z.substitutesPurchased&&(He++,Fs[z.goal]&&(Ke*=Fs[z.goal]))),(z.goal==="Metal Table"||z.goal==="Grabber - Rotating"||z.goal==="Portioner"||z.goal==="Grabber")&&z.goalsPurchased+z.substitutesPurchased&&q[Z].goalsPurchased+q[Z].substitutesPurchased<q[Z].number&&(y.achieved["Copying Desk"].goalsPurchased||q["Copying Desk"].goalsPurchased&&W>60)&&(ms||Se++,Se++,gs.push(z.goal),He++)}if(Ce>Ye)continue e}Me+=d.applianceCosts*ps;let ke=100,Ge=B>1?160:100,ze=50;switch(((h=q==null?void 0:q.Portioner)==null?void 0:h.goalsPurchased)??0){case 0:break;case 1:ke*=.75;break;case 2:default:switch(ke/=4,(((r=q["Grabber - Rotating"])==null?void 0:r.goalsPurchased)+((N=q.Grabber)==null?void 0:N.goalsPurchased)+((ae=y.achieved["Grabber - Rotating"])==null?void 0:ae.substitutesPurchased)+((me=y.achieved.Grabber)==null?void 0:me.substitutesPurchased))*((Q=y.achieved["Copying Desk"])==null?void 0:Q.goalsPurchased)){case 0:break;default:ke/=2}break}switch(((O=_e["Danger Hob"])==null?void 0:O.goalsPurchased)+((Te=_e["Danger Hob"])==null?void 0:Te.substitutesPurchased)&&(ke*=.75),((be=q["Scrubbing Brush"])==null?void 0:be.goalsPurchased)??0){case 0:break;case 1:default:ze/=3}switch(Math.max((((G=y.achieved["Power Sink"])==null?void 0:G.goalsPurchased)??0)+(((re=y.achieved["Power Sink"])==null?void 0:re.substitutesPurchased)??0),(($e=q["Power Sink"])==null?void 0:$e.goalsPurchased)??0)){case 0:break;case 1:default:ze/=2/.75}{let W=B<6?(((Oe=q["Table - Fancy Cloth"])==null?void 0:Oe.goalsPurchased)??0)+1:0;switch(B){case 1:case 2:case 3:break;case 4:W++;break;case 5:W+=2;break;case 6:default:W+=4;break}Ge/=W}B>=5&&(Ge/=2);const aa=y.deskTime+(Ke-1)*20+Math.max(0,A-ds)*5*((te=y.achieved["Clipboard Stand"])!=null&&te.goalsPurchased?.5:1)+(He*Ke*5+(n[d.day]??n.at(-1)??0))*((ve=q["Clipboard Stand"])!=null&&ve.goalsPurchased?.5:1)+Math.max(ke+ze,Ge)+ke+ze+Ge,oe={...d,rerollConfigs:[...y.rerollConfigs,d.rerollConfigs],achieved:q,money:L-Me,actionHistory:[...y.actionHistory,...d.actionHistory],upgradesInProgress:Ce,cumulativeRerolls:y.cumulativeRerolls+d.cumulativeRerolls,applianceCosts:y.applianceCosts+d.applianceCosts,deskTime:aa};if(!(Ce>Ye)){if(Se&&(Se===1||Ce+1<=Ye))for(const W of gs)oe.upgradesInProgress+=Se,q[W].goalsPurchased++,oe.actionHistory.push(`copy ${W}`),oe.applianceCosts+=30;if(oe.money>=0&&(!oe.upgradesInProgress||c.length)){if(Be<E&&(E=Be,console.log(`best so far missing ${Be} pieces `+Ne(oe,L))),Be<=0){if(X.add(oe)){is();continue}}else if(E<=0)continue}if(ie>k&&(k=ie),I){const W=y.cumulativeRerolls;for(let Z=0;Z<=ie;Z++)ge[Z]===void 0&&(ge[Z]=new J([],Vs)),ge[Z].add([W,Me]);continue}v.add(oe)}}return E}const ye={...T};ye["Blueprint Cabinet"]={...ye["Blueprint Cabinet"],goalsPurchased:1};const ne=new J([{achieved:ye,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...D,(p,d)=>p.applianceCosts-d.applianceCosts,(p,d)=>p.cumulativeRerolls-d.cumulativeRerolls]);let E=1/0,B=0,L=0;const U=new Hs(s),Ee=["Research Desk","Plates"];let ts=!1,pe=[];{const p=["Booking Desk","Blueprint Cabinet"];ce.filter(d=>p.includes(d.Name)).forEach(d=>U.OwnedAppliances.push(d))}for(const p of e)U.addCard(p);function sa(p,d,v){let I=[{...p}],A=[],P=[];const R=JSON.parse(JSON.stringify(p.achieved));for(const V of d){let M=V.Name,w=R[M],$=!1;if(!w||w.goalsPurchased>=i[0][M].number){if(w=R[m[V.Name]],!w)continue;$=!0,M=m[V.Name]}if(!($&&w.goalsPurchased+w.substitutesPurchased>=i[0][M].number)&&!(w.goalsPurchased>=i[0][M].number)){M==="Table - Fancy Cloth"&&($=!1),$?w.substitutesPurchased++:w.goalsPurchased++;{const Y=h=>{const r={...h};r.achieved={...r.achieved},r.numFloor--,r.achieved[M]={...r.achieved[M],goalsPurchased:r.achieved[M].goalsPurchased+($?0:1),substitutesPurchased:r.achieved[M].substitutesPurchased+($?1:0)};const N=M==="Starter Bin"||M==="Table - Fancy Cloth"?le(V.Name).PurchaseCost:Math.max(le(V.Name).PurchaseCost,le(M).PurchaseCost);return r.applianceCosts+=N*(b?.5:1),r.actionHistory=[...r.actionHistory,`buy ${V.Name}`+($?` for ${M}`:"")],M==="Starter Bin"&&(r.fodderPurchases=[...r.fodderPurchases],r.fodderPurchases[1]++,r.achieved[M].substitutesPurchased--),r};if(M!=="Starter Bin"){const h=I.map(Y),r=A.map(Y),N=P.map(Y);I=h.concat(I),A=r.concat(A),P=N.concat(P),h.forEach(v)}else A=A.concat(P),P=(P.length?P:I).map(Y)}}}return I.concat(A).concat(P)}for(;E;){let p=ne.array;ne.clear();const d=new J([],[...j,(h,r)=>h.cumulativeRerolls-r.cumulativeRerolls,(h,r)=>h.applianceCosts-r.applianceCosts]);if(L+=t[B]??t.at(-1)??0,B++,B>14&&(b||!a.length)){debugger;break}if(B>1&&p.length===0){debugger;break}p.sort((h,r)=>De(h)-De(r)),console.log(`fastest so far: ${Ne(p[0],L)}`),p.every(h=>h.achieved["Copying Desk"].goalsPurchased)&&(f=f.map(h=>(L-=60/2,h-1)),f=f.filter(h=>h>0));let v=5,I=.5*60*1e3;const A=Math.min(v-1,1/0);if(L>=g){const h=Math.sqrt((L-g)/10*2);console.log(`Have ${L} on day ${B}, need ${g} to buy everything. Allows for ~${h} rerolls across all days`)}B%5||(v=1);let P;(b||B===5||!(B%3))&&(P=a.shift());const R=Pe.filter(h=>h.Name===P)[0];U.handleNewCardSpawnEffects(R);const V=U.getAppliances([{spawnInside:!0,blueprintCount:K}],B);U.handleNewCardRerollEffects(R);let M=[];if(Ee.length)for(let h=Ee.length-1;h>=0;h--){let r=V.length;for(;r--;){const N=V[r];if(N.Name===Ee[h]){if(console.log(`buying ${N.Name} on day ${B}`),L-p.reduce((me,Q)=>Math.min(me,Q.applianceCosts+10/2*(Q.cumulativeRerolls+1)*Q.cumulativeRerolls),1/0)<N.PurchaseCost*(b?.5:1)){console.log("not enough money-- skip for now");continue}pe.push(N),Ee.splice(h,1),L-=N.PurchaseCost*(b?.5:1),V.splice(r,1);break}}M=pe.map(N=>`Buy ${N.Name}`)}let w=new J([{day:B,rerollConfigs:[],achieved:{...T},numFloor:K,fodderAvailable:k,fodderUsed:0,money:L,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(h,r)=>U.getPrngAdvancements(h.rerollConfigs,B)-U.getPrngAdvancements(r.rerollConfigs,B),(h,r)=>-U.getPrngAdvancements(h.rerollConfigs,B)+U.getPrngAdvancements(r.rerollConfigs,B),...j,(h,r)=>h.cumulativeRerolls-r.cumulativeRerolls,(h,r)=>h.applianceCosts-r.applianceCosts,(h,r)=>r.numFloor+r.fodderAvailable-h.numFloor+h.fodderAvailable,(h,r)=>h.numFloor-r.numFloor]);Ve(p,w.array[0],ne,!0);let $=1/0;const Y=ge.map(h=>h.array.reduce((r,[N,ae])=>Math.min(r,ae+w.array[0].rerollConfigs.length*(N+1)*10),1/0));e:for(;v--&&(pe.length&&((us=(os=w.array[0])==null?void 0:os.rerollConfigs)==null?void 0:us.length)===1&&(pe.some(r=>r.Name==="Research Desk")&&(ts=!0),U.OwnedAppliances.push(...pe),pe=[],M=[]),$=Date.now()+I,w.array[0]!==void 0);){console.log(`Seed ${s} Day ${B} Reroll ${w.array[0].rerollConfigs.length} expanding ${w.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:Y});const h=w.array;if(!c.length&&E<=0){const r=h[0].rerollConfigs.length;if(r*((r+1)/2)*10+g>L){console.log("get me outta here!");break}}w.clear();for(const r of h){if(Date.now()>$){w.array.sort((Te,be)=>-1*(Te.applianceCosts-be.applianceCosts));continue e}if(r.numFloor+r.fodderAvailable===0||r.money<r.rerollConfigs.length*10)continue;let N=0;if(Y[0]>r.money)continue;for(let O=1;O<Y.length;O++)if(N++,Y[O]>r.money){N=O-1;break}let ae=A<r.rerollConfigs.length?r.numFloor:r.rerollConfigs.length?r.numFloor+Math.min(r.fodderAvailable,N-r.fodderUsed):K;{let O=r.actionHistory.length;for(;O--&&!r.actionHistory[O].includes("reroll");)if(r.actionHistory[O].includes("Starter Bin")){ae=r.numFloor;break}}const me=A<r.rerollConfigs.length?r.numFloor:r.rerollConfigs.length?Math.max(1,r.numFloor):K;let Q;r.rerollConfigs.length===0?Q=Ue:A<r.rerollConfigs.length?Q=[r.rerollConfigs.at(-1)]:Q=Ae,U.getAppliances([...r.rerollConfigs,{spawnInside:!0,blueprintCount:ae}],r.day);for(const O of Q){const Te=G=>{if(!w.add(G)||!d.add(G))return;G.fodderPurchases[0]+G.fodderPurchases[1]||Ve(p,G,ne)},be=[me];for(let G=ae;G>me;G--)be.push(G);for(const G of be){const re=[...r.rerollConfigs,{...O,blueprintCount:G}],Oe=[...re.length===1?V:U.getAppliances(re,r.day)].sort((y,We)=>y.PurchaseCost-We.PurchaseCost),te=G-r.numFloor;if(te>r.fodderAvailable)debugger;const ve={...r,fodderPurchases:[r.fodderPurchases[1],0],money:r.money-r.rerollConfigs.length*10,rerollConfigs:re,numFloor:re.length===1?G-pe.length:G,fodderAvailable:r.fodderAvailable-te,fodderUsed:r.fodderUsed+te,cumulativeRerolls:r.rerollConfigs.length?r.cumulativeRerolls+1:0,actionHistory:r.rerollConfigs.length?[...r.actionHistory,`${te?`take ${te} out, `:""}reroll ${O.spawnInside?"I":O.playerInside?"OI":"OO"}`]:[`day ${r.day} spawn`,`spawn ${O.spawnInside?"I":O.playerInside?"OI":"OO"}`,...M]};if(Te(ve),sa(ve,Oe,Te),Date.now()>$)break}}}}if(U.addCard(R),E<=0){if(!c.length){X.array.sort((h,r)=>h.deskTime-r.deskTime),u((E<=0?`full build on ${s} by day ${B}: 
`:"")+X.array.map(h=>Ne(h,L)).join(`
`));break}{const h=(((cs=c[0]["Blueprint Cabinet"])==null?void 0:cs.number)??0)-(((hs=o["Blueprint Cabinet"])==null?void 0:hs.number)??0);if(h+f.length>2)debugger;for(let r=0;r<h;r++)f.push(1)}for(const h of Object.values(o))h.number&&U.OwnedAppliances.push(le(h.goal));o=c.shift(),i.shift(),j=[];for(const{goal:h,number:r}of Object.values(i[0]))j.push(qe(r,h));E=1/0,ge=[],is(!0),ne.array=X.array,X.clear(),X.objectiveFunctions}}return B;function is(p=!1){u(`tier ${l.length-c.length-(p?1:0)} build on ${s} by day ${B}${p?"":" (Partial)"}: 
`+X.array.slice(0,100).map(d=>Ne(d,L)).join(`
`))}}function Ws(s,e){let a=0;for(const l of Object.values(s)){let F=l.number;a+=Math.max(0,F-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function Ne(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${De(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")}const je={};function _s(s){const{starters:e,main:a,doubleOrderChance:l,desserts:F,sides:t,groupSizes:n}=s,u=[e,a,l,F,n].join("|");if(je[u])return je[u];let o=[0,0,0],f=[0,0,0,0],c=1-.75**t;if(e>0){o[0]=1;let g=1-.75**e;l===.5&&(g*=1.25,c*=1.25),f[0]=n.reduce((T,b)=>T+1+(b-1)*g,0)}const i=n.reduce((g,T)=>g+T);a&&(o[1]=1,f[1]=i),F>0&&(f[2]=i,a?(o[2]=1-.75**F,l===.5&&(o[2]*=1.25)):o[2]=1);let m=1;e>0&&(o[0]*=1+l,m*=1-l,f[0]*=o[0]),a&&(o[1]*=1+m*l,m*=1-l,f[1]*=o[1],f[3]=f[1]*c),F>0&&(o[2]*=1+m*l,m*=1-l,f[2]*=o[2]);const k=[o,f];return je[u]=k,k}function Ks(s){const{starters:e,main:a,doubleOrderChance:l,desserts:F,sides:t,groupSizes:n}=s;let u=[0,0,0],o=[0,0,0,0],f=1-.75**e,c=1-.75**F,i=1-.75**t;l===.5&&(f*=1.25,c*=1.25,i*=1.25);const m=b=>{u[0]++,o[0]++;for(let D=0;D<b-1;D++)Math.random()<f&&o[0]++},k=b=>{u[1]++,o[1]+=b;for(let D=0;D<b;D++)Math.random()<i&&o[3]++},g=b=>{u[2]++,o[2]+=b};for(const b of n){let D=!1;e>0&&(m(b),!D&&Math.random()<l&&(D=!0,m(b))),k(b),!D&&Math.random()<l&&(D=!0,k(b)),F>0&&Math.random()<c&&(g(b),!D&&Math.random()<l&&(D=!0,g(b)))}return[u,o]}const Ys={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4};class Js{constructor(e,a=[],l=[]){C(this,"seed");C(this,"mapSize");C(this,"frontDoor");C(this,"startingCards");C(this,"cards");C(this,"playerCount");C(this,"turbo");C(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=Ys[this.mapSize],this.turbo=this.startingCards.some(F=>{if(F===void 0){console.log({startingCards:a});debugger}return F.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let F=!1,t=!1,n=0,u=[],o=[],f=0,c=[],i=0,m=[];for(const S of a)switch(S.Name==="All You Can Eat"&&(F=!0),S.Name==="Double Helpings"&&(t=!0),S.DishType){case x.Dessert:f++,S.DishValue&&c.push(S.DishValue);break;case x.Starter:S.DishValue&&u.push(S.DishValue),n++;break;case x.Side:S.DishValue&&m.push(S.DishValue),i++;break;case x.Main:case x.Base:S.Name==="Tacos"?(o.push(2),o.push(3)):S.DishValue&&o.push(S.DishValue)}let k=t?.5:F?.25:0,g=[0,0,0,0];if(g[0]=we(u),g[1]=we(o),g[2]=we(c),g[3]=we(m),t)for(let S=0;S<3;S++)g[S]&&(g[S]+=3);const[T,b]=_s({starters:n,main:!!g[1],doubleOrderChance:k,desserts:f,sides:i,groupSizes:l});let D=0;for(let S=0;S<b.length;S++)D+=b[S]*g[S];const j=ns(this.playerCount),H=this.getBookingDeskCount(e),_=this.getBookingDeskMoney(e);return j*(D+H*_)}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let F=!1,t=!1,n=[[],[],[],[]];for(const T of a)switch(T.Name==="All You Can Eat"&&(F=!0),T.Name==="Double Helpings"&&(t=!0),T.DishType){case x.Dessert:T.DishValue&&n[2].push(T.DishValue);break;case x.Starter:T.DishValue&&n[0].push(T.DishValue);break;case x.Side:T.DishValue&&n[3].push(T.DishValue);break;case x.Main:case x.Base:T.Name==="Tacos"?(n[1].push(2),n[1].push(3)):T.DishValue&&n[1].push(T.DishValue)}let u=t?.5:F?.25:0,o=0;t&&(o+=3);const[f,c]=Ks({starters:n[0].length,main:!!n[1].length,doubleOrderChance:u,desserts:n[2].length,sides:n[3].length,groupSizes:l});let i=0;for(let T=0;T<c.length;T++){let b=c[T];for(;b--;)T<3&&(i+=o),i+=n[T][Math.floor(Math.random()*n[T].length)]}const m=ns(this.playerCount),k=this.getBookingDeskCount(e),g=this.getBookingDeskMoney(e);return m*(i+k*g)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(f=>f.Name==="Herd Mentality"))return Math.min(l,3)+1;const F=[],t=this.getCardsByDay(e);let n=1;(this.turbo||t.some(f=>f.Name==="Morning Rush"))&&(F.push(.2),n++),(this.turbo||t.some(f=>f.Name==="Lunch Rush"))&&(F.push(.5),n++),(this.turbo||t.some(f=>f.Name==="Dinner Rush"))&&(F.push(.8),n++);const u=a/this.getDayLength(e),o=.1/l;for(let f=1;f<l;f++){const c=f/l,i=c-o-u,m=c+o+u;let k=!1;for(const g of F)if(i<=g&&m>=g){k=!0;break}k||n++}return n}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(n=>n.Name==="Closing Time?").length*.2,F=this.getExpectedGroupSize(e),t=a*(1+l)/F;return Math.ceil(t)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=es(1997821,e,this.seed).random,l=this.getNonRushGroupCount(e),F=this.getCardsByDay(e).some(m=>m.Name==="Herd Mentality");let t=l,n=[],[u,o]=this.getGroupSizeRange(e);{let m=t-1;for(;m--;)a.value}for(;t--;)n.push(a.range(u,o+1)),!F&&t!==l-1&&a.value;let f=this.turbo?3:this.getCardsByDay(e).filter(m=>m.Name.includes(" Rush")).length;const c=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let i=f*c;for(;i--;)n.push(a.range(u,o+1));return n}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const F of this.getCardsByDay(e))switch(F.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const t=Math.floor((e-1)/3);a+=t,l+=t;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),F=this.getPlayerModifier(),t=this.getCourseModifier(e),n=this.getDayRate(e),u=this.getCustomersPerHour(e),o=this.getAdvertisingModifier(e);return .85**a*(l/25*n*F)/t*u*o}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(F=>F.DishType===x.Dessert||F.Name==="Black Coffee"||F.Name==="Cakes")&&(a+=.25),l.some(F=>F.DishType===x.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,F)=>l+F.CustomerMultiplier,0)}getMapSize(){const a=new de(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new de(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,F;switch(a){case 0:F=70,l=2;break;case 4:F=84,l=2;break;case 1:case 5:F=60,l=1;break;case 2:case 6:F=9*13,l=3;break;case 3:case 7:F=12*16,l=4;break;default:throw new Error}return[l,F]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new Ze(new de(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function ns(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Qs(s,e,a,l){let F=[],t=[];const n=s.cards.slice(e);let u=new Js(s.seed,a,n);u.playerCount=l;for(let o=1;o<=15;o++)F.push(u.guessMoney(o)),t.push(u.getBookingDeskCount(o));return F[0]+=u.guessMoney(0),{expectedMoneyByDay:F,expectedBookingDesksByDay:t}}var rs=self;function Xs(s){rs.postMessage(s)}const Zs=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],ea=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:ce.filter(s=>!Zs.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];rs.onmessage=s=>{let{config:e,tiers:a,playerCount:l}=s.data;for(;!a.at(-1).length;)a.pop();const F=[...ea],t=a.flatMap(i=>i.flatMap(m=>[m.goal,...m.substitutes])),n=F.length-1;F[n].substitutes=F[n].substitutes.filter(i=>!t.some(m=>i===m)),a[a.length-1].push(...F);const u=e.cards.filter(i=>qs.some(m=>m.Name===i.Name)).length+1,o=e.cards.slice(0,u);let{expectedMoneyByDay:f,expectedBookingDesksByDay:c}=Qs(e,u,o,l);$s(e.seed,o,e.cards.slice(u).map(i=>i.Name),a,e.solo,f,c,Xs)}})();
