import re

tags ='<ngb-navbar [side]="??right??" [clss]="[??navbar-expand-lg??, ??navbar-light??, ??mt-2??]" [brnd]="{text: ??Navbar??, clss:[], imag: ????}"[prpt]="{??background-color??: ??#e3f2fd??}">...</ngb-navbar>'



# Reemplazar mayor y menor
tags=tags.replace('<', '&lt;').replace('>','&gt;')
tags = tags.replace('{', '&lcub;').replace('}', '&rcub;')
# Obtener los value de los elementos
ttle = re.findall(r'\&gt;[a-zA-Z-.\s0-9]+\&lt;', tags)
ttle = [x.replace('&lt;','').replace('&gt;','') for x in ttle]
ttle = list(set(ttle))

# Obtener los nombres de clases
clss= re.findall(r'\"[a-z0-9-,\[\]\(\)%;:\s]+\"', tags)
clss=list(set(clss))

# Obtener los inputs
inpt=re.findall(r'\[[a-z]+\]|\([a-z]+\)', tags)
inpt = list(set(inpt))

# Obtener los nombres de las directivas
drtv = re.findall(r'\s[a-z]+=', tags)
drtv = [x[1:-1] for x in drtv]
drtv = list(set(drtv))

for x in ttle:
	tags = tags.replace(x, '<span #356="ngb-dcmt-ttle">'+x+'</span>')
for y in clss:
	tags=tags.replace(y, '<span #356="ngb-dcmt-drtv-vlue">'+y+'</span>')
	
for y in inpt+drtv:
	tags=tags.replace(y, '<span #356="ngb-dcmt-drtv">'+y+'</span>')

tags= tags.replace('#356', 'class')
tags = tags.replace('&gt;&lt;', '&gt;<br>\n&lt;')
print(tags)