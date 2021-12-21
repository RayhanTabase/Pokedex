
const apiBaseUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cUCVyNmz0oMUJV0fH06j";

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
      },
    });
  const response = await data.json();
  console.log(response)
}

const getComments = async (itemId) => {
  const data = await fetch(`${apiBaseUrl}/comments?item_id=${itemId}`);
  const response = await data.json();
  return response
}

export {addComment,getComments}


