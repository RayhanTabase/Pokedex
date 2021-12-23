import { addComment, countComments } from '../scripts/CommentApi.js';

global.fetch = jest.fn(() => Promise.resolve({
  status: 201,
  body:"{1,77,3}",
}));

// beforeEach(() => {
//   fetch.mockClear();
// });

describe('Test comment counnter by add two valid comments and one invalid comment', () => {
  test('Check number of comments', async () => {
    // console.log((await fetch('a')))
    expect(countComments("id")).toEqual(2);

  });
});
