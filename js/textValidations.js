/*
Copyright (c) 2005-2010 TeamF1, Inc.
All rights reserved.
*/

function isFieldEmpty (fieldId, alertFlag, errMsg)
    {
    var obj = document.getElementById(fieldId);
    if (!obj || obj.disabled) return false;
    if (!obj.value.length)
         {
         if (alertFlag)
             alert (errMsg);
         obj.focus ();
         return true;
         }
    return false;
    }
function txtFieldArrayCheck (txtFieldIdArr)
    {
    for (var i = 0; i < txtFieldIdArr.length; ++i)
        {
         var result = false;
         var strArr = txtFieldIdArr[i].split(",");
         result = isFieldEmpty (strArr[0]);
         if (result)
             {
             if (strArr.length > 1)
                 alert (strArr[1]);
             return false;
             }
         }
    return true;
    }
function fieldLengthCheck (fieldId, minLen, maxLen, errMsg)
    {
    if (!fieldId) return false;
    var fldObj = document.getElementById(fieldId);
    if (!fldObj) return false;
    if (fldObj.disabled) return true;
    var strVal = fldObj.value;
    if (minLen && (strVal.length < minLen))
         {
         if (errMsg)
             alert (errMsg);
         fldObj.focus ();
         return false;
         }
    if (maxLen && (strVal.length > maxLen))
         {
         if (errMsg)
             alert (errMsg);
         fldObj.focus ();
         return false;
         }
    return true;
    }
function isProblemCharArrayCheck (txtFieldIdArr)
    {
    /* L10N Error Message Collection Start */
    var errMsgL10n1 = "Empty Space, Single quote(') and double quote(\") characters are not supported for this field.";
    /* L10N Error Message Collection End */     
    for (var i = 0; i < txtFieldIdArr.length; ++i)
        {
        var result = false;
        var strArr = txtFieldIdArr[i].split(",");
        var obj = document.getElementById(strArr[0]);
        if (!obj || obj.disabled)
            continue;
        else
            {
            if (strArr.length > 1)
                {
                if (obj.value.indexOf ("'") != -1 || obj.value.indexOf ("\"") != -1 || obj.value.indexOf (" ") != -1)
                    {
                    alert (errMsgL10n1 + " " + strArr[1]);
                    obj.focus ();
                    return false;
                    }
                }
            }
        }
    return true;
    }

function isProblemCharArrayCheck1 (txtFieldIdArr)
    {
    /* L10N Error Message Collection Start */
    var errMsgL10n2 = "':' is not supported for this field.";
    /* L10N Error Message Collection End */ 

    for (var i = 0; i < txtFieldIdArr.length; ++i)
        {
         var result = false;
         var strArr = txtFieldIdArr[i].split(",");
		 var obj = document.getElementById(strArr[0]);
         if (!obj || obj.disabled)
         	continue;
         else
             {
             if (strArr.length > 1)
             	{
             	if (obj.value.indexOf (":") != -1)
             		{             		
             		alert (errMsgL10n2);
             		obj.focus ();
	            	return false;
	            	}
             	}
             }
         }
    return true;
    }

function isProblemCharArrayCheck2 (txtFieldIdArr)
    {
    /* L10N Error Message Collection Start */
    var errMsgL10n1 = "Single quote(') and double quote(\") characters are not supported for this field.";
    /* L10N Error Message Collection End */     
    for (var i = 0; i < txtFieldIdArr.length; ++i)
        {
        var result = false;
        var strArr = txtFieldIdArr[i].split(",");
        var obj = document.getElementById(strArr[0]);
        if (!obj || obj.disabled)
            continue;
        else
            {
            if (strArr.length > 1)
                {
                if (obj.value.indexOf ("'") != -1 || obj.value.indexOf ("\"") != -1)
                    {
                    alert (errMsgL10n1 + " " + strArr[1]);
                    obj.focus ();
                    return false;
                    }
                }
            }
        }
    return true;
    }

/***********************************************************************
* isProblemCharSpArrayCheck - checks for invalid characters in given array
* of fields
*   
* This routine checks for invalid characters in the given text fields
* return false, if field value contains invalid characters
* else returns true
* 
* RETURNS: TRUE or FALSE
*/

