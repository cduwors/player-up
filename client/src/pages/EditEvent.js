import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
// import Event from "../components/Event";
import GET_ME from "../utils/queries";
import { REMOVE_EVENT, UPDATE_EVENT } from '../utils/mutations';
import Auth from '../utils/auth';

const EditEvent = () => {
  const { loading, data } = useQuery(GET_ME);
  const [updateEvent, { error }] = useMutation(UPDATE_EVENT);
  const removeEvent = useMutation(REMOVE_EVENT);
  const userData = data?.userData || [];

  const handleUpdateEvent = async (eventId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeEvent(eventId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // const updatedUser = await response.json();
      // setUserData(updatedUser);
      // // upon success, remove events's id from localStorage
      // removeEventId(eventId);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeEvent(eventId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // const updatedUser = await response.json();
      // setUserData(updatedUser);
      // // upon success, remove events's id from localStorage
      // removeEventId(eventId);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

    
  return (
    <section className="cork-board">
      <div className="profile-background">
        <h1 className="event-header">{}</h1> 
        <input class="textarea" name="event-header" type="text"/>
      </div>
      <button type="submit" class="button is-primary">Save event</button>
      <button type="button" class="button is-danger delete-post-btn">Delete event</button>

    </section>
  );
};


export default EditEvent;