# Career Compass

## Overview
Career Compass is an AI-powered Career Mapping Tool designed to assist undergraduate tech students in exploring and identifying the right career path through an engaging and interactive platform.

**Disclaimer:** The chatbot and the web project are not integrated as of now. These are two individual projects.

---

## Features
### 1. AI-Powered Career Guidance
- Live AI video consultations
- Personalized career recommendations
- Skills gap analysis
- Interactive Q&A with an AI career advisor

### 2. In-Depth Career Insights
- Exploration of various tech career paths:
  - Software Development
  - Data Analytics
  - Data Science
  - Machine Learning
  - DevOps
  - And more...
- Learning roadmaps for each career path
- Required skills analysis
- Market trends and opportunities

---

## Installation and Setup

### Prerequisites
- **Node.js** (for backend services)
- **Python 3.8 or higher**
- **MongoDB** (for data storage)
- **pip** (Python package manager)

### Installation Steps

#### Setting up the Node.js Backend
1. Navigate to the backend folder:
   ```bash
   cd Login
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

#### Setting up the Python Recommendation System
1. Navigate to the recommendation system folder:
   ```bash
   cd recommendation
   ```
2. Install required dependencies:
   ```bash
   pip install pandas scikit-learn flask
   ```
3. Start the Flask server:
   ```bash
   python app.py
   ```

#### Commands to Setup the Chatbot
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate    # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
5. Run the application:
   ```bash
   streamlit run app.py
   ```

---

## Usage

### Profile Setup
- Complete your personal profile.
- Share your educational background.
- Describe your technical experience.

### Career Assessment
- Answer questions about your interests.
- Specify your preferred work style.
- Define your career goals.

### Career Recommendations
- Receive AI-generated career path suggestions.
- View detailed information about each career option.
- Understand the reasoning behind recommendations.

### Learning Roadmap
- Get a personalized learning path.
- Access structured curriculum recommendations.
- Track your progress.

### Live AI Consultation
- Ask career-related questions.
- Receive real-time guidance.
- Get personalized advice.

---

## Contributing
We welcome contributions! Feel free to fork this repository and submit pull requests with enhancements and bug fixes.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- **WsCube Tech** for platform support.
- **Google's Gemini-Pro AI** for powering the career guidance system.
- **Streamlit** for the interactive web interface.

