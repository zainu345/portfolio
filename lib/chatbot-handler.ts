// lib/chatbot-handler.ts 

// Your portfolio context for Gemini
const PORTFOLIO_CONTEXT = `
You are an AI assistant representing Abdul Aziz, a Senior Software Engineer & Team Lead. 
Answer questions about him in a professional, friendly, and informative way. Keep responses short, concise, and conversational. 
Do not use asterisks, quotation marks, or excessive formatting. Use simple, clean text.

PERSONAL INFO:
- Name: Abdul Aziz
- Title: Senior Software Engineer & Team Lead
- Location: Lahore, Punjab, Pakistan
- Education: BS Computer Science from PUCIT (Punjab University Lahore, 2019-2023, CGPA 3.53)
- Social Handle: @connect2abdulaziz (all platforms)
- Languages: Urdu, Pashto, English

PERSONAL INTERESTS & HOBBIES:
- Sports: Cricket enthusiast, big fan of Babar Azam and Pakistan cricket team
- Beverages: Coffee and tea lover
- Outdoor: Hiking and exploring around Lahore
- Entertainment: Enjoys drama movies and football watching
- Games: Chess player, admires Mikhail Tal's playing style
- Lifestyle: Proud of Lahore heritage and culture

CURRENT ROLES (2025):
- Senior Software Engineer & Team Lead at Developer Tag
- Software Engineer at DiveScale

PREVIOUS EXPERIENCE:
- Associate Software Engineer at Kwanso (June 2024 - Dec 2024)
- Trainee Engineer at Pyflow Labs (March 2024 - June 2024)
- Teaching Assistant at PUCIT (2020-2023)

TECHNICAL SKILLS:
Frontend: React (85%), Next.js (95%), TypeScript (90%), Tailwind (85%)
Backend: Node.js (95%), Express (95%), MongoDB (85%), PostgreSQL (90%)
AI/ML: LangChain (75%), OpenAI API (85%), LLM Integration (95%)
DevOps: Docker (95%), AWS (75%), CI/CD (70%)
Languages: JavaScript (90%), TypeScript (90%), Python (80%), C++ (90%)

MAJOR CLIENT PROJECTS:
- sellrgrid.com: E-commerce platform with RBAC and payment integration
- proteinwriter.com: AI-powered content management with real-time features
- nordsecpro.com: Security platform with DevOps and AWS architecture

PORTFOLIO PROJECTS:
- Voice Craft: AI voice cloning system (Final Year Project)
- 4Corners Legal GPT: Legal document summarization platform
- SettleEase: Mobile app for helping newcomers
- Blog platforms, invoice systems, and various web applications

EXPERTISE AREAS:
- Full-stack development with MERN stack
- AI/LLM integration using LangChain and OpenAI API
- DevOps and cloud architecture with Docker and AWS
- MongoDB optimization and WebSocket implementation
- Team leadership and mentoring

Always respond as if you're representing Abdul Aziz professionally. Be helpful, informative, and encourage contact through @connect2abdulaziz.
Keep responses short (2-4 sentences maximum), conversational, and without special formatting like asterisks or quotes.
`;

// Gemini API integration
async function queryGemini(userMessage: string): Promise<string | null> {
  try {
    const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      console.error('Gemini API key not found');
      return null;
    }

    const prompt = `${PORTFOLIO_CONTEXT}

User Question: ${userMessage}

Please provide a short, concise, and professional response about Abdul Aziz (2-4 sentences maximum). 
Keep it conversational and natural. Do not use asterisks, quotation marks, bullet points, or special formatting. 
Use plain text only. If the question is about contacting Abdul, mention his social handle @connect2abdulaziz.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200, // Reduced for shorter responses
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API error:', response.status, errorData);
      return null;
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      let cleanResponse = data.candidates[0].content.parts[0].text;
      
      // Clean up formatting - remove asterisks, quotes, and excessive formatting
      cleanResponse = cleanResponse
        .replace(/\*\*/g, '') // Remove bold markdown
        .replace(/\*/g, '') // Remove asterisks
        .replace(/"/g, '') // Remove quotes
        .replace(/'/g, '') // Remove single quotes
        .replace(/`/g, '') // Remove backticks
        .replace(/#{1,6}\s/g, '') // Remove markdown headers
        .replace(/\n\s*\n/g, '\n') // Remove extra line breaks
        .replace(/^\s+|\s+$/g, '') // Trim whitespace
        .replace(/\s+/g, ' '); // Normalize spaces
      
      return cleanResponse;
    }
    
    return null;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return null;
  }
}

