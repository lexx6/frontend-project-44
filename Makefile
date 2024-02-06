install:
	npm ci

games:
	node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

calc:
	node src/bin/brain-calc.js

even:
	node src/bin/brain-even.js

gcd:
	node src/bin/brain-gcd.js

prime:
	node src/bin/brain-prime.js

progression:
	node src/bin/brain-progression.js