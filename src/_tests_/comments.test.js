import {addComment,countComments} from '../js/CommentApi.js'

global.fetch = jest.fn(() =>
  Promise.resolve({
    status:201
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('Test comment counnter by add two valid comments and one invalid comment', () => {
  test("Check number of comments", async() => {
    await addComment("test","test","test")
    await addComment("test","test","test")
    await addComment("test"," "," ") //invalid comment to be rejected
    expect(countComments()).toEqual(2)
  });
});