function isProblemCharSpArrayCheck
    (
    txtFieldIdArr,
    problemCharStr        /* array of text fields ids */    
    )
    {    
    var errFlag = true;
    var focusOnField = false;    
    var errMsg = "The following characters are not supported for this field: ";
    errMsg += problemCharStr;
    var flag = 0;
    for (var i = 0; i < txtFieldIdArr.length; ++i)
        {
        var result = false;
        var strArr = txtFieldIdArr[i].split(",");
        var obj = document.getElementById(strArr[0]);
        if (!obj || obj.disabled)
            continue;
        else
            {
            var data = obj.value;            
            if (strArr.length > 1)
                {
                for (var j = 0; j < data.length; j++)
                    {
                    if (problemCharStr.indexOf(data.charAt(j)) != -1) 
                        {
                        flag = 1;
                        focusOnField = obj;
                        break;
                        }
                    }
                }
            }
            if(flag == 1)
                break;
        }
        if(flag == 1)
            {
            alert (errMsg);
            errFlag = false;
            focusOnField.focus();
            }         
    return errFlag;
    }
        
function fieldValueCompare (fieldId1, fieldId2, minLen, maxLen, errMsg)
    {
    if (!fieldId1 || !fieldId2) return false;
    var fldObj1 = document.getElementById(fieldId1);
    var fldObj2 = document.getElementById(fieldId2);
    if (fldObj1.disabled && fldObj2.disabled) return true;
    var val1 = document.getElementById(fieldId1).value;
    if (minLen && maxLen)
        {
        if (val1.length < minLen || val1.length > maxLen)
            return false;
        }
    var val2 = document.getElementById(fieldId2).value;
    if (minLen && maxLen)
        {
        if (val2.length < minLen || val2.length > maxLen)
            return false;
        }
    if (val1 != val2)
        {
        if (errMsg)
            alert (errMsg);
        return false;
        }
    return true;
    }
function numericValueCheck (eventObj, exceptionCharStr)
{
    var charUniCode = eventObj.charCode ? eventObj.charCode : eventObj.keyCode;
    /* check for any exceptional characters */
    if (exceptionCharStr)
        {
        for (i=0; i < exceptionCharStr.length; ++i)
        if (exceptionCharStr.charCodeAt (i) == charUniCode)
        return true;
        }
    switch (charUniCode)
        {
        case 8:  /* back space */
        case 9:  /* tab */
        case 16: /* shift */
        /* case 37: */ /* left arrow */
        /* case 39: */ /* right arrow */
        /* case 46: */ /* delete - not supporting as in netscape it's char code is same as '.'*/ 
             return true;
        default:
             break;
        }
    /* allow back space */
    if (charUniCode < 48 || charUniCode > 57)
        return false;           
    return true;
}
function numericValueRangeCheck
    (srcObj, minLen, minLenErrStr, minVal, maxVal, errFlag, prefixErrStr, suffixErrStr)
    {
    /* L10N Error Message Collection Start */
    var errMsgL10n1='Please enter a value between';
    var errMsgObjL10n = document.getElementById ('hd.valBet');
    if(errMsgObjL10n)errMsgL10n1=errMsgObjL10n.value;
    /* L10N Error Message Collection End */    
    
    if (!srcObj || srcObj.disabled) return true;
    var value = parseInt(srcObj.value, 10);
    if(isNaN (value))
        {
        alert("Please enter a valid value.")
        srcObj.focus ();        
        return false;
        }
    /* check for minimum length if specified */
    if (minLen && (value.length < minLen))
            {
            if (minLenErrStr) alert (minLenErrStr);
            srcObj.focus ();
            return false;
            }
    
    if ((minVal && (value < minVal)) ||
        (maxVal && (value > maxVal)))
        {
        if (errFlag)
            {
            var errStr = '';
            if (prefixErrStr) errStr += prefixErrStr;
            errStr +=" "+ errMsgL10n1 +" "+
                     minVal + " - " + maxVal + " ";
            if (suffixErrStr) errStr += suffixErrStr;
            alert (errStr);
            }
        srcObj.focus ();
        return false;
        }
    return true;
    }
function numericValueRangeCheck1
    (srcObj, minLen, minLenErrStr, minVal, errFlag, prefixErrStr, suffixErrStr)
    {
    /* L10N Error Message Collection Start */
    var errMsgL10n1='Please enter a value not less than ';
    var errMsgObjL10n = document.getElementById ('hd.valNotLsThn');
    if(errMsgObjL10n)errMsgL10n1=errMsgObjL10n.value;
    /* L10N Error Message Collection End */ 
        
    if (!srcObj || srcObj.disabled) return true;
    var value = srcObj.value;
    /* check for minimum length if specified */
    if (minLen && (value.length < minLen))
            {
            if (minLenErrStr) alert (minLenErrStr);
            srcObj.focus ();
            return false;
            }
    
    if ((minVal && (value < minVal)))
        {
        if (errFlag)
            {
            var errStr = '';
            if (prefixErrStr) errStr += prefixErrStr;
            errStr += " "+errMsgL10n1 +
                     minVal + " ";
            if (suffixErrStr) errStr += suffixErrStr;
            alert (errStr);
            }
        srcObj.focus ();
        return false;
        }
    return true;
    }

