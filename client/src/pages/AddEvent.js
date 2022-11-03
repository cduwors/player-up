// see SignupForm.js for comments
import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../utils/mutations";

import Auth from "../utils/auth";

const AddEvent = () => {
	const [eventFormData, setEventFormData] = useState({
		eventName: "",
		description: "",
		date: "",
		time: "",
		location: "",
		numberPlayersNeeded: "",
		organizerName: "",
	});
	// const [validated] = useState(false);
	// const [showAlert, setShowAlert] = useState(false);
	const [event, { error }] = useMutation(ADD_EVENT);

	// useEffect(() => {
	// 	if (error) {
	// 		setShowAlert(true);
	// 	} else {
	// 		setShowAlert(false);
	// 	}
	// }, [error]);

	// const handleInputChange = (event) => {
	// 	const { name, value } = event.target;
	// 	setEventFormData({ ...userEventData, [name]: value });
	// };

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		// check if form has everything (as per react-bootstrap docs)
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await event({ variables: { ...eventFormData } });

			console.log(data);
			// Auth.login(data.login.token);
		} catch (err) {
			console.error(err);
		}

		setEventFormData({
			eventName: "",
			description: "",
			date: "",
			time: "",
			location: "",
			numberPlayersNeeded: "",
			organizerName: "",
		});
	};

	return (
		<section className="cork-board loginForm">
			<div className="login-background">
				<h1 className="event-header">List your Event here!</h1>
			</div>
			<div className="formGroupBackground">
				<>
					<Form
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
					</Form>
				</>
			</div>
		</section>
	);
};

export default AddEvent;
