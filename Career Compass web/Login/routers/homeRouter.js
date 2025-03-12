const express = require("express");
const Router = express.Router();
const homeSchema = require("../models/homeSchema");

// Render the registration form
Router.get("/", (req, res) => {
	res.render("register", { title: "Fill Form", password: "", email: "" });
});

// Handle user registration
Router.post("/register", async (req, res) => {
	try {
		const { name, number, email, password, cpassword } = req.body;

		// Check if passwords match
		if (password !== cpassword) {
			req.session.error = "Passwords do not match";
			return res.redirect('/signup-form');
		}

		// Check if user already exists
		const existingUser = await homeSchema.findOne({ email: email });
		if (existingUser) {
			req.session.error = "Email already registered. Please login instead.";
			return res.redirect('/login-form');
		}

		// Create new user
		const userData = new homeSchema({
			name,
			number,
			email,
			password
		});

		await userData.save();
		
		// Auto-login after successful registration
		req.session.userId = userData._id;
		req.session.userName = userData.name;
		res.redirect('/dashboard');

	} catch (error) {
		console.error('Registration error:', error);
		req.session.error = "An error occurred during registration";
		res.redirect('/signup-form');
	}
});

// Handle user login
Router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await homeSchema.findOne({ email: email });

		if (!user) {
			req.session.error = "Email not found";
			return res.redirect('/login-form');
		}

		if (password !== user.password) {
			req.session.error = "Incorrect password";
			return res.redirect('/login-form');
		}

		// Set session variables
		// Set session
		req.session.userId = user._id;
		req.session.userName = user.name;
		res.redirect('/dashboard');

	} catch (error) {
		console.error('Login error:', error);
		req.session.error = "An error occurred during login";
		res.redirect('/login-form');
	}
});

// Protected route middleware
const checkAuth = (req, res, next) => {
	if (req.session && req.session.userId) {
		return next();
	}
	res.redirect('/');
};

// Dashboard route
Router.get("/dashboard", checkAuth, (req, res) => {
	res.render("dashboard", { name: req.session.userName });
});

// Profile route
Router.get("/profile", checkAuth, (req, res) => {
	res.render("profile", { name: req.session.userName });
});

// Career Path route
Router.get("/career-path", checkAuth, (req, res) => {
	res.render("career-path", { name: req.session.userName });
});

// AI Chatbot route
Router.get("/chat", checkAuth, (req, res) => {
	res.render("chat", { name: req.session.userName });
});

// Skill Gap Analysis route
Router.get("/skill-gap", checkAuth, (req, res) => {
	res.render("skill-gap", { name: req.session.userName });
});

// Logout route
Router.get("/logout", (req, res) => {
	req.session.destroy(() => {
		res.redirect("/");
	});
});

// Render the iq.ejs page
// Render the iq.ejs page
Router.get("/iq", (req, res) => {
	res.render("iq"); // Renders 'views/iq.ejs'
});

module.exports = Router;
