# SkillBridge
Bridging Knowledge Gaps with AI-Powered Personalized Learning Paths

✅ Features
🧪 Skill gap quiz with 3 beginner-friendly Python questions
🤖 AI-generated roadmap using Groq's LLaMA 3 model

📊 Real-time quiz-to-roadmap conversion

💾 Answer persistence using localStorage

🎨 Responsive and clean UI with hover effects

⚡ Fast build & performance using Vite

📈 Scope
Extendable for other programming languages (Java, JS, C++)

Can integrate difficulty levels and timed quizzes

Potential for progress tracking with user login

Add multi-step or adaptive learning recommendations

🛠 Tech Stack
Category	                    Tool / Library
Frontend	                    React.js (Vite)
Styling	                        HTML + CSS
AI Backend	                    Groq API (LLaMA 3)
API Calling	                    Axios
Routing	                        React Router
Deployment	                    Vercel
State	                        React Hooks, localStorage


⚙️ How It Works
User takes a 3-question Python quiz.

Their answers are stored in localStorage.

On submission, a prompt is generated and sent to Groq’s LLaMA 3 via Axios.

The response includes a personalized 3-step roadmap.

The result is displayed in a clean UI.