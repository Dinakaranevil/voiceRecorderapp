import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet ,Picker,Image} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      age: '',
    };
  }
  
  onLogin() {
    const { name, age } = this.state;

    Alert.alert('Credentials', `${name} + ${age}`);
  }

  render() {
    return (
      <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require('')}
      />
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.age}
          onChangeText={(age) => this.setState({age})}
          placeholder={'Age'}
        
          style={styles.input}
        />
         <Picker
          selectedValue={this.state.hand}
          onValueChange={hand => this.setState({ hand })}
          style={styles.input}

          mode="dropdown"
          itemStyle={{ color:'red', fontWeight:'100', fontSize: 18,}}>
          <Picker.Item label="Gender" value="" />
          <Picker.Item label="Male" value="M" />
          <Picker.Item label="Female" value="F" />
          <Picker.Item label="Others" value="O" />
          
        </Picker>
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.props.navigation.push("Profile")}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },
   tinyLogo: {
    width: 50,
    height: 50,
    padding:30,
    marginBottom:10,
  },
});

