
import { Rule, Category } from '../types';

export const rules: Rule[] = [
  {
    id: 'present-simple',
    title: 'Present Simple',
    category: Category.TENSES,
    shortDescription: 'Used for habits, facts, and daily routines.',
    longDefinition: 'The Present Simple is used to describe actions that happen regularly or universal facts that do not change over time.',
    usage: [
      'Daily routine: I wake up at 7.',
      'General facts: Water boils at 100°C.',
      'Fixed schedules: The train leaves at 9.'
    ],
    structure: {
      affirmative: 'Subject + Verb (s/es with he/she/it)',
      negative: 'Subject + do/does + not + base verb',
      question: 'Do/Does + subject + base verb?'
    },
    examples: [
      { english: 'She plays football.', explanation: 'She plays regularly.' },
      { english: 'They don’t like coffee.', explanation: 'General dislike.' },
      { english: 'Does he study every day?', explanation: 'Asking about a routine.' }
    ],
    commonMistakes: [
      { wrong: 'She play football.', right: 'She plays football.' },
      { wrong: 'He don\'t like milk.', right: 'He doesn\'t like milk.' }
    ],
    exercises: [
      {
        id: 'ps-1',
        question: 'She _____ to school every day.',
        options: ['go', 'goes', 'going'],
        correctAnswer: 'goes',
        explanation: 'We add -s to the verb with the pronoun "She" in the present simple.'
      }
    ],
    videos: [
      { title: 'BBC Learning English - Present Simple', youtubeId: 'L9AWRGX8SVs' },
      { title: 'The Present Simple Tense Guide', youtubeId: 'X3pGvPZpS_U' }
    ],
    additionalTables: [
      {
        title: 'Spelling Rules for -s / -es',
        headers: ['Ending', 'Rule', 'Example'],
        rows: [
          ['Most verbs', 'Add -s', 'work -> works'],
          ['Ending in ch, sh, s, x, z', 'Add -es', 'watch -> watches'],
          ['Consonant + y', 'Remove y, add -ies', 'study -> studies'],
          ['Vowel + y', 'Add -s', 'play -> plays']
        ]
      }
    ]
  },
  {
    id: 'verb-to-be',
    title: 'Verb "To Be"',
    category: Category.GRAMMAR,
    shortDescription: 'The most common verb in English (am, is, are).',
    longDefinition: 'Verb "To Be" is used to describe subjects, identify people/things, or state a location.',
    usage: [
      'Identification: I am a student.',
      'Description: The sky is blue.',
      'Location: We are at home.'
    ],
    structure: {
      affirmative: 'Subject + am/is/are',
      negative: 'Subject + am/is/are + not',
      question: 'Am/Is/Are + Subject?'
    },
    examples: [
      { english: 'I am happy.', explanation: 'Describing a feeling.' },
      { english: 'He isn\'t a doctor.', explanation: 'Negative identification.' }
    ],
    commonMistakes: [
      { wrong: 'I is tired.', right: 'I am tired.' },
      { wrong: 'They am friends.', right: 'They are friends.' }
    ],
    exercises: [
      {
        id: 'be-1',
        question: 'They _____ from Riyadh.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: 'We use "are" for plural subjects like "They".'
      }
    ],
    videos: [
      { title: 'English with Lucy: Verb To Be', youtubeId: 'v_N68mK_vY4' },
      { title: 'Verb To Be Basics', youtubeId: 'm27v8Y_T_3k' }
    ],
    additionalTables: [
      {
        title: 'Conjugation Chart',
        headers: ['Subject', 'Affirmative', 'Negative', 'Short Form'],
        rows: [
          ['I', 'am', 'am not', "I'm / I'm not"],
          ['He / She / It', 'is', 'is not', "He's / isn't"],
          ['You / We / They', 'are', 'are not', "We're / aren't"]
        ]
      }
    ]
  },
  {
    id: 'personal-pronouns',
    title: 'Pronouns Chart',
    category: Category.GRAMMAR,
    shortDescription: 'Full reference for Subject, Object, and Possessives.',
    longDefinition: 'Pronouns are used to replace nouns. Understanding the different forms is essential for correct sentence structure.',
    usage: [
      'Subject: Before the verb.',
      'Object: After the verb.',
      'Possessive: To show ownership.'
    ],
    structure: {
      affirmative: 'Subject + Verb + Object',
      negative: 'N/A',
      question: 'N/A'
    },
    examples: [
      { english: 'I saw him.', explanation: 'I (Subject), Him (Object).' },
      { english: 'This is my book.', explanation: 'My (Possessive Adj).' }
    ],
    commonMistakes: [
      { wrong: 'Give it to he.', right: 'Give it to him.' },
      { wrong: 'Us like sports.', right: 'We like sports.' }
    ],
    exercises: [
      {
        id: 'pron-2',
        question: 'That bag belongs to me. It is _____.',
        options: ['my', 'mine', 'me'],
        correctAnswer: 'mine',
        explanation: 'We use the possessive pronoun "mine" at the end of the sentence.'
      }
    ],
    videos: [
      { title: 'Subject and Object Pronouns', youtubeId: 'N_E99M_P9wY' },
      { title: 'Possessive Adjectives Explained', youtubeId: 'X_F5yW_Q1Yg' }
    ],
    additionalTables: [
      {
        title: 'The Complete Pronoun Chart',
        headers: ['Subject', 'Object', 'Possessive Adj.', 'Possessive Pronoun'],
        rows: [
          ['I', 'me', 'my', 'mine'],
          ['You', 'you', 'your', 'yours'],
          ['He', 'him', 'his', 'his'],
          ['She', 'her', 'her', 'hers'],
          ['It', 'it', 'its', 'its (rare)'],
          ['We', 'us', 'our', 'ours'],
          ['They', 'them', 'their', 'theirs']
        ]
      }
    ]
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    category: Category.TENSES,
    shortDescription: 'Actions that happened and finished in the past.',
    longDefinition: 'The Past Simple describes completed actions at a specific time in the past.',
    usage: [
      'Finished action: I saw a movie yesterday.',
      'Past habits: I played piano when I was young.'
    ],
    structure: {
      affirmative: 'Subject + V2 (ed/irregular)',
      negative: 'Subject + did not + V1',
      question: 'Did + Subject + V1?'
    },
    examples: [
      { english: 'I worked late.', explanation: 'Regular verb (+ed).' },
      { english: 'He went home.', explanation: 'Irregular verb (Go -> Went).' }
    ],
    commonMistakes: [
      { wrong: 'I didn\'t went.', right: 'I didn\'t go.' },
      { wrong: 'Did you saw him?', right: 'Did you see him?' }
    ],
    exercises: [
      {
        id: 'past-1',
        question: 'She _____ her homework last night.',
        options: ['do', 'does', 'did'],
        correctAnswer: 'did',
        explanation: 'Past simple of "do" is "did".'
      }
    ],
    videos: [
      { title: 'Past Simple Tense Lesson', youtubeId: 'aq6N_8YmS4g' },
      { title: 'Regular vs Irregular Verbs', youtubeId: '0_v8L_K9P9w' }
    ],
    additionalTables: [
      {
        title: 'Common Irregular Verbs',
        headers: ['Base (V1)', 'Past (V2)', 'Meaning'],
        rows: [
          ['Be', 'Was / Were', 'To exist'],
          ['Go', 'Went', 'To move'],
          ['Eat', 'Ate', 'To consume food'],
          ['Have', 'Had', 'To possess'],
          ['Say', 'Said', 'To speak'],
          ['Do', 'Did', 'To perform']
        ]
      }
    ]
  },
  {
    id: 'adverbs-frequency',
    title: 'Adverbs of Frequency',
    category: Category.OTHER,
    shortDescription: 'How often you do something.',
    longDefinition: 'Adverbs of frequency tell us the regularity of an action.',
    usage: [
      'Before normal verbs: I always eat.',
      'After Verb To Be: He is often late.'
    ],
    structure: {
      affirmative: 'Subject + Adverb + Verb',
      negative: 'Subject + do not + Adverb + Verb',
      question: 'Do you + Adverb + Verb?'
    },
    examples: [
      { english: 'I never lie.', explanation: '0% frequency.' },
      { english: 'They usually walk.', explanation: 'High frequency.' }
    ],
    commonMistakes: [
      { wrong: 'I go usually.', right: 'I usually go.' }
    ],
    exercises: [
      {
        id: 'adv-2',
        question: 'Ahmed is _____ on time.',
        options: ['always', 'usually', 'sometimes'],
        correctAnswer: 'always',
        explanation: 'Any adverb can fit, but logically "always on time" is a common praise.'
      }
    ],
    videos: [
      { title: 'Frequency Adverbs Explained', youtubeId: 'L6SAn_VvRz8' },
      { title: 'BBC: Adverbs of Frequency', youtubeId: '9AWRGX8SVs' }
    ],
    additionalTables: [
      {
        title: 'Frequency Scale',
        headers: ['Percentage', 'Adverb', 'Example'],
        rows: [
          ['100%', 'Always', 'I always pray.'],
          ['90%', 'Usually', 'I usually sleep early.'],
          ['70%', 'Often', 'I often read.'],
          ['50%', 'Sometimes', 'I sometimes cook.'],
          ['10%', 'Hardly ever', 'I hardly ever see him.'],
          ['0%', 'Never', 'I never smoke.']
        ]
      }
    ]
  }
];
