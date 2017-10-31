/*
	HTML DOM Events

	HTML DOM events allow JavaScript to register different event handlers 
	on elements in an HTML document.

	Events are normally used in combination with functions, and the function 
	will not be executed before the event occurs (such as when a user clicks a button).

	Tip: The event model was standardized by the W3C in DOM Level 2.
	

	HTML DOM Events

	DOM: Indicates in which DOM Level the property was introduced.
*/

/*
	Mouse Events
	Event 			Description 																							DOM
	onclick 		The event occurs when the user clicks on an element 													2
	oncontextmenu 	The event occurs when the user right-clicks on an element to open a context menu 						3
	ondblclick 		The event occurs when the user double-clicks on an element 												2
	onmousedown 	The event occurs when the user presses a mouse button over an element 									2
	onmouseenter 	The event occurs when the pointer is moved onto an element 												2
	onmouseleave 	The event occurs when the pointer is moved out of an element 											2
	onmousemove 	The event occurs when the pointer is moving while it is over an element 								2
	onmouseover 	The event occurs when the pointer is moved onto an element, or onto one of its children 				2
	onmouseout 		The event occurs when a user moves the mouse pointer out of an element, or out of one of its children 	2
	onmouseup 		The event occurs when a user releases a mouse button over an element 									2

*/

/*
	Keyboard Events
	Event 		Description 										DOM
	onkeydown 	The event occurs when the user is pressing a key 	2
	onkeypress 	The event occurs when the user presses a key 		2
	onkeyup 	The event occurs when the user releases a key 		2
*/

/*
	Frame/Object Events
	Event 			Description 																DOM
	onabort 		The event occurs when the loading of a resource has been aborted 			2
	onbeforeunload 	The event occurs before the document is about to be unloaded 				2
	onerror 		The event occurs when an error occurs while loading an external file 		2
	onhashchange 	The event occurs when there has been changes to the anchor part of a URL 	3
	onload 			The event occurs when an object has loaded 									2
	onpageshow 		The event occurs when the user navigates to a webpage 						3
	onpagehide 		The event occurs when the user navigates away from a webpage 				3
	onresize 		The event occurs when the document view is resized 							2
	onscroll 		The event occurs when an element's scrollbar is being scrolled 				2
	onunload 		The event occurs once a page has unloaded (for <body>) 						2
*/

/*
	Form Events
	Event 		Description 																		DOM
	onblur 		The event occurs when an element loses focus 										2
	onchange 	The event occurs when the content of a form element, the selection, or the 
					checked state have changed (for <input>, <keygen>, <select>, and <textarea>) 	2
	onfocus 	The event occurs when an element gets focus 										2
	onfocusin 	The event occurs when an element is about to get focus 								2
	onfocusout 	The event occurs when an element is about to lose focus 							2
	oninput 	The event occurs when an element gets user input 									3
	oninvalid 	The event occurs when an element is invalid 										3
	onreset 	The event occurs when a form is reset 												2
	onsearch 	The event occurs when the user writes something in a search 
					field (for <input="search">) 													3
	onselect 	The event occurs after the user selects some text (for <input> and <textarea>) 		2
	onsubmit 	The event occurs when a form is submitted 											2
*/

/*
	Drag Events
	Event 			Description 																		DOM
	ondrag 			The event occurs when an element is being dragged 									3
	ondragend 		The event occurs when the user has finished dragging an element 					3
	ondragenter 	The event occurs when the dragged element enters the drop target 					3
	ondragleave 	The event occurs when the dragged element leaves the drop target 					3
	ondragover 		The event occurs when the dragged element is over the drop target 					3
	ondragstart 	The event occurs when the user starts to drag an element 							3
	ondrop 			The event occurs when the dragged element is dropped on the drop target 			3
*/

/*
	Clipboard Events
	Event 		Description 	
	oncopy 		The event occurs when the user copies the content of an element 	 
	oncut 		The event occurs when the user cuts the content of an element 	 
	onpaste 	The event occurs when the user pastes some content in an element
*/

