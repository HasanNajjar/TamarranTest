import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, View } from 'react-native';
import { Form } from './components/Form';
import { Appearance } from 'react-native';
import { useState } from 'react';
import { Dropdown } from './components/Dropdown';
import { Datepicker } from './components/Datepicker';

export default function App() {
  const theme = Appearance.getColorScheme()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={theme === 'dark' && isEnabled ? styles.containerDark : styles.container}>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Form />
      <Dropdown />
      <Datepicker />
      <StatusBar style="auto" />
    </View>
  );
}

// For dark mode, any style changes will have to be placed in stylesheet and we apply a style={} condition
// to determine how it should look like.
// Typically we would do the file checking in each component/file to correctly style both modes.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'gray',
    input: 'red',
    color: 'white',
    label: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
