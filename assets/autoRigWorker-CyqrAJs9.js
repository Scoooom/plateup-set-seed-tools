var ca=Object.defineProperty;var ha=(me,Pe,Ie)=>Pe in me?ca(me,Pe,{enumerable:!0,configurable:!0,writable:!0,value:Ie}):me[Pe]=Ie;var x=(me,Pe,Ie)=>ha(me,typeof Pe!="symbol"?Pe+"":Pe,Ie);(function(){"use strict";var Cs;class me{constructor(e,l){x(this,"array");x(this,"objectiveFunctions");this.array=Pe(e,l),this.objectiveFunctions=l}clear(){this.array=[]}add(e){let l=this.array.length;for(;l--;){let{better:a,worse:r}=Ie(e,this.array[l],this.objectiveFunctions);if(r)return!1;a&&this.array.splice(l,1)}return this.array.push(e),!0}}function Pe(s,e){if(!s.length)return s;const l=[...s];let a=[];a.push(l.pop());e:for(;l.length;){const r=l.pop();let F=a.length;for(;F--;){let{better:i,worse:g}=Ie(r,a[F],e);if(g)continue e;i&&a.splice(F,1)}a.push(r)}return a}function Ie(s,e,l){let a=!0,r=!0,F=0;for(;(a||r)&&F<l.length;){const i=l[F](s,e);i<0?r=!1:i>0&&(a=!1),F++}return{better:a,worse:r}}var Ns=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60,-1357906425\r
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
`;const Is=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost","Upgrades"],As=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number","number[]"],Qe=Ns.trim().split(`\r
`).map(s=>{const e=s.split(",");let l={};for(let a=0;a<e.length;a++){let r;switch(As[a]){case"number":r=Number(e[a]);break;case"boolean":r=e[a]==="True";break;case"number[]":e[a]===""?r=[]:r=e[a].split(":").map(F=>Number(F));break;default:r=e[a]}l[Is[a]]=r}return l});class xs{constructor(e){x(this,"Staple");x(this,"Tags");x(this,"StapleWhenMissing");x(this,"Appliance");x(this,"IsRemoved");x(this,"Filter");x(this,"DecorationRequired");x(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var fe=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(fe||{}),oe=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(oe||{});const Le={DefaultShoppingTag:892};var os=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(os||{}),Ze=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(Ze||{});const ls=new Map,rs=new Map;for(const s of Qe)ls.set(s.ID,s),rs.set(s.Name,s);const ve=new Map,Os=new Map,Hs=new Map;{let s=!0;const e=Qe.filter(a=>a.Upgrades.length);for(const a of e)for(const r of a.Upgrades)ve.has(r)||ve.set(r,new Set),(Cs=ve.get(r))==null||Cs.add(a.ID);for(;s;){s=!1;for(const[a,r]of ve){const F=r.size;for(const i of r)for(const g of ve.get(i)??[])r.add(g);F!==r.size&&(s=!0)}}for(const[a,r]of ve)r.delete(a),Hs.set(a,Array.from(r));const l=Array.from(ve.entries()).map(a=>{var r;return`${(r=ls.get(a[0]))==null?void 0:r.Name}:${Array.from(a[1]).map(F=>{var i;return(i=ls.get(F))==null?void 0:i.Name}).join(", ")}`});for(const a of ve)Os.set(a[0],Array.from(a[1]));console.log(l)}Qe.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,e)=>s.Name<e.Name?1:-1);const Me=Qe;var Es="38";const us=Number(Es);function Vs(s,e){return Math.floor(Math.random()*(e-s))+s}function ts(s,e){let l=s.length;for(;l-- >1;){let a=e===void 0?Vs(0,l+1):e.range(0,l+1);[s[l],s[a]]=[s[a],s[l]]}return s}const qs="12345678",zs="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of zs);for(const s of qs);function De(s){return s.length?s.reduce((e,l)=>e+l,0)/s.length:0}class Ae{constructor(e,l){x(this,"fixedSeed");x(this,"instance");x(this,"random");typeof e=="string"&&(e=Ls(e)),this.fixedSeed=e,this.instance=l,this.random=new ns(e+Math.imul(124192293,l))}useSubcontext(e){return new Ae(this.fixedSeed,124192293*e+this.instance)}}class ns{constructor(e){x(this,"seed");const l=g=>Math.imul(1812433253,g)+1>>0,a=e>>0,r=l(a),F=l(r),i=l(F);this.seed=[a,r,F,i]}get value(){let e=this.seed.shift(),l=this.seed[2];return e^=e<<11,e^=e>>>8,l^=l>>>19,l=(l^e)>>0,this.seed.push(l),l}range(e,l){return(this.value>>>0)%(l-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Ls(s){const l=new TextEncoder().encode(s);let a=5381,r=l.length;for(;r--;)a=(a<<5)+a+l[r];return a>>0}function cs(s,e,l){return new Ae(l,s*1231231+e)}var xe=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(xe||{}),z=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(z||{});const Us=["Auto Plater","Dish Rack","Plates","Dish Washer"],hs={},fs=rs.get("Sink");for(const s of Us)hs[s]=!0;const ps=Me.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length,Gs=["Blueprint Cabinet","Booking Desk"].map(s=>Me.filter(e=>e.Name===s)[0]);class $s{constructor(e,l=0){x(this,"seed");x(this,"mapSize");x(this,"numTiles");x(this,"baseUpgradeChance");x(this,"OwnedAppliances");x(this,"Cards");x(this,"Theme");x(this,"extraSpawns");x(this,"cache",new Array(15).fill(0).map(()=>new Map));x(this,"cacheOverridePlated");x(this,"cacheOverrideProcesses");x(this,"baseSpawnCount");x(this,"newestCard");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=l,this.OwnedAppliances=[...Gs],this.Cards=[],this.Theme=Ze.Null,this.baseSpawnCount=5,this.extraSpawns=[]}clearCache(){}getLayoutInfo(){const l=new Ae(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"?(this.baseUpgradeChance=.25,this.baseSpawnCount=7):e.Name==="Christmas Rush"&&(this.extraSpawns=[rs.get("Conveyor")]),e.Name==="Lake"&&(this.baseUpgradeChance=.2),e.UnlockGroup===xe.PrimaryTheme&&(this.Theme=Ze[e.Name]),this.newestCard=e)}handleNewestRerollEffects(){this.handleNewCardRerollEffects(this.newestCard)}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(l=>Me.filter(a=>a.ID===l))))}addCard(e){var l;e!==void 0&&(((l=this.newestCard)==null?void 0:l.ID)===e.ID&&(this.newestCard=void 0),this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}_getNetPrngAdvancements(e,l,a){let r=0,F=e.blueprintCount;return l%5===0&&(F+=8-this.baseSpawnCount,a&&(F+=2)),r+=F*(ps-1+1),e.spawnInside||(r+=ds(e.playerInside,this.numTiles)),r+=us,r}getPrngAdvancements(e,l){let a=0;for(let r=0;r<e.length;r++){const F=e[r];let i=F.blueprintCount;l%5===0&&(i+=8-this.baseSpawnCount,r===0&&(i+=2)),a+=i*(ps-1+1),F.spawnInside||(a+=ds(F.playerInside,this.numTiles)),a+=us}return a}buildShopOptions(e,l,a,r,F){const i=a.some(o=>o.Name==="Couples");let g=[];for(const o of Me)if(!(!o.IsPurchasable&&!o.IsPurchasableAsUpgrade)){var t=new xs(o);const P=t.Appliance.Name;(t.Staple==fe.NonStaple||t.Staple==fe.WhenMissing)&&((t.Tags&oe.Basic)>oe.None?t.Staple=fe.FixedStaple:t.StapleWhenMissing?(P!="Research Desk"&&P!="Blueprint Cabinet"&&P!="Plates"&&console.log(`Unexpected ${P} StapleWhenMissing Appliance`),e.some(n=>n.ID===t.Appliance.ID)?t.Staple=fe.NonStaple:t.Staple=fe.WhenMissing):i&&P==="Flower Pot"&&(t.Staple=fe.BonusStaple));const p=t.Appliance;e:{if(p.SellOnlyAsDuplicate){if(!e.some(n=>n.ID===p.ID)){t.IsRemoved=!0;break e}}else if(p.RequiresForShop.length>0){let n=!1;for(const u of p.RequiresForShop)e.some(d=>d.ID===u)&&(n=!0);if(!n){t.IsRemoved=!0;break e}}else if(p.SellOnlyAsUnique&&(p.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${p.Name}, ${p.ID}`),e.some(n=>n.ID===p.ID))){t.IsRemoved=!0;break e}if(hs[P]&&(r??a.every(n=>!n.isMain||n.Name==="Tacos"||n.Name==="Sandwiches"))){t.IsRemoved=!0;break e}if(t.Filter==os.RefreshableProvider&&!e.some(n=>n.AllowRefreshes)){t.IsRemoved=!0;break e}if(t.DecorationRequired!=Ze.Null&&t.DecorationRequired!=l){t.IsRemoved=!0;break e}if(p.RequiresProcessForShop.length>0||p===fs){let n=!0;if(p===fs&&a.some(u=>u.IngredientProviders.includes(-266993023))&&(n=!1),p.RequiresProcessForShop.length>0&&(F?p.RequiresProcessForShop.some(u=>F.includes(u)):p.RequiresProcessForShop.some(u=>a.some(d=>d.RequiredProcesses.includes(u))))&&(n=!1),n){t.IsRemoved=!0;break e}}}g.push(t)}return g}initRandom(e){return cs(823828,e,this.seed)}getAppliances(e,l,a,r){var p;(a!==this.cacheOverridePlated||(r==null?void 0:r.length)!==((p=this.cacheOverrideProcesses)==null?void 0:p.length)||r!=null&&r.some((n,u)=>{var d;return n!==((d=this.cacheOverrideProcesses)==null?void 0:d[u])}))&&(this.cacheOverridePlated=a,this.cacheOverrideProcesses=r,this.cache.forEach(n=>n.clear()));const F=e.length===1,i=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let g=e[e.length-1].blueprintCount,t;if(l%5==0){F?g=10:g+=8-this.baseSpawnCount,t=[];for(let n=0;n<g;n++)t[n]=oe.Decoration;if(F)for(const n of[1,2])t[t.length-n]=oe.SpecialEvent}else if(e.length>1){t=[];for(let n=0;n<g;n++)t[n]=Le.DefaultShoppingTag}else{const n=Le.DefaultShoppingTag,u=Math.max(1,g),d=Math.max(0,Math.min(i.filter(b=>b.Staple!==fe.NonStaple&&!b.IsRemoved).length,Math.max(2,4-Math.floor(l/5)),u)),S=Math.max(0,u-d);g=u,t=[];for(let b=0;b<d;b++)t[b]=oe.Basic;for(let b=d;b<d+S;b++)t[b]=n}const o=this.initRandom(l).random;let c=this.getPrngAdvancements(e.slice(0,e.length-1),l);if(this.cache[l].has(c)&&this.cache[l].get(c).length>=g)return this.cache[l].get(c).slice(0,g);const P=c;for(;c--;)o.value;{const n=[...i],u=[],d=this.getUpgradeChance(l),S=[];for(let b=0;b<g;b++){const G=t[b],Y=o.valueFloat<d;ts(n,o);for(let I=0;I<n.length;I++){const V=n[I];if(V.IsRemoved||S.includes(V.Appliance)||!V.MatchesRequestTags(G)||!Y&&V.Staple==fe.NonStaple&&V.SellAsUpgrade)continue;G!=oe.Decoration&&S.push(V.Appliance),u[b]=V.Appliance;break}u[b]==null}return e.length===1&&u.splice(0,0,...this.extraSpawns),this.cache[l].set(P,u),u}}_getAllAppliances(e,l,a,r){const F=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let i,g;if(l%5==0)i=[],g=oe.Decoration;else if(e)g=Le.DefaultShoppingTag,i=[];else{const o=Le.DefaultShoppingTag,c=Math.max(0,Math.min(F.filter(P=>P.Staple!==fe.NonStaple&&!P.IsRemoved).length,Math.max(2,4-Math.floor(l/5))));i=[];for(let P=0;P<c;P++)i[P]=oe.Basic;g=o}const t=this.initRandom(l).random;for(;e--;)t.value;{const o=[...F],c=[],P=this.getUpgradeChance(l),p=[];let n=-1;for(;;){n++;let u=i.shift();u===void 0&&(u=g);const S=t.valueFloat<P;ts(o,t);for(let b=0;b<o.length;b++){const G=o[b];if(G.IsRemoved||p.includes(G.Appliance)||!G.MatchesRequestTags(u)||!S&&G.Staple==fe.NonStaple&&G.SellAsUpgrade)continue;u!=oe.Decoration&&p.push(G.Appliance),c[n]=G.Appliance;break}if(c[n]==null)break}return c}}_getAppliances(e,l,a,r,F){var p;(r!==this.cacheOverridePlated||(F==null?void 0:F.length)!==((p=this.cacheOverrideProcesses)==null?void 0:p.length)||F!=null&&F.some((n,u)=>{var d;return n!==((d=this.cacheOverrideProcesses)==null?void 0:d[u])}))&&(this.cacheOverridePlated=r,this.cacheOverrideProcesses=F,this.cache.forEach(n=>n.clear()));const i=e===0,g=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,r,F);let t=l.blueprintCount,o;if(a%5==0){i?t=10:t+=8-this.baseSpawnCount,o=[];for(let n=0;n<t;n++)o[n]=oe.Decoration;if(i)for(const n of[1,2])o[o.length-n]=oe.SpecialEvent}else if(e){o=[];for(let n=0;n<t;n++)o[n]=Le.DefaultShoppingTag}else{const n=Le.DefaultShoppingTag,u=Math.max(1,t),d=Math.max(0,Math.min(g.filter(b=>b.Staple!==fe.NonStaple&&!b.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),u)),S=Math.max(0,u-d);t=u,o=[];for(let b=0;b<d;b++)o[b]=oe.Basic;for(let b=d;b<d+S;b++)o[b]=n}const c=this.initRandom(a).random;if(this.cache[a].has(e)&&this.cache[a].get(e).length>=t+(e?0:this.extraSpawns.length))return this.cache[a].get(e).slice(0,t);const P=e;for(;e--;)c.value;{const n=[...g],u=[],d=this.getUpgradeChance(a),S=[];for(let b=0;b<t;b++){const G=o[b],Y=c.valueFloat<d;ts(n,c);for(let I=0;I<n.length;I++){const V=n[I];if(V.IsRemoved||S.includes(V.Appliance)||!V.MatchesRequestTags(G)||!Y&&V.Staple==fe.NonStaple&&V.SellAsUpgrade)continue;G!=oe.Decoration&&S.push(V.Appliance),u[b]=V.Appliance;break}u[b]==null}return e||u.splice(0,0,...this.extraSpawns),this.cache[a].set(P,u),u}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function ds(s,e){return s?e-2:e-1}var js=`373996608,Ice Cream,1,,934171642,,-1533430406,False,False,5,1,2\r
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
`,Ws=`-959076098,Steak,1,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
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
`;const Ue=js.trim().split(/\r?\n/).filter(s=>s).map(s=>{var we,ae;const[e,l,a,r,F,i,g,t,o,c,P,p]=s.split(","),n=Number(e),u=Number(a),d=r!=null&&r.length?r.split(":").map(J=>Number(J)):[],S=F.length?F.split(":").map(J=>Number(J)):[],b=i!=null&&i.length?(we=i==null?void 0:i.split(":"))==null?void 0:we.map(J=>Number(J)):[],G=g!=null&&g.length?(ae=g==null?void 0:g.split(":"))==null?void 0:ae.map(J=>Number(J)):[],te=t==="True",Y=o==="True",I=Number(c),V=Number(P),ue=Number(p);return{ID:n,Name:l,UnlockGroup:u,Requires:d,BlockedBy:S,RequiredProcesses:b,IngredientProviders:G,isMain:te,isStarterOrSide:Y,DishType:I,CustomerMultiplier:V,DishValue:ue}}),gs=[...[{ID:447437163,Name:"Country",UnlockGroup:xe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:z.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:xe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:z.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:xe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:z.Null,CustomerMultiplier:0,DishValue:0},Ue.filter(s=>s.Name==="Community")[0],Ue.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:xe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:z.Null,CustomerMultiplier:0,DishValue:0},Ue.filter(s=>s.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:xe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:z.Null,CustomerMultiplier:0,DishValue:0}]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey","Sundaes"].map(s=>Ue.filter(e=>e.Name===s)[0]);const _s=Ws.trim().split(`\r
`).filter(s=>s).map(s=>{var Y,I;const[e,l,a,r,F,i,g,t,o,c]=s.split(","),P=Number(e),p=Number(a),n=r!=null&&r.length?(Y=r==null?void 0:r.split(":"))==null?void 0:Y.map(V=>Number(V)):[],u=F!=null&&F.length?(I=F==null?void 0:F.split(":"))==null?void 0:I.map(V=>Number(V)):[],d=i==="True",S=g==="True",b=Number(t),G=Number(o),te=Number(c);return{ID:P,Name:l,UnlockGroup:p,Requires:[],BlockedBy:[],RequiredProcesses:n,IngredientProviders:u,isMain:d,isStarterOrSide:S,DishType:b,CustomerMultiplier:G,DishValue:te}}).sort((s,e)=>s.Name<e.Name?-1:1),de={};for(const s of Ue)de[s.Name]=s;for(const s of _s)de[s.Name]=s;for(const s of gs)de[s.Name]=s;de.Coffee=de["Black Coffee"],de.Community.AKA="Autumn",de["Christmas Rush"].AKA="North Pole",de.Couples.AKA="Romantic",de["Cherry Pie"]=de["Cherry Pies"],de["Mushroom Pie"]=de["Mushroom Pies"];const Ks=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Ys=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],je={};function Be(s){if(je[s]===void 0)switch(je[s]=Me.filter(e=>e.Name===s)[0],s){case"Display Stand":je[s].PurchaseCost=120*2;break}if(je[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return je[s]}const Js=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function We(s){let e=0;return(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime),e+=s.actionHistory.length,e+=s.cumulativeRerolls*2,e+=s.actionHistory.reduce((l,a)=>{var r;return a.includes("take ")?l+3+Number((r=a.match(/(\d+)/))==null?void 0:r[0]):l},0),e}function _e(s,e,l=!1){return(a,r)=>{const F=a.achieved[e],i=r.achieved[e],g=Math.min(F.goalsPurchased,s),t=Math.min(i.goalsPurchased,s),o=Math.min(F.goalsPurchased+F.substitutesPurchased,s),c=Math.min(i.goalsPurchased+i.substitutesPurchased,s),P=Math.min(o,c)>=s;let p=c-o;return P&&p===0&&(p=F.goalsPurchased+F.substitutesPurchased-(i.goalsPurchased+i.substitutesPurchased)),p===0&&(p=(l?1:-1)*(g-t)),p===0&&a.deskTime!==void 0&&(p=a.deskTime-r.deskTime),p}}const Qs={Oven:0,"Brownie Tray":4,"Prep Station":0,Workstation:2,"Sharp Knife":0,"Scrubbing Brush":0,Mince:15,"Cake Tin":15,"Discount Desk":1,"Copying Desk":1,"Metal Table":4,"Power Sink":0,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":1,"Safety Hob":2,"Grabber - Rotating":2,Grabber:1,"Smart Grabber":3,Freezer:2,Bin:0,Conveyor:0},Zs=[6,6,7,4,6,6,7,8,11,8,7,11,10,7,11];function Xs(s,e,l,a,r=!0,F=Ys,i=Ks,g=Zs,t=()=>{},o=15){var ys,Ps,Ms;let c={};const P=[],p=new Array(a.length).fill(0).map(()=>({})),n={};let u=0,d=0;const S={},b=e.some(m=>m.Name==="Turbo"),G=e.some(m=>m.Name==="Lake"),te=[(m,h)=>h.fps-m.fps||m.deskTime-h.deskTime,(m,h)=>h.upgradesInProgress.length-m.upgradesInProgress.length||m.deskTime-h.deskTime,(m,h)=>h.money-m.money||m.deskTime-h.deskTime,(m,h)=>m.cumulativeRerolls-h.cumulativeRerolls||m.deskTime-h.deskTime,(m,h)=>h.upgradesInProgress.filter(B=>B.upgradeTurnTimer).length-m.upgradesInProgress.filter(B=>B.upgradeTurnTimer).length||m.upgradesInProgress.reduce((B,$)=>B+$.upgradeTurnTimer,0)-h.upgradesInProgress.reduce((B,$)=>B+$.upgradeTurnTimer,0)];let Y=[],I=0;const V={};for(const m of a){for(const h of m){const{goal:B,number:$,substitutes:H,skipMissing:Z=!1}=h;for(const L of H)n[L]||(n[L]=[]),n[L].push(B),L==="Flower Pot"&&console.log({substitutesToGoalMap:n});V[B]?Z||(V[B].number+=$):(V[B]={...h},Z&&(V[B].number=0));for(let L=0;L<=I;L++){if(p[L]===void 0)debugger;p[L][B]?p[L][B].number+=$:p[L][B]={...h}}for(let L=I+1;L<p.length;L++){if(p[L]===void 0)debugger;p[L][B]||(p[L][B]={...h,number:0})}Z||(d+=$*Math.ceil(Be(B).PurchaseCost*(b?.5:G?.75:1)))}try{P.push(JSON.parse(JSON.stringify(V)))}catch{console.log(p),console.log(p[0]);debugger}I++}const ue=p[0],we=Object.values(ue).sort((m,h)=>Be(m.goal).PurchaseCost-Be(h.goal).PurchaseCost).map(m=>m.goal);c=P.shift();for(const m of Object.values(ue)){const{goal:h,number:B}=m;S[h]={...m,substitutesPurchased:0,goalsPurchased:0},m.goal!=="Starter Bin"&&(te.push(_e(B,h)),Y.push(_e(B,h)),Y.push(_e(B,h,!0)))}const ae=new me([],[...te,(m,h)=>h.money-m.money,(m,h)=>We(m)-We(h),(m,h)=>m.cumulativeRerolls-h.cumulativeRerolls]),J=b?7:5,A=[{spawnInside:!0,blueprintCount:J},{spawnInside:!1,playerInside:!1,blueprintCount:J}];r||A.push({spawnInside:!1,playerInside:!0,blueprintCount:J});const X=[{spawnInside:!0,blueprintCount:J},{spawnInside:!1,playerInside:!0,blueprintCount:J},{spawnInside:!1,playerInside:!1,blueprintCount:J}];function Ye(m,h,B){const $={...m};for(const H of Object.values(h)){const Z=H.goal;$[Z]={...$[Z]},Z==="Copying Desk"&&($[Z].goalsPurchased+=$[Z].substitutesPurchased,$[Z].substitutesPurchased=0),$[Z].goalsPurchased+=H.goalsPurchased,$[Z].substitutesPurchased+=H.substitutesPurchased}return $}let Re=[];function es(m,h,B,$=!1){var pe,Te,Se,ee,ne,Ne,C,w,k,q,j;const H=h.fodderUsed;let Z=h.achieved.Supplies.goalsPurchased&&(!h.achieved["Leftover Bags"].goalsPurchased||!h.actionHistory.join(", ").match(/buy Leftover Bags.*reroll.*buy Supplies/i)),L=0,Ce=0;e:for(const M of m){if(Z&&!M.achieved["Leftover Bags"].goalsPurchased)continue;let K=1+(M.achieved["Copying Desk"].goalsPurchased?1:0);const E=M.upgradesInProgress.filter(f=>f.appliance==="").length;let W=E;if(W*=K,W<0)continue;const N=h.actionHistory.length?Ye(M.achieved,h.achieved):structuredClone(M.achieved);let v=0,T=[...M.upgradesInProgress];if(W<H)if((E+T.filter(f=>f.appliance==="Mince").length)*K>=H){let f=0;for(;(E+f*2)*K<H;)f++;let y=0;for(;f;)T[y].appliance==="Mince"&&(T[y]={appliance:"",cost:0,upgradeTurnTimer:0},T.push({appliance:"",cost:0,upgradeTurnTimer:0}),f--),y++}else continue;v=Math.max(0,H-T.filter(f=>f.appliance==="").length);let Q=(((pe=M.achieved["Discount Desk"])==null?void 0:pe.goalsPurchased)??0)+(((Te=M.achieved["Discount Desk"])==null?void 0:Te.substitutesPurchased)??0)-M.upgradesInProgress.filter(f=>f.appliance==="Discount Desk").length>0,le=0;v===0?le=8:T.length<=4?le=4:M.achieved["Copying Desk"].goalsPurchased>1?T.length<16?le=7:le=6:le=3;let Fe=0,ge=0,ie=0;T=T.flatMap(f=>{let y=[];return Ss||M.achieved["Research Desk"].goalsPurchased?(y.push({...f,upgradeTurnTimer:f.upgradeTurnTimer-1,cost:Q?Math.ceil(f.cost/2):f.cost}),le--):Q?(y.push({...f,cost:Math.ceil(f.cost/2)}),le--):y.push(f),le<=0&&(Q=!1),y}),v<M.achieved["Copying Desk"].goalsPurchased*8&&(T.sort((f,y)=>f.cost-y.cost),T=T.flatMap(f=>{let y=[f];return v<M.achieved["Copying Desk"].goalsPurchased*8&&(f.appliance==="Mince"?v<M.achieved["Copying Desk"].goalsPurchased*8&&(ge+=f.cost,ie++,v++,y.push({appliance:"",cost:0,upgradeTurnTimer:0})):f.appliance==="Cake Tin"?(ge+=f.cost,Fe++,ie++,v++,f.upgradeTurnTimer<=1&&(Fe++,ie++)):f.appliance==="Freezer"?(N.Freezer.goalsPurchased++,ge+=f.cost,v++,ie++):["Grabber","Dining Table","Ice Cream"].includes(f.appliance)&&N[f.appliance].goalsPurchased+N[f.appliance].substitutesPurchased<N[f.appliance].number&&(N[f.appliance].goalsPurchased++,ge+=f.cost,v++,ie++)),y})),T=T.map(f=>f.upgradeTurnTimer>0?f:{appliance:"",cost:0,upgradeTurnTimer:0});let Ee=0;{let f=h.actionHistory.length,y=!1;for(;f--;)if(h.actionHistory[f]==="buy Blueprint Cabinet")Ee++;else if(h.actionHistory[f].includes(" for ")){y||(Ee=0);break}else h.actionHistory[f].includes("reroll")&&(y=!0)}for(let f=0;f<h.achieved["Blueprint Cabinet"].goalsPurchased-Ee;f++)T.push({appliance:"",cost:0,upgradeTurnTimer:0});let Ve=M.cumulativeRerolls+h.cumulativeRerolls;if(Ve>He)continue;let qe=Ve*(Ve+1)/2*10+M.applianceCosts+ge;const re=structuredClone(N);for(const f of T)f.appliance&&(re[f.appliance]=structuredClone(re[f.appliance]),re[f.appliance].goalsPurchased--);if(h.cumulativeRerolls&&qe>se)continue;let ke=[],Ds=0,vs=1;const Bs=T.filter(f=>!f.appliance).length;{let f=se-qe;for(const y of we){const R=h.achieved[y],D=Math.ceil(Be(R.goal).PurchaseCost*(b?.5:G?.75:1));if(f-=(R.goalsPurchased+R.substitutesPurchased)*D,R.substitutesPurchased){let U=Qs[R.goal]??1;if(R.goal==="Grabber"&&h.actionHistory.some(_=>_.includes("Conveyor for Grabber"))&&(U=1),R.goal!=="Freezer")if(R.goal==="Dish Washer"){const _=(Se=h.actionHistory.filter($e=>$e.includes(" for Dish Washer"))[0].match(/buy (.*) for Dish Washer/))==null?void 0:Se[1];if(!_)throw"nope";U=["Dish Washer","Wash Basin","Power Sink","Soaking Sink","Sink"].indexOf(_),U===4&&(U=3)}else R.goal==="Discount Desk"?h.actionHistory.some(_=>_.includes("Blueprint Desk for Discount Desk"))&&(U=1):R.goal.includes(" Mixer")&&(h.actionHistory.some(_=>_.includes("buy Mixer for "+R.goal))||(U=1));if(U||R.goal==="Grabber")for(let _=0;_<R.substitutesPurchased;_++)f+=D,ke.push({appliance:R.goal,cost:D,upgradeTurnTimer:R.goal==="Grabber"?1:U}),Ds+=U}if(f<0)for(let U=0;U<R.goalsPurchased;U++)f+=D,ke.push({appliance:R.goal,cost:D,upgradeTurnTimer:0})}if(ke.length>Bs){let y=ke.length-Bs;const R=ke.filter(D=>D.appliance==="Mince").length;if(T.filter(D=>D.appliance==="Mince").length*2+R>=y-R){let D=0;for(;y>0&&T[D];)T[D].appliance==="Mince"&&(T[D]={appliance:"",cost:0,upgradeTurnTimer:0},T.push({appliance:"",cost:0,upgradeTurnTimer:0}),y-=2),D++;if(y>0){let U=ke.length-1;for(;y>0;)ke[U].appliance==="Mince"&&(ke.splice(U,1),T.push({appliance:"",cost:0,upgradeTurnTimer:0}),y-=2),U--}}if(y>0&&T.filter(D=>D.appliance==="Grabber"||D.appliance==="Dining Table").length>=y){let D=0;for(;y>0&&T[D];)T[D].appliance==="Grabber"&&(re[T[D].appliance].goalsPurchased++,T[D]={appliance:"",cost:0,upgradeTurnTimer:0},y--),D++}if(y>0&&T.filter(D=>D.appliance==="Dining Table").length>=y){let D=0;for(;y>0&&T[D];)T[D].appliance==="Dining Table"&&(re[T[D].appliance].goalsPurchased++,T[D]={appliance:"",cost:0,upgradeTurnTimer:0},y--),D++}if(y>0)continue e}for(const y of ke)y.appliance&&(re[y.appliance]=structuredClone(re[y.appliance]),re[y.appliance].goalsPurchased--)}s:if(!ce){let f;try{f=Xe(c,{...M,day:O,achieved:re,upgradesInProgress:T,fps:M.fps+Fe+(((ee=h.achieved["Flower Pot"])==null?void 0:ee.goalsPurchased)??0)})}catch{}if(!f)break s;let y=1/0;try{y=Xe(c,{...M,day:O,achieved:N,upgradesInProgress:T,fps:M.fps+Fe+(((ne=h.achieved["Flower Pot"])==null?void 0:ne.goalsPurchased)??0)})}catch{}if(y>0)continue;let R=Object.values(re).map(D=>{var U;return[D.goal,(((U=c[D.goal])==null?void 0:U.number)??0)-(D.goalsPurchased+D.substitutesPurchased)]}).filter(D=>D[1]>0);for(let D=0;D<T.length;D++){const U=T[D];for(const _ of R)if(_[0]===U.appliance){re[U.appliance].goalsPurchased++,ie++,T[D]={appliance:"",cost:0,upgradeTurnTimer:0},_[1]--;break}R=R.filter(_=>_[1]>0)}if(R.length)continue}{let f=0;for(const y of ke){for(;T[f].appliance;)f++;T[f]=y}for(let y=0;y<Ee;y++)T.push({appliance:"",cost:0,upgradeTurnTimer:0});T.sort((y,R)=>R.cost-y.cost)}let ze;try{ze=Xe(c,{...M,day:O,achieved:re,upgradesInProgress:T,fps:M.fps+Fe+(((Ne=h.achieved["Flower Pot"])==null?void 0:Ne.goalsPurchased)??0)})}catch{continue}if(ze>0&&ce<=0){let f=1/0;try{f=Xe(c,{...M,day:O,achieved:N,upgradesInProgress:T,fps:M.fps+Fe+(((C=h.achieved["Flower Pot"])==null?void 0:C.goalsPurchased)??0)})}catch{}if(f>0)continue;let y=Object.values(re).map(R=>{var D;return[R.goal,(((D=c[R.goal])==null?void 0:D.number)??0)-(R.goalsPurchased+R.substitutesPurchased)]}).filter(R=>R[1]>0);for(let R=0;R<T.length;R++){const D=T[R];for(const U of y)if(U[0]===D.appliance){re[D.appliance].goalsPurchased++,ie++,T[R]={appliance:"",cost:0,upgradeTurnTimer:0},U[1]--;break}y=y.filter(U=>U[1]>0)}if(y.length){debugger;continue}}qe+=h.applianceCosts;let as=0;{let f="",y=M.actionHistory.length,R=!0;for(;y--;){const _=M.actionHistory[y].match(/^(?:spawn|reroll) (..?)/);if(!_){M.actionHistory[y].match(/^day ..? spawn/)&&(R=!0);continue}if(R){R=!1;continue}f=_[1][0]}let D=0,U=!0;for(let _=0;_<h.actionHistory.length;_++){as+=D,D=0;const $e=h.actionHistory[_].match(/^(?:spawn|reroll) (..?)/);if(!$e){const Rs=h.actionHistory[_].match(/take (\d+) out/);Rs&&(as+=parseInt(Rs[1])/3+1);continue}as++;const ua=$e[1][0],ws=U?"":$e[1][1];U=!1,f&&(f[0]!==ua&&(D+=3),f[1]&&ws&&f[1]!==ws&&(D+=10)),f=$e[1]}}let oa=M.deskTime+(vs-1)*20+Math.max(0,H-E)*5*((w=M.achieved["Clipboard Stand"])!=null&&w.goalsPurchased?.5:1)+(Ds*vs*5+(i[h.day]??i.at(-1)??0))*((k=N["Clipboard Stand"])!=null&&k.goalsPurchased?.5:1)+as+h.cumulativeRerolls*2-3*Math.min(6,4*(((q=re["Leftover Bags"])==null?void 0:q.goalsPurchased)??0)+8*(((j=re.Supplies)==null?void 0:j.goalsPurchased)??0))*(O>2?4:1);for(const f of["Grabber","Dining Table","Ice Cream"]){const y=N[f].number-N[f].goalsPurchased-N[f].substitutesPurchased,R=T.filter(D=>D.appliance===f).length;R&&(T=T.map(D=>D.appliance===f?{...D,upgradeTurnTimer:Math.ceil(y/R)}:D))}const ye={...h,rerollConfigs:[...M.rerollConfigs,h.rerollConfigs],achieved:N,money:se-qe,actionHistory:[...M.actionHistory,...h.actionHistory],upgradesInProgress:T,cumulativeRerolls:M.cumulativeRerolls+h.cumulativeRerolls,applianceCosts:M.applianceCosts+h.applianceCosts+ge,deskTime:oa,fps:M.fps+Fe};if(Fe&&ye.actionHistory.push(`buy ${Fe} flower pot copies`),ie>Fe&&ye.actionHistory.push(`buy ${ie-Fe} cab copies`),!(ye.money<-ye.upgradesInProgress.reduce((f,y)=>f+y.cost,0))){if(ye.money>=0||ye.money+ye.upgradesInProgress.reduce((f,y)=>f+y.cost,0)>=0&&P.length){if(ze<ce&&(ce=ze,console.log(`best so far missing ${ze} pieces `+Ke(ye,se))),ze<=0){if(ae.add(ye)){if(ks(),ae.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(ce<=0)continue}if($&&(O===1?W=0:K>1&&(W+=M.upgradesInProgress.filter(f=>f.appliance==="Mince").length*K)),W>u&&(u=W),$){const f=M.cumulativeRerolls;for(let y=0;y<=W;y++)Re[y]===void 0&&(Re[y]=new me([],Js)),Re[y].add([f,qe]);continue}B.array.push(ye),L+=1/ze,Ce++}}return-(L+(m.length-Ce)*0)/m.length}const Je={...S};Je["Blueprint Cabinet"]={...Je["Blueprint Cabinet"],goalsPurchased:1};const Ge=new me([{achieved:Je,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:[{appliance:"",cost:0,upgradeTurnTimer:0}],day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0,fps:0}],[...te,(m,h)=>m.upgradesInProgress.map(B=>B.appliance).sort().join(",")===h.upgradesInProgress.map(B=>B.appliance).sort().join(",")?0:1,(m,h)=>m.upgradesInProgress.map(B=>B.appliance).sort().join(",")===h.upgradesInProgress.map(B=>B.appliance).sort().join(",")?0:-1]);let ce=1/0,O=0,se=0;const he=new $s(s),ss=["Research Desk"];let Ss=!1,Oe=[];{const m=["Booking Desk","Blueprint Cabinet","Leftover Bags"];Me.filter(h=>m.includes(h.Name)).forEach(h=>he.OwnedAppliances.push(h))}for(const m of e)he.addCard(m);function Fa(m,h,B,$,H,Z){var ee;let L=[],Ce=[],pe=[];{const ne={...m};m.fodderPurchases[0]?pe.push(ne):L.push(ne)}const Te=Ye(m.achieved,H),Se=["upgrade","base","fodder"];for(let ne=0;ne<h.length;ne++){const Ne=ne+1===h.length;Ne&&Se.includes("fodder")&&Se.pop();const C=h[ne];let w=[...L],k=[...Ce,...pe],q=[];for(const j of Se){if(!C)continue;let M=C.Name,K=Te[M],E=!1;switch(j){case"base":if(K&&K.goalsPurchased+K.substitutesPurchased>=ue[M].number)continue;break;case"upgrade":const W=(ee=n[C.Name])==null?void 0:ee.filter(v=>v!=="Starter Bin"),N=W==null?void 0:W[Math.floor(Math.random()*W.length)];if(K=Te[N],!K||(E=!0,M=N,K.goalsPurchased+K.substitutesPurchased>=ue[M].number))continue;break;case"fodder":K=Te["Starter Bin"],M="Starter Bin",E=!0}if(K){C.ThemeRequired&&M!=="Starter Bin"&&(E=!1),E?K.substitutesPurchased++:K.goalsPurchased++;{const W=N=>{if(!N)return;{let Q=N.actionHistory.length;for(;Q--;){const le=N.actionHistory[Q];if(le.includes(`buy ${C.Name}`))return;if(le.includes("reroll "))break}}if(!N.numFloor)return;const v={...N};if(v.achieved={...v.achieved},!v.numFloor){console.log(h);debugger}if(v.numFloor--,v.achieved[M])v.achieved[M]={...v.achieved[M],goalsPurchased:v.achieved[M].goalsPurchased+(E?0:1),substitutesPurchased:v.achieved[M].substitutesPurchased+(E?1:0)};else if(v.achieved[M]={...K,goalsPurchased:E?0:1,substitutesPurchased:E?1:0},Number.isNaN(v.achieved[M].goalsPurchased))debugger;const T=M==="Starter Bin"?Be(C.Name).PurchaseCost:Math.max(Be(C.Name).PurchaseCost,Be(M).PurchaseCost);return E?v.applianceCosts+=Math.ceil(T*(b?.5:1)):v.applianceCosts+=Math.ceil(T*(b?.5:G?.75:1)),v.actionHistory=[...v.actionHistory,`buy ${C.Name}`+(E?` for ${M}`:"")],M==="Starter Bin"&&(v.fodderPurchases=[...v.fodderPurchases],v.fodderPurchases[1]++,v.achieved[M].substitutesPurchased--),v};if(j!=="fodder"){const N=L.map(W).filter(Q=>Q);N.forEach(B);const v=Ce.map(W).filter(Q=>Q);v.forEach(Z);const T=Ne?[]:pe.map(W).filter(Q=>Q);T.forEach(Z),w=w.concat(N),k=k.concat(v),q=q.concat(T)}else{const N=(ne===0?L:pe).map(W).filter(v=>v);N.forEach(Z),q=q.concat(N)}}}}L=w.filter(j=>j),Ce=k.filter(j=>j),pe=q.filter(j=>j)}return L.concat(Ce).concat(pe)}let He=-1;{let m=F.slice(0,o).reduce((h,B)=>h+B)-d;for(;m>0;)He++,m-=10*He;console.log({maxCumulativeRerolls:He,money:m,expectedMoneyByDay:F,gearMoney:d})}for(He=10,Number.isFinite(o)||(He=3);ce;){let m=Ge.array;const h=m.reduce((C,w)=>{if(!Object.keys(C).length||Math.random()<.3)for(const k in w.achieved){const q=w.achieved[k].goalsPurchased+w.achieved[k].substitutesPurchased;C[k]?q<C[k].goalsPurchased&&(C[k].goalsPurchased=q):C[k]={...w.achieved[k],goalsPurchased:q,substitutesPurchased:0}}return C},{});if(!m.length){debugger;return t("No Solutions"),0}Ge.clear();const B=new me([],[...Y,(C,w)=>C.cumulativeRerolls-w.cumulativeRerolls,(C,w)=>C.applianceCosts-w.applianceCosts]);if(se+=F[O]??F.at(-1)??0,O++,O>=o){ia(!0,{array:m});debugger;break}if(O>14&&(b||!l.length)){debugger;break}if(O>1&&m.length===0){debugger;break}const $=5e3;if(console.log(`fastest so far: ${Ke(m[0],se)}`),m.length>$){const C=Math.ceil((m.length-$)/2+$)&&$,w=m.length;m.sort((q,j)=>We(q)-We(j)),m.sort((q,j)=>be(P.at(-1)??c,q.achieved)-be(P.at(-1)??c,j.achieved));const k=new Set(m.slice(0,C));debugger;for(const q of m.slice(0,C))k.add(q);m.sort((q,j)=>be(c,q.achieved)-be(c,j.achieved));for(const q of m.slice(0,C))k.add(q);m=Array.from(k),C<w&&console.log(`Reducing from ${w} to top ${C} routes, up to ${m.length} on day ${O}`)}let H=2;switch(O){case 77:H=0;break;case 1:case 6:case 7:H=1;break;case 99:H=3;break;case 2:case 3:case 4:case 8:H=2;break;case 99:H=3;break;case 88:H=12;break;default:H=3;break}H=3,H+=1;let Z=.5*60*1e3;Z=2*60*1e3;const L=Math.min(H-1,1/0);if(se>=d){const C=Math.sqrt((se-d)/10*2);console.log(`Have ${se} on day ${O}, need ${d} to buy everything. Allows for ~${C} rerolls across all days`)}O%5||(H=1);let Ce;(b||O===5||!(O%3))&&(Ce=l.shift());const pe=Ue.filter(C=>C.Name===Ce)[0];he.handleNewCardSpawnEffects(pe);const Te=he.getAppliances([{spawnInside:!0,blueprintCount:J}],O);he.addCard(pe);let Se=[];if(ss.length)for(let C=ss.length-1;C>=0;C--){let w=Te.length;for(;w--;){const k=Te[w];if(k.Name===ss[C]){if(console.log(`buying ${k.Name} on day ${O}`),se-m.reduce((j,M)=>Math.min(j,M.applianceCosts+10/2*(M.cumulativeRerolls+1)*M.cumulativeRerolls),1/0)<k.PurchaseCost*(b?.5:G?.75:1)){console.log("not enough money-- skip for now");continue}Oe.push(k),ss.splice(C,1),se-=k.PurchaseCost*(b?.5:G?.75:1),Te.splice(w,1);break}}Se=Oe.map(k=>`Buy ${k.Name}`)}let ee=new me([{day:O,rerollConfigs:[],achieved:{...S},numFloor:J,fodderAvailable:u,fodderUsed:0,money:se,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(C,w)=>he.getPrngAdvancements(C.rerollConfigs,O)-he.getPrngAdvancements(w.rerollConfigs,O),(C,w)=>-he.getPrngAdvancements(C.rerollConfigs,O)+he.getPrngAdvancements(w.rerollConfigs,O),...Y,(C,w)=>C.cumulativeRerolls-w.cumulativeRerolls,(C,w)=>C.applianceCosts-w.applianceCosts,(C,w)=>w.numFloor+w.fodderAvailable-C.numFloor+C.fodderAvailable,(C,w)=>C.numFloor-w.numFloor]);O===5&&(ee.array[0].applianceCosts=190,ee.array[0].cumulativeRerolls=1),Re=[],es(m,ee.array[0],Ge,!0);let ne=1/0;const Ne=C=>Re.map(w=>w.array.reduce((k,[q,j])=>q+C>He?1/0:Math.min(k,j+(q+1+q+C)/2*C*10),1/0));{const C=H;for(;Ne(H-1)[0]>se;)H--;H!==C&&console.log(`clamped max rerolls from ${C} down to ${H}`)}e:for(;H--&&(Oe.length&&((Ps=(ys=ee.array[0])==null?void 0:ys.rerollConfigs)==null?void 0:Ps.length)===1&&(Oe.some(k=>k.Name==="Research Desk")&&(Ss=!0),he.OwnedAppliances.push(...Oe),Oe=[],Se=[]),ne=Date.now()+Z,ee.array[0]!==void 0);){console.log(`Seed ${s} Day ${O} Reroll ${ee.array[0].rerollConfigs.length} expanding ${ee.array.length} states`);let C=ee.array;if(!P.length&&ce<=0){const k=C[0].rerollConfigs.length;if(k*((k+1)/2)*10+d>se){console.log("get me outta here!");break}}ee.clear();const w=Ne(C[0].rerollConfigs.length);console.log({minSpentMoneyByExtraBlueprints:w});for(const k of C){if(Date.now()>ne){const E=be(p[0],p[0]),W=be(p[1]??p[0],p[1]??p[0]);ee.array.sort((N,v)=>{const T=be(p[1]??p[0],N.achieved),Q=be(p[1]??p[0],v.achieved);return(`day ${O} spawn, spawn OO, reroll OO, reroll OO, reroll `.indexOf(v.actionHistory.join(", "))===0?1:0)-(`day ${O} spawn, spawn OO, reroll OO, reroll OO, reroll `.indexOf(N.actionHistory.join(", "))===0?1:0)||(N.partialMissing??999)-(v.partialMissing??999)||(O===8?v.achieved["Danger Hob"].goalsPurchased-N.achieved["Danger Hob"].goalsPurchased+v.achieved["Rapid Mixer"].goalsPurchased-N.achieved["Rapid Mixer"].goalsPurchased:0)||(ce?-Math.min(E,2*E-be(p[0],N.achieved)-ce)+Math.min(E,2*E-be(p[0],v.achieved)-ce):0)||v.numFloor-N.numFloor||(ce||O===8?1:-1)*(Q*(Q===W?0:1)-T*(T===W?0:1))||v.achieved["Danger Hob"].goalsPurchased-N.achieved["Danger Hob"].goalsPurchased||v.achieved["Rapid Mixer"].goalsPurchased-N.achieved["Rapid Mixer"].goalsPurchased||v.achieved.Mince.substitutesPurchased-N.achieved.Mince.substitutesPurchased||-(v.applianceCosts-N.applianceCosts)||-(N.fodderUsed-v.fodderUsed)||Math.random()-.5});continue e}if(k.numFloor+k.fodderAvailable===0||k.money<k.rerollConfigs.length*10)continue;let q=0;if(w[0]>k.money)continue;for(let E=1;E<w.length;E++)if(q++,w[E]>k.money){q=E-1;break}let j=k.rerollConfigs.length?k.numFloor+Math.min(k.fodderAvailable,q-k.fodderUsed):J;k.fodderPurchases[1]&&(j=k.numFloor);const M=L<k.rerollConfigs.length?k.numFloor:k.rerollConfigs.length?Math.max(1,k.numFloor):J;let K;k.rerollConfigs.length===0?K=X:L<k.rerollConfigs.length?K=[k.rerollConfigs.at(-1)]:K=A,he.getAppliances([...k.rerollConfigs,{spawnInside:!0,blueprintCount:j}],k.day);for(const E of K){const W=T=>{ee.add(T)&&B.add(T)},N=T=>{if(!ee.add(T)||!B.add(T))return;if(!(T.fodderPurchases[0]+T.fodderPurchases[1])){const Fe=es(m,T,Ge);T.partialMissing=Fe}},v=[M];j>M&&v.push(j);for(let T=j-1;T>M;T--)v.push(T);for(const T of v){const Q=[...k.rerollConfigs,{...E,blueprintCount:T}],le=Q.length===1?Te:he.getAppliances(Q,k.day),Fe=[...le].sort((Ve,qe)=>Ve.PurchaseCost-qe.PurchaseCost),ge=T-k.numFloor;if(ge>k.fodderAvailable)debugger;const ie={...k,fodderPurchases:[k.fodderPurchases[1],0],money:k.money-k.rerollConfigs.length*10,rerollConfigs:Q,numFloor:Q.length===1?T-Oe.length:T,fodderAvailable:k.fodderAvailable-ge,fodderUsed:k.fodderUsed+ge,cumulativeRerolls:k.rerollConfigs.length?k.cumulativeRerolls+1:0,actionHistory:k.rerollConfigs.length?[...k.actionHistory,`${ge?`take ${ge} out, `:""}reroll ${E.spawnInside?"I":E.playerInside?"OI":"OO"}`]:[`day ${k.day} spawn`,`spawn ${E.spawnInside?"I":E.playerInside?"OI":"OO"}`,...Se]};ie.rerollConfigs.length===1&&ie.rerollConfigs[0].spawnInside===!0?N(ie):W(ie);let Ee=N;if((!E.spawnInside||T>M&&!ue[le.at(-1).Name]&&((Ms=n[le.at(-1).Name])!=null&&Ms.every(Ve=>!ue[Ve])))&&(Ee=W),Fa(ie,Fe,Ee,H,h,W),Date.now()>ne)break}}}}if(he.addCard(pe),ce<=0){if(!P.length){ae.array.sort((C,w)=>w.fps-C.fps),t((ce<=0?`full build on ${s} by day ${O}: 
`:"")+ae.array.map(C=>Ke(C,se)).join(`
`));break}for(const C of Object.values(c))C.number&&he.OwnedAppliances.push(Be(C.goal));c=P.shift(),p.shift(),Y=[];for(const{goal:C,number:w}of Object.values(p[0]))Y.push(_e(w,C)),Y.push(_e(w,C,!0));if(ce=1/0,Re=[],ks(!0),p.length<=1)debugger;Ge.array=ae.array,ae.clear(),ae.objectiveFunctions}}return O;function ia(m=!1,h=Ge){(Math.random()<.001||m)&&h.array.sort((B,$)=>$.fps-B.fps||B.deskTime-$.deskTime),t(`tier ${a.length-P.length-(m?1:0)} build on ${s} by day ${O}${m?"":" (Partial)"}: 
`+h.array.slice(0,100).map(B=>Ke(B,se)).join(`
`))}function ks(m=!1){(Math.random()<.001||m)&&ae.array.sort((h,B)=>B.fps-h.fps||h.deskTime-B.deskTime),t(`tier ${a.length-P.length-(m?1:0)} build on ${s} by day ${O}${m?"":" (Partial)"}: 
`+ae.array.slice(0,100).map(h=>Ke(h,se)).join(`
`))}}function Xe(s,e){const l=e.achieved,a=e.upgradesInProgress.filter(g=>g.appliance==="Cake Tin").length,r=e.achieved["Copying Desk"].goalsPurchased+e.achieved["Copying Desk"].substitutesPurchased,F=[[33,!1]];for(const[g,t]of F){const o=Math.min(8*r,a),c=e.upgradesInProgress.length+e.upgradesInProgress.filter(P=>P.appliance==="Mince").length*2;Math.min(Math.ceil(Math.min(g,Math.max(0,(g-e.fps-(t?a:0))/(o+1-1/(c-a+1)))))),(g-e.fps-(t?a:0))/(8-e.day)}let i=0;for(const g of Object.values(s)){const o=g.number-l[g.goal].goalsPurchased-l[g.goal].substitutesPurchased;i+=Math.max(0,o)}return i}function be(s,e){var a,r;let l=0;{let F=e["Leftover Bags"].goalsPurchased*4+e.Supplies.goalsPurchased*8;l+=Math.max(0,((a=s["Danger Hob"])!=null&&a.number&&!((r=s["Leftover Bags"])!=null&&r.number)?9:0)-F)}for(const F of Object.values(s)){const g=F.number-e[F.goal].goalsPurchased-e[F.goal].substitutesPurchased;l+=Math.max(0,g)}return l}function Ke(s,e){const l=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${We(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${l}/${e}), `+s.actionHistory.join(", ")+JSON.stringify(s.upgradesInProgress)}const Fs={};function is(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:F,groupSizes:i}=s,g=[e,l,a,r,F,[...i].sort((u,d)=>u-d)].join("|");if(Fs[g])return Fs[g];let t=[0,0,0],o=[0,0,0,0],c=1-.75**F;if(e>0){t[0]=1;let u=1-.75**e;a===.5&&(u*=1.25,c*=1.25),o[0]=i.reduce((d,S)=>d+1+(S-1)*u,0)}const P=i.reduce((u,d)=>u+d);l&&(t[1]=1,o[1]=P),r>0&&(o[2]=P,l?(t[2]=1-.75**r,a===.5&&(t[2]*=1.25)):t[2]=1);let p=1;e>0&&(t[0]*=1+a,p*=1-a,o[0]*=t[0]),l&&(t[1]*=1+p*a,p*=1-a,o[1]*=t[1],o[3]=o[1]*c),r>0&&(t[2]*=1+p*a,p*=1-a,o[2]*=t[2]);const n=[t.map(u=>u*i.length),o];return Fs[g]=n,n}function ea(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:F,groupSizes:i}=s;let g=[0,0,0],t=[0,0,0,0],o=1-.75**e,c=1-.75**r,P=1-.75**F;a===.5&&(o*=1.25,c*=1.25,P*=1.25);const p=S=>{g[0]++,t[0]++;for(let b=0;b<S-1;b++)Math.random()<o&&t[0]++},n=S=>{g[1]++,t[1]+=S;for(let b=0;b<S;b++)Math.random()<P&&t[3]++},u=S=>{g[2]++,t[2]+=S};for(const S of i){let b=!1;e>0&&(p(S),!b&&Math.random()<a&&(b=!0,p(S))),n(S),!b&&Math.random()<a&&(b=!0,n(S)),r>0&&Math.random()<c&&(u(S),!b&&Math.random()<a&&(b=!0,u(S)))}return[g,t]}const sa={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},ms={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>ms[s]=!0);class aa{constructor(e,l=[],a=[]){x(this,"seed");x(this,"mapSize");x(this,"frontDoor");x(this,"startingCards");x(this,"cards");x(this,"playerCount");x(this,"turbo");x(this,"_actionInfoCacheByCards",{});x(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=l,this.cards=a,this.playerCount=sa[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:l});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,F=!1,i=0,g=[],t=[],o=0,c=[],P=0,p=[];for(const I of l)switch(I.Name==="All You Can Eat"&&(r=!0),I.Name==="Double Helpings"&&(F=!0),I.DishType){case z.Dessert:o++,I.DishValue&&c.push(I.DishValue);break;case z.Starter:I.DishValue&&g.push(I.DishValue),i++;break;case z.Side:I.DishValue&&p.push(I.DishValue),P++;break;case z.Main:case z.Base:if(I.Name==="Sundaes"){debugger;c.push(4,5,5,6);break}I.Name==="Tacos"?(t.push(2),t.push(3)):I.DishValue&&t.push(I.DishValue)}let n=F?.5:r?.25:0,u=[0,0,0,0];if(u[0]=De(g),u[1]=De(t),u[2]=De(c),u[3]=De(p),F)for(let I=0;I<3;I++)u[I]&&(u[I]+=3);const[d,S]=is({starters:i,main:!!u[1],doubleOrderChance:n,desserts:o,sides:P,groupSizes:a});let b=0;for(let I=0;I<S.length;I++)b+=S[I]*u[I];const G=Ts(this.playerCount),te=this.getBookingDeskCount(e),Y=this.getBookingDeskMoney(e);return Math.ceil(G*(b+te*Y))}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,F=!1,i=0,g=[],t=[],o=0,c=[],P=0,p=[];for(const S of l)switch(S.Name==="All You Can Eat"&&(r=!0),S.Name==="Double Helpings"&&(F=!0),S.DishType){case z.Dessert:o++,S.DishValue&&c.push(S.DishValue);break;case z.Starter:S.DishValue&&g.push(S.DishValue),i++;break;case z.Side:S.DishValue&&p.push(S.DishValue),P++;break;case z.Main:case z.Base:if(!S.isMain){if(o++,S.Name==="Sundaes"){debugger;c.push(4,5,5,6);break}S.DishValue&&c.push(S.DishValue);break}S.Name==="Tacos"?(t.push(2),t.push(3)):S.DishValue&&t.push(S.DishValue)}let n=F?.5:r?.25:0,u=[0,0,0,0];if(u[0]=De(g),u[1]=De(t),u[2]=De(c),u[3]=De(p),F)for(let S=0;S<3;S++)u[S]&&(u[S]+=3);return is({starters:i,main:!!u[1],doubleOrderChance:n,desserts:o,sides:P,groupSizes:a})}actionInfo(e){if(e===0)return 0;const l=this.getCardsByDay(e),a=e.toString()+":"+l.map(A=>A.Name).sort().join(","),r=this._actionInfoCacheByCards[a];if(r)return r;let F=0;const i={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let g=0;for(let A=0;A<l.length;A++)if(l[A].DishType!==z.Null){const X=l[A].Name;g=i[X]??20;break}let t=-1,o=[1,1,1],c=[[],[g],[],[]],P=0;const p=this.getGroupSizes(e);let n=!1,u=!1,d=0,S=[],b=[],G=0,te=[],Y=0,I=[],V=!1,ue=!1;for(const A of l){switch(A.Name==="All You Can Eat"&&(n=!0),A.Name==="Double Helpings"&&(u=!0),A.Name){case"Picky Eaters":V=!0;break;case"Leisurely Eating":ue=!0,P+=2;break;case"Instant Service":for(let X=0;X<3;X++)o[X]--;break;case"Ice Cream":c[2].push(5.125);break;case"Cheese Board":c[2].push(10);break;case"Cherry Pies":c[2].push(11);break;case"Apple Pies":c[2].push(15);break;case"Pumpkin Pies":c[2].push(16);break;case"Carrot Soup":case"Meat Soup":c[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":o[0]=4,c[0].push(8);break;case"Broccoli Cheese Soup":c[0].push(5),o[0]=4;break;case"Pumpkin Seed":c[0].push(3*8);break;case"Bread":c[0].push(5*3);break;case"Mandarin Starter":c[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":c[3].push(2);break;case"Onion Rings":c[3].push(8);break;case"Corn on the Cob":c[3].push(6);break;case"Chips":c[3].push(7);break;case"Roast Potato":c[3].push(4);break}switch(A.DishType){case z.Dessert:G++,A.DishValue&&te.push(A.DishValue);break;case z.Starter:A.DishValue&&S.push(A.DishValue),d++;break;case z.Side:A.DishValue&&I.push(A.DishValue),Y++;break;case z.Main:case z.Base:if(A.Name==="Sundaes"){debugger;te.push(4,5,5,6);break}A.Name==="Tacos"?(b.push(2),b.push(3)):A.DishValue&&b.push(A.DishValue);break;case z.Extra:A.Name==="Seaweed"?(c[1][0]+=1.75,t+=2):A.Name==="Dumpling - Soy Sauce"?c[1][0]+=.4:A.Name==="Breakfast Beans"?c[1][0]+=1+3/4:A.Name==="Breakfast Eggs"?c[1][0]+=6:A.Name==="Breakfast Extras"&&(t++,c[1][0]+=1.5*2),t++;break}}e>6&&(c[3]=[]),V&&(ue&&!n||(c[1][0]+=2,t++));let we=u?.5:n?.25:0;F+=p.length*P;const[ae,J]=is({starters:d,main:!0,doubleOrderChance:we,desserts:G,sides:Y,groupSizes:p});ae.forEach((A,X)=>F+=A*o[X]);for(const A of c)for(let X=0;X<A.length;X++)t>0&&(A[X]+=t),t+=1;return J.forEach((A,X)=>{var Ye;if((Ye=c[X])!=null&&Ye.length){if(!X){const Re=Math.ceil(A/c[X].length/3);F+=Re*c[X].reduce((es,Je)=>es+Je,0);return}F+=A*De(c[X])}}),this._actionInfoCacheByCards[a]=F,F}simulateMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,F=!1,i=[[],[],[],[]];for(const d of l){if(d.Name==="All You Can Eat"&&(r=!0),d.Name==="Double Helpings"&&(F=!0),d.Name==="Sundaes")debugger;switch(d.DishType){case z.Main:case z.Base:if(d.Name==="Sundaes"){debugger;i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6),i[1].push(4,5,5,6);break}d.Name==="Tacos"?i[1].push(2.5):(d.DishValue&&i[1].push(d.DishValue),d.DishValue&&i[1].push(d.DishValue),d.DishValue&&i[1].push(d.DishValue),d.DishValue&&i[1].push(d.DishValue),d.DishValue&&i[1].push(d.DishValue),d.DishValue&&i[1].push(d.DishValue),d.DishValue&&i[1].push(d.DishValue),d.DishValue&&i[1].push(d.DishValue));break;case z.Dessert:if(d.Name==="Giant Sundaes"){debugger;i[1].push(5,6,6,6,7,7,7,8),i[1].push(5,6,6,6,7,7,7,8),i[1].push(5,6,6,6,7,7,7,8);break}d.DishValue&&i[2].push(d.DishValue);break;case z.Starter:d.DishValue&&i[0].push(d.DishValue);break;case z.Side:d.DishValue&&i[3].push(d.DishValue);break}}let g=F?.5:r?.25:0,t=0;F&&(t+=3);const[o,c]=ea({starters:i[0].length,main:!!i[1].length,doubleOrderChance:g,desserts:i[2].length,sides:i[3].length,groupSizes:a});let P=0;for(let d=0;d<c.length;d++){let S=c[d];for(;S--;){d<3&&(P+=t);let b=i[d][Math.floor(Math.random()*i[d].length)];b%1&&(Math.random()<b%1?b=Math.ceil(b):b=Math.floor(b)),P+=b}}const p=Ts(this.playerCount),n=this.getBookingDeskCount(e),u=this.getBookingDeskMoney(e);return Math.ceil(p*(P+n*u))}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[]}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let l;this.turbo?l=e-1:(l=Math.max(0,Math.floor((e-1)/3)),e>5&&l++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,l)]}return this._cardsByDay[e]}getBookingDeskCount(e,l=1){const a=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(o=>o.Name==="Herd Mentality"))return Math.min(a,3)+1;const r=[],F=this.getCardsByDay(e);let i=1;(this.turbo||F.some(o=>o.Name==="Morning Rush"))&&r.push(.2),(this.turbo||F.some(o=>o.Name==="Lunch Rush"))&&r.push(.5),(this.turbo||F.some(o=>o.Name==="Dinner Rush"))&&r.push(.8);const g=l/this.getDayLength(e),t=.1/a;i+=a-1;for(let o=1;o<a;o++){const c=o/a,P=c-t-g,p=c+t+g;for(let n=r.length-1;n>=0;n--){const u=r[n];P<=u&&u<=p&&r.splice(n,1)}}return i+=r.length,i}getNonRushGroupCount(e){const l=this.getExpectedCustomers(e),a=this.getCardsByDay(e).filter(i=>i.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),F=l*(1+a)/r;return Math.ceil(F)}getCustomerCount(e){return this.getGroupSizes(e).reduce((l,a)=>l+a,0)}getGroupSizes(e,l=0){const a=this.seed?cs(1997821,e,this.seed).random:new ns(Math.floor(Math.random()*4294967295)),r=this.getNonRushGroupCount(e),F=this.getCardsByDay(e).some(n=>n.Name==="Herd Mentality");let i=r,g=[],[t,o]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?o=t:this.seed==="_max"&&(t=o);{let n=i-1;for(;n--;)a.value}for(;i--;)g.push(a.range(t,o+1)),!F&&i!==r-1&&a.value;let c=this.turbo?3:this.getCardsByDay(e).filter(n=>ms[n.Name]).length,P;switch(l){case 0:P=Math.ceil(Math.max(1,r*.15));break;case 1:P=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));break;case 2:P=Math.ceil(Math.max(1,r*.15*1.5))}let p=c*P;for(;p--;)g.push(a.range(t,o+1));if(!this.seed||this.seed[0]==="_"){let n=t;for(let u=0;u<g.length;u++)g[u]=n,n++,n>o&&(n=t)}return g}getExpectedGroupSize(e){const l=this.getGroupSizeRange(e);return(l[0]+l[1])/2}getGroupSizeRange(e){let l=1,a=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":a--;break;case"Medium Groups":l++,a+=2;break;case"Large Groups":l+=2,a+=2;break;case"Flexible Dining":l--,a++;break;case"Community":const F=Math.floor((e-1)/3);l+=F,a+=F;break}return[l,a]}getExpectedCustomers(e){const l=this.getReductions(e),a=this.getDayLength(e),r=this.getPlayerModifier(),F=this.getCourseModifier(e),i=this.getDayRate(e),g=this.getCustomersPerHour(e),t=this.getAdvertisingModifier(e);return .85**l*(a/25*i*r)/F*g*t}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(a=>a.Name==="Advertising").length}getDayRate(e){let l=1;switch(e){case 1:l=1.25;break;case 2:l=1.5;break;default:l=1.5+.15*(e-3);break}return e>15&&(l+=.15*(e-15)**1.5),l}getCourseModifier(e){let l=1;const a=this.getCardsByDay(e);return a.some(r=>r.DishType===z.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes"||r.Name==="Sundaes")&&(l+=.25),a.some(r=>r.DishType===z.Starter)&&(l+=.25),l}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let l=1;return this.turbo&&(l=1.5,l*=1+e/10),l}getReductions(e){return this.getCardsByDay(e).reduce((a,r)=>a+r.CustomerMultiplier,0)}getMapSize(){const l=new Ae(this.seed,5078598).useSubcontext(0).random.range(0,8);let a;switch(l){case 0:a="Small (2)";break;case 4:a="Medium (2)";break;case 1:case 5:a="Diner (1)";break;case 2:case 6:a="Large (3)";break;case 3:case 7:a="Huge (4)";break;default:throw new Error}return a}getLayoutInfo(){const l=new Ae(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new ns(new Ae(this.seed,98234234).useSubcontext(0).random.value),l=23;for(;l--;)e.value;return e.range(0,4)}}function Ts(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function la(s,e,l,a){let r=[],F=[],i=[];const g=s.cards.slice(e);let t=new aa(s.seed,l,g);t.playerCount=a;for(let o=1;o<=15;o++)i.push(t.getCustomerCount(o)),r.push(t.guessMoney(o)),F.push(t.getBookingDeskCount(o));return r[0]+=t.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:F,expectedCustomersByDay:i}}var bs=self;function ra(s){bs.postMessage(s)}const ta=[],na=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:0,substitutes:[],skipMissing:!0},{goal:"Cake Tin",number:20,substitutes:[],skipMissing:!0},{goal:"Mince",number:8,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:0,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:Me.filter(s=>!s.ThemeRequired&&!ta.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];bs.onmessage=s=>{let{config:e,tiers:l,playerCount:a,maxDay:r=15}=s.data;l=l.filter(n=>n.length);for(const n of l)for(const u of n){const d=Me.filter(S=>S.Name===u.goal)[0];d.ThemeRequired&&(u.substitutes=Me.filter(S=>S.ThemeRequired===d.ThemeRequired).map(S=>S.Name))}for(;!l.at(-1).length;)l.pop();const F=[...na],i=l.flatMap(n=>n.flatMap(u=>[u.goal,...u.substitutes])),g=F.length-1;F[g].substitutes=F[g].substitutes.filter(n=>!i.some(u=>n===u)),l[l.length-1].push(...F);const t=e.cards.filter(n=>gs.some(u=>u.Name===n.Name)).length+1,o=e.cards.slice(0,t);let{expectedMoneyByDay:c,expectedBookingDesksByDay:P,expectedCustomersByDay:p}=la(e,t,o,a);Xs(e.seed,o,e.cards.slice(t).map(n=>n.Name),l,e.solo,c,P,p,ra,r)}})();
