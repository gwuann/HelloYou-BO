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
teststory2con0();
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
        teststory3con1();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory3();
    }
}
teststory3();
//3.1
function teststory3con1(){
    console.log("\nNa het eten ging je rond vragen naar informatie maar je kreeg niks te weten, tot dat er een man naar je toe loopt. Hij vertelt je dat de romurs waar zijn en als je hier terug komt met de shoguns hood krijg je je beloning.");
    let choice = readlineSync.question("Ga verder rond vragen voor informatie zonder eten. (1) Probeer eten te stelen. (2): ");

    if (choice === "1") {
        console.log("Vetrouw de man en vraag hem voor meer informatie.\n");
        teststory3con3();
    } else if (choice === "2") {  
        console.log("Vertrouw de man niet en zoek naar iemand anders.\n");
        teststory3con2();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory3con1();
    }
}
teststory3con1();
//3.2
function teststory3con2() {
    console.log("\nDe man waarschuwt je dat je niet levend weg gaat komen als je niet achter de shogun aan gaat.");
    let choice = readlineSync.question("Vetrouw de man wel aan vraag voor meer informatie. (1) Vertrouw de man toch niet. (2): ");

    if (choice === "1") {
        console.log("De man zegt dat je de goede keuze hebt gekozen.\n");
        teststory3con3();
    } else if (choice === "2") {  
        console.log("Binnen 2 seconden ben door 3 mensen achter je in je rug gestoken.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory3con2();
    }
}
teststory2con2();
//3.3
function teststory3con3() {
    console.log("De man vertelt je over hoe de shogun altijd in zijn kasteel zit end dat jij veel te slap bent om hem te kunnen vermoorden.\n.");
    let choice = readlineSync.question("Ga naar de kasteel toe. (1) Ga trainen om sterker te worden. (2): ");

    if (choice === "1") {
        console.log("Je begint met naar het kasteel toe te lopen.\n");
        teststory4();
    } else if (choice === "2") {  
        console.log("Na een 10 minuten van trainen ben je te moe om verder te gaan en realiseer je dat je te slap bent om te trainen.\n");
        teststory3con4();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory3con3();
    }
}
teststory3con3();
//3.4
function teststory3con4() {
    console.log("Je denkt na over hoe je sterker gaat worden.\n.");
    let choice = readlineSync.question("Ga naar de kasteel toe en train niet. (1) Ga nog meer trainen om sterker te worden. (2): ");
    if (choice === "1") {
        console.log("Je begint met naar de kasteel toe te lopen.\n");
        teststory4();
    } else if (choice === "2") {  
        console.log("Na 1 uur van trainen val je neer en krijg je een hartaanval.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory3con4();
    }
}
teststory3con4();
//4
function teststory4() {
    console.log("Je loopt in het bos voor de kasteel en je hoort allemaal geschreeuw in de richting van de kasteel.\n.");
    let choice = readlineSync.question("Ga door naar het kasteel. (1) Keer om en ga terug naar de stad. (2): ");
    if (choice === "1") {
        console.log("Je bent voor de kasteel en je ziet overall bloed er is ook onder in de kasteel vuur.\n");
        teststory4con1();
    } else if (choice === "2") {  
        console.log("Je kwam dezelfde man tegen die je had gewaarschuwd en hij stak je neer.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory4();
    }
}
teststory4();
//4.1
function teststory4con1() {
    console.log("Je bent bij de ingang van de kasteel en ziet dat alles zowat in brand staat.\n.");
    let choice = readlineSync.question("Ren door het vuur heen. (1) Probeer omhoog te klimmen. (2): ");
    if (choice === "1") {
        console.log("Je rent er door heen.\n");
        teststory4con2();
    } else if (choice === "2") {  
        console.log("Je klimt omhoog in een kamer die in brand staat.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory4con1();
    }
}
teststory4con1();
//4.2
function teststory4con2() {
    console.log("Je hoort boven je erg veel geschreeuw.\n.");
    let choice = readlineSync.question("Ga naar boven toe. (1) Ga naar beneden toe. (2): ");
    if (choice === "1") {
        console.log("Je loopt naar boven toe en ziet veel doden lichamen die zijn neergestoken.\n");
        teststory4con3();
    } else if (choice === "2") {  
        console.log("Je loopt naar beneden toe en de trap zakt in waardoor je op een zwaard valt.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory4con2();
    }
}
teststory4con2();
//4.3
function teststory4con3() {
    console.log("Je bent op de hoogste punt van de kasteel en ziet daar de shogun met zijn oorlogs armor aan hij heeft een bloedende lichaam en katana in zijn hand. Om hem heen zijn meerdere doden soldaten.\n.");
    let choice = readlineSync.question("Pak een zwaard en val hem aan. (1) Probeer met hem te praten. (2): ");
    if (choice === "1") {
        console.log("Hij draaid zich om en heeft gelijk je hoofd er af gesneden met zijn katana.\n");
        retryFunction();
    } else if (choice === "2") {  
        console.log("De shogun draaid zich om en kijkt naar je.\n");
        teststory4con4();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory4con3();
    }
}
teststory4con3();
//4.4
function teststory4con4() {
    console.log("Hij vertelt hoe hij een ziekt heeft en dat hij langzaam dood zit te gaan, maar hij wou dood gaan terwijl hij deed waar hij het beste in was. Hij gooit ze zwaard naar je.\n.");
    let choice = readlineSync.question("Snij ze hoofd er af. (1) Spaar hem. (2): ");
    if (choice === "1") {
        console.log("Je snijd met 1 slag ze hoofd er af.\n");
        teststory5();
    } else if (choice === "2") {  
        console.log("Hij springt van de top van de kasteel naar beneden.\n");
        teststory4con5();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory4con4();
    }
}
teststory4con4();
//4.5
function teststory4con5() {
    console.log("Je loopt naar beneden om ze hoofd te pakken.\n.");
    let choice = readlineSync.question("Loop omlaag. (1) Klim omlaag. (2): ");
    if (choice === "1") {
        console.log("Terwijl je naar beneden loopt stort het gebouw neer en je wordt geplet.\n");
        retryFunction();
    } else if (choice === "2") {  
        console.log("Na dat je omlaag bent geklommen zie je 5 soldaten om je heen en wordt je neer gestoken.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory4con5();
    }
}
teststory4con5();
//5
function teststory5() {
    console.log("Je klimt omlaag van de kasteel en rent weg.\n.");
    let choice = readlineSync.question("ren naar de stad. (1) ren naar het bos. (2): ");
    if (choice === "1") {
        console.log("Je rent naar de stad toe en gaat naar de plek toe waar je de man had ontmoet.\n");
        teststory5con1();
    } else if (choice === "2") {  
        console.log("De bos was inbrand en je bent dood verbrand.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory5();
    }
}
teststory5();
//5.1
function teststory5con1() {
    console.log("Je ziet een man bekleed dus je weet niet zeker of het hem is.\n.");
    let choice = readlineSync.question("Geef het aan hem. (1) Steek hem neer met de katana. (2): ");
    if (choice === "1") {
        console.log("Je geeft het en daarna steekt hij in je buik.\n");
        retryFunction();
    } else if (choice === "2") {  
        console.log("Je steekt hem neer en ziet dat het de homeless man was die de rumors tegen je had verteld.\n");
        teststory5con2();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory5con1();
    }
}
teststory5con1();
//5.2
function teststory5con2() {
    console.log("Je ziet dat de man naar je toe loopt en hij vraagt om de hoofd te zien.\n.");
    let choice = readlineSync.question("Geef hem de hoofd. (1) Steek hem neer. (2): ");
    if (choice === "1") { 
        truetest()
        console.log("Hij knikt en zegt dat naar de hoofdstad bij de bar 2 halve glazen water moet halen en loopt weg.\n");
        teststory5con3();
    } else if (choice === "2") {  
        console.log("Je steekt hem neer en daarna stak hij jouw ook neer.\n");
        retryFunction();
    } else {
        console.log("Ongeldige keuze kies 1 of 2.\n");
        teststory5con2();
    }
}
teststory5con2();

function teststory5con3() {
    console.log("Na dat je naar de hoofdstad was gegaan gine je naar de bar en vroeg je om 2 halve glazen water de bar man zij dat je belong achter in is en hij wijst je de weg. Je kijkt achter in en ziet een kist vol met goud.")
    console.log("THE END")
}

//truetest
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
