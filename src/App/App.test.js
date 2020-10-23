import React from 'react';
import { render, screen, waitFor, fireEvent} from '@testing-library/react';
import App from './App';
import { getContacts, postContact, patchFavorite, deleteContact } from '../helpers/apiCalls';
import '@testing-library/jest-dom';
jest.mock('../helpers/apiCalls');

describe('App', () => {

  it('Should display any contacts from the server on load', async () => {
    // What functions do we need to mock here?
    // How many times will each mocked function get called?

    // Set Up 
    // - mock out network requests
    //  - mocking the imports 
    //  - mocking the resolved value of the imported function
    getContacts.mockResolvedValue({
      contacts: [
        {
          name: "Jim",
          number: "1234456789",
          bestFriend: false,
          id: 27
        }
      ]
    })
    // - render the App component
    render(<App />);
    // Execution
    // - query the elements we care about:
    //  - heading of the app 
    const appHeading = screen.getByRole('heading', {name: 'Contact List'});
    //  - the names of each contact, taken from our mocked data 
    const contactName = await waitFor( () => screen.getByText('Jim', {exact: false}));
    // Assertions 
    //  - Make sure that what we queried is on the DOM 
    expect(appHeading).toBeInTheDocument();
    expect(contactName).toBeInTheDocument();
  })


  it('should be able to add, favorite and then remove a contact', async () => {
    // Set up:
    // - mock out our apiCalls
    // getContacts
    getContacts.mockResolvedValueOnce({
      contacts: []
    })
    getContacts.mockResolvedValueOnce({
      contacts: []
    })
    // postContact
    postContact.mockResolvedValue({
      newContact: {
          name: "Jim",
          number: "1234456789",
          bestFriend: false,
          id: 27
        }
    })
    // patchFavorites
    patchFavorite.mockResolvedValue({
      updatedContact: {
          name: "Jim",
          number: "1234456789",
          bestFriend: true,
          id: 27
        }

    });
    // deleteContacts
    deleteContact.mockResolvedValue({});
    // - render the app
    render(<App />);

    // Execution / Assertion:
    //  - query the form
    fireEvent.change(screen.getByPlaceholderText('Contact Name'), {target: {value: 'Jim'}});
    fireEvent.change(screen.getByPlaceholderText('Contact Number'), {target: {value: '1234456789'}});
    //  - add a contact 
    fireEvent.click(screen.getByRole('button', {name: 'Add Contact'}));

    //  - favorite the contact
    const contactName = await waitFor( () => screen.getByText('Jim', { exact: false}));
    const bffButton = screen.getByRole('button', {name: 'Make BFF'});
    fireEvent.click(bffButton);

    //  - assert that the contact was favorited 
    const favoritedBFFButton = await waitFor( () => screen.getByRole('button', {name:  'Remove BFF'}));
    expect(favoritedBFFButton).toBeInTheDocument();
    //  - delete the contact
    fireEvent.click(screen.getByRole('button', { name: 'Delete'}));
      //  - assert that the contact was removed
    await waitFor( () => expect(screen.queryByText('Jim', {exact:false})).not.toBeInTheDocument());

  });

  it.skip('should be able to add and then favorite a contact', () => {

  });
  it.skip('Should render a heading', () => {

  });
});
