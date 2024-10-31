window.onload = async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sheetUrl = urlParams.get("url");
  
    if (sheetUrl) {
      loadSheetData(sheetUrl);
    } else {
      document.getElementById("sheetContainer").innerText = "No Google Sheet URL provided.";
    }
  };
  
  async function loadSheetData(sheetUrl) {
    // Fetch Google Sheet data through API or iframe here (simplified)
    // Placeholder: Display Google Sheet in an iframe and load sample tabs for sheets
  
    document.getElementById("sheetContainer").innerHTML = `<iframe src="${sheetUrl}" style="width: 100%; height: 100%; border: none;"></iframe>`;
  
    // Sample sheet tabs for demonstration
    const sheets = ["Sheet1", "Sheet2", "Sheet3"];
    const sheetTabs = document.getElementById("sheetTabs");
  
    sheets.forEach(sheet => {
      const tab = document.createElement("button");
      tab.textContent = sheet;
      tab.onclick = () => loadSheet(sheet);
      sheetTabs.appendChild(tab);
    });
  }
  
  function loadSheet(sheetName) {
    // Handle sheet loading and updating iframe or data container
    alert(`Switching to ${sheetName}`);
  }
  