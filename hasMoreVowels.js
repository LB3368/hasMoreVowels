function hasMoreVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let nonVowelCount = 0

    for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      vowelCount++
    } else {
      nonVowelCount++
    }
  }

  const moreVowels = vowelCount > nonVowelCount
  const isOverHalfVowels = vowelCount / word.length > 0.5

  const result =  moreVowels && isOverHalfVowels
  
  return result
}
console.log(hasMoreVowels('plum'))
console.log(hasMoreVowels('developer'))
console.log(hasMoreVowels('engineering'))
console.log(hasMoreVowels('ocean'))


/**
 * alternative code
 * 
 * const hasMoreVowels = (word) => word.split('').filter((x => ['a', 'e', 'i', 'o', 'u'].includes(x))).length >= (word.length/2)

 how can you tweak it to also account for a string such as 'aALl'
function hasMoreVowels(word) {
  const vowels = "a,e,i,o,u,A,E,I,O,U";
  let vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelCount++;
    }
  }
  return vowelCount > word.length / 2;
}
console.log(hasMoreVowels("Aal"));
 */