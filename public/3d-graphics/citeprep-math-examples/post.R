library(httr)
library(rvest)
library(xml2)

post <- function(host="https://testcite.com/showcase4/", target, opt) {

  # See https://f.briatte.org/r/scraping-form-results-with-httr
  h <- POST(host,
    body = list(
      target = toString(target),
      opt = opt)) %>%
    content("text", encoding = "UTF-8") %>%
    read_html(encoding = "UTF-8") 
      
  ctns_all             <- h %>% html_nodes(" *")
#  ctns_body           <- h %>% html_nodes(" body div.ctns-body")
#  ctns_quiz_container <- h %>% html_nodes(" body div.ctns-quiz-container")
#  ctns_button_group   <- h %>% html_nodes(" body div.ctns-button-group")
#  ctns_results        <- h %>% html_nodes(" body div.ctns-results")
#  ctns_script         <- h %>% html_nodes(" body script")

  result <- cat(paste(ctns_all,   collapse='' ))
#  result <- cat(paste(ctns_body,   collapse='' )) +
#    cat(paste(ctns_quiz_container, collapse='' )) +
#    cat(paste(ctns_button_group,   collapse='' )) +
#    cat(paste(ctns_results,        collapse='' )) +
#    cat(paste(ctns_script,         collapse='' ))

  return(result)
}

