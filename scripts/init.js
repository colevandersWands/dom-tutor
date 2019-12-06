const init = () => {

  const fallback = `<style>
  table, th, td {
    border: 1px solid black;
  }
</style>

<h2>tables are not as they appear</h2>
<table>
  <tr>
    <td>the html</td>
    <td>does not</td>
  </tr>
  <tr>
    <td>match the</td>
    <td>DOM</td>
  </tr>
</table>`;

  const urlString = window.location.href;
  const url = new URL(urlString);
  const snippet = url.searchParams.get("snippet");

  const code = snippet ? snippet : fallback;

  window.editor = ace.edit(document.getElementById('editor'));

  editor.setTheme('ace/theme/twilight');
  editor.setFontSize(15);
  editor.getSession().setMode('ace/mode/html');
  editor.getSession().setTabSize(2);
  editor.setValue(code);

  const outputDiv = document.getElementById('output');

  outputDiv.innerHTML = editor.getValue();
  editor.on("change", (e) => {
    const code = editor.getValue()
    setQuerySnippet(code)
    outputDiv.innerHTML = code;
  });
}
