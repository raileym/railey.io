import pdfkit
#pdfkit.from_url('http://localhost:4321/a2-1-preliminary/1-3-function-types/','mr.pdf')

options = {
    'page-size': 'A4',
    'margin-top': '0.75in',
    'margin-right': '0.75in',
    'margin-bottom': '0.75in',
    'margin-left': '0.75in',
}
pdfkit.from_url('http://localhost:4321/a2-1-preliminary/1-3-function-types/','mr.pdf', options=options)

