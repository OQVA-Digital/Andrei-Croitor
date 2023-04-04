let headerHTML = "";

function callHeader() {
  class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      let p = document.createElement('header');

      p.innerHTML = `${headerHTML}`;
      
      this.shadowRoot.appendChild(p);
    }
  }
  window.customElements.define('header-component', HeaderComponent);
}

fetch('../components/header.html').then(function (response) {
  return response.text();
}).then(function (html) {
  headerHTML = html;
  callHeader()
}).catch(function (err) {
  console.warn('Something went wrong.', err);
});







let footerHTML = "";

function callFooter() {
  class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      let footer = document.createElement('footer');

      footer.innerHTML = `${footerHTML}`;

      this.shadowRoot.appendChild(footer);
    }
  }
  window.customElements.define('footer-component', FooterComponent);
}

fetch('../components/footer.html').then(function (response) {
  return response.text();
}).then(function (html) {
  footerHTML = html;
  callFooter()
}).catch(function (err) {
  console.warn('Something went wrong.', err);
});







let breadcrumbsHTML = "";

function callBreadcrumbs() {
  class BreadcrumbsComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      let breadcrumbs = document.createElement('nav');

      breadcrumbs.innerHTML = `${breadcrumbsHTML}`;
      
      this.shadowRoot.appendChild(breadcrumbs);
    }
  }
  window.customElements.define('breadcrumbs-component', BreadcrumbsComponent);
}

fetch('../components/breadcrumbs.html').then(function (response) {
  return response.text();
}).then(function (html) {
  breadcrumbsHTML = html;
  callBreadcrumbs()
}).catch(function (err) {
  console.warn('Something went wrong.', err);
});
