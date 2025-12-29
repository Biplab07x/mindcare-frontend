export const questions = [
  {
    id: 1,
    text: "How has your sleep been recently?",
    options: [
      { label: "I sleep well and feel rested", score: 0 },
      { label: "I sleep but wake up tired", score: 1 },
      { label: "I struggle to fall asleep or wake up often", score: 2 },
      { label: "My sleep is very irregular or disturbed", score: 3 }
    ]
  },
  {
    id: 2,
    text: "How do you feel about starting your day?",
    options: [
      { label: "I feel normal or motivated", score: 0 },
      { label: "I feel tired but manage", score: 1 },
      { label: "I feel drained most days", score: 2 },
      { label: "I feel exhausted even after rest", score: 3 }
    ]
  },
  {
    id: 3,
    text: "How is your concentration during work or study?",
    options: [
      { label: "I can focus normally", score: 0 },
      { label: "I get distracted sometimes", score: 1 },
      { label: "I struggle to focus most of the time", score: 2 },
      { label: "I can't concentrate even on simple tasks", score: 3 }
    ]
  },
  {
    id: 4,
    text: "Which best describes your emotional state recently?",
    options: [
      { label: "Mostly calm and stable", score: 0 },
      { label: "Slightly anxious or irritated", score: 1 },
      { label: "Frequently overwhelmed or frustrated", score: 2 },
      { label: "Emotionally numb or constantly anxious", score: 3 }
    ]
  },
  {
    id: 5,
    text: "Have you noticed any physical symptoms recently?",
    options: [
      { label: "No noticeable symptoms", score: 0 },
      { label: "Occasional headaches or fatigue", score: 1 },
      { label: "Frequent body pain, headaches, or stomach issues", score: 2 },
      { label: "Constant physical discomfort or tension", score: 3 }
    ]
  },
  {
    id: 6,
    text: "How in control do you feel about your life right now?",
    options: [
      { label: "I feel mostly in control", score: 0 },
      { label: "Some things feel overwhelming", score: 1 },
      { label: "I often feel out of control", score: 2 },
      { label: "I feel stuck and helpless", score: 3 }
    ]
  }
];

export default questions;