/*
	Print Events
	Event 			Description 															DOM
	onafterprint 	The event occurs when a page has started printing, or if the print 
						dialogue box has been closed 										3
	onbeforeprint 	The event occurs when a page is about to be printed 					3
*/

/*
	Media Events:
	Events triggered by medias like videos, images and audio (applies to all HTML 
	elements, but is most common in media elements, like <audio>, <embed>, <img>, <object>, and <video>).


	Event 				Description 															DOM
	onabort 			The event occurs when the loading of a media is aborted 				3
	oncanplay 			The event occurs when the browser can start playing the 
							media (when it has buffered enough to begin) 						3
	oncanplaythrough 	The event occurs when the browser can play through the media 
							without stopping for buffering 										3
	ondurationchange 	The event occurs when the duration of the media is changed 				3
	onemptied 			The event occurs when something bad happens and the media file 
							is suddenly unavailable (like unexpectedly disconnects) 			3
	onended 			The event occurs when the media has reach the end (useful for 
							messages like "thanks for listening") 								3
	onerror 			The event occurs when an error occurred during the loading 
							of a media file 													3
	onloadeddata 		The event occurs when media data is loaded 								3
	onloadedmetadata 	The event occurs when meta data (like dimensions and duration) 
							are loaded 															3
	onloadstart 		The event occurs when the browser starts looking for the 
							specified media 													3
	onpause 			The event occurs when the media is paused either by the user 
							or programmatically 												3
	onplay 				The event occurs when the media has been started or is no 
							longer paused 														3
	onplaying 			The event occurs when the media is playing after having been 
							paused or stopped for buffering 									3
	onprogress 			The event occurs when the browser is in the process of getting 
							the media data (downloading the media) 								3
	onratechange 		The event occurs when the playing speed of the media is changed 		3
	onseeked 			The event occurs when the user is finished moving/skipping to a 
							new position in the media 											3
	onseeking 			The event occurs when the user starts moving/skipping to a new 
							position in the media 												3
	onstalled 			The event occurs when the browser is trying to get media data, 
							but data is not available 											3	
	onsuspend 			The event occurs when the browser is intentionally not getting 
							media data 															3	
	ontimeupdate 		The event occurs when the playing position has changed (like 
							when the user fast forwards to a different point in the media) 		3
	onvolumechange 		The event occurs when the volume of the media has changed (includes 
							setting the volume to "mute") 										3
	onwaiting 			The event occurs when the media has paused but is expected to 
							resume (like when the media pauses to buffer more data) 			3
*/

/*
	Animation Events
	Event 				Description 											DOM
	animationend 		The event occurs when a CSS animation has completed 	3
	animationiteration 	The event occurs when a CSS animation is repeated 		3
	animationstart 		The event occurs when a CSS animation has started 		3
*/

/*
	Transition Events
	Event 			Description 											DOM
	transitionend 	The event occurs when a CSS transition has completed 	3
*/


/*
	Server-Sent Events
	Event 		Description 	
	onerror 	The event occurs when an error occurs with the event source 	 
	onmessage 	The event occurs when a message is received through the event source 	 
	onopen 		The event occurs when a connection with the event source is opened
*/

/*
	Misc Events
	Event 			Description 												DOM
	onmessage 		The event occurs when a message is received through or 
						from an object (WebSocket, Web Worker, Event Source 
						or a child frame or a parent window) 					3
	onmousewheel 	Deprecated. Use the onwheel event instead 	 
	ononline 		The event occurs when the browser starts to work online 	3
	onoffline 		The event occurs when the browser starts to work offline 	3
	onpopstate 		The event occurs when the window's history changes 			3
	onshow 			The event occurs when a <menu> element is shown as a 
						context menu 											3
	onstorage 		The event occurs when a Web Storage area is updated 		3
	ontoggle 		The event occurs when the user opens or closes the 
						<details> element 										3
	onwheel 		The event occurs when the mouse wheel rolls up or down 
						over an element 										3
*/

