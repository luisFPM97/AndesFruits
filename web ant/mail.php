<?php

error_reporting(E_WARNING);

$variables = array(
	"subject"		=> $_POST["sender_subject"],
	"message"		=> $_POST["sender_message"],
	"name"			=> $_POST["sender_name"],
	"email"			=> $_POST["sender_email"],
);

$conf = array(

	"notification_email" => array(
		"enable"		=> true,

		"to"			=> "xaviergrafc@hotmai.com",
		"to_name"		=> "Your Name",

		"from"			=> "no-reply@hotmail.com",
		"from_name"		=> "subscriber-notifier",

		"subject"		=> "New Message: " . $subject . "",
		"type"			=> "html",
		"message"		=> <<<EOD
	<p>Put here the message body</p>
	<p>
		Email: {EMAIL}<br>
		Subject: {SUBJECT}<br>
		{MESSAGE}
	</p>
EOD
		),

	"autoresponder_email" => array(
		"enable"		=> true,

		"from"			=> "xaviergrafic@hotmail.com",
		"from_name"		=> "Your Name",

		"to"			=> "{EMAIL}",

		"subject"		=> "Thank you for your message",

		"type"			=> "html",
		"message"		=> <<<EOD
	<p>Put here the message body</p>
	<p>
		Email: {EMAIL}<br>
		Subject: {SUBJECT}<br>
		{MESSAGE}
	</p>
EOD
		),

);


## starting the actual code, you have nothing else to configure from this point forward.

	function SendMail() {

		$params = AStripSlasshes(func_get_args());	
		//check to see the numbers of the arguments

		switch (func_num_args()) {
			case 1:
				$email = $params[0];
				$vars = array();
			break;

			case 2:
				$email = $params[0];
				$vars = $params[1];
			break;

			case 3:
				$to = $params[0];
				$email = $params[1];
				$vars = $params[2];
			break;

			case 4:
				$to = $params[0];
				$to_name = $params[1];
				$email = $params[2];
				$vars = $params[3];
			break;
		}
		
		if ($email["email_status"] == 1) {
			return true;
		}		
		
		$msg = new CTemplate(stripslashes($email["email_body"]) , "string");
		$msg = $msg->Replace($vars);

		$sub = new CTemplate(stripslashes($email["email_subject"]) , "string");
		$sub = $sub->Replace($vars);

		$email["email_from"] = new CTemplate(stripslashes($email["email_from"]) , "string");
		$email["email_from"] = $email["email_from"]->Replace($vars);

		$email["email_from_name"] = new CTemplate(stripslashes($email["email_from_name"]) , "string");
		$email["email_from_name"] = $email["email_from_name"]->Replace($vars);

		if (!$email["email_reply"]) 
			$email["email_reply"] = $email["email_from"];
		if (!$email["email_reply_name"]) 
			$email["email_reply_name"] = $email["email_from_name"];
		

		//prepare the headers
		$headers  = "MIME-Version: 1.0\r\n";

		if ($email["email_type"] == "html")
			$headers .= "Content-type: text/html\r\n";
		else
			$headers .= "Content-type: text/plain\r\n";
		
		

		//prepare the from fields
		if (!$email["email_hide_from"]) {
			$headers .= "From: {$email[email_from_name]}<{$email[email_from]}>\r\n";
			$headers .=	"Reply-To: {$email[email_reply_name]}<{$email[email_reply]}>\r\n";
		}

		$headers .= $email["headers"];
		
		if (!$email["email_hide_to"]) {
			return @mail($email["email_to"] , $sub, $msg,$headers);		
		} else {
		}

		$headers .=	"X-Mailer: PHP/" . phpversion();

		return mail($to, $sub, $msg,$headers);				
	} 

	function AStripSlasshes($array) {
		if (is_array($array))		
			foreach ($array as $key => $item)
				if (is_array($item)) 
					$array[$key] = AStripSlasshes($item);
				else		
					$array[$key] = stripslashes($item);
		else
			return stripslashes($array);
		
		return $array;
	}

$_TSM = array();


class CTemplate {
	/**
	* template source data
	*
	* @var string
	*
	* @access private
	*/
	var $input;

	/**
	* template result data
	*
	* @var string
	*
	* @access public
	*/
	var $output;

	/**
	* template blocks if any
	*
	* @var array
	*
	* @access public
	*/
	var $blocks;

	/**
	* constructor which autoloads the template data
	*
	* @param string $source			source identifier; can be a filename or a string var name etc
	* @param string $source_type	source type identifier; currently file and string supported
	*
	* @return void
	*
	* @acces public
	*/
	function CTemplate($source,$source_type = "file") {
		$this->Load($source,$source_type);
	}

