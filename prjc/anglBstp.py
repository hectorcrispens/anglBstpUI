import re

tags ='<ngb-card><div class="row g-0"><div class="col-md-8"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div><div class="col-md-4"><img style="width: 100%; height: 100%;" src="imag03.jpg" class="img-fluid rounded-start" alt="..."></div></div></ngb-card>'

# Reemplazar mayor y menor
tags=tags.replace('<', '&lt;').replace('>','&gt;')

# Obtener los value de los elementos
ttle = re.findall(r'\&gt;[a-zA-Z-.\s0-9]+\&lt;', tags)
ttle = [x.replace('&lt;','').replace('&gt;','') for x in ttle]
ttle = list(set(ttle))

# Obtener los nombres de clases
clss= re.findall(r'\"[a-z0-9-,\[\]%;:\s]+\"', tags)
clss=list(set(clss))

# Obtener los inputs
inpt=re.findall(r'\[[a-z]+\]', tags)
inpt = list(set(inpt))

# Obtener los nombres de las directivas
drtv = re.findall(r'\s[a-z]+=', tags)
drtv = [x[1:-1] for x in drtv]
drtv = list(set(drtv))

for x in ttle:
	tags = tags.replace(x, '<span #356="code-black">'+x+'</span>')
for y in clss:
	tags=tags.replace(y, '<span #356="code-blue">'+y+'</span>')
	
for y in inpt+drtv:
	tags=tags.replace(y, '<span #356="code-gray">'+y+'</span>')

tags= tags.replace('#356', 'class')
tags = tags.replace('&gt;&lt;', '&gt;<br>\n&lt;')
print(tags)