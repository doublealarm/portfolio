fetch("header.html")
  .then(response => response.text())
  .then(html => {
    const fetchedDocument = new DOMParser().parseFromString(html, "text/html");
    const source = fetchedDocument.querySelector("header");
    const target = document.querySelector("#app-header");

    if (source && target) {
      target.innerHTML = source.innerHTML;
    }
  })