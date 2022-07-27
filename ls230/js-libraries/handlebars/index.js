let postTemplate = Handlebars.compile($("#post").html());
let tag = Handlebars.registerPartial("tag", $("#tag").html());

let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: '<i>April 1, 2015</i>',
  body: '<p>Sed ut perspiciatis unde omnis iste <em>natus error</em> sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>'
};

post.tags = ["quotes", "wise words", "random latin"];
let noTagPost =  {
  title: 'Lorem ipsum dolor sit amet',
  published: '<i>July 3, 2022</i>',
  body: '<p>Sed ut perspiciatis unde omnis iste <em>natus error</em> sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>'
};

let posts = [post, noTagPost];

$(() => {
  $("body").append(postTemplate({ posts }));
});