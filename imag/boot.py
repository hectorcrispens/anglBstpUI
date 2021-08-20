data = ""
with open("bootstrap.min.css", "r") as f:
	data = f.read()

data = data.replace(";", ";\n")
data = data.replace("}", "}\n\n")
data = data.replace("{", "{\n")

g = open("bootstrap.parsed.css", "w")
g.write(data)
g.close()
