function wordSplinter(string) {
    string = string.toLowerCase()
    // {letter: 'a', inshuro: 2}
    let foundLetters = []
    for (const i in string) {
        if (string[i] === " ")
            continue
        const letter_found = foundLetters.filter(el => el.letter === string[i])
        if (letter_found.length) {
            // add the found letter
            foundLetters.forEach(el => {
                if (el.letter === string[i])
                    el.inshuro += 1
            });
        } else {
            foundLetters.push({
                letter: string[i],
                inshuro: 1
            })
        }
    }
    console.log(foundLetters)
}

wordSplinter('The meeting is done');