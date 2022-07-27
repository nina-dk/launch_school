let modalTemplate = Handlebars.compile($("#team-member-details").html());

let teamDets = {
  kevin: {
    name: "Kevin Wang",
    imageSrc: "img_kevin",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  louis: {
    name: "Louis Burton",
    imageSrc: "img_louis",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  kasper: {
    name: "Kasper Salto",
    imageSrc: "img_kasper",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  chris: {
    name: "Chris Lee",
    imageSrc: "img_chris",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
};

$(() => {
  let modal = $("#modal");

  $("#team ul").on("click", function(e) {
    e.preventDefault();
  
    let memberName = $(e.target).closest("li").data("name");
    modal.append(modalTemplate(teamDets[memberName]));
    modal.fadeIn();

    let overlay = $("#overlay");
    overlay.fadeIn();

    let hideModal = () => {
      modal.fadeOut();
      overlay.fadeOut();
      setTimeout(() =>  modal.html(""), 400);
    };

    $("#close-icon").on("click", hideModal);
    $("#overlay").on("click", hideModal);
    $(document).on("keyup", e => {
      if (e.key === "Escape") hideModal()
    });
  });
});