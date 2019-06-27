export function postProcessUserProfile(userProfileInfo)
{
	// Create the Date object
	userProfileInfo.birthdate = new Date(userProfileInfo.birthdate);
	
	// Calculate user's age
	userProfileInfo.age = calculateAge(userProfileInfo.birthdate);
	
	return userProfileInfo;
}

function calculateAge(birthdate) {
	const ageDiffMs = Date.now() - birthdate.getTime();
	const ageDate = new Date(ageDiffMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}