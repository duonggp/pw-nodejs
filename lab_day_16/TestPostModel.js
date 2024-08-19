const RequestHandler = require("./RequestHandler");

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

lab11();

async function lab11(){
    const userId = 1;
    const postId = 1;

    const requestHandler = new RequestHandler(BASE_URL, SLUG);

    const allPostsByUserId = await requestHandler.getAllPostsUserId(userId);
    console.log(`All posts for user ${userId}`);
    console.log(allPostsByUserId);

    const post = await requestHandler.getPostByUserIdAndPostId(userId, postId);
    console.log(`PostId ${postId}'s content:`);
    console.log(post);
}
