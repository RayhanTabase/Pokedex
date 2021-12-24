import { countComments } from '../scripts/CommentApi.js';

const array =[
    {date_created:'21-12-2021',username:'Mike',comment:'Hi there'},
    {date_created:'21-12-2021',username:'Mike',comment:'Hi there'},
    {date_created:'21-12-2021',username:'Mike',comment:'Hi there'}
]

global.fetch = jest.fn(() => Promise.resolve({
    status:200,
    json(){
      return array;
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