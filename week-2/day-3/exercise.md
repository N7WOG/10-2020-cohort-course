eloquentjavascript.net

for next week:  get document by id
                change color by style

START FROM THE `document.body` for all exercises.

Write your answers below each question on how to navigate.

Example: Grab the HERO!

`document.body.lastChild.previousSibling`

1. Grab David
    document.body.firstElementChild.lastElementChild

2. Grab Steve
    document.body.firstElementChild.firstElementChild

3. Grab Sean
    document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling

4. Grab the H1
    document.body.firstElementChild.nextElementSibling

5. Grab the Villian
    document.body.lastElementChild


/*
    ** CaSe SeNsItIvE! **

By ID:          (returns a single object)
    document.getElementById("daVid")

By Tag:         (returns a list, even if only 1 item)
    document.getElementsByTagName("h1")

By Class:       (returns a list, even if only 1 item)
    document.getElementsByClassName("className")

By Selector:    (returns a list, even if only 1 item)
    document.getElementById('selector').setAttribute("class", "headers")
*/