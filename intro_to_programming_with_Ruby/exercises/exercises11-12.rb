#11

contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

data = [:email, :address, :phone]

for i in 0..2
  contacts["Joe Smith"].store(data[i], contact_data[0][i])
  contacts["Sally Johnson"].store(data[i], contact_data[1][i])
end

#12

contacts["Joe Smith"][:email]
contacts["Sally Johnson"][:phone]