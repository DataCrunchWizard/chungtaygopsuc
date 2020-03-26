const toNodes = html => new DOMParser().parseFromString(html, 'text/html').body.childNodes[0];

document.body.insertBefore(toNodes(`

<nav class="navbar is-fixed-top  is-light">
  <div class="navbar-brand">
     <a class="navbar-item" href=".">
        Trang Chủ 
      </a>
         
    <a class="navbar-item" href="covid-19-selfcheck.html">Tự Kiểm Tra</a>
    
    <a class="navbar-item" href="covid-19-vietnam-forecast.html">Dự Báo</a>
    
  </div>

  <div id="" class="navbar-menu">
   

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <div class="fb-share-button" data-href="https://lambdademy.github.io/covid19-selfcheck/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flambdademy.github.io%2Fcovid19-selfcheck%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Chia sẻ</a>
            </div>
          </p>
         
        </div>
      </div>
    </div>
    
  </div>
</nav>

`), document.body.firstChild);



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