/*
	Touch Events
	Event 			Description 	
	ontouchcancel 	The event occurs when the touch is interrupted 	 
	ontouchend 		The event occurs when a finger is removed from a touch screen 	 
	ontouchmove 	The event occurs when a finger is dragged across the screen 	 
	ontouchstart 	The event occurs when a finger is placed on a touch screen
*/

/*
	Event object 

	>	window['Event']
			
			functionEvent() { [native code] }
	
	>	Object.getOwnPropertyNames(window['Event']);
	
			["length", "name", "arguments", "caller", "prototype", "NONE", "CAPTURING_PHASE", 
			"AT_TARGET", "BUBBLING_PHASE", "MOUSEDOWN", "MOUSEUP", "MOUSEOVER", "MOUSEOUT", 
			"MOUSEMOVE", "MOUSEDRAG", "CLICK", "DBLCLICK", "KEYDOWN", "KEYUP", "KEYPRESS", 
			"DRAGDROP", "FOCUS", "BLUR", "SELECT", "CHANGE", "toString"]
	

	>	Object.getOwnPropertyNames(window['Event']['prototype']);
	
			["type", "target", "currentTarget", "eventPhase", "bubbles", "cancelable", 
			"defaultPrevented", "timeStamp", "path", "srcElement", "returnValue", "cancelBubble", 
			"stopPropagation", "stopImmediatePropagation", "preventDefault", "initEvent", "NONE", 
			"CAPTURING_PHASE", "AT_TARGET", "BUBBLING_PHASE", "MOUSEDOWN", "MOUSEUP", "MOUSEOVER", 
			"MOUSEOUT", "MOUSEMOVE", "MOUSEDRAG", "CLICK", "DBLCLICK", "KEYDOWN", "KEYUP", "KEYPRESS", 
			"DRAGDROP", "FOCUS", "BLUR", "SELECT", "CHANGE", "constructor"]


	Constructor
	Event()
		Creates an Event object.
	
	Properties
		This interface doesn't inherit any property.

		Event.bubbles (Read only)
			A boolean indicating whether the event bubbles up through the DOM or not.
	
		Event.cancelable (Read only)
			A boolean indicating whether the event is cancelable.

		Event.currentTarget Read only
			A reference to the currently registered target for the event.
	
		Event.defaultPrevented Read only
			Indicates whether or not event.preventDefault() has been called on the event.
	
		Event.eventPhase Read only
			Indicates which phase of the event flow is being processed.

		Event.explicitOriginalTarget  Read only
			The explicit original target of the event (Mozilla-specific).
	
		Event.originalTarget  Read only
			The original target of the event, before any retargetings (Mozilla-specific).
	
		Event.srcElement 
			A nonstandard alias for Event.target. (old Internet Explorer-specific)
	
		Event.target Read only
			A reference to the target to which the event was originally dispatched.
	
		Event.timeStamp Read only
			The time that the event was created.
	
		Event.type Read only
			The name of the event (case-insensitive).
	
		Event.isTrusted Read only
			Indicates whether or not the event was initiated by the browser (after a 
			user click for instance) or by a script (using an event creation method, like event.initEvent)
	

	Methods
		This interface doesn't inherit any method.

		Event.initEvent() 
			Initializes the value of an Event created. If the event has already being dispatched, this method does nothing.
	
		Event.preventBubble()  Obsolete since Gecko 24
			Prevents the event from bubbling. Obsolete, use event.stopPropagation instead.
	
		Event.preventCapture()  Obsolete since Gecko 24
			Obsolete, use event.stopPropagation instead.
	
		Event.preventDefault()
			Cancels the event (if it is cancelable).
	
		Event.stopImmediatePropagation()
			For this particular event, no other listener will be called. Neither
			those attached on the same element, nor those attached on elements which 
			will be traversed later (in capture phase, for instance)
	
		Event.stopPropagation()
			Stops the propagation of events further along in the DOM.
	
		Event.getPreventDefault() 
			Not standardised yet	
		
*/


