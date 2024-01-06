# Projekt-Dokumentation

IMSHelferchen-Founder : Keanu M. Koelewijn, Julius V. Burlet, Timo E. N. Goedertier

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|24.11.2023|0.0.1|Die Webseite wurde erstellt und das Stylesheet wurde hinzugefügt.|
|01.12.2023|0.0.2|Das HTML wurde mit JavaScript dynamisch gemacht.|
|08.12.2023|0.1.0|Das Stylesheet wurde finalisiert und JavaScripts verbessert.|
|15.12.2023|0.1.1|Die JavaScripts wurden aufgeteilt und bestimmte Funktionen zugewiesen.|
|22.12.2023|1.0.1|Es wurde ein Konflikt zwischen navigation.js und gradeCalculator.js behoben.|
|05.01.2024|1.0.1|Ungewollte Funktionen und Fehler wurden entfernt.|

## 1 Informieren

### 1.1 Ihr Projekt

Wir erstellen eine SPA um das Leben der IMS Schüler zu vereinfachen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |Muss|Funkional|Als ein User möchte ich über die Webseite andere Webseiten verlinkt haben. (Kanti Baden, BBB, etc.)|
| 2    |Muss|Funktional|Als ein User möchte ich einen Notenrechner haben.|
| 3    |Muss|Qualität|Als User möchte ich einen kurzen Text haben, der die Seite erklärt.|
| 4    |Muss|Funktional| Als User möchte ich meinen Stundenplan sehen können.|
| 5    ||||

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |
| ...  |              |         |                   |
| ...  |              |         |                   |
| ...  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

![usecase IMSHelferchen](https://github.com/Kurizaki/IMSHelferchen/assets/110892283/059b349f-07e2-4d2d-8298-195a2f3238e8)


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |22.12.2023|Timo Goedertier|Kanti Baden Links sind drin.|5'|
| 1.B  |22.12.2023|Timo Goedertier|BBB Links sind drin.|5'|
| 1.C  |22.12.2023|Timo Goedertier|Andere Links sind drin.|5'|
| 1.D  |22.12.2023|Timo Goedertier|Links haben einen passenden Style.|15'|
| 2.A  |22.12.2023|Julius Burlet|Der Notenrechner hat alle passenden Funktionen.|30'|
| 2.B  |22.12.2023|Julius Burlet|Die Rechnungen, des Notenrechners sind korrekt.|20'|
| 2.C  |22.12.2023|Julius Burlet|Der Notenrechner hat einen passenden Style.|25'|
| 3.A  |22.12.2023|Timo Goedertier|Wenn man auf die WEbseite kommt, sieht man als erstes diesen Text.|20'|
| 4.A  |22.12.2023|Keanu Koelewijn|Man hat eine Übersicht der Klassen.|30'|
| 4.B  |22.12.2023|Keanu Koelewijn|Man sieht den Stundenplan, der jeweiligen Klassen.|30'|
| 4.C  |22.12.2023|Keanu Koelewijn|Die Stundenplan-Abschnitt hat einen passenden Style.| 20'|

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |24.11.2023|Timo Goedertier|5'|10'|
| 1.B  |24.11.2023|Timo Goedertier|5'|10'|
| 1.C  |24.11.2023|Timo Goedertier|5'|10'|
| 1.D  |08.12.2023|Timo Goedertier|15'|20'|
| 2.A  |       |Julius Burlet|30'||
| 2.B  |       |Julius Burlet|20'||
| 2.C  |       |Julius Burlet|25'||
| 3.A  |05.01.2024|Timo Goedertier|20'|30'|
| 4.A  |       |Keanu Koelewijn|30'||
| 4.B  |       |Keanu Koelewijn|30'||
| 4.C  |       |Keanu Koelewijn|20'||


✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |              |         |                   |                      |
| ...  |              |         |                   |                      |

✍️ Verwenden Sie römische Ziffern für Ihre Bug Reports, also I, II, III, IV etc.

## 6 Auswerten

Lernbericht J. Burlet:
Lernbericht K. Koelewijn:
Lernbericht T. Goedertier:
