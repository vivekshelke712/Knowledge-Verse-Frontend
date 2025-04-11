import React from "react";

const AIToolsPage = () => {
  const tools = [
    {
      name: "ChatGPT",
      purpose:
        "Conversational AI for answering queries, tutoring, and content generation.",
    },
    {
      name: "GitHub Copilot",
      purpose: "AI pair programmer that helps write code inside your IDE.",
    },
    {
      name: "DALL·E",
      purpose: "Generate images from text prompts using deep learning.",
    },
    { name: "Grammarly", purpose: "AI-powered grammar and writing assistant." },
    {
      name: "Notion AI",
      purpose:
        "Enhance your notes and documents with writing suggestions, summaries, and formatting.",
    },
    {
      name: "Jasper",
      purpose: "Content generation for marketers, bloggers, and creatives.",
    },
    {
      name: "Copy.ai",
      purpose: "Create marketing copy and social media content.",
    },
    {
      name: "Tome",
      purpose: "AI storytelling tool to make presentation decks quickly.",
    },
    {
      name: "Descript",
      purpose: "AI-based audio and video editing platform with transcription.",
    },
    {
      name: "Runway ML",
      purpose:
        "Creative suite with AI tools for image/video editing and generation.",
    },
    {
      name: "Pictory",
      purpose: "Transform blog posts or scripts into engaging videos using AI.",
    },
    {
      name: "Synthesia",
      purpose: "Create professional videos with AI avatars and voiceovers.",
    },
    {
      name: "Lumen5",
      purpose: "Turn text content into engaging videos with AI assistance.",
    },
    {
      name: "SurferSEO",
      purpose:
        "Optimize written content for SEO using AI-driven recommendations.",
    },
    { name: "Frase", purpose: "AI-powered content research and SEO tool." },
    {
      name: "Quillbot",
      purpose: "Paraphrasing and summarizing tool for writing enhancement.",
    },
    {
      name: "Wordtune",
      purpose: "AI writing assistant that helps rewrite and improve clarity.",
    },
    {
      name: "Otter.ai",
      purpose:
        "Meeting transcription and notes generator with collaboration tools.",
    },
    {
      name: "Fireflies.ai",
      purpose: "Automated meeting transcription and search for spoken content.",
    },
    {
      name: "Supernormal",
      purpose: "Create meeting notes and share with your team using AI.",
    },
    {
      name: "Murf",
      purpose:
        "Create lifelike voiceovers for videos, presentations, and more.",
    },
    {
      name: "Speechify",
      purpose: "Text-to-speech reader for web, PDFs, and documents.",
    },
    {
      name: "ElevenLabs",
      purpose: "AI-powered voice synthesis for lifelike narration.",
    },
    {
      name: "Replika",
      purpose: "AI chatbot companion with emotional intelligence.",
    },
    {
      name: "Character.ai",
      purpose: "Conversational AI characters for fun and interaction.",
    },
    {
      name: "Kuki",
      purpose:
        "AI chatbot with a personality used for entertainment and companionship.",
    },
    {
      name: "Midjourney",
      purpose:
        "Text-to-image generation platform used for stunning art creations.",
    },
    {
      name: "Leonardo AI",
      purpose:
        "Create production-ready game assets, characters, and more with AI.",
    },
    {
      name: "Play.ht",
      purpose:
        "Create voiceovers using realistic AI voices in multiple languages.",
    },
    {
      name: "Synthesys",
      purpose: "Convert text to voice or video with realistic avatars.",
    },
    {
      name: "TTSReader",
      purpose: "Simple tool to read text aloud using AI voices.",
    },
    {
      name: "Hugging Face",
      purpose: "AI models and datasets hosting platform for ML and NLP tasks.",
    },
    {
      name: "Cohere",
      purpose:
        "Natural language understanding models for developers and enterprises.",
    },
    {
      name: "OpenAI API",
      purpose:
        "Powerful language models for developers to integrate AI into apps.",
    },
    {
      name: "Google Vertex AI",
      purpose: "End-to-end ML platform for building and deploying AI models.",
    },
    {
      name: "IBM Watson",
      purpose: "Suite of enterprise-ready AI services and tools for business.",
    },
    {
      name: "Microsoft Azure AI",
      purpose:
        "AI services from Microsoft for speech, vision, language, and decision-making.",
    },
    {
      name: "Claude (Anthropic)",
      purpose: "Friendly, safe conversational AI alternative to ChatGPT.",
    },
    {
      name: "Bard (Google)",
      purpose:
        "Conversational AI designed to collaborate, answer questions, and create content.",
    },
    {
      name: "Waldo",
      purpose: "Automate mobile testing with AI-powered test recorder.",
    },
    {
      name: "Testim",
      purpose: "Use AI to create and maintain software test automation.",
    },
    {
      name: "Magenta",
      purpose: "Use AI to make music, art, and generate creative content.",
    },
    {
      name: "Soundraw",
      purpose:
        "AI music generator that allows users to create original soundtracks.",
    },
    {
      name: "AIVA",
      purpose: "AI composing emotional soundtracks for video, games, and ads.",
    },
    {
      name: "Lalal.ai",
      purpose:
        "AI audio splitter to remove vocals, drums, and more from audio.",
    },
    {
      name: "Remini",
      purpose: "AI photo enhancer for improving image quality.",
    },
    {
      name: "Remove.bg",
      purpose: "Automatically remove image backgrounds using AI.",
    },
    {
      name: "Cleanup.pictures",
      purpose: "Remove unwanted elements from photos with AI inpainting.",
    },
    {
      name: "Let's Enhance",
      purpose: "Improve image resolution and quality using AI upscaling.",
    },
    {
      name: "Kaiber",
      purpose: "Create music videos with AI from your audio and art direction.",
    },
    {
      name: "Papercup",
      purpose:
        "AI dubbing platform to translate and voice content in other languages.",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        🧠 AI Tools Library
      </h1>
      <p className="text-gray-600 mb-6">
        A curated list of powerful AI tools to accelerate your productivity,
        enhance creativity, and boost learning. Explore them and integrate into
        your daily workflow.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {tool.name}
            </h2>
            <p className="text-sm text-blue-700">{tool.purpose}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIToolsPage;
