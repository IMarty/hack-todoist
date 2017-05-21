var source = document.getElementById('zonePlayer').getAttribute("data-src");
if(source){ 
  if (confirm('Retirer la pub de ce replay ?')) {
      window.location.replace("http:"+source);
  } else {
    alert("C'est très bien de supporter la pub !");
  }
}
