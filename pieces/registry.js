// Single source of truth for all pieces.
// To publish a piece: set status to 'live' and make sure
// pieces/{id}/index.html exists.
window.PIECES = [
  {
    id: 'etch-a-phone',
    title: 'Etch-a-Phone',
    description: 'Enter your phone number by etching each digit on an Etch-a-Sketch. Onboard OCR guesses what you drew.',
    category: 'Interactions',
    tags: ['etch-a-sketch', 'ocr', 'phone'],
    icon: 'gesture',

    dateAdded: '2026-05-20',
    credit: 'Reddit',
    sin: 'Gating a text field behind one-line handwriting OCR',
  },
  {
    id: 'random-phone',
    title: 'Random phone',
    description: 'No field to type in — it shows a random phone number and asks if it is yours. Next for another.',
    category: 'Interactions',
    tags: ['phone', 'random', 'input'],
    icon: 'casino',

    dateAdded: '2026-05-20',
    credit: 'Reddit',
    sin: 'Replacing input with a slot machine',
  },
  {
    id: 'date-boomerang',
    title: 'Date Boomerang',
    description: 'A birthday slider whose handle bounces end to end. Hit Pick at the right instant to catch a date.',
    category: 'Interactions',
    tags: ['slider', 'date', 'timing'],
    icon: 'cake',

    dateAdded: '2026-05-20',
    credit: 'Reddit',
    sin: 'The date handle never holds still',
  },
  {
    id: 'date-slider',
    title: 'Date Slider',
    description: 'Pick your exact birthday with one slider spanning 125 years. One pixel ≈ months.',
    category: 'Interactions',
    tags: ['slider', 'date', 'precision'],
    icon: 'calendar_month',

    dateAdded: '2026-05-10',
    credit: 'Reddit',
    sin: 'Continuous control for a precise discrete value',
  },
  {
    id: 'phone-boomerang',
    title: 'Phone Boomerang',
    description: 'A phone-number slider whose handle springs back to the start — at the speed you pick.',
    category: 'Interactions',
    tags: ['slider', 'input', 'phone'],
    icon: 'undo',

    dateAdded: '2026-05-15',
    credit: 'Reddit',
    sin: 'Control refuses to hold its value',
  },
  {
    id: 'pump-volume',
    title: 'Pump It Volume!',
    description: 'Raise the volume by manually pumping a bike pump. Drag the handle up and down. It leaks.',
    category: 'Interactions',
    tags: ['volume', 'pump', 'effort'],
    icon: 'air',

    dateAdded: '2026-05-01',
    credit: 'Reddit',
    sin: 'Absurd physical effort for a one-click control',
  },
];