function portValueRangeCheck
    (srcObj, minVal, maxVal, reservedPortsLimit, defaultPort, errFlag, prefixErrStr)
    {
    if (!srcObj || srcObj.disabled) return true;
    
    var errStr = '';
    var errDisplayFlag = false
    if (prefixErrStr) errStr += prefixErrStr;
    if (defaultPort)
        errStr += ' Please enter default port - ' + defaultPort + ' or a value between ' +  minVal + " - " + maxVal + ".";
    else
        errStr += ' Please enter a value between ' +  minVal + " - " + maxVal + ".";

    /* Check for invalid number. */
    if (isNaN(srcObj.value)) errDisplayFlag = true;
        
    var value = parseInt (srcObj.value, 10);    
    /* Check for reserved ports */
    if (!errDisplayFlag && reservedPortsLimit && (value >= minVal && value <= reservedPortsLimit))
        {
           if (defaultPort && value == defaultPort)
               return true;
           else
               {
            if (prefixErrStr) errStr = prefixErrStr;
               if (defaultPort)
                   errStr += ' Entered port is reserved. Please enter default port - ' + defaultPort + ' or a port greater than ' +  reservedPortsLimit + ".";
            else
                   errStr += ' Entered port is reserved. Please enter a port greater than ' +  reservedPortsLimit + ".";
               errDisplayFlag = true;
               }
        }

    if (!errDisplayFlag &&
        (minVal && (value < minVal)) ||
        (maxVal && (value > maxVal)))
        if (defaultPort && value == defaultPort) 
               return true;
        else
        errDisplayFlag = true;

    if (errDisplayFlag)
        {
        if (errFlag) alert(errStr);
        srcObj.focus ();
        return false;
        }

    return true;
    }

function macAddrCheck (eventObj, srcObj)
    {
    if (!eventObj || !srcObj) return false;
    var charUniCode = eventObj.charCode ? eventObj.charCode : eventObj.keyCode;
    var macAddr = srcObj.value;
    var maxBytes = (macAddr.split (":")).length;
    if (maxBytes > 6)
        return false;
    
    macAddr = macAddr.lastIndexOf (":") == -1 ? macAddr :
                             macAddr.substring (macAddr.lastIndexOf (":")+1);
    if (macAddr.indexOf ("0x") == 0 || macAddr.indexOf ("0X") == 0)
        checkLen = 4;
    else
        checkLen = 2;
    switch (charUniCode)
         {
         case 58:    /* : */
             if (macAddr.length == 0 || macAddr.length < (checkLen - 1))
                 return false;
             if (maxBytes != 6)
                  return true;
             return false;
         case 88:    /* x */
         case 120:   /* X */
             if (macAddr.length > 1 || macAddr.indexOf ("0") != 0)
                 return false;
             return true;
         case 9:  /* tab key */
             if (maxBytes != 6)
                  return false;
         case 8:  /* back space */
         case 37: /* left arrow */
         case 39: /* right arrow */
         case 46: /* delete */
             return true;
         }
    if (macAddr.length == checkLen && charUniCode != 58)
         {
         if (maxBytes != 6)
              srcObj.value = srcObj.value + ":";
         return false;
         }
    
    /* allow a - f */
    if (charUniCode >= 97 && charUniCode <= 102)
         return true;
    /* allow A - F */
    if (charUniCode >= 65 && charUniCode <= 70)
         return true;
    if (charUniCode < 48 || charUniCode > 57)
         return false;          
    return true;
    }
function macFormatCheck (macAddr, errMsg)
     {
     if (!macAddr) return false;
     var macBytes = macAddr.split (":");
     if (macBytes.length != 6 || (macBytes[5].length == 0))
         {
         if (errMsg) alert (errMsg);
         return false;
         }
     return true;
     }
function macAddrVerify (eventObj, srcObj)
    {
    /* L10N Error Message Collection Start */
    var errMsgL10n1='Invalid MAC address';
    var errMsgObjL10n = document.getElementById ('hd.invalMacAddr');
    if(errMsgObjL10n)errMsgL10n1=errMsgObjL10n.value;
    /* L10N Error Message Collection End */
    
    if (!eventObj || !srcObj)
         return false;
    var charUniCode = eventObj.charCode ? eventObj.charCode : eventObj.keyCode;
    /* process only 'tab' */
    if (eventObj.keyCode != 9)
         return true;
    if (!(macFormatCheck (srcObj.value,errMsgL10n1)))
         {
         srcObj.focus ();
         return false;         
         }
    return true;
    }
