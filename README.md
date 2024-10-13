## Title: AI-Powered Video Conferencing with Real-Time Transcription

## <a name="description">🤖 Project Description: </a>
Video Conferencing App is an AI-powered video conferencing tool built using Next.js, TypeScript, Tailwind CSS, and Node.js.
It leverages AssemblyAI for real-time transcription and GetStream.io for managing video and audio conferencing sessions
with enhanced logging. This application enables seamless one-on-one and many-to-many video calls, incorporating AI-based 
live transcription and transcription history features.The integration of Stream-io Video React SDK ensures a smooth,
customizable, and scalable user experience. With AI-driven transcriptions, users can access past conversations, which 
makes it an ideal solution for businesses or educational purposes where keeping track of communication is essential.

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Project Description](#description)
2. 🙎 [Highlighting Features](#features)
3. 🦉 [Prerequisites](#prerequisites)
4. ❄️ [Quick Start](#quick-start)
5. 🤠 [Setup .env variables](#snippet)
6. 🕷️ [Community Guidelines](#guidelines)
7. 👨‍⚖️ [Licensing](#license)


## <a name="features">🙎Highlighting Features: </a>

  1. Real-Time AI-Based Transcription: Powered by AssemblyAI’s API and LLM for transcription.
  2. Seamless Video and Audio Conferencing: Leveraging GetStream.io's video conferencing capabilities.
  3. Customizable UI: Built with Next.js and styled using Tailwind CSS.
  4. Transcription History: Users can access and review previous transcriptions.
  5. Microphone and Video Buffer Merging: Handles audio and video merging using audioBufferQueue and mergeBuffers.

## <a name="prerequisites">🦉 Prerequisites: </a>
  Before you begin, ensure you have met the following requirements:
   ```
       Node.js: v14.x or higher
       NPM: v6.x or higher
       Git: Installed and configured
       Vercel CLI (for deployment): npm i -g vercel
       AssemblyAI API Key: Sign up at AssemblyAI to obtain an API key.
       GetStream.io API Key and Secret: Sign up at GetStream.io to obtain an API key and secret.
        First, run the development server:
   ```

## <a name="quick-start"> ❄️ Steps to be followed: </a>
  ```
      git clone https://github.com/your-username/Vidly-conferencing-app.git
       cd your-folder-name
  ```

   ```bash
      npm install
      npm run dev
      # or
      yarn dev
      # or
     pnpm dev
     # or
     bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
  You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
  This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## <a name="snippet"> 🤠 Setting Up Environment Variables: </a>
  Create a .env file in the root directory and add the following:

         ```bash
            Copy code
            NEXT_PUBLIC_ASSEMBLYAI_API_KEY=your_assemblyai_api_key
            NEXT_PUBLIC_GETSTREAM_API_KEY=your_getstream_api_key
            NEXT_PUBLIC_GETSTREAM_API_SECRET=your_getstream_api_secret
          ```
## <a name="guidelines"> 🕷️Community Guidelines: </a> 

1. General Contribution Guidelines
We welcome contributions from the community! To maintain the project's integrity and quality, please follow the guidelines below:
Respectful communication: Always be polite and constructive in your communication.
Keep the code clean: Follow the project’s code style and structure. Ensure your code is readable and well-documented.
Test before committing: Ensure any changes you make are fully tested and do not break existing functionality.
Submit detailed pull requests: When submitting pull requests (PRs), include a clear description of what the change does and why it’s necessary.

2. Commit Guidelines
Commit Messages: Use concise and descriptive commit messages that summarize the changes made.
Good: fix: resolved issue with video buffering in Chrome
Bad: fixing stuff
Commit Frequency: Make frequent, small commits with atomic changes. This makes code review and debugging easier.
Signed Commits: If possible, sign your commits to verify authenticity.

3. Pull Request Guidelines
Create a branch: For every feature or bug fix, create a new branch. Follow the naming convention: feature/feature-name or fix/issue-name.
Sync with main: Before making a pull request, always sync your branch with the latest version of main.
```bash
Copy code
git checkout main
git pull origin main
git checkout your-branch
git merge main
Describe your PR: In the pull request description, explain why the changes are needed, what was done, and how to test it.
```

4. Push Guidelines
Push to a branch, not main: Never push directly to the main branch. Always create a separate branch and push your changes to that branch.
```bash
Copy code
git push origin feature/feature-name
Keep it clean: Before pushing, ensure there are no unnecessary files in the commit (e.g., .env, node_modules, etc.).
```

5. Review and Approval
Pull Request Review: All pull requests must be reviewed by at least one other contributor before merging.
Approval Process: After approval, only maintainers or authorized contributors can merge the pull request into the main branch.

6. Code of Conduct
We expect all contributors to adhere to a code of conduct that includes:
Be respectful: Everyone is welcome, and different opinions should be respected.
No harassment or abuse: Any form of harassment, discrimination, or abuse will not be tolerated.
Constructive feedback: When reviewing code, focus on giving constructive feedback that helps improve the project.

## <a name="license"> 👨‍⚖️ Licensing: </a>
   MIT License
   Copyright (c) 2024 Deep Raj
This project is licensed under the terms of the [MIT License](./LICENSE).

## 🕺Demonstration: 
<img src="https://www.ringcentral.com/us/en/blog/wp-content/uploads/2021/11/Live-transcription.gif" width="256" height="256"/>
<img src="https://i.pinimg.com/originals/2f/64/c6/2f64c6038f8c62bf166f0eb216f3ad28.gif" width="256" height="256"/>
<img src="https://cdn.dribbble.com/users/1708816/screenshots/15637339/media/2ea4a194c3149189c2507d137f81a652.gif" width="256" height="256"/>

## Memes: 
<img src="https://www.gzeromedia.com/media-library/image.gif?id=52468706&width=980" width="256" height="256">
<img src="https://media.tenor.com/0oCXYN5vtv8AAAAM/work-sucks.gif" width="256" height="256"/>
