from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from python.feedsNew import export_feeds_JSON

class Serv(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        if self.path == '/':
            self.path ='/index.html'
        
        elif self.path == '/get-articles':
            
            result = export_feeds_JSON()
            response = json.dumps(result).encode()

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(response)

        
        if self.path != '/get-articles':
            try:
                file_to_open = open(self.path[1:]).read()
                self.send_response(200)
            except:
                file_to_open = 'File Not Found'
                self.send_response(404)
            self.end_headers()
            self.wfile.write(bytes(file_to_open, 'utf-8'))

print('The Server is up and running, boss!')

httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()