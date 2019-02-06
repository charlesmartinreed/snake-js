//myMusic is an array containing an object, which itself contains an array

var myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": true
	},
	{
		"artist": "Beau Carnes",
		"title": "Cereal Man",
		"release_year": 2003,
		"formats": [
			"youtube-video"
		],
		"gold": false
	}
]

//accessing values in a nested object
var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

//remember that we use bracket notation when the value name has spaces
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = myPlants[1].list[1];
console.log(secondTree); //"pine"

//updating objects challenge
var collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let It Rock",
			"You Give Love a Bad Name"
		]
	},
	"5439": {
		"album": "ABBA Gold"
	}
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	//if we pass in blank value, delete the prop
	if (value === "") {
		delete collection[id][prop];
	} else if (prop === "tracks") {
		//if it doesn't already exist, make an empty array
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop] = value;
	}
	return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
updateRecords(2548, "tracks", "test");
