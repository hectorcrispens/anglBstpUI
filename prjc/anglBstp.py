import re

tags ='<ngb-modal [clss]="[modal-dialog-scrollable]"><div class="modal-header"><h5 class="modal-title">Modal title</h5><ngb-button [clss]="[btn-close]" (clck)="scrollModal.tgle()"></ngb-button></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi urna, rhoncus et sagittis eu, venenatis id sapien. Donec ut ipsum eu enim dapibus scelerisque. In sit amet orci interdum nisi tincidunt tristique. Morbi pellentesque, sapien a feugiat tempus, orci diam scelerisque est, id vehicula augue neque sit amet enim. Nam dignissim commodo augue nec tincidunt. Morbi varius arcu metus, nec mollis massa fermentum ut. Quisque facilisis leo vel neque lacinia semper. Nulla efficitur nisl sapien, quis suscipit metus placerat in. Curabitur varius, erat sed bibendum pretium, ex ipsum tempus nisi, luctus tempor neque ex vel odio.Donec accumsan in diam et tincidunt. Nullam purus libero, accumsan vehicula ligula vel, aliquet vehicula libero. Aenean dignissim vel tortor eu aliquet. Quisque venenatis lorem et metus maximus, vitae consequat leo hendrerit. Duis eget diam ut neque maximus molestie. Mauris ac semper turpis, nec pellentesque nibh. Integer et dui consectetur, elementum purus nec, facilisis nunc. Nulla vitae laoreet eros, quis commodo mauris. Vestibulum a odio tellus. Vivamus vitae lacus at lectus bibendum porttitor in eu elit. Praesent porttitor enim eu lacinia convallis. Fusce elit arcu, gravida non dapibus vitae, iaculis non massa. Donec non ligula faucibus, sollicitudin eros ut, porttitor turpis. Pellentesque dignissim venenatis dolor.Nunc sollicitudin erat libero, et imperdiet nibh fermentum id. Quisque lacinia magna facilisis ligula faucibus, non malesuada orci varius. Nam sed velit maximus, tempus dolor lacinia, ultrices nisi. Curabitur porta sagittis ipsum nec consequat. Donec lobortis, est euismod venenatis viverra, erat erat venenatis tellus, sit amet tincidunt massa augue at leo. Integer nec scelerisque metus. Aenean ullamcorper bibendum felis, sed sodales odio mollis sed. Nunc non sodales enim, a semper purus. Curabitur dignissim justo ut massa viverra, quis gravida ante feugiat. Phasellus vel enim eget elit rutrum interdum. Nunc est dolor, sollicitudin scelerisque varius ornare, mattis sit amet purus. Ut tellus justo, gravida rhoncus dolor at, feugiat tincidunt massa. Morbi gravida iaculis diam. Suspendisse vel magna commodo, efficitur arcu non, tempus lacus. </div><div class="modal-footer"><ngb-button [clss]="[btn, btn-secondary]" (clck)="scrollModal.tgle()" >Close</ngb-button><ngb-button [clss]="[btn, btn-primary]" class="example-button">Save changes</ngb-button></div></ngb-modal>'



# Reemplazar mayor y menor
tags=tags.replace('<', '&lt;').replace('>','&gt;')

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
	tags = tags.replace(x, '<span #356="code-black">'+x+'</span>')
for y in clss:
	tags=tags.replace(y, '<span #356="code-blue">'+y+'</span>')
	
for y in inpt+drtv:
	tags=tags.replace(y, '<span #356="code-gray">'+y+'</span>')

tags= tags.replace('#356', 'class')
tags = tags.replace('&gt;&lt;', '&gt;<br>\n&lt;')
print(tags)