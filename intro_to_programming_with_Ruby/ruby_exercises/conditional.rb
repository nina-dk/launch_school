puts "Put in a number"
a = gets.chomp.to_i

if a == 3
  puts "a is 3"
elsif a == 4
  puts "a is 4"
else
  puts "a is neither 3, nor 4"
end

#one-line syntax with then
if a == 3 then puts "a is 3" end

#reversed one-line syntax
puts "a is 3" if a == 3

#unless word
puts "a is not 3" unless a == 3