/*
	
	MouseEvent object

	The MouseEvent interface represents events that occur due to the user 
	interacting with a pointing device (such as a mouse). Common events 
	using this interface include click, dblclick, mouseup, mousedown.

	MouseEvent derives from UIEvent, which in turn derives from Event. 
	Though the MouseEvent.initMouseEvent() method is kept for backward 
	compatibility, creating of a MouseEvent object should be done using 
	the MouseEvent() constructor.

	>	window['MouseEvent']
			
			function MouseEvent() { [native code] }

	>	Object.getOwnPropertyNames(MouseEvent);
			
			["length", "name", "arguments", "caller", "prototype", "toString"]

	>	Object.getOwnPropertyNames(MouseEvent.prototype);
			
			["screenX", "screenY", "clientX", "clientY", "ctrlKey", "shiftKey", "altKey", 
			"metaKey", "button", "buttons", "relatedTarget", "pageX", "pageY", "x", "y", 
			"offsetX", "offsetY", "movementX", "movementY", "fromElement", "toElement", 
			"which", "webkitMovementX", "webkitMovementY", "layerX", "layerY", "getModifierState", 
			"initMouseEvent", "constructor"]
	
	Constructor
		MouseEvent()
			Creates a MouseEvent object.
	
	Properties
		This interface also inherits properties of its parents, UIEvent and Event.

	
		MouseEvent.altKey Read only
			Returns true if the alt key was down when the mouse event was fired.

		MouseEvent.button Read only
			The button number that was pressed when the mouse event was fired. 

		MouseEvent.buttons Read only
			The buttons being pressed when the mouse event was fired

		MouseEvent.clientX Read only
			The X coordinate of the mouse pointer in local (DOM content) coordinates.

		MouseEvent.clientY Read only
			The Y coordinate of the mouse pointer in local (DOM content) coordinates.
		
		MouseEvent.ctrlKey Read only
			Returns true if the control key was down when the mouse event was fired.
		
		MouseEvent.metaKey Read only
			Returns true if the meta key was down when the mouse event was fired.
		
		MouseEvent.movementX Read only
			The X coordinate of the mouse pointer relative to the position of the last mousemove event.
		
		MouseEvent.movementY Read only
			The Y coordinate of the mouse pointer relative to the position of the last mousemove event.
		
		MouseEvent.offsetX Read only
			The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.

		MouseEvent.offsetY Read only
			The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.
		
		MouseEvent.pageX Read only
			The X coordinate of the mouse pointer relative to the whole document.
		
		MouseEvent.pageY Read only
			The Y coordinate of the mouse pointer relative to the whole document.
		
		MouseEvent.region Read only
			Returns the id of the hit region affected by the event. If no hit region is affected, null is returned.
		
		MouseEvent.relatedTarget Read only
			The secondary target for the event, if there is one.

		
		MouseEvent.screenX Read only
			The X coordinate of the mouse pointer in global (screen) coordinates.
		
		MouseEvent.screenY Read only
			The Y coordinate of the mouse pointer in global (screen) coordinates.
		
		MouseEvent.shiftKey Read only
			Returns true if the shift key was down when the mouse event was fired.
		
		MouseEvent.which  Read only
			The button being pressed when the mouse event was fired.
		
		MouseEvent.mozPressure  Read only
			The amount of pressure applied to a touch or tablet device when generating 
			the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).
		
		MouseEvent.mozInputSource  Read only
			The type of device that generated the event (one of the MOZ_SOURCE_* constants 
			listed below). This lets you, for example, determine whether a mouse event was 
			generated by an actual mouse or by a touch event (which might affect the degree 
			of accuracy with which you interpret the coordinates associated with the event).

		MouseEvent.x Read only
			Alias for MouseEvent.clientX.
		
		MouseEvent.y Read only
			Alias for MouseEvent.clientY
	

	Methods
		This interface also inherits methods of its parents, UIEvent and Event.

	
		MouseEvent.getModifierState()
			Returns the current state of the specified modifier key. See the 
				KeyboardEvent.getModifierState() for details.
		
		MouseEvent.initMouseEvent() 
			Initializes the value of a MouseEvent created. If the event has already being 
				dispatched, this method does nothing.

*/


