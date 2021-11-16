import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($title: String, $about: String, $contacts: String, $fullname: String, $nb: String) {
    updateUser( title: $title, about: $about, contacts: $contacts, fullname: $fullname, nb: $nb) {
      username
      email
      title
      about
      contacts
      fullname
      nb
    }
  }
`;