import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { UPDATE_EVENT } from '../utils/mutations';
// import { QUERY_SINGLE_EVENTS } from '../utils/queries';
// import Auth from '../utils/auth';

let variablesGlobal;
let loadCounter = 0;

const EditEvent = ( variables ) => {
	if (loadCounter === 0) {
		variablesGlobal = variables;
		loadCounter++
	}

  const [eventID, setEventUpdate] = useState({
			eventId: variablesGlobal.variables.eventID._id,
			eventName: variablesGlobal.variables.eventID.eventName,
			description: variablesGlobal.variables.eventID.description,
			date: variablesGlobal.variables.eventID.date,
			time: variablesGlobal.variables.eventID.time,
			location: variablesGlobal.variables.eventID.location,
			numberPlayersNeeded: variablesGlobal.variables.eventID.numberPlayersNeeded,
			organizerName: variablesGlobal.variables.eventID.organizerName,
		
		});

const handleInputChange = (event) => {
	const { name, value } = event.target;
	setEventUpdate({ ...eventID, [name]: value });
	console.log("This is eventID after setEventUpdate", eventID);
};

  const [ updateEvent ] = useMutation(UPDATE_EVENT);

const handleFormSubmit = async (event) => {
	event.preventDefault();

	try {
		const { data } = await updateEvent({ variables: { ...eventID } });
		if (data) {
			setEventUpdate({
				eventId: data.updateEvent._id,
				eventName: data.updateEvent.eventName,
				description: data.updateEvent.description,
				date: data.updateEvent.date,
				time: data.updateEvent.time,
				location: data.updateEvent.location,
				numberPlayersNeeded: data.updateEvent.numberPlayersNeeded,
				organizerName: data.updateEvent.organizerName,
			});			
			console.log("success?", data);			
			return(`./events`);
		}
	} catch (err) {
		console.log(err);
	}
};

	return (
		<section className="cork-board loginForm">
			<div className="login-background">
				<h1 className="event-header">Update your Event here!</h1>
			</div>
			<div className="formGroupBackground">
				<>
					<Form
						className="formGroup" 
						onSubmit={handleFormSubmit}
            		>
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
								value={eventID.eventName}
								onChange={handleInputChange}
								required
							/>
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
								value={eventID.description}
								onChange={handleInputChange}
								required
							/>
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
								value={eventID.date}
								onChange={handleInputChange}
								required
							/>
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
								value={eventID.time}
								onChange={handleInputChange}
								required
							/>
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
								value={eventID.location}
								onChange={handleInputChange}
								required
							/>
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
								value={eventID.numberPlayersNeeded}
								onChange={handleInputChange}
								required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="organizerName">
								Organizer's name
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder={eventID.organizerName}
								name="organizerName"
								value={eventID.organizerName}
								disabled={true}
							/>
						</Form.Group>

						<Button
							className="loginBtn button:hover "
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