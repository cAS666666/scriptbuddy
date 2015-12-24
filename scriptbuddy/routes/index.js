var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

 //  	var codes = [	"AD",
	// 					"AE",
	// 				"AF",
	// 				"AG",
	// 				"AI",
	// 				"AL",
	// 				"AM",
	// 				"AO",
	// 				"AR",
	// 				"AS",
	// 				"AT",
	// 				"AU",
	// 				"AW",
	// 				"AX",
	// 				"AZ",
	// 				"BA",
	// 				"BB",
	// 				"BD",
	// 				"BE",
	// 				"BF",
	// 				"BG",
	// 				"BH",
	// 				"BI",
	// 				"BJ",
	// 				"BL",
	// 				"BM",
	// 				"BN",
	// 				"BO",
	// 				"BQ",
	// 				"BR",
	// 				"BS",
	// 				"BT",
	// 				"BV",
	// 				"BW",
	// 				"BY",
	// 				"BZ",
	// 				"CA",
	// 				"CC",
	// 				"CD",
	// 				"CF",
	// 				"CG",
	// 				"CH",
	// 				"CI",
	// 				"CK",
	// 				"CL",
	// 				"CM",
	// 				"CN",
	// 				"CO",
	// 				"CR",
	// 				"CU",
	// 				"CV",
	// 				"CX",
	// 				"CY",
	// 				"CZ",
	// 				"DE",
	// 				"DJ",
	// 				"DK",
	// 				"DM",
	// 				"DO",
	// 				"DZ",
	// 				"EC",
	// 				"EE",
	// 				"EG",
	// 				"EH",
	// 				"ER",
	// 				"ES",
	// 				"ET",
	// 				"FI",
	// 				"FJ",
	// 				"FK",
	// 				"FM",
	// 				"FO",
	// 				"FR",
	// 				"GA",
	// 				"GB",
	// 				"GD",
	// 				"GE",
	// 				"GF",
	// 				"GG",
	// 				"GH",
	// 				"GI",
	// 				"GL",
	// 				"GM",
	// 				"GN",
	// 				"GP",
	// 				"GQ",
	// 				"GR",
	// 				"GS",
	// 				"GT",
	// 				"GU",
	// 				"GW",
	// 				"GY",
	// 				"HK",
	// 				"HM",
	// 				"HN",
	// 				"HR",
	// 				"HT",
	// 				"HU",
	// 				"ID",
	// 				"IE",
	// 				"IL",
	// 				"IM",
	// 				"IN",
	// 				"IO",
	// 				"IQ",
	// 				"IR",
	// 				"IS",
	// 				"IT",
	// 				"JE",
	// 				"JM",
	// 				"JO",
	// 				"JP",
	// 				"KE",
	// 				"KG",
	// 				"KH",
	// 				"KI",
	// 				"KM",
	// 				"KN",
	// 				"KP",
	// 				"KR",
	// 				"KW",
	// 				"KY",
	// 				"KZ",
	// 				"LA",
	// 				"LB",
	// 				"LC",
	// 				"LI",
	// 				"LK",
	// 				"LR",
	// 				"LS",
	// 				"LT",
	// 				"LU",
	// 				"LV",
	// 				"LY",
	// 				"MA",
	// 				"MC",
	// 				"MD",
	// 				"ME",
	// 				"MF",
	// 				"MG",
	// 				"MH",
	// 				"MK",
	// 				"ML",
	// 				"MM",
	// 				"MN",
	// 				"MO",
	// 				"MP",
	// 				"MQ",
	// 				"MR",
	// 				"MS",
	// 				"MT",
	// 				"MU",
	// 				"MV",
	// 				"MW",
	// 				"MX",
	// 				"MY",
	// 				"MZ",
	// 				"NA",
	// 				"NC",
	// 				"NE",
	// 				"NF",
	// 				"NG",
	// 				"NI",
	// 				"NL",
	// 				"NO",
	// 				"NP",
	// 				"NR",
	// 				"NU",
	// 				"NZ",
	// 				"OM",
	// 				"PA",
	// 				"PE",
	// 				"PF",
	// 				"PG",
	// 				"PH",
	// 				"PK",
	// 				"PL",
	// 				"PM",
	// 				"PN",
	// 				"PR",
	// 				"PS",
	// 				"PT",
	// 				"PW",
	// 				"PY",
	// 				"QA",
	// 				"RE",
	// 				"RO",
	// 				"RS",
	// 				"RU",
	// 				"RW",
	// 				"SA",
	// 				"SB",
	// 				"SC",
	// 				"SD",
	// 				"SE",
	// 				"SG",
	// 				"SH",
	// 				"SI",
	// 				"SJ",
	// 				"SK",
	// 				"SL",
	// 				"SM",
	// 				"SN",
	// 				"SO",
	// 				"SR",
	// 				"ST",
	// 				"SV",
	// 				"SX",
	// 				"SY",
	// 				"SZ",
	// 				"TC",
	// 				"TD",
	// 				"TF",
	// 				"TG",
	// 				"TH",
	// 				"TJ",
	// 				"TK",
	// 				"TL",
	// 				"TM",
	// 				"TN",
	// 				"TO",
	// 				"TR",
	// 				"TT",
	// 				"TV",
	// 				"TW",
	// 				"TZ",
	// 				"UA",
	// 				"UG",
	// 				"UM",
	// 				"US",
	// 				"UY",
	// 				"UZ",
	// 				"VA",
	// 				"VC",
	// 				"VE",
	// 				"VG",
	// 				"VI",
	// 				"VN",
	// 				"VU",
	// 				"WF",
	// 				"WS",
	// 				"XK",
	// 				"YE",
	// 				"YT",
	// 				"ZA",
	// 				"ZM",
	// 				"ZW"
	// ];

	// var country = ["Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Angola","Argentina","American Samoa","Austria","Australia","Aruba","Åland Islands","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint Barthélemy","Bermuda","Brunei Darussalam","Bolivia","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos Islands","Democratic Republic of the Congo","Central African Republic","Republic of the Congo","Switzerland","Ivory Coast","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Christmas Island","Cyprus","Czech Republic","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","France","Gabon","United Kingdom","Grenada","Georgia","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia and South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","North Korea","South Korea","Kosovo","Kuwait","Cayman Islands","Kazakhstan","Laos","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Montenegro","Saint Martin (French part)","Madagascar","Marshall Islands","Macedonia","Mali","Myanmar","Mongolia","Macao","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn","Puerto Rico","Palestinian Territory","Portugal","Palau","Paraguay","Qatar","Reunion","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","Sao Tome and Principe","El Salvador","Syria","Swaziland","Turks and Caicos Islands","Chad","French Southern Territories","Togo","Thailand","Tajikistan","Tokelau","East Timor","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","United States Minor Outlying Islands","United States","Uruguay","Uzbekistan","Vatican","Saint Vincent and the Grenadines","Venezuela","British Virgin Islands","U.S. Virgin Islands","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Yemen","Mayotte","South Africa","Zambia","Zimbabwe","Sint Maarten (Dutch part)","Bonaire"," Sint Eustatius and Saba"];

	var countryData = {
AF:"Afghanistan",
AX:"Åland Islands",
AL:"Albania",
DZ:"Algeria",
AS:"American Samoa",
AD:"Andorra",
AO:"Angola",
AI:"Anguilla",
AG:"Antigua and Barbuda",
AR:"Argentina",
AM:"Armenia",
AW:"Aruba",
AU:"Australia",
AT:"Austria",
AZ:"Azerbaijan",
BS:"Bahamas",
BH:"Bahrain",
BD:"Bangladesh",
BB:"Barbados",
BY:"Belarus",
BE:"Belgium",
BZ:"Belize",
BJ:"Benin",
BM:"Bermuda",
BT:"Bhutan",
BO:"Bolivia",
BQ:"Bonaire, Sint Eustatius and Saba",
BA:"Bosnia and Herzegovina",
BW:"Botswana",
BV:"Bouvet Island",
BR:"Brazil",
IO:"British Indian Ocean Territory",
VG:"British Virgin Islands",
BN:"Brunei Darussalam",
BG:"Bulgaria",
BF:"Burkina Faso",
BI:"Burundi",
KH:"Cambodia",
CM:"Cameroon",
CA:"Canada",
CV:"Cape Verde",
KY:"Cayman Islands",
CF:"Central African Republic",
TD:"Chad",
CL:"Chile",
CN:"China",
CX:"Christmas Island",
CC:"Cocos Islands",
CO:"Colombia",
KM:"Comoros",
CK:"Cook Islands",
CR:"Costa Rica",
HR:"Croatia",
CU:"Cuba",
CY:"Cyprus",
CZ:"Czech Republic",
CD:"Democratic Republic of the Congo",
DK:"Denmark",
DJ:"Djibouti",
DM:"Dominica",
DO:"Dominican Republic",
TL:"East Timor",
EC:"Ecuador",
EG:"Egypt",
SV:"El Salvador",
GQ:"Equatorial Guinea",
ER:"Eritrea",
EE:"Estonia",
ET:"Ethiopia",
FK:"Falkland Islands",
FO:"Faroe Islands",
FJ:"Fiji",
FI:"Finland",
FR:"France",
GF:"French Guiana",
PF:"French Polynesia",
TF:"French Southern Territories",
GA:"Gabon",
GM:"Gambia",
GE:"Georgia",
DE:"Germany",
GH:"Ghana",
GI:"Gibraltar",
GR:"Greece",
GL:"Greenland",
GD:"Grenada",
GP:"Guadeloupe",
GU:"Guam",
GT:"Guatemala",
GG:"Guernsey",
GN:"Guinea",
GW:"Guinea-Bissau",
GY:"Guyana",
HT:"Haiti",
HM:"Heard Island and McDonald Islands",
HN:"Honduras",
HK:"Hong Kong",
HU:"Hungary",
IS:"Iceland",
IN:"India",
ID:"Indonesia",
IR:"Iran",
IQ:"Iraq",
IE:"Ireland",
IM:"Isle of Man",
IL:"Israel",
IT:"Italy",
CI:"Ivory Coast",
JM:"Jamaica",
JP:"Japan",
JE:"Jersey",
JO:"Jordan",
KZ:"Kazakhstan",
KE:"Kenya",
KI:"Kiribati",
XK:"Kosovo",
KW:"Kuwait",
KG:"Kyrgyzstan",
LA:"Laos",
LV:"Latvia",
LB:"Lebanon",
LS:"Lesotho",
LR:"Liberia",
LY:"Libya",
LI:"Liechtenstein",
LT:"Lithuania",
LU:"Luxembourg",
MO:"Macao",
MK:"Macedonia",
MG:"Madagascar",
MW:"Malawi",
MY:"Malaysia",
MV:"Maldives",
ML:"Mali",
MT:"Malta",
MH:"Marshall Islands",
MQ:"Martinique",
MR:"Mauritania",
MU:"Mauritius",
YT:"Mayotte",
MX:"Mexico",
FM:"Micronesia",
MD:"Moldova",
MC:"Monaco",
MN:"Mongolia",
ME:"Montenegro",
MS:"Montserrat",
MA:"Morocco",
MZ:"Mozambique",
MM:"Myanmar",
NA:"Namibia",
NR:"Nauru",
NP:"Nepal",
NL:"Netherlands",
NC:"New Caledonia",
NZ:"New Zealand",
NI:"Nicaragua",
NE:"Niger",
NG:"Nigeria",
NU:"Niue",
NF:"Norfolk Island",
KP:"North Korea",
MP:"Northern Mariana Islands",
NO:"Norway",
OM:"Oman",
PK:"Pakistan",
PW:"Palau",
PS:"Palestinian Territory",
PA:"Panama",
PG:"Papua New Guinea",
PY:"Paraguay",
PE:"Peru",
PH:"Philippines",
PN:"Pitcairn",
PL:"Poland",
PT:"Portugal",
PR:"Puerto Rico",
QA:"Qatar",
CG:"Republic of the Congo",
RE:"Reunion",
RO:"Romania",
RU:"Russia",
RW:"Rwanda",
BL:"Saint Barthélemy",
SH:"Saint Helena",
KN:"Saint Kitts and Nevis",
LC:"Saint Lucia",
MF:"Saint Martin (French part)",
PM:"Saint Pierre and Miquelon",
VC:"Saint Vincent and the Grenadines",
WS:"Samoa",
SM:"San Marino",
ST:"Sao Tome and Principe",
SA:"Saudi Arabia",
SN:"Senegal",
RS:"Serbia",
SC:"Seychelles",
SL:"Sierra Leone",
SG:"Singapore",
SX:"Sint Maarten (Dutch part)",
SK:"Slovakia",
SI:"Slovenia",
SB:"Solomon Islands",
SO:"Somalia",
ZA:"South Africa",
GS:"South Georgia and South Sandwich Islands",
KR:"South Korea",
ES:"Spain",
LK:"Sri Lanka",
SD:"Sudan",
SR:"Suriname",
SJ:"Svalbard and Jan Mayen",
SZ:"Swaziland",
SE:"Sweden",
CH:"Switzerland",
SY:"Syria",
TW:"Taiwan",
TJ:"Tajikistan",
TZ:"Tanzania",
TH:"Thailand",
TG:"Togo",
TK:"Tokelau",
TO:"Tonga",
TT:"Trinidad and Tobago",
TN:"Tunisia",
TR:"Turkey",
TM:"Turkmenistan",
TC:"Turks and Caicos Islands",
TV:"Tuvalu",
VI:"U.S. Virgin Islands",
UG:"Uganda",
UA:"Ukraine",
AE:"United Arab Emirates",
GB:"United Kingdom",
US:"United States",
UM:"United States Minor Outlying Islands",
UY:"Uruguay",
UZ:"Uzbekistan",
VU:"Vanuatu",
VA:"Vatican",
VE:"Venezuela",
VN:"Vietnam",
WF:"Wallis and Futuna",
EH:"Western Sahara",
YE:"Yemen",
ZM:"Zambia",
ZW:"Zimbabwe"};

var codes = Object.keys(countryData);

var countries = [];
for(var country in countryData) {
    countries.push(countryData[country]);
}

  res.render('index', { title: 'Country blocker gnome!', codes: codes, countries: countries });
});

module.exports = router;
