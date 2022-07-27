let headerWithNav = document.body.children[1];
document.body.insertBefore(headerWithNav, document.body.children[0]);

let h1 = document.getElementsByTagName("h1")[0];
headerWithNav.insertBefore(h1, headerWithNav.firstChild);

let [ babyMop, chinStick ] = document.getElementsByTagName("img");
let content = document.querySelector("#content");
let [ article, fig1, fig2 ] = content.children;
fig1.replaceChild(chinStick, babyMop);
fig2.insertBefore(babyMop, fig2.firstChild);
article.appendChild(fig1);
article.appendChild(fig2);