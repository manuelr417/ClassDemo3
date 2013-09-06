<h1>Class Demo2</h1>
This project shows a simple jQuery Mobile App that interects with  
a server. The content of the list of cars is read from a Node.js server
using REST operations. The content of the list is dynamically loaded 
before the page is shown. Study the code in the 
files app.js and car.js <br/>

The structure of the project is: <br/>
a) index.html - the HMTL5 file with the pages that make up the app.<br/>
b) js - directory with the jQuery and jQuery mobile libraries.<br/>
c) css - directory with the jQuery Mobile CSS styles.<br/>
d) appjs - directory with the Javascript specific to the app.<br/>
e) car.js - file implementing a car object.<br/>
f) app.js - implementation of application operations. <br/>

<h2>Editing:</h2>
Simply import this project to an IDE, such as Aptana 3. In such case,
use the File->Import->General->Existing Projects into Workspace
and provide the location of the directory for the project.

<h2>Running:</h2>
You will also need to run the server. For this, look in	the companion project
<a href="" >ClassDemp3Srv</a>.

ClassDemo3 is a mobile web app, hence you need a web server to serve the files.
You will also need to run the server. For this, look in the companion project
<a href="" >ClassDemp3Srv</a>.
 
You can use Apache2 for this purpose. Check the web for instuctions on how to set it up on your platform. 
You will need to put the project directory into the www directory 
of the web server you are running. For example:<br/>
a) Mac OS - /Users/username/Site (username will be your user name on the Mac.<br/>
b) Ubuntu Linux - /var/www  (You will need to become superuser to add files)<br/>

Once setup for running, access the project with its URL. For example:<br/>
http://localhost/~manuel/ClassDemo2  (Mac Setup) <br/>
<br/>
http://localhost/ClassDemo2 (Ubuntu Linux Setup)
