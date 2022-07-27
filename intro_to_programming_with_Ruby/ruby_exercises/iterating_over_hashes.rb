person = {name: "bob", height: "170 cm", weight: "80 kilos", age: 31}

person.each do |key, value|
  puts "Bob's #{key} is #{value}."
end