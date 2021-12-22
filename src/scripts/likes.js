export default class Likes {

  baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  interfaceUrl = '';

  newLikeInferfaces = async () => {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const finalResponse = await response.json();
    if (response.status === 200) {
      return finalResponse;
    }
    return null;
  }
}