/* AngularJS SPA approach as shown below*/
window.addEventListener('hashchange',function(){
        /*
         *So,
         *when I say <href="#bookmark">,
         *bookmark is a fragment identifier
         *
         *when I say <href="#/bookmark/1">,
         * "/bookmark/1" is a fragment identifier
         *
         *Fragment identifier is the fundamental key for Single page applications
         *
         *So, each hash value corresponds to a page.
         *
         */
        console.log('Hash changed!:' + window.location.hash);
        
        if (window.location.hash === "#/bookmark/1") {
            console.log('Page 1 is cool');
        }
        
        if (window.location.hash === "#/bookmark/2") {
            console.log('Let me go get Page 2.');
        }
        
        if (window.location.hash === "#/bookmark/3") {
            console.log('Here\'s Page 3.');
        }
    });