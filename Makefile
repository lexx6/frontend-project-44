install:
	npm ci

games:
	node src/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

calc:
	node src/calc.js

even:
	node src/even.js

gcd:
	node src/gcd.js

prime:
	node src/prime.js

progression:
	node src/progression.js