import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      num1 : 0,
      num2 : 0,
      num3 : 0,
      txt : '0',
      op: ''
    };
  }

    press(input){
      var temp = ''
      var ans = 0
    if(input == '1'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'1'});
      }else{
        temp = this.state.txt+'1'
        this.setState({txt:temp});
      }
    }
    else if(input == '2'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'2'});
      }else{
        temp = this.state.txt+'2'
        this.setState({txt:temp});
      }
    }
    else if(input == '3'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'3'});
      }else{
        temp = this.state.txt+'3'
        this.setState({txt:temp});
      }
    }
    else if(input == '4'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'4'});
      }else{
        temp = this.state.txt+'4'
        this.setState({txt:temp});
      }
    }
    else if(input == '5'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'5'});
      }else{
        temp = this.state.txt+'5'
        this.setState({txt:temp});
      }
    }
    else if(input == '6'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'6'});
      }else{
        temp = this.state.txt+'6'
        this.setState({txt:temp});
      }
    }
    else if(input == '7'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'7'});
      }else{
        temp = this.state.txt+'7'
        this.setState({txt:temp});
      }
    }
    else if(input == '8'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'8'});
      }else{
        temp = this.state.txt+'8'
        this.setState({txt:temp});
      }
    }
    else if(input == '9'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'9'});
      }else{
        temp = this.state.txt+'9'
        this.setState({txt:temp});
      }
    }
    else if(input == '0'){
      if(this.state.txt == '0' || this.state.txt == ''){
        this.setState({txt:'0'});
      }else{
        temp = this.state.txt+'0'
        this.setState({txt:temp});
      }
    }
    else if(input == 'AC'){
      this.setState({num1:0})
      this.setState({num2:0})
      this.setState({txt:'0'})
    }
    else if(input=='+'){
      temp = this.state.txt;
      this.setState({num1:Number(temp)})
      this.setState({op:'+'})
      this.setState({txt:''})
    }
    else if(input=='-'){
      temp = this.state.txt;
      this.setState({num1:Number(temp)})
      this.setState({op:'-'})
      this.setState({txt:''})
    }
    else if(input=='x'){
      temp = this.state.txt;
      this.setState({num1:Number(temp)})
      this.setState({op:'x'})
      this.setState({txt:''})
    }
    else if(input=='/'){
      temp = this.state.txt;
      this.setState({num1:Number(temp)})
      this.setState({op:'/'})
      this.setState({txt:''})
    }
    else if(input=='='){
      var a = this.state.num1;
      var b = Number(this.state.txt);
      temp = this.state.op;
      if(temp == '+'){
        this.setState({txt:String(a+b)})
      }
      if(temp == '-'){
        this.setState({txt:String(a-b)})
      }
      if(temp == 'x'){
        this.setState({txt:String(a*b)})
      }
      if(temp == '/'){
        this.setState({txt:String(a/b)})
      }

      this.setState({op:''})
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:4,backgroundColor:'black',justifyContent:'center',
        alignItems:'flex-end'}}>
        <Text style={{fontSize:100,color:'white'}}>{this.state.txt}</Text>
        </View>
        <View style={{flex:7,flexDirection:'row'}}>
          <View style={{flex: 3}}>
            <View style={{flex:1,backgroundColor :'black',flexDirection:'row'}}>
              <TouchableOpacity style={styles.btn1} onPress={()=>this.press('AC')}>
                <Text style={{fontSize:20,color:'black'}}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1}>
                <Text style={{fontSize:20,color:'black'}}>+/-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn1}>
                <Text style={{fontSize:20,color:'black'}}>%</Text>
              </TouchableOpacity>
            </View>

            <View style={{flex:3,backgroundColor:'black'}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('7')}>
                  <Text style={styles.textnum}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('8')}>
                  <Text style={styles.textnum}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('9')}>
                  <Text style={styles.textnum}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('4')}>
                  <Text style={styles.textnum}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('5')}>
                  <Text style={styles.textnum}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('6')}>
                  <Text style={styles.textnum}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('1')}>
                  <Text style={styles.textnum}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('2')}>
                  <Text style={styles.textnum}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnnum} onPress={()=>this.press('3')}>
                  <Text style={styles.textnum}>3</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:2,backgroundColor:'black'}}>
                <TouchableOpacity style={styles.btn0} onPress={()=>this.press('0')}>
                  <Text style={{fontSize:30,color:'white'}}>  0</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex:1,backgroundColor :'black'}}>
                <TouchableOpacity style={styles.btn3}>
                  <Text style={{fontSize:30,color:'white'}}>,</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex:1,backgroundColor :'black'}}>
            <TouchableOpacity style={styles.btn2} onPress={()=>this.press('/')}>
              <Text style={styles.textop}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={()=>this.press('x')}>
              <Text style={styles.textop}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={()=>this.press('-')}>
              <Text style={styles.textop}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={()=>this.press('+')}>
              <Text style={styles.textop}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} onPress={()=>this.press('=')}>
              <Text style={styles.textop}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  btn3:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#414345',
      padding:5,
      margin:10,
      borderRadius: 100,
  },
  btn0:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#414345',
      padding:5,
      margin:10,
      borderRadius: 100,
      alignItems:'flex-start'
  },
  btnnum:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#414345',
      padding:5,
      margin:10,
      borderRadius: 100
  },
  btn1:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#E9E4F0',
      padding:5,
      margin:10,
      borderRadius: 100
  },
  textop:{
    fontSize:30,
    color:'black'
  },
  textnum:{
    fontSize:30,
    color:'white'
  },
  btn2:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#FFE000',
      margin:10,
      padding:5,
      borderRadius: 100
  }
  
});
