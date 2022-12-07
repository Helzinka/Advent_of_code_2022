import fs from "fs"

let raw = fs.readFileSync("./input.txt", "utf-8").toString().trim()
let input = raw.split("\n").map((e) => e.split(","))

let count = 0

for (const n of input) {
	let [a, b] = n[0].split("-")
	let [x, y] = n[1].split("-")

	if ((+a < +x && +b < +x) || (+a > +y && +b > +y)) {
		count += 1
	}
}
count = input.length - count

console.log(count)
