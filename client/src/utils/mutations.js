import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
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
        email
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($event: SavedEventInput!) {
    addEvent(event: $event) {
      id
      username
      email
      eventCount
      savedEvents {
        _id
        eventName
        description
        date
        time
        location
        numberPlayersNeeded
        organizerName
      }
    }
  }
`;

export const REMOVE_EVENT = gql`
  mutation removeEvent($eventId: String!) {
    removeEvent(eventId: $eventId) {
      _id
      username
    //   email
    //   eventCount
      savedEvents {
        _id
        eventName
        // description
        // date
        // time
        // location
        // numberPlayersNeeded
        // organizerName
      }
    }
  }
`;
