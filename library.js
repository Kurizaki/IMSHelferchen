document.addEventListener("DOMContentLoaded", function() {
    const categorizedLibraryItems = {
        "Kanti Baden": [
            { name: "Kanti Link 1", url: "https://example.com/kantibaden/link1" },
            { name: "Kanti Link 2", url: "https://example.com/kantibaden/link2" }
        ],
        "BBBaden": [
            { name: "BBB Link 1", url: "https://example.com/bbbaden/link1" },
            { name: "BBB Link 2", url: "https://example.com/bbbaden/link2" }
        ],
        "Other": [
            { name: "Other Link 1", url: "https://example.com/other/link1" },
            { name: "Other Link 2", url: "https://example.com/other/link2" }
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
