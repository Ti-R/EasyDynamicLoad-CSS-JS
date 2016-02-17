# Easy dynamic loading of CSS/JS 
Small script to easily load multiple CSS and JS with a callback when all is done.
 
# Dependencies
 - No dependency


# Demo
You can test it on my website.
[www.ti-r.com (EasyDynamicLoadingOfCSSAndJS)](http://home/www.ti-r.com_2015/?js/Web/EasyDynamicLoadingOfCSSAndJS)

There is 1 demos inside demos directory
- demo-basic.html:
	* It show how to use it with a very basic sample.
- demo-percentage.html:
	* It show how to use it and get percentage informations.



# How to use it
- Html:
You just need to include the file.
```html
<script language="JavaScript" src="tr.easydynamic_load_css_js.min.js"></script>
```


- Javascript:
 - The library contain 3 functions
  * LoadJSAndCSS: to load several css and/or js dynamically

```js
// TR.LoadJSAndCSS
var tListJStoLoad  = [ 'script1.js', 'script2.js', 'script3.js' ];
var tListCSStoLoad = [ 'link1.css', 'link2.css' ];

function CallBackWhenDone()
{}
// tListJStoLoad or tListCSStoLoad can be undefined
TR.LoadJSAndCSS(tListJStoLoad, tListCSStoLoad, CallBackWhenDone);
```

  * LoadJS: to load a single js dynamically

```js
function CallBackWhenDone()
{}
TR.LoadJS('script1.js', CallBackWhenDone);
```

  * LoadCSS: to load a single css dynamically

```js
function CallBackWhenDone()
{}
TR.LoadCSS('link1.css', CallBackWhenDone);
```

# Reason
I needed to load easily js and css and get a callback in the end, I just create my own small lib :)


# Changelog
 - Version 1.1.0
	* Added percentage information.

 - Version 1.0.0
	* Release
	