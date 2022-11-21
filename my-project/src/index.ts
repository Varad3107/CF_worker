const Singapore = 'SG'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	
  const country = request.cf.country;
  if(country == Singapore){
	  let html_content = '';
	  let html_style = 'body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}';

	  html_content += '<p> This is your ' + request.headers.get('CF-Connecting-IP') + '</p>';
	  html_content += '<p> and you are accessing this site from ' + request.cf.country +  '|' + request.cf.asn + '.' + '</p>' ;
	  

	  let html = `<!DOCTYPE html>
	<head>
	  <title> Geolocation</title>
	  <style> ${html_style} </style>
	</head>
	<body>
	  ${html_content}
	</body>`;

	  return new Response(html, {
		headers: {
		  'content-type': 'text/html;charset=UTF-8',
		},
	  });
  }
  else {
	  return Response.redirect('https://1.1.1.1/');
  }
}
