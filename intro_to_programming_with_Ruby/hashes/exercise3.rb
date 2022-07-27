dog = {
  breed: "pug",
  age: "1 yr",
  color: "golden"
}

#print all of the keys
dog.each_key { |key| puts key }

#print all the values
dog.each_value {|value| puts value }

#print both keys and values
dog.each { |key, value| puts "Puppy has a #{key} of #{value}." }
