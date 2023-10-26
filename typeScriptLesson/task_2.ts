const isPalindrome = (num: number): boolean => { 
    const str = num.toString(); 
        for (let i = 0; i < str.length / 2; i++) { 
            if (str[i] !== str[str.length - 1 - i]) { 
                return false 
            } 
        } 
    return true 
} 
 
console.log(isPalindrome(1221)) 
console.log(isPalindrome(1228))