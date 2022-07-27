def execute(block)
  block.call
end

execute { puts "Hello from inside the execute method!" }

#The ArgumentError tells us that though we should've provided one argument
#when we call the execute method on line 5, we provided none. That is because
#we needed to add the & symbol inside our parameter, so that Ruby expects a
#block as an argument to the execute method, like so:
#def execute(&block)