function problemCharCheck (charUniCode, problemCharStr, errMsg)
    {
    /* L10N Error Message Collection Start */
    var errMsgL10n1='Please enter valid characters for';
    var errMsgL10n2='Following character is not supported for this field: ';
    var errMsgL10n3='space char';
    var errMsgL10n4='The following characters are not supported for this field: ';
    var errMsgObjL10n = document.getElementById ('hd.enterValChar');
    if(errMsgObjL10n)errMsgL10n1=errMsgObjL10n.value;
    errMsgObjL10n = document.getElementById ('hd.charNotSup1');
    if(errMsgObjL10n)errMsgL10n2=errMsgObjL10n.value;
    errMsgObjL10n = document.getElementById ('hd.spaceChar');
    if(errMsgObjL10n)errMsgL10n3=errMsgObjL10n.value;
    errMsgObjL10n = document.getElementById ('hd.charNotSup2');
    if(errMsgObjL10n)errMsgL10n4=errMsgObjL10n.value;
    /* L10N Error Message Collection End */

    /* check for any problematic characters */
    for (i=0; i < problemCharStr.length; ++i)
        {
        if (problemCharStr.charCodeAt (i) == charUniCode)
            {
            if (errMsg)
                {
                var errStr1 = errMsgL10n1+" " + errMsg 
                if (problemCharStr.length == 1)
                    {
                    var errStr2 =  "\n"+errMsgL10n2
                    if (charUniCode == 32) /* Space */
                        alert (errStr1 + errStr2 + errMsgL10n3);
                    else
                        alert (errStr1 + errStr2 + String.fromCharCode(charUniCode));
                    }
                else
                    {
                    var errStr3 = errStr1 + "\n"+errMsgL10n4
                    for (i=0; i < problemCharStr.length; ++i)
                        if (problemCharStr.charCodeAt (i) == 32) /* Space */
                            errStr3 += " "+errMsgL10n3;
                        else
                            errStr3 += problemCharStr.charAt(i)
                    alert (errStr3);
                    }
                }
            return true;
            }
        }
    return false;
    }
function isProblemChar (eventObj, problemCharStr, errMsg, fieldId)
    {
    if (eventObj)
        {
        var charUniCode = eventObj.charCode ? eventObj.charCode : eventObj.keyCode;
        return problemCharCheck (charUniCode, problemCharStr, errMsg)
        }
    else if (fieldId)
        {
        var fieldObj = document.getElementById (fieldId);
        if (!fieldObj || fieldObj.disabled) return true;
        var fieldValue = fieldObj.value;
        for (var idx = 0; idx < fieldValue.length; idx++)
            {
            var charUniCode = fieldValue.charCodeAt (idx)
            if (!problemCharCheck (charUniCode, problemCharStr, errMsg) == false)
                {
                fieldObj.focus();
                return false;
                }
            }
        }
    return true;
    }

function userPrivCheck ()
    {
    var userPriObj = document.getElementById('hdUserPriv');
    if (!userPriObj) return;
    var portalLinkObj = document.getElementById('tdUserPortal');
    if (portalLinkObj && userPriObj.value == "1")
        portalLinkObj.innerHTML = ""
    }

function removeLeadingAndTrailingSpaces (txtFieldIdArr)
    {
    for (var i = 0; i < txtFieldIdArr.length; ++i)
        {
         var result = false;
         var txtFieldId = txtFieldIdArr[i];
         result = isFieldEmpty (txtFieldId);
         if (result) return; /* For Optional fields */
         var txtFieldObj = document.getElementById(txtFieldId);
         if (txtFieldObj && !txtFieldObj.disabled)
             {
             var strText = txtFieldObj.value;
            strText = strText.replace(/^\s+|\s+$/g, '');
            //alert ("'" + txtFieldObj.value + "' - '" + strText + "'");
            txtFieldObj.value = strText;
             }
         }
    }
/***********************************************************************
* validateFQDN - validates FQDN string
*   
* This routine return true,
* if string is valid FQDN or not
* else returns false
*
* RETURNS: TRUE or FALSE
*/

