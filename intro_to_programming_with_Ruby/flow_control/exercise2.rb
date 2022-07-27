def upcase(string)
  if string.length > 10
    string.upcase
  else
    string
  end
end

puts upcase("hello world")