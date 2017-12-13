<html>
<head>
<meta http-equiv="Content-Language" content="en-us" /><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><link rel="icon" type="image/ico" href="images/favicon.ico">
<title>NETGEAR ProSafe&#8482; - NETGEAR Configuration Manager Login</title>
<!--
Copyright (c) 2005-2010 TeamF1, Inc. (www.TeamF1.com)
All rights reserved.
-->
<link href="images/style.css" rel="stylesheet" type="text/css">
<script language="JavaScript" src="js/mgmt.js" type="text/javascript"></script>
<script language="JavaScript" src="js/textValidations.js" type="text/javascript"></script>
<script language="JavaScript" src="js/macValidations.js" type="text/javascript"></script>
<script language="JavaScript" type="text/javascript">
<!--
function loginValidate ()
    {
     /* L10N Error Message Collection Start */
    var errMsgL10n1 = 'Please enter a valid user name';
    var errMsgL10n2 = 'Please enter a valid password';
    var errMsgObjL10n = document.getElementById ('hd.validUnameName');
    if (errMsgObjL10n) errMsgL10n1 = errMsgObjL10n.value;
    errMsgObjL10n = document.getElementById ('hd.validPass');
    if (errMsgObjL10n) errMsgL10n2 = errMsgObjL10n.value;
    /* L10N Error Message Collection Start */

    var txtFieldIdArr = new Array ();
    txtFieldIdArr[0] = "txtUserName,"+ errMsgL10n1;
    txtFieldIdArr[1] = "txtPwd,"+ errMsgL10n2;
    if (txtFieldArrayCheck (txtFieldIdArr) == false)
         return false;
  	if (document.getElementById ('hdUserAgent'))
		document.getElementById ('hdUserAgent').value = navigator.userAgent;
   return true;
       
    if (isProblemCharArrayCheck (txtFieldIdArr) == false)
         return false;
    return true;
    }
function loginInit ()
	{
	var usrObj = document.getElementById ('txtUserName');
	if (!usrObj) return;
	usrObj.focus ();
	}
//-->
</script>
<script language="JavaScript" src="js/menu.js" type="text/javascript"></script>
</head>

<body class="global" onload="loginInit ()">
<div align="center">
	<div class="forBgs">
		<div class="forBgsH2">
&nbsp;</div>
		<div class="forBgsH1">
			NETGEAR ProSafe&#8482; Gigabit 8 Port VPN Firewall FVS318N</div>
		<div class="forBgsM10">
&nbsp;</div>
		<div class="forBgsM2">
&nbsp;</div>
	</div>
</div>

<div align="center">
	<div class="w774 bg0">
		<div class="w20 floatLeft">
&nbsp;</div>
		<!-- active tab1 start-->
		<div class="floatLeft wAuto">
			<div class="tab0br">
				<div class="tab0bl">
					<div class="tab0tr">
						<div class="tab0tl">
							<div class="tab">
								Login</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w1 floatLeft">
			<img border="0" src="images/_pixel.gif"></div>
		<!-- active end -->
		<div class="w10 floatRight">
&nbsp;</div>
		<div>
&nbsp;</div>
	</div>
	<!-- mid body start -->
	<div class="bg0 w774">
		<div class="w754">
			<div class="midTopbr">
				<div class="midTopbl">
					<div class="midToptr">
						<div class="midToptl">
							<div class="midTopBotBg">
&nbsp;</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg0 w774">
		<div class="midBorders">
			<div class="midBg">
				<!-- mid area start -->
				<table border="0" cellpadding="0" cellspacing="0" width="400">
					<!-- form start -->
					<form method="post" action="platform.cgi">
					<input type="hidden" name="thispage" value="index.htm">
						<!-- single section start-->
						<tr>
							<td>
							<div class="errorNew" id="lblWarning">User Login Failed for SSLVPN User.</div>
							<div class="secH1Bg">													
							<div class="floatLeft secH1">
								NETGEAR Configuration Manager Login</div>
							<div class="floatRight helpLink">
								<a href="JavaScript:help('platform.cgi?page=helpIndex.htm')" title="Help">
								Help</a> </div>
								</div>
							</td>
						</tr>
						<tr>
							<td class="secMidBg">
							<table border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td class="lbl1">&nbsp;</td>
									<td class="lbl2">&nbsp;</td>
								</tr>
								<tr>
									<td class="lbl1">&nbsp;</td>
									<td class="lbl2">&nbsp;</td>
								</tr>
								<tr>
									<td class="lbl1">Username:</td>
									<td class="lbl2">
									<input type="text" name="USERDBUsers.UserName" id="txtUserName" size="26" class="txtbox" maxlength="32"></td>
								</tr>
								<tr>
									<td class="lbl1">Password / Passcode:</td>
									<td class="lbl2">
									<input type="password" name="USERDBUsers.Password" id="txtPwd" size="26" class="txtbox" maxlength="32"></td>
								</tr>
								<tr>
									<td class="lbl1">Domain:</td>
									<td class="lbl2">
									<select size="1" name="USERDBDomains.Domainname" class="txtbox">	
																	
									<option value="geardomain">geardomain</option>
																	
									<option value="nlihome">nlihome</option>
																	
									</select></td>
								</tr>
								<tr>
									<td class="lbl1">&nbsp;</td>
									<td class="lbl2">&nbsp;</td>
								</tr>
								<tr>
									<td class="lbl1">&nbsp;</td>
									<td class="lbl2">&nbsp;</td>
								</tr>
							</table>
							</td>
						</tr>
						<tr>
							<td class="secBotBg">
							<div class="floatLeft secBotLeft">
&nbsp;</div>
							<div class="floatRight secBotRight">
&nbsp;</div>
							</td>
						</tr>
						<!-- single section end -->
						<!-- submit start -->
						<tr>
							<td class="alignC">
							<input type="submit" value="Login" class="applyReset" title="Login" name="button.login.USERDBUsers.router_status" onclick="return loginValidate ()"><input type="reset" value="Reset" class="applyReset" title="Reset"></td>
						</tr>
						<!-- submit end -->
						<input type="hidden" name="Login.userAgent" id="hdUserAgent">
					</form>
					<!-- form end -->					
				</table>
			</div>
		</div>
	</div>
	<div class="bg0 w774">
		<div class="w754">
			<div class="midBotbr">
				<div class="midBotbl">
					<div class="midBottr">
						<div class="midBottl">
							<div class="midTopBotBg">
&nbsp;</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- main area end -->
	<!-- footer begin -->
	<div align="center">
<div class="forBgsFooter">2014 &#169; Copyright NETGEAR&#174;</div>
</div>
</div>
</body>
</html>

