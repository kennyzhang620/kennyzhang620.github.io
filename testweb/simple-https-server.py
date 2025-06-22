from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl
from pathlib import Path

port = 4443

httpd = HTTPServer(("192.168.1.66", port), SimpleHTTPRequestHandler)
ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ssl_context.load_cert_chain(Path(__file__).parent / "server.pem")
httpd.socket = ssl_context.wrap_socket(
    httpd.socket,
    server_side=True,
)

print(f"Serving on https://192.168.1.66:{port}")
httpd.serve_forever()