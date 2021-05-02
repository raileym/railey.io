from ctns_make import ctns_make as CTNS_MAKE
from ctns      import ctns as CTNS

m_list = [
    'LF-GeneralFormS'
]

for m in m_list:
    #CTNS_MAKE(match=m)
    CTNS(match=m, image_target=m, preview=True, process_support_files=True, encrypt=False, opt_ctns = [ 
        "flashcard"
      , "quiz_container_css='width:100%;'"
      , "quiz" ])

