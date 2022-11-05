// import { useQuery, useMutation } from '@apollo/client';
// import React from 'react';
// import { Form, Button } from "react-bootstrap";

// // import Event from "../components/Event";
// import QUERY_ME from "../utils/queries";
// import { REMOVE_EVENT, UPDATE_EVENT } from '../utils/mutations';
// import Auth from '../utils/auth';

const EditEvent = () => {
  // const { loading, data } = useQuery(QUERY_ME);
  // const updateEvent = useMutation(UPDATE_EVENT);
  // const removeEvent = useMutation(REMOVE_EVENT);
  // const userData = data?.userData || [];

  // const handleUpdateEvent = async (eventId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const response = await updateEvent(eventId, token);

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
  // };

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

  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }

    
	return (
		<section className="cork-board loginForm">
			{/* <div className="login-background">
				<h1 className="event-header">List your Event here!</h1>
			</div> */}
			<div className="formGroupBackground">
				<>
					{/* <Form
						className="formGroup"
						noValidate
						validated={validated}
						onSubmit={handleFormSubmit}>
						<Alert
							dismissible
							onClose={() => setShowAlert(false)}
							show={showAlert}
							variant="danger">
							Something went wrong!
						</Alert>
						<Form.Group>
							<h2 className="addEventHeader">The Game Plan!</h2>
							<Form.Label className="label" htmlFor="eventName">
								Event Name
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="Name your event"
								name="eventName"
								onChange={handleInputChange}
								value={eventFormData.eventName}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								An event name is required!
							</Form.Control.Feedback>
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
								onChange={handleInputChange}
								value={eventFormData.description}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								A description of your event is required!
							</Form.Control.Feedback>
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
								onChange={handleInputChange}
								value={eventFormData.date}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								A date is required!
							</Form.Control.Feedback>
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
								onChange={handleInputChange}
								value={eventFormData.time}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								A time for your event is required!
							</Form.Control.Feedback>
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
								onChange={handleInputChange}
								value={eventFormData.location}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								A location is required!
							</Form.Control.Feedback>
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
								onChange={handleInputChange}
								value={eventFormData.numberPlayersNeeded}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								Number of players is required!
							</Form.Control.Feedback>
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
								onChange={handleInputChange}
								value={eventFormData.organizerName}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								This field is required!
							</Form.Control.Feedback>
						</Form.Group>

						<Button
							className="loginBtn button:hover "
							// disabled={!loggedIn}
							type="submit"
							variant="success">
							Post your game!
						</Button>
					</Form> */}
				</>
			</div>
		</section>
	);
};


export default EditEvent;