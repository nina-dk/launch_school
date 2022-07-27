contact_data = ["joe@email.com", "123 Main st.", "555-123-4567"]
contacts = {"Joe Smith" => {}}
data_type = [:email, :address, :phone]

contacts.each_value do |data|
  data_type.each do |key|
    data[key] = contact_data.shift
  end
end

p contacts

#Multiple entries
contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]
          ]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

i = 0
while i < contact_data.length
  contacts.each_value do |value|
    data_type.each do |type|
      if value.length < 3
        value[type] = contact_data[i].shift
      end
    end
    if contact_data[0].empty?
      contact_data.shift
    end
  end
  i += 1
end 
p contacts