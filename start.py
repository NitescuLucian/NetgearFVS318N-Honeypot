from flask import Flask, redirect, url_for, request, session, render_template, g, send_from_directory, make_response
from time import gmtime, strftime

app = Flask(__name__)

@app.route("/")
def redi():
	resp = make_response(redirect('/scgi-bin/platform.cgi'))
	resp.headers['Server'] = 'Embedded HTTP Server.'
	return resp

@app.route("/scgi-bin/platform.cgi", methods = ['POST', 'GET'])
def index():
	if request.method == 'GET':
		resp = make_response(render_template('/platform.cgi')) 
		resp.headers['Server'] = 'Embedded HTTP Server.'
		return resp
	else:
		resp = make_response(render_template('/platform2.cgi')) 
		resp.headers['Server'] = 'Embedded HTTP Server.'
		return resp

#js
@app.route('/scgi-bin/js/<path:path>')
def send_js(path):
	return send_from_directory('js', path)

#images
@app.route('/scgi-bin/images/<path:path>')
def send_images(path):
	return send_from_directory('images', path)

@app.before_request
def log_request():
	buf = ""
	buf += "\n\n\n\n"
	buf += "Attacker IP: " + request.remote_addr
	buf += "\n\n"
	buf += strftime("%Y-%m-%d %H:%M:%S", gmtime())
	buf += "\n\n"
	buf += str(request.headers)
	buf += "\n\n"
	buf += str(request.form)
	buf += "\n\n"
	buf += str(request.data)
	buf += "=========================================="
	with open("attack_log.txt", "a") as myfile:
		myfile.write(buf)

if __name__ == '__main__':
	app.run(debug = True) # remove debug = True