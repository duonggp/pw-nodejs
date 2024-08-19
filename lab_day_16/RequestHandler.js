const Post = require("./Post");

class RequestHandler {
  constructor(url, slug) {
    this.url = `${url}${slug}`;
  }

  async getPostByUserIdAndPostId(userId, postId) {
    const allPostsByUserId = await this.getAllPostsUserId(userId);
    return allPostsByUserId.find((post) => post._id === postId);
  }

  async getAllPostsUserId(userId) {
    const allPosts = await this._getAllPosts();
    console.log(allPosts);
    return allPosts.filter((post) => post._userId === userId);
  }

  async _getAllPosts() {
    const response = await fetch(this.url);
    const posts = await response.json();
    return posts.map(function (postContent) {
      const { userId, id, title, body } = postContent;
      return new Post(userId, id, title, body);
    });
  }
}

module.exports = RequestHandler;
