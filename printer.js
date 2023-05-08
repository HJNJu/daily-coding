function queuePrinter(bufferSize, capacities, documents) {
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    for(let i = 0; i < bufferSize; i++){
        queue.push(0);
    }
    
    let currentDocument = documents.shift();
    queue.unshift(currentDocument);
    queue.pop();
    totalBufferVolume = totalBufferVolume + currentDocument;
    count++;

    while(totalBufferVolume){
        totalBufferVolume = totalBufferVolume - queue.pop();
        currentDocument = documents.shift();

        if(currentDocument + totalBufferVolume <= capacities){
            queue.unshift(currentDocument);
            totalBufferVolume = totalBufferVolume + currentDocument;
        }else{
            documents.unshift(currentDocument);
            queue.unshift(0);
        }
        count++;
    }

    return count;
}