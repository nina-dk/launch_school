const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },
  {
    name: 'Python',
    description: 'Python is a high-level, interpreted, general-purpose programming language.',
  }
];

const findObjByName = lang => languages.find(({name}) => name === lang);

$(() => {
  let templates = {};
  let container = $("#lang_container");
  $("[type='text/x-handlebars-template'").each((_, script) => {
    templates[script.id] = Handlebars.compile($(script).html())
  });

  Handlebars.registerHelper("hideDesc", function() {
    return this.description.length > 120 ? this.description.slice(0, 120) + " ..." :
      this.description;
  });

  Handlebars.registerHelper("longDesc", function() {
    return this.description.length > 120;
  });

  $("[data-type='partial']").each(function(_) {
    let partial = $(this);
    Handlebars.registerPartial(partial.attr("id"), partial.html());
  });

  container.append(templates.language_list({ languages }));

  function toggleDesc(e) {
    e.preventDefault();

    let btn = $(e.target);
    let desc = btn.closest("dd");
    let lang = desc.attr("id");
    let langObj = findObjByName(lang);
    let content = btn.text() === "Show more" ?
      templates.full_desc(langObj) : templates.hidden_desc(langObj);

    desc.html(content);
  }

  container.on("click", ".expand", toggleDesc);
  container.on("click", ".hide", toggleDesc);
});