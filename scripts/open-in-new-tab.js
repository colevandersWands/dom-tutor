const openInNewTab = () => {
  const x = window.open();
  x.document.open();
  x.document.write(editor.getValue());
  x.document.close();
}
