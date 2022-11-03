// see SignupForm.js for comments
import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
	const [userFormData, setUserFormData] = useState({ email: "", password: "" });
	const [validated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [login, { error }] = useMutation(LOGIN_USER);

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
			const { data } = await login({ variables: { ...userFormData } });

			console.log(data);
			Auth.login(data.login.token);
			
		} catch (err) {
			console.error(err);
	

		setUserFormData({
			username: "",
			email: "",
			password: "",
		});
	};

	return (
		<section className="cork-board loginForm">
			<div className="login-background">
				<h1 className="event-header">Login to Play!</h1>
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
							Something went wrong with your login credentials!
						</Alert>
						{/* <Form.Group className="formGroup" > */}
						<Form.Group>
							<Form.Label className="label" htmlFor="email">
								Email
							</Form.Label>
							<Form.Control
								className="input"
								type="text"
								placeholder="Your email"
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
							disabled={!(userFormData.email && userFormData.password)}
							type="submit"
							variant="success">
							Game Time!
						</Button>
						{/* </Form.Group> */}

					</Form>
				</>
			</div>
		</section>
	);
};

export default Login;
