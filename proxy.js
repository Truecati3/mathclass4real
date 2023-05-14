const form = document.getElementById('url-form');
const response = document.getElementById('response');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const targetUrl = form.elements.url.value;
  
  if (!targetUrl) {
    response.innerText = 'Please enter a URL';
    return;
  }
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://your-proxy-server.com/proxy/${encodeURIComponent(targetUrl)}`);
  xhr.send();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        response.innerHTML = xhr.responseText;
      } else {
        response.innerText = `Error: ${xhr.status} ${xhr.statusText}`;
      }
    }
  };
});
