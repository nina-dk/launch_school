/*
Input: id of the parent node
Output: array of 2 numbers (direct child nodes, indirect child nodes)
Rules:
  -direct child nodes of a node are the ones returned by `parent.childNodes`
  -indirect child nodes are the child nodes (and their child nodes, etc)
   of the child nodes of a node
Algorithm:
  -declare a `directIndirectChildren` variable and initialize it to `[0, 0]`
  -get the parent node from the given id
  -get its direct child nodes and increment the first element in `directIndirectChildren`
   by that number
  -for each of its child nodes
    -get its `id`
    -if it doesn't have one, continue to the next iteration
    -pass the `id` to the function and invoke it again
    -increment the 2nd element in `directIndirectChildren` by the
      sum of the elements in the returned array
  -return `directIndirectChildren`
*/

function childNodes(id) {
  let parent = document.getElementById(id);
  let directChildren = parent.childNodes;
  let indirectChildrenCount = 0;

  for (let idx = 0; idx < directChildren.length; idx += 1) {
    let childId = Number(directChildren[idx].id);
    if (Number.isNaN(childId)) continue;
    indirectChildrenCount += childNodes(childId).reduce((sum, children) => sum + children, 0);
  }

  return [directChildren.length, indirectChildrenCount];
}

// sample output
console.log(childNodes(1)); // [9, 12]
console.log(childNodes(4)); // [3, 1]
console.log(childNodes(9)); // [1, 1]