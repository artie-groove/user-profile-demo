export function postProcessUserProfile(userProfileInfo) {
	userProfileInfo.birthdate = new Date(userProfileInfo.birthdate);
	userProfileInfo.age = Math.floor((Date.now() - userProfileInfo.birthdate) / (1000*60*60*24*365));
	return userProfileInfo;
}