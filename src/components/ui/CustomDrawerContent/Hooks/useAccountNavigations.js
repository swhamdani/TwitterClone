import { useNavigation } from '@react-navigation/native'; // Import from @react-navigation/native

export default function useAccountNavigations() {

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return {
    handleSignupPress,
    handleLoginPress,
  };
}