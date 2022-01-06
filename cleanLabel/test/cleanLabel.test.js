const {singletonStringOfWords} =  require('../')


test('join words into a string',()=>{
    const sample=['water','propylene glycol', 'styrene/acrlates/ammonium']
    expect(singletonStringOfWords(sample)).toBe('water,propylene glycol,styrene/acrlates/ammonium')
})