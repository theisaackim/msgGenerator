let msgs = ['early bird gets the worm', 'when life hands you lemons, make lemonade', 'best time to plant a tree was yesterday, the next best time is right now', 'only a fool rushes headlong into the unknown', '1+1 = 2', 'let sleeping dogs lie', 'early to bed and early to rise, makes a boy healthy, happy, and wise']

const generateMsg = () => {
    let num = (Math.floor(Math.random() * msgs.length));

    console.log(msgs[num])
}

generateMsg()
