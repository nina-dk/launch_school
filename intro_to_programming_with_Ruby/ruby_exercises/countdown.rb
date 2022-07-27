x = gets.chomp.to_i

while x >= 0
  puts x
  x -= 1
end

puts "Done!"

#same using the until loop

y = gets.chomp.to_i

until y < 0
  puts y
  y -= 1
end

#same using the for loop

z = gets.chomp.to_i

for i in 1..z do
  puts i
end

puts "Done!"

#or
for i in [1, 2, 3, 4, 5]
  puts i 
end