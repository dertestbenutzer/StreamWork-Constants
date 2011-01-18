streamwork.module("der.test.benutzer.googlemail.using_constants").methodClient = function (elementId, initialData) 
{
    var div = null;    
	var runningHTML = "";
	var allParticipants = null;
    var singleParticipantHTML = "";		
	
	//This method builds a running string of HTML to demonstrate the application of all built in StreamWork constants
	runningHTML = "<table name=\"Constants\" border=\"0\" style=\"width: 500px\">" +
           			"    <tr>" +
           			"       <td><b>New unique ID:</b></td>" +
					"		<td>" + streamwork.generateUniqueId() + "</td></tr>" + 		
           			"    <tr>" +
					"	 	<td><b>Current user ID:</b></td>" +
					"		<td>" + streamwork.getViewerId() + "</td></tr>" +
           			"    <tr>" +
					"	 	<td><b>Current activity owner's ID:</b></td>" +
					"		<td>" + streamwork.getActivityOwnerId() + "</td></tr>" +					
           			"    <tr>" +
					"	 	<td><b>Is activity read-only:</b></td>" +
					"		<td>" + streamwork.isActivityReadOnly() + "</td></tr>" +           			
					"    <tr>" +
					"       <td><br></td>" +
					"       <td><br></td></tr>" +
					"    <tr> " +
					"	 	<td><b>All participants for this activity</b></td>" +
					"		<td></td></tr>" + 
					"    </tr>";
	
	
	allParticipants = streamwork.getParticipants();
	
	for(i=0; i < allParticipants.length; i++)
	{	    
		singleParticipantHTML = "<tr><td><b>Participant name:</b></td><td>" + allParticipants[i].getDisplayName() + "</td></tr>" + 		
		"<tr><td><b>Participant UUID:</b></td><td>" + allParticipants[i].getId() + "</td></tr>" +
		"<tr><td><b>Participant thumbnail:</b></td><td><img src=\"" + allParticipants[i].getThumbnailUrl() + "\"/></td></tr>";				
		runningHTML = runningHTML + singleParticipantHTML + "<tr><td><br></td><td><br></td></tr>"; 															
	}	
	
	//Completed our running string of HTML. Commit this to our display area's innerHTML property.
	div = document.getElementById(elementId);
	div.innerHTML = runningHTML;	          						
	
}
