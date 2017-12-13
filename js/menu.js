/* menu.js - API library for menu actions */

/* Copyright 2010 TeamF1, Inc. */

/*
modification history 
------------------------
01a,30SEP10,mvb  written. 
*/

// Menu Selection Highlighting
function mainMenuChange(menuItemId) { identity=document.getElementById(menuItemId); identity.className="mm"; }
function subMenuChange(menuItemId) { identity=document.getElementById(menuItemId); identity.className="sm"; }
// end

//Help popup
var helpwindow;
function help(url)
	{
	helpwindow=window.open(url,'name','height=350,width=470,left=250,top=250,resizable=no,scrollbars=yes,toolbar=no,status=no');
	if (window.focus) {helpwindow.focus()}
	}

//End Help popup

//Status popup
var statuswindow;
function statusPop(url)
	{
	statuswindow=window.open(url,'name','height=250,width=470,left=250,top=250,resizable=no,scrollbars=yes,toolbar=no,status=no');
	if (window.focus) {statuswindow.focus()}
	}
//End Status popup
