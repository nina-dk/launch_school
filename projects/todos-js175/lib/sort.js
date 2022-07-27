const sortByTitle = (a, b) => {
  let titleA = a.getTitle().toLowerCase();
  let titleB = b.getTitle().toLowerCase();

  if (titleA > titleB) return 1;
  else if (titleA < titleB) return -1;
  else return 0;
};

// return the list of todo lists sorted by completion status and title
// or the list of todos sorted in the same way
const sortByStatusAndTitle = (collection) => {
  let done = collection.filter(item => item.isDone());
  let undone = collection.filter(item => !item.isDone());

  done.sort(sortByTitle);
  undone.sort(sortByTitle);

  return undone.concat(done);
};

module.exports.sortByStatusAndTitle = sortByStatusAndTitle;