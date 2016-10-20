
var famous1 = {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "images/Tomoe.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}

var famous2 = {
  title: "Conqueror",
  name: "Napoleon Bonaparte",
  bio: "A French military and political leader who rose to prominence during the French Revolution and led several successful campaigns during the Revolutionary Wars.",
  image: "images/Napoleon.jpg",
  lifespan: {
    birth: 1769,
    death: 1821
  }
}

var famous3 = {
  title: "Scientist",
  name: "Aristotle",
  bio: "A Greek philosopher and scientist born in the city of Stagira, Chalkidice, on the northern periphery of Classical Greece.",
  image: "images/Aristotle.jpg",
  lifespan: {
    birth: 1769,
    death: 1821
  }
}


var famous4 = {
  title: "Chef",
  name: "Martino da Como",
  bio: "An Italian 15th-century culinary expert who was unequalled in his field at the time and could be considered the Western world's first celebrity chef.",
  image: "images/Trivulzio.jpg",
  lifespan: {
    birth: 1430,
    death: 1484
  }
}
var famous5 = {
  title: "Chef",
  name: "Procopio Cutò",
  bio: "Billing himself as a modern Procopius, he founded in 1686 what has become the oldest extant cafe in Paris, Café Procope.[2] It became the first literary coffeehouse in Paris. For over 200 years the cafe-restaurant attracted notables in the world of arts, politics, and literature.",
  image: "images/Procopio.jpg",
  lifespan: {
    birth: 1769,
    death: 1821
  }
}


var selectedPerson = "";
var famousPeople = [famous1, famous2, famous3, famous4, famous5];

var bioDiv = document.getElementById("container");
var txtInput = document.getElementById("txtInput");

txtInput.addEventListener("keydown", keyDownHandler);
txtInput.addEventListener("keyup", keyUpHandler);

for (i=0;i < famousPeople.length;i++) {

	var newPerson = document.createElement("PERSON");
	newPerson.id = "person" + i;

	if (i % 2 === 0) {
		newPerson.classList.add("odd");
	} else {
		newPerson.classList.add("even");
	}
	
	newPerson.addEventListener("click", cardClickHandler);

	var personHeader = "<header>" + famousPeople[i].name + ": " + famousPeople[i].title + "</header>";
	var personBody = "<section><image src='" + famousPeople[i].image + "' class='bioImage'><br><p>" + famousPeople[i].bio + "</p><p></p></section>";
	var personFooter = "<footer>Born: " + famousPeople[i].lifespan.birth + ". Evaporated: " + famousPeople[i].lifespan.death + ".</footer>";

	newPerson.innerHTML = personHeader + personBody + personFooter;

	document.body.appendChild(newPerson);

}



function cardClickHandler(event) {

	var currentPerson = event.currentTarget;

	if (selectedPerson === ""){
		
		currentPerson.classList.toggle("selected");
		selectedPerson = document.getElementById(currentPerson.id);

	} else if (selectedPerson === currentPerson) {

		currentPerson.classList.toggle("selected");
		selectedPerson = "";
	
	} else if ( selectedPerson !== currentPerson) {

		selectedPerson.classList.toggle("selected");
		currentPerson.classList.toggle("selected");
		selectedPerson = document.getElementById(currentPerson.id);

	} else {
		
		console.log("error:", "something went wrong :(");
	
	}
	
	txtInput.focus();
	txtInput.value = "";

}


function keyDownHandler () {

	if (event.keyCode === 13) {
		event.preventDefault();

		txtInput.value = "";
	}
}

function keyUpHandler () {

	if (selectedPerson == "") {

		alert("Please select a famous person to alter their bio.");

	} else {

		if (event.keyCode !== 13) {

				var curTextEl = selectedPerson.childNodes[1].childNodes[3];
				curTextEl.innerHTML = txtInput.value;
			}
	}
	
}


