function validateFQDN
    (
    fieldId    /* text field id */
    )
    {
    var fqdnObj = document.getElementById (fieldId);
    if (!fqdnObj || fqdnObj.disabled) return true;        
    if (fqdnObj.value.indexOf ('@') != -1 || fqdnObj.value.indexOf ('\"') != -1)
        {
        var errorStr = "'@' not allowed in FQDN string"
        if (fqdnObj.value.indexOf ('@') != -1 && fqdnObj.value.indexOf ('\"') != -1)
            errorStr = "'@' and double quote(\") not allowed in FQDN string";
        else if (fqdnObj.value.indexOf ('\"') != -1)
            errorStr = "double quote(\") not allowed in FQDN string";            
        alert (errorStr);
        fqdnObj.focus ();
        return false;
        }    
    return true;
    }

/***********************************************************************
* checkHostName - checks for a valid host name
*   
* This routine checks for valid host name and 
* return true,
* if value is a valid host name
* else returns false
*
* RETURNS: TRUE or FALSE
*/

function checkHostName (fieldId, errorFlag, customMsg, emptyFlag) 
	{ 
	var errDisplayField = document.getElementById (fieldId + "Err"); 
 	if (errDisplayField) errDisplayField.innerHTML = ""; 
	var fieldHighliter = document.getElementById(fieldId + "Msg") 
	if (fieldHighliter) fieldHighliter.innerHTML = ""; 
	var fieldObj = document.getElementById(fieldId) 
	if(!fieldObj || fieldObj.disabled) return true; 
	var hostName = fieldObj.value;        
        /* Check if host name Empty */ 
        if (hostName == "" && emptyFlag) return true; 
	        else if (hostName == "") 
	                { 
	                var errMsg = "Please enter a valid Domain/Internet name"; 
	                if (customMsg != "") 
 		                        errMsg = customMsg + errMsg; 
 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 		 
 		                if (errDisplayField) 
 		                        errDisplayField.innerHTML = errMsg; 
 		                else 
 		                        alert (errMsg); 
 		        fieldObj.focus(); 
 		        return false; 
 		                } 
 		 
 	/* Check host name rules */ 
	        var isInvalid = false 
 		        for (var idx = 0; idx < hostName.length; idx++) 
 		                { 
 		                var exceptionChars = "-." 
 		                var charCode = hostName.charCodeAt(idx) 
 		                if (!((charCode >= 97 && charCode <= 122) || 
 		                      (charCode >= 65 && charCode <= 90) || 
 		                      (charCode >= 48 && charCode <= 57) || 
 		                       charCode == exceptionChars.charCodeAt(0) || 
 		                       charCode == exceptionChars.charCodeAt(1) 
 		                     )) 
 		                     { 
 		                     isInvalid = true; 
 		                     break; 
 		                     } 
 		                } 
 		                 
 		        if (isInvalid) 
 		                { 
 		                var errMsg = "Domain/Internet must contain only alphanumeric letters, '.' and '-'"; 
 		                if (customMsg != "") 
 		                        errMsg = customMsg + errMsg; 
 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 		                if (errDisplayField) 
 		                        errDisplayField.innerHTML = errMsg; 
 		                else 
 		                        alert (errMsg); 
 		        fieldObj.focus(); 
 		                return false; 
 		                } 
 		 
 		        var firstChar = hostName.charCodeAt(0) 
 		        if (!((firstChar >= 97 && firstChar <= 122) || (firstChar >= 65 && firstChar <= 90) || (firstChar >= 48 && firstChar <= 57))) 
 		                { 
 		                var errMsg = "Domain/Internet name must start with only alphanumerical character"; 
 	 		                if (customMsg != "") 
 	 		                        errMsg = customMsg + errMsg; 
 	 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 	 		                if (errDisplayField) 
 	 		                        errDisplayField.innerHTML = errMsg; 
 	 		                else 
 	 		                        alert (errMsg); 
 	 		        fieldObj.focus(); 
 	 		                return false; 
 	 		                } 
 	 		 
 	 		        var lastChar = hostName.charCodeAt(hostName.length-1) 
 	 		        if (!((lastChar >= 97 && lastChar <= 122) || (lastChar >= 65 && lastChar <= 90) || (lastChar >= 48 && lastChar <= 57))) 
 	 		                { 
 	 		                var errMsg = "Domain/Internet must end with only alphanumerical character"; 
 	 		                if (customMsg != "") 
 	 		                        errMsg = customMsg + errMsg; 
 	 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 	 		                if (errDisplayField) 
 	 		                        errDisplayField.innerHTML = errMsg; 
 	 		                else 
 	 		                        alert (errMsg); 
 	 		        fieldObj.focus(); 
 	 		                return false; 
 	 		                } 
 	 		 
 	 		        return true; 
 		        }
 		        
