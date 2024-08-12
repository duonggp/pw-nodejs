const readline = require("readline-sync");

function getPost(userId, postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}`)
      .then(response => response.json())
      .then(post => {
        if (post.length > 0) {
          console.log("Post response:");
          console.log(post[0]);
          resolve();
        } else {
          console.log(`Post with id ${postId} for user ${userId} not found.`);
          resolve();
        }
      })
      .catch(error => {
        console.error('Error: ', error);
        reject(error);
      });
  });
}

function getAllPostsByUser(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(posts => {
        if (posts.length > 0) {
          console.log(`All posts for user ${userId} response:`);
          posts.forEach(post => console.log(post));
        } else {
          console.log(`No posts found for user ${userId}.`);
        }
        resolve();
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error);
      });
  });
}

function getUserPostInfo() {
  const userId = readline.question("Input user ID: ");
  const postId = readline.question("Input post ID: ");

  if (userId && postId) {
    getPost(userId, postId)
      .then(() => getAllPostsByUser(userId))
      .catch(error => console.error('Error:', error));
  } else {
    console.log("Please provide both user ID and post ID.");
  }
}

getUserPostInfo();
