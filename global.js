safari.application.addEventListener('beforeSearch', handleBeforeSearch, false)

function handleBeforeSearch(e) {
	e.preventDefault();
	e.target.url = "https://haruhi.socket.so:4567/search?str=" + encodeURIComponent(e.query).replace(/%20/g,'+')
}