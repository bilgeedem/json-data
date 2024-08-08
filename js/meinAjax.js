// Variablen zur Aufnahme der JSON Daten
let sammlung;
let choice1;
let choice2;

//Anfrage an den Server
let request = new XMLHttpRequest();

request.open("GET", "data/collection.json", true);
request.responseType = "json";
request.send();
request.onload = function() {
    // Antwort des Servers wird auf die Variable gelegt    
    sammlung = request.response;
    console.log(sammlung);
    header(); // direkter Objektzugriff ohne Arraydurchlauf
    content(); // Zugriff auf Array innerhalb des Objektes
};








// Zugriff auf Array items mit 2 Auswahlkriterien
	function ersteAuswahl(ersteAuswahl){
		choice1 = ersteAuswahl;
		console.log(choice1);
	}

	function zweiteAuswahl(zweiteAuswahl){
		choice2 = zweiteAuswahl;
		console.log(choice2);
	}


 

    function filtern2arguments(){
        
        let items = sammlung.collection.item;
		
        let filtertItems= items.filter(function (dummy) {
        return dummy.format === choice1 && dummy.city === choice2;
    	});
		
        console.log(filtertItems);
		document.getElementById("ausgabeContentFilter2").innerHTML = "";
		// Abfrage, ob das Array mit den Treffern leer, weil dann keine Ergebnisliste ausgegeben werden kann
		if (filtertItems.length === 0){
        	document.getElementById("ausgabeContentFilter2").innerHTML = "<br>Die Suche ergab keinen Treffer.";
    	}else {
			// Überschrift einblenden
			document.getElementById("headline2").style.display = "block";
			
			for (let i = 0; i < filtertItems.length; i++) { // Erstellen des HTML für eine Liste
				let listItem = `
				  <strong>${filtertItems[i].format}:</strong> ${filtertItems[i].title}<br>
				  <strong>City:</strong> ${filtertItems[i].city}<br>
				  <strong>Description:</strong> ${filtertItems[i].description}<br>
				  <strong>Price:</strong> ${filtertItems[i].price}
				`;
				
				// Hinzufügen des Listenelements zur bestehenden Liste
				document.getElementById("ausgabeContentFilter2").innerHTML += listItem;
    		}
        }
    }




   

















    
        
        

