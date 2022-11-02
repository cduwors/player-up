import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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
          attending {
            _id
            username
          }
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
          attending {
            _id
            username
          }
      }
    }
  }
`;

export const QUERY_ALL_EVENTS = gql`
  {
      events {
        _id
          eventName
          description
          date
          time
          location
          numberPlayersNeeded
          organizerName
          attending {
            _id
            username
          }
      }
    }
`;

export const QUERY_USER_EVENTS = gql`
  { query events($username: String!)
      events(username: $username) {
        _id
          eventName
          description
          date
          time
          location
          numberPlayersNeeded
          organizerName
          attending {
            _id
            username
          }
      }
    }
`;

export const QUERY_SINGLE_EVENTS = gql`
  { query events($id: ID!)
      events(_id: $id) {
        _id
          eventName
          description
          date
          time
          location
          numberPlayersNeeded
          organizerName
          attending {
            _id
            username
          }
      }
    }
`;