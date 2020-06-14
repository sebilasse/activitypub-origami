const zones: any = {
	Africa:[
		'Abidjan','Accra','Nairobi','Algiers','Lagos','Bissau','Maputo','Cairo','Casablanca',
		'Ceuta','El_Aaiun','Johannesburg','Juba','Khartoum','Monrovia','Ndjamena','Sao_Tome',
		'Tripoli', 'Tunis','Windhoek'
	],
	America:[
		'Adak','Anchorage','Port_of_Spain','Araguaina','Argentina','Curacao','Asuncion','Atikokan',
		'Bahia_Banderas','Bahia','Barbados','Belem','Belize','Blanc-Sablon','Boa_Vista','Bogota',
		'Boise','Cambridge_Bay','Campo_Grande','Cancun','Caracas','Cayenne','Panama','Chicago',
		'Chihuahua','Costa_Rica','Creston','Cuiaba','Danmarkshavn','Dawson_Creek','Dawson','Denver',
		'Detroit','Edmonton','Eirunepe','El_Salvador','Tijuana','Fort_Nelson','Fort_Wayne','Fortaleza',
		'Glace_Bay','Godthab','Goose_Bay','Grand_Turk','Guatemala','Guayaquil','Guyana','Halifax','Havana',
		'Hermosillo','Indiana','Inuvik','Iqaluit','Jamaica','Juneau','Kentucky','La_Paz','Lima','Los_Angeles',
		'Maceio','Managua','Manaus','Martinique','Matamoros','Mazatlan','Menominee','Merida','Metlakatla',
		'Mexico_City','Miquelon','Moncton','Monterrey','Montevideo','Toronto','Nassau','New_York','Nipigon',
		'Nome','Noronha','North_Dakota','Ojinaga','Pangnirtung','Paramaribo','Phoenix','Port-au-Prince','Rio_Branco',
		'Porto_Velho','Puerto_Rico','Punta_Arenas','Rainy_River','Rankin_Inlet','Recife','Regina','Resolute',
		'Santarem','Santiago','Santo_Domingo','Sao_Paulo','Scoresbysund','Sitka','St_Johns','Swift_Current',
		'Tegucigalpa','Thule','Thunder_Bay','Vancouver','Whitehorse','Winnipeg','Yakutat','Yellowknife'
	],
	Antarctica:['Casey','Davis','DumontDUrville','Macquarie','Mawson','Palmer','Rothera','Syowa','Troll','Vostok'],
	Pacific:[
		'Auckland','Easter','Port_Moresby','Tarawa','Palau','Kwajalein','Chatham','Apia','Bougainville','Chuuk','Efate',
		'Enderbury','Fakaofo','Fiji','Galapagos','Gambier','Guadalcanal','Guam','Honolulu','Kiritimati','Kosrae','Majuro',
		'Marquesas','Pago_Pago','Nauru','Niue','Norfolk','Noumea','Pitcairn','Pohnpei','Rarotonga','Tahiti','Tongatapu'
	],
	Europe:[
		'Oslo','Istanbul','Dublin','Amsterdam','Andorra','Astrakhan','Athens','London','Belgrade','Berlin','Prague','Brussels',
		'Bucharest','Budapest','Zurich','Chisinau','Copenhagen','Gibraltar','Helsinki','Kaliningrad','Kiev','Kirov','Lisbon',
		'Luxembourg','Madrid','Malta','Minsk','Monaco','Moscow','Paris','Riga','Rome','Samara','Saratov','Simferopol','Sofia',
		'Stockholm','Tallinn','Tirane','Ulyanovsk','Uzhgorod','Vienna','Vilnius','Volgograd','Warsaw','Zaporozhye'
	],
	Asia:[
		'Riyadh','Almaty','Amman','Anadyr','Aqtau','Aqtobe','Ashgabat','Atyrau','Baghdad','Qatar','Baku','Bangkok',
		'Barnaul','Beirut','Bishkek','Brunei','Kolkata','Chita','Choibalsan','Shanghai','Colombo','Dhaka','Damascus','Dili',
		'Dubai','Dushanbe','Famagusta','Gaza','Hebron','Ho_Chi_Minh','Hong_Kong','Hovd','Irkutsk','Jakarta','Jayapura',
		'Jerusalem','Kabul','Kamchatka','Karachi','Urumqi','Kathmandu','Khandyga','Krasnoyarsk','Kuala_Lumpur','Kuching',
		'Macau','Magadan','Makassar','Manila','Nicosia','Novokuznetsk','Novosibirsk','Omsk','Oral','Pontianak','Pyongyang',
		'Qostanay','Qyzylorda','Rangoon','Sakhalin','Samarkand','Seoul','Srednekolymsk','Taipei','Tashkent','Tbilisi',
		'Tehran','Thimphu','Tokyo','Tomsk','Ulaanbaatar','Ust-Nera','Vladivostok','Yakutsk','Yekaterinburg','Yerevan'
	],
	Atlantic:['Azores','Bermuda','Canary','Cape_Verde','Faroe','Madeira','Reykjavik','South_Georgia','Stanley'],
	Australia:[
		'Sydney','Adelaide','Brisbane','Broken_Hill','Currie','Darwin','Eucla','Hobart',
		'Lord_Howe','Lindeman','Melbourne','Perth'
	],
	Indian:['Christmas','Chagos','Cocos','Kerguelen','Mahe','Maldives','Mauritius','Reunion'],
	Etc: [...Array(27).keys()].map((v,i) => `GMT${i < 15 ? `-${i}` : `+${i-14}`}`).concat('UTC')
}
const timezones: string[] = Object.keys(zones).reduce((a: any, continent: string) => {
	a = a.concat(zones[continent].map((city: string) => `${continent}/${city}`));
	return a
}, []).concat(['CET','CST6CDT','EET','EST','EST5EDT']);
export default timezones;
