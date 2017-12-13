/*
Copyright (c) 2005-2010 TeamF1, Inc.
All rights reserved.
*/

function fieldStateSet (chkFldIdArr, unchkFldIdArr)
	{
 	if (chkFldIdArr)
	 	{
	    chkFldIdArr= chkFldIdArr.split (" ");
	    for (idx in chkFldIdArr)
	        document.getElementById(chkFldIdArr[idx]).checked = true;
        }
    if (unchkFldIdArr)
    	{
	    unchkFldIdArr= unchkFldIdArr.split (" ");
	    for (idx in unchkFldIdArr)
	        document.getElementById(unchkFldIdArr[idx]).checked = false;
        }
	}
function depFieldCheck (parent, state, disNrec, disRec, enNrec, enRec)
    {
    if (!parent)
        return;
    var obj = document.getElementById(parent);
    if (obj.disable) return;
    if (obj.checked != state)
    	return;
    return (fieldStateChangeWr (disNrec, disRec, enNrec, enRec));
    }
function fieldCssClassChange (fieldId, flag)
    {
    var DISABLE_STYLE_SUFFIX = "_dis";
    if (fieldId.className == DISABLE_STYLE_SUFFIX)
    	{
		alert ("'_dis' is a reserved style name.\n"+
    	       "Please use a different style name");
    	return;
    	}
    	
    if ((fieldId.type == 'text') || (fieldId.type == 'password') ||
        (fieldId.type == 'submit') || (fieldId.type == 'select-one') ||
        (fieldId.type == 'button') || (fieldId.type == 'submit') || (fieldId.type == 'reset'))
        {
	    var enabledStyle;
	    var disabledStyle;
	    var idx = fieldId.className.lastIndexOf (DISABLE_STYLE_SUFFIX);
		if (idx == -1)
			{
			enabledStyle = fieldId.className;
			disabledStyle = fieldId.className + DISABLE_STYLE_SUFFIX;
			}  
		else
			{
			enabledStyle = fieldId.className.substring (0, idx);
			disabledStyle = fieldId.className;
			}
        fieldId.className = flag ? disabledStyle : enabledStyle ;
        }
    }
function fieldArrStateChange (fieldsArr, state)
	{
    for (var idx = 0; idx < fieldsArr.length; idx++)
	    {
        fieldsArr[idx].disabled = state;
        fieldCssClassChange (fieldsArr[idx], state);
        }
 	}
function fieldStateChangeWr (disNrec, disRec, enNrec, enRec)
    {
    if (disNrec)
        fieldStateChange (disNrec, true, false);
    if (disRec)
        fieldStateChange (disRec, true, true);
    if (enNrec)
        fieldStateChange (enNrec, false, false);
    if (enRec)
        fieldStateChange (enRec, false, true);
    }
function fieldStateChange (idStr, state, recurse)
    {
   var inputObjs;
   var objIdArr = idStr.split (" ");   
   for (idx in objIdArr)
        {
        if (recurse)
            {
            if(document.getElementById(objIdArr[idx]))
                {
                inputObjs = (document.getElementById(objIdArr[idx])).getElementsByTagName("INPUT");
                fieldArrStateChange (inputObjs, state);
                inputObjs = (document.getElementById(objIdArr[idx])).getElementsByTagName("SELECT");
                fieldArrStateChange (inputObjs, state);
            }
            }
        else
            {
            if( document.getElementById(objIdArr[idx]) )
                {
                document.getElementById(objIdArr[idx]).disabled = state;
                fieldCssClassChange ( document.getElementById(objIdArr[idx]), state);
                }
            }
        }
    }
function radioCheckedValueGet (rdbName)
    {
	var rdbObjArr = document.getElementsByName (rdbName);
	if (rdbObjArr.length < 1) return null;
	var value = null;
	for (var i = 0; i < rdbObjArr.length; ++i)
        {
		if ((!rdbObjArr[i].disabled) && rdbObjArr[i].checked)
            {
     		value = rdbObjArr[i].value;
            break;
            }
        }
    return value;
    }
function radioObjWithValueSelect (rbjObjName, valueToSelect)
    {
	var rdbObjArr = document.getElementsByName (rbjObjName);
	if (rdbObjArr.length < 1) return;
	var value = null;
	for (var i = 0; i < rdbObjArr.length; ++i)
        {
		if (rdbObjArr[i].value == valueToSelect)
            {
            rdbObjArr[i].checked = true;
            break;
            }
        }
    return;
    }
function radGroupFuncSet (radGrpName, funcName)
    {
    if (!radGrpName)
        return;
    var rdbObjArr = document.getElementsByName (radGrpName);
	if (rdbObjArr.length < 1) return;
    for (var i = 0; i < rdbObjArr.length; ++i)
        {
        if (funcName)
            rdbObjArr[i].onclick = funcName;
        else
            rdbObjArr[i].onclick = function () {return;};
        }
    return;
    }
    
function comboSelectedValueGet (selObjId)
    {
	var selObj = document.getElementById (selObjId);
    if (!selObj || selObj.disabled) return null;
    return selObj.options[selObj.selectedIndex].value;
    }
