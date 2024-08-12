const readline = require("readline-sync");

async function getPost(userId, postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}`);
    const post = await response.json();
    if (post.length > 0) {
      console.log("Post response:");
      console.log(post[0]);
    } else {
      console.log(`Post with id ${postId} for user ${userId} not found.`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getAllPostsByUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    if (posts.length > 0) {
      console.log(`All posts for user ${userId} response:`);
      posts.forEach(post => console.log(post));
    } else {
      console.log(`No posts found for user ${userId}.`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getUserPostInfo() {
  const userId = readline.question("Input user ID: ");
  const postId = readline.question("Input post ID: ");

  if (userId && postId) {
    await getPost(userId, postId);
    await getAllPostsByUser(userId);
  } else {
    console.log("Please provide both user ID and post ID.");
  }
}

getUserPostInfo();
