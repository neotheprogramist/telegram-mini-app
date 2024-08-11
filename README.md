First we need to set up turso db. On windows you need wsl.

first install turso.

```wsl
curl -sSfL https://get.tur.so/install.sh | bash

```linux
curl -sSfL https://get.tur.so/install.sh | bash

```mac
brew install tursodatabase/tap/turso


then authenticate with turso.

```wsl
turso auth signup --headless

turso auth login --headless

or with mac and linux

turso auth signup

turso auth login if you get an error try 

turso auth login --headless

here is link to turso docs if needed:
https://docs.turso.tech/cli/introduction

if you authenticated you can now run the following command to create a database.


turso db create <db-name>


then run 
turso db show <db-name>

its going to give you a url that you can use to connect to the database.

create .env file in the root of the project and add the following line.
DB_URL=<url-from-turso-db-show>

then run the following command to create db token.
turso db tokens create <db-name>

then add the token to the .env file.
DB_TOKEN=<token>

then run npm install to install all the dependencies.

then you can delete migrations folder and run the following command to create a new migration.

npx drizzle-kit generate

then run the following command to run the migration.

npx drizzle-kit push

to check if table was created correctly run the following command.

npx drizzle-kit studio

it gives you a link to the studio where you can see the tables.

then you can run the following command to start the server.

to run it locally run the following command.

npm run dev

the best way to test it is to use ngrok to expose the server to the internet
and create new bot on telegram and provide it with a url from ngrok.
