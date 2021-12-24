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

describe('Test to count number of items returned from API', () => {
    it('Expected result should be three', async() => {
        var result = await countComments('test');
        expect(result).toEqual(3);
    });
});