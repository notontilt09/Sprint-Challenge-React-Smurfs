## 1.  Explain the differences between `client-side routing` and `server-side routing`.
Client side routing is routing that happens without sending/receiving data from an external server.  Other then the initial page load, in which all of the data is received by the browser, it is much faster then server side routing.  Server side routing is the exact opposite.  For each new page rendered, the browser must send a GET request to an external server and then handle the data it receives.  It is noticeably slower then client side routing, but does provide the benefit of being more accessibly to seach engine crawlers via SEO.

## 2.  What does HTTP stand for?
Hyper Text Transfer Protocol.  It's the protocol via which messages are sent around the web.

## 3.  What does CRUD stand for?
Create, Read, Update, Delete.  They are the operations that a user/admin can perform on a database.

## 4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
HTTP method / CRUD operation:
	GET / READ
	POST / CREATE
	PUT / UPDATE
	DELTE / DELETE

## 5.  Mention three tools we can use to make AJAX requests
A few tools we can use to make AJAX requests are:  Javascript's 'fetch' method, the 'axios' library for performing promise based HTTP requests, or another library such as 'jquery'.