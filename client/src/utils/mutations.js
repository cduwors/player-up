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
`;

export const ADD_PLAYER = gql`
	mutation addPlayer($eventId: ID!) {
		addPlayer(eventId: $eventId) {
			_id
			username
			attending {
				_id
				username
			}
		}
	}
`
export const ADD_EVENT = gql`
  mutation addEvent($input: EventInput) {
    addEvent(input: $input) {
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

export const UPDATE_EVENT = gql`
  mutation updateEvent($eventId: ID!, $input: EventInput) {
    updateEvent(eventId: $eventId, input: $input) {
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

export const REMOVE_EVENT = gql`
  mutation removeEvent($eventId: ID!,) {
    removeEvent(eventId: $eventId) {
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
