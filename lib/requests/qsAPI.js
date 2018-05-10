const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `https://qs-be-express.herokuapp.com`
  } else {
    return `YOUR URL HERE`
  }

}

module.exports = {
  baseURL
}
