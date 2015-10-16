[![Stories in Ready](https://badge.waffle.io/brawnyelectron/vi.png?label=ready&title=Ready)](https://waffle.io/brawnyelectron/vi)
# vi

##API Interface

The API for Vi lives at [Vi API](http://viapi.io). You can interact with it using the following routes:

* '/viauth' - This is used for authentication of master app calls. The authentication token for this will be used on every application. This ensures api requests are coming from installed applications or from a dev environment standpoint. Production application API keys will be hidden in the environment variables. For access to test environment, use the following credentials:
..* Username: ViDeveloper
..* Password: ###########
These must be passed in as parameters to calls to the '/viauth' API. It is best to do this call on applicationDidFinishLoading in Objective-C or viewDidMount in React Native. This will then give you a session to indicate all api calls from the current application environment are authenticated.
