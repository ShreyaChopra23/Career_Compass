<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Compass</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2, h3 { color: #333; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>Career Compass</h1>
    <p>An AI-powered Career Mapping Tool designed to help undergraduate tech students explore and identify the right career path engagingly and interactively.</p>

    <h2>Features</h2>
    <h3>1. AI-Powered Career Guidance</h3>
    <ul>
        <li>Live AI video consultations</li>
        <li>Personalized career recommendations</li>
        <li>Skills gap analysis</li>
        <li>Interactive Q&A with AI career advisor</li>
    </ul>

    <h3>2. In-Depth Career Insights</h3>
    <ul>
        <li>Detailed exploration of tech career paths:</li>
        <ul>
            <li>Software Development</li>
            <li>Data Analytics</li>
            <li>Data Science</li>
            <li>Machine Learning</li>
            <li>DevOps</li>
        </ul>
        <li>Learning roadmaps for each career path</li>
        <li>Required skills analysis</li>
        <li>Market trends and opportunities</li>
    </ul>

    <h2>Getting Started</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Python 3.8 or higher</li>
        <li>Node.js & npm</li>
        <li>MongoDB installed and running</li>
    </ul>

    <h3>Installation Packages Required</h3>
    <ul>
        <li><strong>Node.js dependencies:</strong> express, MongoDB, mongoose, body-parser, ejs, nodemon</li>
        <li><strong>Python dependencies:</strong> pandas, scikit-learn, flask</li>
    </ul>

    <h2>Installation</h2>
    <p><strong>1. Clone the repository:</strong></p>
    <pre>git clone [repository-url]
cd Career_Compass</pre>

    <p><strong>2. Start the Node.js server:</strong></p>
    <pre>cd Login
npm install  # Install dependencies
npm run dev  # Start the Node.js server</pre>

    <p><strong>3. Start the Python recommendation server:</strong></p>
    <pre>cd recommendation
pip install pandas scikit-learn flask  # Install required Python packages
python app.py  # Start the Python server</pre>

    <p><strong>4. Set up environment variables:</strong></p>
    <pre>Create a .env file in the root directory and add:
GEMINI_API_KEY=your_api_key_here</pre>

    <p><strong>5. Run the application:</strong></p>
    <pre>streamlit run app.py  # If using Streamlit for UI</pre>

    <h2>Usage</h2>
    <ol>
        <li><strong>Profile Setup</strong>
            <ul>
                <li>Complete your personal profile</li>
                <li>Share your educational background</li>
                <li>Describe your technical experience</li>
            </ul>
        </li>
        <li><strong>Career Assessment</strong>
            <ul>
                <li>Answer questions about your interests</li>
                <li>Specify your preferred work style</li>
                <li>Define your career goals</li>
            </ul>
        </li>
        <li><strong>Career Recommendations</strong>
            <ul>
                <li>Receive AI-generated career path suggestions</li>
                <li>View detailed information about each career option</li>
                <li>Understand the reasoning behind recommendations</li>
            </ul>
        </li>
        <li><strong>Learning Roadmap</strong>
            <ul>
                <li>Get a personalized learning path</li>
                <li>Access structured curriculum recommendations</li>
                <li>Track your progress</li>
            </ul>
        </li>
        <li><strong>Live AI Consultation</strong>
            <ul>
                <li>Ask career-related questions</li>
                <li>Receive real-time guidance</li>
                <li>Get personalized advice</li>
            </ul>
        </li>
    </ol>

    <h2>Contributing</h2>
    <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>

    <h2>Acknowledgments</h2>
    <ul>
        <li>WsCube Tech for the platform support</li>
        <li>Google's Gemini-Pro AI for powering the career guidance system</li>
        <li>Streamlit for the interactive web interface</li>
    </ul>
</body>
</html>