/*

	KeyboardEvent objects describe a user interaction with the keyboard. Each event 
	describes a key; the event type (keydown, keypress, or keyup) identifies what 
	kind of activity was performed.

	>	window['KeyboardEvent']
			
			function KeyboardEvent() { [native code] }
	
	>	Object.getOwnPropertyNames(KeyboardEvent);
			
			["length", "name", "arguments", "caller", "prototype", "DOM_KEY_LOCATION_STANDARD", 
			"DOM_KEY_LOCATION_LEFT", "DOM_KEY_LOCATION_RIGHT", "DOM_KEY_LOCATION_NUMPAD", "toString"]
	
	>	Object.getOwnPropertyNames(KeyboardEvent.prototype);

			["location", "ctrlKey", "shiftKey", "altKey", "metaKey", "repeat", "charCode", 
			"keyCode", "which", "keyIdentifier", "keyLocation", "getModifierState", 
			"initKeyboardEvent", "DOM_KEY_LOCATION_STANDARD", "DOM_KEY_LOCATION_LEFT", 
			"DOM_KEY_LOCATION_RIGHT", "DOM_KEY_LOCATION_NUMPAD", "constructor"]

	Constructor
		KeyboardEvent()
			Creates a KeyboardEvent object.

	Methods
		This interface also inherits methods of its parents, UIEvent and Event.

		KeyboardEvent.getModifierState()
			Returns a Boolean indicating if the modifier key, like Alt, Shift, Ctrl, or Meta, 
			was pressed when the event was created.

		KeyboardEvent.initKeyEvent()
			Initializes a KeyboardEvent object. This has only been implemented by 
				Gecko (others used KeyboardEvent.initKeyboardEvent()) and should not 
				be used any more. The standard modern way is to use the KeyboardEvent() constructor.
		
		KeyboardEvent.initKeyboardEvent()
			Initializes a KeyboardEvent object. This has never been implemented by Gecko (who 
			used KeyboardEvent.initKeyEvent()) and should not be used any more. The standard 
			modern way is to use the KeyboardEvent() constructor.
	
	Properties
		This interface also inherits properties of its parents, UIEvent and Event.

		KeyboardEvent.altKey Read only
			Returns a Boolean that is true if the Alt ( Option or ⌥ on OS X) key was active 
			when the key event was generated.
		KeyboardEvent.char Read only
			Returns a DOMString representing the character value of the key. If the key 
			corresponds to a printable character, this value is a non-empty Unicode string 
			containing that character. If the key doesn't have a printable representation, 
			this is an empty string.
			Note: If the key is used as a macro that inserts multiple characters, this 
			attribute's value is the entire string, not just the first character.
			Warning: This has been dropped from DOM Level 3 Events. This is supported only on IE9+.
		KeyboardEvent.charCode Read only
			Returns a Number representing the Unicode reference number of the key; this 
			attribute is used only by the keypress event. For keys whose char attribute 
			contains multiple characters, this is the Unicode value of the first character 
			in that attribute. In Firefox 26 this returns codes for printable characters.
			Warning: This attribute is deprecated; you should use KeyboardEvent.key instead, if available.
		KeyboardEvent.code Read only
			Returns a DOMString with the code value of the key represented by the event.
		KeyboardEvent.ctrlKey Read only
			Returns a Boolean that is true if the Ctrl key was active when the key event was generated.
		KeyboardEvent.isComposing Read only
			Returns a Boolean that is true if the event is fired between after compositionstart 
			and before compositionend.
		KeyboardEvent.key Read only
			Returns a DOMString representing the key value of the key represented by the event.
		KeyboardEvent.keyCode  Read only
			Returns a Number representing a system and implementation dependent numerical code 
			identifying the unmodified value of the pressed key.
			Warning: This attribute is deprecated; you should use KeyboardEvent.key instead, if available.
		KeyboardEvent.keyIdentifier Read only
			This property is non-standard and has been deprecated in favor of KeyboardEvent.key. 
			It was part of an old version of DOM Level 3 Events.
		KeyboardEvent.keyLocation Read only
			This is a non-standard deprecated alias for KeyboardEvent.location. It was part 
			of an old version of DOM Level 3 Events.
		KeyboardEvent.locale Read only
			Returns a DOMString representing a locale string indicating the locale the 
			keyboard is configured for. This may be the empty string if the browser or 
			device doesn't know the keyboard's locale.
			Note: This does not describe the locale of the data being entered. A user may 
			be using one keyboard layout while typing text in a different language.
		KeyboardEvent.location Read only
			Returns a Number representing the location of the key on the keyboard or other input device.
		KeyboardEvent.metaKey Read only
			Returns a Boolean that is true if the Meta key (on Mac keyboards, the ⌘ Command key; 
			on Windows keyboards, the Windows key (⊞)) was active when the key event was generated.
		KeyboardEvent.repeat Read only
			Returns a Boolean that is true if the key is being held down such that it is automatically repeating.
		KeyboardEvent.shiftKey Read only
			Returns a Boolean that is true if the Shift key was active when the key event was generated.
		KeyboardEvent.which Read only
			Returns a Number representing a system and implementation dependent numeric code 
			identifying the unmodified value of the pressed key; this is usually the same as keyCode.
			Warning: This attribute is deprecated; you should use KeyboardEvent.key instead, if available.
			Notes
				There are keydown, keypress, and keyup events. For most keys, Gecko dispatches 
				a sequence of key events like this:

	When the key is first depressed, the keydown event is sent.
	If the key is not a modifier key, the keypress event is sent.
	When the user releases the key, the keyup event is sent.
	Special cases
		Certain keys toggle the state of an LED indicator, such as Caps Lock, Num Lock, 
		and Scroll Lock. On Windows and Linux, these keys dispatch only the keydown and 
		keyup events. Note that on Linux, Firefox 12 and earlier also dispatched the 
		keypress event for these keys.

		On Mac, however, Caps Lock dispatches only the keydown event due to a platform 
		event model limitation. Num Lock had been supported on old MacBook (2007 model 
		and older) but Mac hasn't supported Num Lock feature even on external keyboards 
		in these days. On the old MacBook which has Num Lock key, Num Lock doesn't cause 
		any key events. And Gecko supports Scroll Lock key if an external keyboard which 
		has F14 is connected. However, it generates keypress event. This inconsistent 
		behavior is a bug; see bug 602812.

	Auto-repeat handling
	===================
		When a key is pressed and held down, it begins to auto-repeat. This results in
		a sequence of events similar to the following being dispatched:

			1. keydown
			2. keypress
			3. keydown
			4. keypress
			5. <<repeating until the user releases the key>>
			6. keyup

		This is what the DOM Level 3 specification says should happen. There are some 
		caveats, however, as described below.

	Auto-repeat on some GTK environments such as Ubuntu 9.4
	=======================================================
		In some GTK-based environments, auto-repeat dispatches a native key-up event 
		automatically during auto-repeat, and there's no way for Gecko to know the 
		difference between a repeated series of keypresses and an auto-repeat. On 
		those platforms, then, an auto-repeat key will generate the following sequence of events:

			1. keydown
			2. keypress
			3. keyup
			4. keydown
			5. keypress
			6. keyup
			7. <<repeating until the user releases the key>>
			8. keyup
		In these environments, unfortunately, there's no way for web content to tell 
		the difference between auto-repeating keys and keys that are just being pressed repeatedly.

	Auto-repeat handling prior to Gecko 5.0
	=======================================	
		Before Gecko 5.0 (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2), keyboard 
		handling was less consistent across platforms.

		Windows
			Auto-repeat behavior is the same as in Gecko 4.0 and later.
		Mac
			After the initial keydown event, only keypress events are sent until the 
			keyup event occurs; the inter-spaced keydown events are not sent.
		Linux
			The event behavior depends on the specific platform. It will either behave 
			like Windows or Mac depending on what the native event model does.

*/


