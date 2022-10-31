import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      email
      phone
      savedEvents
        events {
          _id
          eventName
          description
          dataAndTime
          location
          numberPlayersNeeded
          organizerNames
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
        dataAndTime
        location
        numberPlayersNeeded
        organizerNames
    }
  }
`;
