// URL of the remote text file
const remoteTextFileURL = 'url.txt';

// Function to fetch the content of the remote text file
async function fetchRemoteTextFile(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching remote text file:', error);
    return null;
  }
}

// Function to join the fetched text with additional text
function joinText(remoteText, additionalText) {
  return remoteText + 'BALLS';
}

// Usage: Fetch the remote text file and join its content with additional text
(async () => {
  const remoteText = await fetchRemoteTextFile(remoteTextFileURL);
  if (remoteText) {
    const additionalText = "Additional Text"; // Set your additional text here
    const joinedText = joinText(remoteText, additionalText);
    const remoteTextParagraph = document.getElementById('remoteTextParagraph');
    remoteTextParagraph.textContent = joinedText;
  } else {
    console.log('Failed to fetch remote text file.');
  }
})();
