
// Display text blocks with versionedTextBlocks class displayDiv class
// Hide other text blocks with versionedTextBlocks class
displayHideTextBlocks = function(displayDiv, classes){
  for (var i = 0; i < classes.length; i++) {
    versionedText = classes[i];
    versionedTextVersion = classes[i].classList[1];

    if (versionedTextVersion === displayDiv) {
      versionedText.style.display = "block";
    } else {
      versionedText.style.display = "none";
    }
  }
}

// Display correct product/version in dropdown list
changeDropdownListValue = function(version){
  var opts = dropdownId.options.length;
  for (var i=0; i<opts; i++){
      if (dropdownId.options[i].value == version){
          dropdownId.options[i].selected = true;
          break;
      }
  }
}

// Fetch the given URL product version
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
  if (results==null){
      return null;
  }
  else {
      return results[1] || 0;
  }
}

// User changes product/version with dropdown list menu:
selectProductVersion = function() {
  //// Display divs for the selected version
  //// Hide divs for the other versions
  //// Set the dropdown list menu to the selected version
  //// Set URL search value
  var changeValue = dropdownId.options[dropdownId.selectedIndex].value;
  displayHideTextBlocks(changeValue, versionedTextBlocks);
  localStorage.setItem(docsProductVersionKey, changeValue);
  urlAppend = "?view=" + changeValue;
  history.replaceState(window.location.href, '', urlAppend);
};

if (document.querySelector("#chef-product-version-dropdown")) {

  var chefProductKey = document.querySelector("#chef-product-version-dropdown").dataset.chefProductKey;
  var defaultVersion = document.querySelector("#chef-product-version-dropdown").dataset.defaultVersion
  var versionedTextBlocks = document.getElementsByClassName("chef-product-version");
  var dropdownId = document.getElementById("chef-product-version-dropdown-select");
  var docsProductVersionKey = ("chef-docs-product-" + chefProductKey)
  var urlVersion = $.urlParam('view');

  if (urlVersion == null){

    // Check if page has a product/version stored in Window.localstorage
    // Display blocks based on the locally stored version or default version and hide others
    // Check browser support of Window.localstorage
    if (typeof(Storage) !== "undefined") {

      // Try to get product/version from local storage
      if (localStorage.getItem(docsProductVersionKey)){
        // display product/version if in local storage
        // Set the dropdown list menu to the stored version

        var displayVersion = localStorage.getItem(docsProductVersionKey);
        displayHideTextBlocks(displayVersion, versionedTextBlocks)
        changeDropdownListValue(displayVersion)

      } else {
        // If product/version is not in local storage:
        // display most recent product/version
        displayHideTextBlocks(defaultVersion, versionedTextBlocks)
      };

    } else {
      // If browser does not support Window.localstorage
      // Drop a div in between each section of the versioned documentation
      // Stating something like "The following is documentation for version x.y of <product>."
      console.log("This browser does not support Window.localstorage")
    };

  } else {
    urlVersion = urlVersion.split("#")[0]
    displayHideTextBlocks(urlVersion, versionedTextBlocks)
    changeDropdownListValue(urlVersion)
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(docsProductVersionKey, urlVersion);
    } else {
      // If browser does not support Window.localstorage
      // Drop a div in between each section of the versioned documentation
      // Stating something like "The following is documentation for version x.y of <product>."
      console.log("This browser does not support Window.localstorage")
    };
  };
};
