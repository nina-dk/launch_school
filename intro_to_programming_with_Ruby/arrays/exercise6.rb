names = ['bob', 'joe', 'susan', 'margaret']
names['margaret'] = 'jody'

# TypeError: no implicit conversion of String into Integer
#  from (irb):2:in `[]='
#  from (irb):2
#  from /Users/username/.rvm/rubies/ruby-2.5.3/bin/irb:12:in `<main>'

#The #[] method takes an integer as an argument whereas we provided
#a string, 'margaret'. We should instead write: 

names[3] = 'jody'

#to alter the value of the element at index 3 (i.e. 'margaret').
#Alternatively, if we don't know the index of the element we wish
#to change the value of, we could write:

names[names.index('margaret')] = 'jody'