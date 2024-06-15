import * as keychain from "react-native-keychain";

export const tokenStorage = async (token: string) => {
  try {
    await keychain.setGenericPassword('token', token);
  } catch (error) {
    console.error('Keychain error:', error);
  }
};

export const getToken = async () => {
  try {
    const credentials = await keychain.getGenericPassword();
    if (credentials) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Keychain error:', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await keychain.resetGenericPassword();
  } catch (error) {
    console.error('Keychain error:', error);
  }
};
