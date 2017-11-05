GENERATED_FILES = \
	main-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Unified module definition(umd)bundle can be loaded using:
# 1) script tag
# 2) as AMD definition
# 3) CommonJS(require syntax)
# Advanage is, Rollup will add required bundles based on real code dependencies instead of import syntax.

# Depends on having rollup command installed, with the command:
# npm install rollup -g
main-bundle.js: main.js
	rollup --format umd --name main --input $^ --output $@
