function openInHixie() {
  const HTMLstr = editor.getValue();
  const encodedHTML = encodeURIComponent(HTMLstr);
  console.log(encodedHTML)
  const url = "https://software.hixie.ch/utilities/js/live-dom-viewer/?" + encodedHTML;
  window.open(url, "_blank");
}
