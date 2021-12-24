import { countComments } from '../scripts/CommentApi.js';


global.fetch = jest.fn(() => Promise.resolve({
    status:200,
    json(){
      return [{1:"1"},{2:"2"},{3:"3"}];
    }
}));

describe('Gold prices', () => {
    describe('When the average price is called for 7 days', () => {
        it('Then the correct average should be returned', async() => {
            var result = await countComments('test');
            expect(result).toEqual(3);
        });
    });
});