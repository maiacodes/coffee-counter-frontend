export default function(route) {
    let api = `https://coffees-api.maia.codes/${route}`
    if (window.location.host==="localhost:8080") {
        api = `http://localhost:1323/${route}`
    }
    return api
}
