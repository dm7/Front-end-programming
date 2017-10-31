/*
	If we consider that a pattern represents a best practice, an anti-pattern 
		represents a lesson that has been learned. The term anti-patterns was 
		coined in 1995 by Andrew Koenig in the November C++ Report that year, 
		inspired by the GoF's book Design Patterns. In Koenig’s report, there 
		are two notions of anti-patterns that are presented. Anti-Patterns:

    		. Describe abad solution to a particular problem which resulted in a bad situation occurring
    		. Describe how to get out of said situation and how to go from there to a good solution

	On this topic, Alexander writes about the difficulties in achieving a 
		good balance between good design structure and good context:

	“These notes are about the process of design; the process of inventing 
	physical things which display a new physical order, organization, form, 
	in response to function.…every design problem begins with an effort to 
	achieve fitness between two entities: the form in question and its context. 
	The form is the solution to the problem; the context defines the problem”.

	While it’s quite important to be aware of design patterns, it can be 
		equally important to understand anti-patterns. Let us qualify the 
		reason behind this. When creating an application, a project’s 
		life-cycle begins with construction however once you’ve got the 
		initial release done, it needs to be maintained. The quality of 
		a final solution will either be good or bad, depending on the 
		level of skill and time the team have invested in it. Here
		good and bad are considered in context - a ‘perfect’ design 
		may qualify as an anti-pattern if applied in the wrong context.

	The bigger challenges happen after an application has hit production 
		and is ready to go into maintenance mode. A developer working on 
		such a system who hasn’t worked on the application before may 
		introduce a bad design into the project by accident. If said bad 
		practices are created as anti-patterns, they allow developers a 
		means to recognize these in advance so that they can avoid common 
		mistakes that can occur - this is parallel to the way in which 
		design patterns provide us with a way to recognize common 
		techniques that are useful.

	To summarize, an anti-pattern is a bad design that is worthy of 
		documenting. Examples of anti-patterns in JavaScript are the following:

	    . Polluting the global namespace by defining a large number of 
	    	variables in the global context
	    . Passing strings rather than functions to either setTimeout 
	    	or setInterval as this triggers the use of eval() internally.
	    . Modifying the Object class prototype (this is a particularly bad anti-pattern)
	    . Using JavaScript in an inline form as this is inflexible
	    . The use of document.write where native DOM alternatives such 
	    	as document.createElement are more appropriate. document.write 
	    	has been grossly misused over the years and has quite a few 
	    	disadvantages including that if it's executed after the page 
	    	has been loaded it can actually overwrite the page we're on, 
	    	whilst document.createElement does not. We can see here for 
	    	a live example of this in action. It also doesn't work with 
	    	XHTML which is another reason opting for more DOM-friendly 
	    	methods such as document.createElement is favorable.

	Knowledge of anti-patterns is critical for success. Once we are able 
	to recognize such anti-patterns, we're able to refactor our code to 
	negate them so that the overall quality of our solutions improves instantly.
*/