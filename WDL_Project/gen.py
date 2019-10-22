import os
l = [ i[:-5] for i in os.listdir('.') if i[-5:] == ".html"]
template = """,{{
"source": "/{0}",
"destination": "/{0}.html"
}}"""
for x in l:
	print(template.format(x))