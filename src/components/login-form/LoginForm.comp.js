import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import './loginForm.style.css'

export const LoginForm = () => {
    return (
        <div className="login-form">
	
			<Card className="p-1">
		
				<Form >
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							name="email"
							type="email"
							placeholder="Enter email"
							required
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							name="password"
							type="password"
							placeholder="Password"
							required
						/>
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>

				<a href="/reset-password" className="text-right">
					Forgot Password ?
				</a>
			</Card>
		</div>
    )
}
