import { useQuery, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

// import Event from "../components/Event";
import { QUERY_ME, QUERY_SINGLE_EVENTS } from "../utils/queries";
import { REMOVE_EVENT, UPDATE_EVENT } from '../utils/mutations';
import Auth from '../utils/auth';

const EditEvent = (props) => {
  const { id: eventId } = useParams();
  const { data } = useQuery(QUERY_SINGLE_EVENTS, {variables: { id: props.id },
    });
  console.log("This is data", data)

  const [eventData, setUpdateFormData] = {
		eventName: data.eventName,
		description: data.description,
		date: data.date,
		time: data.time,
		location: data.location,
		numberPlayersNeeded: data.numberPlayersNeeded,
		organizerName: data.organizerName,
	};

  // const [validated] = useState(false);
  // const { data } = useQuery(QUERY_ME);
  console.log("This is event", eventData)
  const updateEvent = useMutation(UPDATE_EVENT);
  // const removeEvent = useMutation(REMOVE_EVENT);
  // const me = data?.me || [];
  // console.log("This is mydata", me)

  const handleUpdateInput = (event) => {
    const { name, value } = event.target;
    setUpdateFormData({ ...eventData, [name]: value });
  };

  const handleUpdateEvent = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await updateEvent({ variables: { ...eventData }});
      console.log("This is new data", data);
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

    setUpdateFormData({
			eventName: "",
			description: "",
			date: "",
			time: "",
			location: "",
			numberPlayersNeeded: "",
			organizerName: "",
		});
  };

  // const handleDeleteEvent = async (eventId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const response = await removeEvent(eventId, token);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     // const updatedUser = await response.json();
  //     // setUserData(updatedUser);
  //     // // upon success, remove events's id from localStorage
  //     // removeEventId(eventId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

	return (
		<section className="cork-board loginForm">
			<div className="login-background">
				<h1 className="event-header">Update your Event here!</h1>
			</div>
			<div className="formGroupBackground">
				<>
					<Form
						className="formGroup"
						// noValidate
						// validated={validated}
						onSubmit={handleUpdateEvent}>
						{/* <Alert
							dismissible
							onClose={() => setShowAlert(false)}
							show={showAlert}
							variant="danger">
							Something went wrong!
						</Alert> */}
						<Form.Group>
							<h2 className="addEventHeader">Update The Game Plan!</h2>
							<Form.Label className="label" htmlFor="eventName">
								Event Name
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="Name your event"
								name="eventName"
								onChange={handleUpdateInput}
								value={eventData.eventName}
								required
							/>
							{/* <Form.Control.Feedback className="feedback" type="invalid">
								An event name is required!
							</Form.Control.Feedback> */}
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="description">
								Description
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="Describe your event!"
								name="description"
								onChange={handleUpdateInput}
								value={eventData.description}
								required
							/>
							{/* <Form.Control.Feedback className="feedback" type="invalid">
								A description of your event is required!
							</Form.Control.Feedback> */}
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="date">
								Event Date
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="MM/DD/YYYY"
								name="date"
								onChange={handleUpdateInput}
								value={eventData.date}
								required
							/>
							{/* <Form.Control.Feedback className="feedback" type="invalid">
								A date is required!
							</Form.Control.Feedback> */}
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="time">
								Event Time
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="What time does the game begin?"
								name="time"
								onChange={handleUpdateInput}
								value={eventData.time}
								required
							/>
							{/* <Form.Control.Feedback className="feedback" type="invalid">
								A time for your event is required!
							</Form.Control.Feedback> */}
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="location">
								Location
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="Where is your event?"
								name="location"
								onChange={handleUpdateInput}
								value={eventData.location}
								required
							/>
							{/* <Form.Control.Feedback className="feedback" type="invalid">
								A location is required!
							</Form.Control.Feedback> */}
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="numberPlayersNeeded">
								How many players?
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="examples: 4 players, 5-10 players"
								name="numberPlayersNeeded"
								onChange={handleUpdateInput}
								value={eventData.numberPlayersNeeded}
								required
							/>
							{/* <Form.Control.Feedback className="feedback" type="invalid">
								Number of players is required!
							</Form.Control.Feedback> */}
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="organizerName">
								Organizer's name
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="Enter a name..."
								name="organizerName"
								onChange={handleUpdateInput}
								value={eventData.organizerName}
								required
							/>
							{/* <Form.Control.Feedback className="feedback" type="invalid">
								This field is required!
							</Form.Control.Feedback> */}
						</Form.Group>

						<Button
							className="loginBtn button:hover "
							// disabled={!loggedIn}
							type="submit"
							variant="success">
							Submit The Edits!
						</Button>
					</Form>
				</>
			</div>
		</section>
	);
};


export default EditEvent;