
# tracer v1.0.0 ![experimental](https://img.shields.io/badge/stability-experimental-EC5315.svg?style=flat)

```coffee
Tracer = require "tracer"

# This creates an 'Error' for later usage.
tracer = Tracer "A label for this stack trace"

tracer() # => [ "A label for this stack trace", error ]

# Overwrite the initial 'error' with a new 'Error'.
tracer.trace()

tracer() # => [ "A label for this stack trace", newestError ]
```
