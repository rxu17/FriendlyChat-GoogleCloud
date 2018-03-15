# FriendlyChat-GoogleCloud
<p> Creating Firebase FriendlyChat for Google Cloud instance using Ubuntu 16.04 </p>
<p> Following <a href="https://codelabs.developers.google.com/codelabs/firebase-web/">this guide.</a>
  
## What you need:
<ul>
  <li> nginx </li>
  <li> Firebase account </li>
  <li> Google instance/Google cloud SSH terminal</li>
  <li> node.js (npm) </li>
</ul>

### nginx 

### npm (Instructions)
<p> Had an issue with npm permissions so I resolved it using nvm.</p>
<p> On command line: </p>
<ol> 
  <li> nvm install node </li>
  <li> nvm use node </li>
  <li> npm install -g npm </li>
</ol>

### Section 6 (Sign in to Firebase Web Chat)
<p> When signing into Firebase web chat, it wouldn't let me so I needed to add my domain</p>
<p> Firebase consol -> Authentication -> Sign in method -> Authorized domains

### Section 7 (Read Messages)
<p> Manually downloaded the messages json file from github (raw -> save page as) </p>

### Section 10 (Show Notifications)
<p> Problem: Unable to get messaging token </p>
<p> Solution: Need to run the firebase server under SSL </p>
<ol> 
  <li> Generate a self signed SSL for testing/development purposes 
    <p> sudo open ssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyoyt /etc/ssl/private/example.com.key -out /etc/ssl/certs/example.com.crt </p> 
  </li>
  <li> Need to edit the config file of the nginx (as show in my github nginx_conf)
    <p> sudo vi /etc/nginx/sites-available/default</p>
  </li>
  <li> sudo nginx -t (check if it compiles)</li>
  <li> sudo systemctl restart nginx (restarts the server) </li>
  <li> Run your https://.... to see the exception and then allow the exception.</li>
</ol>

<ol>
  <li> Generate a reverse proxy using nginx </li>
  <li> Need to edit the config file of the nginx (as show in my github nginx_conf) and compile/restart as well. </li>
  <li> Run your firebase serve command </li>
  <li> https://.... to see your firebase chat and check the console to see that the token is saved! </li>
</ol>
