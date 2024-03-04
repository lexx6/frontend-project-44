install:
	npm ci

games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

calc:
	node bin/calc.js

even:
	node bin/even.js

gcd:
	node bin/gcd.js

prime:
	node bin/prime.js

progression:
	node bin/progression.js