// Smart fallback responses (cleaned without formatting)
const fallbackResponses = {
  skills: `Abdul's core expertise includes:

Full-Stack Development: MERN stack with 95% proficiency in Node.js and Express
AI/LLM Integration: LangChain (75%), OpenAI API (85%), RAGs, and prompt engineering  
DevOps: Docker (95%), AWS (75%), CI/CD pipelines
Backend: MongoDB aggregation, WebSockets, RBAC systems
Leadership: Team management and mentoring experience

He's particularly strong in MongoDB query optimization and building scalable architectures.`,

  projects: `Abdul has built impressive production applications:

Client Projects:
• sellrgrid.com - E-commerce platform with advanced RBAC
• proteinwriter.com - AI-powered content management  
• nordsecpro.com - Security platform with DevOps integration

Notable Projects:
• Voice Craft - AI voice cloning system (Final Year Project)
• 4Corners Legal GPT - Document summarization platform
• SettleEase - Mobile app for newcomers

All projects showcase his expertise in MERN stack, AI integration, and scalable architecture.`,

  experience: `Abdul's career shows steady growth:

Current (2025):
• Senior Software Engineer & Team Lead at Developer Tag
• Software Engineer at DiveScale

Previous:
• Associate Software Engineer at Kwanso (2024)
• Trainee Engineer at Pyflow Labs (2024)
• Teaching Assistant at PUCIT (2020-2023)

His experience spans from hands-on coding to leading development teams.`,

  contact: `You can connect with Abdul through:

LinkedIn: linkedin.com/in/connect2abdulaziz
GitHub: github.com/connect2abdulaziz  
LeetCode: leetcode.com/connect2abdulaziz
All platforms: @connect2abdulaziz

He's currently open for opportunities, consulting work, and collaboration on AI/ML projects.`,

  hobbies: `Abdul's personal interests include:

Sports: Big cricket fan, loves Babar Azam and Pakistan team
Beverages: Coffee and tea enthusiast
Activities: Hiking around Lahore, exploring local culture
Entertainment: Drama movies and football watching
Games: Chess player, admires Mikhail Tal's playing style
Languages: Fluent in Urdu, Pashto, and English`,

  default: `I'm Abdul's AI assistant! I can tell you about his:

Technical Skills: MERN stack, AI/LLM integration, DevOps
Projects: sellrgrid.com, proteinwriter.com, Voice Craft  
Experience: Senior Software Engineer & Team Lead
Personal: Cricket fan, coffee lover, chess player from Lahore
Contact: @connect2abdulaziz on all platforms

What would you like to know about Abdul Aziz?`
};

// Smart fallback function
function getSmartFallback(userInput: string): string {
  const input = userInput.toLowerCase();
  
  if (input.includes('skill') || input.includes('technology') || input.includes('programming') || input.includes('tech stack')) {
    return fallbackResponses.skills;
  }
  
  if (input.includes('project') || input.includes('work') || input.includes('built') || input.includes('portfolio') || input.includes('sellrgrid') || input.includes('proteinwriter')) {
    return fallbackResponses.projects;
  }
  
  if (input.includes('experience') || input.includes('career') || input.includes('job') || input.includes('company') || input.includes('role')) {
    return fallbackResponses.experience;
  }
  
  if (input.includes('contact') || input.includes('reach') || input.includes('hire') || input.includes('linkedin') || input.includes('email')) {
    return fallbackResponses.contact;
  }

  if (input.includes('hobby') || input.includes('hobbies') || input.includes('cricket') || input.includes('chess') || input.includes('coffee') || input.includes('personal') || input.includes('interest')) {
    return fallbackResponses.hobbies;
  }

  return fallbackResponses.default;
}

// Conversation context tracking
let conversationContext: string[] = [];

// Main chat handler with Gemini integration
export const handleChatCommand = async (userMessage: string): Promise<string> => {
  // Add user message to context
  conversationContext.push(userMessage.toLowerCase());
  
  // Keep only last 5 messages for context
  if (conversationContext.length > 5) {
    conversationContext = conversationContext.slice(-5);
  }

  // Special commands
  if (userMessage.toLowerCase().includes('exit') || userMessage.toLowerCase().includes('quit') || userMessage.toLowerCase().includes('bye')) {
    conversationContext = [];
    return "Thanks for chatting with me! Feel free to use other terminal commands like skills, projects, or experience to explore Abdul's portfolio. Type chat again anytime to continue our conversation!";
  }
  
  if (userMessage.toLowerCase().includes('help') || userMessage === '?') {
    return `I'm Abdul's AI assistant! I can help you learn about:

Try asking me:
• What are Abdul's main skills?
• Tell me about his AI projects
• What's his experience with React?
• How can I contact him?
• What companies has he worked for?
• Can he build e-commerce websites?
• What are his hobbies?
• Does he like cricket?

I understand natural questions!
Just ask me anything about Abdul's background, skills, projects, personal interests, or how to get in touch with him.

Type exit when you're done chatting.`;
  }

  // Try Gemini API first
  try {
    const geminiResponse = await queryGemini(userMessage);
    
    if (geminiResponse && geminiResponse.length > 20) {
      return geminiResponse;
    }
  } catch (error) {
    console.log('Gemini API failed, using fallback response');
  }
  
  // Use smart fallback if Gemini fails
  return getSmartFallback(userMessage);
};

// Synchronous version for immediate fallback (if needed)
export const handleChatCommandSync = (userMessage: string): string => {
  // Special commands
  if (userMessage.toLowerCase().includes('exit') || userMessage.toLowerCase().includes('quit')) {
    conversationContext = [];
    return "Thanks for chatting! Feel free to use other commands like skills, projects, or experience to explore Abdul's portfolio. Type chat again anytime!";
  }
  
  if (userMessage.toLowerCase().includes('help')) {
    return `I'm Abdul's AI assistant! Ask me about:

Try asking:
• What are Abdul's main skills?
• Tell me about his projects  
• What's his AI experience?
• How can I contact him?
• What are his hobbies?

I'll do my best to give you detailed, helpful answers!`;
  }

  return getSmartFallback(userMessage);
};

// Initialize chat session
export const initializeChatSession = (): string => {
  conversationContext = [];
  return `Hi! I'm Abdul's AI assistant!

I can tell you about:
• His technical expertise (MERN stack, AI/LLM, DevOps)
• Amazing projects like sellrgrid.com, proteinwriter.com, Voice Craft
• Career journey from CS student to Senior Software Engineer  
• Personal interests like cricket, chess, coffee, and hiking in Lahore
• How to get in touch for opportunities or collaboration

Just ask me naturally:
• What are his main skills?
• Tell me about his AI projects
• How experienced is he with React?
• Can he build mobile apps?
• Does he like cricket?
• What are his hobbies?

What would you like to know about Abdul Aziz?

Type help for more guidance or exit to end our chat.`;
};