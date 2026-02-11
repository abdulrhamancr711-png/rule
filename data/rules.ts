
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
    videos: [],
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
    id: 'present-continuous',
    title: 'Present Continuous',
    category: Category.TENSES,
    shortDescription: 'Actions happening right now or temporary plans.',
    longDefinition: 'The Present Continuous (or Progressive) is used for actions that are in progress at the moment of speaking or for temporary situations.',
    usage: [
      'Actions happening now: I am reading a book.',
      'Temporary actions: He is staying with friends this week.',
      'Future arrangements: We are meeting at 5 PM.'
    ],
    structure: {
      affirmative: 'Subject + am/is/are + Verb-ing',
      negative: 'Subject + am/is/are + not + Verb-ing',
      question: 'Am/Is/Are + subject + Verb-ing?'
    },
    examples: [
      { english: 'I am studying English now.', explanation: 'Action in progress.' },
      { english: 'They aren\'t watching TV.', explanation: 'Negative current action.' },
      { english: 'Are you listening?', explanation: 'Asking about the current moment.' }
    ],
    commonMistakes: [
      { wrong: 'I reading now.', right: 'I am reading now.' },
      { wrong: 'They is playing.', right: 'They are playing.' }
    ],
    exercises: [
      {
        id: 'pc-1',
        question: 'Look! The baby _____.',
        options: ['sleep', 'is sleeping', 'sleeps'],
        correctAnswer: 'is sleeping',
        explanation: 'The word "Look!" indicates the action is happening right now.'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'Verb-ing Spelling Rules',
        headers: ['Verb Ending', 'Rule', 'Example'],
        rows: [
          ['Most verbs', 'Add -ing', 'talk -> talking'],
          ['Ending in -e', 'Remove -e, add -ing', 'make -> making'],
          ['Consonant-Vowel-Consonant', 'Double last letter', 'run -> running'],
          ['Ending in -ie', 'Change -ie to -y', 'die -> dying']
        ]
      }
    ]
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    category: Category.TENSES,
    shortDescription: 'Links the past with the present.',
    longDefinition: 'Used for actions that happened at an unspecified time in the past or started in the past and continue today.',
    usage: [
      'Life experience: I have been to London.',
      'Recent actions: He has just finished his work.',
      'Duration (since/for): We have lived here for 5 years.'
    ],
    structure: {
      affirmative: 'Subject + have/has + Past Participle (V3)',
      negative: 'Subject + have/has + not + V3',
      question: 'Have/Has + subject + V3?'
    },
    examples: [
      { english: 'I have lost my keys.', explanation: 'Unspecified time in the past.' },
      { english: 'She has worked here since 2010.', explanation: 'Action continuing now.' }
    ],
    commonMistakes: [
      { wrong: 'I have went there yesterday.', right: 'I went there yesterday. (Past Simple)' },
      { wrong: 'He have finished.', right: 'He has finished.' }
    ],
    exercises: [
      {
        id: 'pp-1',
        question: 'I _____ that movie three times already.',
        options: ['see', 'have seen', 'saw'],
        correctAnswer: 'have seen',
        explanation: 'We use the Present Perfect for life experiences.'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'Since vs For',
        headers: ['Since (Start point)', 'For (Duration)'],
        rows: [
          ['Since Monday', 'For two days'],
          ['Since 2015', 'For 8 years'],
          ['Since breakfast', 'For 3 hours'],
          ['Since I was a child', 'For a long time']
        ]
      }
    ]
  },
  {
    id: 'future-simple',
    title: 'Future Simple',
    category: Category.TENSES,
    shortDescription: 'Talking about the future using "Will" and "Be going to".',
    longDefinition: 'We use "Will" for sudden decisions or predictions, and "Be going to" for plans and intentions already made.',
    usage: [
      'Sudden decisions: I will open the door!',
      'Predictions: It will rain tomorrow.',
      'Prior plans: I am going to visit my aunt.'
    ],
    structure: {
      affirmative: 'Subject + will + V1 / Subject + am/is/are + going to + V1',
      negative: 'Subject + will not (won\'t) + V1',
      question: 'Will + subject + V1?'
    },
    examples: [
      { english: 'I will help you.', explanation: 'Offer of help.' },
      { english: 'We are going to buy a car.', explanation: 'A plan made before now.' }
    ],
    commonMistakes: [
      { wrong: 'I will to go.', right: 'I will go.' },
      { wrong: 'She going to study.', right: 'She is going to study.' }
    ],
    exercises: [
      {
        id: 'fs-1',
        question: 'I think it _____ rain tonight.',
        options: ['will', 'going to', 'is'],
        correctAnswer: 'will',
        explanation: 'We use "will" for predictions based on what we think.'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'Will vs Be Going To',
        headers: ['Feature', 'Will', 'Be Going To'],
        rows: [
          ['Decision', 'Made at the moment', 'Made before speaking'],
          ['Prediction', 'Based on opinion', 'Based on evidence'],
          ['Promise/Offer', 'Yes', 'No']
        ]
      }
    ]
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    category: Category.GRAMMAR,
    shortDescription: 'Express ability, permission, advice, and obligation.',
    longDefinition: 'Modal verbs are auxiliary verbs that provide additional meaning to the main verb, such as degree of certainty or social function.',
    usage: [
      'Ability: I can swim.',
      'Permission: May I come in?',
      'Advice: You should sleep more.',
      'Obligation: You must follow the rules.'
    ],
    structure: {
      affirmative: 'Subject + Modal + V1 (Base)',
      negative: 'Subject + Modal + not + V1',
      question: 'Modal + subject + V1?'
    },
    examples: [
      { english: 'He could speak French as a child.', explanation: 'Past ability.' },
      { english: 'You must not smoke here.', explanation: 'Prohibition.' }
    ],
    commonMistakes: [
      { wrong: 'I can to swim.', right: 'I can swim.' },
      { wrong: 'She shoulds go.', right: 'She should go.' }
    ],
    exercises: [
      {
        id: 'mod-1',
        question: 'You _____ wear a helmet while riding a bike.',
        options: ['can', 'should', 'may'],
        correctAnswer: 'should',
        explanation: 'We use "should" to give strong advice.'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'Common Modals Meaning',
        headers: ['Modal', 'Function', 'Example'],
        rows: [
          ['Can', 'Ability / Permission', 'I can help you.'],
          ['Must', 'Strong obligation', 'I must leave now.'],
          ['Should', 'Advice / Suggestion', 'You should study.'],
          ['Might', 'Possibility', 'It might rain.']
        ]
      }
    ]
  },
  {
    id: 'articles',
    title: 'Articles (A, An, The)',
    category: Category.GRAMMAR,
    shortDescription: 'How to use definite and indefinite articles.',
    longDefinition: 'Articles specify nouns. "A/An" are used for non-specific singular countable nouns. "The" is used for specific nouns.',
    usage: [
      'Non-specific: I saw a dog.',
      'Specific / Unique: The sun is hot.',
      'Vowel sound: An apple, an hour.'
    ],
    structure: {
      affirmative: 'A/An/The + Noun',
      negative: 'No Article + Noun (for some cases)',
      question: 'Is it a...?'
    },
    examples: [
      { english: 'She is a doctor.', explanation: 'One of many doctors.' },
      { english: 'The doctor I saw was nice.', explanation: 'A specific doctor.' }
    ],
    commonMistakes: [
      { wrong: 'I have a orange.', right: 'I have an orange.' },
      { wrong: 'The life is beautiful.', right: 'Life is beautiful. (General concept)' }
    ],
    exercises: [
      {
        id: 'art-1',
        question: 'He is _____ honest man.',
        options: ['a', 'an', 'the'],
        correctAnswer: 'an',
        explanation: '"Honest" starts with a silent "h", so we use "an".'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'A vs An',
        headers: ['Rule', 'Examples'],
        rows: [
          ['Consonant sound', 'A book, a car, a university'],
          ['Vowel sound', 'An egg, an apple, an MP3']
        ]
      }
    ]
  },
  {
    id: 'first-conditional',
    title: 'First Conditional',
    category: Category.GRAMMAR,
    shortDescription: 'Real possibilities in the future.',
    longDefinition: 'Used to talk about things which might happen in the future if a specific condition is met.',
    usage: [
      'Predictions: If it rains, I will stay home.',
      'Promises: If you help me, I will pay you.',
      'Warnings: If you touch it, you will get hurt.'
    ],
    structure: {
      affirmative: 'If + Present Simple, Will + V1',
      negative: 'If + Present Simple, Won\'t + V1',
      question: 'What will you do if...?'
    },
    examples: [
      { english: 'If I study, I will pass.', explanation: 'Likely result.' },
      { english: 'If she doesn\'t hurry, she\'ll be late.', explanation: 'Negative condition.' }
    ],
    commonMistakes: [
      { wrong: 'If it will rain, I stay.', right: 'If it rains, I will stay.' },
      { wrong: 'If I pass, I celebrate.', right: 'If I pass, I will celebrate.' }
    ],
    exercises: [
      {
        id: 'cond-1',
        question: 'If you _____ your dinner, you can have dessert.',
        options: ['finish', 'will finish', 'finishes'],
        correctAnswer: 'finish',
        explanation: 'We use the Present Simple in the "If" clause.'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'Conditional Structure',
        headers: ['Part', 'Tense', 'Example'],
        rows: [
          ['Condition', 'If + Present Simple', 'If I see him...'],
          ['Result', 'Future Simple (Will)', '...I will tell him.']
        ]
      }
    ]
  },
  {
    id: 'comparatives',
    title: 'Comparatives & Superlatives',
    category: Category.GRAMMAR,
    shortDescription: 'Compare things or people using adjectives.',
    longDefinition: 'Comparatives compare two things. Superlatives compare one thing against a whole group (3+).',
    usage: [
      'Comparative: A is bigger than B.',
      'Superlative: A is the biggest in the world.'
    ],
    structure: {
      affirmative: 'Adj-er + than / The + most + Adj',
      negative: 'Not as + Adj + as',
      question: 'Is A bigger than B?'
    },
    examples: [
      { english: 'My car is faster than yours.', explanation: 'Comparing two cars.' },
      { english: 'He is the tallest in the class.', explanation: 'One person in a group.' }
    ],
    commonMistakes: [
      { wrong: 'More tall than...', right: 'Taller than...' },
      { wrong: 'The most fast car.', right: 'The fastest car.' }
    ],
    exercises: [
      {
        id: 'comp-1',
        question: 'This book is _____ than the one I read yesterday.',
        options: ['gooder', 'more good', 'better'],
        correctAnswer: 'better',
        explanation: '"Good" is irregular. Its comparative form is "better".'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'Adjective Forms',
        headers: ['Adjective Type', 'Comparative', 'Superlative'],
        rows: [
          ['Short (1 syllable)', 'Add -er (faster)', 'The -est (fastest)'],
          ['Ending in -y', 'Change to -ier (happier)', 'The -iest (happiest)'],
          ['Long (2+ syllables)', 'More + adj (more beautiful)', 'The most + adj'],
          ['Irregular: Good', 'Better', 'The Best'],
          ['Irregular: Bad', 'Worse', 'The Worst']
        ]
      }
    ]
  },
  {
    id: 'countable-uncountable',
    title: 'Countable & Uncountable',
    category: Category.GRAMMAR,
    shortDescription: 'How to use items we can count vs items we cannot.',
    longDefinition: 'Countable nouns have plural forms (apples). Uncountable nouns only have a singular form (water, information).',
    usage: [
      'Countable: A/An, many, a few.',
      'Uncountable: Much, a little, some.'
    ],
    structure: {
      affirmative: 'There are many apples / There is some milk',
      negative: 'There aren\'t any / There isn\'t much',
      question: 'How many...? / How much...?'
    },
    examples: [
      { english: 'I have some books.', explanation: 'Countable plural.' },
      { english: 'I need some advice.', explanation: 'Uncountable (never "advices").' }
    ],
    commonMistakes: [
      { wrong: 'I have many informations.', right: 'I have a lot of information.' },
      { wrong: 'How many water do you need?', right: 'How much water do you need?' }
    ],
    exercises: [
      {
        id: 'count-1',
        question: 'How _____ sugar would you like in your tea?',
        options: ['many', 'much', 'few'],
        correctAnswer: 'much',
        explanation: 'Sugar is uncountable, so we use "much".'
      }
    ],
    videos: [],
    additionalTables: [
      {
        title: 'Common Uncountable Nouns',
        headers: ['Category', 'Examples'],
        rows: [
          ['Liquids', 'Water, milk, juice, coffee'],
          ['Abstract Ideas', 'Love, time, information, advice'],
          ['Materials', 'Wood, gold, paper, metal'],
          ['Food (Mass)', 'Bread, rice, salt, meat, cheese']
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
    videos: [],
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
    videos: [],
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
    videos: [],
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
    videos: [],
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
