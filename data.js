const tools = [
{
id:1,
name:"ChatGPT",
category:"Writing & Productivity",
short:"AI assistant for writing, coding, and problem solving.",
description:"ChatGPT is a conversational AI that helps generate text, solve problems, explain concepts, and assist in coding. It can draft emails, essays, and creative content. It understands context and gives human-like responses. Professionals use it for research and automation. Beginners use it to learn faster and work smarter.",
link:"https://chat.openai.com"
},

{
id:2,
name:"Claude",
category:"Writing & Productivity",
short:"AI assistant focused on safe and long-form content.",
description:"Claude is an AI tool designed for deep reasoning and long-document processing. It is useful for summarizing PDFs, analyzing research papers, and writing structured content. It is widely used for business documentation. It focuses on safety and contextual understanding.",
link:"https://claude.ai"
},

{
id:3,
name:"Gemini",
category:"Writing & Productivity",
short:"Google AI assistant for research and productivity.",
description:"Gemini is Google’s AI assistant integrated with Google services. It helps generate text, summarize emails, create presentations, and research online content. It integrates smoothly with Google Workspace tools. It is useful for students and professionals alike.",
link:"https://gemini.google.com"
},

{
id:4,
name:"Notion AI",
category:"Productivity",
short:"AI writing assistant inside Notion workspace.",
description:"Notion AI enhances productivity by generating notes, summaries, and documents inside Notion. It helps in brainstorming ideas, rewriting content, and organizing knowledge. It is especially useful for students and teams managing projects.",
link:"https://notion.so"
},

{
id:5,
name:"Grammarly",
category:"Writing",
short:"AI grammar and writing improvement tool.",
description:"Grammarly improves writing clarity, grammar, and tone. It detects spelling errors and suggests better sentence structures. It is widely used for professional emails and academic writing. It works as a browser extension and desktop app.",
link:"https://grammarly.com"
},

{
id:6,
name:"Canva AI",
category:"Design",
short:"AI-powered design and content creation tool.",
description:"Canva AI helps create social media posts, presentations, and graphics using AI assistance. It includes text-to-image generation and design suggestions. Beginners can design professionally without graphic skills. It is very user-friendly.",
link:"https://canva.com"
},

{
id:7,
name:"Midjourney",
category:"Image Generation",
short:"AI image generation from text prompts.",
description:"Midjourney creates artistic images based on text descriptions. It is widely used for digital art, branding visuals, and creative projects. It works via Discord platform. Professionals use it for high-quality creative graphics.",
link:"https://midjourney.com"
},

{
id:8,
name:"DALL·E",
category:"Image Generation",
short:"AI tool that creates realistic images from text.",
description:"DALL·E generates realistic and artistic images from written prompts. It can modify existing images and create new concepts. It is useful for marketing, creative projects, and design experimentation.",
link:"https://openai.com"
},

{
id:9,
name:"Leonardo AI",
category:"Image Generation",
short:"AI platform for generating game and design assets.",
description:"Leonardo AI is focused on creating high-quality digital assets. It is popular among game designers and artists. It allows fine control over styles and models. It supports commercial use.",
link:"https://leonardo.ai"
},

{
id:10,
name:"Runway ML",
category:"Video Editing",
short:"AI-powered video editing and effects tool.",
description:"Runway ML allows users to edit videos using AI. It can remove backgrounds, generate video clips, and apply effects automatically. It is used by content creators and filmmakers for faster production.",
link:"https://runwayml.com"
},

{
id:11,
name:"GitHub Copilot",
category:"Coding",
short:"AI coding assistant inside your code editor.",
description:"GitHub Copilot helps developers write code faster by suggesting complete lines and functions. It works inside editors like VS Code. It understands programming context and multiple languages. It reduces repetitive coding tasks. Beginners can learn by seeing real-time code suggestions.",
link:"https://github.com/features/copilot"
},

{
id:12,
name:"Codeium",
category:"Coding",
short:"Free AI code completion tool.",
description:"Codeium is an AI-powered coding assistant offering intelligent code suggestions. It supports many programming languages. It is free for individual developers. It integrates with popular IDEs. It improves speed and coding accuracy.",
link:"https://codeium.com"
},

{
id:13,
name:"Replit Ghostwriter",
category:"Coding",
short:"AI coding assistant inside Replit platform.",
description:"Ghostwriter helps developers write, debug, and understand code directly in Replit. It explains code logic clearly. It is useful for students learning programming. It also helps generate complete projects.",
link:"https://replit.com"
},

{
id:14,
name:"Tabnine",
category:"Coding",
short:"AI autocomplete for developers.",
description:"Tabnine predicts and autocompletes code lines intelligently. It works offline and ensures privacy. It supports many languages. It helps reduce development time significantly.",
link:"https://tabnine.com"
},

{
id:15,
name:"Jasper AI",
category:"Marketing & Writing",
short:"AI content generator for marketing.",
description:"Jasper AI specializes in marketing copy and blog writing. It creates SEO-optimized content. It is widely used for ads, product descriptions, and social media content. Businesses use it to scale content production.",
link:"https://jasper.ai"
},

{
id:16,
name:"Copy.ai",
category:"Marketing & Writing",
short:"AI tool for creating marketing content.",
description:"Copy.ai generates ad copies, captions, emails, and product descriptions. It helps businesses automate content creation. It is beginner-friendly and fast. It saves time in digital marketing tasks.",
link:"https://copy.ai"
},

{
id:17,
name:"Writesonic",
category:"Marketing & Writing",
short:"AI writer for blogs and SEO content.",
description:"Writesonic creates blog posts, landing pages, and ads. It focuses on SEO optimization. It helps marketers create high-ranking content quickly. It also includes chatbot features.",
link:"https://writesonic.com"
},

{
id:18,
name:"Surfer AI",
category:"SEO & Marketing",
short:"AI-powered SEO content optimizer.",
description:"Surfer AI helps optimize content for search engines. It analyzes keywords and ranking factors. It provides content structure recommendations. Bloggers and SEO experts use it to rank higher on Google.",
link:"https://surferseo.com"
},

{
id:19,
name:"Pictory",
category:"Video Creation",
short:"Convert text into professional videos.",
description:"Pictory converts blog posts and scripts into videos automatically. It adds visuals, subtitles, and voiceovers. It is ideal for YouTube and marketing videos. No video editing skills required.",
link:"https://pictory.ai"
},

{
id:20,
name:"Synthesia",
category:"Video Creation",
short:"AI avatar video generator.",
description:"Synthesia creates videos using AI avatars and voiceovers. You can type text and generate a professional presenter video. It supports multiple languages. Businesses use it for training videos.",
link:"https://synthesia.io"
},

{
id:21,
name:"Descript",
category:"Audio & Video Editing",
short:"Edit audio and video by editing text.",
description:"Descript allows users to edit audio/video by editing the transcript. It includes AI voice cloning and background noise removal. It is useful for podcasters and YouTubers. Editing becomes as easy as editing text.",
link:"https://descript.com"
},

{
id:22,
name:"Murf AI",
category:"Voice Generation",
short:"AI voiceover generator.",
description:"Murf AI generates realistic voiceovers from text. It offers multiple voice styles and languages. It is useful for YouTube videos, ads, and presentations. It eliminates the need for recording equipment.",
link:"https://murf.ai"
},

{
id:23,
name:"ElevenLabs",
category:"Voice Generation",
short:"Highly realistic AI voice cloning tool.",
description:"ElevenLabs creates ultra-realistic AI voices. It supports voice cloning and emotion control. It is widely used in audiobooks and video narration. It delivers natural human-like speech.",
link:"https://elevenlabs.io"
},

{
id:24,
name:"Soundraw",
category:"Music Generation",
short:"AI music composer tool.",
description:"Soundraw generates royalty-free music using AI. Users can customize mood and length. It is useful for content creators and filmmakers. It saves time in background music creation.",
link:"https://soundraw.io"
},

{
id:25,
name:"AIVA",
category:"Music Generation",
short:"AI music composition assistant.",
description:"AIVA composes original music tracks automatically. It is used in films, games, and advertisements. It allows customization of style and genre. It helps creators produce music without instruments.",
link:"https://aiva.ai"
},

{
id:26,
name:"Beautiful.ai",
category:"Presentations",
short:"AI-powered presentation maker.",
description:"Beautiful.ai automatically designs professional slides. It adjusts layouts intelligently. It is ideal for business presentations and startups. It saves hours of manual slide design work.",
link:"https://beautiful.ai"
},

{
id:27,
name:"Tome AI",
category:"Presentations",
short:"AI storytelling and slide generator.",
description:"Tome AI creates presentations and storytelling slides from prompts. It generates text and visuals automatically. It is great for pitch decks and creative storytelling.",
link:"https://tome.app"
},

{
id:28,
name:"Resume.io",
category:"Career Tools",
short:"AI resume builder.",
description:"Resume.io helps create professional resumes quickly. It provides templates and writing suggestions. It is ideal for students and job seekers. It improves resume formatting and clarity.",
link:"https://resume.io"
},

{
id:29,
name:"Kickresume",
category:"Career Tools",
short:"AI-powered resume and cover letter builder.",
description:"Kickresume generates resumes and cover letters using AI. It offers ATS-friendly templates. It is useful for freshers and experienced professionals. It increases chances of job selection.",
link:"https://kickresume.com"
},

{
id:30,
name:"Looka",
category:"Branding & Design",
short:"AI logo and branding creator.",
description:"Looka generates logos using AI based on business preferences. It also creates brand kits. It is ideal for startups and entrepreneurs. No graphic design skills required.",
link:"https://looka.com"
},

{
id:31,
name:"Zapier AI",
category:"Automation",
short:"Automates workflows between apps using AI.",
description:"Zapier AI connects different apps and automates tasks without coding. It can send emails, update spreadsheets, and manage data automatically. Businesses use it to reduce manual work. It supports thousands of integrations. It saves time and increases efficiency.",
link:"https://zapier.com"
},

{
id:32,
name:"Make (Integromat)",
category:"Automation",
short:"Visual automation platform.",
description:"Make allows users to automate complex workflows visually. It connects apps and services easily. It supports advanced automation logic. It is used by businesses to streamline operations.",
link:"https://make.com"
},

{
id:33,
name:"Tidio AI",
category:"Chatbots",
short:"AI chatbot for websites.",
description:"Tidio AI creates customer support chatbots for websites. It handles FAQs and customer queries automatically. Businesses use it to improve response time. It increases customer engagement.",
link:"https://tidio.com"
},

{
id:34,
name:"Drift",
category:"Chatbots",
short:"AI conversational marketing tool.",
description:"Drift provides AI-powered chatbots for sales and marketing. It helps convert website visitors into customers. It supports live chat and automation. It improves lead generation.",
link:"https://drift.com"
},

{
id:35,
name:"Perplexity AI",
category:"Research",
short:"AI-powered research assistant.",
description:"Perplexity AI provides accurate answers with references. It is useful for research and learning. It gives real-time web-based information. Students and professionals use it for fact-based queries.",
link:"https://perplexity.ai"
},

{
id:36,
name:"Elicit",
category:"Research",
short:"AI research paper assistant.",
description:"Elicit helps find and summarize academic papers. It is useful for researchers and students. It analyzes scientific literature efficiently. It saves hours of manual reading.",
link:"https://elicit.com"
},

{
id:37,
name:"Scite",
category:"Research",
short:"Smart citation analysis tool.",
description:"Scite shows how research papers are cited. It indicates whether citations support or contradict findings. It helps researchers verify credibility. It improves academic analysis.",
link:"https://scite.ai"
},

{
id:38,
name:"QuillBot",
category:"Writing",
short:"AI paraphrasing tool.",
description:"QuillBot rewrites sentences to improve clarity. It helps avoid plagiarism. It is useful for students and writers. It includes grammar and summarization features.",
link:"https://quillbot.com"
},

{
id:39,
name:"Sudowrite",
category:"Creative Writing",
short:"AI assistant for fiction writers.",
description:"Sudowrite helps writers generate story ideas and descriptions. It assists with character development. It is useful for novels and creative writing. It boosts creativity.",
link:"https://sudowrite.com"
},

{
id:40,
name:"Rytr",
category:"Writing",
short:"Affordable AI writing assistant.",
description:"Rytr generates blogs, emails, and captions. It supports multiple languages. It is beginner-friendly and budget-friendly. It helps small businesses create content.",
link:"https://rytr.me"
},

{
id:41,
name:"Lumen5",
category:"Video Creation",
short:"AI converts blogs into videos.",
description:"Lumen5 transforms text content into engaging videos. It adds visuals and animations automatically. It is used for marketing and social media. No editing skills needed.",
link:"https://lumen5.com"
},

{
id:42,
name:"CapCut AI",
category:"Video Editing",
short:"AI-powered video editing tool.",
description:"CapCut AI offers automatic captions and effects. It simplifies video editing for beginners. It is popular among social media creators. It enhances content quality quickly.",
link:"https://capcut.com"
},

{
id:43,
name:"Remove.bg",
category:"Image Editing",
short:"AI background remover.",
description:"Remove.bg automatically removes backgrounds from images. It is useful for product photos and design. It saves editing time. It delivers clean transparent backgrounds instantly.",
link:"https://remove.bg"
},

{
id:44,
name:"Cleanup.pictures",
category:"Image Editing",
short:"AI object remover.",
description:"Cleanup removes unwanted objects from photos. It uses AI to fill missing areas naturally. It is helpful for designers and photographers. It improves image quality.",
link:"https://cleanup.pictures"
},

{
id:45,
name:"DeepL",
category:"Translation",
short:"AI language translator.",
description:"DeepL provides accurate language translations. It preserves sentence meaning naturally. It supports multiple languages. It is preferred for professional translation tasks.",
link:"https://deepl.com"
},

{
id:46,
name:"Otter.ai",
category:"Productivity",
short:"AI meeting transcription tool.",
description:"Otter.ai records and transcribes meetings automatically. It generates summaries and highlights. It is useful for students and professionals. It saves note-taking time.",
link:"https://otter.ai"
},

{
id:47,
name:"Fireflies AI",
category:"Productivity",
short:"AI meeting assistant.",
description:"Fireflies records and analyzes meetings. It extracts key points automatically. It integrates with Zoom and Google Meet. It improves team productivity.",
link:"https://fireflies.ai"
},

{
id:48,
name:"Trello AI",
category:"Project Management",
short:"AI-enhanced task management.",
description:"Trello AI helps organize tasks and projects efficiently. It suggests task summaries and planning tips. It improves workflow management. Teams use it for collaboration.",
link:"https://trello.com"
},

{
id:49,
name:"ClickUp AI",
category:"Project Management",
short:"AI assistant inside ClickUp.",
description:"ClickUp AI generates task descriptions and summaries. It improves project documentation. It helps teams stay organized. It increases productivity.",
link:"https://clickup.com"
},

{
id:50,
name:"Monday AI",
category:"Project Management",
short:"AI features inside Monday.com.",
description:"Monday AI automates workflows and summaries. It enhances team collaboration. It reduces manual updates. It helps manage projects efficiently.",
link:"https://monday.com"
},

{
id:51,
name:"Hugging Face",
category:"AI Development",
short:"Platform for AI models and datasets.",
description:"Hugging Face provides open-source AI models. Developers use it for NLP and ML projects. It supports model training and deployment. It is popular in AI research.",
link:"https://huggingface.co"
},

{
id:52,
name:"Kaggle",
category:"Data Science",
short:"Data science learning platform.",
description:"Kaggle offers datasets and competitions. It helps users practice machine learning. It includes notebooks for coding. It is ideal for data science learners.",
link:"https://kaggle.com"
},

{
id:53,
name:"DataRobot",
category:"Data Science",
short:"Automated machine learning platform.",
description:"DataRobot automates ML model creation. It helps businesses predict outcomes. It reduces the need for deep coding. It supports enterprise analytics.",
link:"https://datarobot.com"
},

{
id:54,
name:"RapidMiner",
category:"Data Science",
short:"AI data analytics tool.",
description:"RapidMiner allows visual data modeling. It is used for predictive analytics. It helps non-programmers analyze data. It supports machine learning workflows.",
link:"https://rapidminer.com"
},

{
id:55,
name:"Frase",
category:"SEO",
short:"AI content research tool.",
description:"Frase helps create SEO-friendly content. It analyzes competitor articles. It generates content briefs automatically. It improves Google rankings.",
link:"https://frase.io"
},

{
id:56,
name:"MarketMuse",
category:"SEO",
short:"AI content optimization platform.",
description:"MarketMuse provides topic suggestions and SEO insights. It helps improve content depth. It is used by marketers and bloggers. It increases organic traffic.",
link:"https://marketmuse.com"
},

{
id:57,
name:"Durable AI",
category:"Website Builder",
short:"AI website generator.",
description:"Durable builds complete websites in minutes. It generates text, layout, and design automatically. It is ideal for small businesses. No coding skills needed.",
link:"https://durable.co"
},

{
id:58,
name:"10Web AI",
category:"Website Builder",
short:"AI WordPress site builder.",
description:"10Web builds WordPress websites using AI. It recreates websites automatically. It improves site performance. It is useful for freelancers.",
link:"https://10web.io"
},

{
id:59,
name:"AdCreative AI",
category:"Marketing",
short:"AI ad design tool.",
description:"AdCreative AI generates high-converting ad creatives. It analyzes marketing data. It improves ad performance. It is used in digital advertising.",
link:"https://adcreative.ai"
},

{
id:60,
name:"Predis.ai",
category:"Marketing",
short:"AI social media content creator.",
description:"Predis.ai generates Instagram and social posts automatically. It suggests captions and hashtags. It is useful for social media managers. It increases engagement.",
link:"https://predis.ai"
},

{
id:61,
name:"Stockimg AI",
category:"Design",
short:"AI stock image generator.",
description:"Stockimg AI creates logos, posters, and stock images. It generates high-quality visuals quickly. It is useful for marketers and designers.",
link:"https://stockimg.ai"
},

{
id:62,
name:"Designs.ai",
category:"Design",
short:"AI creative design suite.",
description:"Designs.ai provides logo, video, and content creation tools. It simplifies creative tasks. It is useful for branding projects.",
link:"https://designs.ai"
},

{
id:63,
name:"Brain.fm",
category:"Productivity",
short:"AI-generated focus music.",
description:"Brain.fm creates music scientifically designed for focus. It improves concentration and productivity. It is used by students and professionals.",
link:"https://brain.fm"
},

{
id:64,
name:"Rewind AI",
category:"Productivity",
short:"AI memory assistant.",
description:"Rewind records and indexes your digital activity. It helps search past meetings and notes. It improves recall and productivity.",
link:"https://rewind.ai"
},

{
id:65,
name:"Gamma AI",
category:"Presentations",
short:"AI-powered presentation generator.",
description:"Gamma creates slides and documents automatically. It formats layouts intelligently. It is ideal for quick business presentations.",
link:"https://gamma.app"
},

{
id:66,
name:"Scribe AI",
category:"Documentation",
short:"Auto-generate process documentation.",
description:"Scribe records workflows and creates step-by-step guides. It saves training time. It is useful for teams and onboarding.",
link:"https://scribehow.com"
},

{
id:67,
name:"Browse AI",
category:"Automation",
short:"AI web scraping tool.",
description:"Browse AI extracts data from websites automatically. It requires no coding. Businesses use it for market research.",
link:"https://browse.ai"
},

{
id:68,
name:"Synthesys",
category:"Voice & Video",
short:"AI video and voice generator.",
description:"Synthesys generates AI voiceovers and videos. It is useful for ads and e-learning. It provides realistic avatars.",
link:"https://synthesys.io"
},

{
id:69,
name:"Kaiber AI",
category:"Video Creation",
short:"AI music video creator.",
description:"Kaiber creates animated music videos using AI. It transforms images into video art. It is popular among creators.",
link:"https://kaiber.ai"
},

{
id:70,
name:"Playground AI",
category:"Image Generation",
short:"Free AI image creator.",
description:"Playground AI generates creative images from prompts. It supports editing and filters. It is beginner-friendly.",
link:"https://playgroundai.com"
},

{
id:71,
name:"AutoDraw",
category:"Design",
short:"AI drawing assistant.",
description:"AutoDraw converts rough sketches into neat drawings. It is simple and fun to use. It helps create quick illustrations.",
link:"https://autodraw.com"
},

{
id:72,
name:"Lexica",
category:"Image Search",
short:"Search AI-generated images.",
description:"Lexica allows users to explore AI-generated images. It provides inspiration for prompts. It helps designers and artists.",
link:"https://lexica.art"
},

{
id:73,
name:"Mixo",
category:"Startup Tools",
short:"AI startup landing page builder.",
description:"Mixo creates startup landing pages instantly. It generates content automatically. It is useful for entrepreneurs.",
link:"https://mixo.io"
},

{
id:74,
name:"NameSnack",
category:"Branding",
short:"AI business name generator.",
description:"NameSnack generates creative business names. It checks domain availability. It helps startups build brand identity.",
link:"https://namesnack.com"
},

{
id:75,
name:"Tally AI",
category:"Forms",
short:"AI-powered form builder.",
description:"Tally creates forms quickly with smart suggestions. It is easy to use. It helps collect data efficiently.",
link:"https://tally.so"
},

{
id:76,
name:"Flowise AI",
category:"AI Development",
short:"Build AI apps visually.",
description:"Flowise allows users to build AI workflows visually. It connects LLMs and tools easily. Developers use it for AI projects.",
link:"https://flowiseai.com"
},

{
id:77,
name:"LangChain",
category:"AI Development",
short:"Framework for AI applications.",
description:"LangChain helps developers build AI-powered apps. It connects LLMs with data sources. It is widely used in AI startups.",
link:"https://langchain.com"
},

{
id:78,
name:"Weights & Biases",
category:"AI Development",
short:"Machine learning experiment tracking.",
description:"Weights & Biases tracks ML experiments. It visualizes model performance. It is used by AI researchers.",
link:"https://wandb.ai"
},

{
id:79,
name:"TensorFlow",
category:"AI Development",
short:"Open-source ML framework.",
description:"TensorFlow is used to build machine learning models. It supports deep learning. It is popular in AI research and development.",
link:"https://tensorflow.org"
},

{
id:80,
name:"PyTorch",
category:"AI Development",
short:"Deep learning framework.",
description:"PyTorch is a flexible deep learning framework. It is widely used in research. It supports neural network development.",
link:"https://pytorch.org"
},

{
id:81,
name:"IBM Watson",
category:"Enterprise AI",
short:"AI solutions for businesses.",
description:"IBM Watson provides AI tools for analytics and automation. It is used in healthcare and finance industries. It supports enterprise AI solutions.",
link:"https://ibm.com/watson"
},

{
id:82,
name:"Microsoft Azure AI",
category:"Enterprise AI",
short:"Cloud-based AI services.",
description:"Azure AI provides cloud AI services and ML tools. Businesses use it to build AI apps. It integrates with Microsoft ecosystem.",
link:"https://azure.microsoft.com"
},

{
id:83,
name:"Google Cloud AI",
category:"Enterprise AI",
short:"AI tools by Google Cloud.",
description:"Google Cloud AI offers ML APIs and services. It supports vision and speech recognition. Enterprises use it for scalable AI.",
link:"https://cloud.google.com"
},

{
id:84,
name:"Amazon SageMaker",
category:"Enterprise AI",
short:"ML model building platform.",
description:"SageMaker helps build and deploy ML models. It automates training processes. It is used by data scientists in enterprises.",
link:"https://aws.amazon.com/sagemaker"
},

{
id:85,
name:"UiPath AI",
category:"Automation",
short:"AI robotic process automation tool.",
description:"UiPath automates repetitive business tasks. It uses AI for intelligent automation. Enterprises use it to improve efficiency.",
link:"https://uipath.com"
},

{
id:86,
name:"Cohere",
category:"AI Development",
short:"Enterprise large language model platform.",
description:"Cohere provides powerful large language models for businesses. It supports text generation, embeddings, and semantic search. Companies use it to build AI-powered applications. It focuses on scalability and enterprise-grade AI solutions.",
link:"https://cohere.com"
},

{
id:87,
name:"Anthropic API",
category:"AI Development",
short:"API access to Claude AI models.",
description:"Anthropic provides API access to Claude models for developers. It focuses on safe and reliable AI systems. Businesses use it for chatbots and document analysis. It supports long-context processing.",
link:"https://anthropic.com"
},

{
id:88,
name:"Stability AI",
category:"Image Generation",
short:"Creator of Stable Diffusion.",
description:"Stability AI develops open-source generative AI models. Stable Diffusion allows users to generate high-quality images. It is widely used in creative industries. Developers can customize models for different needs.",
link:"https://stability.ai"
},

{
id:89,
name:"NightCafe",
category:"Image Generation",
short:"AI art generator platform.",
description:"NightCafe allows users to create digital artwork using AI. It supports multiple art styles and models. Artists use it to generate creative visuals. It offers community sharing features.",
link:"https://nightcafe.studio"
},

{
id:90,
name:"DeepBrain AI",
category:"Video Creation",
short:"AI human avatar video generator.",
description:"DeepBrain AI creates realistic AI human presenters for videos. Businesses use it for training and marketing. It reduces video production costs. It supports multiple languages.",
link:"https://deepbrain.io"
},

{
id:91,
name:"Colossyan",
category:"Video Creation",
short:"AI corporate video generator.",
description:"Colossyan generates professional training videos using AI avatars. It supports script-based video creation. Companies use it for onboarding and tutorials. It saves production time.",
link:"https://colossyan.com"
},

{
id:92,
name:"SoundHound AI",
category:"Voice Technology",
short:"AI voice recognition platform.",
description:"SoundHound AI provides advanced voice recognition technology. It powers voice assistants and smart devices. It supports conversational AI systems. Businesses integrate it into apps and products.",
link:"https://soundhound.com"
},

{
id:93,
name:"AssemblyAI",
category:"Voice Technology",
short:"Speech-to-text API platform.",
description:"AssemblyAI offers accurate speech-to-text APIs. Developers use it for transcription and audio analysis. It supports sentiment and content moderation features. It is widely used in media applications.",
link:"https://assemblyai.com"
},

{
id:94,
name:"H2O.ai",
category:"Data Science",
short:"Open-source AI platform.",
description:"H2O.ai provides automated machine learning tools. It supports predictive analytics and model building. Enterprises use it for big data projects. It simplifies advanced AI development.",
link:"https://h2o.ai"
},

{
id:95,
name:"Obviously AI",
category:"Data Science",
short:"No-code predictive analytics tool.",
description:"Obviously AI allows users to build predictive models without coding. It analyzes datasets automatically. Businesses use it for forecasting and decision-making. It simplifies machine learning.",
link:"https://obviously.ai"
},

{
id:96,
name:"Krisp AI",
category:"Productivity",
short:"AI noise cancellation tool.",
description:"Krisp removes background noise during calls. It improves meeting audio clarity. Remote workers and teams use it frequently. It works with Zoom and other apps.",
link:"https://krisp.ai"
},

{
id:97,
name:"Lovo AI",
category:"Voice Generation",
short:"AI voice generator for content creators.",
description:"Lovo AI generates realistic voiceovers for videos and ads. It offers multiple voice styles and emotions. It supports multiple languages. It is useful for marketing and storytelling.",
link:"https://lovo.ai"
},

{
id:98,
name:"Peppertype AI",
category:"Marketing",
short:"AI content assistant for businesses.",
description:"Peppertype AI helps create blogs and marketing content. It supports SEO-focused writing. It improves content productivity. Businesses use it for scaling content teams.",
link:"https://peppertype.ai"
},

{
id:99,
name:"INK AI",
category:"SEO",
short:"AI SEO content optimization tool.",
description:"INK AI helps create SEO-optimized content. It provides keyword insights and ranking tips. Bloggers use it to improve search performance. It combines AI writing with SEO analysis.",
link:"https://inkforall.com"
},

{
id:100,
name:"Fotor AI",
category:"Image Editing",
short:"AI-powered photo editor.",
description:"Fotor AI provides automatic photo enhancement and design tools. It supports background removal and creative effects. It is beginner-friendly. It is widely used for social media visuals.",
link:"https://fotor.com"
}

];
