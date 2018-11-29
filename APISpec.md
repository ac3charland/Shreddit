| Method | Path | Type | Data In | Data Out   | Description                            |
|--------|------|------|---------|------------|----------------------------------------|
| GET    | /    | HTML | -       | index.html | Returns index.html for display to page |
| GET    | /api/posts | Data  | -   | [Posts] | Returns json containing several posts for display on the front page with comments joined |
| GET    | /api/users/:id    | Data  | :id  | User Object | Returns the user's data to the page (Posts, Username, potentially up/downvoted posts, posted comments) |
| POST   | /api/posts | Data  | Post Object  | -    | Sends a new post to the DB |
| PUT    | /api/posts/:id | Data | :id, Updated Post Obj | - | Sends an updated post to replace the one in the DB with the given id |
| DELETE | /api/posts/:id | Data | :id | - | Deletes the post in the DB with the given id. |
| POST   | /api/posts/:id  | Data | :id, Comment Object | - | Sends a comment to the DB which is associated with the post with the given id |
| DELETE | /api/comments/:id | Data | :id | - | Deletes the comment in the DB with the given id |
| POST   | /api/users/  | Data | User Object | - | Creates a new user account & sends it to the DB |