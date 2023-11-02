let readlineSync = require("readline-sync");
//1 start
function teststory1() {
    console.log("\nna dat je de verhaal van de zwerver hebt gehoord ga je op zoek naar meer informatie.");
    let choice = readlineSync.question("Zoek voor informatie in dezelfde stad? (1) Zoek voor informatie in een andere stad? (2): ");

    if (choice === "1") {
        console.log("Na 5 uur van rond zoeken vind je niemand die er iets over weet.\n");
        teststory1con0();
    } else if (choice === "2") {  
        console.log("Je loopt uit de stad het bos in.\n");
        teststory2();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory1();
    }
}
teststory1();
//1.0
function teststory1con0() {
    console.log("\n Je denkt na over je volgende stap.")
    let choice = readlineSync.question("Vraag aan de politie of hun iets weten er over. (1) Geef op met zoeken. (2): ");
    
    if (choice === "1") {
        console.log("De politie zegt dat je niet daar over hoort te weten en roepen voor meer agenten.\n");
        teststory1con1();
    } else if (choice === "2") {  
        console.log("Je leefde je leven verder als zwerver zonder iets hebben te bereikt.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory1con0();
    }
}
teststory1con0();
//1.1
function teststory1con1(){
    console.log("\n Je wordt omsingeld door 2 agenten.")
    let choice = readlineSync.question("Probeer weg te rennen. (1) Probeer het uiteleggen. (2): ");
    
    if (choice === "1") {
        console.log("Je dat het zijn schuld was en wijst achter een agent, terwijl hij zich omdraaid ren je langs hem het bos in.\n");
        teststory2();
    } else if (choice === "2") {  
        console.log("Je wordt door nog meer agenten omsingeld en in de cell gegooid, uieindelijk word je uit je cell gehaald en openbaar geexuceerd vanwege veraading.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory1con1();
    }
}
teststory1con1();
//2
function teststory2() {
    console.log("\n Je komt iemand tegen in een bos hij heeft luxe bekleding.");
    let choice = readlineSync.question("Daag hem uit om te vechten. (1) Vraag hem de de weg naar de dichtbijste stad. (2): ");

    if (choice === "1") {
        console.log("Hij accepteerd je uitdaging en pakt ze zwaard, voor dat je kan uitleggen dat je met vuisten wilt vechten ben je al neergestoken.\n");
        retryFunction();
    } else if (choice === "2") {  
        console.log("Hij wijst je de weg en je loopt verder.");
        teststory2con0();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory2();
    }
}
teststory2();
//2.0
function teststory2con0(){
    console.log("\n Het begint te stormen en je ziet een cave verder op.");
    let choice = readlineSync.question("Blijf door lopen naar de stad. (1) Schuil in de cave. (2): ");

    if (choice === "1") {
        console.log("Na een tijdje door lopen stopt de storm eindelijk en neem je een rust pauze.\n");
        teststory2con1();
    } else if (choice === "2") {  
        console.log("Je loopt de cave binnen en het is extreem donker waardoor je struikelt en op een spike valt. .\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory2con0();
    }
}
teststory2con1();
//2.1
function teststory2con2(){
    console.log("\n Tijdens het rusten krijg je honger.");
    let choice = readlineSync.question("Blijf door lopen naar de stad. (1) Jaag op dieren. (2): ");

    if (choice === "1") {
        console.log("Je loopt door naar de stad.\n");
        teststory3();
    } else if (choice === "2") {  
        console.log("Je zoekt naar iets om op te jagen maar je vind niks.\n");
        teststory2con3();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory2con2();
    }
}
teststory2con2();
//2.3
teststory2con3();{
    console.log("\n Je hebt nu nog meer honger.");
    let choice = readlineSync.question("Geef op en loop naar de stad toe. (1) Blijf proberen iets te vinden om op te jagen. (2): ");

    if (choice === "1") {
        console.log("Je loopt door naar de stad en voor dat je het weet val je neer, je wordt omstekop wakker en je ziet allemaal kannibalen om je heen.\n");
        retryFunction();
    } else if (choice === "2") {  
        console.log("Na uren zoeken zie eindelijk iets bruins bewegen in een bosje, je pakte een scherpe tak en springt er op af! Het bleek een beer te zijn.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory2con3();
    }
}
teststory2con3();
//3
function teststory3() {
    console.log("\n Je bent eindelijk in de city maar je hebt erg honger.");
    let choice = readlineSync.question("Ga verder rond vragen voor informatie zonder eten. (1) Probeer eten te stelen. (2): ");

    if (choice === "1") {
        console.log("Je probeert rond te zoeken naar informatie maar voor dat je het realiseerd val je neer op de grond, je wordt wakker in een kooi en je hoort 'Het laagste dat ik voor hem kan doen is 3 euro lager dan dat gaat het niet!' Je bent verkocht als slaaf.\n");
        retryFunction();
    } else if (choice === "2") {  
        console.log("Je loopt naar een markt toe en het lukt je om de verkoper te gaslighten.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory3();
    }
}
teststory3();
//3.1
function teststory3con1(){

}
teststory3con1();

//here copy paste yk




/*
//truetest
//here
function truetest() {
    console.log("                                         / \                                                                          / \                                       ")
    console.log("                                        /  |                                                                         |   \                                      ")
    console.log("                                       /   /                                                                          \   \                                     ")
    console.log("                                      /   /                                                                            \   \                                    ")
    console.log("                                     /   /                                                                              \   \                                   ")
    console.log("                                    /   /                     /                                    \                     \   \                                  ")
    console.log("                                   /   /                     | |               X                  | |                     \   \                                 ")
    console.log("                                  /   |                      | \              / \                /  |                      |   \                                ")
    console.log("                                 /    |                      |  \           _/   \_             /   |                      |    \                               ")
    console.log("                                |     |                      \   \ /_______/   O   \_________\ /   /                       |     |                              ")
    console.log("                                |     |                       \   /        \_     _/          \   /                        |     |                              ")
    console.log("                                |    |                         \ /           \   /             \ /                          |    |                              ")
    console.log("                                |    |                          /            /   \              \                           |    |                              ")
    console.log("                                \    \      ___________________/____________/  O  \______________\____________________      /    /                              ")
    console.log("                                 \    \    /            /                   \     /                      \            \    /    /                               ")
    console.log("                                  \    \  /            /                     \   /                        \            \  /    /                                ")
    console.log("                           ________\____\/            /                       \ /                          \            \/____/________                         ")
    console.log("                         _/          /               /                         X                            \               \          \_                       ")
    console.log("                       _/           /               /                         / \                            \               \           \_                     ")
    console.log("                    _/____________/_______________/__________________________/___\_____________________________\_____________ \____________\_                   ")
    console.log("                    /     \      /            __/                           /     \                              \__           \     /     \                    ")
    console.log("                   /        \    /              /                          /   O   \                             \             \   /        \                   ")
    console.log("                  /          \  /              /                           \       /                              \             \ /          \                  ")
    console.log("                 /           \ /_____________ /            \                \_____/                                \_____________\/           \                 ")
    console.log("                /            \/               \            _\____                               ______            /              \/            \                ")
    console.log("               /             /                  \            \   \_                           _/                /                 \             \               ")
    console.log("          ____/______________/                    \           \    \____                 ____/                /                   \______________\____          ")
    console.log("         /  _________________|__________________  \            \        \               /                     / ___________________|________________  \         ")
    console.log("     \  /  /  /              \                   \|          ~~~\~~~~~                     ~~~~~~~~~          |/                   /              \ \  \  /     ")
    console.log("     \\/ /  /                 \                   |              \                                            |                   /                 \ \ \//     ")
    console.log("      \_/  /                 /  \                 |               \                                           |                 /  \                 \ \_/      ")
    console.log("          /                /     /                |                \         / \                              |                \     \                \         ")
    console.log("         /               /      /________________/                  \       / | \                              \________________\      \               \        ")
    console.log("        /              /                         \                          \\|//                               /                         \              \      ")
    console.log("       /  ____________/_________________________ /                                                             \__________________________\__________    \      ")
    console.log("      / /            |                           \                                                             /                          |               \     ")
    console.log("      / _____________|__________________________ /                                                             \ _________________________|_____________  \     ")
    console.log("      /______________|_________________________ /                                                               \ ________________________|_______________\     ")
    console.log("         /           \                          |                                                               |                        /             \        ")
    console.log("        /             \                         |                                                               |                       /               \       ")
    console.log("       /_______________\______________________ /\                                                               /\ ____________________/_________________\      ")
    console.log("       \___/___________/________________________|              ___________________________________             |_____________________\____________\___/         ")
    console.log("          /           /                         /\_           /                                   \          _/ \                       \             \         ")
    console.log("         /___________/__________________________\  \~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/   /________________________\_____________\        ")
    
}
truetest();
*/
// retry
function retryFunction () {
    let retry = readlineSync.question("Je bent dood gegaan! Wil je opnieuw proberen? (Ja of Nee): ");
    if (retry === "Ja") {  
        teststory1();
    } else if (retry === "Nee") {  
        return;
    } else console.log("Ongeldige keuze kies Ja of Nee.\n")
    retryFunction();
}
retryFunction();
