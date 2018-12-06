| Method | Path | Type | Data In | Data Out   | Description                            |
|--------|------|------|---------|------------|----------------------------------------|
| GET    | /    | HTML | -       | index.html | Returns index.html for display to page |
| GET    | /api/posts | Data  | -   | [Posts] | Returns json containing several posts for display on the front page with comments joined |
| GET    | /api/posts/:postId | Data | :postId | Post Object | Returns json containing a post, joined with its associated comments |
| GET    | /api/users/:userId    | Data  | :userId  | User Object | Returns the user's data to the page (Posts, Username, potentially up/downvoted posts, posted comments) |
| POST   | /api/users/  | Data | User Object | User: id, un, token | Posts new user to db |
| GET   | /api/users/current | User object with token header | User: id, un, token | Send user info w/ token to authorize, success means getting user: id, un, token back |
| POST | /api/users/login | User Object | User: id, un, token | Login using username and password | 
| POST   | /api/posts | Data  | Post Object  | -    | Sends a new post to the DB |
| PUT    | /api/posts/:postId | Data | :postId, Updated Post Obj | - | Sends an updated post to replace the one in the DB with the given id |
| DELETE | /api/posts/:postId | Data | :postId | - | Deletes the post in the DB with the given id. |
| POST   | /api/posts/:postId/comments  | Data | :postId, Comment Object | - | Sends a comment to the DB which is associated with the post with the given id |
| DELETE | /api/comments/:commentId | Data | :commentId | - | Deletes the comment in the DB with the given id |
| POST   | /api/posts/:postId/votes | Data  | :postId, Vote Object | - | Adds a new vote to the DB, associated with its post and its user. |
| PUT | /api/votes/:voteId | Data | :voteId, Vote Object | - | Changes a vote in the DB. |
