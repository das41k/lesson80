console.log("Чётные элементы от 2 до 12")
for (let i = 2; i <= 12; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

console.log("Элементы от 10 до 1")
for (let i = 10; i >= 1; i--) {
  console.log(i)
}

let i = 2
console.log("Чётные элементы от 2 до 12, через while")
while (i <= 12) {
  if (i % 2 == 0) {
    console.log(i)
  }
  i += 1
}
i = 10
console.log("Элементы от 10 до 1, через while")
while (i >= 1) {
  console.log(i)
  i -= 1
}