/*
	The hashchange event is fired when the fragment identifier of the URL has 
	changed (the part of the URL that follows the # symbol, including the # symbol).
	
	HashChangeEvent

	>	window['HashChangeEvent']

			function HashChangeEvent() { [native code] }

	>	Object.getOwnPropertyNames(HashChangeEvent);
			
			["length", "name", "arguments", "caller", "prototype", "toString"]
	
	>	Object.getOwnPropertyNames(HashChangeEvent.prototype);
			
			["oldURL", "newURL", "constructor"]
	

	General info
		specification  HTML5
			interface  HashChangeEvent
			  Bubbles  Yes
		   Cancelable  No
		       Target  defaultView
	   Default Action  None

	Properties
		Property				Type			Description
		target Read only		EventTarget		The browsing context (<code>window</code>).
		type Read only			DOMString		The type of event.
		bubbles Read only		boolean			Does the event normally bubble?
		cancelable Read only	boolean			Is it possible to cancel the event?
		oldURL Read only		string			The previous URL from which the window was navigated.
		newURL Read only		string	


	The hashchange event
		The dispatched hashchange event has the following fields:

		Field	Type		Description
		======	====		===========
		newURL	DOMString	The new URL to which the window is navigating.
		oldURL	DOMString	The previous URL from which the window was navigated.

*/


