import re

tags ='<ngb-card [clss]="[text-dark, bg-info, mb-3]"><div class="card-header">Header</div><div class="card-body"><h5 class="card-title">Info card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulkof the cards content.</p></div></ngb-card>'

# Reemplazar mayor y menor
tags=tags.replace('<', '&lt;').replace('>','&gt;')

# Obtener los value de los elementos
ttle = re.findall(r'\&gt;[a-zA-Z-.\s0-9]+\&lt;', tags)
ttle = [x.replace('&lt;','').replace('&gt;','') for x in ttle]
ttle = list(set(ttle))

# Obtener los nombres de clases
clss= re.findall(r'\"[a-z-,\[\]\s]+\"', tags)
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