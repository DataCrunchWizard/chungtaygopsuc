const toNodes = html => new DOMParser().parseFromString(html, 'text/html').body.childNodes[0];

document.body.insertBefore(toNodes(`<div class="topnav">
  <a class="active" href=".">Chung Tay</a>
  <a href="covid-19-selfcheck.html">Tự Kiểm Tra</a>
  <a href="covid-19-vietnam-forecast.html">Dự Báo</a>
  
</div>`), document.body.firstChild);



// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'css/app.css';

// Get HTML head element to append
// link element to it
document.getElementsByTagName('HEAD')[0].appendChild(link);

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css';

// Get HTML head element to append
// link element to it
document.getElementsByTagName('HEAD')[0].appendChild(link);