function comboSelectedIdGet (selObjId)
    {
	var selObj = document.getElementById (selObjId);
    if (!selObj || selObj.disabled) return null;
    return selObj.options[selObj.selectedIndex].id;
    }
function comboSelectedIndexGet (selObjId)
    {
	var selObj = document.getElementById (selObjId);
    if (!selObj || selObj.disabled) return null;
    return selObj.selectedIndex;
    }
function comboValueSet (selObjId, selIdx)
    {
    if (!selObjId || (selIdx == null)) return;
    var selObj = document.getElementById (selObjId);
    if (!selObj) return;
    selObj.selectedIndex = selIdx;
    }
function optionValueSelect (selObjId, fldId)
    {
    if (!selObjId || !fldId) return;
    var selObj = document.getElementById (selObjId);
    if (!selObj) return;
	var fldObj = document.getElementById (fldId);
    if (!fldObj || !(fldObj.value.length)) return;
	var valueToSelect = fldObj.value;
    var idx = 0;
	for (idx = 0; idx < selObj.options.length; ++idx)
        {
		if (selObj.options[idx].value == valueToSelect)
            break;
        }
    if (idx != selObj.options.length)
        selObj.selectedIndex = idx;
    return;     
    }
function optionTextSelect (selObjId, fldId)
    {
    if (!selObjId || !fldId) return;
    var selObj = document.getElementById (selObjId);
    if (!selObj) return;
	var fldObj = document.getElementById (fldId);
    if (!fldObj || !(fldObj.value.length)) return;
	var valueToSelect = fldObj.value;
    var idx = 0;
	for (idx = 0; idx < selObj.options.length; ++idx)
        {
        if (selObj.options[idx].text == valueToSelect)
            break;
        }
    if (idx != selObj.options.length)
        selObj.selectedIndex = idx;
    return;     
    }
function umiActionIdChange (umiActionObjId, umiActionId)
    {
    var umiActionObj = document.getElementById(umiActionObjId);
    var actionStr = umiActionObj.name;
    var newStr = actionStr.substring (0, (actionStr.lastIndexOf (".") + 1));
    umiActionObj.name = newStr + umiActionId;
    return true;
    }
function umiActionIdChangeSelWrapper (umiActionObjId, selObj)
    {
    if (!umiActionObjId || !selObj) return false;
    return umiActionIdChange (umiActionObjId, selObj.options[selObj.selectedIndex].value);
    }
/*
* isChkboxEnabled - This routine is used to check whether the given check box is enabled or not.
* 
* Input args:
* 	idArr     -  check box id(s) list seperated by spaces.
*   mode      -  checking mode
*				 0 - all check box in the list should be enabled (default).
*				 1 - any one of the check box in the list should be enabled.
*   errMsg    -  Error message to display if the specified condition is not met.
*
* Returns:
* 	TRUE  - if the specified condition met.
*   FALSE - if the specified condition not met.
*/    
function isChkboxEnabled (idArr, mode, errMsg)
	{
 	if (idArr == null)
 		{
 		alert ('isChkboxEnabled : Invalid arguments');
 		return false;
 		}
 	/* set default */
 	if (mode == null)
 		mode = 0;
 	
 	var returnValue = false;
    var fldIdArray = idArr.split (" ");
    for (idx in fldIdArray)
    	{
	    if (document.getElementById(fldIdArray[idx]).checked)
	    	{
	    	if (mode == 1) {
	    		returnValue = true;
	    		break;
	    		}
	    	}
	    else
	    	{
	    	if (mode == 0) {
	    		returnValue = false;
				if (errMsg) alert (errMsg);
	    		break;
	    		}
	    	}
        }
    return returnValue;
	}

function removeExtraMsgLine()
	{
	var infoObj = document.getElementById("infoMsg");
	if(infoObj != null && infoObj.innerHTML == "")
		infoObj.style.display = 'none';
	}

/****************************************************************************
Function: isIpv4OrIpv6
Purpose: find if ipv6 address or ipv4 address
params : Ip text id obj
Returns: 'NONE', 'IPV4', 'IPV6'
*/

function isIpv4OrIpv6 (ipaddrObj)
    {
    if(ipaddrObj)
        {
        if (ipaddrObj.value.indexOf ('.') != -1)
            {
            return "IPV4";
            }
        else if (ipaddrObj.value.indexOf (':') != -1)
            {
            return "IPV6";
            }
        else
            {
            return "NONE";
            }
        }
    }

/****************************************************************************
Function: displayOrHideFields
Purpose: hides and shows fields
params : hideFieldsLst
         showFieldsLst
Returns: N/A
*/

