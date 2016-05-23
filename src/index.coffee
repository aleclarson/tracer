
module.exports = (message, options) ->

  if arguments.length > 0
    message = ">>> " + message + " <<<"

  if arguments.length > 1
    skip = (options.skip or 0) + 2
  else skip = 2

  error = null

  self = -> [ message, error ]

  self.trace = ->
    error = Error()
    error.skip = skip
    return

  self.trace()

  return self
