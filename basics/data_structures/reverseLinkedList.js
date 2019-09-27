var reverseLinkedList = function(l1) {
    
    let head = l1;
    let prev = null;
    
    while (head) {
                
        let save = head.next;
        
        head.next = prev;
        prev = head; 
        head = save;
    }
    
    return prev;
}