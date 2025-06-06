interface Resources {
  "action": {
    "submit": "Submit",
    "close": "Close",
    "continue": "Continue",
    "prev": "Previous",
    "prev_with_entity_type": "Previous {{entity_type, lowercase}}",
    "next": "Next",
    "next_with_entity_type": "Next {{entity_type, lowercase}}",
    "download": "Download",
    "export": "Export",
    "import": "Import",
    "send": "Send",
    "send.success_message": "Send {{entity_type, lowercase}} successfully.",
    "send.success_message_raw": "Send {{entity_type}} successfully.",
    "save_draft": "Save draft",
    "save": "Save",
    "save_with_entity_type": "Save {{entity_type, lowercase}}",
    "save.success_message": "The changes have been saved for {{target_name}} {{entity_type, lowercase}}.",
    "save.success_message_raw": "The changes have been saved for {{target_name}} {{entity_type}}.",
    "upload": "Upload",
    "upload_with_entity_type": "Upload {{entity_type, lowercase}}",
    "empty": "Empty",
    "cancel": "Cancel",
    "cancel_with_entity_type": "Cancel {{entity_type, lowercase}}",
    "join": "Join",
    "join_with_entity_type": "Join {{entity_type, lowercase}}",
    "select": "Select",
    "select_with_entity_type": "Select {{entity_type, lowercase}}",
    "select_all": "Select all",
    "search": "Search",
    "search_with_entity_type": "Search by {{entity_type, lowercase}}",
    "create": "Create",
    "create_with_entity_type": "Create {{entity_type, lowercase}}",
    "create_with_entity_type_raw": "Create {{entity_type}}",
    "create.success_message": "Successfully created the {{target_name}} {{entity_type, lowercase}}.",
    "create.success_message_raw": "Successfully created the {{target_name}} {{entity_type}}.",
    "edit": "Edit",
    "edit.title": "Edit {{entity_type, lowercase}}",
    "edit.success_message": "Successfully updated {{entity_type, lowercase}} for {{target_name}}.",
    "delete": "Delete",
    "delete_with_entity_type": "Delete {{entity_type, lowercase}}",
    "delete.confirm_title": "Delete {{entity_type, lowercase}}?",
    "delete.confirm_content": "Are you sure you want to delete {{entity_type, lowercase}} \"{{target_name}}\"? This can't be undone",
    "delete.success_message": "Successfully deleted the {{target_name}} {{entity_type, lowercase}}.",
    "delete.success_message_raw": "Successfully deleted the {{target_name}} {{entity_type}}.",
    "add": "Add",
    "add_with_entity_type": "Add {{entity_type, lowercase}}",
    "add.success_message": "Successfully added {{entity_type, lowercase}} {{target_name}}.",
    "add.success_message_just_with_entity_type": "Successfully added {{entity_type, lowercase}}.",
    "remove": "Remove",
    "remove_with_entity_type": "Remove {{entity_type, lowercase}}",
    "remove.confirm_title": "Remove {{entity_type, lowercase}}?",
    "remove.confirm_content": "Are you sure you want to remove \"{{entity_name}}\" {{entity_type, lowercase}} from this {{target_entity_type, lowercase}}?",
    "move": "Move",
    "move_with_entity_type": "Move {{entity_type, lowercase}}",
    "apply": "Apply",
    "apply_with_entity_type": "Apply {{entity_type, lowercase}}",
    "apply.success_message": "Successfully applied {{entity_type, lowercase}} {{target_name}}.",
    "leave": "Leave",
    "leave_with_entity_type": "Leave {{entity_type, lowercase}}",
    "leave.success_message": "Successfully left {{target_name}} {{entity_type, lowercase}}.",
    "switch": "Switch",
    "switch_with_entity_type": "Switch {{entity_type, lowercase}}",
    "back": "Back",
    "back_with_entity_type": "Back to {{entity_type, lowercase}}",
    "back_with_entity_type_raw": "Back to {{entity_type}}",
    "view_details": "View details",
    "grant": "Grant",
    "grant_with_entity_type": "Grant {{entity_type, lowercase}}",
    "grant.success_message": "Successfully granted {{entity_type, lowercase}} {{target_name}}.",
    "grant.success_message_just_with_entity_type": "Successfully added {{entity_type, lowercase}}.",
    "revoke": "Revoke",
    "revoke.confirm_title": "Revoke {{entity_type, lowercase}}?",
    "revoke.confirm_content": "Are you sure you want to revoke {{target_entity_type, lowercase}} from {{entity_type, lowercase}} \"{{entity_name}}\"?",
    "revoke.success_message": "Successfully revoked the {{entity_type, lowercase}} for {{target_name}}.",
    "assign": "Assign",
    "assign_with_entity_type": "Assign {{entity_type, lowercase}}",
    "assign_with_target_entity_type": "Assign {{entity_name}} {{entity_type, lowercase}} to {{target_entity_type, lowercase}}",
    "assign.success_message": "Successfully assigned {{entity_type, lowercase}} {{target_name}}.",
    "assign.success_message_just_with_entity_type": "Successfully assigned {{entity_type, lowercase}}.",
    "test": "Test",
    "test_with_entity_type": "Test {{entity_type, lowercase}}"
  },
  "bkd.doctor": {
    "doctor": "Doctor",
    "id": "ID",
    "id_long": "Doctor ID",
    "user_id": "User ID",
    "user_id.extra": "The unique identifier of the user, usually auto-generated by the system.",
    "hospital_id": "Hospital ID",
    "hospital_id.extra": "The ID of the hospital the doctor is affiliated with.",
    "title": "Title",
    "title.extra": "The professional title or degree of the doctor (e.g., Dr., PhD).",
    "specialties": "Specialties",
    "specialties.extra": "Medical specialties or fields the doctor practices in (e.g., Neurology, General Surgery).",
    "education": "Education",
    "education.extra": "Academic background and degrees obtained by the doctor.",
    "experience": "Experience",
    "experience.extra": "Years of experience and previous positions held by the doctor.",
    "member_of": "Member of",
    "member_of.extra": "Medical associations or organizations the doctor is a member of.",
    "publications": "Publications",
    "publications.extra": "Scientific articles or research papers the doctor has published.",
    "profile_picture": "Profile picture",
    "profile_picture.extra": "The doctor's profile image displayed in their public profile.",
    "bio": "Bio",
    "bio.extra": "A short biography highlighting the doctor's background, expertise, and professional philosophy."
  },
  "bkd.examination": {
    "examination": "Examniation",
    "examination_other": "Examinations",
    "doctor_id": "Doctor",
    "doctor_id.extra": "Choose the doctor responsible for your diagnosis.",
    "id": "ID",
    "id_long": "Examination ID",
    "email": "Email",
    "email.extra": "Email address to receive diagnostic results",
    "status": "Status",
    "status_id": "Status ID",
    "age": "Age",
    "gender": "Gender",
    "ethnicity": "Ethnicity",
    "education_level": "Education level",
    "bmi": "BMI",
    "smoking": "Smoking",
    "alcohol_consumption": "BM alcohol consumptionI",
    "alcohol_consumption.extra": "Weekly alcohol consumption in units, ranging from 0 to 20.",
    "physical_activity": "Physical activity",
    "physical_activity.extra": "Weekly physical activity in hours, ranging from 0 to 10.",
    "diet_quality": "Diet quality",
    "diet_quality.extra": "Diet quality score, ranging from 0 to 10",
    "sleep_quality": "Sleep quality",
    "sleep_quality.extra": "Sleep quality score, ranging from 4 to 10.",
    "family_history_parkinsons": "Family history Parkinson's",
    "family_history_parkinsons.extra": "Family history of Parkinson's Disease.",
    "traumatic_brain_injury": "Traumatic brain injury",
    "hypertension": "Hypertension",
    "hypertension.extra": "Presence of hypertension",
    "diabetes": "Diabetes",
    "diabetes.extra": "Presence of diabetes.",
    "depression": "Depression",
    "depression.extra": "Presence of depression",
    "stroke": "Stroke",
    "stroke.extra": "History of stroke",
    "systolic_bp": "Systolic BP",
    "systolic_bp.extra": "Systolic blood pressure, ranging from 90 to 180 mmHg.",
    "diastolic_bp": "Diastolic BP",
    "diastolic_bp.extra": "Diastolic blood pressure, ranging from 60 to 120 mmHg.",
    "cholesterol_total": "Total cholesterol",
    "cholesterol_total.extra": "Total cholesterol levels, ranging from 150 to 300 mg/dL.",
    "cholesterol_ldl": "LDL cholesterol",
    "cholesterol_ldl.extra": "Low-density lipoprotein cholesterol levels, ranging from 50 to 200 mg/dL.",
    "cholesterol_hdl": "HDL cholesterol",
    "cholesterol_hdl.extra": "Total cholesterol levels, ranging from 150 to 300 mg/dL.",
    "cholesterol_triglycerides": "Triglycerides",
    "cholesterol_triglycerides.extra": "Triglycerides levels, ranging from 50 to 400 mg/dL.",
    "updrs_score": "UPDRS score",
    "updrs_score.extra": "Unified Parkinson's Disease Rating Scale score, ranging from 0 to 199. Higher scores indicate greater severity of the disease",
    "moca_score": "MoCA score",
    "moca_score.extra": "Montreal Cognitive Assessment score, ranging from 0 to 30. Lower scores indicate cognitive impairment.",
    "functional_assessment": "Functional assessment",
    "functional_assessment.extra": "Functional assessment score, ranging from 0 to 10. Lower scores indicate greater impairment.",
    "tremor": "Tremor",
    "tremor.extra": "Presence of tremor",
    "rigidity": "Rigidity",
    "rigidity.extra": "Presence of muscle rigidity",
    "bradykinesia": "Bradykinesia",
    "bradykinesia.extra": "Presence of bradykinesia (slowness of movement)",
    "postural_instability": "Postural instability",
    "postural_instability.extra": "Presence of postural instability",
    "speech_problems": "Speech problems",
    "speech_problems.extra": "Presence of speech problems",
    "sleep_disorders": "Sleep disorders",
    "sleep_disorders.extra": "Presence of sleep disorders",
    "constipation": "Constipation",
    "constipation.extra": "Presence of constipation",
    "feature": "Feature",
    "value": "Value"
  },
  "bkd.hospital": {
    "hospital": "Hospital",
    "hospital_other": "Hospitals",
    "id": "ID",
    "id_long": "Hospital ID",
    "name": "Name",
    "name.extra": "The official name of the hospital.",
    "description": "Description",
    "description.extra": "A brief summary or overview of the hospital's services and specialties.",
    "address": "Address",
    "address.extra": "The physical location of the hospital.",
    "phone": "Phone",
    "phone.extra": "The primary contact number for the hospital.",
    "email": "Email",
    "email.extra": "The official email address used for communication with the hospital.",
    "website": "Website",
    "website.extra": "The hospital's official website for information and online services.",
    "established": "Established",
    "established.extra": "The year the hospital was founded or began operation."
  },
  "bkd.patient": {
    "patient": "Patient",
    "patient_other": "Patients",
    "id": "ID",
    "id_long": "Patient ID",
    "username": "Username",
    "username.extra": "The unique identifier used for user login.",
    "password": "Password",
    "password.extra": "The secret key used to authenticate the user.",
    "first_name": "First name",
    "first_name.extra": "The user's given name.",
    "last_name": "Last name",
    "last_name.extra": "The user's family name or surname.",
    "email": "Email",
    "email.extra": "The user's email address used for communication and login.",
    "phone": "Phone",
    "phone.extra": "The user's contact phone number.",
    "established": "Established",
    "established.extra": "The year the user or organization was established.",
    "address": "Address",
    "address.extra": "The user's residential or organizational address."
  },
  "bkd.user": {
    "user": "User",
    "username": "Username",
    "username.extra": "The unique identifier used for user login.",
    "password": "Password",
    "password.extra": "The secret key used to authenticate the user.",
    "first_name": "First name",
    "first_name.extra": "The user's given name.",
    "last_name": "Last name",
    "last_name.extra": "The user's family name or surname.",
    "email": "Email",
    "email.extra": "The user's email address used for communication and login.",
    "profile_picture": "Avatar",
    "profile_picture.extra": "The user's profile image used for visual identification across the application.",
    "phone": "Phone",
    "phone.extra": "The user's contact phone number.",
    "established": "Established",
    "established.extra": "The year the user or organization was established.",
    "address": "Address",
    "address.extra": "The user's residential or organizational address.",
    "role": "Role",
    "role.extra": "The user's assigned role in the system for authorization.",
    "role.Doctor": "Doctor",
    "role.Admin": "Admin",
    "role.Patient": "Patient",
    "role.unspecified": "Unspecified role",
    "sign_in": "Sign in",
    "sign_up": "Sign up",
    "forgot_password": "Forgot password?",
    "remember_me": "Remember me",
    "dont_have_account": "Don't have an account?",
    "have_account": "Have an account?",
    "sign_out": "Sign out"
  },
  "common": {
    "total": "Total",
    "total_with_count": "Total: {{count}}",
    "or": "Or",
    "or_lowercase": "or",
    "yes": "Yes",
    "no": "No",
    "page": "Page",
    "empty": "Empty",
    "free": "Free",
    "premium": "Premium",
    "private": "Private",
    "public": "Public",
    "required": "Required",
    "success": "Success",
    "error": "Error",
    "warning": "Warning",
    "info": "Info",
    "all": "All",
    "copied": "Copied",
    "from": "From",
    "to": "To",
    "dont_show_again": "Don't show again",
    "no_data": "No data",
    "date": "Date",
    "order": "Order",
    "day_one": "Day",
    "day_other": "Days",
    "not_found": "Not found",
    "not_found_with_entity_type": "{{entity_type}} not found",
    "showing": "Showing",
    "showing_with_count": "Showing {{count}}",
    "showing_with_total": "Showing {{count}} of {{total}}",
    "filter_tooltip": "This is the total count based on the selected filter"
  },
  "component.page_management_header": {
    "title_tooltip": "More information about features on this page"
  },
  "datetime": {
    "day_one": "Day",
    "day_other": "Days",
    "day_left_one": "Days left",
    "day_left_other": "Days left",
    "day_left_with_count_one": "{{count}} t(day_left, lowercase)",
    "day_left_with_count_other": "{{count}} t(days_left, lowercase)",
    "date": "Date",
    "second_one": "Second",
    "second_other": "Seconds",
    "second_with_count_one": "({{count}}) $t(second_one, lowercase)",
    "second_with_count_other": "({{count}}) $t(second_other, lowercase)"
  },
  "jfw.validation": {
    "url": "\"{{field_name}}\" must be a valid URL.",
    "mixed.required": "\"{{field_name}}\" is not allowed to be empty.",
    "mixed.not_one_of": "\"{{field_name}}\" field must not have the same value as the {{values}} fields.",
    "mixed.one_of": "\"{{field_name}}\" field must have a value that matches one of the following: {{values}}.",
    "string": "\"{{field_name}}\" must be a string.",
    "string.email": "\"{{field_name}}\" must be a valid email.",
    "string.min": "\"{{field_name}}\" length must be at least {{min}} characters long.",
    "string.max": "\"{{field_name}}\" length must be less than or equal to {{max}} characters long.",
    "string.match": "\"{{field_name}}\" must match the following: \"{{regex}}\".",
    "string.url": "\"{{field_name}}\" must be a valid URL.",
    "number": "\"{{field_name}}\" must be a number.",
    "number.min": "\"{{field_name}}\" must be greater than or equal to {{min}}.",
    "number.max": "\"{{field_name}}\" must be less than or equal to {{max}}."
  },
  "pages.common": {
    "detected_user.title": "Sign in with a new account",
    "detected_user.content": "The system detected that you are currently signed in. Do you want to log out and continue with the new account?"
  },
  "pages.doctor.details": {
    "page_meta_title": "Doctor details",
    "tab.details": "Details",
    "tab.details.account_information": "Account information",
    "tab.details.personal_information": "Personal information"
  },
  "pages.doctor.management": {
    "page_meta_title": "Doctors",
    "page_hint": "View and manage doctors."
  },
  "pages.doctor_decision.management": {
    "page_meta_title": "Doctor decision",
    "page_hint": "View and manage doctor decisions."
  },
  "pages.examination.details": {
    "page_meta_title": "Examination details",
    "tab.details": "Details",
    "tab.details.patient_intake": "Patient intake",
    "tab.details.result": "Result"
  },
  "pages.examination.management": {
    "page_meta_title": "Examinations",
    "page_hint": "View and manage examinations."
  },
  "pages.home": {
    "page_meta_title": "Home"
  },
  "pages.hospital.details": {
    "page_meta_title": "Hospital details",
    "tab.details": "Details",
    "tab.details.general_information": "General information"
  },
  "pages.hospital.management": {
    "page_meta_title": "Hospitals",
    "page_hint": "View and manage hospitals."
  },
  "pages.not_found": {
    "page_meta_title": "Not found",
    "not_found": "Page not found",
    "back_to_homepage": "Back to homepage",
    "message": "We're sorry the page you requested could not be found. Please go back to the homepage!",
    "under_construction": "This feature is under maintenance, we will comeback soon!"
  },
  "pages.patient.details": {
    "page_meta_title": "Patient details",
    "tab.details": "Details",
    "tab.details.account_information": "Account information",
    "tab.details.personal_information": "Personal information"
  },
  "pages.patient.management": {
    "page_meta_title": "Patients",
    "page_hint": "View and manage patients."
  },
  "pages.professional_details": {
    "page_meta_title": "Professional details"
  },
  "pages.professionals": {
    "page_meta_title": "Professionals",
    "page_title": "Directory"
  },
  "pages.profile": {
    "profile": "Profile",
    "your_profile": "Your profile"
  },
  "pages.under_construction": {
    "page_meta_title": "Under construction",
    "title": "{{featureName}} feature is under construction",
    "back_to_homepage": "Back to homepage",
    "message": "This feature is under construction, we are working very hard to give you the best experience with this one."
  },
  "sidebar": {
    "getting_started": "Getting started",
    "dashboard": "Dashboard",
    "doctors": "Doctors",
    "patients": "Patients",
    "hospitals": "Hospitals",
    "examinations": "Examinations"
  }
}

export default Resources;
