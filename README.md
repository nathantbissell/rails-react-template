# rails-react-api-template

A template for building full-stack apps with React, Ruby on Rails and Webpacker in a single directory. Features include
devise authentication, cookies, sessions and postgresql.

## Dependencies

-  rails
-  devise
-  ReactJs
-  Webpacker
-  postgres
-  active-model-serializer
-  simple_token_authentication
-  rack-cors

## Installation

### Download Template:
1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory (`unzip ~/Downloads/rails-react-template-master.zip`)
1.  Move into a new project directory and `git init`.

### Customize Template:
1.  Rename your app module in `config/application.rb` (change
    `RailsReactTemplate`).
1.  Rename your project database in `config/database.yml` (change
    `'rails-react-template'`).

### Setup Environment:
1.  Run `bundle install` and `yarn install` to install packages and gems.
1.  `git add` and `git commit` your changes.
1.  Create a `.env` with `touch .env` to set up environment variables.
1.  Generate new `development` and `test` secrets (`bundle exec rails secret`).
1.  Store them in `.env` with keys `SECRET_KEY_BASE_<DEVELOPMENT|TEST>`
    respectively.
1.  In order to make requests to your deployed API, you will need to set
    `SECRET_KEY_BASE` in the environment of the production API (for example, using `heroku config:set` or the Heroku dashboard).
1.  In order to make requests from your deployed client application, you will
    need to set `CLIENT_ORIGIN` in the environment of the production API to your heroku url.
    See more about deploying to heroku [rails-heroku-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide)

### Setup your database:
    - bin/rails db:drop (if it already exists)
    - bin/rails db:create
    - bin/rails db:migrate

### Run your server
1. Run API server with `bin/rails server`.
2. Run client server with `bin/webpack-dev-server`.

## Structure

- All react code and components will be developed in app/javascript/pack/src directory
- User authentication is built-in with devise.


## API Documentaion


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password`     | `users#changepw`  |
| DELETE | `/sign-out`            | `users#signout`   |

#### POST /sign-up

Request data:

```md
 {
    "credentials": {
      "email": "clubberlang@pityafool.com",
      "password": "apollowho?!",
      "password_confirmation": "apollowho?!"
    }
 }
```
Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
    "id": 172231,
    "email": "clubberlang@pityafool.com",
    "created_at": "2019-02-25T14:11:54.642Z",
    "updated_at": "2019-02-25T14:11:54.642Z"
}
```

#### POST /sign-in

Request data:

```md
{
   "credentials": {
     "email": "clubberlang@pityafool.com",
     "password": "apollowho?!"
   }
}
```


Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "id": 172231,
    "email": "clubberlang@pityafool.com",
    "created_at": "2019-02-25T14:11:54.642Z",
    "updated_at": "2019-02-25T14:11:54.642Z"
}
```

#### PATCH /change-password

Request data:

```md
 {
    "passwords": {
      "old": "apollowho?!",
      "new": "thereisnotomorrow!"
    }
 }
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out

Response:

```md
HTTP/1.1 204 No Content
```

## Additional Resources
- [rails-heroku-setup-guide](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide)
- http://guides.rubyonrails.org/api_app.html
- https://blog.codeship.com/building-a-json-api-with-rails-5/

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
