const { DateTime } = require('luxon');

const apiBaseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PPNxNau41cY6yOFKoL3b';
let totalComments = 0;

const stringValidator = (string) => {
  if (string.trim().length < 1) return false;
  return true;
};

const addComment = async (itemId, name, comment) => {
  if (!stringValidator(name)) return null;
  if (!stringValidator(comment)) return null;
  const data = await fetch(`${apiBaseUrl}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username: name,
        comment,
      }),
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    });
  if (data.status === 201) {
    totalComments += 1;
    const currentDate = DateTime.now().toISODate();
    const item = { creation_date: currentDate, username: name, comment };
    return item;
  }
  return null;
};

const getComments = async (itemId) => {
  const data = await fetch(`${apiBaseUrl}/comments?item_id=${itemId}`);
  if (data.status === 200) {
    const response = await data.json();
    totalComments = response.length;
    return response;
  }
  totalComments = 0;
  return null;
};

const countComments = () => totalComments;

export { addComment, getComments, countComments };
