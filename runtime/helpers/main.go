package main

import "fmt"

const tpl = `// Code generated by runtime/helper/main.go. DO NOT EDIT.

package runtime

var (
	trueValue     = NewNumber(1, 1)
	falseValue    = NewNumber(0, 1)
	voidValue     = NewVoid()
	emptyStrValue = NewString("")
)

var numValue = map[int]Value{
%s}
`

func main() {
	items := ""
	for i := -5; i <= 256; i++ {
		items += fmt.Sprintf("\t%d: NewNumber(%d, 1),\n", i, i)
	}
	fmt.Printf(tpl, items)
}