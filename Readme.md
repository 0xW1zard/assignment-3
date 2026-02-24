```1. Ans:```

getElementById: Grabs exactly one element by its ID.
getElementsByClassName: Grabs a list of elements by the class.
querySelector: Grabs the first element that matches a CSS.
querySelectorAll: Grabs all elements that match a CSS rule.

```2. Ans:```

Create: document.createElement('div')
Modify: Add text or classes to it (newDiv.innerText = "Hi").
Insert: parent.appendChild(newElement)

```3. Event Bubbling:```
When click a button inside a box, The browser triggers the click on the button > the box,> the whole page.

```4. Event Delegation:```
Put just one click listener on the main parent box instead of every single button inside it. Dosen't need many

```5. preventDefault() vs stopPropagation():```

preventDefault(): Stops default browser behavior, like preventing a form from refreshing the page.
stopPropagation(): Pops the bubble. It stops click from traveling up to trigger the parent elements.
