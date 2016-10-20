
var famous1 = {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}

var famous2 = {
  title: "Conqueror",
  name: "Napoleon Bonaparte",
  bio: "A French military and political leader who rose to prominence during the French Revolution and led several successful campaigns during the Revolutionary Wars.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
  lifespan: {
    birth: 1769,
    death: 1821
  }
}

var famous3 = {
  title: "Scientist",
  name: "Aristotle",
  bio: "A Greek philosopher and scientist born in the city of Stagira, Chalkidice, on the northern periphery of Classical Greece.",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
  lifespan: {
    birth: 1769,
    death: 1821
  }
}


var famous4 = {
  title: "Chef",
  name: "Martino da Como",
  bio: "An Italian 15th-century culinary expert who was unequalled in his field at the time and could be considered the Western world's first celebrity chef.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Trivulzio.jpg/200px-Trivulzio.jpg",
  lifespan: {
    birth: 1430,
    death: 1484
  }
}
var famous5 = {
  title: "Chef",
  name: "Procopio Cutò",
  bio: "Billing himself as a modern Procopius, he founded in 1686 what has become the oldest extant cafe in Paris, Café Procope.[2] It became the first literary coffeehouse in Paris. For over 200 years the cafe-restaurant attracted notables in the world of arts, politics, and literature.",
  image: "https://en.wikipedia.org/wiki/Procopio_Cut%C3%B2#/media/File:Procopio_dei_Coltelli.jpg",
  lifespan: {
    birth: 1769,
    death: 1821
  }
}



var bioDiv = document.getElementById("container");
var famousPeople = [famous1, famous2, famous3, famous4, famous5];

for (i=0;i < famousPeople.length;i++) {

	var newPerson = document.createElement("PERSON");
	newPerson.id = "person" + i;
	
	var personHeader = "<header>" + famousPeople[i].name + ": " + famousPeople[i].title + "</header>";
	var personBody = "<section><image src='" + famousPeople[i].image + "' class='bioImage'><br><p>" + famousPeople[i].bio + "</p></section>";
	var personFooter = "<footer>Born: " + famousPeople[i].lifespan.birth + ". Evaporated: " + famousPeople[i].lifespan.death + ".</footer>";

	newPerson.innerHTML = personHeader + personBody + personFooter;

	console.log(newPerson);
	document.body.appendChild(newPerson);


	// <person>
	//   <header>Name and title go here</header>
	//   <section>Bio and image go here</section>
	//   <footer>Lifespan info goes here</footer>
	// </person>



}

// var counter = 0;
// var outputEl = document.getElementById("outputEl");
// for (; counter < 5; counter++) {
//   // Give each person element a unique identifier
//   outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
// }

// // Now containerEl will have elements in it
// var containerEl = document.getElementsByClassName("person__container");

// // Event listeners are created
// for (var i = 0; i < containerEl.length; i++) {
//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
//   });
// });




	


























