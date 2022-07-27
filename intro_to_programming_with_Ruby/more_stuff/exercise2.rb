def execute(&block)
  block
end

execute { puts "Hello from inside the execute method!" }

#It will print nothing to the screen and it'll return a Prock object.

#exercise 4 - modify the above to execute properly

def execute(&block)
  block.call
end

execute { puts "Hello from inside the execute method!" }