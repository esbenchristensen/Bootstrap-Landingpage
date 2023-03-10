byer = [
    "Albertslund",
    "Allerød",
    "Assens",
    "Ballerup",
    "Grindsted",
    "Rønne",
    "Brøndby",
    "Brønderslev",
    "Dragør",
    "Stenløse",
    "Esbjerg",
    "Fanø",
    "Hinnerup",
    "Haslev",
    "Kokkedal",
    "Fredericia",
    "Frederiksberg",
    "Frederikshavn",
    "Frederikssund",
    "Farum",
    "Ringe",
    "Charlottenlund",
    "Søborg",
    "Glostrup",
    "Greve",
    "Helsinge",
    "Nykøbing Falster",
    "Haderslev",
    "Frederiksværk",
    "Hedensted",
    "Helsingør",
    "Herlev",
    "Herning",
    "Hillerød",
    "Hjørring",
    "Holbæk",
    "Holstebro",
    "Horsens",
    "Hvidovre",
    "Taastrup",
    "Hørsholm",
    "Ikast",
    "Ishøj",
    "Aabybro",
    "Kalundborg",
    "Kerteminde",
    "Kolding",
    "København",
    "Køge",
    "Rudkøbing",
    "Hvalsø",
    "Lemvig",
    "Maribo",
    "Kongens Lyngby",
    "Læsø",
    "Hobro",
    "Middelfart",
    "Nykøbing Mors",
    "Grenaa",
    "Bogense",
    "Nyborg",
    "Næstved",
    "Odder",
    "Odense",
    "Højby",
    "Randers",
    "Støvring",
    "Ringkøbing",
    "Ringsted",
    "Roskilde",
    "Holte",
    "Rødovre",
    "Samsø",
    "Silkeborg",
    "Skanderborg",
    "Skive",
    "Slagelse",
    "Solrød Strand",
    "Sorø",
    "Store Hedding",
    "Struer",
    "Svendborg",
    "Ebbeltoft",
    "Sønderborg",
    "Thisted",
    "Tønder",
    "Kastrup",
    "Vallensbæk Strand",
    "Varde",
    "Vejen",
    "Vejle",
    "Aars",
    "Viborg",
    "Vordingborg",
    "Ærøskøbing",
    "Aabenraa",
    "Aalborg",
    "Aarhus",
];

window.onload = function () {
    visbyer();
};

/* let bytekst = document.querySelector("#by");
let bytekst2 = document.querySelector("#by2");
let bytekst3 = document.querySelector("#by3");

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

const visbyer = async () => {
    bytekst.style.color = "var(--green)";
    bytekst2.style.color = "var(--green)";
    bytekst3.style.color = "var(--green)";
    for (let i = 0; i < 98; i += 3) {
        await sleep(800);

        bytekst.innerHTML = byer[i] + " - ";
        bytekst2.innerHTML = byer[i + 1];
        bytekst3.innerHTML = " - " + byer[i + 2];
    }
    bytekst.innerHTML = "";
    bytekst2.innerHTML = "Din by.";
    bytekst2.style.color = "var(--green)";
    bytekst3.innerHTML = "";
}; */

let bytekst2 = document.querySelector("#by2");

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

const visbyer = async () => {
    bytekst2.style.color = "var(--green)";

    for (let i = 0; i < 98; i++) {
        await sleep(1000);

        function unfade(element) {
            var op = 0.5; // initial opacity
            element.style.display = "block";
            var timer = setInterval(function () {
                if (op >= 1) {
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = "alpha(opacity=" + op * 100 + ")";
                op += op * 0.1;
            }, 20);
        }

        unfade(bytekst2);

        bytekst2.innerHTML = byer[i];

        /*         function fade(element) {
            var op = 1; // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1) {
                    clearInterval(timer);
                    element.style.display = "none";
                }
                element.style.opacity = op;
                element.style.filter = "alpha(opacity=" + op * 100 + ")";
                op -= op * 0.1;
            }, 50);
        }

        fade(bytekst2); */
    }

    bytekst2.innerHTML = "Din by.";
};

/* visbyer();
 */
