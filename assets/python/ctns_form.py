# SLIDE, DYNAMIC, CONTROLS
FORM_SLIDE_1 = [    
        "slide"
      , "css='padding:0'"
      , "dynamic"
      , "no_buttons"
      , "no_divide"
      , "quiz_container_css='padding:0;'"
    ]
    
# SLIDE, NOT DYNAMIC, NO BUTTONS, NO CONTROLS
FORM_SLIDE_2 = [ 
        "slide"
      , "css='padding:0'"
      , "no_buttons"
      , "no_controls"
      , "no_divide"
      , "quiz_container_css='padding:0;'"
    ]

# SLIDE, DYNAMIC, QAC
FORM_SLIDE_3 = [ 
        "slide"
      , "answer_css='text-align:left;'"
      , "dynamic"
      , "qac"
      , "question_css='text-align:left;'"
      , "quiz_container_css='width:100%;'"
    ]
    
# SLIDE, KITCHEN SINK: BUILDING A QUIZ
FORM_SLIDE_4 = [ 
        "slide"
      , "answer_css='text-align:left;'"
      , "count=3"
      , "dynamic"
      , "multiplier=2"
      , "qac"
      , "question_css='text-align:left;'"
      , "quiz_container_css='width:100%;'"
      , "quiz_css='width:100%;'"
      , "random"
      , "shuffle"
      , "slide_css='margin:1em auto 0 auto;'"
    ]
    
# SLIDE, MATCH SURROUNDING TEXT
FORM_SLIDE_5 = [    
        "slide"
      , "css='padding:0'"
      , "dynamic"
      , "no_buttons"
      , "no_divide"
      , "quiz_container_css='padding:0;'"
      , "question_css='font-weight:normal; text-align:left;'"
    ]
    
# TEXT
FORM_TEXT_1 = [    
        "slide"
      , "text"
      , "dynamic"
      , "quiz_container_css='width:100%;'"
      , "quiz_css='width:100%;'"
      , "slide_css='width:100%;max-width:1024px;'"
      , "answer_css='font-size:1em;font-weight:normal;'"
      , "question_css='font-size:1em;font-weight:normal;'"
      , "css='text-align:left;font-family:helvetica;font-weight:normal;font-size:120%;color:rgb(77,77,77);'"
    ]
    
# FLASHCARD, NOTHING ELSE
FORM_FLASHCARD_1 = [ 
        "flashcard"
      , "no_controls"
      , "no_buttons"
      , "quiz_container_css='width:100%;'"
    ]
    
# FLASHCARD, NOTHING BUT BUTTONS
FORM_FLASHCARD_2 = [ 
        "flashcard"
      , "no_controls"
      , "quiz_container_css='width:100%;'"
    ]

# QUIZ, FLASHCARDS
FORM_QUIZ_1 = [ 
        "shuffle"
      , "dynamic"
      , "flashcard_quiz"
]
