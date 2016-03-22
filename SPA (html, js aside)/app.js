window.addEventListener('hashchange', function() {
    
    if (window.location.hash === '#/bookmark/1') {
        
        console.log('Page 1 is cool.');
        
    }
    
    if (window.location.hash === '#/bookmark/2') {
        
        console.log('Page 2.');
        
    }
    
    if (window.location.hash === '#/bookmark/3') {
        
        console.log('The Best Page 3.');
        
    }
    

})