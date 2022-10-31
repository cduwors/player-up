import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      eventCount
      events {
        _id
          eventName
          description
          dateAndTime
          location
          numberPlayersNeeded
          organizerNames
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
        events {
          _id
          eventName
          description
          dateAndTime
          location
          numberPlayersNeeded
          organizerNames
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      eventCount
      event {
        _id
        eventName
      }
    }
  }
`;
