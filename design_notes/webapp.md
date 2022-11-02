# Web Application Notes

## Back-end API

### Variables Explanation

- Described here is the explanation for each variable used when accessing the API.
- ID (int): The unique ID assigned to each posts when it is registered into the database.
- Date (string): The string representing date with format (YYYY-MM-DD HH:MM) when the post was last updated.
- Title (string): The title of the post.
- Content (string): Currently undecided. There are 2 methods:
  - One is a string of the file contents and then we can convert them to HTML format using third party stuff in front-end (matter if Markdown).
  - Second is HTML content directly and we convert it in back-end. This would be preferred as this will make the site load faster.

### `/category/mobiles`, `/category/pcs-laptops`, `/category/enterprises`

- This is API to retrieve lists of posts according to category.
- The output should contain information about ID, date, and title of the posts.
- Expected output format:

```JSON
[
  {
    "id": 1,
    "date": "2000-01-01",
    "title": "Something",
  },
]
```

### `/posts/{id}`

- This is API to retrive specific post using its ID.
- Output should contain ID, date, title along with the actual data of the post to render the webpage.
- Expected output format:

```JSON
[
  {
    "id": 1,
    "date": "2000-01-01",
    "title": "Something",
    "content": "Post Content Here",
  },
]
```