function displayOrHideFields (hideFieldsLst,showFieldsLst)
	{
	if (hideFieldsLst && hideFieldsLst != "")
		{
		var fieldsArray = hideFieldsLst.split (" ");		
		if (!fieldsArray || fieldsArray.length == 0) return;
		for (var idx = 0; idx < fieldsArray.length; idx++)
			{
			var trObj = document.getElementById(fieldsArray[idx]);
			if (trObj) trObj.className = "hide";			
			}
		}
	if (showFieldsLst && showFieldsLst != "")
		{
		var fieldsArray = showFieldsLst.split (" ");
		if (!fieldsArray || fieldsArray.length == 0) return;
		for (var idx = 0; idx < fieldsArray.length; idx++)
			{
			var trObj = document.getElementById(fieldsArray[idx]);
			if (trObj) trObj.className = "show";
			}
		}
	}

/****************************************************************************
Function: windowOpenHelp
Purpose: opens new page
params : pageName page to open
Returns: N/A
*/
	
function windowOpenHelp(pageName)
    {
    window.open ("?page=" + pageName, "_self");
    }

/****************************************************************************
Function: hideAndShow 
Purpose: calls displayOrHideFields 
params : hideIds
         showIds
Returns: N/A
*/    
function hideAndShow (hideIds, showIds)
    {
    displayOrHideFields (hideIds, showIds);
    }

/****************************************************************************
Function: showAndHideFields
Purpose: calls displayOrHideFields and fieldStateChangeWr
params : 1 - hideFields
         2 - showFields
         3 - disableFields
         4 - disableTables
         5 - enableFields
         6 - enableTables
Returns: N/A
*/
  	
function showAndHideFields (hideFields, showFields, disableFields, disableTables,enableFields, enableTables)
    {
    displayOrHideFields (hideFields, showFields);
    fieldStateChangeWr (disableFields, disableTables, enableFields, enableTables);
    }

/****************************************************************************
Function: hideIpv4Fields
Purpose: wrapper to hide ipv4 fields
params : fieldIds
Returns: N/A
*/

function hideIpv4Fields (fieldIds)
    {
    showAndHideFields (fieldIds, '');
    }

/****************************************************************************
Function: showIpv4Fields
Purpose: shows ipv4 fields
params : wrapper to show ipv4 fields
Returns: N/A
*/
  
function showIpv4Fields (fieldIds)
    {
    showAndHideFields ('', fieldIds);
    }

/****************************************************************************
Function: hideIpv6Fields 
Purpose: wrapper to hide ipv6 fields
params : fieldIds
Returns: N/A
*/
    
function hideIpv6Fields (fieldIds)
    {
    showAndHideFields (fieldIds, '');
    }

/****************************************************************************
Function: showIpv6Fields
Purpose: wrapper to show ipv6 fields
params : fieldIds
Returns: N/A
*/

function showIpv6Fields (fieldIds)
    {
    showAndHideFields ('', fieldIds);
    }

/****************************************************************************
Function: toggle
Purpose: wrapper to hide, show and enable disable fields
params : wrapper to show ipv6 fields
Returns: N/A
*/

function toggle (hideIpv4FieldsIds, hideIpv6FieldIds, showIpv4FieldsIds, showIpv6FieldsIds, disableFieldsIds, disableTblFieldsIds, enableFieldsIds, enableTblFieldsIds)
    {    
    hideIpv4Fields (hideIpv4FieldsIds);    
    showIpv4Fields (showIpv4FieldsIds);    
    hideIpv6Fields (hideIpv6FieldIds);
    showIpv6Fields (showIpv6FieldsIds);
    fieldStateChangeWr (disableFieldsIds, disableTblFieldsIds, enableFieldsIds, enableTblFieldsIds);
    }

function enableCheckFields (tablesList, fieldList, hideFieldsLst, showFieldsLst)
    {
    var ipModeObj = document.getElementById ('hdIpMode');
    var ipModeVal = parseInt (ipModeObj.value, 10)
    if (ipModeVal == 1) 		/*For IPv4 Mode Only */
        {
        fieldStateChangeWr (fieldList, tablesList, '', '');
        displayOrHideFields (hideFieldsLst, showFieldsLst);
        }
    else		/*For IPv4/IPv6 Mode Only */
        {
        fieldStateChangeWr ('', '', fieldList, tablesList);
        displayOrHideFields (hideFieldsLst, showFieldsLst);
        }
    }

function displayOrHideStatusMsg (hideField, showField)
	{
	if (hideField && hideField != "")
		{
		var trObj = document.getElementById(hideField);
		if (trObj) trObj.className = "hide errorNew";			
		}
	if (showField && showField != "")
		{
		var trObj = document.getElementById(showField);
		if (trObj) trObj.className = "show errorNew";
		}
	}

function checkAuthEnabled () {
    var valid = false;
    var chkPapObj = document.getElementById ('chkPap');
    var chkChappObj = document.getElementById ('chkChap');
    var chkMschapObj = document.getElementById ('chkMschap');
    var chkMschapv2Obj = document.getElementById ('chkMschapv2');
    if (chkPapObj.disabled || chkChappObj.disabled || chkMschapObj.disabled || chkMschapv2Obj.disabled) {
        return true;
    }
    if (chkPapObj.checked || chkChappObj.checked || chkMschapObj.checked || chkMschapv2Obj.checked) {
        valid = true;
    }
    return valid;
}
