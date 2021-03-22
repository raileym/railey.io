from post import post as P

output = P(
    #static_dir = "../../../static",
    #write_image = False,
    #write_file = False,
    target = [
      "test-linearQ15-9d-v8"
    ], 
    opt_ctns = [
      "no_buttons",
      "quiz_css='width:100%;margin: 2em 1em 2em 1em;'", 
      "no_reference", 
      "flush"
    ])

print(output)
