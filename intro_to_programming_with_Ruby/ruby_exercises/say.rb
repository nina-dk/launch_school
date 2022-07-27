def say(words="hello")
  puts words + "."
end

say()
say("hello")
say("hi")
say("how are you")
say("I'm fine")

#method parameters are scoped at the method definition level
#and are not available outside of the method definition

def some_method(num)
  num = 7
end

a = 5
some_method(a)
puts a