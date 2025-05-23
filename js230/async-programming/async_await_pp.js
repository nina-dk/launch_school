//3

async function fetchResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to load resource");
  } finally {
    console.log("Resource fetch attempt made");
  }
}

// Example usage:
// fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
// On error, logs "Failed to load resource", then "Resource fetch attempt made"

//4
async function fetchUserProfile(userId) {
  try {
    const userProfile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then(res => {  
      if (!res.ok) {
        const error = new Error(res.statusText);
        error.status = res.status;
        throw error;
      }

      return res.json();
    });

    console.log("User Profile", userProfile);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }

  try {
    const userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    ).then(res => res.json());

    console.log("User Posts", userPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    const userTodos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    ).then(res => res.json());

    console.log("User Todos", userTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// Example usage:
fetchUserProfile('foo');
// Logs user profile, posts, and todos. Catches and logs errors at each step if they occur.