require "socket"

PAGE_ROOT = "./pages"

server = TCPServer.new('localhost', 3000)
print "server @ http://localhost:3000\n"

def compose(filename, replacements = nil, render_md = false)
	# Read the file
	file = File.read(PAGE_ROOT + filename.strip)

	# Load includes
	file = file.gsub(/<<<([^>]+)>>>/) {|_| compose($1)}
	
	# Substitute replacements if dictionary included
	file = replacements != nil ? file.gsub(/\{\{\{([^\}]+)\}\}\}/) {|_| replacements[$1.strip]} : file

	return file
end

def http_response(response)
	return "HTTP/1.1 200 OK\r\n" +
		"Server: Custom (ruby)\r\n" +
		"Content-Type: text/html\r\n" +
		"Content-Length: #{response.bytesize}\r\n" +
		"Connection: close\r\n" +
		"\r\n" +
		response
end

loop do

	socket = server.accept
	request = socket.gets.split

	print request
	print "\n"

	if request[0] == "GET"
		case request[1]
		when "/"
			socket.print http_response compose "/index.html", {"complete-percent" => 75 }
		else
			socket.print http_response compose request[1]
		end
	else
		socket.print "Only GET requests are supported right now"
		socket.close
	end
end