function emailAddressValidate (fieldId, errorFlag, customMsg, emptyFlag) 
	{ 
	var fieldObj = document.getElementById(fieldId);
	if (!fieldObj || fieldObj.disabled || fieldObj.value == "") return true;

	var errDisplayField = document.getElementById (fieldId + "Err");
	var errorFlag = false;
	var emailId = fieldObj.value;
	if (emailId.indexOf ("@") == -1 || emailId.indexOf (".") == -1)
		errorFlag = true;
		
	if (!errorFlag)
		{
		var emailParts = emailId.split ("@");
		if (!emailParts || emailParts.length != 2)
			errorFlag = true;
			
		if (!errorFlag)
			{
			var domainAddr = emailParts[1];
			if (domainAddr.indexOf (".") == -1)
				errorFlag = true;
			else
				{
				var domainParts = domainAddr.split (".");
				if (!domainParts)
					errorFlag = true;
				else
					{
					for (var idx = 0; idx < domainParts.length; idx++)
						if (domainParts[idx].length == 0)
							{
							errorFlag = true;
							break;
							}
					}
				}
			}
		}

	if (errorFlag)
		{
		var errMsg = "Invalid email address: Please enter email address like xxxx@netgear.com"
		if (errDisplayField) errDisplayField.innerHTML = errMsg;
		else alert (errMsg);
		fieldObj.focus();
		return false;
		}

	if (errDisplayField) errDisplayField.innerHTML = "";
	return true;
	}

/***********************************************************************
* enableCheck - disables page if Ip mode is 1. 
*   
* This routine is called onLoad of Ipv6 page to check
* Ip mode and then disable the page if it is Ipv4.
*
* RETURNS: N/A
*/

function enableCheck ()
	{
	var disObj = document.getElementById ('isDisable');
	if(disObj.value == "1")
		fieldStateChangeWr ('','disablePage','','');
	}
	
function alphaNumericCheck (eventObj, exceptionCharStr)
	{
    var charUniCode = eventObj.charCode ? eventObj.charCode : eventObj.keyCode;
    /* check for any exceptional characters */
	if (exceptionCharStr)
        {
        for (i=0; i < exceptionCharStr.length; ++i)
        if (exceptionCharStr.charCodeAt (i) == charUniCode)
        return true;
        }

    switch (charUniCode)
        {
        case 8:  /* back space */
        case 9:  /* tab */
        case 16: /* shift */
        /* case 37: */ /* left arrow */
        /* case 39: */ /* right arrow */
        /* case 46: */ /* delete - not supporting as in netscape it's char code is same as '.'*/ 
             return true;
        default:
             break;
        }
    
    /* allow A - F */
    if (charUniCode >= 97 && charUniCode <= 122)
         return true;
         
    /* allow A - F */
    if (charUniCode >= 65 && charUniCode <= 90)
         return true;

    /* allow back space */
    if (charUniCode < 48 || charUniCode > 57)
        return false;           
    return true;
	}

function alphaNumericValueCheck (fieldId, exceptionCharStr, prefixErrMsg)
	{
	var txtFieldObj = document.getElementById (fieldId);
	var errorDisplayObj = document.getElementById (fieldId + "Err");
	    
	if (!txtFieldObj || txtFieldObj.disabled) return true;
	
	for (var idx = 0; idx < txtFieldObj.value.length; idx++)
		{
		var charUniCode = txtFieldObj.value.charCodeAt (idx);
		
	    /* check for any exceptional characters */
		if (exceptionCharStr)
	        {
	        var matchFound = false;
	        for (i=0; i < exceptionCharStr.length; ++i)
	        	if (exceptionCharStr.charCodeAt (i) == charUniCode) { matchFound = true; break; }

		    if (matchFound) continue;
	        }
	
	    switch (charUniCode)
	        {
	        case 8:  /* back space */
	        case 9:  /* tab */
	        case 16: /* shift */
	        /* case 37: */ /* left arrow */
	        /* case 39: */ /* right arrow */
	        /* case 46: */ /* delete - not supporting as in netscape it's char code is same as '.'*/ 
	             return true;
	        default:
	             break;
	        }
	    
	    /* allow A - F */
	    if (charUniCode >= 97 && charUniCode <= 122) continue;
	         
	    /* allow A - F */
	    if (charUniCode >= 65 && charUniCode <= 90) continue;
	
		/* allow 0 to 9 */
	    if (charUniCode >= 48 && charUniCode <= 57) continue;
  
	    var errorMsg = "";
	    if (prefixErrMsg && prefixErrMsg != "") errorMsg += prefixErrMsg;
	    if(exceptionCharStr != '')
	        errorMsg += "Only a-z, A-Z, 0-9 and " + exceptionCharStr +" characters are allowed.";
	    else
	        errorMsg += "Only a-z, A-Z, 0-9" +" characters are allowed.";
	    
		if (errorDisplayObj) errorDisplayObj.innerHTML = errorMsg;
		else alert (errorMsg);
		txtFieldObj.focus();
		return false;
        }

    if (errorDisplayObj) errorDisplayObj.innerHTML = "";
    return true;
	}
	