/*
	PageTransitionEvent

	>	window['PageTransitionEvent']
			
			PageTransitionEvent() { [native code] }
	
	>	Object.getOwnPropertyNames(PageTransitionEvent);
			
			["length", "name", "arguments", "caller", "prototype", "toString"]
	
	>	Object.getOwnPropertyNames(PageTransitionEvent.prototype);
			
			["persisted", "constructor"]

	
	Property 	Description 	
	=======		===========
	persisted 	Returns whether the webpage was cached by the browser
*/


/*
	The FocusEvent interface represents focus-related events like focus, blur, focusin, or focusout.

	This is an experimental technology

	FocusEvent object
	
	>	window['FocusEvent']

			function FocusEvent() { [native code] }

	>	Object.getOwnPropertyNames(FocusEvent);
			
			["length", "name", "arguments", "caller", "prototype", "toString"]
	
	>	Object.getOwnPropertyNames(FocusEvent.prototype);
			
			["relatedTarget", "constructor"]
	

	Constructor
		FocusEvent()
			Creates a FocusEvent event with the given parameters.
	Properties
		Inherits properties from its parent UIEvent, and indirectly from Event.

	FocusEvent.relatedTarget Read only
		Is an EventTarget representing a secondary target for this event. As in some cases (like when tabbing in or out a page), this property may be set to null for security reasons.
	
	Methods
		No specific method; inherits methods from its parent UIEvent, and indirectly from Event.

*/

/*
	AnimationEvent object

	>	window	['AnimationEvent']

			function AnimationEvent() { [native code] }

	>	Object.getOwnPropertyNames(AnimationEvent );

			["length", "name", "arguments", "caller", "prototype", "toString"]

	>	Object.getOwnPropertyNames(AnimationEvent .prototype);

			["animationName", "elapsedTime", "constructor"]

	
	The AnimationEvent interface represents events providing information related to animations.

	Properties
		Also inherits properties from its parent Event.

		AnimationEvent.animationName Read only
			Is a DOMString containing the value of the animation-name CSS property 
			associated with the transition.

		AnimationEvent.elapsedTime Read only
			Is a float giving the amount of time the animation has been running, 
			in seconds, when this event fired, excluding any time the animation 
			was paused. For an "animationstart" event, elapsedTime is 0.0 unless 
			there was a negative value for animation-delay, in which case the 
			event will be fired with elapsedTime containing  (-1 * delay).
		
		AnimationEvent.pseudoElement Read only
			Is a DOMString, starting with '::', containing the name of the 
			pseudo-element the animation runs on. If the animation doesn't run 
			on a pseudo-element but on the element, an empty string: ''.
		
		Constructor
			AnimationEvent()
				Creates an AnimationEvent event with the given parameters.
	
	Methods
		Also inherits methods from its parent Event.

	
		AnimationEvent.initAnimationEvent() 
			Initializes a AnimationEvent created using the deprecated Document.createEvent("AnimationEvent") method.

*/


