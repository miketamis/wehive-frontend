import React, { Component } from 'react';
import GoogleMapReact, {Polyline} from 'google-map-react';


const disruptionPoints = [{
    lat: -36.89653,
    lng: 174.70148
},
{
    lat: -36.87328,
    lng: 174.74056
},
{
    lat: -36.86987,
    lng: 174.74881
}];

const r22route = [{
        
lat: -36.88289,
lng: 174.68125
},
{

lat: -36.88287,
lng: 174.68122
},
{

lat: -36.88346,
lng: 174.68078
},
{

lat: -36.88381,
lng: 174.6815
},
{

lat: -36.88434,
lng: 174.68263
},
{

lat: -36.88437,
lng: 174.6827
},
{

lat: -36.88438,
lng: 174.68272
},
{

lat: -36.8844,
lng: 174.68276
},
{

lat: -36.88445,
lng: 174.68272
},
{

lat: -36.88449,
lng: 174.68267
},
{

lat: -36.88452,
lng: 174.68262
},
{

lat: -36.88455,
lng: 174.68256
},
{

lat: -36.88457,
lng: 174.68251
},
{

lat: -36.88477,
lng: 174.68203
},
{

lat: -36.88479,
lng: 174.68205
},
{

lat: -36.88477,
lng: 174.68203
},
{

lat: -36.88537,
lng: 174.68056
},
{

lat: -36.88551,
lng: 174.68023
},
{

lat: -36.88556,
lng: 174.68011
},
{

lat: -36.88558,
lng: 174.68006
},
{

lat: -36.88559,
lng: 174.68001
},
{

lat: -36.88562,
lng: 174.68002
},
{

lat: -36.88559,
lng: 174.68001
},
{

lat: -36.8856,
lng: 174.67997
},
{

lat: -36.88562,
lng: 174.67988
},
{

lat: -36.88563,
lng: 174.67981
},
{

lat: -36.88564,
lng: 174.67973
},
{

lat: -36.88574,
lng: 174.67905
},
{

lat: -36.88575,
lng: 174.67901
},
{

lat: -36.88577,
lng: 174.67895
},
{

lat: -36.88579,
lng: 174.67887
},
{

lat: -36.88582,
lng: 174.67881
},
{

lat: -36.88586,
lng: 174.67875
},
{

lat: -36.8859,
lng: 174.67869
},
{

lat: -36.88595,
lng: 174.67863
},
{

lat: -36.886,
lng: 174.67858
},
{

lat: -36.88605,
lng: 174.67854
},
{

lat: -36.88677,
lng: 174.67812
},
{

lat: -36.88689,
lng: 174.67805
},
{

lat: -36.88715,
lng: 174.6779
},
{

lat: -36.88715,
lng: 174.6779
},
{

lat: -36.88717,
lng: 174.67794
},
{

lat: -36.88715,
lng: 174.6779
},
{

lat: -36.8874,
lng: 174.67776
},
{

lat: -36.88744,
lng: 174.67772
},
{

lat: -36.88748,
lng: 174.67768
},
{

lat: -36.88751,
lng: 174.67763
},
{

lat: -36.88754,
lng: 174.67758
},
{

lat: -36.88757,
lng: 174.67752
},
{

lat: -36.88758,
lng: 174.67746
},
{

lat: -36.8876,
lng: 174.6774
},
{

lat: -36.88768,
lng: 174.67678
},
{

lat: -36.88768,
lng: 174.67674
},
{

lat: -36.8877,
lng: 174.67669
},
{

lat: -36.88771,
lng: 174.67663
},
{

lat: -36.88773,
lng: 174.67659
},
{

lat: -36.88776,
lng: 174.67653
},
{

lat: -36.88779,
lng: 174.6765
},
{

lat: -36.88781,
lng: 174.67647
},
{

lat: -36.88784,
lng: 174.67644
},
{

lat: -36.88788,
lng: 174.67641
},
{

lat: -36.88791,
lng: 174.67639
},
{

lat: -36.88826,
lng: 174.67618
},
{

lat: -36.88828,
lng: 174.67617
},
{

lat: -36.88831,
lng: 174.67614
},
{

lat: -36.88833,
lng: 174.67613
},
{

lat: -36.88849,
lng: 174.67603
},
{

lat: -36.88852,
lng: 174.67601
},
{

lat: -36.88856,
lng: 174.67598
},
{

lat: -36.8886,
lng: 174.67595
},
{

lat: -36.88864,
lng: 174.67591
},
{

lat: -36.88879,
lng: 174.67617
},
{

lat: -36.88891,
lng: 174.67641
},
{

lat: -36.88895,
lng: 174.67649
},
{

lat: -36.88893,
lng: 174.67651
},
{

lat: -36.88893,
lng: 174.67651
},
{

lat: -36.88895,
lng: 174.67649
},
{

lat: -36.88933,
lng: 174.67724
},
{

lat: -36.88976,
lng: 174.67807
},
{

lat: -36.88972,
lng: 174.6781
},
{

lat: -36.88972,
lng: 174.6781
},
{

lat: -36.88976,
lng: 174.67807
},
{

lat: -36.88989,
lng: 174.67832
},
{

lat: -36.88991,
lng: 174.67836
},
{

lat: -36.88993,
lng: 174.67842
},
{

lat: -36.88994,
lng: 174.67847
},
{

lat: -36.88995,
lng: 174.67851
},
{

lat: -36.88996,
lng: 174.67855
},
{

lat: -36.88996,
lng: 174.6786
},
{

lat: -36.88996,
lng: 174.67864
},
{

lat: -36.88996,
lng: 174.67868
},
{

lat: -36.88996,
lng: 174.67873
},
{

lat: -36.88995,
lng: 174.67877
},
{

lat: -36.88995,
lng: 174.67881
},
{

lat: -36.88994,
lng: 174.67884
},
{

lat: -36.88992,
lng: 174.6789
},
{

lat: -36.88981,
lng: 174.67916
},
{

lat: -36.88962,
lng: 174.67961
},
{

lat: -36.8896,
lng: 174.67959
},
{

lat: -36.88962,
lng: 174.67961
},
{

lat: -36.88937,
lng: 174.68021
},
{

lat: -36.8888,
lng: 174.68157
},
{

lat: -36.88866,
lng: 174.6819
},
{

lat: -36.88863,
lng: 174.68188
},
{

lat: -36.88866,
lng: 174.6819
},
{

lat: -36.88848,
lng: 174.68234
},
{

lat: -36.88779,
lng: 174.68398
},
{

lat: -36.88778,
lng: 174.68397
},
{

lat: -36.88779,
lng: 174.68398
},
{

lat: -36.88772,
lng: 174.68413
},
{

lat: -36.88741,
lng: 174.68486
},
{

lat: -36.88753,
lng: 174.68494
},
{

lat: -36.88841,
lng: 174.68552
},
{

lat: -36.8884,
lng: 174.68555
},
{

lat: -36.88841,
lng: 174.68551
},
{

lat: -36.88867,
lng: 174.68569
},
{

lat: -36.88905,
lng: 174.68593
},
{

lat: -36.8891,
lng: 174.68597
},
{

lat: -36.88913,
lng: 174.68599
},
{

lat: -36.88919,
lng: 174.68605
},
{

lat: -36.88925,
lng: 174.6861
},
{

lat: -36.88959,
lng: 174.68647
},
{

lat: -36.89005,
lng: 174.68698
},
{

lat: -36.89017,
lng: 174.68712
},
{

lat: -36.89018,
lng: 174.68712
},
{

lat: -36.8907,
lng: 174.68769
},
{

lat: -36.89075,
lng: 174.68775
},
{

lat: -36.89078,
lng: 174.68778
},
{

lat: -36.89079,
lng: 174.68779
},
{

lat: -36.89079,
lng: 174.68779
},
{

lat: -36.89082,
lng: 174.68783
},
{

lat: -36.89081,
lng: 174.68787
},
{

lat: -36.89081,
lng: 174.68787
},
{

lat: -36.89082,
lng: 174.68783
},
{

lat: -36.89087,
lng: 174.68788
},
{

lat: -36.89109,
lng: 174.68813
},
{

lat: -36.89133,
lng: 174.68838
},
{

lat: -36.89205,
lng: 174.68918
},
{

lat: -36.89226,
lng: 174.68941
},
{

lat: -36.89251,
lng: 174.68968
},
{

lat: -36.89248,
lng: 174.68973
},
{

lat: -36.89248,
lng: 174.68973
},
{

lat: -36.89251,
lng: 174.68968
},
{

lat: -36.89297,
lng: 174.69019
},
{

lat: -36.893,
lng: 174.69023
},
{

lat: -36.89303,
lng: 174.69028
},
{

lat: -36.89305,
lng: 174.69033
},
{

lat: -36.89308,
lng: 174.69039
},
{

lat: -36.89331,
lng: 174.69142
},
{

lat: -36.89326,
lng: 174.69144
},
{

lat: -36.89331,
lng: 174.69142
},
{

lat: -36.89338,
lng: 174.69171
},
{

lat: -36.89349,
lng: 174.69222
},
{

lat: -36.89363,
lng: 174.69286
},
{

lat: -36.89371,
lng: 174.69315
},
{

lat: -36.89382,
lng: 174.69344
},
{

lat: -36.89395,
lng: 174.69371
},
{

lat: -36.8939,
lng: 174.69375
},
{

lat: -36.89395,
lng: 174.69371
},
{

lat: -36.89415,
lng: 174.69411
},
{

lat: -36.89447,
lng: 174.69473
},
{

lat: -36.89451,
lng: 174.69486
},
{

lat: -36.89453,
lng: 174.695
},
{

lat: -36.89453,
lng: 174.69553
},
{

lat: -36.89454,
lng: 174.69578
},
{

lat: -36.89454,
lng: 174.69607
},
{

lat: -36.8945,
lng: 174.69607
},
{

lat: -36.8945,
lng: 174.69607
},
{

lat: -36.89454,
lng: 174.69607
},
{

lat: -36.89455,
lng: 174.69656
},
{

lat: -36.89456,
lng: 174.69767
},
{

lat: -36.89456,
lng: 174.69773
},
{

lat: -36.89456,
lng: 174.69774
},
{

lat: -36.89457,
lng: 174.6978
},
{

lat: -36.89453,
lng: 174.6978
},
{

lat: -36.89453,
lng: 174.6978
},
{

lat: -36.89453,
lng: 174.6978
},
{

lat: -36.89457,
lng: 174.6978
},
{

lat: -36.89457,
lng: 174.69782
},
{

lat: -36.89458,
lng: 174.69887
},
{

lat: -36.89458,
lng: 174.69903
},
{

lat: -36.89458,
lng: 174.69908
},
{

lat: -36.89458,
lng: 174.69915
},
{

lat: -36.89457,
lng: 174.69924
},
{

lat: -36.89456,
lng: 174.69927
},
{

lat: -36.8945,
lng: 174.69948
},
{

lat: -36.89446,
lng: 174.69959
},
{

lat: -36.89443,
lng: 174.69968
},
{

lat: -36.89429,
lng: 174.70012
},
{

lat: -36.89424,
lng: 174.7001
},
{

lat: -36.89424,
lng: 174.7001
},
{

lat: -36.89424,
lng: 174.7001
},
{

lat: -36.89429,
lng: 174.70013
},
{

lat: -36.89416,
lng: 174.70057
},
{

lat: -36.89414,
lng: 174.70062
},
{

lat: -36.89413,
lng: 174.70069
},
{

lat: -36.89411,
lng: 174.70077
},
{

lat: -36.8941,
lng: 174.70084
},
{

lat: -36.8941,
lng: 174.70091
},
{

lat: -36.89423,
lng: 174.70092
},
{

lat: -36.8944,
lng: 174.70093
},
{

lat: -36.89443,
lng: 174.70093
},
{

lat: -36.89454,
lng: 174.70094
},
{

lat: -36.89455,
lng: 174.70094
},
{

lat: -36.89466,
lng: 174.70094
},
{

lat: -36.89483,
lng: 174.70095
},
{

lat: -36.89513,
lng: 174.70097
},
{

lat: -36.89513,
lng: 174.70101
},
{

lat: -36.89513,
lng: 174.70101
},
{

lat: -36.89513,
lng: 174.70097
},
{

lat: -36.89563,
lng: 174.701
},
{

lat: -36.89626,
lng: 174.70103
},
{

lat: -36.89637,
lng: 174.70108
},
{

lat: -36.89644,
lng: 174.70115
},
{

lat: -36.89649,
lng: 174.70125
},
{

lat: -36.89653,
lng: 174.70148
},
{

lat: -36.89643,
lng: 174.70193
},
{

lat: -36.89634,
lng: 174.70216
},
{

lat: -36.89606,
lng: 174.7027
},
{

lat: -36.89564,
lng: 174.70347
},
{

lat: -36.89541,
lng: 174.70388
},
{

lat: -36.89541,
lng: 174.70388
},
{

lat: -36.89535,
lng: 174.704
},
{

lat: -36.89534,
lng: 174.704
},
{

lat: -36.89532,
lng: 174.70398
},
{

lat: -36.89532,
lng: 174.70398
},
{

lat: -36.89534,
lng: 174.704
},
{

lat: -36.89526,
lng: 174.70416
},
{

lat: -36.89514,
lng: 174.70428
},
{

lat: -36.89514,
lng: 174.70428
},
{

lat: -36.89439,
lng: 174.70507
},
{

lat: -36.89399,
lng: 174.70549
},
{

lat: -36.89355,
lng: 174.70595
},
{

lat: -36.89316,
lng: 174.70635
},
{

lat: -36.89291,
lng: 174.70651
},
{

lat: -36.89277,
lng: 174.70662
},
{

lat: -36.89247,
lng: 174.70692
},
{

lat: -36.89242,
lng: 174.70684
},
{

lat: -36.89248,
lng: 174.70692
},
{

lat: -36.89236,
lng: 174.70704
},
{

lat: -36.89156,
lng: 174.70787
},
{

lat: -36.89146,
lng: 174.70798
},
{

lat: -36.89063,
lng: 174.70885
},
{

lat: -36.88949,
lng: 174.71003
},
{

lat: -36.88946,
lng: 174.70997
},
{

lat: -36.88949,
lng: 174.71003
},
{

lat: -36.88948,
lng: 174.71005
},
{

lat: -36.88922,
lng: 174.71031
},
{

lat: -36.88908,
lng: 174.71045
},
{

lat: -36.88895,
lng: 174.71058
},
{

lat: -36.88894,
lng: 174.71059
},
{

lat: -36.88829,
lng: 174.71126
},
{

lat: -36.8882,
lng: 174.71134
},
{

lat: -36.88817,
lng: 174.71129
},
{

lat: -36.8882,
lng: 174.71134
},
{

lat: -36.88688,
lng: 174.7127
},
{

lat: -36.88684,
lng: 174.71264
},
{

lat: -36.88688,
lng: 174.7127
},
{

lat: -36.88683,
lng: 174.71274
},
{

lat: -36.88601,
lng: 174.71359
},
{

lat: -36.8856,
lng: 174.714
},
{

lat: -36.88534,
lng: 174.71427
},
{

lat: -36.88532,
lng: 174.71428
},
{

lat: -36.88434,
lng: 174.71527
},
{

lat: -36.8843,
lng: 174.7152
},
{

lat: -36.88435,
lng: 174.71527
},
{

lat: -36.88407,
lng: 174.71554
},
{

lat: -36.88376,
lng: 174.71617
},
{

lat: -36.88372,
lng: 174.71623
},
{

lat: -36.88369,
lng: 174.71627
},
{

lat: -36.88366,
lng: 174.71631
},
{

lat: -36.88362,
lng: 174.71634
},
{

lat: -36.88333,
lng: 174.71665
},
{

lat: -36.88275,
lng: 174.71726
},
{

lat: -36.88255,
lng: 174.71747
},
{

lat: -36.88251,
lng: 174.71741
},
{

lat: -36.88255,
lng: 174.71747
},
{

lat: -36.88249,
lng: 174.71753
},
{

lat: -36.88245,
lng: 174.71758
},
{

lat: -36.88241,
lng: 174.71763
},
{

lat: -36.88238,
lng: 174.71769
},
{

lat: -36.88236,
lng: 174.71775
},
{

lat: -36.88233,
lng: 174.71782
},
{

lat: -36.88232,
lng: 174.71788
},
{

lat: -36.88231,
lng: 174.71794
},
{

lat: -36.88229,
lng: 174.71803
},
{

lat: -36.88209,
lng: 174.71947
},
{

lat: -36.88205,
lng: 174.71979
},
{

lat: -36.88203,
lng: 174.71997
},
{

lat: -36.88203,
lng: 174.72003
},
{

lat: -36.88203,
lng: 174.72004
},
{

lat: -36.88202,
lng: 174.72011
},
{

lat: -36.882,
lng: 174.72018
},
{

lat: -36.88199,
lng: 174.72022
},
{

lat: -36.88193,
lng: 174.7202
},
{

lat: -36.88199,
lng: 174.72022
},
{

lat: -36.88198,
lng: 174.72026
},
{

lat: -36.88146,
lng: 174.72179
},
{

lat: -36.8812,
lng: 174.72258
},
{

lat: -36.88119,
lng: 174.72259
},
{

lat: -36.88114,
lng: 174.72256
},
{

lat: -36.8812,
lng: 174.72258
},
{

lat: -36.88086,
lng: 174.72358
},
{

lat: -36.88026,
lng: 174.72536
},
{

lat: -36.88018,
lng: 174.7256
},
{

lat: -36.8801,
lng: 174.72575
},
{

lat: -36.8798,
lng: 174.7262
},
{

lat: -36.87965,
lng: 174.72642
},
{

lat: -36.8796,
lng: 174.72636
},
{

lat: -36.87965,
lng: 174.72642
},
{

lat: -36.87957,
lng: 174.72654
},
{

lat: -36.87944,
lng: 174.72672
},
{

lat: -36.87931,
lng: 174.72692
},
{

lat: -36.87876,
lng: 174.72773
},
{

lat: -36.87871,
lng: 174.7278
},
{

lat: -36.87856,
lng: 174.72804
},
{

lat: -36.87849,
lng: 174.72813
},
{

lat: -36.87867,
lng: 174.72831
},
{

lat: -36.87882,
lng: 174.72845
},
{

lat: -36.87891,
lng: 174.72852
},
{

lat: -36.87888,
lng: 174.72857
},
{

lat: -36.8789,
lng: 174.72852
},
{

lat: -36.87898,
lng: 174.72857
},
{

lat: -36.87906,
lng: 174.72863
},
{

lat: -36.87923,
lng: 174.7287
},
{

lat: -36.87952,
lng: 174.72896
},
{

lat: -36.87963,
lng: 174.72907
},
{

lat: -36.88055,
lng: 174.73003
},
{

lat: -36.8807,
lng: 174.73019
},
{

lat: -36.88076,
lng: 174.73025
},
{

lat: -36.88084,
lng: 174.73032
},
{

lat: -36.88103,
lng: 174.73048
},
{

lat: -36.88116,
lng: 174.73058
},
{

lat: -36.88133,
lng: 174.73072
},
{

lat: -36.88173,
lng: 174.73104
},
{

lat: -36.88189,
lng: 174.73121
},
{

lat: -36.88213,
lng: 174.73139
},
{

lat: -36.88236,
lng: 174.73156
},
{

lat: -36.88242,
lng: 174.73166
},
{

lat: -36.88246,
lng: 174.73174
},
{

lat: -36.88246,
lng: 174.73177
},
{

lat: -36.88247,
lng: 174.73181
},
{

lat: -36.88247,
lng: 174.73184
},
{

lat: -36.88246,
lng: 174.73187
},
{

lat: -36.88246,
lng: 174.7319
},
{

lat: -36.88244,
lng: 174.73195
},
{

lat: -36.8818,
lng: 174.73262
},
{

lat: -36.88168,
lng: 174.73275
},
{

lat: -36.88165,
lng: 174.7327
},
{

lat: -36.88168,
lng: 174.73275
},
{

lat: -36.88136,
lng: 174.73308
},
{

lat: -36.88134,
lng: 174.7331
},
{

lat: -36.88097,
lng: 174.73346
},
{

lat: -36.88069,
lng: 174.73372
},
{

lat: -36.87999,
lng: 174.73437
},
{

lat: -36.87995,
lng: 174.73441
},
{

lat: -36.87991,
lng: 174.73444
},
{

lat: -36.87988,
lng: 174.73446
},
{

lat: -36.87969,
lng: 174.73455
},
{

lat: -36.87944,
lng: 174.73465
},
{

lat: -36.87908,
lng: 174.7348
},
{

lat: -36.87831,
lng: 174.73511
},
{

lat: -36.87806,
lng: 174.7352
},
{

lat: -36.87804,
lng: 174.73514
},
{

lat: -36.87805,
lng: 174.7352
},
{

lat: -36.8779,
lng: 174.73526
},
{

lat: -36.87785,
lng: 174.73527
},
{

lat: -36.87769,
lng: 174.73532
},
{

lat: -36.87593,
lng: 174.73589
},
{

lat: -36.87517,
lng: 174.73614
},
{

lat: -36.87516,
lng: 174.73614
},
{

lat: -36.87471,
lng: 174.73629
},
{

lat: -36.87462,
lng: 174.73632
},
{

lat: -36.87458,
lng: 174.73633
},
{

lat: -36.8745,
lng: 174.73636
},
{

lat: -36.8738,
lng: 174.73659
},
{

lat: -36.87377,
lng: 174.73679
},
{

lat: -36.87369,
lng: 174.73728
},
{

lat: -36.87364,
lng: 174.73727
},
{

lat: -36.87369,
lng: 174.73728
},
{

lat: -36.8736,
lng: 174.7379
},
{

lat: -36.87354,
lng: 174.73829
},
{

lat: -36.87354,
lng: 174.7383
},
{

lat: -36.87351,
lng: 174.73853
},
{

lat: -36.8733,
lng: 174.74047
},
{

lat: -36.8733,
lng: 174.74051
},
{

lat: -36.87328,
lng: 174.74056
},
{

lat: -36.87328,
lng: 174.74056
},
{

lat: -36.87327,
lng: 174.74061
},
{

lat: -36.87325,
lng: 174.74066
},
{

lat: -36.87324,
lng: 174.7407
},
{

lat: -36.87321,
lng: 174.74075
},
{

lat: -36.8731,
lng: 174.74093
},
{

lat: -36.87308,
lng: 174.74097
},
{

lat: -36.87304,
lng: 174.74105
},
{

lat: -36.873,
lng: 174.74116
},
{

lat: -36.87298,
lng: 174.7412
},
{

lat: -36.87296,
lng: 174.74125
},
{

lat: -36.87295,
lng: 174.74129
},
{

lat: -36.87294,
lng: 174.74134
},
{

lat: -36.87288,
lng: 174.74167
},
{

lat: -36.87283,
lng: 174.74165
},
{

lat: -36.87288,
lng: 174.74167
},
{

lat: -36.8728,
lng: 174.74217
},
{

lat: -36.87278,
lng: 174.74224
},
{

lat: -36.87277,
lng: 174.74232
},
{

lat: -36.87276,
lng: 174.74236
},
{

lat: -36.87209,
lng: 174.74457
},
{

lat: -36.87205,
lng: 174.74471
},
{

lat: -36.87194,
lng: 174.74507
},
{

lat: -36.87194,
lng: 174.74508
},
{

lat: -36.87192,
lng: 174.74516
},
{

lat: -36.87188,
lng: 174.74531
},
{

lat: -36.87177,
lng: 174.74598
},
{

lat: -36.87172,
lng: 174.74619
},
{

lat: -36.87171,
lng: 174.74624
},
{

lat: -36.87171,
lng: 174.74625
},
{

lat: -36.87166,
lng: 174.74623
},
{

lat: -36.87171,
lng: 174.74625
},
{

lat: -36.87166,
lng: 174.74654
},
{

lat: -36.87162,
lng: 174.74671
},
{

lat: -36.87158,
lng: 174.74708
},
{

lat: -36.87156,
lng: 174.74724
},
{

lat: -36.87155,
lng: 174.7473
},
{

lat: -36.87154,
lng: 174.74734
},
{

lat: -36.87153,
lng: 174.74737
},
{

lat: -36.87151,
lng: 174.7474
},
{

lat: -36.87149,
lng: 174.74744
},
{

lat: -36.87147,
lng: 174.74747
},
{

lat: -36.87147,
lng: 174.74747
},
{

lat: -36.87147,
lng: 174.74747
},
{

lat: -36.87145,
lng: 174.74749
},
{

lat: -36.87141,
lng: 174.74753
},
{

lat: -36.87117,
lng: 174.74773
},
{

lat: -36.87113,
lng: 174.74776
},
{

lat: -36.87097,
lng: 174.74791
},
{

lat: -36.87015,
lng: 174.74858
},
{

lat: -36.86987,
lng: 174.74881
},
{

lat: -36.86984,
lng: 174.74884
},
{

lat: -36.86982,
lng: 174.74886
},
{

lat: -36.86978,
lng: 174.74881
},
{

lat: -36.86982,
lng: 174.74886
},
{

lat: -36.86979,
lng: 174.74889
},
{

lat: -36.86977,
lng: 174.74892
},
{

lat: -36.86956,
lng: 174.74923
},
{

lat: -36.86945,
lng: 174.7494
},
{

lat: -36.86938,
lng: 174.74951
},
{

lat: -36.86918,
lng: 174.74988
},
{

lat: -36.86916,
lng: 174.74994
},
{

lat: -36.86912,
lng: 174.75002
},
{

lat: -36.86909,
lng: 174.7501
},
{

lat: -36.86899,
lng: 174.7505
},
{

lat: -36.86883,
lng: 174.75105
},
{

lat: -36.86879,
lng: 174.75103
},
{

lat: -36.86883,
lng: 174.75104
},
{

lat: -36.86883,
lng: 174.75105
},
{

lat: -36.86883,
lng: 174.75106
},
{

lat: -36.86878,
lng: 174.75123
},
{

lat: -36.86864,
lng: 174.75174
},
{

lat: -36.86856,
lng: 174.75205
},
{

lat: -36.86849,
lng: 174.75216
},
{

lat: -36.86839,
lng: 174.75255
},
{

lat: -36.86834,
lng: 174.75275
},
{

lat: -36.86811,
lng: 174.75365
},
{

lat: -36.86805,
lng: 174.7539
},
{

lat: -36.86799,
lng: 174.75413
},
{

lat: -36.86769,
lng: 174.75538
},
{

lat: -36.86766,
lng: 174.7555
},
{

lat: -36.86762,
lng: 174.75559
},
{

lat: -36.86758,
lng: 174.7557
},
{

lat: -36.86752,
lng: 174.75581
},
{

lat: -36.86748,
lng: 174.75593
},
{

lat: -36.86743,
lng: 174.75601
},
{

lat: -36.86715,
lng: 174.75647
},
{

lat: -36.86705,
lng: 174.7566
},
{

lat: -36.86688,
lng: 174.75682
},
{

lat: -36.86668,
lng: 174.75708
},
{

lat: -36.86664,
lng: 174.75704
},
{

lat: -36.86668,
lng: 174.75708
},
{

lat: -36.8666,
lng: 174.75719
},
{

lat: -36.8665,
lng: 174.75733
},
{

lat: -36.86623,
lng: 174.75769
},
{

lat: -36.86619,
lng: 174.75778
},
{

lat: -36.86616,
lng: 174.75784
},
{

lat: -36.86612,
lng: 174.75795
},
{

lat: -36.866,
lng: 174.75828
},
{

lat: -36.86599,
lng: 174.75831
},
{

lat: -36.86599,
lng: 174.75834
},
{

lat: -36.86598,
lng: 174.75843
},
{

lat: -36.86597,
lng: 174.75856
},
{

lat: -36.86596,
lng: 174.75866
},
{

lat: -36.86594,
lng: 174.75891
},
{

lat: -36.86593,
lng: 174.75921
},
{

lat: -36.86592,
lng: 174.75922
},
{

lat: -36.86591,
lng: 174.75928
},
{

lat: -36.8659,
lng: 174.75934
},
{

lat: -36.86583,
lng: 174.75953
},
{

lat: -36.8658,
lng: 174.75959
},
{

lat: -36.86577,
lng: 174.75967
},
{

lat: -36.86574,
lng: 174.75972
},
{

lat: -36.8657,
lng: 174.75979
},
{

lat: -36.86565,
lng: 174.75985
},
{

lat: -36.86549,
lng: 174.76005
},
{

lat: -36.86549,
lng: 174.76006
},
{

lat: -36.86549,
lng: 174.76006
},
{

lat: -36.86547,
lng: 174.76009
},
{

lat: -36.86546,
lng: 174.7601
},
{

lat: -36.86544,
lng: 174.76013
},
{

lat: -36.86541,
lng: 174.76008
},
{

lat: -36.86543,
lng: 174.76012
},
{

lat: -36.86544,
lng: 174.76013
},
{

lat: -36.86543,
lng: 174.76014
},
{

lat: -36.86531,
lng: 174.76029
},
{

lat: -36.86524,
lng: 174.76039
},
{

lat: -36.86512,
lng: 174.76055
},
{

lat: -36.86508,
lng: 174.76058
},
{

lat: -36.86504,
lng: 174.76061
},
{

lat: -36.865,
lng: 174.76064
},
{

lat: -36.86496,
lng: 174.76066
},
{

lat: -36.86491,
lng: 174.76067
},
{

lat: -36.86484,
lng: 174.76069
},
{

lat: -36.86482,
lng: 174.76069
},
{

lat: -36.86421,
lng: 174.76088
},
{

lat: -36.86415,
lng: 174.7609
},
{

lat: -36.86402,
lng: 174.76092
},
{

lat: -36.86379,
lng: 174.76095
},
{

lat: -36.86367,
lng: 174.76094
},
{

lat: -36.86328,
lng: 174.76106
},
{

lat: -36.86274,
lng: 174.76124
},
{

lat: -36.86232,
lng: 174.76138
},
{

lat: -36.86231,
lng: 174.76132
},
{

lat: -36.86231,
lng: 174.76132
},
{

lat: -36.86232,
lng: 174.76138
},
{

lat: -36.86202,
lng: 174.76148
},
{

lat: -36.86191,
lng: 174.76151
},
{

lat: -36.86182,
lng: 174.76156
},
{

lat: -36.86175,
lng: 174.7616
},
{

lat: -36.86121,
lng: 174.76191
},
{

lat: -36.86115,
lng: 174.762
},
{

lat: -36.86104,
lng: 174.76207
},
{

lat: -36.86061,
lng: 174.76232
},
{

lat: -36.86057,
lng: 174.76234
},
{

lat: -36.8605,
lng: 174.76238
},
{

lat: -36.86036,
lng: 174.76246
},
{

lat: -36.8601,
lng: 174.76261
},
{

lat: -36.85914,
lng: 174.76317
},
{

lat: -36.85878,
lng: 174.76339
},
{

lat: -36.85843,
lng: 174.76359
},
{

lat: -36.85813,
lng: 174.76377
},
{

lat: -36.8581,
lng: 174.76379
},
{

lat: -36.85807,
lng: 174.76382
},
{

lat: -36.85804,
lng: 174.76385
},
{

lat: -36.85767,
lng: 174.7643
},
{

lat: -36.85752,
lng: 174.76448
},
{

lat: -36.85748,
lng: 174.76453
},
{

lat: -36.85746,
lng: 174.76455
},
{

lat: -36.85741,
lng: 174.76449
},
{

lat: -36.85745,
lng: 174.76454
},
{

lat: -36.85746,
lng: 174.76455
},
{

lat: -36.85745,
lng: 174.76456
},
{

lat: -36.85734,
lng: 174.7647
},
{

lat: -36.85734,
lng: 174.7647
},
{

lat: -36.8573,
lng: 174.76475
},
{

lat: -36.85729,
lng: 174.76476
},
{

lat: -36.85729,
lng: 174.76476
},
{

lat: -36.85727,
lng: 174.76478
},
{

lat: -36.85727,
lng: 174.76479
},
{

lat: -36.85726,
lng: 174.76479
},
{

lat: -36.85726,
lng: 174.7648
},
{

lat: -36.85725,
lng: 174.76481
},
{

lat: -36.85723,
lng: 174.76483
},
{

lat: -36.85723,
lng: 174.76484
},
{

lat: -36.85611,
lng: 174.76603
},
{

lat: -36.85593,
lng: 174.76624
},
{

lat: -36.85591,
lng: 174.76626
},
{

lat: -36.85487,
lng: 174.76744
},
{

lat: -36.85484,
lng: 174.76747
},
{

lat: -36.8548,
lng: 174.76752
},
{

lat: -36.85474,
lng: 174.76758
},
{

lat: -36.85473,
lng: 174.76759
},
{

lat: -36.85469,
lng: 174.76762
},
{

lat: -36.85438,
lng: 174.76789
},
{

lat: -36.85434,
lng: 174.76793
},
{

lat: -36.8543,
lng: 174.76796
},
{

lat: -36.85427,
lng: 174.76789
},
{

lat: -36.8543,
lng: 174.76795
},
{

lat: -36.8543,
lng: 174.76796
},
{

lat: -36.85429,
lng: 174.76797
},
{

lat: -36.85424,
lng: 174.76801
},
{

lat: -36.85405,
lng: 174.76819
},
{

lat: -36.854,
lng: 174.76825
},
{

lat: -36.854,
lng: 174.76825
},
{

lat: -36.85395,
lng: 174.76818
},
{

lat: -36.85389,
lng: 174.76812
},
{

lat: -36.85362,
lng: 174.76788
},
{

lat: -36.85361,
lng: 174.76788
},
{

lat: -36.85357,
lng: 174.76784
},
{

lat: -36.8529,
lng: 174.76727
},
{

lat: -36.85279,
lng: 174.76719
},
{

lat: -36.8528,
lng: 174.76716
},
{

lat: -36.8528,
lng: 174.76716
},
{

lat: -36.85279,
lng: 174.76719
},
{

lat: -36.85261,
lng: 174.76705
},
{

lat: -36.85239,
lng: 174.76679
},
{

lat: -36.85201,
lng: 174.76636
},
{

lat: -36.85187,
lng: 174.76623
},
{

lat: -36.8516,
lng: 174.76589
},
{

lat: -36.85145,
lng: 174.76569
},
{

lat: -36.85141,
lng: 174.76564
},
{

lat: -36.85135,
lng: 174.76558
},
{

lat: -36.85129,
lng: 174.76552
},
{

lat: -36.85125,
lng: 174.76547
},
{

lat: -36.85122,
lng: 174.76541
},
{

lat: -36.85119,
lng: 174.76535
},
{

lat: -36.85116,
lng: 174.76529
},
{

lat: -36.85115,
lng: 174.76522
},
{

lat: -36.85108,
lng: 174.76514
},
{

lat: -36.8509,
lng: 174.76452
},
{

lat: -36.85073,
lng: 174.76394
},
{

lat: -36.85068,
lng: 174.76378
},
{

lat: -36.85068,
lng: 174.76377
},
{

lat: -36.85073,
lng: 174.76373
},
{

lat: -36.85073,
lng: 174.76373
},
{

lat: -36.85068,
lng: 174.76377
},
{

lat: -36.85065,
lng: 174.76367
},
{

lat: -36.85063,
lng: 174.76361
},
{

lat: -36.85057,
lng: 174.76339
},
{

lat: -36.85038,
lng: 174.7627
},
{

lat: -36.85031,
lng: 174.76246
},
{

lat: -36.85011,
lng: 174.7618
},
{

lat: -36.84984,
lng: 174.76086
},
{

lat: -36.84979,
lng: 174.76066
},
{

lat: -36.8497,
lng: 174.76037
},
{

lat: -36.84977,
lng: 174.76034
},
{

lat: -36.84977,
lng: 174.76034
},
{

lat: -36.8497,
lng: 174.76037
},
{

lat: -36.84968,
lng: 174.76027
},
{

lat: -36.84941,
lng: 174.75933
},
{

lat: -36.84934,
lng: 174.75911
},
{

lat: -36.8493,
lng: 174.75895
},
{

lat: -36.84935,
lng: 174.75893
},
{

lat: -36.8493,
lng: 174.75895
},
{

lat: -36.84897,
lng: 174.75786
},
{

lat: -36.84888,
lng: 174.75756
},
{

lat: -36.8486,
lng: 174.7566
},
{

lat: -36.84857,
lng: 174.75648
},
{

lat: -36.84854,
lng: 174.75645
},
{

lat: -36.84852,
lng: 174.75642
},
{

lat: -36.84849,
lng: 174.7564
},
{

lat: -36.84847,
lng: 174.75638
},
{

lat: -36.84844,
lng: 174.75637
},
{

lat: -36.84842,
lng: 174.75636
},
{

lat: -36.84838,
lng: 174.75636
},
{

lat: -36.8483,
lng: 174.75636
},
{

lat: -36.8482,
lng: 174.75637
},
{

lat: -36.8482,
lng: 174.75637
},
{

lat: -36.84815,
lng: 174.75638
},
{

lat: -36.84815,
lng: 174.75657
},
{

lat: -36.84816,
lng: 174.75668
},
{

lat: -36.84815,
lng: 174.75673
},
{

lat: -36.84815,
lng: 174.75678
},
{

lat: -36.84815,
lng: 174.75688
},
{

lat: -36.84813,
lng: 174.75703
},
{

lat: -36.84813,
lng: 174.75705
},
{

lat: -36.84806,
lng: 174.75703
}
];


class DisruptedMap extends Component {
    static defaultProps = {
      center: {
          lat: -36.84786,
          lng: 174.75823
      },
      zoom: 8
    };
  
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAfl7ElQdu2Lnx67UnZ899NSuC4TfH4yKI" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onChildMouseEnter={this.onChildMouseEnter}
                onChildMouseLeave={this.onChildMouseLeave}
              >
                <Polyline 
                 path={r22route} 
                 options={{ 
                     strokeColor: '#00ffff',
                     strokeOpacity: 1,
                     strokeWeight: 20
                     }}
                     
                     />
                
              </GoogleMapReact>
            </div>
          );
        }
    }

