install:
	npm ci

games:
	node src/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

calc:
	node src/brain-calc.js

even:
	node src/brain-even.js

gcd:
	node src/brain-gcd.js

prime:
	node src/brain-prime.js

progression:
	node src/brain-progression.js