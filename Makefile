up:
	docker-compose --env-file ./.dev.env up

up-prod:
	docker-compose --env-file ./.prod.env -f docker-compose.yml -f docker-compose.prod.yml up --build -d

down:
	docker-compose down
