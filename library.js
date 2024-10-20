const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
	printPlaylists: function() {
		let playlists = this.playlists;
		for (let list in playlists) {
			console.log(`${playlists[list].id}: ${playlists[list].name} - ${playlists[list].tracks.length} tracks`)
		}
	},
	printTracks: function() {
		let tracks = this.tracks;
		for (let track in tracks) {
			console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
		}
	},
	printPlaylist: function(playlistId) {
		let playlists = this.playlists;
		let tracks = this.tracks;
		console.log(`${playlists[playlistId].id}: ${playlists[playlistId].name} - ${playlists[playlistId].tracks.length} tracks`)
	
		if (playlists[playlistId].tracks.length) {
			let trackLists = playlists[playlistId].tracks;
			for (let track of trackLists) {
				console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
			}
		}
	},
	addTrackToPlaylist: function(trackId, playlistId) {
		if (this.tracks[trackId]) {
			this.playlists[playlistId].tracks.push(trackId);
			console.log(this.playlists[playlistId])
		}
		
	},
	addTrack: function(name, artist, album) {
		const newId = generateUid();
		this.tracks[newId] = {
			id: newId,
			name: name,
			artist: artist,
			album: album
		}
	},
	addPlaylist: function(name) {
		const newId = generateUid();
		this.playlists[newId] = {
			id: newId,
			name: name,
			tracks: []
		}
		console.log(this.playlists)
	}
};

library.addPlaylist("milet")

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// const printPlaylists = function() {
// 	let playlists = library.playlists;
// 	for (let list in playlists) {
// 		console.log(`${playlists[list].id}: ${playlists[list].name} - ${playlists[list].tracks.length} tracks`)
// 	}
// }


// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function() {
// 	let tracks = library.tracks;
// 	for (let track in tracks) {
// 		console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
// 	}
// }



// // prints a list of tracks for a given playlist, using the following format:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {
// 	let playlists = library.playlists;
// 	let tracks = library.tracks;
// 	console.log(`${playlists[playlistId].id}: ${playlists[playlistId].name} - ${playlists[playlistId].tracks.length} tracks`)

// 	if (playlists[playlistId].tracks.length) {
// 		let trackLists = playlists[playlistId].tracks;
// 		for (let track of trackLists) {
// 			console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
// 		}
// 	}
// }
// // printPlaylist('p01');

// // adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
// 	if (library.tracks[trackId]) {
// 		library.playlists[playlistId].tracks.push(trackId);
// 		console.log(library.playlists[playlistId])
// 	}
	
// }
// // addTrackToPlaylist("t01", "p02")

// // generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// // adds a track to the library
// const addTrack = function(name, artist, album) {
// 	const newId = generateUid();
// 	library.tracks[newId] = {
// 		id: newId,
// 		name: name,
// 		artist: artist,
// 		album: album
// 	}
// }

// // addTrack("pineapple", "apple", "ready")

// // adds a playlist to the library
// const addPlaylist = function(name) {
// 	const newId = generateUid();
// 	library.playlists[newId] = {
// 		id: newId,
// 		name: name,
// 		tracks: []
// 	}
// 	console.log(library.playlists)
// }

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}