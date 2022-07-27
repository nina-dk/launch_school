# def valid_number?(number_string)
#   number_string.to_i.to_s == number_string && number_string.to_i != 0
# end

num1 = nil
num2 = nil
loop do
  puts "Please enter a positive or negative integer:"
  num1 = gets.to_i
  next puts "Invalid input. Only non-zero integers are allowed." if num1 == 0
  loop do
    puts "Please enter a positive or negative integer:"
    num2 = gets.to_i
    next puts "Invalid input. Only non-zero integers are allowed." if num2 == 0
    break
  end
  if (num1 * num2 < 0)
     break puts "#{num1} + #{num2} = #{num1 + num2}"
  else 
    puts "You must provide one positive and one negative integer."
  end
end