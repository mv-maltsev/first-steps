//zip([1,2,3,4, 7,9, 12, 14, 16,17,18,19,20]) // ['1-4', '7-9', 12]

function zip (array) {
    
    let zip_array = [];
    let start = '';

    for (let i = 0; i < array.length; i++) { 
        
        if (start === '') { 
            start = array[i];
        }

        if (array[i+1] === undefined) {
            zip_array.push(`${start}-${array[i]}`);
        }
        if (array[i+1] - array[i] > 1) {
            if (start === array[i]) {
                zip_array.push(start);
            } else {
                zip_array.push(`${start} - ${array[i]}`);
            }
            
            start = '';
        }
        
    }
    return zip_array;
}

console.log(unZip(['1-4', '7-9', 12]));

function unZip (array) {
    
    let unzip_array = [];
    let range = [];

    for (let i = 0; i < array.length; i++) { 

        if (!Number.isInteger(array[i])) {
            range = array[i].split('-');
            for (let k = range[0]; k <= range[1]; k++) {
                unzip_array.push(+k);
            }
        } else {
            unzip_array.push(array[i]);
        }
        
    }
    
    return unzip_array;
}


//console.log( 12 - undefined);

