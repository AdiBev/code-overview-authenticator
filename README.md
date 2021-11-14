# code-overview-authenticator

## Instructions to run this repo locally using Docker

### Development environment

Create `.dev.env` file and create two variables named `CLIENT_SECRET` & `CLIENT_ID`. 

You will need to get these values from [**Github**](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

If you are on Windows and don't have **Make** installed use below command to run. This will pull `docker-compose.yml` file and load `.dev.env` file variables.

`docker-compose --env-file ./.dev.env up`

If you have **Make** installed command below. This is running exact same command mentioned above

`make up` 


### Production environment

Create `.prod.env` file and create two variables named `CLIENT_SECRET` & `CLIENT_ID`.

You will need to get these values from [**Github**](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

If you are on Windows and don't have **Make** installed use below command to run. This will pull `docker-compose.yml` & `docker-compose.prod.yml` files and load `.prod.env` file variables.

In prod env we are going to reuse `docker-compose.yml` commands and replace some of the commands mentioned in `docker-compose.prod.yml`.

`docker-compose --env-file ./.prod.env -f docker-compose.yml -f docker-compose.prod.yml up --build -d`

If you have **Make** installed command below. This is running exact same command mentioned above

`make up-prod`

#### Running the repo locally without Docker 

Create `.prod.env` file and create two variables named `CLIENT_SECRET` & `CLIENT_ID`.

You will need to get these values from [**Github**](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

To run in `dev` env run this command `npm run start`

To get JS files run this command `npm run build`
