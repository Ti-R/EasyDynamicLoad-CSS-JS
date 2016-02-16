// Author: Ti-R (Renan Lavarec)
// License: MIT
// Version: 1.0.0

// Namespace TR
if( !TR )
	var TR = {};
	
// Load JS
TR.LoadJS = function( _file, _callback )
{
	_callback = undefined || _callback;
	
	// Check element exist
	var tFirstElement = TR.CSSOrJSCheckElementExist('script', 'src', _file, _callback)
	if( !tFirstElement ) // Element exist, return
		return;
	
	// Create element and insert it
	var tScript = TR.CSSOrJSCreateElement('script', 'text/javascript', _file, _callback);
	tScript.src = _file;
	
	tFirstElement.parentNode.insertBefore(tScript, tFirstElement);
}

// Load CSS
TR.LoadCSS = function( _file, _callback )
{
	_callback = undefined || _callback;
	
	// Check element exist
	var tFirstElement = TR.CSSOrJSCheckElementExist('link', 'href', _file, _callback)
	if( !tFirstElement ) // Element exist, return
		return;
	
	// Create element and insert it
	var tLink = TR.CSSOrJSCreateElement('link', 'text/css', _file, _callback);
	tLink.href = _file;
	tLink.rel = 'stylesheet';
	
	tFirstElement.parentNode.insertBefore(tLink, tFirstElement);
}


// Load JS and CSS
TR.LoadJSAndCSS = function(_listJStoLoad, _listCSStoLoad, _callBackWhenDone)
{
	var tNbScriptToLoad = _listJStoLoad?_listJStoLoad.length:0;
	tNbScriptToLoad += _listCSStoLoad?_listCSStoLoad.length:0;	
	
	// Count loaded script before to load the background image resource
	function CountLoadedScript()
	{
		--tNbScriptToLoad;
		if( tNbScriptToLoad != 0)
			return;
		
		_callBackWhenDone();
	}
	
	// Load all script needed
	if( _listJStoLoad )
	{
		function EachJS( _url )
		{
			TR.LoadJS(_url, CountLoadedScript);
		}
		_listJStoLoad.forEach(EachJS);
	}
	
	if( _listCSStoLoad )
	{
		function EachCSS( _url )
		{
			TR.LoadCSS(_url, CountLoadedScript);
		}
		_listCSStoLoad.forEach(EachCSS);
	}
}

// Utils functions

// Give an error
TR.ErrorLoadingFile = function( _file )
{
	console.log("ERROR: File not loaded: " + _file);
}

// Check element already loaded
TR.CSSOrJSCheckElementExist = function(_name, _attr, _file, _callback)
{
	// Check if file is not already loaded
	var tListScripts = document.getElementsByTagName(_name);

	// Check all files
	for (var i = 0; i < tListScripts.length; ++i)
	{
		// Do not load twice
		if( tListScripts[i][_attr] == _file)
		{
			if( _callback !== undefined)
				_callback();
			return undefined;
		}
	}
	return tListScripts[0];
}

// Create element
TR.CSSOrJSCreateElement = function(_name, _type, _file, _callback)
{
	var tElement = document.createElement( _name );
	tElement.type = _type;
	tElement.async = false;
	
	if( _callback !== undefined)
		tElement.onload = _callback;
		
	function LocalErrorLoadingFile( _error )
	{
		TR.ErrorLoadingFile(_file);
	}
	tElement.onerror = LocalErrorLoadingFile;
	return tElement;
}
