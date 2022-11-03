import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
	// set initial form state
	const [userFormData, setUserFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	// set state for form validation
	const [validated] = useState(false);
	// set state for alert
	const [showAlert, setShowAlert] = useState(false);

	const [addUser, { error }] = useMutation(ADD_USER);

	useEffect(() => {
		if (error) {
			setShowAlert(true);
		} else {
			setShowAlert(false);
		}
	}, [error]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		// check if form has everything (as per react-bootstrap docs)
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await addUser({ variables: { ...userFormData } });

			console.log(data);

			Auth.login(data.addUser.token);
		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}

		setUserFormData({
			username: "",
			email: "",
			password: "",
		});
	};

	return (
		<section className="cork-board loginForm">
			<div className="login-background">
				<h1 className="event-header">Sign Up to get playing!!</h1>
			</div>
			<div className="formGroupBackground">
				<>
					{/* This is needed for the validation functionality above */}
					<Form
						className="formGroup"
						noValidate
						validated={validated}
						onSubmit={handleFormSubmit}>
						{/* show alert if server response is bad */}
						<Alert
							dismissible
							onClose={() => setShowAlert(false)}
							show={showAlert}
							variant="danger">
							Something went wrong with your signup!
						</Alert>

						<Form.Group>
							<Form.Label className="label" htmlFor="username">
								Username
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="Your username"
								name="username"
								onChange={handleInputChange}
								value={userFormData.username}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								Username is required!
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="email">
								Email
							</Form.Label>
							<Form.Control
								className="input"
								type="email"
								placeholder="Your email address"
								name="email"
								onChange={handleInputChange}
								value={userFormData.email}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								Email is required!
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label className="label" htmlFor="password">
								Password
							</Form.Label>
							<Form.Control
								className="input"
								type="password"
								placeholder="Your password"
								name="password"
								onChange={handleInputChange}
								value={userFormData.password}
								required
							/>
							<Form.Control.Feedback className="feedback" type="invalid">
								Password is required!
							</Form.Control.Feedback>
						</Form.Group>
						<Button
							className="loginBtn button:hover "
							disabled={
								!(
									userFormData.username &&
									userFormData.email &&
									userFormData.password
								)
							}
							type="submit"
							variant="success">
							Game On!
						</Button>
					</Form>
				</>
			</div>
		</section>
	);
};

export default Signup;
