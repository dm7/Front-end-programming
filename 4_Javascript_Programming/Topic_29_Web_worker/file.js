/*
	Web Workers are a mechanism by which a script operation can be 
	made to run in a background thread separate from the main execution 
	thread of a web application. The advantage of this is that laborious 
	processing can be performed in a separate thread, allowing the main 
	(usually the UI) thread to run without being blocked/slowed down.
	
	Web Workers concepts and usage
	==============================
	A worker is an object created using a constructor (e.g. Worker()) 
	that runs a named JavaScript file — this file contains the code 
	that will run in the worker thread; workers run in another global 
	context that is different from the current window. This context 
	is represented by a DedicatedWorkerGlobalScope object in the case 
	of dedicated workers (standard workers that are utilized by a 
	single script; shared workers use SharedWorkerGlobalScope).

	You can run whatever code you like inside the worker thread, with 
	some exceptions. For example, you can't directly manipulate the 
	DOM from inside a worker, or use some default methods and properties 
	of the window object. But you can use a large number of items available 
	under window, including WebSockets, and data storage mechanisms like 
	IndexedDB and the Firefox OS-only Data Store API.  See Functions and 
	classes available to workers for more details.
	
	Data is sent between workers and the main thread via a system of 
	messages — both sides send their messages using the postMessage() 
	method, and respond to messages via the onmessage event handler 
	(the message is contained within the Message event's data attribute.) 
	The data is copied rather than shared.

	Workers may in turn spawn new workers, as long as those workers are 
	hosted within the same origin as the parent page.  In addition, 
	workers may use XMLHttpRequest for network I/O, with the exception 
	that the responseXML and channel attributes on XMLHttpRequest always 
	return null.
	
	
*/