/*
	The TransitionEvent interface represents events providing information related to transitions.
	This is an experimental technology

	TransitionEvent object

	>	window['TransitionEvent']

			function TransitionEvent() { [native code] }
	
	> 	Object.getOwnPropertyNames(TransitionEvent );
			
			["length", "name", "arguments", "caller", "prototype", "toString"]
	
	>	Object.getOwnPropertyNames(TransitionEvent.prototype);
			
			["propertyName", "elapsedTime", "pseudoElement", "constructor"]
	
	Properties
		Also inherits properties from its parent Event.

		TransitionEvent.propertyName Read only
			Is a DOMString containing the name CSS property associated with the transition.

		TransitionEvent.elapsedTime Read only
			Is a float giving the amount of time the transtion has been running, in seconds, 
			when this event fired. This value is not affected by the transition-delay property.
		
		TransitionEvent.pseudoElement Read only
			Is a DOMString, starting with '::', containing the name of the pseudo-element the 
			animation runs on. If the transition doesn't run on a pseudo-element but on the 
			element, an empty string: ''.
	
	Constructor
		TransitionEvent()
			Creates a TransitionEvent event with the given parameters.
	
	Methods
		Also inherits properties from its parent Event.

		TransitionEvent.initTransitionEvent() 
			Initializes a TransitionEvent created using the deprecated Document.createEvent("TransitionEvent") method.

*/


/*
	The WheelEvent interface represents events that occur due to the user moving a 
	mouse wheel or similar input device.

	This is the standard wheel event interface to use.

	Old versions of browsers implemented the two non-standard and 
	non-cross-browser-compatible MouseWheelEvent and MouseScrollEvent interfaces.
	Use this interface and avoid the latter two.

	
	>	window['WheelEvent']
		
			function WheelEvent() { [native code] }
	>	Object.getOwnPropertyNames(WheelEvent );
			
			["length", "name", "arguments", "caller", "prototype", "DOM_DELTA_PIXEL", 
				"DOM_DELTA_LINE", "DOM_DELTA_PAGE", "toString"]

	>	Object.getOwnPropertyNames(WheelEvent.prototype);
			
			["deltaX", "deltaY", "deltaZ", "deltaMode", "wheelDeltaX", "wheelDeltaY", 
			"wheelDelta", "DOM_DELTA_PIXEL", "DOM_DELTA_LINE", "DOM_DELTA_PAGE", "constructor"]


	Event <----- UIEvent <------MouseEvent <-----WheelEvent

	
	Constructor
		WheelEvent()
			Creates a WheelEvent object.
	Properties
		This interface inherits properties from its parents, MouseEvent, UIEvent and Event.

		WheelEvent.deltaX Read only
			Returns a double representing the horizontal scroll amount.
		
		WheelEvent.deltaY Read only
			Returns a double representing the vertical scroll amount.
		
		WheelEvent.deltaZ Read only
			Returns a double representing the scroll amount for the z-axis.
		
		WheelEvent.deltaMode Read only
			Returns an unsigned long representing the unit of the delta values scroll amount. 
			Permitted values are:
			Constant		Value	Description
			=======			=====	===========
			DOM_DELTA_PIXEL	0x00	The delta values are specified in pixels.
			DOM_DELTA_LINE	0x01	The delta values are specified in lines.
			DOM_DELTA_PAGE	0x02	The delta values are specified in pages.
	Methods
		This interface doesn't define any methods, but inherits methods from its 
		parents, MouseEvent, UIEvent and Event.

*/



// ---------- EVENT HANDLING ----------
function openAlert(message){
	alert(message);
}

