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

### npm
<p> Had an issue with npm permissions so I resolved it using nvm.
<ol> On command line:
  <li> nvm install node </li>
  <li> nvm use node </li>
  <li> npm install -g npm </li>
</ol>

### Section 6 
<p> When signing into Firebase web chat, it wouldn't let me so I needed to add my domain</p>
<p> Firebase consol -> Authentication -> Sign in method -> Authorized domains

### Section 7 
<p> Manually downloaded the messages json file from github (raw -> save page as) </p>
