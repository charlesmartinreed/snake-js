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
	}
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	//console.log(JSON.stringify(collection[id]));
	var item = collection[id];

	if (collection.hasOwnProperty(id)) {
		if (value == undefined) {
			//delete item[prop]
			delete collection[id][prop];
		}

		if (prop == "tracks") {
			if (item.hasOwnProperty("tracks")) {
				let array = collection[id]["tracks"];
				array.push(value)
			} else {
				item[prop] = values
			}
		}

		item[prop] = value;
		return collection

	} else {
		// create a new album
		collection[id] = {
			prop: value
		};
		return collection
	}

}

let updatedCollection = updateRecords("5007", "album", "Symphonia");
console.log(JSON.stringify(updatedCollection));
