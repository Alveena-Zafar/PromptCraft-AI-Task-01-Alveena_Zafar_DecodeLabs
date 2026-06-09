document.addEventListener('DOMContentLoaded', () => {

  // ==================== DARK MODE ====================
  const darkToggle = document.getElementById('dark-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
  }

  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');

    darkToggle.textContent = isDark ? '☀️' : '🌙';

    localStorage.setItem(
      'theme',
      isDark ? 'dark' : 'light'
    );
  });

  // ==================== MOBILE MENU ====================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // ==================== PROMPT DATA ====================
  const prompts = {

    study: {
      beginner:
        "Explain the concept of variables in programming using simple examples.",

      intermediate:
        "Create a 7-day study plan for learning Data Structures and Algorithms.",

      advanced:
        "Analyze the impact of Artificial Intelligence on modern education systems."
    },

    coding: {
      beginner:
        "Write a simple Java program to calculate the area of a rectangle.",

      intermediate:
        "Build a Java application that manages student records using OOP concepts.",

      advanced:
        "Design and implement a scalable REST API with authentication and authorization."
    },

    writing: {
      beginner:
        "Write a short paragraph describing your favorite hobby.",

      intermediate:
        "Draft a professional internship request email to a software company.",

      advanced:
        "Write a persuasive article discussing the future of Artificial Intelligence."
    },

    business: {
      beginner:
        "Create a simple business idea for a small local startup.",

      intermediate:
        "Develop a marketing strategy for launching a new mobile application.",

      advanced:
        "Prepare a comprehensive business growth plan for expanding into international markets."
    }

  };

  // ==================== GENERATOR ====================
  const generateBtn = document.getElementById('generate-btn');

  const promptOutput =
    document.getElementById('prompt-output');

  const promptText =
    document.getElementById('prompt-text');

  const copyBtn =
    document.getElementById('copy-btn');

  let currentGeneratedPrompt = '';

  generateBtn.addEventListener('click', () => {

    const category =
      document.getElementById('category').value;

    const difficulty =
      document.getElementById('difficulty').value;

    if (!category || !difficulty) {

      alert(
        'Please select both Category and Difficulty'
      );

      return;
    }

    currentGeneratedPrompt =
      prompts[category][difficulty];

    promptText.textContent =
      currentGeneratedPrompt;

    promptOutput.classList.remove('hidden');
  });

  // ==================== COPY BUTTON ====================
  copyBtn.addEventListener('click', () => {

    if (!currentGeneratedPrompt) return;

    navigator.clipboard.writeText(
      currentGeneratedPrompt
    );

    copyBtn.textContent = '✅ Copied!';

    setTimeout(() => {

      copyBtn.textContent =
        '📋 Copy Prompt';

    }, 2000);

  });

  // ==================== CONTACT FORM ====================
  document
    .getElementById('contact-form')
    .addEventListener('submit', (e) => {

      e.preventDefault();

      alert(
        '✅ Message received! Thank you.'
      );

      e.target.reset();

    });

});