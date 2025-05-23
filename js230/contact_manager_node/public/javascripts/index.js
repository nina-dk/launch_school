"use strict";

let App = {
  async init() {
    this.searchBar = $("#search-bar");
    this.contactsContainer = $("#contacts");
    this.noContacts = $("#no-contacts");
    this.noSearchResults = $("#no-search-results");
    this.createContactForm = $("form");
    this.contacts = null;
    this.tags = [];
    this.contactInfo = null;

    this.bindEvents();
    this.compileTemplates();
    await this.updateContacts();
    this.displayContacts(this.contacts);
    this.updateExistingTags();
    this.addTagsToForm();
  },
  showContacts() {
    this.createContactForm.slideUp();
    this.noContacts.slideUp();
    this.noSearchResults.slideUp();
    this.searchBar.slideDown();
    this.contactsContainer.slideDown();
  },
  showForm() {
    this.addTagsToForm();
    this.searchBar.slideUp();
    this.contactsContainer.slideUp();
    this.noSearchResults.slideUp();
    this.noContacts.slideUp();
    this.createContactForm.slideDown();
  },

  bindEvents() {
    $(".add").on("click", this.handleAddClick.bind(this));
    $("button.cancel").on("click", this.handleCancel.bind(this));
    this.createContactForm.on("submit", this.handleFormSubmission.bind(this));
    this.contactsContainer.on("click", ".delete", this.handleDeleteClick.bind(this));
    this.contactsContainer.on("click", ".edit", this.handleEditClick.bind(this));
    $("#search-bar input").on("input", this.handleSearchInput.bind(this));
  },

  async handleFormSubmission(e) {
    e.preventDefault();
    this.hideErrors();

    let data = this.getFormData(this.createContactForm[0]);

    if (!this.createContactForm[0].checkValidity()) {
      this.validateFormData();
      return;
    }

    try {
      if (this.createContactForm.hasClass("create")) {
        await this.createContact(data);
      } else {
        await this.editContact(this.contactInfo.id, data);
      }

      await this.updateContacts();
      this.updateExistingTags();
      this.displayContacts(this.contacts);
      this.showContacts();
    } catch (error) {
      alert(`${error.status}: ${error.statusText}`);
    }
  },
  async handleEditClick(e) {
    let contact = $(e.target).parent(".contact-container");
    try {
      this.contactInfo = await this.getContactInfo(contact.data("id"));
    } catch (error) {
      alert(`${error.status}: ${error.statusText}`);
      return;
    }

    this.showForm();
    this.createContactForm.removeClass("create");
    this.createContactForm.addClass("edit");
    this.fillFormFields(this.createContactForm, this.contactInfo);
  },
  handleAddClick() {
    this.showForm();
    this.createContactForm.removeClass("edit");
    this.createContactForm.addClass("create");
  },
  handleCancel(e) {
    e.preventDefault();
    this.hideErrors();
    this.showContacts();
    this.createContactForm[0].reset();
  },
  handleSearchInput(e) {
    let value = $(e.currentTarget).val().toLowerCase();
    let matches = this.contacts.filter(({full_name}) => full_name.toLowerCase().startsWith(value));
    if (matches.length === 0) {
      this.noSearchResults.find("h3").text(`There are no contacts starting with ${value}.`);
      this.noSearchResults.slideDown();
      this.contactsContainer.slideUp();
      return;
    }

    this.displayContacts(matches);
  },
  async handleDeleteClick(e) {
    let contact = $(e.target).parent(".contact-container");
    let confirmation = confirm("Do you want to delete the contact?");
    if (!confirmation) return;

    try {
      await this.deleteContact(contact.data("id"));
      await this.updateContacts();
      this.displayContacts(this.contacts);
    } catch(error) {
      alert(`${error.status}: ${error.statusText}`);
    }

  },
  getAllContacts() {
    return $.ajax("/api/contacts", {
      method: "GET",
      dataType: "json"
    }).done(res => res);
  },
  getContactInfo(id) {
    return $.ajax(`/api/contacts/${id}`, {
      method: "GET",
      dataType: "json"
    });
  },
  createContact(contactInfo) {
    return $.ajax("/api/contacts/", {
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(contactInfo),
      dataType: "json"
    }).done(res => res);
  },
  editContact(id, contactInfo) {
    return $.ajax(`/api/contacts/${id}`, {
      method: "PUT",
      contentType: "application/json",
      data: JSON.stringify(contactInfo)
    });
  },
  deleteContact(id) {
    return $.ajax(`/api/contacts/${id}`, {
      method: "DELETE"
    }).done(res => res)
      .fail(err => err);
  },

  displayContacts(contacts) {
    if (this.contacts.length === 0) return;

    let contactsHTML = this.allContactsTemp({ contacts });
    this.contactsContainer.empty();
    this.contactsContainer.append(contactsHTML);
    this.showContacts();
  },
  updateExistingTags() {
    let tags = this.contacts.map(({tags}) => tags?.split(","))
                            .flat()
                            .filter(tag => tag);
    
    this.tags = [...new Set(tags)];
  },
  addTagsToForm() {
    let html = this.tagsTemp({ tags: this.tags });
    let tagsContainer = this.createContactForm.find("p").last();

    tagsContainer.empty();
    tagsContainer.append(html);
  },
  hideErrors() {
    let $errorMsgs = $("span.error");
    let $markedLabels = $("label.error");
    let $invalidInputFields = $("input.invalid");

    $errorMsgs.each((_, span) => span.remove());
    $markedLabels.each((_, label) => $(label).removeClass("error"));
    $invalidInputFields.each((_, input) => $(input).removeClass("invalid"));
  },

  validateInput(input) {
    let validity = input.validity;
    let inputName = $(`label[for=${input.name}]`).text();
    let errorMsg = "";
  
    if (validity.valueMissing) {
      errorMsg = `${inputName} is required.`;
    } else if (validity.patternMismatch) {
      errorMsg = `Please enter a valid ${inputName.toLowerCase()}.`;
    } else if (validity.tooShort) {
      errorMsg = `${inputName} must be at least ${input.minLength} characters long.`;
    }
  
    return errorMsg;
  },

  fillFormFields(form, values) {
    Object.keys(values).forEach(fieldName => {
      if (fieldName === "tags") return;
      form.find(`input[name='${fieldName}']`).val(values[fieldName]);
    });

    if (values.tags.length > 1) {
      values.tags.split(",").forEach(tag => {
        form.find(`input[name='${tag}']`).prop("checked", true);
      });
    }
  },
  async updateContacts() {
    try {
      this.contacts = await this.getAllContacts();
    } catch (error) {
      alert(`${error.status}: ${error.statusText}`);
    }
  },
  getFormData(form) {
    let $inputs = $(form).find("input");
    let data = {};
    let tags = [];

    $inputs.each((_, input) => {
      let $input = $(input);
      if ($input.prop("type") === "checkbox") {
        if ($input.prop("checked")) tags.push($input.attr("name"));
      } else {
        data[$input.attr("name")] = $input.val();
      }
    });

    data.tags = data.tags ? data.tags.concat(",", tags.join(",")) : tags.join(",");

    return data;
  },
  validateFormData() {
    let $inputs = this.createContactForm.find("input");

    $inputs.each((_, input) => {
      let error = this.validateInput(input);
      if (!error) return;
      let $input = $(input);
      $input.addClass("invalid");
      $input.prev().addClass("error");
      $input.parent("p").children("span").remove();
      $input.after(`<span class='error'>${error}</span>`);
    });
  },
  compileTemplates() {
    let $templates = $("script[type='text/x-handlebars-template']");
    $templates.each((_ , temp) => {
      this[$(temp).attr("id")] = Handlebars.compile($(temp).html());
    });

    let $partials = $("script[data-type='partial']");
    $partials.each((_, partial) => {
      Handlebars.registerPartial($(partial).attr("id"), $(partial).html())
    });
  }
}

$(_ => App.init());