	/**
	* load a template from file. places the file content into input and output
	* also setup the blocks array if any found
	*
	* @param string $source			source identifier; can be a filename or a string var name etc
	* @param string $source_type	source type identifier; currently file and string supported
	*
	* @return void
	*
	* @acces public
	*/
	function Load($source,$source_type = "file") {
		switch ($source_type) {
			case "file":
				$this->template_file = $source;
				// get the data from the file
				$data = GetFileContents($source);
				//$data = str_Replace('$','\$',$data);
			break;
			
			case "rsl":
			case "string":
				$data = $source;
			break;
		}


		// blocks are in the form of <!--S:BlockName-->data<!--E:BlockName-->
		preg_match_all("'<!--S\:.*?-->.*?<!--E\:.*?-->'si",$data,$matches);

		// any blocks found?
		if (count($matches[0]) != 0)
			// iterate thru `em
			foreach ($matches[0] as $block) {
				// extract block name
				$name = substr($block,strpos($block,"S:") + 2,strpos($block,"-->") - 6);

				// cleanup block delimiters
				$block = substr($block,9 + strlen($name),strlen($block) - 18 - strlen($name) * 2);

				// insert into blocks array
				$this->blocks["$name"] = new CTemplate($block,"string");
			}

		// cleanup block delimiters and set the input/output
		$this->input = $this->output = preg_replace(array("'<!--S\:.*?-->(\r\n|\n|\n\r)'si","'<!--E\:.*?-->(\r\n|\n|\n\r)'si"),"",$data);
	}

	/**
	* replace template variables w/ actual values
	*
	* @param array $vars	array of vars to be replaced in the form of "VAR" => "val"
	* @param bool $clear	reset vars after replacement? defaults to TRUE
	*
	* @return string the template output
	*
	* @acces public
	*/
	function Replace($vars,$clear = TRUE) {
		if (is_array($vars)) {
			foreach ($vars as $key => $var) {
				if (is_array($var)) {
					unset($vars[$key]);
				}				
			}			
		}
		
		// init some temp vars
		$patterns = array();
		$replacements = array();

		// build patterns and replacements
		if (is_array($vars))
			// just a small check		
			foreach ($vars as $key => $val) {
				$patterns[] = "/\{" . strtoupper($key) . "\}/";

				//the $ bug
				$replacements[] = str_replace('$','\$',$val);
			}

		// do regex		
		$result = $this->output = @preg_replace($patterns,$replacements,$this->input);

		// do we clear?
		if ($clear == TRUE)
			$this->Clear();

		// return output
		return $result;
	}

	function SepReplace($ssep , $esep , $vars,$clear = TRUE) {
		if (is_array($vars)) {
			foreach ($vars as $key => $var) {
				if (is_array($var)) {
					unset($vars[$key]);
				}				
			}			
		}
		
		// init some temp vars
		$patterns = array();
		$replacements = array();

		// build patterns and replacements
		if (is_array($vars))
			// just a small check		
			foreach ($vars as $key => $val) {
				$patterns[] = $ssep . strtoupper($key) . $esep;

				//the $ bug
				$replacements[] = str_replace('$','\$',$val);
			}

		// do regex		
		$result = $this->output = @preg_replace($patterns,$replacements,$this->input);

		// do we clear?
		if ($clear == TRUE)
			$this->Clear();

		// return output
		return $result;
	}

	/**
	* replace a single template variable
	*
	* @param string $var	variable to be replaced
	* @param string $value	replacement
	* @param bool $perm		makes the change permanent [i.e. replaces input also]; defaults to FALSE
	*
	* @return string result of replacement
	*
	* @acces public
	*/
	function ReplaceSingle($var,$value,$perm = FALSE) {

		if ($perm)
			$this->input = $this->Replace(array("$var" => $value));
		else		
			return $this->Replace(array("$var" => $value));
	}

	/**
	* resets all the replaced vars to their previous status
	*
	* @return void
	*
	* @acces public
	*/
	function Clear() {
		$this->output = $this->input;
	}

	/**
	* voids every template variable
	*
	* @return void
	*
	* @acces public
	*/
	function EmptyVars() {
		global $_TSM;

		//$this->output = $this->ReplacE($_TSM["_PERM"]);
		//return$this->output = preg_replace("'{[A-Z]}'si","",$this->output);
		return $this->output = preg_replace("'{[A-Z_\-0-9]*?}'si","",$this->output);
		//return $this->output = preg_replace("'{[\/\!]*?[^{}]*?}'si","",$this->output);
	}

	/**
	* checks if the specified template block exists
	*
	* @param string	$block_name	block name to look for
	*
	* @return bool TRUE if exists or FALSE if it doesnt
	*
	* @access public
	*/
	function BlockExists($block_name) {
		return isset($this->blocks[$block_name]) && is_object($this->blocks[$block_name])? TRUE : FALSE;

	}

/*
	function Block($block,$vars = array(),$return_error = false) {
		if ($this->BlockExists($block))
			return $this->blocks[$block]->Replace($vars);
		else {
			return "";
		}

				
	}
*/

