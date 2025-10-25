// Script to replace :trollface: with trollface image on Twitter/X

// URL of the trollface image in the extension
const trollfaceURL = chrome.runtime.getURL('troll.webp');

// Function to replace :trollface: with the image
function replaceTrollface(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent;
    
    // If the text contains :trollface:
    if (text.includes(':trollface:')) {
      // Create a fragment with the image
      const fragment = document.createDocumentFragment();
      const parts = text.split(':trollface:');
      
      parts.forEach((part, index) => {
        // Add the text
        if (part) {
          fragment.appendChild(document.createTextNode(part));
        }
        
        // Add the trollface image between parts (except after the last one)
        if (index < parts.length - 1) {
          const img = document.createElement('img');
          img.src = trollfaceURL;
          img.alt = 'trollface';
          img.style.width = '1.8em';
          img.style.height = '1.8em';
          img.style.display = 'inline-block';
          img.style.verticalAlign = 'middle';
          img.style.margin = '0 2px';
          fragment.appendChild(img);
        }
      });
      
      // Replace the text node with the fragment
      node.parentNode.replaceChild(fragment, node);
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // Don't modify scripts, styles, or inputs
    if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'INPUT' && node.tagName !== 'TEXTAREA') {
      // Traverse children
      Array.from(node.childNodes).forEach(child => replaceTrollface(child));
    }
  }
}

// Scan the page on load
replaceTrollface(document.body);

// Observe changes (for new dynamically loaded tweets)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
        replaceTrollface(node);
      }
    });
  });
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log('🎭 Twitter Trollface Replacer activated!');
