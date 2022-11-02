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
          date
          time
          location
          numberPlayersNeeded
          organizerName
          attending
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
          date
          time
          location
          numberPlayersNeeded
          organizerName
          attending
      }
    }
  }
`;

