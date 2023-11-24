document.getElementById('owl').onclick = function(){
        alert("owl clicked")
    }

    //  attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


    //! Event Bubbling - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

    //! Capturing
    // There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

    // The standard DOM Events describes 3 phases of event propagation:

    // 1.Capturing phase – the event goes down to the element.
    // 2.Target phase – the event reached the target element.
    // 3.Bubbling phase – the event bubbles up from the element.
    //! For event capturing we set the third parameter to true
    //!There are two possible values of the capture option:
        //1. If it’s false (default), then the handler is set on the ubbling phase.
        // 2. If it’s true, then the handler is set on the capturing phase.
        //HTML → BODY → FORM → DIV -> P (capturing phase, the first listener):
        // P → DIV → FORM → BODY → HTML (bubbling phase, the second listener).

    document.getElementById('images').addEventListener('click', function(e){
        console.log("clicked inside the ul");
    }, false)

    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl clicked");
        e.stopPropagation() //! This ensures that when we click here it should not print "clicked inside the ul" i.e we are stoppping it from getting propagated to the outer block
    }, false)//! False is the default value .If {capture: true} ,event capturing will occur else event bubbling will occur.
    
    document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation()
        console.log("google clicked");
    }, false)