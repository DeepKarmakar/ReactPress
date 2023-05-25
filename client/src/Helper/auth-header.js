import Utilities from "./utilities";

const AuthHeader = () => {
	const getToken = Utilities.getToken();
	if (getToken) {
		return { Authorization: 'Bearer ' + getToken, 'Content-Type': 'application/json', };
	} else {
		return { Authorization: 'Bearer ' + getToken, 'Content-Type': 'application/json', };
	}
}
export default AuthHeader;