document.addEventListener("DOMContentLoaded", function() {
    const categorizedLibraryItems = {
        "Kanti Baden": [
            { name: "Kanti Baden", url: "https://www.kanti-baden.ch/" },
            { name: "Schulnetz", url: "https://www.schul-netz.com/baden/" }
        ],
        "BBBaden": [
            { name: "BBBaden", url: "https://www.bbbaden.ch/" },
            { name: "Moodle", url: "https://moodle.bbbaden.ch/" },
            { name: "Mahara", url: "https://portfolio.bbbaden.ch/" },
            { name: "BBB GitLab", url: "https://bbbhub.bbbaden.ch/informatik-bivo2021?page=1" }
        ],
        "Other": [
            { name: "GitHub", url: "https://github.com/" },
            { name: "ChatGPT", url: "https://chat.openai.com/" }
        ]
    };

    function createLibraryItem(item) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        listItem.appendChild(link);
        return listItem;
    }

    const libraryList = document.getElementById("library-list");

    for (let category in categorizedLibraryItems) {
        const categoryHeader = document.createElement("h3");
        categoryHeader.textContent = category;
        libraryList.appendChild(categoryHeader);

        categorizedLibraryItems[category].forEach(item => {
            libraryList.appendChild(createLibraryItem(item));
        });
    }
});
