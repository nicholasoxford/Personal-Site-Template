<template>
  <div>
      <h1 id="sample-markdown">Sample Markdown</h1>
<h1 id="creating-an-augmented-reality-app-with-4dviews-volumetric-capture">Creating an augmented reality app with 4DViews Volumetric Capture</h1>
<p><a href="https://www.youtube.com/watch?v=AOq1-qcb6Nk&amp;feature=youtu.be">CLick Here For a Video of the Capture + iOS APP</a></p>
<p>For my second volumetric class I wanted to not only get an engaging capture, but also deploy it to an augmented reality (AR) app on my iPhone. After successfully deploying an AR app using a 4DViews Capture + Unity plugin, I was very aware of the lack of tutorials and documentation around each step of the process. To make easier for my classmates to deploy and showcase their awesome work, I decided to make a step-by-step guide. </p>
<p>While this is a good, general Vuforia tutorial, this is really meant for people utilizing a <a href="https://www.4dviews.com/">4DViews</a> system. I have my full repository uploaded, this guide should be follow step by step. Also, I am using a <strong>Mac</strong> and I&#39;m deploying to <strong>iPhone</strong>. Using windows and android should not only be similar but easier to deploy. </p>
<p>I am not an iOS developer, so I am encouraging people to submit Pull Request if their code is better. (It probably is)</p>
<h2 id="apple-developer-program">Apple Developer Program</h2>
<p><strong>If you are not planning on deploying to iPhone you can ignore this.</strong></p>
<p>While trying to deploy my X-Code app I was forced to sign up for a developer account. Some people have said I didn&#39;t need to spend the 100 dollars to be enrolled in Apple&#39;s program, but I haven&#39;t figured out how. I believe you need the securiry certificates because we&#39;re using &quot;Advanced Features&quot; (AR). </p>
<p><a href="https://developer.apple.com/programs/enroll/">Click here to begin enrollment in Apple Development Program</a></p>
<p><a href="https://developer.apple.com/download/release/">Click here to Download X-Code</a></p>
<h2 id="step-1">Step 1</h2>
<h3 id="capture-render-and-export-your-volumetric-capture-off-the-4dviews-system-">Capture, Render, and Export your volumetric capture off the 4DViews system.</h3>
<p>4DViews exports a filetype .4ds, you need plugins to make Unity understand the system&#39;s capture. Typically, 15 second capture, at 30fps would be a little less than half a gigabyte.</p>
<h2 id="step-2">Step 2</h2>
<h3 id="download-unity-hub-unity-2018-4-13f1">Download Unity Hub + Unity 2018.4.13f1</h3>
<p><a href="https://id.unity.com/en/conversations/9d93c0eb-460b-4339-b9a1-97dc3e29936e012f">Click this link to Create a Unity account (if you don&#39;t have one)</a></p>
<p><a href="https://public-cdn.cloud.unity3d.com/hub/prod/UnityHubSetup.dmg?_ga=2.2087473.1036159940.1575574700-22838654.1573235003">Click this link to download Unity Hub</a></p>
<p>Sign Into Unity Hub with your new account and click License Management. Click &quot;Manual Activation&quot;. If this isn&#39;t popping up click the settings button on the top right.</p>
<p><img src="https://github.com/nicholasoxford/4dviews_vuforia_AR/blob/master/screenshots/Screen%20Shot%202019-12-05%20at%202.50.22%20PM.png?raw=true" alt=""></p>
<p>Click Save License Request and save it somewhere easily accessible. Either click on the link below  &quot;Save License Request&quot; or click <a href="https://license.unity3d.com/manual">here</a>.</p>
<p>Upload the file you just saved and click next. </p>
<p><strong>On the next page make sure to click &quot;Unity Personal Edition&quot;. Then click &quot;I don’t use Unity in a professional capacity.&quot;</strong></p>
<p>Download the <em>new</em> license file in a place you can easily find it and return back to the unity hub. </p>
<p>On Unity Hub click next and locate the file you just downloaded. It should have an filetype of &quot;.ulf&quot;. Click Confirm. Now go to the top right where it says &quot;preferences&quot; and click back. </p>
<p>Click the &quot;Installs&quot;  tab on the left and then click &quot;Add&quot;. </p>
<p>Locate <strong>Unity 2018.4.13f1 LTS</strong> and click next. Now chose which Modules you want. </p>
<ul>
<li>Check Vuforia Augmented Reality Support</li>
<li>If you are on Windows and deploying to android chose Windows Build Support and Android Build Support&quot;.</li>
<li>If you are on a Mac and deploying to iPhone chose Mac Build Support and iOS Build Support&quot;.</li>
</ul>
<p>Let it Download.</p>
<h2 id="step-3">Step 3</h2>
<h3 id="setting-up-vuforia">Setting up  Vuforia</h3>
<p><a href="https://developer.vuforia.com/vui/auth/register">Create a Vuforia Account</a>.</p>
<p><a href="https://developer.vuforia.com/vui/develop/licenses">Create A Development Key</a></p>
<ul>
<li>Click &quot;Get Development Key&quot; and name it.</li>
<li>On the top toolbar next to &quot;License Manager&quot;, click &quot;Target Manager&quot;</li>
</ul>
<p>Target Manager is where you are you uploading your &quot;targets&quot;, or what you want your AR app to cast on. Now the photos have to be less than 2mbs, so you might have to lower the file size using an app of your choice. </p>
<ul>
<li>Click &quot;Add Database&quot; on the Top Right and name it something relevant. For the &quot;Type&quot; chose &quot;Device&quot;.</li>
<li>Click on the database you just created, and then click &quot;Add Target&quot;.</li>
<li>Chose Single Image as the type and file location</li>
<li>It might throw an error, usually dealing with size or color space. These are usually an easy fix.</li>
<li>I would sit the width to &quot;10&quot; and name it. </li>
</ul>
<p>Now once you uploaded your photos, refresh the page. It will automatically rate your photo. The rating is based on how many target points it can detect. I would try different images until you get at minimum a three star photo. Now you really only need to upload one photo here, as this tutorial deals with one target. </p>
<ul>
<li>Click &quot;Download Database(ALL)&quot; and save the file somewhere you can easily access it. </li>
</ul>
<h2 id="step-4">Step 4</h2>
<h3 id="downloading-the-4dviews-plugin">Downloading the 4DViews Plugin</h3>
<p><a href="https://www.4dviews.com/file/plugin/Plugin4DS_Unity_v3.0.0.zip">Click this link to download the 4DViews Unity plugin</a></p>
<h2 id="step-5">Step 5</h2>
<h3 id="creating-your-project-getting-packages">Creating your project + Getting Packages</h3>
<p>Go back to Unity Hub and click &quot;Projects&quot; on the left menu bar and then click new. If you have multiple Unity installs make sure to use 2018.4.12f1.</p>
<p>Chose &quot;3D&quot;, name it, and store it somewhere other than your Desktop.</p>
<p>Now with Unity open look at the top toolbar for &quot;Window&quot; and chose &quot;Package Manager&quot;. 
Search for &quot;Vuforia&quot; and click install.</p>
<p><img src="https://github.com/nicholasoxford/4dviews_vuforia_AR/blob/master/screenshots/Screen%20Shot%202019-12-05%20at%203.46.24%20PM.png?raw=true" alt=""></p>
<p>Next under Assets click &quot;Import Custom Packages&quot; and import both your database and 4Dviews plugin.
<img src="https://github.com/nicholasoxford/4dviews_vuforia_AR/blob/master/screenshots/Screen%20Shot%202019-12-05%20at%203.47.41%20PM.png?raw=true" alt=""></p>
<p>A window will appear with everything you are importing, just click import.</p>
<h2 id="step-5">Step 5</h2>
<h3 id="getting-vuforia-working">Getting Vuforia Working</h3>
<p>Make sure you are viewing &quot;Scene&quot; and not &quot;Game&quot;
<img src="https://github.com/nicholasoxford/4dviews_vuforia_AR/blob/master/screenshots/Screen%20Shot%202019-12-05%20at%203.52.56%20PM.png?raw=true" alt=""></p>
<p>First thing you need to do is right click both the main camera and directional light and  delight them. 
Next right click where the camera and light were, find &quot;Vuforia&quot; and click AR Camera. </p>
<p><img src="https://github.com/nicholasoxford/4dviews_vuforia_AR/blob/master/screenshots/Screen%20Shot%202019-12-05%20at%203.50.31%20PM.png?raw=true" alt=""></p>
<p>Next click the AR Camera and look over in the &quot;inspector&quot;. You should see a button called &quot;Open Vuforia Engine Configuration&quot;. Click it. </p>
<ul>
<li><a href="https://developer.vufooria.com/vui/develop/licenses">Go back to your development key and copy the entire string</a>.</li>
<li>Find &quot;App License Key&quot; and paste your key. </li>
</ul>
<p>Under Databases, what ever the name of the database you imported should appear.
I also uncheck Video Background</p>
<p>Next right click AR Camera and chose &quot;Image&quot;. Now what ever photo was in your database should autoappear. If not look in the inspector for Image Target Behavior. </p>
<h2 id="step-6">Step 6</h2>
<h3 id="adding-a-3d-object-testing">Adding a 3D Object + Testing</h3>
<p>Now we need to add a test object. Right click the ImageTarget, click 3D object, and then Cube. 
I had to scale it down (Press R) to be a more relevant size to my target.
Next I move it upwards so it&#39;s fully on top of my image. I move it by pressing W and dragging up, you can also do this in the inspector. </p>
<p><em>Click Play</em></p>
<p>Now your webcam should turn on and it should auto switch to the game mode. What ever photo you uploaded to the database pull up on your phone, and if the glare isn&#39;t too bad the cube should pop up.</p>
<p>If your webcam comes up black, I found deleting the AR Camera and all its children + readding them should work.</p>
<h2 id="step-7">Step 7</h2>
<h3 id="adding-your-4dviews-asset-">Adding your 4DViews asset.</h3>
<ul>
<li>Now that we got our cube to pop up on top of our target image we can delete the cube. </li>
<li><p>Next under the project window click Assets -&gt; 4DViews -&gt; Prefabs
<img src="https://github.com/nicholasoxford/4dviews_vuforia_AR/blob/master/screenshots/Screen%20Shot%202019-12-05%20at%204.28.14%20PM.png?raw=true" alt=""></p>
</li>
<li><p>Drag the asset called &quot;Sequence4Ds&quot; to  &quot;Image Target&quot; so it becomes a child. </p>
</li>
</ul>
<p><em>Locate your 4dViews file (.4ds) and add it to the StreamingAssets folder.</em></p>
<ul>
<li>Click the drop down next to Sequence4Ds in the hierarchy (where your camera and image target are).</li>
<li>Click on &quot;Mesh4ds&quot; and look at the inspector. </li>
<li>Locate the section &quot;Plugin 4DS (script) </li>
<li>Drag your 4DSViews file to this bar and it will autopopulate the path. 
<img src="https://github.com/nicholasoxford/4dviews_vuforia_AR/blob/master/screenshots/Screen%20Shot%202019-12-05%20at%204.34.37%20PM.png?raw=true" alt=""></li>
</ul>
<p>Your 3D asset should pop up. <em>Make sure to scale it up or down to be relevant to your target.</em></p>
<h2 id="click-play-and-your-app-should-work-">Click play and your app should work.</h2>
<p>This is some basic, sample markdown.</p>
<h2 id="second-heading">Second Heading</h2>
<ul>
<li>Unordered lists, and:<ol>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ol>
</li>
<li>More</li>
</ul>
<blockquote>
<p>Blockquote</p>
</blockquote>
<p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
<p>And code highlighting:</p>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
}
</code></pre>
<p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
<p>Or an image of bears</p>
<p><img src="http://placebear.com/200/200" alt="bears"></p>
<p>The end ...</p>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>