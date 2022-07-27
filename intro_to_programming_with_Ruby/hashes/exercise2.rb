athlete = {
  name: "John",
  last_name: "Doe",
  age: 27
}

second_hash = {
  hair: "black",
  height: "174 cm",
  weight: "82 kilos"
}

p athlete.merge(second_hash) # returns a new hash that contains the contents
p athlete                    # of athlete and second_hash
p second_hash

p athlete.merge!(second_hash) # permanently merges the contents of athlete
p athlete                     # and second_hash in the athlete hash
p second_hash

# second_hash remains intact in both cases