letrec (
  a = (void)
  b = 1/2
  c = "str"
  d = lambda () { 0 }
  e = (callcc lambda (k) { (k k) })
) {
  [
    (put a "\n")
    (put b "\n")
    (put c "\n")
    (put d "\n")
    (put e "\n")
  ]
}