function checkPortRange (strPortId, endPortId)
	{
	var strPortObj = document.getElementById(strPortId);
	var endPortObj = document.getElementById(endPortId);
	if (!strPortObj || !endPortObj) return;
	if (strPortObj.disabled || endPortObj.disabled) return true;
	if (isNaN (strPortObj.value)) return true;
	if (isNaN (endPortObj.value)) return true;
	if (parseInt (strPortObj.value, 10) > parseInt (endPortObj.value, 10))
		{
		var errStr = "End port must not be less than the start port"
		if (document.getElementById(endPortId + "Err"))
			document.getElementById(endPortId + "Err").innerHTML = errStr;
		else
			alert (errStr);
		return false;
		}
	if (document.getElementById(endPortId + "Err"))
		document.getElementById(endPortId + "Err").innerHTML = "";
	return true;
	}

/*Host name validate*/
function validateHostName (hostNameObj, errorPrefix)
    {
    if (!hostNameObj || hostNameObj.disabled) return true;
    var hostName = hostNameObj.value;
    var errorFlag = false;
    var errorMsg = "";
    if (errorPrefix)
        errorMsg = errorPrefix + " ";
    if (hostName == "")
        {
        errorMsg += "Enter a valid host name.";
        errorFlag = true;
        }
    
    /* Check to allow a - z, 0-9, .(dot) and -(hyphen) only */
    if (!errorFlag)
        {
        for (i = 0; i < hostName.length; i++)
            {
            if ((hostName.charCodeAt (i) >= 97 && hostName.charCodeAt (i) <= 122) ||
                (hostName.charCodeAt (i) >= 48 && hostName.charCodeAt (i) <= 57) || 
                (hostName.charCodeAt (i) >= 65 && hostName.charCodeAt (i) <= 90) ||
                hostName.charAt (i) == "." || hostName.charAt (i) == "-" || hostName.charAt (i) == "_")
			     errorFlag = false;
			else
			    {
			    errorMsg += "Only a-z, A-Z, 0-9, .(dot), _(underscore) and -(hyphen) characters are allowed"
			    errorFlag = true;
			    break;
			    }
			}
        }
    
    /* Other Check */
    if (!errorFlag)
        {
        if (hostName.length > 255)
            {
            errorMsg += "Host Name length should not exceed 255 characters";
            errorFlag = true;
			}
        else if (hostName.charAt (0) == "-" || hostName.charAt (0) == ".")
            {
            errorMsg += "Host Name should not start with .(dot) / -(hyphen)";
            errorFlag = true;
            }
        else if (hostName.charAt (hostName.length-1) == "-" || hostName.charAt (hostName.length-1) == ".")
            {
            errorMsg += "Host Name should not end with .(dot) / -(hyphen)";
            errorFlag = true;
            }
        else if (hostName.indexOf (".") != -1)
            {
            var lblsArray = hostName.split (".");
            for (i = 0; i < lblsArray.length; i++)
                if (lblsArray[i].length == 0)
                    {
                    errorMsg += "Empty lables(i.e. xxxx..xxxx) are not allowed";
                    errorFlag = true;
                    break;
                    }
                else if (lblsArray[i].length > 63)
                    {
                    errorMsg += "Each Lable length should not exceed 63 characters";
                    errorFlag = true;
                    break;
                    }
            }
        }
    
    if (errorFlag)
        {
        if (document.getElementById (hostNameObj.id + "Err"))
            document.getElementById (hostNameObj.id + "Err").innerHTML = errorMsg;
        else
            alert (errorMsg);
            hostNameObj.focus ();
            return false;
        }
    
    if (document.getElementById (hostNameObj.id + "Err"))
        document.getElementById (hostNameObj.id + "Err").innerHTML = "";
    return true;
    }	
    
