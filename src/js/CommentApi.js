const { DateTime } = require("luxon");
const apiBaseUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cUCVyNmz0oMUJV0fH06j";
var totalComments = 0;

const addComment = async (itemId,name,comment) => {
  console.log(itemId);
  const data = await fetch(`${apiBaseUrl}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        "item_id": itemId,
        "username": name,
        "comment": comment
      }),
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
    });
    if (data.status === 201) {
      totalComments += 1;
      let currentDate = DateTime.now().toISODate();
      let item = {creation_date:currentDate ,username:name,comment:comment}
      return item;
    }
    return null;
}

const getComments = async (itemId) => {
  const data = await fetch(`${apiBaseUrl}/comments?item_id=${itemId}`);
  const response = await data.json();
  totalComments = response.length;
  return response
}

const countComments = () => totalComments;

export {addComment,getComments, countComments}


