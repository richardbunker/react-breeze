# ⚛️ React Breeze ⚛️

A Laravel Breeze & [Inertia.js](https://inertiajs.com/) implementation (with Authentication) for those who enjoy working with [React](https://reactjs.org/) as the view layer.

## Setup

#### Step 1

Clone the repository.

```
$ git clone https://github.com/richardbunker/react-breeze.git
```

#### Step 2

Change to the repo's directory.

```
$ cd react-breeze
```

#### Step 3

Rename .env.example to .env. Add DB details.


#### Step 4

Install Composer dependencies.

```
$ composer install
```

#### Step 5

Generate an application key.

```
$ php artisan key:generate
```

#### Step 6

Install NPM dependencies.

```
$ npm install && npm run dev
```

#### Step 7

Migrate database.

```
$ php artisan migrate
```
