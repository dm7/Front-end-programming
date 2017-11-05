GENERATED_FILES = \
	main-bundle.js

all: $(GENERATED_FILES)

.PHONY: clean all

clean:
	rm -f -- $(GENERATED_FILES)

# Advantage is, Unified module definition(umd)bundle can be loaded using:
# 1) script tag
# 2) as AMD definition
# 3) CommonJS(require syntax)

# Depends on having esperanto command installed, with the command:
# npm install esperanto -g
main-bundle.js: main.js
	esperanto --type umd --name main --input $^ --output $@ --bundle
