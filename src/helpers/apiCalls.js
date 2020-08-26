const baseURL = 'http://localhost:8080/api/v1';

const responseChecker = async (response) => {
  if (!response.ok) {
    const errorBody = await response.json(); 
    throw new Error(errorBody.error);
  } else {
    return response.json()
  }
};

export const getContacts = () => {
  return fetch(`${baseURL}/contacts`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response;
      }
    })
}

export const postContact = (newContact) => {
  console.log(newContact);
  const stringifiedContact = JSON.stringify(newContact);
  console.log(stringifiedContact);
  return fetch(`${baseURL}/contacts`, {
    method: 'POST',
    headers: {
      ContentType: 'application/json'
    },
    body: stringifiedContact
  })
    .then(responseChecker)
}

export const deleteContact = (id) => {
  return fetch(`${baseURL}/contacts/${id}`, {
    method: 'DELETE',
  })
    .then(responseChecker)
};
