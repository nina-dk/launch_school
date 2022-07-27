#1

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.each { |n| puts n }

#2

puts array.filter { |n| n > 5 }

#3

odds_array = array.select { |n| n.odd? }

#4

array.push(11)
array.unshift(0)

#5

array.pop
array << 3

#6

array.uniq!