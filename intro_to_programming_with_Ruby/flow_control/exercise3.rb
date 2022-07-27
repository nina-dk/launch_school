puts "Type a number between 0 and 100:"
num = gets.chop.to_i
answer = case
  when num > 0 && num <= 50
    "Your number is between 0 and 50."
  when num >= 51 && num <= 100
    "Your number is between 51 and 100."
  when num > 100
    "Your number is greater than 100."
  else
    "Invalid input."
  end

puts answer