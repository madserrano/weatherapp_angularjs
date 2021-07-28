a = 5
b = 10
c = a + b

if c >=10:
    c = c + 1
    # Swap the values
    a = a + b
    b = a - b
    a = a - b
else:
    c = c + 10
    temp = a
    a = b
    b = temp

