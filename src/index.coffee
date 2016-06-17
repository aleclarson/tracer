
module.exports = (message, options) ->

  if typeof message is "string"
    message = ">>> " + message + " <<<"
  else message = "- - - - - - - -"

  if arguments.length > 1
    skip = (options.skip or 0) + 1
  else skip = 1

  error = Error()
  error.skip = skip

  self = -> [ message, error ]

  self.trace = ->
    error = Error()
    error.skip = skip
    return

  return self
