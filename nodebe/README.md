# Hello
- This is the backend Node API the client consumes

## To run locally
- ```npm install```
-``` npm start ```


## To deploy
- First you would need to setup Heroku and authenticate yourself on your development environment
- If you would like to setup your own Mongo with Heroku and mLabs, check out [mLabs add-ons](https://elements.heroku.com/addons/mongolab)
- ```heroku create timewiseapp-89757```
- ```git push heroku master```

## API endpoints
- GET, POST to  {{HOST}}/api/task
- PATCH, DELETE to {{HOST}}/api/task/:id
- GET {{HOST}}/api/class/
- GET {{HOST}}/api/seed
- GET {{HOST}}/api/taskquery/?email=example@email.com