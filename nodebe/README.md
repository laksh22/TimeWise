# rss-app
App provides rss feed from various sources<br />
uses Mongo, Express, Mongoose, NodeJS
RSS 2.0 Requirements https://validator.w3.org/feed/docs/rss2.html

## To set up
Ensure Node is installed, port 5035 is not used and there is internet connection <br />
`npm install`<br />

## To run server locally
`npm run start:dev`

## API operations
GET {{HOST}}/api/feed' to get latest RSS feed<br />
GET {{HOST}}/api/feed?save=true' for storing latest feed<br />
GET {{HOST}}/xml to get RSS XML<br />
POST {{HOST}}/api//posts'<br />
GET {{HOST}}/api/posts' to get all saved rss post<br />
GET {{HOST}}/api/posts/:postId' to get specific saved RSS post<br />
PATCH {{HOST}}/api/posts/:postId' to update specific saved RSS post<br />


## TO-DO
Deployment Pipeline<br />
Test Pipeline<br />
<br />



Further up:<br />
Set up Mongo server<br />
Setup local and dev config/ env file<br />
Deployment of server and frontend (Docker)<br />

title, description, src (genome, nature), link, author, media link, pub date, crawl date, full article, src type(rss, email, crawl, api), tags, ai-summary, likes, reading-time
