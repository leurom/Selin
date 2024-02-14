// Funktion zum Anzeigen der bevorstehenden Vorträge auf Ihrer eigenen Seite
function anzeigenBevorstehendeVortraege() {
    // Zugriff auf das iframe-Element
    var iframe = document.getElementById('exploraFrame');
    // Zugriff auf das Dokument innerhalb des iframes
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    
    // Extrahieren der bevorstehenden Vorträge aus dem iframe-Dokument
    var bevorstehendeVortraege = iframeDocument.querySelectorAll('.upcoming-talks-list li');
    
    // Erstellen einer Liste der bevorstehenden Vorträge
    var vortraegeListe = '<ul>';
    for (var i = 0; i < bevorstehendeVortraege.length; i++) {
        vortraegeListe += '<li>' + bevorstehendeVortraege[i].textContent + '</li>';
    }
    vortraegeListe += '</ul>';
    
    // Anzeigen der Liste der bevorstehenden Vorträge auf Ihrer eigenen Seite
    document.getElementById('bevorstehendeVortraege').innerHTML = vortraegeListe;
}

// Aufrufen der Funktion, sobald das iframe vollständig geladen ist
document.getElementById('exploraFrame').onload = anzeigenBevorstehendeVortraege;
