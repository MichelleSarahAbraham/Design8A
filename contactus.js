function validateForm(){
	var name = document.contactus.Name;
	var email = document.contactus.Email;
	var grade = document.contactus.Grade;
	var count = 0;
	if (name.value === "") {
	name.placeholder="Please fill this field";
	name.style.border = "2px solid red";
	count++;
	}
   if (email.value === "") {
	email.placeholder="Please fill this field";
	email.style.border = "2px solid red";
	count++;
	}
	if (grade.value === "") {
	grade.placeholder="Please fill this field";
	grade.style.border = "2px solid red";
	count++;
	}
	if(count>0)
	  return false;
}
