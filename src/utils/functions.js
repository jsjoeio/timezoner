export function getUrlParameter(name) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
    var results = regex.exec(window.location.search)
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '))
  }
}

export function validateURLParams(params) {
  // It expects an array of URL params you want to check.
  // Then it checks all to make sure they're all valid
  return params.every(element => getUrlParameter(element))
}