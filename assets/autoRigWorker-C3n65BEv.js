var pa=Object.defineProperty;var da=(Te,De,Ae)=>De in Te?pa(Te,De,{enumerable:!0,configurable:!0,writable:!0,value:Ae}):Te[De]=Ae;var G=(Te,De,Ae)=>da(Te,typeof De!="symbol"?De+"":De,Ae);(function(){"use strict";var ks,ys;class Te{constructor(e,l){G(this,"array");G(this,"objectiveFunctions");this.array=De(e,l),this.objectiveFunctions=l}clear(){this.array=[]}add(e){let l=this.array.length;for(;l--;){let{better:a,worse:r}=Ae(e,this.array[l],this.objectiveFunctions);if(r)return!1;a&&this.array.splice(l,1)}return this.array.push(e),!0}}function De(s,e){if(!s.length)return s;const l=[...s];let a=[];a.push(l.pop());e:for(;l.length;){const r=l.pop();let t=a.length;for(;t--;){let{better:i,worse:f}=Ae(r,a[t],e);if(f)continue e;i&&a.splice(t,1)}a.push(r)}return a}function Ae(s,e,l){let a=!0,r=!0,t=0;for(;(a||r)&&t<l.length;){const i=l[t](s,e);i<0?r=!1:i>0&&(a=!1),t++}return{better:a,worse:r}}var xs=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60,-1357906425\r
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
`;const Os=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost","Upgrades"],Hs=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number","number[]"],Qe=xs.trim().split(`\r
`).map(s=>{const e=s.split(",");let l={};for(let a=0;a<e.length;a++){let r;switch(Hs[a]){case"number":r=Number(e[a]);break;case"boolean":r=e[a]==="True";break;case"number[]":e[a]===""?r=[]:r=e[a].split(":").map(t=>Number(t));break;default:r=e[a]}l[Os[a]]=r}return l});class Es{constructor(e){G(this,"Staple");G(this,"Tags");G(this,"StapleWhenMissing");G(this,"Appliance");G(this,"IsRemoved");G(this,"Filter");G(this,"DecorationRequired");G(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var pe=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(pe||{}),he=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(he||{});const Le={DefaultShoppingTag:892};var cs=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(cs||{}),Ze=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(Ze||{});const as=new Map,ls=new Map;for(const s of Qe)as.set(s.ID,s),ls.set(s.Name,s);const Be=new Map,Gs=new Map,zs=new Map;{let s=!0;const e=Qe.filter(a=>a.Upgrades.length);for(const a of e)for(const r of a.Upgrades)Be.has(r)||Be.set(r,new Set),(ks=Be.get(r))==null||ks.add(a.ID);for(;s;){s=!1;for(const[a,r]of Be){const t=r.size;for(const i of r)for(const f of Be.get(i)??[])r.add(f);t!==r.size&&(s=!0)}}for(const[a,r]of Be)r.delete(a),zs.set(a,Array.from(r));const l=Array.from(Be.entries()).map(a=>{var r;return`${(r=as.get(a[0]))==null?void 0:r.Name}:${Array.from(a[1]).map(t=>{var i;return(i=as.get(t))==null?void 0:i.Name}).join(", ")}`});for(const a of Be)Gs.set(a[0],Array.from(a[1]));console.log(l)}Qe.filter(s=>s.Name==="Booking Desk"||s.Name==="Blueprint Cabinet").sort((s,e)=>s.Name<e.Name?1:-1);const Me=Qe;var qs="38";const hs=Number(qs);function Vs(s,e){return Math.floor(Math.random()*(e-s))+s}function rs(s,e){let l=s.length;for(;l-- >1;){let a=e===void 0?Vs(0,l+1):e.range(0,l+1);[s[l],s[a]]=[s[a],s[l]]}return s}const Ls="12345678",Us="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of Us);for(const s of Ls);function ve(s){return s.length?s.reduce((e,l)=>e+l,0)/s.length:0}class xe{constructor(e,l){G(this,"fixedSeed");G(this,"instance");G(this,"random");typeof e=="string"&&(e=$s(e)),this.fixedSeed=e,this.instance=l,this.random=new ts(e+Math.imul(124192293,l))}useSubcontext(e){return new xe(this.fixedSeed,124192293*e+this.instance)}}class ts{constructor(e){G(this,"seed");const l=f=>Math.imul(1812433253,f)+1>>0,a=e>>0,r=l(a),t=l(r),i=l(t);this.seed=[a,r,t,i]}get value(){let e=this.seed.shift(),l=this.seed[2];return e^=e<<11,e^=e>>>8,l^=l>>>19,l=(l^e)>>0,this.seed.push(l),l}range(e,l){return(this.value>>>0)%(l-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function $s(s){const l=new TextEncoder().encode(s);let a=5381,r=l.length;for(;r--;)a=(a<<5)+a+l[r];return a>>0}function fs(s,e,l){return new xe(l,s*1231231+e)}var Oe=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(Oe||{}),U=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(U||{});const js=["Auto Plater","Dish Rack","Plates","Dish Washer"],ps={},ds=ls.get("Sink");for(const s of js)ps[s]=!0;const gs=Me.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length,Ws=["Blueprint Cabinet","Booking Desk"].map(s=>Me.filter(e=>e.Name===s)[0]);class _s{constructor(e,l=0){G(this,"seed");G(this,"mapSize");G(this,"numTiles");G(this,"baseUpgradeChance");G(this,"OwnedAppliances");G(this,"Cards");G(this,"Theme");G(this,"extraSpawns");G(this,"cache",new Array(15).fill(0).map(()=>new Map));G(this,"cacheOverridePlated");G(this,"cacheOverrideProcesses");G(this,"baseSpawnCount");G(this,"newestCard");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=l,this.OwnedAppliances=[...Ws],this.Cards=[],this.Theme=Ze.Null,this.baseSpawnCount=5,this.extraSpawns=[]}clearCache(){}getLayoutInfo(){const l=new xe(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"?(this.baseUpgradeChance=.25,this.baseSpawnCount=7):e.Name==="Christmas Rush"&&(this.extraSpawns=[ls.get("Conveyor")]),e.Name==="Lake"&&(this.baseUpgradeChance=.2),e.UnlockGroup===Oe.PrimaryTheme&&(this.Theme=Ze[e.Name]),this.newestCard=e)}handleNewestRerollEffects(){this.handleNewCardRerollEffects(this.newestCard)}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(l=>Me.filter(a=>a.ID===l))))}addCard(e){var l;e!==void 0&&(((l=this.newestCard)==null?void 0:l.ID)===e.ID&&(this.newestCard=void 0),this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}_getNetPrngAdvancements(e,l,a){let r=0,t=e.blueprintCount;return l%5===0&&(t+=8-this.baseSpawnCount,a&&(t+=2)),r+=t*(gs-1+1),e.spawnInside||(r+=ms(e.playerInside,this.numTiles)),r+=hs,r}getPrngAdvancements(e,l){let a=0;for(let r=0;r<e.length;r++){const t=e[r];let i=t.blueprintCount;l%5===0&&(i+=8-this.baseSpawnCount,r===0&&(i+=2)),a+=i*(gs-1+1),t.spawnInside||(a+=ms(t.playerInside,this.numTiles)),a+=hs}return a}buildShopOptions(e,l,a,r,t){const i=a.some(o=>o.Name==="Couples");let f=[];for(const o of Me)if(!(!o.IsPurchasable&&!o.IsPurchasableAsUpgrade)){var n=new Es(o);const k=n.Appliance.Name;(n.Staple==pe.NonStaple||n.Staple==pe.WhenMissing)&&((n.Tags&he.Basic)>he.None?n.Staple=pe.FixedStaple:n.StapleWhenMissing?(k!="Research Desk"&&k!="Blueprint Cabinet"&&k!="Plates"&&console.log(`Unexpected ${k} StapleWhenMissing Appliance`),e.some(F=>F.ID===n.Appliance.ID)?n.Staple=pe.NonStaple:n.Staple=pe.WhenMissing):i&&k==="Flower Pot"&&(n.Staple=pe.BonusStaple));const u=n.Appliance;e:{if(u.SellOnlyAsDuplicate){if(!e.some(F=>F.ID===u.ID)){n.IsRemoved=!0;break e}}else if(u.RequiresForShop.length>0){let F=!1;for(const g of u.RequiresForShop)e.some(D=>D.ID===g)&&(F=!0);if(!F){n.IsRemoved=!0;break e}}else if(u.SellOnlyAsUnique&&(u.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${u.Name}, ${u.ID}`),e.some(F=>F.ID===u.ID))){n.IsRemoved=!0;break e}if(ps[k]&&(r??a.every(F=>!F.isMain||F.Name==="Tacos"||F.Name==="Sandwiches"))){n.IsRemoved=!0;break e}if(n.Filter==cs.RefreshableProvider&&!e.some(F=>F.AllowRefreshes)){n.IsRemoved=!0;break e}if(n.DecorationRequired!=Ze.Null&&n.DecorationRequired!=l){n.IsRemoved=!0;break e}if(u.RequiresProcessForShop.length>0||u===ds){let F=!0;if(u===ds&&a.some(g=>g.IngredientProviders.includes(-266993023))&&(F=!1),u.RequiresProcessForShop.length>0&&(t?u.RequiresProcessForShop.some(g=>t.includes(g)):u.RequiresProcessForShop.some(g=>a.some(D=>D.RequiredProcesses.includes(g))))&&(F=!1),F){n.IsRemoved=!0;break e}}}f.push(n)}return f}initRandom(e){return fs(823828,e,this.seed)}getAppliances(e,l,a,r){var u;(a!==this.cacheOverridePlated||(r==null?void 0:r.length)!==((u=this.cacheOverrideProcesses)==null?void 0:u.length)||r!=null&&r.some((F,g)=>{var D;return F!==((D=this.cacheOverrideProcesses)==null?void 0:D[g])}))&&(this.cacheOverridePlated=a,this.cacheOverrideProcesses=r,this.cache.forEach(F=>F.clear()));const t=e.length===1,i=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let f=e[e.length-1].blueprintCount,n;if(l%5==0){t?f=10:f+=8-this.baseSpawnCount,n=[];for(let F=0;F<f;F++)n[F]=he.Decoration;if(t)for(const F of[1,2])n[n.length-F]=he.SpecialEvent}else if(e.length>1){n=[];for(let F=0;F<f;F++)n[F]=Le.DefaultShoppingTag}else{const F=Le.DefaultShoppingTag,g=Math.max(1,f),D=Math.max(0,Math.min(i.filter(T=>T.Staple!==pe.NonStaple&&!T.IsRemoved).length,Math.max(2,4-Math.floor(l/5)),g)),M=Math.max(0,g-D);f=g,n=[];for(let T=0;T<D;T++)n[T]=he.Basic;for(let T=D;T<D+M;T++)n[T]=F}const o=this.initRandom(l).random;let c=this.getPrngAdvancements(e.slice(0,e.length-1),l);if(this.cache[l]&&this.cache[l].has(c)&&this.cache[l].get(c).length>=f)return this.cache[l].get(c).slice(0,f);const k=c;for(;c--;)o.value;{const F=[...i],g=[],D=this.getUpgradeChance(l),M=[];for(let T=0;T<f;T++){const $=n[T],v=o.valueFloat<D;rs(F,o);for(let Q=0;Q<F.length;Q++){const E=F[Q];if(E.IsRemoved||M.includes(E.Appliance)||!E.MatchesRequestTags($)||!v&&E.Staple==pe.NonStaple&&E.SellAsUpgrade)continue;$!=he.Decoration&&M.push(E.Appliance),g[T]=E.Appliance;break}g[T]==null}return e.length===1&&g.splice(0,0,...this.extraSpawns),this.cache[l]||(this.cache[l]=new Map),this.cache[l].set(k,g),g}}_getAllAppliances(e,l,a,r){const t=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,a,r);let i,f;if(l%5==0)i=[],f=he.Decoration;else if(e)f=Le.DefaultShoppingTag,i=[];else{const o=Le.DefaultShoppingTag,c=Math.max(0,Math.min(t.filter(k=>k.Staple!==pe.NonStaple&&!k.IsRemoved).length,Math.max(2,4-Math.floor(l/5))));i=[];for(let k=0;k<c;k++)i[k]=he.Basic;f=o}const n=this.initRandom(l).random;for(;e--;)n.value;{const o=[...t],c=[],k=this.getUpgradeChance(l),u=[];let F=-1;for(;;){F++;let g=i.shift();g===void 0&&(g=f);const M=n.valueFloat<k;rs(o,n);for(let T=0;T<o.length;T++){const $=o[T];if($.IsRemoved||u.includes($.Appliance)||!$.MatchesRequestTags(g)||!M&&$.Staple==pe.NonStaple&&$.SellAsUpgrade)continue;g!=he.Decoration&&u.push($.Appliance),c[F]=$.Appliance;break}if(c[F]==null)break}return c}}_getAppliances(e,l,a,r,t){var u;(r!==this.cacheOverridePlated||(t==null?void 0:t.length)!==((u=this.cacheOverrideProcesses)==null?void 0:u.length)||t!=null&&t.some((F,g)=>{var D;return F!==((D=this.cacheOverrideProcesses)==null?void 0:D[g])}))&&(this.cacheOverridePlated=r,this.cacheOverrideProcesses=t,this.cache.forEach(F=>F.clear()));const i=e===0,f=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards,r,t);let n=l.blueprintCount,o;if(a%5==0){i?n=10:n+=8-this.baseSpawnCount,o=[];for(let F=0;F<n;F++)o[F]=he.Decoration;if(i)for(const F of[1,2])o[o.length-F]=he.SpecialEvent}else if(e){o=[];for(let F=0;F<n;F++)o[F]=Le.DefaultShoppingTag}else{const F=Le.DefaultShoppingTag,g=Math.max(1,n),D=Math.max(0,Math.min(f.filter(T=>T.Staple!==pe.NonStaple&&!T.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),g)),M=Math.max(0,g-D);n=g,o=[];for(let T=0;T<D;T++)o[T]=he.Basic;for(let T=D;T<D+M;T++)o[T]=F}const c=this.initRandom(a).random;if(this.cache[a].has(e)&&this.cache[a].get(e).length>=n+(e?0:this.extraSpawns.length))return this.cache[a].get(e).slice(0,n);const k=e;for(;e--;)c.value;{const F=[...f],g=[],D=this.getUpgradeChance(a),M=[];for(let T=0;T<n;T++){const $=o[T],v=c.valueFloat<D;rs(F,c);for(let Q=0;Q<F.length;Q++){const E=F[Q];if(E.IsRemoved||M.includes(E.Appliance)||!E.MatchesRequestTags($)||!v&&E.Staple==pe.NonStaple&&E.SellAsUpgrade)continue;$!=he.Decoration&&M.push(E.Appliance),g[T]=E.Appliance;break}g[T]==null}return e||g.splice(0,0,...this.extraSpawns),this.cache[a].set(k,g),g}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function ms(s,e){return s?e-2:e-1}var Ks=`373996608,Ice Cream,1,,934171642,,-1533430406,False,False,5,1,2\r
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
-1992316049,Mushroom Pies,1,-133939790,,2087693779:1972879238:-523839730,-1097889139:925796718,False,False,2,1,0\r
-1802123036,Vegetable Pies,1,-133939790,,2087693779:1972879238:-523839730,925796718:-452101383:-1573812073,False,False,2,1,0\r
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
-204178430,Steak Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,2,1,0\r
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
-437161441,Bamboo Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,2,1,0\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779:620897674,925796718:-484165118:-452101383:380220741:-266993023,True,False,0,2,8\r
137627410,Seaweed,1,367917843,,1972879238,595306349,False,False,2,1,0\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2\r
1642878331,Mushroom Stir Fry,1,-1653221873,,2087693779:1972879238:620897674,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,2,1,0\r
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
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,5,1,2\r
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,5,1,2\r
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023:-266993023,False,False,5,1,3\r
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
-1272159363,Sandwiches,1,,,2087693779:-523839730:1972879238,925796718:-1673135814:1193867305:-712909563:-266993023,True,False,0,1,3\r
641008296,Club Sandwiches,1,-72176411:-778718372,,,-1506824829:961148621:-1963699221,True,False,1,2,5\r
-1795285445,Giant Sandwiches,1,-1272159363,,,,True,False,1,2,3\r
-72176411,Toast Sandwich,1,-1272159363,,1972879238,,True,False,1,1,5\r
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
`,Ys=`-959076098,Steak,1,1972879238:620897674,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779:620897674,1193867305:-712909563:380220741,True,False,0,-1,3\r
550743424,Pizza,1,2087693779:1972879238:-523839730:620897674,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779:620897674,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,5,-2,1\r
-1778969928,Burgers,1,1972879238:620897674,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,1972879238:620897674,-1506824829:380220741,True,False,0,1,5\r
-1272159363,Sandwiches,1,2087693779:-523839730:1972879238,925796718:-1673135814:1193867305:-712909563,True,False,0,1,3\r
-133939790,Pies,1,1972879238:-523839730:620897674,925796718:-484165118:380220741,True,False,0,1,8\r
1113735761,Cakes,0,1972879238:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,5,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779:620897674,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
934171642,Sundaes,1,,-1533430406:602693523,False,False,5,0,0\r
1743900205,Fish,1,1972879238:620897674,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238:620897674,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:1972879238:620897674,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238:620897674,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`;const we=Ks.trim().split(/\r?\n/).filter(s=>s).map(s=>{var de,w;const[e,l,a,r,t,i,f,n,o,c,k,u]=s.split(","),F=Number(e),g=Number(a),D=r!=null&&r.length?r.split(":").map(X=>Number(X)):[],M=t.length?t.split(":").map(X=>Number(X)):[],T=i!=null&&i.length?(de=i==null?void 0:i.split(":"))==null?void 0:de.map(X=>Number(X)):[],$=f!=null&&f.length?(w=f==null?void 0:f.split(":"))==null?void 0:w.map(X=>Number(X)):[],I=n==="True",v=o==="True",Q=Number(c),E=Number(k),Y=Number(u);return{ID:F,Name:l,UnlockGroup:g,Requires:D,BlockedBy:M,RequiredProcesses:T,IngredientProviders:$,isMain:I,isStarterOrSide:v,DishType:Q,CustomerMultiplier:E,DishValue:Y}}),Ts=[{ID:447437163,Name:"Country",UnlockGroup:Oe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:U.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:Oe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:U.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:Oe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:U.Null,CustomerMultiplier:0,DishValue:0},we.filter(s=>s.Name==="Community")[0],we.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:Oe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:U.Null,CustomerMultiplier:0,DishValue:0},we.filter(s=>s.Name==="Christmas Rush")[0],{ID:-1893039732,Name:"Lake",UnlockGroup:Oe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:U.Null,CustomerMultiplier:0,DishValue:0}],Js=[...Ts].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey","Sundaes"].map(s=>we.filter(e=>e.Name===s)[0]);const bs=Ys.trim().split(`\r
`).filter(s=>s).map(s=>{var v,Q;const[e,l,a,r,t,i,f,n,o,c]=s.split(","),k=Number(e),u=Number(a),F=r!=null&&r.length?(v=r==null?void 0:r.split(":"))==null?void 0:v.map(E=>Number(E)):[],g=t!=null&&t.length?(Q=t==null?void 0:t.split(":"))==null?void 0:Q.map(E=>Number(E)):[],D=i==="True",M=f==="True",T=Number(n),$=Number(o),I=Number(c);return{ID:k,Name:l,UnlockGroup:u,Requires:[],BlockedBy:[],RequiredProcesses:F,IngredientProviders:g,isMain:D,isStarterOrSide:M,DishType:T,CustomerMultiplier:$,DishValue:I}}).sort((s,e)=>s.Name<e.Name?-1:1),H={};for(const s of bs)H[s.Name]=s;for(const s of we)H[s.Name]=s;for(const s of Ts)H[s.Name]=s;H.Coffee=H["Black Coffee"],H.Community.AKA="Autumn",H["Christmas Rush"].AKA="North Pole",H.Couples.AKA="Romantic",H["Cherry Pie"]=H["Cherry Pies"],H["Mushroom Pie"]=H["Mushroom Pies"];for(const s of we)s.AKA&&(H[s.AKA]=s);{H.Sandwiches.DishValue=3,H["Sundaes I: Scoops"]={...H.Sundaes,Name:"Sundaes I: Scoops",DishValue:3},H["Sundaes II: Homemade"]={...H.Sundaes,Name:"Sundaes II: Homemade",CustomerMultiplier:H.Sundaes.CustomerMultiplier+1,IngredientProviders:[-1857890774,-1857890774,-2133205155,120342736,-217313684,1872560572,783588616,602693523],DishValue:5},H.Sundaes.altVersions=[H["Sundaes I: Scoops"],H["Sundaes II: Homemade"]],H["Spaghetti I: Traditional"]={...H.Spaghetti,Name:"Spaghetti I: Traditional",CustomerMultiplier:H.Spaghetti.CustomerMultiplier-1},H["Spaghetti II: Extra Starch"]={...H.Spaghetti,Name:"Spaghetti II: Extra Starch",IngredientProviders:[...H.Spaghetti.IngredientProviders,1159228054],DishValue:H.Spaghetti.DishValue+1},H.Spaghetti.altVersions=[H["Spaghetti I: Traditional"],H["Spaghetti II: Extra Starch"]];for(const s of["Sundaes I: Scoops","Sundaes II: Homemade","Spaghetti I: Traditional","Spaghetti II: Extra Starch"])bs.push(H[s])}const ns=new Map;for(const s of we)ns.has(s.ID)?(ys=ns.get(s.ID))==null||ys.push(s):ns.set(s.ID,[s]);const Qs=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Zs=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],je={};function Ie(s){if(je[s]===void 0)switch(je[s]=Me.filter(e=>e.Name===s)[0],s){case"Display Stand":je[s].PurchaseCost=120*2;break}if(je[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return je[s]}const Xs=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function We(s){let e=0;return(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime),e+=s.actionHistory.length,e+=s.cumulativeRerolls*2,e+=s.actionHistory.reduce((l,a)=>{var r;return a.includes("take ")?l+3+Number((r=a.match(/(\d+)/))==null?void 0:r[0]):l},0),e}function _e(s,e,l=!1){return(a,r)=>{const t=a.achieved[e],i=r.achieved[e],f=Math.min(t.goalsPurchased,s),n=Math.min(i.goalsPurchased,s),o=Math.min(t.goalsPurchased+t.substitutesPurchased,s),c=Math.min(i.goalsPurchased+i.substitutesPurchased,s),k=Math.min(o,c)>=s;let u=c-o;return k&&u===0&&(u=t.goalsPurchased+t.substitutesPurchased-(i.goalsPurchased+i.substitutesPurchased)),u===0&&(u=(l?1:-1)*(f-n)),u===0&&a.deskTime!==void 0&&(u=a.deskTime-r.deskTime),u}}const ea={Oven:0,"Brownie Tray":4,"Prep Station":0,Workstation:2,"Sharp Knife":0,"Scrubbing Brush":0,Mince:15,"Cake Tin":15,"Discount Desk":1,"Copying Desk":1,"Metal Table":4,"Power Sink":0,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":1,"Safety Hob":2,"Grabber - Rotating":2,Grabber:1,"Smart Grabber":3,Freezer:2,Bin:0,Conveyor:0},sa=[6,6,7,4,6,6,7,8,11,8,7,11,10,7,11];function aa(s,e,l,a,r=!0,t=Zs,i=Qs,f=sa,n=()=>{},o=15){var Ms,vs,Bs;let c={};const k=[],u=new Array(a.length).fill(0).map(()=>({})),F={};let g=0,D=0;const M={},T=e.some(d=>d.Name==="Turbo"),$=e.some(d=>d.Name==="Lake"),I=[(d,h)=>h.fps-d.fps||d.deskTime-h.deskTime,(d,h)=>h.upgradesInProgress.length-d.upgradesInProgress.length||d.deskTime-h.deskTime,(d,h)=>h.money-d.money||d.deskTime-h.deskTime,(d,h)=>d.cumulativeRerolls-h.cumulativeRerolls||d.deskTime-h.deskTime,(d,h)=>h.upgradesInProgress.filter(R=>R.upgradeTurnTimer).length-d.upgradesInProgress.filter(R=>R.upgradeTurnTimer).length||d.upgradesInProgress.reduce((R,_)=>R+_.upgradeTurnTimer,0)-h.upgradesInProgress.reduce((R,_)=>R+_.upgradeTurnTimer,0)];let v=[],Q=0;const E={};for(const d of a){for(const h of d){const{goal:R,number:_,substitutes:q,skipMissing:le=!1}=h;for(const j of q)F[j]||(F[j]=[]),F[j].push(R),j==="Flower Pot"&&console.log({substitutesToGoalMap:F});E[R]?le||(E[R].number+=_):(E[R]={...h},le&&(E[R].number=0));for(let j=0;j<=Q;j++){if(u[j]===void 0)debugger;u[j][R]?u[j][R].number+=_:u[j][R]={...h}}for(let j=Q+1;j<u.length;j++){if(u[j]===void 0)debugger;u[j][R]||(u[j][R]={...h,number:0})}le||(D+=_*Math.ceil(Ie(R).PurchaseCost*(T?.5:$?.75:1)))}try{k.push(JSON.parse(JSON.stringify(E)))}catch{console.log(u),console.log(u[0]);debugger}Q++}const Y=u[0],de=Object.values(Y).sort((d,h)=>Ie(d.goal).PurchaseCost-Ie(h.goal).PurchaseCost).map(d=>d.goal);c=k.shift();for(const d of Object.values(Y)){const{goal:h,number:R}=d;M[h]={...d,substitutesPurchased:0,goalsPurchased:0},d.goal!=="Starter Bin"&&(I.push(_e(R,h)),v.push(_e(R,h)),v.push(_e(R,h,!0)))}const w=new Te([],[...I,(d,h)=>h.money-d.money,(d,h)=>We(d)-We(h),(d,h)=>d.cumulativeRerolls-h.cumulativeRerolls]),X=T?7:5,Ue=[{spawnInside:!0,blueprintCount:X},{spawnInside:!1,playerInside:!1,blueprintCount:X}];r||Ue.push({spawnInside:!1,playerInside:!0,blueprintCount:X});const us=[{spawnInside:!0,blueprintCount:X},{spawnInside:!1,playerInside:!0,blueprintCount:X},{spawnInside:!1,playerInside:!1,blueprintCount:X}];function x(d,h,R){const _={...d};for(const q of Object.values(h)){const le=q.goal;_[le]={..._[le]},le==="Copying Desk"&&(_[le].goalsPurchased+=_[le].substitutesPurchased,_[le].substitutesPurchased=0),_[le].goalsPurchased+=q.goalsPurchased,_[le].substitutesPurchased+=q.substitutesPurchased}return _}let J=[];function Ye(d,h,R,_=!1){var ge,be,ke,re,oe,Ne,b,N,S,L,K;const q=h.fodderUsed;let le=h.achieved.Supplies.goalsPurchased&&(!h.achieved["Leftover Bags"].goalsPurchased||!h.actionHistory.join(", ").match(/buy Leftover Bags.*reroll.*buy Supplies/i)),j=0,Ce=0;e:for(const y of d){if(le&&!y.achieved["Leftover Bags"].goalsPurchased)continue;let se=1+(y.achieved["Copying Desk"].goalsPurchased?1:0);const V=y.upgradesInProgress.filter(p=>p.appliance==="").length;let Z=V;if(Z*=se,Z<0)continue;const O=h.actionHistory.length?x(y.achieved,h.achieved):structuredClone(y.achieved);let B=0,m=[...y.upgradesInProgress];if(Z<q)if((V+m.filter(p=>p.appliance==="Mince").length)*se>=q){let p=0;for(;(V+p*2)*se<q;)p++;let C=0;for(;p;)m[C].appliance==="Mince"&&(m[C]={appliance:"",cost:0,upgradeTurnTimer:0},m.push({appliance:"",cost:0,upgradeTurnTimer:0}),p--),C++}else continue;B=Math.max(0,q-m.filter(p=>p.appliance==="").length);let ae=(((ge=y.achieved["Discount Desk"])==null?void 0:ge.goalsPurchased)??0)+(((be=y.achieved["Discount Desk"])==null?void 0:be.substitutesPurchased)??0)-y.upgradesInProgress.filter(p=>p.appliance==="Discount Desk").length>0,Fe=0;B===0?Fe=8:m.length<=4?Fe=4:y.achieved["Copying Desk"].goalsPurchased>1?m.length<16?Fe=7:Fe=6:Fe=3;let ue=0,me=0,ce=0;m=m.flatMap(p=>{let C=[];return Ps||y.achieved["Research Desk"].goalsPurchased?(C.push({...p,upgradeTurnTimer:p.upgradeTurnTimer-1,cost:ae?Math.ceil(p.cost/2):p.cost}),Fe--):ae?(C.push({...p,cost:Math.ceil(p.cost/2)}),Fe--):C.push(p),Fe<=0&&(ae=!1),C}),B<y.achieved["Copying Desk"].goalsPurchased*8&&(m.sort((p,C)=>p.cost-C.cost),m=m.flatMap(p=>{let C=[p];return B<y.achieved["Copying Desk"].goalsPurchased*8&&(p.appliance==="Mince"?B<y.achieved["Copying Desk"].goalsPurchased*8&&(me+=p.cost,ce++,B++,C.push({appliance:"",cost:0,upgradeTurnTimer:0})):p.appliance==="Cake Tin"?(me+=p.cost,ue++,ce++,B++,p.upgradeTurnTimer<=1&&(ue++,ce++)):p.appliance==="Freezer"?(O.Freezer.goalsPurchased++,me+=p.cost,B++,ce++):["Grabber","Dining Table","Ice Cream"].includes(p.appliance)&&O[p.appliance].goalsPurchased+O[p.appliance].substitutesPurchased<O[p.appliance].number&&(O[p.appliance].goalsPurchased++,me+=p.cost,B++,ce++)),C})),m=m.map(p=>p.upgradeTurnTimer>0?p:{appliance:"",cost:0,upgradeTurnTimer:0});let Ge=0;{let p=h.actionHistory.length,C=!1;for(;p--;)if(h.actionHistory[p]==="buy Blueprint Cabinet")Ge++;else if(h.actionHistory[p].includes(" for ")){C||(Ge=0);break}else h.actionHistory[p].includes("reroll")&&(C=!0)}for(let p=0;p<h.achieved["Blueprint Cabinet"].goalsPurchased-Ge;p++)m.push({appliance:"",cost:0,upgradeTurnTimer:0});let ze=y.cumulativeRerolls+h.cumulativeRerolls;if(ze>Ee)continue;let qe=ze*(ze+1)/2*10+y.applianceCosts+me;const ie=structuredClone(O);for(const p of m)p.appliance&&(ie[p.appliance]=structuredClone(ie[p.appliance]),ie[p.appliance].goalsPurchased--);if(h.cumulativeRerolls&&qe>te)continue;let ye=[],ws=0,Is=1;const Rs=m.filter(p=>!p.appliance).length;{let p=te-qe;for(const C of de){const A=h.achieved[C],P=Math.ceil(Ie(A.goal).PurchaseCost*(T?.5:$?.75:1));if(p-=(A.goalsPurchased+A.substitutesPurchased)*P,A.substitutesPurchased){let W=ea[A.goal]??1;if(A.goal==="Grabber"&&h.actionHistory.some(ee=>ee.includes("Conveyor for Grabber"))&&(W=1),A.goal!=="Freezer")if(A.goal==="Dish Washer"){const ee=(ke=h.actionHistory.filter($e=>$e.includes(" for Dish Washer"))[0].match(/buy (.*) for Dish Washer/))==null?void 0:ke[1];if(!ee)throw"nope";W=["Dish Washer","Wash Basin","Power Sink","Soaking Sink","Sink"].indexOf(ee),W===4&&(W=3)}else A.goal==="Discount Desk"?h.actionHistory.some(ee=>ee.includes("Blueprint Desk for Discount Desk"))&&(W=1):A.goal.includes(" Mixer")&&(h.actionHistory.some(ee=>ee.includes("buy Mixer for "+A.goal))||(W=1));if(W||A.goal==="Grabber")for(let ee=0;ee<A.substitutesPurchased;ee++)p+=P,ye.push({appliance:A.goal,cost:P,upgradeTurnTimer:A.goal==="Grabber"?1:W}),ws+=W}if(p<0)for(let W=0;W<A.goalsPurchased;W++)p+=P,ye.push({appliance:A.goal,cost:P,upgradeTurnTimer:0})}if(ye.length>Rs){let C=ye.length-Rs;const A=ye.filter(P=>P.appliance==="Mince").length;if(m.filter(P=>P.appliance==="Mince").length*2+A>=C-A){let P=0;for(;C>0&&m[P];)m[P].appliance==="Mince"&&(m[P]={appliance:"",cost:0,upgradeTurnTimer:0},m.push({appliance:"",cost:0,upgradeTurnTimer:0}),C-=2),P++;if(C>0){let W=ye.length-1;for(;C>0;)ye[W].appliance==="Mince"&&(ye.splice(W,1),m.push({appliance:"",cost:0,upgradeTurnTimer:0}),C-=2),W--}}if(C>0&&m.filter(P=>P.appliance==="Grabber"||P.appliance==="Dining Table").length>=C){let P=0;for(;C>0&&m[P];)m[P].appliance==="Grabber"&&(ie[m[P].appliance].goalsPurchased++,m[P]={appliance:"",cost:0,upgradeTurnTimer:0},C--),P++}if(C>0&&m.filter(P=>P.appliance==="Dining Table").length>=C){let P=0;for(;C>0&&m[P];)m[P].appliance==="Dining Table"&&(ie[m[P].appliance].goalsPurchased++,m[P]={appliance:"",cost:0,upgradeTurnTimer:0},C--),P++}if(C>0)continue e}for(const C of ye)C.appliance&&(ie[C.appliance]=structuredClone(ie[C.appliance]),ie[C.appliance].goalsPurchased--)}s:if(!ne){let p;try{p=Xe(c,{...y,day:z,achieved:ie,upgradesInProgress:m,fps:y.fps+ue+(((re=h.achieved["Flower Pot"])==null?void 0:re.goalsPurchased)??0)})}catch{}if(!p)break s;let C=1/0;try{C=Xe(c,{...y,day:z,achieved:O,upgradesInProgress:m,fps:y.fps+ue+(((oe=h.achieved["Flower Pot"])==null?void 0:oe.goalsPurchased)??0)})}catch{}if(C>0)continue;let A=Object.values(ie).map(P=>{var W;return[P.goal,(((W=c[P.goal])==null?void 0:W.number)??0)-(P.goalsPurchased+P.substitutesPurchased)]}).filter(P=>P[1]>0);for(let P=0;P<m.length;P++){const W=m[P];for(const ee of A)if(ee[0]===W.appliance){ie[W.appliance].goalsPurchased++,ce++,m[P]={appliance:"",cost:0,upgradeTurnTimer:0},ee[1]--;break}A=A.filter(ee=>ee[1]>0)}if(A.length)continue}{let p=0;for(const C of ye){for(;m[p].appliance;)p++;m[p]=C}for(let C=0;C<Ge;C++)m.push({appliance:"",cost:0,upgradeTurnTimer:0});m.sort((C,A)=>A.cost-C.cost)}let Ve;try{Ve=Xe(c,{...y,day:z,achieved:ie,upgradesInProgress:m,fps:y.fps+ue+(((Ne=h.achieved["Flower Pot"])==null?void 0:Ne.goalsPurchased)??0)})}catch{continue}if(Ve>0&&ne<=0){let p=1/0;try{p=Xe(c,{...y,day:z,achieved:O,upgradesInProgress:m,fps:y.fps+ue+(((b=h.achieved["Flower Pot"])==null?void 0:b.goalsPurchased)??0)})}catch{}if(p>0)continue;let C=Object.values(ie).map(A=>{var P;return[A.goal,(((P=c[A.goal])==null?void 0:P.number)??0)-(A.goalsPurchased+A.substitutesPurchased)]}).filter(A=>A[1]>0);for(let A=0;A<m.length;A++){const P=m[A];for(const W of C)if(W[0]===P.appliance){ie[P.appliance].goalsPurchased++,ce++,m[A]={appliance:"",cost:0,upgradeTurnTimer:0},W[1]--;break}C=C.filter(W=>W[1]>0)}if(C.length){debugger;continue}}qe+=h.applianceCosts;let ss=0;{let p="",C=y.actionHistory.length,A=!0;for(;C--;){const ee=y.actionHistory[C].match(/^(?:spawn|reroll) (..?)/);if(!ee){y.actionHistory[C].match(/^day ..? spawn/)&&(A=!0);continue}if(A){A=!1;continue}p=ee[1][0]}let P=0,W=!0;for(let ee=0;ee<h.actionHistory.length;ee++){ss+=P,P=0;const $e=h.actionHistory[ee].match(/^(?:spawn|reroll) (..?)/);if(!$e){const As=h.actionHistory[ee].match(/take (\d+) out/);As&&(ss+=parseInt(As[1])/3+1);continue}ss++;const fa=$e[1][0],Ns=W?"":$e[1][1];W=!1,p&&(p[0]!==fa&&(P+=3),p[1]&&Ns&&p[1]!==Ns&&(P+=10)),p=$e[1]}}let ha=y.deskTime+(Is-1)*20+Math.max(0,q-V)*5*((N=y.achieved["Clipboard Stand"])!=null&&N.goalsPurchased?.5:1)+(ws*Is*5+(i[h.day]??i.at(-1)??0))*((S=O["Clipboard Stand"])!=null&&S.goalsPurchased?.5:1)+ss+h.cumulativeRerolls*2-3*Math.min(6,4*(((L=ie["Leftover Bags"])==null?void 0:L.goalsPurchased)??0)+8*(((K=ie.Supplies)==null?void 0:K.goalsPurchased)??0))*(z>2?4:1);for(const p of["Grabber","Dining Table","Ice Cream"]){const C=O[p].number-O[p].goalsPurchased-O[p].substitutesPurchased,A=m.filter(P=>P.appliance===p).length;A&&(m=m.map(P=>P.appliance===p?{...P,upgradeTurnTimer:Math.ceil(C/A)}:P))}const Pe={...h,rerollConfigs:[...y.rerollConfigs,h.rerollConfigs],achieved:O,money:te-qe,actionHistory:[...y.actionHistory,...h.actionHistory],upgradesInProgress:m,cumulativeRerolls:y.cumulativeRerolls+h.cumulativeRerolls,applianceCosts:y.applianceCosts+h.applianceCosts+me,deskTime:ha,fps:y.fps+ue};if(ue&&Pe.actionHistory.push(`buy ${ue} flower pot copies`),ce>ue&&Pe.actionHistory.push(`buy ${ce-ue} cab copies`),!(Pe.money<-Pe.upgradesInProgress.reduce((p,C)=>p+C.cost,0))){if(Pe.money>=0||Pe.money+Pe.upgradesInProgress.reduce((p,C)=>p+C.cost,0)>=0&&k.length){if(Ve<ne&&(ne=Ve,console.log(`best so far missing ${Ve} pieces `+Ke(Pe,te))),Ve<=0){if(w.add(Pe)){if(Ds(),w.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(ne<=0)continue}if(_&&(z===1?Z=0:se>1&&(Z+=y.upgradesInProgress.filter(p=>p.appliance==="Mince").length*se)),Z>g&&(g=Z),_){const p=y.cumulativeRerolls;for(let C=0;C<=Z;C++)J[C]===void 0&&(J[C]=new Te([],Xs)),J[C].add([p,qe]);continue}R.array.push(Pe),j+=1/Ve,Ce++}}return-(j+(d.length-Ce)*0)/d.length}const Je={...M};Je["Blueprint Cabinet"]={...Je["Blueprint Cabinet"],goalsPurchased:1};const Re=new Te([{achieved:Je,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:[{appliance:"",cost:0,upgradeTurnTimer:0}],day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0,fps:0}],[...I,(d,h)=>d.upgradesInProgress.map(R=>R.appliance).sort().join(",")===h.upgradesInProgress.map(R=>R.appliance).sort().join(",")?0:1,(d,h)=>d.upgradesInProgress.map(R=>R.appliance).sort().join(",")===h.upgradesInProgress.map(R=>R.appliance).sort().join(",")?0:-1]);let ne=1/0,z=0,te=0;const fe=new _s(s),es=["Research Desk"];let Ps=!1,He=[];{const d=["Booking Desk","Blueprint Cabinet","Leftover Bags"];Me.filter(h=>d.includes(h.Name)).forEach(h=>fe.OwnedAppliances.push(h))}for(const d of e)fe.addCard(d);function ua(d,h,R,_,q,le){var re;let j=[],Ce=[],ge=[];{const oe={...d};d.fodderPurchases[0]?ge.push(oe):j.push(oe)}const be=x(d.achieved,q),ke=["upgrade","base","fodder"];for(let oe=0;oe<h.length;oe++){const Ne=oe+1===h.length;Ne&&ke.includes("fodder")&&ke.pop();const b=h[oe];let N=[...j],S=[...Ce,...ge],L=[];for(const K of ke){if(!b)continue;let y=b.Name,se=be[y],V=!1;switch(K){case"base":if(se&&se.goalsPurchased+se.substitutesPurchased>=Y[y].number)continue;break;case"upgrade":const Z=(re=F[b.Name])==null?void 0:re.filter(B=>B!=="Starter Bin"),O=Z==null?void 0:Z[Math.floor(Math.random()*Z.length)];if(se=be[O],!se||(V=!0,y=O,se.goalsPurchased+se.substitutesPurchased>=Y[y].number))continue;break;case"fodder":se=be["Starter Bin"],y="Starter Bin",V=!0}if(se){b.ThemeRequired&&y!=="Starter Bin"&&(V=!1),V?se.substitutesPurchased++:se.goalsPurchased++;{const Z=O=>{if(!O)return;{let ae=O.actionHistory.length;for(;ae--;){const Fe=O.actionHistory[ae];if(Fe.includes(`buy ${b.Name}`))return;if(Fe.includes("reroll "))break}}if(!O.numFloor)return;const B={...O};if(B.achieved={...B.achieved},!B.numFloor){console.log(h);debugger}if(B.numFloor--,B.achieved[y])B.achieved[y]={...B.achieved[y],goalsPurchased:B.achieved[y].goalsPurchased+(V?0:1),substitutesPurchased:B.achieved[y].substitutesPurchased+(V?1:0)};else if(B.achieved[y]={...se,goalsPurchased:V?0:1,substitutesPurchased:V?1:0},Number.isNaN(B.achieved[y].goalsPurchased))debugger;const m=y==="Starter Bin"?Ie(b.Name).PurchaseCost:Math.max(Ie(b.Name).PurchaseCost,Ie(y).PurchaseCost);return V?B.applianceCosts+=Math.ceil(m*(T?.5:1)):B.applianceCosts+=Math.ceil(m*(T?.5:$?.75:1)),B.actionHistory=[...B.actionHistory,`buy ${b.Name}`+(V?` for ${y}`:"")],y==="Starter Bin"&&(B.fodderPurchases=[...B.fodderPurchases],B.fodderPurchases[1]++,B.achieved[y].substitutesPurchased--),B};if(K!=="fodder"){const O=j.map(Z).filter(ae=>ae);O.forEach(R);const B=Ce.map(Z).filter(ae=>ae);B.forEach(le);const m=Ne?[]:ge.map(Z).filter(ae=>ae);m.forEach(le),N=N.concat(O),S=S.concat(B),L=L.concat(m)}else{const O=(oe===0?j:ge).map(Z).filter(B=>B);O.forEach(le),L=L.concat(O)}}}}j=N.filter(K=>K),Ce=S.filter(K=>K),ge=L.filter(K=>K)}return j.concat(Ce).concat(ge)}let Ee=-1;{let d=t.slice(0,o).reduce((h,R)=>h+R)-D;for(;d>0;)Ee++,d-=10*Ee;console.log({maxCumulativeRerolls:Ee,money:d,expectedMoneyByDay:t,gearMoney:D})}for(Ee=10,Number.isFinite(o)||(Ee=3);ne;){let d=Re.array;const h=d.reduce((b,N)=>{if(!Object.keys(b).length||Math.random()<.3)for(const S in N.achieved){const L=N.achieved[S].goalsPurchased+N.achieved[S].substitutesPurchased;b[S]?L<b[S].goalsPurchased&&(b[S].goalsPurchased=L):b[S]={...N.achieved[S],goalsPurchased:L,substitutesPurchased:0}}return b},{});if(!d.length){debugger;return n("No Solutions"),0}Re.clear();const R=new Te([],[...v,(b,N)=>b.cumulativeRerolls-N.cumulativeRerolls,(b,N)=>b.applianceCosts-N.applianceCosts]);if(te+=t[z]??t.at(-1)??0,z++,z>=o){ca(!0,{array:d});debugger;break}if(z>14&&(T||!l.length)){debugger;break}if(z>1&&d.length===0){debugger;break}const _=5e3;if(console.log(`fastest so far: ${Ke(d[0],te)}`),d.length>_){const b=Math.ceil((d.length-_)/2+_)&&_,N=d.length;d.sort((L,K)=>We(L)-We(K)),d.sort((L,K)=>Se(k.at(-1)??c,L.achieved)-Se(k.at(-1)??c,K.achieved));const S=new Set(d.slice(0,b));debugger;for(const L of d.slice(0,b))S.add(L);d.sort((L,K)=>Se(c,L.achieved)-Se(c,K.achieved));for(const L of d.slice(0,b))S.add(L);d=Array.from(S),b<N&&console.log(`Reducing from ${N} to top ${b} routes, up to ${d.length} on day ${z}`)}let q=2;switch(z){case 77:q=0;break;case 1:case 6:case 7:q=1;break;case 99:q=3;break;case 2:case 3:case 4:case 8:q=2;break;case 99:q=3;break;case 88:q=12;break;default:q=3;break}q=3,q+=1;let le=.5*60*1e3;le=2*60*1e3;const j=Math.min(q-1,1/0);if(te>=D){const b=Math.sqrt((te-D)/10*2);console.log(`Have ${te} on day ${z}, need ${D} to buy everything. Allows for ~${b} rerolls across all days`)}z%5||(q=1);let Ce;(T||z===5||!(z%3))&&(Ce=l.shift());const ge=we.filter(b=>b.Name===Ce)[0];fe.handleNewCardSpawnEffects(ge);const be=fe.getAppliances([{spawnInside:!0,blueprintCount:X}],z);fe.addCard(ge);let ke=[];if(es.length)for(let b=es.length-1;b>=0;b--){let N=be.length;for(;N--;){const S=be[N];if(S.Name===es[b]){if(console.log(`buying ${S.Name} on day ${z}`),te-d.reduce((K,y)=>Math.min(K,y.applianceCosts+10/2*(y.cumulativeRerolls+1)*y.cumulativeRerolls),1/0)<S.PurchaseCost*(T?.5:$?.75:1)){console.log("not enough money-- skip for now");continue}He.push(S),es.splice(b,1),te-=S.PurchaseCost*(T?.5:$?.75:1),be.splice(N,1);break}}ke=He.map(S=>`Buy ${S.Name}`)}let re=new Te([{day:z,rerollConfigs:[],achieved:{...M},numFloor:X,fodderAvailable:g,fodderUsed:0,money:te,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(b,N)=>fe.getPrngAdvancements(b.rerollConfigs,z)-fe.getPrngAdvancements(N.rerollConfigs,z),(b,N)=>-fe.getPrngAdvancements(b.rerollConfigs,z)+fe.getPrngAdvancements(N.rerollConfigs,z),...v,(b,N)=>b.cumulativeRerolls-N.cumulativeRerolls,(b,N)=>b.applianceCosts-N.applianceCosts,(b,N)=>N.numFloor+N.fodderAvailable-b.numFloor+b.fodderAvailable,(b,N)=>b.numFloor-N.numFloor]);z===5&&(re.array[0].applianceCosts=190,re.array[0].cumulativeRerolls=1),J=[],Ye(d,re.array[0],Re,!0);let oe=1/0;const Ne=b=>J.map(N=>N.array.reduce((S,[L,K])=>L+b>Ee?1/0:Math.min(S,K+(L+1+L+b)/2*b*10),1/0));{const b=q;for(;Ne(q-1)[0]>te;)q--;q!==b&&console.log(`clamped max rerolls from ${b} down to ${q}`)}e:for(;q--&&(He.length&&((vs=(Ms=re.array[0])==null?void 0:Ms.rerollConfigs)==null?void 0:vs.length)===1&&(He.some(S=>S.Name==="Research Desk")&&(Ps=!0),fe.OwnedAppliances.push(...He),He=[],ke=[]),oe=Date.now()+le,re.array[0]!==void 0);){console.log(`Seed ${s} Day ${z} Reroll ${re.array[0].rerollConfigs.length} expanding ${re.array.length} states`);let b=re.array;if(!k.length&&ne<=0){const S=b[0].rerollConfigs.length;if(S*((S+1)/2)*10+D>te){console.log("get me outta here!");break}}re.clear();const N=Ne(b[0].rerollConfigs.length);console.log({minSpentMoneyByExtraBlueprints:N});for(const S of b){if(Date.now()>oe){const V=Se(u[0],u[0]),Z=Se(u[1]??u[0],u[1]??u[0]);re.array.sort((O,B)=>{const m=Se(u[1]??u[0],O.achieved),ae=Se(u[1]??u[0],B.achieved);return(`day ${z} spawn, spawn OO, reroll OO, reroll OO, reroll `.indexOf(B.actionHistory.join(", "))===0?1:0)-(`day ${z} spawn, spawn OO, reroll OO, reroll OO, reroll `.indexOf(O.actionHistory.join(", "))===0?1:0)||(O.partialMissing??999)-(B.partialMissing??999)||(z===8?B.achieved["Danger Hob"].goalsPurchased-O.achieved["Danger Hob"].goalsPurchased+B.achieved["Rapid Mixer"].goalsPurchased-O.achieved["Rapid Mixer"].goalsPurchased:0)||(ne?-Math.min(V,2*V-Se(u[0],O.achieved)-ne)+Math.min(V,2*V-Se(u[0],B.achieved)-ne):0)||B.numFloor-O.numFloor||(ne||z===8?1:-1)*(ae*(ae===Z?0:1)-m*(m===Z?0:1))||B.achieved["Danger Hob"].goalsPurchased-O.achieved["Danger Hob"].goalsPurchased||B.achieved["Rapid Mixer"].goalsPurchased-O.achieved["Rapid Mixer"].goalsPurchased||B.achieved.Mince.substitutesPurchased-O.achieved.Mince.substitutesPurchased||-(B.applianceCosts-O.applianceCosts)||-(O.fodderUsed-B.fodderUsed)||Math.random()-.5});continue e}if(S.numFloor+S.fodderAvailable===0||S.money<S.rerollConfigs.length*10)continue;let L=0;if(N[0]>S.money)continue;for(let V=1;V<N.length;V++)if(L++,N[V]>S.money){L=V-1;break}let K=S.rerollConfigs.length?S.numFloor+Math.min(S.fodderAvailable,L-S.fodderUsed):X;S.fodderPurchases[1]&&(K=S.numFloor);const y=j<S.rerollConfigs.length?S.numFloor:S.rerollConfigs.length?Math.max(1,S.numFloor):X;let se;S.rerollConfigs.length===0?se=us:j<S.rerollConfigs.length?se=[S.rerollConfigs.at(-1)]:se=Ue,fe.getAppliances([...S.rerollConfigs,{spawnInside:!0,blueprintCount:K}],S.day);for(const V of se){const Z=m=>{re.add(m)&&R.add(m)},O=m=>{if(!re.add(m)||!R.add(m))return;if(!(m.fodderPurchases[0]+m.fodderPurchases[1])){const ue=Ye(d,m,Re);m.partialMissing=ue}},B=[y];K>y&&B.push(K);for(let m=K-1;m>y;m--)B.push(m);for(const m of B){const ae=[...S.rerollConfigs,{...V,blueprintCount:m}],Fe=ae.length===1?be:fe.getAppliances(ae,S.day),ue=[...Fe].sort((ze,qe)=>ze.PurchaseCost-qe.PurchaseCost),me=m-S.numFloor;if(me>S.fodderAvailable)debugger;const ce={...S,fodderPurchases:[S.fodderPurchases[1],0],money:S.money-S.rerollConfigs.length*10,rerollConfigs:ae,numFloor:ae.length===1?m-He.length:m,fodderAvailable:S.fodderAvailable-me,fodderUsed:S.fodderUsed+me,cumulativeRerolls:S.rerollConfigs.length?S.cumulativeRerolls+1:0,actionHistory:S.rerollConfigs.length?[...S.actionHistory,`${me?`take ${me} out, `:""}reroll ${V.spawnInside?"I":V.playerInside?"OI":"OO"}`]:[`day ${S.day} spawn`,`spawn ${V.spawnInside?"I":V.playerInside?"OI":"OO"}`,...ke]};ce.rerollConfigs.length===1&&ce.rerollConfigs[0].spawnInside===!0?O(ce):Z(ce);let Ge=O;if((!V.spawnInside||m>y&&!Y[Fe.at(-1).Name]&&((Bs=F[Fe.at(-1).Name])!=null&&Bs.every(ze=>!Y[ze])))&&(Ge=Z),ua(ce,ue,Ge,q,h,Z),Date.now()>oe)break}}}}if(fe.addCard(ge),ne<=0){if(!k.length){w.array.sort((b,N)=>N.fps-b.fps),n((ne<=0?`full build on ${s} by day ${z}: 
`:"")+w.array.map(b=>Ke(b,te)).join(`
`));break}for(const b of Object.values(c))b.number&&fe.OwnedAppliances.push(Ie(b.goal));c=k.shift(),u.shift(),v=[];for(const{goal:b,number:N}of Object.values(u[0]))v.push(_e(N,b)),v.push(_e(N,b,!0));if(ne=1/0,J=[],Ds(!0),u.length<=1)debugger;Re.array=w.array,w.clear(),w.objectiveFunctions}}return z;function ca(d=!1,h=Re){(Math.random()<.001||d)&&h.array.sort((R,_)=>_.fps-R.fps||R.deskTime-_.deskTime),n(`tier ${a.length-k.length-(d?1:0)} build on ${s} by day ${z}${d?"":" (Partial)"}: 
`+h.array.slice(0,100).map(R=>Ke(R,te)).join(`
`))}function Ds(d=!1){(Math.random()<.001||d)&&w.array.sort((h,R)=>R.fps-h.fps||h.deskTime-R.deskTime),n(`tier ${a.length-k.length-(d?1:0)} build on ${s} by day ${z}${d?"":" (Partial)"}: 
`+w.array.slice(0,100).map(h=>Ke(h,te)).join(`
`))}}function Xe(s,e){const l=e.achieved,a=e.upgradesInProgress.filter(f=>f.appliance==="Cake Tin").length,r=e.achieved["Copying Desk"].goalsPurchased+e.achieved["Copying Desk"].substitutesPurchased,t=[[33,!1]];for(const[f,n]of t){const o=Math.min(8*r,a),c=e.upgradesInProgress.length+e.upgradesInProgress.filter(k=>k.appliance==="Mince").length*2;Math.min(Math.ceil(Math.min(f,Math.max(0,(f-e.fps-(n?a:0))/(o+1-1/(c-a+1)))))),(f-e.fps-(n?a:0))/(8-e.day)}let i=0;for(const f of Object.values(s)){const o=f.number-l[f.goal].goalsPurchased-l[f.goal].substitutesPurchased;i+=Math.max(0,o)}return i}function Se(s,e){var a,r;let l=0;{let t=e["Leftover Bags"].goalsPurchased*4+e.Supplies.goalsPurchased*8;l+=Math.max(0,((a=s["Danger Hob"])!=null&&a.number&&!((r=s["Leftover Bags"])!=null&&r.number)?9:0)-t)}for(const t of Object.values(s)){const f=t.number-e[t.goal].goalsPurchased-e[t.goal].substitutesPurchased;l+=Math.max(0,f)}return l}function Ke(s,e){const l=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${We(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${l}/${e}), `+s.actionHistory.join(", ")+JSON.stringify(s.upgradesInProgress)}const Fs={};function is(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:t,groupSizes:i}=s,f=[e,l,a,r,t,[...i].sort((g,D)=>g-D)].join("|");if(Fs[f])return Fs[f];let n=[0,0,0],o=[0,0,0,0],c=1-.75**t;if(e>0){n[0]=1;let g=1-.75**e;a===.5&&(g*=1.25,c*=1.25),o[0]=i.reduce((D,M)=>D+1+(M-1)*g,0)}const k=i.reduce((g,D)=>g+D);l&&(n[1]=1,o[1]=k),r>0&&(o[2]=k,l?(n[2]=1-.75**r,a===.5&&(n[2]*=1.25)):n[2]=1);let u=1;e>0&&(n[0]*=1+a,u*=1-a,o[0]*=n[0]),l&&(n[1]*=1+u*a,u*=1-a,o[1]*=n[1],o[3]=o[1]*c),r>0&&(n[2]*=1+u*a,u*=1-a,o[2]*=n[2]);const F=[n.map(g=>g*i.length),o];return Fs[f]=F,F}function la(s){const{starters:e,main:l,doubleOrderChance:a,desserts:r,sides:t,groupSizes:i}=s;let f=[0,0,0],n=[0,0,0,0],o=1-.75**e,c=1-.75**r,k=1-.75**t;a===.5&&(o*=1.25,c*=1.25,k*=1.25);const u=M=>{f[0]++,n[0]++;for(let T=0;T<M-1;T++)Math.random()<o&&n[0]++},F=M=>{f[1]++,n[1]+=M;for(let T=0;T<M;T++)Math.random()<k&&n[3]++},g=M=>{f[2]++,n[2]+=M};for(const M of i){let T=!1;e>0&&(u(M),!T&&Math.random()<a&&(T=!0,u(M))),F(M),!T&&Math.random()<a&&(T=!0,F(M)),r>0&&Math.random()<c&&(g(M),!T&&Math.random()<a&&(T=!0,g(M)))}return[f,n]}const ra={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},os={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>os[s]=!0);class ta{constructor(e,l=[],a=[]){G(this,"seed");G(this,"mapSize");G(this,"frontDoor");G(this,"startingCards");G(this,"cards");G(this,"playerCount");G(this,"turbo");G(this,"_actionInfoCacheByCards",{});G(this,"_cardsByDay",[]);G(this,"cacheGroupSizes");this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=l,this.cards=a,this.playerCount=ra[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:l});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,t=!1,i=1,f=0,n=[],o=[],c=0,k=[],u=0,F=[],g=0,D=0;for(const w of l)switch(w.Name==="Discounts"&&(i-=.25),w.Name==="All You Can Eat"&&(r=!0),w.Name==="Double Helpings"&&(t=!0),w.DishType){case U.Dessert:w.Name==="Giant Sundaes"&&k.push(...[5,6,7,8].map(X=>X+g)),c++,w.DishValue&&k.push(w.DishValue);break;case U.Starter:w.DishValue&&n.push(w.DishValue),f++;break;case U.Side:w.DishValue&&F.push(w.DishValue),u++;break;case U.Main:case U.Base:if(w.ID===H.Sundaes.ID){w.Name==="Sundaes II: Homemade"?(g=3,k.push(6,7,7,8)):k.push(4,5,5,6),c++;break}if(w.Name==="Tacos"){o.push(2.5);break}if(w.Requires.includes(H.Spaghetti.ID)||w.Name==="Lasagne"){w.DishValue&&o.push(w.DishValue+D);break}else w.Name==="Spaghetti II: Extra Starch"&&D++;w.DishValue&&o.push(w.DishValue)}let M=t?.5:r?.25:0,T=[0,0,0,0];T[0]=ve(n.map(w=>Math.floor((w+(t?3:0))*i))),T[1]=ve(o.map(w=>Math.floor((w+(t?3:0))*i))),T[2]=ve(k.map(w=>Math.floor((w+(t?3:0))*i))),T[3]=ve(F.map(w=>Math.floor((w+(t?3:0))*i)));const[$,I]=is({starters:f,main:!!T[1],doubleOrderChance:M,desserts:c,sides:u,groupSizes:a});let v=0;for(let w=0;w<I.length;w++)v+=I[w]*T[w];const Q=Ss(this.playerCount),E=this.getBookingDeskCount(e),Y=this.getBookingDeskMoney(e);let de=Q*(v+E*Y);return Math.floor(de)}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,t=!1,i=0,f=[],n=[],o=0,c=[],k=0,u=[],F=0,g=0;for(const I of l)switch(I.Name==="All You Can Eat"&&(r=!0),I.Name==="Double Helpings"&&(t=!0),I.DishType){case U.Dessert:if(o++,I.Name==="Giant Sundaes"){c.push(...[5,6,7,8].map(v=>v+F));break}I.DishValue&&c.push(I.DishValue);break;case U.Starter:I.DishValue&&f.push(I.DishValue),i++;break;case U.Side:I.DishValue&&u.push(I.DishValue),k++;break;case U.Main:case U.Base:if(!I.isMain){if(o++,I.ID===H.Sundaes.ID){I.Name==="Sundaes II: Homemade"?(c.push(6,7,7,8),F=3):c.push(4,5,5,6),o++;break}I.DishValue&&c.push(I.DishValue);break}if(I.Name==="Tacos"){n.push(2.5);break}if(I.Requires.includes(H.Spaghetti.ID)||I.Name==="Lasagne"){I.DishValue&&n.push(I.DishValue+g);break}else I.Name==="Spaghetti II: Extra Starch"&&g++;I.DishValue&&n.push(I.DishValue)}let D=t?.5:r?.25:0,M=[0,0,0,0];if(M[0]=ve(f),M[1]=ve(n),M[2]=ve(c),M[3]=ve(u),t)for(let I=0;I<3;I++)M[I]&&(M[I]+=3);return[...is({starters:i,main:!!M[1],doubleOrderChance:D,desserts:o,sides:k,groupSizes:a})]}actionInfo(e){if(e===0)return 0;const l=this.getCardsByDay(e),a=e.toString()+":"+l.map(x=>x.Name).sort().join(","),r=this._actionInfoCacheByCards[a];if(r)return r;let t=0;const i={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let f=0;for(let x=0;x<l.length;x++)if(l[x].DishType!==U.Null){const J=l[x].Name;f=i[J]??20;break}let n=-1,o=[1,1,1],c=[[],[f],[],[]],k=0;const u=this.getGroupSizes(e);let F=!1,g=!1,D=0,M=[],T=[],$=0,I=[],v=0,Q=[],E=!1,Y=!1,de=0,w=0;for(const x of l){switch(x.Name==="All You Can Eat"&&(F=!0),x.Name==="Double Helpings"&&(g=!0),x.Name){case"Picky Eaters":E=!0;break;case"Leisurely Eating":Y=!0,k+=2;break;case"Instant Service":for(let J=0;J<3;J++)o[J]--;break;case"Ice Cream":c[2].push(5.125);break;case"Cheese Board":c[2].push(10);break;case"Cherry Pies":c[2].push(11);break;case"Apple Pies":c[2].push(15);break;case"Pumpkin Pies":c[2].push(16);break;case"Carrot Soup":case"Meat Soup":c[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":o[0]=4,c[0].push(8);break;case"Broccoli Cheese Soup":c[0].push(5),o[0]=4;break;case"Pumpkin Seed":c[0].push(3*8);break;case"Bread":c[0].push(5*3);break;case"Mandarin Starter":c[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":c[3].push(2);break;case"Onion Rings":c[3].push(8);break;case"Corn on the Cob":c[3].push(6);break;case"Chips":c[3].push(7);break;case"Roast Potato":c[3].push(4);break}switch(x.DishType){case U.Dessert:if($++,x.Name==="Giant Sundaes"){I.push(...[5,6,7,8].map(J=>J+de));break}x.DishValue&&I.push(x.DishValue);break;case U.Starter:x.DishValue&&M.push(x.DishValue),D++;break;case U.Side:x.DishValue&&Q.push(x.DishValue),v++;break;case U.Main:case U.Base:if(x.ID===H.Sundaes.ID){x.Name==="Sundaes II: Homemade"?(I.push(6,7,7,8),de=3):I.push(4,5,5,6);break}if(x.Name==="Tacos"){T.push(2.5);break}if(x.Requires.includes(H.Spaghetti.ID)||x.Name==="Lasagne"){x.DishValue&&T.push(x.DishValue+w);break}else x.Name==="Spaghetti II: Extra Starch"&&w++;x.DishValue&&T.push(x.DishValue);break;case U.Extra:x.Name==="Seaweed"?(c[1][0]+=1.75,n+=2):x.Name==="Dumpling - Soy Sauce"?c[1][0]+=.4:x.Name==="Breakfast Beans"?c[1][0]+=1+3/4:x.Name==="Breakfast Eggs"?c[1][0]+=6:x.Name==="Breakfast Extras"&&(n++,c[1][0]+=1.5*2),n++;break}}e>6&&(c[3]=[]),E&&(Y&&!F||(c[1][0]+=2,n++));let X=g?.5:F?.25:0;t+=u.length*k;const[Ue,us]=is({starters:D,main:!0,doubleOrderChance:X,desserts:$,sides:v,groupSizes:u});Ue.forEach((x,J)=>t+=x*o[J]);for(const x of c)for(let J=0;J<x.length;J++)n>0&&(x[J]+=n),n+=1;return us.forEach((x,J)=>{var Ye;if((Ye=c[J])!=null&&Ye.length){if(!J){const Je=Math.ceil(x/c[J].length/3);t+=Je*c[J].reduce((Re,ne)=>Re+ne,0);return}t+=x*ve(c[J])}}),this._actionInfoCacheByCards[a]=t,t}simulateMoney(e){if(e===0)return this.turbo?30:0;const l=this.getCardsByDay(e),a=this.getGroupSizes(e);let r=!1,t=!1,i=[[],[],[],[]],f=0,n=1,o=0,c=0,k=0;for(const v of l)switch(v.Name==="Discounts"&&(n-=.25),v.Name==="All You Can Eat"&&(r=!0),v.Name==="Double Helpings"&&(o+=3,t=!0),v.Name==="Exclusive"&&o++,v.DishType){case U.Main:case U.Base:if(v.ID===H.Sundaes.ID){debugger;f++,v.Name==="Sundaes II: Homemade"?(i[2].push(6,7,7,8),c=3):i[2].push(4,5,5,6);break}if(v.Name==="Tacos"){i[1].push(2.5);break}if(v.Requires.includes(H.Spaghetti.ID)||v.Name==="Lasagne"){v.DishValue&&i[1].push(v.DishValue+k);break}else v.Name==="Spaghetti II: Extra Starch"&&k++;v.DishValue&&i[1].push(v.DishValue);break;case U.Dessert:if(f++,v.Name==="Giant Sundaes"){i[2].push(...[5,6,7,8].map(Q=>Q+c));break}v.DishValue&&i[2].push(v.DishValue);break;case U.Starter:v.DishValue&&i[0].push(v.DishValue);break;case U.Side:v.DishValue&&i[3].push(v.DishValue);break}let u=t?.5:r?.25:0;const[F,g]=la({starters:i[0].length,main:!!i[1].length,doubleOrderChance:u,desserts:f,sides:i[3].length,groupSizes:a});let D=0;for(let v=0;v<g.length;v++){let Q=g[v];for(;Q--;){let E=0,Y=i[v][Math.floor(Math.random()*i[v].length)];const de=Y===2.5;E+=o,Y%1&&(Math.random()<Y%1?Y=Math.ceil(Y):Y=Math.floor(Y)),E+=Y,de&&(E+=(Y-1)*o),D+=Math.floor(n*E)}}const M=Ss(this.playerCount),T=this.getBookingDeskCount(e),$=this.getBookingDeskMoney(e);let I=D+T*$;return Math.ceil(M*I)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}clearCardsCache(){this._cardsByDay=[],this.cacheGroupSizes=void 0}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let l;this.turbo?l=e-1:(l=Math.max(0,Math.floor((e-1)/3)),e>5&&l++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,l)]}return this._cardsByDay[e]}getBookingDeskCount(e,l=1){const a=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(o=>o.Name==="Herd Mentality"))return Math.min(a,3)+1;const r=[],t=this.getCardsByDay(e);let i=1;(this.turbo||t.some(o=>o.Name==="Morning Rush"))&&r.push(.2),(this.turbo||t.some(o=>o.Name==="Lunch Rush"))&&r.push(.5),(this.turbo||t.some(o=>o.Name==="Dinner Rush"))&&r.push(.8);const f=l/this.getDayLength(e),n=.1/a;i+=a-1;for(let o=1;o<a;o++){const c=o/a,k=c-n-f,u=c+n+f;for(let F=r.length-1;F>=0;F--){const g=r[F];k<=g&&g<=u&&r.splice(F,1)}}return i+=r.length,i}getNonRushGroupCount(e){const l=this.getExpectedCustomers(e),a=this.getCardsByDay(e).filter(i=>i.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),t=l*(1+a)/r;return Math.ceil(t)}getCustomerCount(e){return this.getGroupSizes(e).reduce((l,a)=>l+a,0)}_generateMedianGroupSizes(){this.cacheGroupSizes=[];let e=0;const l=(a,r)=>{const t=r-a,i=Math.floor(e*t);return e=(e+1/t)%1,i+a};for(let a=1;a<=15;a++){const r=this.getNonRushGroupCount(a);let t=r,i=[],[f,n]=this.getGroupSizeRange(a);for(;t--;)i.push(l(f,n+1));let o=this.turbo?3:this.getCardsByDay(a).filter(u=>os[u.Name]).length,c;c=Math.ceil(Math.max(1,r*.15));let k=o*c;for(;k--;)i.push(l(f,n+1));this.cacheGroupSizes[a]=i}return this.cacheGroupSizes}getGroupSizes(e){if(this.seed==="_med")if(!this.cacheGroupSizes)this._generateMedianGroupSizes()[e];else return this.cacheGroupSizes[e];const l=this.seed?fs(1997821,e,this.seed).random:new ts(Math.floor(Math.random()*(-1>>>0))),a=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(u=>u.Name==="Herd Mentality");let t=a,i=[],[f,n]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?n=f:this.seed==="_max"&&(f=n);{let u=t-1;for(;u--;)l.value}for(;t--;)i.push(l.range(f,n+1)),!r&&t!==a-1&&l.value;let o=this.turbo?3:this.getCardsByDay(e).filter(u=>os[u.Name]).length,c=Math.ceil(Math.max(1,a*.15)),k=o*c;for(;k--;)i.push(l.range(f,n+1));if(!this.seed||this.seed[0]==="_"){let u=f;for(let F=0;F<i.length;F++)i[F]=u,u++,u>n&&(u=f)}return i}getExpectedGroupSize(e){const l=this.getGroupSizeRange(e);return(l[0]+l[1])/2}getGroupSizeRange(e){let l=1,a=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":a--;break;case"Medium Groups":l++,a+=2;break;case"Large Groups":l+=2,a+=2;break;case"Flexible Dining":l--,a++;break;case"Community":const t=Math.floor((e-1)/3);l+=t,a+=t;break}return[l,a]}getExpectedCustomers(e){const l=this.getReductions(e),a=this.getDayLength(e),r=this.getPlayerModifier(),t=this.getCourseModifier(e),i=this.getDayRate(e),f=this.getCustomersPerHour(e),n=this.getAdvertisingModifier(e);return .85**l*(a/25*i*r)/t*f*n}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(a=>a.Name==="Advertising").length}getDayRate(e){let l=1;switch(e){case 1:l=1.25;break;case 2:l=1.5;break;default:l=1.5+.15*(e-3);break}return e>15&&(l+=.15*(e-15)**1.5),l}getCourseModifier(e){let l=1;const a=this.getCardsByDay(e);return a.some(r=>r.DishType===U.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes"||r.ID===H.Sundaes.ID)&&(l+=.25),a.some(r=>r.DishType===U.Starter)&&(l+=.25),l}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let l=1;return this.turbo&&(l=1.5,l*=1+e/10),l}getReductions(e){return this.getCardsByDay(e).reduce((a,r)=>a+r.CustomerMultiplier,0)}getMapSize(){const l=new xe(this.seed,5078598).useSubcontext(0).random.range(0,8);let a;switch(l){case 0:a="Small (2)";break;case 4:a="Medium (2)";break;case 1:case 5:a="Diner (1)";break;case 2:case 6:a="Large (3)";break;case 3:case 7:a="Huge (4)";break;default:throw new Error}return a}getLayoutInfo(){const l=new xe(this.seed,5078598).useSubcontext(0).random.range(0,8);let a,r;switch(l){case 0:r=70,a=2;break;case 4:r=84,a=2;break;case 1:case 5:r=60,a=1;break;case 2:case 6:r=9*13,a=3;break;case 3:case 7:r=12*16,a=4;break;default:throw new Error}return[a,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new ts(new xe(this.seed,98234234).useSubcontext(0).random.value),l=23;for(;l--;)e.value;return e.range(0,4)}}function Ss(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function na(s,e,l,a){let r=[],t=[],i=[];const f=s.cards.slice(e);let n=new ta(s.seed,l,f);n.playerCount=a;for(let o=1;o<=15;o++)i.push(n.getCustomerCount(o)),r.push(n.guessMoney(o)),t.push(n.getBookingDeskCount(o));return r[0]+=n.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:t,expectedCustomersByDay:i}}var Cs=self;function Fa(s){Cs.postMessage(s)}const ia=[],oa=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:0,substitutes:[],skipMissing:!0},{goal:"Cake Tin",number:20,substitutes:[],skipMissing:!0},{goal:"Mince",number:8,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:0,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:Me.filter(s=>!s.ThemeRequired&&!ia.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];Cs.onmessage=s=>{let{config:e,tiers:l,playerCount:a,maxDay:r=15}=s.data;l=l.filter(F=>F.length);for(const F of l)for(const g of F){const D=Me.filter(M=>M.Name===g.goal)[0];D.ThemeRequired&&(g.substitutes=Me.filter(M=>M.ThemeRequired===D.ThemeRequired).map(M=>M.Name))}for(;!l.at(-1).length;)l.pop();const t=[...oa],i=l.flatMap(F=>F.flatMap(g=>[g.goal,...g.substitutes])),f=t.length-1;t[f].substitutes=t[f].substitutes.filter(F=>!i.some(g=>F===g)),l[l.length-1].push(...t);const n=e.cards.filter(F=>Js.some(g=>g.Name===F.Name)).length+1,o=e.cards.slice(0,n);let{expectedMoneyByDay:c,expectedBookingDesksByDay:k,expectedCustomersByDay:u}=na(e,n,o,a);aa(e.seed,o,e.cards.slice(n).map(F=>F.Name),l,e.solo,c,k,u,Fa,r)}})();