/* For Text Area max length check */
function maxLimitReached(textAreaId, maxLength, errorMsg)
    {
    var textAreaObj = document.getElementById(textAreaId);
    var maxLength = maxLength;
    var errorMsg = errorMsg;
    var textAreaVal = textAreaObj.value;
    if (textAreaVal.length > maxLength)
        {
        alert(errorMsg + "Max limit is " + maxLength + " characters only.");
        textAreaObj.focus();
        return false;
        }
    return true;
    }    
    
/***********************************************************************
* checkHostName1 - checks for a valid host name
*   
* This routine checks for valid host name and 
* return true,
* if value is a valid host name
* else returns false
*
* RETURNS: TRUE or FALSE
*/

function checkHostName1 (fieldId, errorFlag, customMsg, emptyFlag) 
	{
	var errDisplayField = document.getElementById (fieldId + "Err"); 
 	if (errDisplayField) errDisplayField.innerHTML = ""; 
	var fieldHighliter = document.getElementById(fieldId + "Msg") 
	if (fieldHighliter) fieldHighliter.innerHTML = ""; 
	var fieldObj = document.getElementById(fieldId) 
	if(!fieldObj || fieldObj.disabled) return true; 
	var hostName = fieldObj.value;        
        /* Check if host name Empty */ 
        if (hostName == "" && emptyFlag) return true; 
	        else if (hostName == "") 
	                { 
	                var errMsg = "Please enter a valid Domain/Internet name"; 
	                if (customMsg != "") 
 		                        errMsg = customMsg + errMsg; 
 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 		 
 		                if (errDisplayField) 
 		                        errDisplayField.innerHTML = errMsg; 
 		                else 
 		                        alert (errMsg); 
 		        fieldObj.focus(); 
 		        return false; 
 		                } 
 		 
 	/* Check host name rules */ 
	        var isInvalid = false 
 		        for (var idx = 0; idx < hostName.length; idx++) 
 		                { 
 		                var exceptionChars = "_-."  		                
 		                var charCode = hostName.charCodeAt(idx) 
 		                if (!((charCode >= 97 && charCode <= 122) || 
 		                      (charCode >= 65 && charCode <= 90) || 
 		                      (charCode >= 48 && charCode <= 57) || 
 		                       charCode == exceptionChars.charCodeAt(0) || 
 		                       charCode == exceptionChars.charCodeAt(1) ||
 		                       charCode == exceptionChars.charCodeAt(2) 
 		                     )) 
 		                     { 
 		                     isInvalid = true; 
 		                     break; 
 		                     } 
 		                } 
 		                 
 		        if (isInvalid) 
 		                { 
 		                var errMsg = "Domain/Internet must contain only alphanumeric leters, '.' , '-' and '_'"; 
 		                if (customMsg != "") 
 		                        errMsg = customMsg + errMsg; 
 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 		                if (errDisplayField) 
 		                        errDisplayField.innerHTML = errMsg; 
 		                else 
 		                        alert (errMsg); 
 		        fieldObj.focus(); 
 		                return false; 
 		                } 
 		 
 		        var firstChar = hostName.charCodeAt(0) 
 		        if (!((firstChar >= 97 && firstChar <= 122) || (firstChar >= 65 && firstChar <= 90) || (firstChar >= 48 && firstChar <= 57))) 
 		                { 
 		                var errMsg = "Domain/Internet name must start with only alphanumerical character"; 
 	 		                if (customMsg != "") 
 	 		                        errMsg = customMsg + errMsg; 
 	 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 	 		                if (errDisplayField) 
 	 		                        errDisplayField.innerHTML = errMsg; 
 	 		                else 
 	 		                        alert (errMsg); 
 	 		        fieldObj.focus(); 
 	 		                return false; 
 	 		                } 
 	 		 
 	 		        var lastChar = hostName.charCodeAt(hostName.length-1) 
 	 		        if (!((lastChar >= 97 && lastChar <= 122) || (lastChar >= 65 && lastChar <= 90) || (lastChar >= 48 && lastChar <= 57))) 
 	 		                { 
 	 		                var errMsg = "Domain/Internet must end with only alphanumerical character"; 
 	 		                if (customMsg != "") 
 	 		                        errMsg = customMsg + errMsg; 
 	 		                if (fieldHighliter) fieldHighliter.innerHTML = "*"; 
 	 		                if (errDisplayField) 
 	 		                        errDisplayField.innerHTML = errMsg; 
 	 		                else 
 	 		                        alert (errMsg); 
 	 		        fieldObj.focus(); 
 	 		                return false; 
 	 		                } 
 	 		 
 	 		        return true; 
 		        }
    
