const hasDuplicate = arr => new Set(arr).size !== arr.length;

const isVowel = (char) => {
    return 'aeiou'.includes(char);
}

function vowelCount(str){
    const vowelsMap = new Map();
    
    for(let char of str){
        let lowerCase = char.toLowerCase();
       
        if(isVowel(lowerCase)){
            
            if(vowelsMap.has(lowerCase)){
                vowelsMap.set(lowerCase, vowelsMap.get(lowerCase) + 1);
            } else {
                vowelsMap.set(lowerCase, 1);
            }
        }
    }
    return vowelsMap;
}