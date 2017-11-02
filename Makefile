.SILENT:

help:
	echo
	echo "Express FireStarter"

with_arg:
	echo "Test: " $(argument)

run:
	docker-compose down && docker-compose up -d
	concurrently --kill-others --prefix "[{name}]" --names "DEV,WEB,WORKER" -c "yellow,magenta" "yarn dev" "nodemon bin/www" "nodemon worker.js"