	/*Extra functions to keep the compatibility with the new CTemplateDynamic library*/

	/**
	* description
	*
	* @param
	*
	* @return
	*
	* @access
	*/
	function BlockReplace($block , $vars = array(), $clear = true){
		if (!is_object($this->blocks[$block]))
			echo "CTemplate::{$this->template_file}::$block Doesnt exists.<br>";
		
		return $this->blocks[$block]->Replace($vars , $clear);
	}

	/**
	* description
	*
	* @param
	*
	* @return
	*
	* @access
	*/
	function BlockEmptyVars($block , $vars = array(), $clear = true) {
		if (!is_object($this->blocks[$block]))
			echo "CTemplate::{$this->template_file}::$block Doesnt exists.<br>";

		if (is_array($vars) && count($vars))
			$this->blocks[$block]->Replace($vars , false);
		
		return $this->blocks[$block]->EmptyVars();
	}
	
	/**
	* description
	*
	* @param
	*
	* @return
	*
	* @access
	*/
	function Block($block) {
		if (!is_object($this->blocks[$block]))
			echo "CTemplate::{$this->template_file}::$block Doesnt exists.<br>";

		return $this->blocks[$block]->output;
	}
	
	
}


/**
* description
*
* @library	
* @author	
* @since	
*/
class CTemplateStatic{
	/**
	* description
	*
	* @param
	*
	* @return
	*
	* @access
	*/
	
	/**
	* description
	*
	* @param
	*
	* @return
	*
	* @access
	*/
	function Replace($tmp , $data = array()) {
		$template = new CTemplate($tmp , "string");
		return $template->replace($data);
	}

	function EmptyVars($tmp , $data = array()) {
		$template = new CTemplate($tmp , "string");

		if (count($data)) {
			$template->replace($data , false);
		}
		
		return $template->emptyvars();
	}

	/**
	* description
	*
	* @param
	*
	* @return
	*
	* @access
	*/
	function ReplaceSingle($tmp , $var , $value) {
		return CTemplateStatic::Replace(
			$tmp , 
			array(
				$var => $value
			)
		);
	}
	
	
}


header("Content-Type: text/xml");

if (!$variables["email"]) {
	echo "<response><message>error</message></response>";
	die();
} 

if(!preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/",$variables["email"])){
	echo "<response><message>error</message></response>";
	die("");
}


//check if the notification should be sent
if ($conf["notification_email"]["enable"] == true) {

	$vars = $variables;

	foreach ($conf["notification_email"] as $key => $val) {
		$conf["notification_email"][$key] = CTemplateStatic::Replace($val , $vars);
	}

	//process the notify email
	$email = array(
		"email_to"			=> utf8_decode($conf["notification_email"]["to"]),
		"email_to_name"		=> utf8_decode($conf["notification_email"]["to_name"]),

		"email_from"		=> utf8_decode($conf["notification_email"]["from"]),
		"email_from_name"	=> utf8_decode($conf["notification_email"]["from_name"]),

		"email_subject"		=> utf8_decode($conf["notification_email"]["subject"]),
		"email_body"		=> utf8_decode($conf["notification_email"]["message"]),
		"email_type"		=> utf8_decode($conf["notification_email"]["type"])
	);

	foreach ($email as $key => $val) {
		$email[$key] = CTemplateStatic::Replace($val , $vars);
	}

	SendMail($email);
}

//check if the notification should be sent
if ($conf["autoresponder_email"]["enable"] == true) {
	$vars = $variables;

	foreach ($conf["autoresponder_email"] as $key => $val) {
		$conf["autoresponder_email"][$key] = CTemplateStatic::Replace($val , $vars);
	}

	//process the notify email
	$email = array(
		"email_to"			=> utf8_decode($conf["autoresponder_email"]["to"]),
		"email_to_name"		=> utf8_decode($conf["autoresponder_email"]["to_name"]),

		"email_from"		=> utf8_decode($conf["autoresponder_email"]["from"]),
		"email_from_name"	=> utf8_decode($conf["autoresponder_email"]["from_name"]),

		"email_subject"		=> utf8_decode($conf["autoresponder_email"]["subject"]),
		"email_body"		=> utf8_decode($conf["autoresponder_email"]["message"]),
		"email_type"		=> utf8_decode($conf["autoresponder_email"]["type"])
	);

	foreach ($email as $key => $val) {
		$email[$key] = CTemplateStatic::Replace($val , $vars);
	}

	SendMail($email);
}

echo "<response><message>sent</message></response>";
die();

?>