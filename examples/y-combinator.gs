letrec (
  y = lambda (f) {
    (
      lambda (x) { (f lambda (v) { ((x x) v) }) }
      lambda (x) { (f lambda (v) { ((x x) v) }) }
    )
  }
  fac = lambda (fix) {
    lambda (v) {
      if (le v 1) then 1
      else (mul v (fix (sub v 1)))
    }
  }
) {
  # (y fac) = (fac (y fac)) = (fac (fac (y fac))) = ...
  [
    (put ((y fac) 1) " ")
    (put ((y fac) 5) " ")
    (put ((y fac) 10) "\n")
  ]
}
