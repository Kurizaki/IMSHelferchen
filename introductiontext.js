// Define the function to create the introduction
function createIntroduction() {
    // Create a new div element
    var divElement = document.createElement('div');
    
    // Set an id for the div
    divElement.setAttribute('id', 'introDiv');
    
    // Create a close button (X)
    var closeButton = document.createElement('span');
    closeButton.innerHTML = 'x';
    closeButton.style.cursor = 'pointer';
    closeButton.style.float = 'right';
    closeButton.style.color = '#ff0000';  // Red color for demonstration
    closeButton.style.fontSize = '24px';  // Increase font size for the close button
    closeButton.style.margin = '-50px -5px 0 0';  // Adjust margins for positioning
    
    // Add click event to the close button
    closeButton.addEventListener('click', function() {
        // Hide the divElement by setting its display property to 'none'
        divElement.style.display = 'none';
        
        // Hide the parent section with id 'introductiontext'
        var introSection = document.getElementById('introductiontext');
        introSection.style.display = 'none';
    });
    
    // Create a title for the introduction
    var titleElement = document.createElement('h2');
    titleElement.innerHTML = 'IMSHelferchen Einführung';
    
    // Create a text node with the introduction text
    var introText = document.createTextNode('Die Bibliothek bietet eine Fülle von Links zu Unterrichtsmaterialien, damit du schnell auf relevante Seiten zugreifen kannst. Unser Notenrechner ermöglicht es dir, deine Fortschritte im Blick zu behalten und dich auf das Wesentliche zu konzentrieren. Der Stundenplanabruf sorgt dafür, dass du immer den Überblick behältst und pünktlich zu deinen Informatikstunden erscheinst. Mit dem IMSHelferchen wird das Navigieren durch den Unterricht zum Kinderspiel, damit du dich voll und ganz auf das Erlernen von Programmiersprachen und informatischen Konzepten konzentrieren kannst.');
    
    // Append the title, close button, and text node to the div
    divElement.appendChild(titleElement);
    divElement.appendChild(closeButton);
    divElement.appendChild(introText);
    
    // Get the introductiontext section element by its id
    var introSection = document.getElementById('introductiontext');
    
    // Append the div to the introductiontext section
    introSection.appendChild(divElement);
}

// Call the createIntroduction function when the window loads
window.onload = createIntroduction;
