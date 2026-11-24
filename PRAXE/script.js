function zkontrolujOdpoved(spravne) {
    let textVysledku = document.getElementById("vysledek");

    if (spravne == true) {
        textVysledku.innerHTML = "Správně! GTA 6 se odehrává ve státě Leonida.";
        textVysledku.style.color = "#00ff66";
    } else {
        textVysledku.innerHTML = "Špatně, zkus vybrat jinou možnost.";
        textVysledku.style.color = "#ff3333";
    }
}