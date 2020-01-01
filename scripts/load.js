const load = async (path) => {
  const example = await fetch(path)
    .then(res => res.text())
    .catch(err => err.message);
  document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(example);
  setQuerySnippet(example)
  editor.setValue(example);
}
