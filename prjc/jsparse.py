import re

text = 'closeAlert(alert: Alert) {  this.alertsd.splice(this.alertsd.indexOf(alert), 1);  }'
text = text.replace(" ", "")
cgui = 61

## variables
fvpatt = r'[a-zA-Z]+\s?:|\.[a-zA-Z]\.'

vvarl = re.findall(fvpatt, text)

ttle = "\nvariable "
print(ttle+"="*(cgui-len(ttle)))
#print(vvarl)

flam = lambda y: re.sub(r'\s|\:', '', y)

fvar = set(map(flam, vvarl))

print(fvar)

## clases
cpatt = r':\s?[a-zA-Z]+[(\[\]*\s?=)|(\))]'

cclss = re.findall(cpatt, text)

ttle = "\ntipos de datos "
print(ttle+"="*(cgui-len(ttle)))
#print(cclss)

dlam = lambda x: re.sub(r'\[|\]|\s|\=|\:|\)', '', x)
dvar = set(map(dlam, cclss))

print(dvar)

## boolean
bpatt = r'true|false|this'

bdats = set(re.findall(bpatt, text))

ttle = "\nboolean "
print(ttle+"="*(cgui-len(ttle)))

print(bdats)

## text
tpatt = r'\"[a-zA-Z\s#]*\"'

ttext = set(re.findall(tpatt, text))

ttle = "\ntextos "
print(ttle+"="*(cgui-len(ttle)))
print(ttext)

## funciones
fnpatt = r'[a-zA-Z]+\('
fncn = set(re.findall(fnpatt, text))

flam = lambda x: re.sub(r'\(', '', x)
fnva = set(map(flam, fncn))

ttle = "\nfunciones "
print(ttle+"="*(cgui-len(ttle)))
print(fnva)

## numbers
npatt = r'[0-9]+[\)|\,]'
numb = set(re.findall(npatt, text))

nlam = lambda x: re.sub(r'\)|\,', '', x)

nvar =set(map(nlam, numb))

ttle = "\nnumber "
print(ttle+"="*(cgui-len(ttle)))
print(nvar)

"""
.ngb-js-var{
color: var(--bs-gray-dark)
}
.ngb-js-cla{
    color: var(--bs-green)
}
.ngb-js-tex{
    color: var(--bs-orange)
}
.ngb-js-boo{
    color: var(--bs-blue)
}
.ngb-js-sig{
    color: var(--bs-gray-dark)
}
.ngb-js-fun{
    color: var(--bs-yellow);
}
.ngb-js-num{
    color: var(--bs-pink);
}
"""

text = text.replace("=", '<span class="ngb-js-sig"> = </span>\n')
text = text.replace(":", '<span class="ngb-js-sig">: </span>\n')

for h in ["{", "[", "}", "]", ",", ";"]:
    text = text.replace(h, '<span class="ngb-js-sig">' + h + '</span>\n')

for t in ttext:
    text = text.replace(t, '<span class="ngb-js-tex">' + t + '</span>\n')
for b in bdats:
    text = text.replace(b, '<span class="ngb-js-boo">' + b + '</span>\n')
for d in dvar:
    text = text.replace(d, '<span class="ngb-js-cla">' + d + '</span>\n')
for f in fvar:
    text = text.replace(f, '<span class="ngb-js-var">' + f + '</span>\n')
for y in fnva:
    text = text.replace(y, '<span class="ngb-js-fun">' + y + '</span>\n')
for h in nvar:
    text = text.replace(h, '<span class="ngb-js-num">' + h + '</span>\n')

text = text.replace("{", "&#123;")
text = text.replace("}", "&#125;")
text = text.replace(",", ", ")

ttle = "\nresult "
print(ttle + "%"*(cgui-len(ttle)))
print(text)

