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

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String!, $password: String!) {
    updateUser(username: $username, email: $email, password: $password) {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PLAYER = gql`
	mutation addPlayer($id: ID!) {
		addPlayer(playerId: $id) {
			_id
			username
		}
	}
`
export const ADD_EVENT = gql`
  mutation addEvent($id: ID!) {
    addEvent(eventsId: $id) {
      id
      eventName
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
		attending {
            _id
            username
          }
      }
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation updateEvent($events: SavedEventInput!) {
    updateEvent(events: $event) {
      id
      eventName
      email
      event
    }
  }
`;

export const REMOVE_EVENT = gql`
  mutation removeEvent($eventId: String!) {
    removeEvent(eventId: $eventId) {
      _id
      eventName
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
