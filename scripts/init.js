const init = async () => {

  const urlString = window.location.href;
  const url = new URL(urlString);
  const snippet = url.searchParams.get("snippet");

  const path = './examples/html-css/above-below.html';

  const starterCode = snippet
    ? snippet
    : await fetch(path)
      .then(res => res.text())
      .catch(err => err.message);

  window.editor = ace.edit(document.getElementById('editor'));

  editor.setTheme('ace/theme/twilight');
  editor.setFontSize(15);
  editor.getSession().setMode('ace/mode/html');
  editor.getSession().setTabSize(2);
  editor.setValue(starterCode);

  const outputEl = document.getElementById('output');
  outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(starterCode);

  setQuerySnippet(starterCode)

  editor.on("change", (e) => {
    const code = editor.getValue()
    setQuerySnippet(code)
    outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
  });
}
