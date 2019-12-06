const setQuerySnippet = code => {
  window.history.pushState({}, null, '?snippet=' + encodeURIComponent(code));
}
