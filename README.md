1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: This method is used to find a single, specific element using its unique ID.

getElementsByClassName: This returns a collection (list) of all elements that have the same Class name.

querySelector: This is very flexible; it finds the first element that matches a CSS selector (like .class or #id).

querySelectorAll: Similar to querySelector, but it returns all matching elements as a static NodeList.


2. How do you create and insert a new element into the DOM?
First, you create the element using document.createElement("tagName").

Then, you insert it into the webpage using methods like appendChild() or prepend() to attach it to a parent element.


3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where an event starts from the specific element you clicked (like a button) and then "bubbles up" to its parent elements.

It works from the inside out: first the button's event triggers, then its container's (Div) event triggers, all the way up to the document object.


4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means instead of adding a listener to many individual items, you add one listener to their common Parent.

It is useful because: It saves memory and automatically works for new items added to the list without needing new code.


5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): This stops the default action of an element (for example, it stops a link from opening a URL or a form from refreshing the page).

stopPropagation(): This stops the event from "bubbling up" to parent elements, so the parent doesn't even know the event happened.