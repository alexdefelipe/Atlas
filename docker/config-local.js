define([], function () {
	var configLocal = {};

	// WebAPI
	configLocal.api = {
		name: 'Local',
		url: 'http://localhost:8090/WebAPI/'
	};

	configLocal.cohortComparisonResultsEnabled = false;
	configLocal.userAuthenticationEnabled = false;
	configLocal.plpResultsEnabled = false;

	return configLocal;
});
