# Projekt-Dokumentation

IMSHelferchen-Founder : Keanu M. Koelewijn, Julius V. Burlet, Timo E. N. Goedertier

| Datum      | Version | Zusammenfassung                                                              |
| ---------- | ------- | ---------------------------------------------------------------------------- |
| 24.11.2023 | 0.0.1   | Die Webseite wurde erstellt und das Stylesheet wurde hinzugefügt.            |
| 01.12.2023 | 0.0.2   | Das HTML wurde mit JavaScript dynamisch gemacht.                             |
| 08.12.2023 | 0.1.0   | Das Stylesheet wurde finalisiert und JavaScripts verbessert.                 |
| 15.12.2023 | 0.1.1   | Die JavaScripts wurden aufgeteilt und bestimmte Funktionen zugewiesen.       |
| 22.12.2023 | 1.0.1   | Es wurde ein Konflikt zwischen navigation.js und gradeCalculator.js behoben. |
| 05.01.2024 | 1.0.1   | Ungewollte Funktionen und Fehler wurden entfernt.                            |

## 1 Informieren

### 1.1 Ihr Projekt

Wir erstellen eine SPA um das Leben der IMS Schüler zu vereinfachen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                        |
| ---- | --------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funkional  | Als ein User möchte ich über die Webseite andere Webseiten verlinkt haben. (Kanti Baden, BBB, etc.) |
| 2    | Muss            | Funktional | Als ein User möchte ich einen Notenrechner haben.                                                   |
| 3    | Muss            | Qualität   | Als User möchte ich einen kurzen Text haben, der die Seite erklärt.                                 |
| 4    | Muss            | Funktional | Als User möchte ich meinen Stundenplan sehen können.                                                |
| 5    | Kann            | Qualität   | Als User möchte ich auf jeder Seite sehen können wer mir diese Seite bereitgestellt hat             |

### 1.3 Testfälle

| TC-№ | Ausgangslage                        | Eingabe                          | Erwartete Ausgabe                                                            |
| ---- | ----------------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| 1.1  | User ist auf der Hauptseite         | Klickt auf den "Bibliothek" Tab  | Eine Liste von verlinkten Webseiten (Kanti Baden, BBB, etc.) wird angezeigt. |
| 1.2  | User ist auf der Hauptseite         | Klickt auf einen Webseitenlink   | Die ausgewählte Webseite wird in einem neuen Tab/Fenster geöffnet.           |
| 2.1  | User ist auf der Hauptseite         | Gibt Noten für Fächer ein        | Der Notendurchschnitt wird automatisch berechnet und angezeigt.              |
| 2.2  | User ist auf der Notenrechner-Seite | Gibt ungültige Noten ein         | Fehlermeldung wird angezeigt, dass ungültige Noten eingegeben wurden.        |
| 3.1  | User ist auf der Hauptseite         | Liest den kurzen Erklärungstext  | Verständliche und klare Erklärung über die Webseite wird angezeigt.          |
| 3.2  | User ist auf der Erklärungsseite    | Scrollt bis zum Ende der Seite   | Die gesamte Erklärung wird ohne fehlende Informationen angezeigt.            |
| 4.1  | User ist auf der Hauptseite         | Klickt auf den "Stundenplan" Tab | Der persönliche Stundenplan des Users wird angezeigt.                        |
| 5.1  | User ist auf einer beliebigen Seite | Blickt auf die Seite             | Informationen über die Developer werden im Fussbereich angezeigt.            |
| 5.2  | User ist auf einer Unterseite       | Scrollt zum Fußbereich           | Verlinkung zu diesem Github Projekt wird aufgeführt                          |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

![usecase IMSHelferchen](https://github.com/Kurizaki/IMSHelferchen/assets/110892283/059b349f-07e2-4d2d-8298-195a2f3238e8)

## 2 Planen

| AP-№ | Frist | Zuständig                                       | Beschreibung                                              | geplante Zeit |
| ---- | ----- | ----------------------------------------------- | --------------------------------------------------------- | ------------- |
| 1.A  |       | Timo Goedertier                                 | Links Bibliothek bereitstellen in JavaScript              | 290 min       |
| 2.A  |       | Julius Burlet                                   | Notenschnittrechner Bereitstellen in Javascript           | 430 min       |
| 3.A  |       | Timo Goedertier                                 | Erklärungstext bereitstellen in JavaScript                | 290 min       |
| 4.A  |       | Keanu Koelewijn                                 | Stundenplan abrufer bereitstellen mit Json und JavaScript | 450 min       |
| 5.A  |       | Julius Burlet                                   | Developer im Footer verweisen mit dem Github verlinkt     | 140 min       |
| 6.A  |       | Keanu Koelewijn                                 | Ein Ansprechendes CSS bereitstellen                       | 130 min       |
|      |       | Keanu Koelewijn, Timo Goedertier, Julius Burlet | Dokumentation vervollständigen                            | 500 min       |

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum      | Zuständig       | geplante Zeit | tatsächliche Zeit |
| ---- | ---------- | --------------- | ------------- | ----------------- |
| 1.A  | 29.11.2023 | Timo Goedertier | 290 min       |                   |
| 2.A  |            | Julius Burlet   | 430 min       |                   |
| 3.A  | 06.12.2023 | Timo Goedertier | 290 min       |                   |
| 4.A  | 06.12.2023 | Keanu Koelewijn | 450 min       |                   |
| 5.A  |            | Julius Burlet   | 140 min       |                   |
| 6.A  |            | Keanu Koelewijn | 130 min       |                   |
|      |            |                 | 500 min       |                   |



✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester          |
| ---- | ----- | -------- | --------------- |
| 1.1  |       | OK       | Keanu Koelewijn |
| 1.2  |       | OK       | Keanu Koelewijn |
| 2.1  |       |          |                 |
| 2.2  |       |          |                 |
| 3.1  |       | OK       | Keanu Koelewijn |
| 3.2  |       | OK       | Keanu Koelewijn |
| 4.1  |       | OK       | Keanu Koelewijn |
| 5.1  |       | OK       | Keanu Koelewijn |
| 5.2  |       | OK       | Keanu Koelewijn |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.



## 6 Auswerten

Lernbericht J. Burlet:
Lernbericht K. Koelewijn:
Lernbericht T. Goedertier:
